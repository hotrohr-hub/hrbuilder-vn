# Hướng dẫn deploy hrbuilder-vn lên Cloudflare Workers

File này dành cho anh Lân — fix vụ site `https://hrbuilder-vn.hotrocvscanner.workers.dev/` đang trả "There is nothing here yet".

## Bước 1 — Commit + push wrangler.toml lên GitHub

File `wrangler.toml` đã có trong repo (root level). Nếu chưa, push lên qua web hoặc CLI.

## Bước 2 — Cấu hình Cloudflare Worker (1 LẦN duy nhất)

Mở dashboard: **https://dash.cloudflare.com/** → đăng nhập `Hotrocvscanner@gmail.com`

1. Sidebar trái → **Workers & Pages**
2. Click vào Worker tên `hrbuilder-vn`
3. Vào tab **Settings** → cuộn xuống mục **Build**
4. Set các giá trị:

| Field | Giá trị |
|---|---|
| Root directory | **Để TRỐNG** |
| Build command | *(để trống)* |
| Deploy command | `npx wrangler deploy` |

5. Save → Cloudflare auto-trigger build mới ngay.

## Bước 3 — Test sau khi build xong

- https://hrbuilder-vn.hotrocvscanner.workers.dev/ → dashboard
- /lesson.html?id=1 → Buổi 1
- /cert.html?id=HBV-001-DEMO01 → cert demo
- /settings.html → cài đặt

## Khắc phục lỗi thường gặp

**"Your repository doesn't have a wrangler.toml"** → Sai Root directory.

**"Build failed: assets directory './' contains wrangler.toml"** → đổi Deploy command thành `npx wrangler@latest deploy`.

**Deploy OK nhưng 404** → check repo có `index.html` ở root chưa.
