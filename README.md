# HR Builder VN — Webapp khóa học

Webapp khóa học AI HR Builder, vận hành bằng Gemini AI. Dành cho Stage 0 dry-run miễn phí + roadmap nâng cấp Path B (paid cohort).

## Cấu trúc file

```
prototype-khoa-hoc-site/
├── index.html              # Dashboard chính (load đầu tiên)
├── lesson.html             # Trang lesson (đọc ?id=N từ URL)
├── settings.html           # Cài đặt + xem profile + reset
├── cert.html               # Chứng chỉ cuối khóa
│
├── lessons-data.js         # Dữ liệu 10 buổi (nguyên lý + bước + hint + deep dive)
├── ai-client.js            # Gọi Gemini API (chat + grade + onboarding)
├── progress.js             # Lưu profile + tiến độ vào localStorage
├── onboarding.js           # Modal Day 0 lấy profile + API key
│
├── style-v2.css            # Style polished (Skool-like + đỉnh hơn)
└── README.md               # File bạn đang đọc
```

## Cách chạy local (dry-run)

### 1. Lấy Gemini API key (FREE)

1. Vào https://aistudio.google.com/apikey
2. Đăng nhập tài khoản Google
3. Click "Create API Key" → chọn project (hoặc tạo mới)
4. Copy key dạng `AIzaSy...`

Free tier: 15 request/phút cho gemini-2.0-flash. Đủ cho cá nhân + 5 tester.

### 2. Mở webapp

Cách đơn giản nhất:

```bash
# Vào folder
cd prototype-khoa-hoc-site

# Chạy server local (Python)
python -m http.server 8000

# Mở browser
http://localhost:8000
```

Hoặc:

```bash
# Node.js
npx serve .
```

Hoặc kéo `index.html` thẳng vào browser (Chrome/Edge) — vẫn chạy.

### 3. Onboarding Day 0

- Lần đầu vào → modal hiện ra
- Điền 5 câu (tên, vai trò, công ty, mảng HR, pain point)
- Paste Gemini API key → Test → Lưu
- Bạn đồng hành sinh roadmap riêng cho bạn

### 4. Học buổi 1-10

- Click buổi trên dashboard
- Mỗi buổi 5 bước tuần tự
- Bí thì click "💡 Hỏi bạn đồng hành" — Gemini reply real-time
- Nộp bài → Gemini chấm tự động + feedback cụ thể
- Pass → unlock bước sau / buổi sau

### 5. Demo features

- Demo button "🎮 Xem reveal" trong mỗi buổi → mô phỏng khi xong Bước 3
- Live notif góc phải → cohort activity giả lập
- Settings → xem profile + reset

## Stage 0 — Dry-run miễn phí

### Setup cho 5 tester

1. Deploy webapp lên hosting free:
   - **GitHub Pages** (đề xuất): push folder lên GitHub repo public → bật Pages
   - Hoặc Vercel: drag-drop folder, deploy 1-click
   - Hoặc Netlify: drag-drop

2. URL public xong → gửi 5 tester:
   ```
   Em ơi, đăng ký Cohort #1 HR Builder VN dry-run free 4 tuần:
   - Mở: https://[ten-cua-ban].github.io/hr-builder-vn/
   - Lấy Gemini API key tại aistudio.google.com/apikey (free)
   - Onboarding 5 câu, lưu key
   - Bắt đầu Buổi 1 ngay
   - Bí ping Lan Zalo
   ```

3. Mỗi tester chi phí Gemini: ~$0.50-2 cho 4 tuần (tester tự trả) hoặc Lan share key (Lan trả ~$5)

### Theo dõi tester

- Tester chia sẻ profile + URL Bio để Lan tracking
- Lan check progress qua Zalo (manual lúc đầu)
- Sau 4 tuần collect feedback → fix UX

## Path B — Paid cohort (nâng cấp)

Khi launch paid (cohort #1, 30 student):

### Cần thêm

| Component | Tech | GCP $300 dùng được? |
|---|---|---|
| Auth (login/signup) | Supabase / Firebase Auth | Free tier OK |
| Database (lưu progress thật) | Firestore / Supabase | Free tier OK |
| Backend proxy (ẩn API key) | Cloud Run | Có (rẻ, ~$5-10/tháng) |
| Vertex AI (thay Gemini direct) | Vertex AI | **Có ($300 đủ vài cohort)** |
| Domain hrbuilder.vn | Cloud DNS | Có |
| Email automation | SendGrid / Mailgun | Free tier OK |
| Payment | Stripe / VNPay / MoMo | N/A (% phí giao dịch) |

### Deploy roadmap (1 tuần)

1. **Auth + DB**: Setup Supabase (1 ngày)
2. **Backend Cloud Run**: Wrap Vertex AI calls (1-2 ngày)
3. **Migrate**: localStorage → Supabase (1 ngày)
4. **Payment**: Stripe + VNPay integration (1-2 ngày)
5. **Domain**: hrbuilder.vn → Cloud DNS (30 phút)
6. **Email**: Welcome + nhắc bài (1 ngày)

### Tận dụng GCP $300

- Vertex AI (Gemini Pro) cho grading: ~$30-50/cohort 30 student × 10 tuần
- Cloud Run backend: ~$5/tháng
- Cloud DNS + SSL: ~$1/tháng
- BigQuery analytics (sau này): free 1GB query/tháng
- → $300 đủ cho **~6 cohort đầu** trước khi cần nạp thêm

## Test nhanh (developer note)

### Test API key + grade

1. Mở settings.html
2. Paste key → Test → confirm OK
3. Vào Buổi 1 → nộp bài thử với câu trả lời ngắn → xem feedback Gemini

### Reset state (dev)

- Settings → "Reset toàn bộ" → xoá localStorage
- Hoặc browser DevTools → Application → Local Storage → Clear

### Test progression

1. Onboard
2. Vào Buổi 1, nộp Bước 1 với câu trả lời tốt → pass → Bước 2 unlock
3. Lặp lại 5 bước → Buổi 1 done → Buổi 2 unlock
4. Cuối khóa: cert.html hiển thị tên + ngày

## Cost ước tính (sau optimization)

### Stage 0 (Path A) — 5 tester × 4 tuần
- Gemini API: ~$5-10 (Lan trả)
- Hosting: $0 (GitHub Pages)
- **Total: ~250K VND**

### Path B — Cohort #1 paid 30 student × 10 tuần
- Vertex AI grading: ~$50
- Vertex AI chat: ~$20
- Cloud Run + DB + DNS: ~$15
- **Total: ~$85 / cohort = ~2,1M VND**
- Doanh thu: 30 × 5M = 150M
- **Margin: 98.6%**

## Roadmap tiếp theo

Sau khi user gửi Gemini API key + GCP project ID:

1. **[Path A]** Test end-to-end với chính Lan trước → fix bug
2. Deploy GitHub Pages → URL public
3. Mời 3-5 HR friends test 4 tuần
4. Collect feedback → iterate
5. **[Path B preparation]** Setup Supabase + Cloud Run khi có 3 case study
6. Launch paid cohort #1 mid-July 2026

## Liên hệ

Vũ Hoài Lan — vuhoailan@joywork.vn
