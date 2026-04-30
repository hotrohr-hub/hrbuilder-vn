# CLAUDE.md — Context xuyên suốt cho HR Builder VN

File này load tự động khi Lan + Claude cộng tác build/sửa lesson, prompt, fix UX cho webapp `prototype-khoa-hoc-site/`. Không paste lại context mỗi conversation.

---

## 1. Sản phẩm là gì

**HR Builder VN** — webapp khoá học cohort 10 tuần (mở rộng 22 tuần với Pro Track + Specialty + Master Capstone), dạy HR Việt Nam build AI agent thật. Vehicle = Recruiter Agent. Đích = tư duy giải mọi bài HR.

**Mô hình:** cohort cao cấp 30 người · 9.9M deposit · hoàn 5M nếu pass cuối tuần 4 · cuối khoá nhận chứng chỉ "AI HR Builder" verified Accredible. KHÔNG phải membership recurring.

**Stage hiện tại:** Stage 0 dry-run miễn phí mid-May 2026 với 5 HR friends.

---

## 2. Voice — giáo sư Đinh Tiến Dũng

Giọng tếu táo có nhịp, thỉnh thoảng lạc đề có duyên rồi quay lại. Câu ngắn xen câu dài. Ví dụ HR VN cụ thể (Vinamilk/FPT/Masan, không Google/Amazon).

**Mẫu câu đúng giọng:**
- "Lại nói chuyện đọc CV. Nhìn một xấp ba mươi cái rải trên bàn, hoa hết cả mắt..."
- "Các cụ dạy rồi, kiến tha lâu cũng đầy tổ, việc to thì phải băm nhỏ ra."
- "Máy nó không thông minh hơn anh chị đâu, nhưng được cái nó chăm. Mà ở đời, cứ chăm là ăn tiền rồi."

**Cấm tuyệt đối:**
- Gọi user "em" → luôn "anh chị" (trong lesson) hoặc "bạn" (trong UI/chat)
- Xưng "mình" với user, KHÔNG xưng "em"
- Pattern "đem cho sếp xem" — HR VN giấu việc dùng AI, không khoe
- Văn phong học thuật ("Trong bài học này, chúng ta sẽ tìm hiểu...")
- Jargon tiếng Anh khi tiếng Việt có từ tương đương ("prompt" → "câu lệnh", "agent" → "máy phụ"/"cậu phụ")
- Ví dụ Mỹ (Google, Amazon, Tesla)

---

## 3. Persona học viên — luôn cân nhắc khi build

| Persona | Tuổi | Mảng | Tech | Pass dự kiến | Lưu ý |
|---|---|---|---|---|---|
| Minh Anh | 26 | TA tech | Cao | 90% | Biết Python cơ bản, nhanh |
| Thu Hà | 38 | C&B enterprise | Thấp | 40% (canary) | Sếp bảo thủ, dữ liệu nhạy cảm |
| Đức Trung | 32 | L&D mid | Trung | 75% | Vừa lý thuyết vừa thực hành |
| Ngọc Linh | 35 | HRBP multinational | Cao | 90% | Đã advanced, cần Pro Track |
| Hương | 30 | Ops | Thấp-Trung | 80% | Care về tự động hoá lặt vặt |

Kiểm tra mỗi tính năng mới: Thu Hà có pass được không? Nếu không → fix.

---

## 4. Domain anchor — bám chắc HR VN

- **Luật:** Nghị định 13/2023 (PII), Bộ luật Lao động 2019, BHXH 2026 (lương cơ sở mới)
- **Kênh:** Zalo OA, Telegram bot, Gmail (không Slack/Teams làm chính)
- **HRIS phổ biến:** Base.vn, Tanca, MISA AMIS
- **Job board:** TopCV, VietnamWorks, ITviec, LinkedIn
- **Văn hoá:** sếp bảo thủ, mảng C&B nhạy cảm, HR giấu việc dùng AI

Sandbox data ở `sandbox-data/` (5 mảng × dữ liệu giả) — học viên không có data thật vẫn test được.

---

## 5. Output WOW — không bao giờ là CSV

Mỗi buổi phải có 1 deliverable "đem khoe được":
- Buổi 1: cổng HR có 3 nút + Telegram form
- Buổi 2: dashboard 30 CV với radar chart
- Buổi 3: Skills Package fork-able trên GitHub
- Buổi 4: Routine cloud chạy 6h sáng tự động
- Buổi 5: 5 microsite cá nhân hoá cho top 5 ứng viên
- Buổi 6: video 90s quay 4 cửa sổ chạy song song
- Buổi 7: agent biết predict + memory profile
- Buổi 8: API endpoint trigger được từ bên ngoài
- Buổi 9: Compliance Scanner report 30/30 PASS
- Buổi 10: capstone tự chọn + Demo Day video 5 phút

KHÔNG output dạng "file CSV cho sếp xem". Sếp không xem CSV. Sếp xem dashboard, microsite, video.

---

## 6. 4D Framework — khung tư duy nền (mới bổ sung 2026-04)

10 nguyên lý của khoá nằm trong 4 năng lực Anthropic:

- **Delegation** (Giao việc): nguyên lý 1, 5, 6, 8 — chiến lược
- **Description** (Tả việc): nguyên lý 2, 3, 7 — chiến thuật
- **Discernment** (Phân định): ngầm trong rubric chấm — chiến thuật
- **Diligence** (Cẩn trọng): nguyên lý 9, rải xuyên 10 buổi — chiến lược

Khi build lesson mới, tự hỏi: lesson này thuộc loop chiến lược (Delegation–Diligence) hay chiến thuật (Description–Discernment)? Nói rõ trong intro buổi để học viên định vị.

---

## 7. Diligence — tầng xuyên suốt, không phải 1 buổi

Mỗi lesson phải có ít nhất 1 dòng **Diligence note** (`diligenceNote` field trong `lessons-data.js`):

- Buổi 1: form Telegram → KHÔNG hard-code token vào HTML public
- Buổi 2: anonymize PII TRƯỚC khi đưa CV cho AI
- Buổi 3: repo Skills phải PRIVATE, không public
- Buổi 4: bật zero retention cho Routine cloud
- Buổi 5: MCP scope read-only folder cụ thể, không Full Drive
- Buổi 6: multi-agent log audit trail (ai chạy gì, lúc nào)
- Buổi 7: KHÔNG lưu PII vào memory layer
- Buổi 8: secret rotation 90 ngày, không commit secrets
- Buổi 9: Compliance Scanner — buổi chính của Diligence
- Buổi 10: viết "AI disclosure" trong báo cáo capstone cho sếp

---

## 8. Tech stack đã chốt — không debate

- **Frontend:** Static HTML/CSS/JS, không build step. Hosting Cloudflare Workers static.
- **AI (Stage 0 dry-run — architecture A):** webapp ghi prompt vào Firestore queue `claude_requests`. Bridge `claude-bridge/bridge.js` chạy trên máy Lân, dùng Claude Code CLI (`claude --print`) để xử lý. Học viên KHÔNG cần API key.
- **AI (Path B paid cohort):** migrate sang Cloudflare Worker call Anthropic Messages API (`/v1/messages`) trực tiếp — bỏ bridge local của Lân.
- **Auth:** Firebase Auth (email + Google OAuth).
- **Storage:** Firestore — `users/{uid}` (profile + progress), `submissions/{uid}_{lesson}_{step}` (bài nộp + grade), `claude_requests/{auto-id}` (queue).
- **Hosting:** Cloudflare Workers static (URL `hrbuilder-vn.hotrocvscanner.workers.dev`).
- **Auto-grade:** model-based grading qua Claude (sonnet default qua CLI), prompt yêu cầu trả JSON, parser tolerate markdown fence + truncation.
- **Legacy (KHÔNG dùng nữa):** `cloudflare-worker.js` proxy Gemini, localStorage `gemini_api_key`. Xoá khi cleanup repo.

---

## 9. Quyết định gốc — không debate lại

1. Cohort model, không membership recurring.
2. A+ hybrid: 80% AI agent vận hành, 20% Lan voice tại tuần 4 + 10.
3. Course = AI agent stack học viên fork. Eat your own dog food.
4. Buổi 1 = HR Builder Profile cá nhân có pháo hoa, KHÔNG vào HR ngay.
5. 5 nguyên lý buổi 1 = 5 nguyên lý cốt lõi xuyên 10 buổi.
6. Capstone tuần 10 TỰ CHỌN — không lặp Recruiter, ép transfer.
7. Compliance VN built-in từ Buổi 9.
8. Mỗi buổi 5 bước (micro-task) — paste prompt, agent làm, submit, AI grade. KHÔNG video lecture.
9. Reveal pattern Productive Failure: principle name ẩn, mở dần qua hint.
10. Sandbox data cho HR không thể test data thật.

---

## 10. Khi build/sửa cần follow

1. Đọc file này TRƯỚC khi sửa lesson.
2. Voice check: đọc to đoạn vừa viết — có giống Đinh Tiến Dũng không? Nếu không → viết lại.
3. Persona check: Thu Hà 38t mảng C&B sếp bảo thủ có hiểu được không?
4. Diligence check: lesson này có ít nhất 1 dòng Diligence note chưa?
5. Output WOW check: deliverable có khoe được không, hay CSV chán?
6. Compliance VN check: có chạm vào Nghị định 13 / BHXH / LĐ không? Nếu có → cite cụ thể.

File quan trọng nhất khi sửa:
- `lessons-data.js` — content 10 buổi + Pro + Specialty + Master
- `lesson.html` — render dynamic
- `ai-client.js` — enqueue prompt + listen response qua Firestore
- `firebase-client.js` — auth, profile sync, submissions, claude_requests queue
- `claude-bridge/bridge.js` — script chạy trên máy Lân để execute Claude CLI
- `progress.js` — unlock logic
- `onboarding.js` — Day 0 modal (đã bỏ bước nhập API key)

---

Cập nhật lần cuối: 2026-04-30. Khi voice/persona/quyết định gốc thay đổi → sửa file này TRƯỚC, sau đó mới sửa code.
