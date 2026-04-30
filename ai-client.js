// AI Client — Architecture A (Claude CLI literal qua bridge của Lân)
//
// Cách hoạt động:
// 1. Webapp ghi 1 doc vào Firestore collection `claude_requests` với payload {system, user, history...}
// 2. Bridge script `claude-bridge/bridge.js` chạy trên máy Lân, listen Firestore, claim doc
// 3. Bridge gọi `claude --print --append-system-prompt ...` (Claude Code CLI có sẵn trên máy Lân)
// 4. Bridge ghi response back vào doc → webapp listen snapshot, resolve promise
//
// Yêu cầu:
// - Học viên: chỉ cần đăng nhập (Firebase auth) — KHÔNG cần API key
// - Lân: PC bật + chạy `node bridge.js` trong giờ cohort hoạt động
//
// Trade-off: tester chờ 5-30 giây/request (vs realtime của API trực tiếp). Đổi lại
// dùng đúng subscription Claude Code của Lân, không tốn thêm tiền API riêng cho dry-run.

const AI_CONFIG = {
  // Timeout chờ bridge phản hồi (ms). 4 phút = an toàn cho mọi prompt grade dài.
  responseTimeoutMs: 4 * 60 * 1000,
  // Model hint gửi cho bridge — bridge có thể map sang `claude --model <name>` hoặc bỏ qua
  // (dùng default của subscription). Không bắt buộc Lân phải honor.
  models: {
    chat: 'sonnet',         // chat thân thiện, không cần thinking
    grade: 'sonnet',        // grade cần lý giải — sonnet vừa đủ
    onboarding: 'sonnet',
  },
};

// ---- HÀM CỐT LÕI: gửi 1 request lên queue + chờ bridge trả lời ----

async function callClaude({ system, user, history = [], model = 'chat', temperature = 0.7, maxTokens = 1024 }) {
  if (!window.fb || !window.fb.isReady() || !window.fb.currentUser()) {
    throw new Error('Bạn chưa đăng nhập. Đăng nhập rồi quay lại nhé — AI cần biết bạn là ai trong cohort.');
  }

  const modelHint = AI_CONFIG.models[model] || AI_CONFIG.models.chat;
  const payload = {
    system: system || '',
    user: user || '',
    history: Array.isArray(history) ? history : [],
    model: modelHint,
    purpose: model,           // 'chat' | 'grade' | 'onboarding' — bridge log để Lân debug
    temperature: temperature,
    maxTokens: maxTokens,
  };

  // Bước 1: enqueue
  let requestId;
  try {
    requestId = await window.fb.enqueueClaudeRequest(payload);
  } catch (e) {
    throw new Error('Không gửi được request lên Firestore. Bạn check mạng giúp tôi: ' + (e.message || e));
  }

  // Bước 2: chờ bridge xử lý + trả lời (thông qua snapshot listener)
  return await new Promise((resolve, reject) => {
    let unsubscribe = null;
    let settled = false;

    const finish = (fn) => {
      if (settled) return;
      settled = true;
      if (unsubscribe) unsubscribe();
      clearTimeout(timer);
      fn();
    };

    const timer = setTimeout(() => {
      finish(() => reject(new Error(
        'Đợi quá 4 phút mà chưa thấy AI trả lời. Có thể bridge của Lân chưa chạy hoặc đang quá tải. ' +
        'Bạn nhắn Lân (nếu là cohort #1 dry-run), hoặc thử lại sau 1-2 phút.'
      )));
    }, AI_CONFIG.responseTimeoutMs);

    unsubscribe = window.fb.listenClaudeRequest(requestId, (data) => {
      if (!data) return;
      if (data.status === 'done') {
        finish(() => resolve(data.response || ''));
      } else if (data.status === 'error') {
        finish(() => reject(new Error('Bridge báo lỗi: ' + (data.error || 'không rõ'))));
      }
      // status='pending' hoặc 'processing' → chờ tiếp
    });
  });
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

  return callClaude({
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

  const text = await callClaude({
    system,
    user,
    model: 'grade',
    temperature: 0.3, // Thấp để consistent
    maxTokens: 2048,  // Vietnamese + JSON dễ vượt 800
  });

  return parseGradeJson(text);
}

// Parse JSON grade response, tolerate markdown fence + truncation.
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

  return callClaude({
    system,
    user,
    model: 'onboarding',
    temperature: 0.8,
    maxTokens: 800,
  });
}
