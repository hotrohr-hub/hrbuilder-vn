// Cloudflare Worker — Proxy Gemini cho cohort HR Builder VN.
// Mục đích: học viên Phase A (Buổi 1-3) không cần tự lấy Gemini key.
// Khoá host key của khoá. Có rate limit + quota per-user.
//
// CÁCH DEPLOY:
// 1. Đăng ký Cloudflare Workers free tier (https://workers.cloudflare.com/)
// 2. Workers & Pages → Create → Worker → tên "hr-builder-proxy"
// 3. Paste file này vào editor
// 4. Settings → Variables and Secrets:
//    - GEMINI_KEY (Secret): paste key Gemini của khoá
//    - COHORT_TOKEN (Secret): chuỗi random 32 ký tự (frontend dùng để verify)
// 5. Settings → Triggers → Custom Domain: api.hrbuilder.vn (hoặc subdomain)
// 6. Frontend gọi tới https://api.hrbuilder.vn/gemini với header X-Cohort-Token
//
// QUOTA: 50 request / user / 24h (đủ Phase A 1-3 buổi đầu)
// COST: free tier Cloudflare 100k req/ngày + Gemini 2.5 Flash free tier 1500 req/ngày
// → cohort 30 × 50 = 1500 req/ngày, nằm trong free tier nếu cohort không spam

const QUOTA_PER_USER_PER_DAY = 50;
const RATE_LIMIT_PER_MINUTE = 10;

export default {
  async fetch(request, env, ctx) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Cohort-Token, X-User-Id',
        },
      });
    }

    if (request.method !== 'POST') {
      return jsonError(405, 'Chỉ chấp nhận POST');
    }

    // Verify cohort token (frontend embed sẵn — không phải secret tuyệt đối, mục đích chỉ là filter request không phải từ site khoá)
    const cohortToken = request.headers.get('X-Cohort-Token');
    if (cohortToken !== env.COHORT_TOKEN) {
      return jsonError(403, 'Cohort token không hợp lệ. Bạn không thuộc cohort?');
    }

    // User ID (frontend gửi userId stable từ localStorage hoặc hash của email)
    const userId = request.headers.get('X-User-Id');
    if (!userId || userId.length < 3) {
      return jsonError(400, 'Thiếu X-User-Id');
    }

    // Rate limit + quota check
    const now = Date.now();
    const dayKey = `quota:${userId}:${new Date().toISOString().slice(0, 10)}`;
    const minKey = `rate:${userId}:${Math.floor(now / 60000)}`;

    // Đọc quota từ KV (KV namespace tên "RATE" — bind trong Settings)
    const dayCount = parseInt(await env.RATE.get(dayKey) || '0', 10);
    const minCount = parseInt(await env.RATE.get(minKey) || '0', 10);

    if (dayCount >= QUOTA_PER_USER_PER_DAY) {
      return jsonError(429, `Bạn đã dùng hết quota free ${QUOTA_PER_USER_PER_DAY} call/ngày. Reset 0h. Hoặc nhập key Gemini riêng (free, lấy ở aistudio.google.com/apikey).`);
    }
    if (minCount >= RATE_LIMIT_PER_MINUTE) {
      return jsonError(429, `Quá nhanh — bạn đợi 1 phút rồi thử lại.`);
    }

    // Forward request tới Gemini
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return jsonError(400, 'Body không phải JSON hợp lệ');
    }

    const model = body.model || 'gemini-2.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_KEY}`;

    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body.payload || body),
    });

    // Increment quota chỉ nếu Gemini OK (không trừ quota khi Gemini lỗi)
    if (upstream.ok) {
      ctx.waitUntil(Promise.all([
        env.RATE.put(dayKey, String(dayCount + 1), { expirationTtl: 86400 }),
        env.RATE.put(minKey, String(minCount + 1), { expirationTtl: 60 }),
      ]));
    }

    const respBody = await upstream.text();
    return new Response(respBody, {
      status: upstream.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Quota-Used': String(dayCount + (upstream.ok ? 1 : 0)),
        'X-Quota-Limit': String(QUOTA_PER_USER_PER_DAY),
      },
    });
  },
};

function jsonError(status, message) {
  return new Response(JSON.stringify({ error: { message } }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
