# Test Plan — End-to-End cho HR Builder VN

Đây là kịch bản test toàn bộ webapp trước khi mời 5 tester. Lan tự test từ A đến Z, đảm bảo không bug.

## Setup

### Cần có
1. Browser: Chrome/Edge mới (hỗ trợ ES6+)
2. Internet connection
3. Tài khoản Google (cho Gemini API key)

### Lấy Gemini API key
1. Mở https://aistudio.google.com/apikey
2. Đăng nhập Google
3. Click **"Create API Key"**
4. Chọn project (hoặc "Create new project")
5. Copy key dạng `AIzaSy...` (lưu ngay, mất rồi tạo lại)

### Mở webapp
```bash
cd "c:/Users/DELL/Documents/Đào tạo HR AI/prototype-khoa-hoc-site"
python -m http.server 8000
```

Mở browser: `http://localhost:8000`

---

## Test Case 1: Onboarding Day 0 ✓

**Bước:**
1. Mở `http://localhost:8000` lần đầu (incognito để clean state)
2. Modal onboarding hiện ra ngay

**Verify:**
- [ ] Modal hiện đúng — không bị che
- [ ] Click "Bắt đầu" → step 2 (hỏi tên)
- [ ] Điền tên "Vũ Hoài Lan" → Tiếp
- [ ] Step 3: vai trò "Founder" → Tiếp
- [ ] Step 4: công ty "joywork.vn" → Tiếp
- [ ] Step 5: chọn "TA" → Tiếp
- [ ] Step 6: pain point (gõ tự do 3 dòng) → Tiếp
- [ ] Step 7: paste Gemini API key
- [ ] Click "Lưu + Bắt đầu khóa"
- [ ] Hiện "⏳ Đang test API key..."
- [ ] Sau 2-5s: "✅ API key OK!"
- [ ] Hiện loading "Bạn đồng hành đang sinh lộ trình..."
- [ ] 5-10s sau: hiện welcome message từ Gemini
- [ ] Welcome message có nội dung cá nhân hóa (đề cập tên, vai trò, mảng)
- [ ] Click "Bắt đầu Buổi 1" → chuyển đến lesson.html?id=1

**Bug likely:**
- Nếu API key sai format → message "❌ Key không hợp lệ"
- Nếu key đúng nhưng quota hết → message lỗi 429
- Nếu mạng yếu → loading lâu, có thể timeout

---

## Test Case 2: Lesson 1 — Buổi đầu ✓

**Bước:**
1. Sau onboarding, vào lesson.html?id=1

**Verify UI:**
- [ ] Header trên: streak 🔥 0 ngày · ⚡ 0 XP · avatar "VL" hoặc tương tự (initials)
- [ ] Quiz strip "Chưa có — đây là buổi đầu" (xám)
- [ ] Principle banner "🔮 TƯ DUY SỐ 1 — BÍ MẬT" với 3 hint (1 mở, 2 khoá)
- [ ] Personalize banner: "Buổi này điều chỉnh cho [tên bạn] — [vai trò] mảng TA @ joywork.vn"
- [ ] Lesson header: "Buổi 1 — Bạn nói tiếng Việt 1 lần..."
- [ ] Lan voice card có nội dung
- [ ] Outcome card: "Tài sản cầm được" + "Tư duy nhận được"
- [ ] Deep dive locked với 3 tầng
- [ ] Demo button "🎮 Xem trải nghiệm khi xong Bước 3"
- [ ] 5 cards Bước: Bước 1 active expanded, Bước 2-5 locked
- [ ] Bottom nav: "← Lớp học" và "Buổi 2 →" disabled

---

## Test Case 3: Demo reveal ✓

**Bước:**
1. Click button "🎮 Xem trải nghiệm khi xong Bước 3"

**Verify:**
- [ ] 2 hint locked mở dần (delay 600ms mỗi cái)
- [ ] Sau 2s: principle banner reveal "🎉 TỰ HỌC CÙNG AI"
- [ ] Pháo hoa nổ tung tóe (60 confetti pieces, 2-3s)
- [ ] Live notif góc phải "🎉 Bạn vừa khám phá: TỰ HỌC CÙNG AI · +50 XP"
- [ ] Deep dive panel mở: 3 tầng có nội dung đầy đủ
- [ ] Page tự scroll xuống Deep Dive

---

## Test Case 4: Help drawer chat ✓

**Bước:**
1. Click "Bí? Hỏi bạn đồng hành" trong Bước 1

**Verify UI:**
- [ ] Help drawer trượt vào bên phải
- [ ] Header: "Bạn đồng hành · Online · sẵn sàng giúp"
- [ ] Welcome message bot
- [ ] 5 quick prompts buttons

**Bước:**
2. Click 1 quick prompt VD "Máy đứng im sau khi paste prompt"

**Verify:**
- [ ] Button click → message của user hiện ra
- [ ] Hiện typing indicator "..."
- [ ] Sau 3-5s: AI trả lời (real Gemini call)
- [ ] Reply ngắn 2-4 câu
- [ ] Reply gọi "bạn", xưng "mình"
- [ ] Reply liên quan đến HR + buổi 1

**Bước:**
3. Gõ câu tự do "Mình HR mảng TA — agent có giúp screen CV được không?"
4. Enter (hoặc click ↑)

**Verify:**
- [ ] Message của user hiện
- [ ] Reply có ngữ cảnh đúng — đề cập đến mảng TA, screen CV
- [ ] History được lưu (refresh page → vẫn thấy)

**Bug likely:**
- Nếu API rate limit → error
- Nếu key chưa setup → error "Chưa có Gemini API key"

---

## Test Case 5: Submit + Auto-grade ✓

**Bước:**
1. Trong Bước 1 (Cài Claude Code Desktop), gõ vào textarea:
```
Em đã hỏi Claude.ai cách cài Claude Code Desktop. Tải tại claude.ai/code, cài xong, đăng nhập tài khoản Pro. Mở app, gõ /help thấy đầy đủ menu. Setup OK.
```
2. Click "Nộp bài · +20 XP"

**Verify:**
- [ ] Button đổi thành "⏳ Đang chấm..."
- [ ] Notif "Bạn đồng hành đang đọc bài..."
- [ ] Sau 5-15s: Result hiện ra (real Gemini grade)
- [ ] Nếu pass: hiện box xanh "✅ Đạt", score 70-100, evidence + strengths + improvements
- [ ] Confetti nổ
- [ ] Notif "🎉 Pass! +20 XP. Bước sau đã mở."
- [ ] Sau 3.5s: page reload
- [ ] Sau reload: Bước 1 thành "✓ Đã xong", Bước 2 active
- [ ] Header XP cộng thành "⚡ 20 XP"

**Bước:**
3. Test với câu trả lời sơ sài: chỉ "OK rồi"

**Verify:**
- [ ] Gemini chấm "borderline" hoặc "fail" (score thấp)
- [ ] Hiển thị feedback chỉ ra chỗ thiếu
- [ ] Không tự pass — phải nộp lại

**Bug likely:**
- Gemini không trả JSON đúng format → error
- Latency cao (>30s) — có thể tăng do model load
- JSON có markdown wrapper — code đã handle (regex extract)

---

## Test Case 6: Step unlock progression ✓

**Bước:**
1. Submit Bước 1 pass → reload → Bước 2 active
2. Submit Bước 2 pass → reload → Bước 3 active
3. ... cho đến Bước 5

**Verify mỗi bước:**
- [ ] Bước trước hiển thị "✓ Đã xong" (xanh)
- [ ] Bước hiện active expanded với textarea + button
- [ ] Bước sau locked

**Bước:**
4. Submit Bước 5 → toàn bộ Buổi 1 done

**Verify:**
- [ ] Bottom nav: "🎉 Buổi này xong! Đi tiếp →" + button "Buổi 2 →" enabled
- [ ] Click Buổi 2 → vào lesson.html?id=2 thành công
- [ ] Lesson 2 không còn locked

---

## Test Case 7: Locked lesson ✓

**Bước:**
1. Mở `lesson.html?id=5` (chưa unlock)

**Verify:**
- [ ] Hiện trang khoá: "🔒 Buổi 5 đang khoá"
- [ ] Có button "→ Đi tới Buổi 4"
- [ ] Click → đi đến Buổi 4

---

## Test Case 8: Dashboard reflect progress ✓

**Bước:**
1. Sau khi xong Buổi 1, về `index.html`

**Verify:**
- [ ] Welcome banner: "Đang ở Buổi 2 · 0/5 bước · 1/10 buổi xong"
- [ ] Continue button: "▶ Tiếp tục Buổi 2"
- [ ] Stats: XP đã cộng, Tiến độ 10%
- [ ] Skill tree: nguyên lý 1 unlocked (xanh), nguyên lý 2 active
- [ ] Module 1 card: "✓ HOÀN THÀNH" + style completed
- [ ] Module 2 card: "▶ ĐANG HỌC · 0/5 bước" + style active
- [ ] Module 3-10 vẫn locked

---

## Test Case 9: Settings page ✓

**Bước:**
1. Vào `settings.html`

**Verify:**
- [ ] Hiện profile đầy đủ (tên, vai trò, công ty, mảng, pain, ngày onboard)
- [ ] Hiện progress (XP, buổi/bước hoàn thành, %)
- [ ] Có thể nhập API key mới + Test
- [ ] Click "Xem key hiện tại" → alert key bị mask
- [ ] Reset profile → modal onboarding hiện lại
- [ ] Reset toàn bộ → confirm → xoá tất cả

---

## Test Case 10: Certificate ✓

**Bước:**
1. Vào `cert.html` trực tiếp

**Verify:**
- [ ] Hiển thị tên học viên (lấy từ profile)
- [ ] Ngày cấp = hôm nay
- [ ] Mã chứng chỉ random
- [ ] 10 nguyên lý hiện đầy đủ
- [ ] Chữ ký Lan + capstone
- [ ] Button "🖨 In ra giấy" → mở print dialog
- [ ] Button "💼 Chia sẻ LinkedIn" → mở popup share

---

## Test Case 11: End-to-end full Buổi 1

**Kịch bản tổng:**
1. Clean state (incognito hoặc reset)
2. Onboard 5 câu + API key
3. Vào Buổi 1
4. Click demo reveal → xem
5. Chat help drawer 3 lần
6. Submit Bước 1 → pass → Bước 2 active
7. Submit Bước 2-5 lần lượt
8. Xem Buổi 1 done → Buổi 2 unlock
9. Về dashboard → verify progress
10. Vào settings → verify state

**Thời gian ước tính:** 15-25 phút (nếu Gemini OK)

---

## Bug List (Lan tự note khi test)

| # | Bug | Severity | Status |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Sau test OK → Deploy

### Bước 1: Push lên GitHub
```bash
cd "c:/Users/DELL/Documents/Đào tạo HR AI/prototype-khoa-hoc-site"
git init
git add .
git commit -m "Initial HR Builder VN webapp"
gh repo create hr-builder-vn --public --source=. --push
```

### Bước 2: Bật GitHub Pages
- Repo Settings → Pages → Source: main branch / root
- Đợi 1-2 phút → URL: `https://[username].github.io/hr-builder-vn/`

### Bước 3: Test public URL
- Mở incognito
- Test toàn bộ Test Case 1-11
- Verify chạy được trên public

### Bước 4: Mời 5 HR friends
- Gửi link Zalo:
```
[Tên friend] ơi, mình đang test khoá AI HR Builder. Free 4 tuần — em test giúp mình:

1. Mở: https://[username].github.io/hr-builder-vn/
2. Lấy Gemini API key free tại aistudio.google.com/apikey
3. Onboard 5 câu, paste key
4. Học Buổi 1 (90 phút) — có pháo hoa 🎉

Bí gì ping mình. Cảm ơn em!
```

### Bước 5: Theo dõi 5 tester 4 tuần
- Daily check progress qua Zalo
- Tuần 1 end: collect feedback
- Tuần 4 end: case study + decide Path B

---

## Troubleshooting

### "❌ Gemini lỗi 429" — Rate limit
- Free tier: 15 request/phút
- Đợi 1 phút thử lại
- Hoặc upgrade pay-as-you-go ($0/setup)

### "❌ API key không hợp lệ"
- Key có dạng `AIzaSy...`?
- Đã enable Generative Language API trong project?
- Tạo key mới ở aistudio.google.com/apikey

### Modal onboarding không hiện
- Mở DevTools Console — check error
- Reset: localStorage.clear() → reload

### Submit không phản hồi
- Check Console for fetch error
- Có thể API key sai quyền — recheck
- Mạng có chậm? Đợi 30s

### Page bị lỗi không load
- Check tất cả file `.js` có ở cùng folder
- Mở Console xem error specific
- Clear cache + hard reload (Ctrl+Shift+R)

---

## Sẵn sàng deploy?

- [ ] Đã test 11 case ở local
- [ ] Có Gemini API key đang work
- [ ] Có GitHub account
- [ ] Đã chọn 5 HR friends sẵn lòng test
- [ ] Lan có 30 phút/ngày support qua Zalo trong 4 tuần

✅ Đủ → push GitHub Pages → mời tester. Stage 0 chính thức bắt đầu.
