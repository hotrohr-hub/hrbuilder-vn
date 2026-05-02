// Cohort Bridge — Path C của Buổi 4
// Chạy trên VPS GCP e2-micro, poll Firestore mỗi 5 phút,
// spawn Claude CLI cho mỗi routine tới giờ, push Telegram brief.
//
// Pre-req trên VPS:
//   - Node 20+
//   - Claude CLI cài + login với tk Max (claude login)
//   - file service-account.json cùng folder
//   - .env với BOT_TOKEN_FALLBACK (optional)
//
// Run: pm2 start cohort-bridge.js --name bridge

import admin from 'firebase-admin';
import { spawn } from 'child_process';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Init Firebase Admin ─────────────────────────────────────────────
const serviceAccount = JSON.parse(readFileSync(join(__dirname, 'service-account.json'), 'utf8'));
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

// ── Config ──────────────────────────────────────────────────────────
const POLL_INTERVAL_MS = 5 * 60 * 1000; // 5 phút
const MAX_RUN_DURATION_MS = 5 * 60 * 1000; // guardrail timeout 5 phút/CV
const COST_CAP_USD = 0.50; // guardrail $0.50/lần
const LOG_DIR = join(__dirname, 'logs');
const RUNS_DIR = join(__dirname, 'runs');
if (!existsSync(LOG_DIR)) mkdirSync(LOG_DIR, { recursive: true });
if (!existsSync(RUNS_DIR)) mkdirSync(RUNS_DIR, { recursive: true });

const log = (msg, ...rest) => {
  const ts = new Date().toISOString();
  const line = `[${ts}] ${msg} ${rest.map(r => typeof r === 'object' ? JSON.stringify(r) : r).join(' ')}`;
  console.log(line);
  const dayLog = join(LOG_DIR, `${ts.slice(0, 10)}.log`);
  try { writeFileSync(dayLog, line + '\n', { flag: 'a' }); } catch {}
};

// ── Cron schedule parse ──────────────────────────────────────────────
// Schedule format đơn giản: "HH:MM daily" — vd "06:00 daily"
// Trả về true nếu now ≥ next_run + 1 phút buffer
function shouldRunNow(routine, now) {
  if (!routine.next_run) return true; // chưa từng chạy
  const nextRun = routine.next_run.toDate ? routine.next_run.toDate() : new Date(routine.next_run);
  return now >= nextRun;
}

function calcNextRun(schedule, now) {
  // schedule "HH:MM daily" → next time HH:MM (today nếu chưa qua, mai nếu đã qua)
  const m = schedule.match(/^(\d{1,2}):(\d{2})\s*daily$/i);
  if (!m) return new Date(now.getTime() + 24 * 3600 * 1000); // fallback +24h
  const [, hh, mm] = m;
  const next = new Date(now);
  next.setHours(parseInt(hh), parseInt(mm), 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1); // qua giờ → mai
  return next;
}

// ── Spawn Claude CLI run prompt ──────────────────────────────────────
function runClaudeCLI(prompt, routineId) {
  return new Promise((resolve) => {
    const promptFile = join(RUNS_DIR, `${routineId}-${Date.now()}.md`);
    writeFileSync(promptFile, prompt);
    const proc = spawn('claude', ['run', promptFile], { cwd: __dirname, shell: true });

    let stdout = '', stderr = '';
    const timeout = setTimeout(() => {
      log(`[${routineId}] TIMEOUT — killing process`);
      proc.kill('SIGKILL');
      resolve({ ok: false, error: 'timeout', stdout, stderr });
    }, MAX_RUN_DURATION_MS);

    proc.stdout.on('data', d => { stdout += d.toString(); });
    proc.stderr.on('data', d => { stderr += d.toString(); });
    proc.on('close', code => {
      clearTimeout(timeout);
      resolve({ ok: code === 0, code, stdout, stderr });
    });
    proc.on('error', err => {
      clearTimeout(timeout);
      resolve({ ok: false, error: err.message, stdout, stderr });
    });
  });
}

// ── Push Telegram ────────────────────────────────────────────────────
async function pushTelegram(botToken, chatId, text) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const body = { chat_id: chatId, text: text.slice(0, 4000), parse_mode: 'Markdown' };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// ── Process 1 routine ────────────────────────────────────────────────
async function processRoutine(routineDoc) {
  const routine = routineDoc.data();
  const id = routineDoc.id;
  const now = new Date();

  log(`[${id}] Start run "${routine.name || 'unnamed'}"`);

  // Update status running
  await routineDoc.ref.update({ status: 'running', last_attempt: admin.firestore.FieldValue.serverTimestamp() });

  // Compose prompt
  const prompt = routine.prompt || 'Tóm tắt brief HR sáng nay.';

  const start = Date.now();
  const result = await runClaudeCLI(prompt, id);
  const durationMs = Date.now() - start;

  // Save run log to Firestore
  const runLog = {
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    success: result.ok,
    duration_ms: durationMs,
    output_excerpt: (result.stdout || '').slice(0, 2000),
    error: result.error || result.stderr?.slice(0, 500) || null,
  };
  await db.collection('routines').doc(id).collection('runs').add(runLog);

  // Push Telegram nếu thành công + có chat_id
  if (result.ok && routine.telegram_chat_id && routine.telegram_bot_token) {
    const briefText = `🤖 *Daily HR Brief* — ${routine.name || ''}\n\n${result.stdout.slice(0, 3500)}`;
    const tgResult = await pushTelegram(routine.telegram_bot_token, routine.telegram_chat_id, briefText);
    if (!tgResult.ok) log(`[${id}] Telegram fail:`, tgResult);
  }

  // Update next_run, runs_count, status
  const nextRun = calcNextRun(routine.schedule || '06:00 daily', now);
  await routineDoc.ref.update({
    last_run: admin.firestore.FieldValue.serverTimestamp(),
    next_run: nextRun,
    status: result.ok ? 'idle' : 'failed',
    runs_count: admin.firestore.FieldValue.increment(1),
    last_error: result.error || null,
  });

  log(`[${id}] Done in ${(durationMs / 1000).toFixed(1)}s, ok=${result.ok}, next=${nextRun.toISOString()}`);
}

// ── Main poll loop ───────────────────────────────────────────────────
async function tick() {
  const now = new Date();
  log(`Tick @ ${now.toISOString()}`);
  try {
    const snap = await db.collection('routines').where('enabled', '==', true).get();
    const due = [];
    snap.forEach(doc => {
      if (shouldRunNow(doc.data(), now)) due.push(doc);
    });
    log(`Found ${due.length} routine(s) due`);
    // Sequential để không spam Claude Max session
    for (const doc of due) {
      await processRoutine(doc);
    }
  } catch (e) {
    log('Tick ERROR:', e.message);
  }
}

setInterval(tick, POLL_INTERVAL_MS);
tick(); // chạy ngay lần đầu khi start

// ── Health check HTTP server ─────────────────────────────────────────
const app = express();
app.get('/', (_, res) => res.json({ status: 'alive', uptime_s: Math.floor(process.uptime()), poll_interval_ms: POLL_INTERVAL_MS }));
app.get('/healthz', (_, res) => res.json({ ok: true }));
app.listen(process.env.PORT || 3000, () => log(`Bridge HTTP listening on port ${process.env.PORT || 3000}`));

log('Cohort Bridge started.');
