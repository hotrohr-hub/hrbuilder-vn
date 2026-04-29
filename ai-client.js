// AI Client — 2 chế độ:
// (Phase A) Proxy của khoá: học viên Buổi 1-3 dùng key của khoá qua Cloudflare Worker — quota 50/ngày
// (Phase B) Key riêng: từ Buổi 4+ học viên tự lấy key Gemini, không qua proxy
//
// Frontend chọn mode dựa trên: nếu localStorage có 'gemini_api_key' → Phase B; nếu chỉ có 'use_cohort_proxy' → Phase A.

const AI_CONFIG = {
  endpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
  // Proxy URL — anh Lân setup Cloudflare Worker và điền vào đây sau khi deploy.
  // Nếu rỗng → Phase A bị disable, học viên buộc nhập key riêng.
  proxyUrl: '', // ví dụ: 'https://api.hrbuilder.vn/gemini'
  cohortToken: 'COHORT1_TOKEN_PLACEHOLDER', // anh Lân thay bằng COHORT_TOKEN của Worker
  models: {
    chat: 'gemini-2.5-flash',
    grade: 'gemini-2.5-flash',
    onboarding: 'gemini-2.5-flash',
  },
};

function isProxyAvailable() {
  return !!AI_CONFIG.proxyUrl;
}

function isUsingCohortProxy() {
  // Học viên opt-in Phase A — chưa có key riêng nhưng có flag
  return !getApiKey() && localStorage.getItem('use_cohort_proxy') === '1' && isProxyAvailable();
}

function getOrCreateUserId() {
  let id = localStorage.getItem('hrbuilder_user_id');
  if (!id) {
    id = 'u_' + Math.random().toString(36).slice(2, 10) + '_' + Date.now().toString(36);
    localStorage.setItem('hrbuilder_user_id', id);
  }
  return id;
}

// Lấy API key từ localStorage (anh Lân tự nhập 1 lần)
function getApiKey() {
  return localStorage.getItem('gemini_api_key') || '';
}

function setApiKey(key) {
  localStorage.setItem('gemini_api_key', key);
}

function hasApiKey() {
  return !!getApiKey();
}

// Hàm gọi Gemini chính — 2 path: direct (key riêng) hoặc proxy (key của khoá Phase A)
async function callGemini({ system, user, history = [], model = 'chat', temperature = 0.7, maxTokens = 1024 }) {
  const key = getApiKey();
  const useProxy = !key && isUsingCohortProxy();

  if (!key && !useProxy) {
    throw new Error('Chưa có Gemini API key — bạn vào Cài đặt nhập key riêng, hoặc bật "Dùng key tạm của khoá" để dùng quota free Phase A.');
  }

  const modelName = AI_CONFIG.models[model] || AI_CONFIG.models.chat;
  const url = useProxy
    ? AI_CONFIG.proxyUrl
    : `${AI_CONFIG.endpoint}/${modelName}:generateContent?key=${key}`;

  // Format history cho Gemini (alternate user/model)
  const contents = [];
  history.forEach(msg => {
    contents.push({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    });
  });
  contents.push({ role: 'user', parts: [{ text: user }] });

  const body = {
    contents,
    generationConfig: {
      temperature,
      maxOutputTokens: maxTokens,
      topP: 0.95,
      // Tắt thinking mode cho chat (nhanh + rẻ + đủ tốt cho hỗ trợ)
      // Chỉ bật thinking cho grade (model = 'grade')
      thinkingConfig: model === 'grade'
        ? { thinkingBudget: 1024 }
        : { thinkingBudget: 0 },
    },
  };

  if (system) {
    body.systemInstruction = { parts: [{ text: system }] };
  }

  // Timeout 30s + retry 2 lần với exp backoff cho lỗi mạng / 429 / 5xx.
  // Trước đây fetch không có timeout — hệ quả: Gemini treo → UI đứng vô tận.
  const MAX_ATTEMPTS = 3;
  let lastErr;
  // Build headers + body theo path
  const headers = { 'Content-Type': 'application/json' };
  let requestBody = body;
  if (useProxy) {
    headers['X-Cohort-Token'] = AI_CONFIG.cohortToken;
    headers['X-User-Id'] = getOrCreateUserId();
    requestBody = { model: modelName, payload: body };
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 30000);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
        signal: ctrl.signal,
      });
      clearTimeout(timer);
      if (!res.ok) {
        const errText = await res.text();
        // 429 (rate limit) hoặc 5xx → đáng retry. 4xx khác (key sai…) thì bỏ ngay.
        if ((res.status === 429 || res.status >= 500) && attempt < MAX_ATTEMPTS) {
          await new Promise(r => setTimeout(r, 1000 * attempt));
          continue;
        }
        throw new Error(`Gemini lỗi ${res.status}: ${errText.slice(0, 200)}`);
      }
      const data = await res.json();
      if (!data.candidates || !data.candidates[0]) {
        throw new Error('Gemini không trả kết quả. Bạn thử lại lần nữa giúp tôi.');
      }
      return data.candidates[0].content.parts[0].text;
    } catch (e) {
      clearTimeout(timer);
      lastErr = e;
      // AbortError (timeout) hoặc network error → retry.
      const retriable = e.name === 'AbortError' || /network|fetch|Failed/i.test(e.message);
      if (retriable && attempt < MAX_ATTEMPTS) {
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }
      throw e;
    }
  }
  throw lastErr;
}

// === HÀM CHO AI CHAT (BẠN ĐỒNG HÀNH) ===

async function aiChat(userMessage, context) {
  const { lessonId, lessonTitle, principleName, currentStepTitle, profile, history = [] } = context;

  const system = `Bạn là "Bạn đồng hành" — AI tutor đồng hành học viên cohort HR Builder VN. Tone giống "giáo sư Đinh Tiến Dũng": tếu táo nhẹ, thẳng thắn, không giáo điều, hay chêm aside, hay tự trào.

THÔNG TIN HỌC VIÊN:
- Tên: ${profile?.name || 'Bạn'}
- Vai trò: ${profile?.role || 'HR'} @ ${profile?.company || 'công ty Việt Nam'}
- Mảng HR: ${profile?.area || 'general'}

NGỮ CẢNH HIỆN TẠI:
- Đang học Buổi ${lessonId}: "${lessonTitle}"
- Tư duy đang học: "${principleName}"
- Bước hiện tại: "${currentStepTitle}"

NGUYÊN TẮC TRẢ LỜI:
1. XƯNG HÔ: gọi học viên "bạn", xưng "tôi". KHÔNG dùng "em", KHÔNG xưng "mình".
2. TIẾNG VIỆT 100%, không xen tiếng Anh trừ thuật ngữ kỹ thuật cần thiết (prompt, API). Tránh jargon Tây quản trị (transfer, scope, leverage…) — nói "chuyển sang", "phạm vi", "tận dụng".
3. NGẮN GỌN: 2-4 câu cho mỗi reply. Không giảng dài. Câu có nhịp — câu dài xen câu cụt.
4. SOCRATIC: gợi ý hơn là giải đáp. Hỏi ngược "bạn thử nghĩ xem…", "câu hỏi rất hay, bạn đoán xem…"
5. DOMAIN HR VN: ví dụ luôn liên quan HR (tuyển dụng, BHXH, lương, onboarding…). KHÔNG dùng todo app, weather bot. Case study Việt — Vinamilk, FPT, Highlands, MB Bank…
6. KHI HỌC VIÊN BÍ NẶNG (≥5 phút bí): mới đưa giải pháp đầy đủ.
7. KHEN CỤ THỂ khi học viên làm đúng. KHÔNG generic. Không nói "giỏi quá" — nói cụ thể "bạn vừa setup Routine đầu tiên, nhiều người mất hai ngày".
8. ĐƯỢC PHÉP chêm aside duyên dáng: "tôi đoán bạn đang lo…", "câu hỏi rất hay, câu trả lời còn hay hơn…", "các cụ ta đã có câu… nhưng các cụ chưa nói rõ…", "vâng, đúng vậy thật". Dùng vừa, không spam.

KHÔNG ĐƯỢC LÀM:
- Không bao giờ dùng "em" gọi học viên
- Không xưng "mình" — xưng "tôi"
- Không trả lời câu hỏi ngoài phạm vi HR + AI agent
- Không build agent thay học viên (luôn để họ tự làm)
- Không giải toán ngoài bài học
- Không lạm dụng emoji, không lạm dụng dấu chấm than, không ALL CAPS lung tung`;

  return callGemini({
    system,
    user: userMessage,
    history,
    model: 'chat',
    temperature: 0.7,
    maxTokens: 600,
  });
}

// === HÀM CHO AUTO-GRADE NỘP BÀI ===

async function aiGrade({ lessonId, stepIdx, stepTitle, stepDesc, principleName, submission, profile, gradingCriteria }) {
  // Buổi 1-3: confidence building → grade dễ hơn (pass nếu có nỗ lực + mô tả cụ thể).
  // Buổi 4 (mốc cam kết) trở đi: strict hơn (yêu cầu evidence verifiable).
  const isEarly = lessonId <= 3;
  const passThreshold = isEarly ? 50 : 70;
  const borderlineThreshold = isEarly ? 35 : 60;

  const system = `Bạn là AI Reviewer chấm bài cho HR Builder VN — cohort HR Việt Nam mới học AI agent. Tone: tếu táo nhẹ, ấm áp, thẳng thắn — kiểu giáo sư Đinh Tiến Dũng chấm bài, không kiểu thanh tra giáo dục.

NHIỆM VỤ: Chấm bài học viên dựa trên rubric. Học viên là HR (không phải lập trình viên), nhiều người mới chạm AI lần đầu.

TRIẾT LÝ CHẤM:
1. KHUYẾN KHÍCH > KHẮT KHE. Mục tiêu là giữ học viên đi tiếp, không phải đuổi học.
2. Học viên ${isEarly ? 'đang ở **Buổi ' + lessonId + ' — early stage**, build confidence. Pass dễ hơn — chỉ cần CÓ NỖ LỰC + MÔ TẢ CỤ THỂ là đủ. KHÔNG demand link/screenshot/code thật.' : 'đã qua Buổi 3, có thể yêu cầu evidence cụ thể (link, screenshot, snippet, kết quả số).'}
3. Bài nộp dạng MÔ TẢ TỰ DO — học viên kể lại quá trình họ làm. Nếu mô tả mạch lạc + có chi tiết riêng (không phải template chung) → coi là làm thật.
4. CHỈ FAIL khi: (a) bài rỗng/bỏ trống, (b) trả lời 1-2 từ ("ok", "xong"), (c) hoàn toàn lạc đề (kể chuyện ăn uống thay vì làm bài).
5. Feedback ngắn gọn, có nhịp. Vẫn chỉ ra chỗ cải thiện nhưng đặt sau lời khen. Khen cụ thể — đừng "giỏi quá" suông.

XƯNG HÔ trong feedback: gọi học viên "bạn", xưng "tôi". KHÔNG dùng "em", KHÔNG xưng "mình".

ĐẦU RA: Trả về DUY NHẤT 1 JSON object — KHÔNG có text/markdown trước hoặc sau, KHÔNG wrap trong \`\`\`json. JSON tối đa ~600 token để tránh truncate.

{
  "status": "pass" | "borderline" | "fail",
  "score": 0-100,
  "evidence": ["trích ngắn 1", "trích ngắn 2"],
  "strengths": ["điểm mạnh ngắn 1", "điểm mạnh ngắn 2"],
  "improvements": ["cải thiện ngắn 1", "cải thiện ngắn 2"],
  "next_step_hint": "1 dòng cho bước sau"
}

RULE PASS (Buổi ${lessonId}):
- Pass: ≥${passThreshold} điểm
- Borderline: ${borderlineThreshold}-${passThreshold - 1}
- Fail: <${borderlineThreshold} (chỉ khi rỗng / 1 từ / lạc đề hoàn toàn)`;

  const rubricBlock = (gradingCriteria && gradingCriteria.length)
    ? `\nRUBRIC CỤ THỂ CHO BƯỚC NÀY (BẮT BUỘC check đủ — bài thiếu bất kỳ tiêu chí nào → status="borderline" hoặc "fail"):\n${gradingCriteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}\n`
    : '';

  const user = `BUỔI ${lessonId} — ${stepTitle}
TƯ DUY: ${principleName}

YÊU CẦU BƯỚC NÀY:
${stepDesc}
${rubricBlock}
THÔNG TIN HỌC VIÊN:
- ${profile?.name || 'Tester'} @ ${profile?.company || 'company'}
- Mảng: ${profile?.area || 'HR'}

BÀI NỘP CỦA HỌC VIÊN:
"""
${submission}
"""

Chấm theo rubric. Nếu có RUBRIC CỤ THỂ ở trên — bài THIẾU bất kỳ tiêu chí nào thì status không được "pass". Trả JSON.`;

  const text = await callGemini({
    system,
    user,
    model: 'grade',
    temperature: 0.3, // Thấp để consistent
    maxTokens: 2048, // grade response Vietnamese + JSON fence dễ vượt 800
  });

  return parseGradeJson(text);
}

// Parse JSON grade response từ Gemini, tolerate markdown fence + truncation.
function parseGradeJson(text) {
  // Strip markdown code fence ```json ... ``` nếu có
  let cleaned = text.trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

  // Tìm vùng JSON: từ { đầu tiên đến } cuối cùng
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end < start) {
    // Truncated hoặc không có JSON — throw lỗi friendly để UI catch
    const err = new Error('GRADE_JSON_TRUNCATED');
    err.userMessage = 'Bạn đồng hành chấm bài bị ngắt giữa chừng. Bạn nộp lại lần nữa — thường lần hai là OK.';
    err.raw = text.slice(0, 200);
    throw err;
  }

  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch (e) {
    const err = new Error('GRADE_JSON_PARSE_FAIL');
    err.userMessage = 'Bạn đồng hành chấm bài bị lỗi format. Bạn nộp lại giúp tôi.';
    err.raw = text.slice(0, 200);
    throw err;
  }
}

// === HÀM CHO ONBOARDING (Day 0) ===

async function aiOnboarding(profileData) {
  const system = `Bạn là "Bạn đồng hành" chào học viên ngày đầu cohort HR Builder VN. Tone: ấm áp, tếu táo nhẹ — kiểu giáo sư Đinh Tiến Dũng đón học trò mới, không kiểu MC truyền hình.

NHIỆM VỤ: Sau khi học viên điền form, sinh:
1. Câu chào ấm áp, có chêm aside duyên (2-3 dòng) — kiểu "Tôi đoán bạn đang…", "Câu hỏi rất hay là…", "Vâng, đúng vậy thật"
2. Roadmap mười tuần cá nhân hóa theo mảng HR + cái khổ lớn nhất của họ
3. Lời khuyên một dòng để bắt đầu Buổi 1 — không hô khẩu hiệu

XƯNG HÔ: gọi học viên "bạn", xưng "tôi". KHÔNG dùng "em", KHÔNG xưng "mình". Tránh jargon Tây — nói tiếng Việt đời thường.`;

  const user = `Học viên mới onboard:
- Tên: ${profileData.name}
- Vai trò: ${profileData.role}
- Công ty: ${profileData.company}
- Mảng HR: ${profileData.area}
- Pain point lớn nhất: ${profileData.pain}

Hãy chào và đưa roadmap cá nhân hóa cho họ. Cụ thể với mảng + pain của họ. KHÔNG generic.`;

  return callGemini({
    system,
    user,
    model: 'onboarding',
    temperature: 0.8,
    maxTokens: 800,
  });
}

// === TEST API KEY ===

async function testApiKey(key) {
  const oldKey = getApiKey();
  setApiKey(key);
  try {
    const result = await callGemini({
      user: 'Trả lời chỉ "OK" nếu bạn nhận được tin này.',
      model: 'chat',
      maxTokens: 10,
    });
    return { ok: true, message: result };
  } catch (e) {
    setApiKey(oldKey);
    return { ok: false, message: e.message };
  }
}
