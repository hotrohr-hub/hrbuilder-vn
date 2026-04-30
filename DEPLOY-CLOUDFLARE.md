# Hướng dẫn deploy hrbuilder-vn lên Cloudflare Workers

File này dành cho anh Lân — fix vụ site `https://hrbuilder-vn.hotrocvscanner.workers.dev/` đang trả "There is nothing here yet".

> **Đã xác nhận**: Repo `hotrohr-hub/hrbuilder-vn` chứa file site thẳng ở root (index.html, lessons-data.js, wrangler.toml... đều ở root level repo). Không có subfolder `prototype-khoa-hoc-site/`.

## Bước 1 — Commit + push wrangler.toml lên GitHub

Em vừa tạo 2 file local:
- `prototype-khoa-hoc-site/wrangler.toml` (config Cloudflare)
- `prototype-khoa-hoc-site/DEPLOY-CLOUDFLARE.md` (file này)

Anh Lân mở terminal/PowerShell, chạy:

```bash
cd "C:\Users\DELL\Documents\Đào tạo HR AI\prototype-khoa-hoc-site"
git add wrangler.toml DEPLOY-CLOUDFLARE.md
git commit -m "feat: thêm wrangler.toml để Cloudflare deploy static assets"
git push
```

Sau khi push → vào https://github.com/hotrohr-hub/hrbuilder-vn xem có file `wrangler.toml` ở root chưa. Có là OK.

## Bước 2 — Cấu hình Cloudflare Worker (1 LẦN duy nhất)

Mở dashboard: **https://dash.cloudflare.com/** → đăng nhập `Hotrocvscanner@gmail.com`

1. Sidebar trái → **Workers & Pages**
2. Click vào Worker tên `hrbuilder-vn`
3. Vào tab **Settings** → cuộn xuống mục **Build** (hoặc **Builds & Deployments**)
4. Set các giá trị:

| Field | Giá trị |
|---|---|
| Root directory | **Để TRỐNG** (vì repo không có subfolder) |
| Build command | *(để trống)* |
| Deploy command | `npx wrangler deploy` |

5. Save → Cloudflare auto-trigger build mới ngay.

## Bước 3 — Chờ build xong

- Tab **Deployments** → thấy build mới đang chạy
- Đợi ~30 giây – 2 phút
- Status chuyển sang **Active** + có URL preview

## Bước 4 — Test

Mở trong browser:

- https://hrbuilder-vn.hotrocvscanner.workers.dev/ → phải hiện dashboard HR Builder VN
- https://hrbuilder-vn.hotrocvscanner.workers.dev/lesson.html?id=1 → trang Buổi 1
- https://hrbuilder-vn.hotrocvscanner.workers.dev/cert.html?id=HBV-001-DEMO01 → trang chứng chỉ demo
- https://hrbuilder-vn.hotrocvscanner.workers.dev/settings.html → trang cài đặt

Nếu vẫn trả "There is nothing here yet" → check tab **Logs** trong Cloudflare Worker xem error gì. Báo em.

## Khắc phục một số lỗi thường gặp

### "Your repository doesn't have a wrangler.toml or wrangler.jsonc"
→ Sai Root directory. Vào Settings → Build → đổi Root directory về `prototype-khoa-hoc-site` (hoặc trống tuỳ cấu trúc repo). Save.

### "Build failed: assets directory './' contains wrangler.toml"
→ Wrangler version cũ. Trong tab Settings → Build → đổi `Deploy command` thành `npx wrangler@latest deploy`. Save.

### Deploy thành công nhưng URL trả 404
→ File `index.html` chưa có ở folder gốc của assets. Check git: `git ls-files | grep index.html` — phải thấy `prototype-khoa-hoc-site/index.html` (hoặc `index.html` ở root nếu repo flat).

## Sau khi site live

Em sẽ test full flow:
- Onboarding 5 câu (KHÔNG còn nhập API key — kiến trúc đã đổi sang Claude bridge của Lân, xem `claude-bridge/README.md`)
- Vào Buổi 1, gửi 1 prompt cho "Bạn đồng hành" → kiểm tra bridge có xử lý không
- Nộp bài thử → check chấm điểm AI có ra đúng feedback
- Verify cert page với ID demo

⚠ Lưu ý: Lan phải chạy `cd claude-bridge && npm start` trên máy mình thì AI mới hoạt động. Nếu bridge offline, học viên thấy timeout 4 phút khi chat/nộp bài.

Nếu chỗ nào bug em báo lại để fix.
