# HR Builder VN — Webapp khóa học

Webapp khóa học AI HR Builder, vận hành bằng **Claude Code CLI của Lân** thông qua một bridge nhỏ chạy trên máy Lân (architecture A). Dành cho Stage 0 dry-run miễn phí + roadmap nâng cấp Path B (paid cohort) sang API trực tiếp.

## Cấu trúc file

```
prototype-khoa-hoc-site/
├── index.html              # Dashboard chính (load đầu tiên)
├── lesson.html             # Trang lesson (đọc ?id=N từ URL)
├── settings.html           # Cài đặt + xem profile + reset
├── cert.html               # Chứng chỉ cuối khóa
│
├── lessons-data.js         # Dữ liệu 10 buổi (nguyên lý + bước + hint + deep dive)
├── ai-client.js            # Enqueue prompt vào Firestore queue, listen response
├── firebase-client.js      # Firebase Auth + Firestore (users, submissions, claude_requests)
├── progress.js             # Lưu profile + tiến độ vào localStorage + sync Firestore
├── onboarding.js           # Modal Day 0 lấy profile (KHÔNG còn nhập API key)
│
├── claude-bridge/          # Script Lan chạy local để xử lý Claude requests
│   ├── bridge.js           #   - Listen Firestore queue
│   ├── package.json        #   - Spawn `claude --print` subprocess
│   └── README.md           #   - Hướng dẫn setup cho Lan
│
├── cloudflare-worker.js    # (DEPRECATED) Proxy Gemini cũ — không dùng nữa
├── wrangler.toml           # Cloudflare static hosting (vẫn dùng để host site)
├── style-v2.css            # Style polished
└── README.md               # File bạn đang đọc
```

## Kiến trúc AI (architecture A — Claude CLI bridge)

```
Học viên (browser) ──▶ Firestore.claude_requests/{id} (status=pending)
                                     │
                                     │ snapshot listener
                                     ▼
                           bridge.js (máy Lân)
                                     │
                                     │ spawn: claude --print --append-system-prompt ...
                                     ▼
                           Claude Code CLI (Pro $20 / Max)
                                     │
                                     │ stdout
                                     ▼
            Firestore.claude_requests/{id} (status=done, response=...)
                                     │
                                     │ snapshot listener
                                     ▼
                            Học viên thấy response
```

**Hệ quả:** Học viên không cần API key, không trả tiền AI. Lân dùng đúng subscription Claude Code đã có. Trade-off: tester chờ 5-30 giây/prompt thay vì realtime.

## Cách chạy local (dry-run)

### 1. Cài + chạy bridge AI (1 lần setup, sau đó bật mỗi khi cohort hoạt động)

Xem chi tiết ở [`claude-bridge/README.md`](claude-bridge/README.md). Tóm gọn:

```bash
cd claude-bridge
npm install
# Lấy service-account.json từ Firebase Console → bỏ vào folder này
npm start
```

Bridge phải đang chạy thì học viên mới chat / nộp bài được.

### 2. Mở webapp

Cách đơn giản nhất cho dev local:

```bash
cd prototype-khoa-hoc-site
python -m http.server 8000
# Mở: http://localhost:8000
```

Hoặc `npx serve .`. Hoặc kéo thẳng `index.html` vào browser (Chrome/Edge).

### 3. Onboarding Day 0

- Lần đầu vào → modal hiện ra
- Điền 5 câu (tên, vai trò, công ty, mảng HR, pain point)
- Bấm "Lưu + Bắt đầu khóa" → bridge sinh welcome message cá nhân hóa qua Claude
- (Không còn bước nhập API key)

### 4. Học buổi 1-10

- Click buổi trên dashboard
- Mỗi buổi 5 bước tuần tự
- Bí thì click "💡 Hỏi bạn đồng hành" — bridge xử lý, ~5-30s sau có reply
- Nộp bài → bridge chấm tự động + feedback cụ thể
- Pass → unlock bước sau / buổi sau

### 5. Demo features

- Demo button "🎮 Xem reveal" trong mỗi buổi → mô phỏng khi xong Bước 3
- Live notif góc phải → cohort activity giả lập
- Settings → xem profile + reset

## Stage 0 — Dry-run miễn phí

### Setup cho 5 tester

1. Deploy webapp:
   - **Cloudflare Workers static** (đang dùng): xem [`DEPLOY-CLOUDFLARE.md`](DEPLOY-CLOUDFLARE.md)
   - Hoặc GitHub Pages / Vercel / Netlify (drag-drop folder)

2. Lan chạy `claude-bridge/bridge.js` trên máy mình (giờ cohort hoạt động)

3. URL public xong → gửi 5 tester:
   ```
   Em ơi, đăng ký Cohort #1 HR Builder VN dry-run free 4 tuần:
   - Mở: https://hrbuilder-vn.hotrocvscanner.workers.dev/
   - Đăng ký tài khoản (Google login hoặc email)
   - Onboarding 5 câu (KHÔNG cần API key — Lan đã setup AI sẵn)
   - Bắt đầu Buổi 1 ngay
   - Bí ping Lan Zalo
   ```

4. Chi phí AI cho dry-run: $0 (Lan đã có sẵn Claude Code subscription) — KHÔNG trả thêm

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

### Smoke test bridge

1. `cd claude-bridge && npm start` → thấy "Đang lắng nghe claude_requests..."
2. Mở webapp → onboarding → finish step 6 → quan sát terminal bridge có log "▶ ... done"
3. Nếu có response trong UI → pipeline OK

### Reset state (dev)

- Settings → "Reset toàn bộ" → xoá localStorage
- Hoặc browser DevTools → Application → Local Storage → Clear

### Test progression

1. Onboard
2. Vào Buổi 1, nộp Bước 1 với câu trả lời tốt → pass → Bước 2 unlock
3. Lặp lại 5 bước → Buổi 1 done → Buổi 2 unlock
4. Cuối khóa: cert.html hiển thị tên + ngày

## Cost ước tính

### Stage 0 (Path A — Claude bridge) — 5 tester × 4 tuần
- AI: $0 (Claude Code subscription Lan đã có sẵn)
- Hosting Cloudflare Workers: $0 (free tier static)
- Firebase Auth + Firestore: $0 (free tier dư xài)
- **Total: 0 VND** (chi phí ẩn: thời gian Lan giữ máy bật)

### Path B — Cohort #1 paid 30 student × 10 tuần (sau dry-run)
- Anthropic API trực tiếp: ~$50-80 (chat + grade ~30 user × 10 tuần)
- Hosting + Firebase: $0 (vẫn free tier)
- Domain hrbuilder.vn: ~$15/năm
- **Total: ~$80 / cohort ≈ 2M VND**
- Doanh thu: 30 × 5M = 150M
- **Margin: 98.7%**

## Roadmap tiếp theo

1. **[Stage 0]** Lan smoke test end-to-end với bridge → fix bug
2. Mời 5 HR friends test 4 tuần (URL public hiện có)
3. Collect feedback → iterate
4. **[Path B preparation]** Migrate bridge → Cloudflare Worker call Anthropic API trực tiếp khi có 3 case study
5. Launch paid cohort #1 mid-July 2026

## Liên hệ

Vũ Hoài Lan — vuhoailan@joywork.vn
