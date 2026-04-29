TEST_REPLACEMENT_LINE_1
TEST_REPLACEMENT_LINE_2// Dữ liệu 10 buổi HR Builder VN — viết theo lối "giáo sư Đinh Tiến Dũng": tếu táo, có nhịp, đôi khi lạc đề
// Mỗi buổi: 1 nguyên lý + 5 bước + 3 hint + 3 tầng đào sâu

const LESSONS = {
  1: {
    week: 'TUẦN 1', duration: '90-150 phút tuỳ tốc độ',
    title: 'Bữa nay ta làm cái cổng HR cho công ty mình. Chín mươi phút. Chạy đẹp. Đẹp đến mức sếp ngỡ HR tự làm.',
    sub: 'Người làm nhanh xong trong 90 phút. Người mới lần đầu đụng **Cline** (tải về VSCode, free) có thể mất 2-2.5 tiếng (đặc biệt step 4 — form Telegram). Cuối buổi: cổng HR chạy local + plan deploy public ở Buổi 1.5.',
    principle: { num: 1, name: 'Tự học cùng máy' },
    hints: [
      'Cần biết cái gì — xin anh chị đừng mở Google ra nữa, tội nghiệp Google…',
      'Hỏi thẳng máy ấy. Nó biết anh chị làm HR, nó hiểu anh chị đang vướng cái gì…',
      'AI dạy anh chị dùng AI. Nghe vòng vo, nhưng cả khóa này mọc lên từ đó',
    ],
    revealMsg: 'Cần biết gì để giải bài → hỏi thẳng máy. Đừng vòng qua Google nữa. Cái rễ của khóa nằm ở đây. Mà rễ thì phải sâu — các cụ đã nói rồi, tôi xin không nhắc lại.',
    layers: [
      { name: 'Là cái gì', text: 'Cần biết X để làm cổng HR → hỏi thẳng máy. Đơn giản vậy thôi. Máy nó nhớ anh chị làm mảng nào, nên anh chị không phải giải thích từ đầu mỗi lần — đỡ một mỏi miệng. Google thì khác. Google quẳng cho anh chị mười cái link rồi đi mất, để anh chị ngồi tự đọc, tự lọc, tự đoán xem cái nào dùng được. Nỗi khổ này tôi tin anh chị đã quen.' },
      { name: 'Vì sao trúng', text: 'Lý do, kỳ thực, không có gì cao siêu. Máy đã đọc giúp anh chị rồi. Đọc xong nó tóm lại thành câu trả lời. Tôi xin được nhấn mạnh một ý mà nhiều người hay nhầm: máy không thông minh hơn anh chị đâu. Nó chỉ chăm hơn. Mà chăm, đôi khi, lại hơn thông minh. Các cụ chắc cũng đồng ý — chỉ là quên không ghi vào ca dao.' },
      { name: 'Khi nào đừng hỏi máy', text: 'Có lúc anh chị nên cất máy đi mà mở văn bản gốc ra. Chuyện luật chẳng hạn — BHXH, hợp đồng lao động — máy mà lỡ phịa con số, sếp hỏi lại anh chị không cãi nổi đâu. Hợp đồng quan trọng cũng vậy: luật sư học bảy năm chứ có ít, không phải để máy thay. À, còn một ý nữa — data nhạy cảm. Cái này tôi không nói dài: đừng quăng vào prompt. Mất thì khổ. Có khi không phải mỗi mình anh chị khổ.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Em chưa biết HTML, làm cổng HR kiểu gì?" Câu hỏi rất hay. Câu trả lời ngắn hơn câu hỏi: không cần biết. Năm 2026 rồi, code là việc của máy. Việc của anh chị là mở miệng ra. Chín mươi phút nữa cái link nó nằm trên Zalo bio rồi — ai vào cũng tưởng anh chị vừa đi bootcamp ba tháng về. Thực ra HR tự làm. À mà không hẳn. HR có cái đứa em phụ tên là **Cline**.',
    outcomes: {
      cam: [
        'Cổng HR chạy ở localhost, có ba nút (xin nghỉ phép · hỏi luật công ty · đăng ký team building)',
        'Form submit → tin bay về Telegram anh chị (không mất một xu cài đặt)',
        'URL công khai sẽ deploy ở Buổi 1.5 (Cloudflare Pages — không cần hiểu DevOps là gì)',
      ],
      tuduy: [
        'Cline khác ChatGPT — nó tự tạo file, tự chạy code, không cần anh chị copy paste như đầu lão',
        'Tả việc cho máy y như viết JD cho nhân viên mới: rõ thì việc xong, mơ hồ thì khỏi bàn',
        'Bí gì hỏi nó. Đừng quay sang Google nữa, mất thì giờ mà nhiều khi cũng không ra',
      ],
    },
    steps: [
      {
        title: 'Cài VSCode + mở rộng Cline', xp: 20,
        desc: 'Đây là Buổi 0 thật ra — chưa paste prompt vội. Theo 6 bước hướng dẫn dưới đây. Tất cả free.',
        sampleType: 'instruction',
        samplePrompt: `1. Tải VSCode từ code.visualstudio.com → install như app thường
2. Mở VSCode → vào Extensions (icon chữ lập phương bên trái)
3. Tìm "Cline" → click Install (của Cline team, xác nhận tác giả)
4. Sau khi install xong, reload VSCode
5. Click Cline icon trên cạnh trái → chọn "New chat session"
6. Khi thấy ô chat (hỏi "Bạn cần làm gì?") → anh chị đã sẵn sàng. Sang Step 2.

⚠ Nếu kẹt ở bước nào: dùng chính Cline hỏi "Em kẹt cài Cline, lỗi là ...", không hỏi Google. Cline sẽ giúp.`,
      },
      {
        title: 'Một câu → máy dựng cổng HR', xp: 50,
        desc: 'Paste prompt mẫu dưới vào ô chat Cline, điền chỗ [...] rồi nhấn Enter. Anh chị ngồi xem code vẫy vẫy tự tạo, không đụng gì.',
        sampleType: 'prompt',
        samplePrompt: `Tôi tên là [TÊN BẠN — ví dụ: Nguyễn Thị Tuyền].
Tôi làm [VAI TRÒ — ví dụ: HR Executive] tại [CÔNG TY — ví dụ: An Nam Retail].

Hãy tạo cho tôi 1 cổng HR hoàn chỉnh trong duy nhất 1 file index.html:
- Giao diện trang chủ: tên công ty + logo placeholder + giới thiệu 1 dòng
- Ba nút chính:
  1. Xin nghỉ phép (icon 📅)
  2. Hỏi luật công ty (icon ❓)
  3. Đăng ký team building (icon 🎉)
- Mỗi nút click → form popup xuất hiện
- Form: Tên + Email/SĐT + Nội dung → "Gửi"
- Theme dark mode, animation mượt, không quá ngôn tình

Tạo xong: mở localhost cho tôi preview ngay. Nó sẽ là base cho form Telegram ở step 4.`,
      },
      {
        title: 'Tuỳ chỉnh màu sắc + logo công ty', xp: 30,
        desc: 'Test sức mạnh "ra lệnh". Paste vài câu, máy sửa liền.',
        sampleType: 'prompt',
        samplePrompt: `Sửa cổng HR:
1. Đổi theme background từ dark sang [MÀU — ví dụ: xanh dương gradient / xám nhạt / nâu đất]
2. Thêm logo placeholder với text "[TÊN CÔNG TY]" ở trên cùng
3. Thêm footer: năm thành lập + số điện thoại + "© 20XX. All rights reserved."

Sau khi sửa, refresh browser cho tôi xem.`,
      },
      {
        title: 'Kết nối form → Telegram bot', xp: 60,
        desc: '⚠ Step này CẦN 2 PRE-REQUISITE. Đọc kỹ phần dưới TRƯỚC khi paste prompt — nếu không sẽ kẹt 15-30 phút.',
        sampleType: 'prompt',
        samplePrompt: `📋 PRE-REQUISITE — làm 2 việc này TRƯỚC khi paste prompt:

1. LẤY BOT TOKEN:
   • Mở Telegram → tìm @BotFather → bấm Start
   • Gõ /newbot → đặt tên bot (vd "HR_Bot") → đặt username (vd "hr_company_bot")
   • Copy chuỗi dạng "8123456789:ABC-DEF1234..." — đây là BOT_TOKEN

2. LẤY CHAT_ID CỦA BẠN:
   • Trên Telegram tìm @userinfobot → bấm Start
   • Nó trả về số (vd "987654321") — đây là CHAT_ID (số cá nhân của anh chị)

Có 2 thứ rồi → paste prompt sau:
─────────────────────────
Sửa index.html: khi người dùng bấm "Gửi" trên form popup:
1. Form gửi POST tới Telegram Bot API
   - Bot token: [PASTE BOT_TOKEN VÀO ĐÂY]
   - Chat ID: [PASTE CHAT_ID VÀO ĐÂY]
2. Tin nhắn format:
   📝 [Tên người dùng]
   SĐT/Email: [input]
   Yêu cầu: [xin nghỉ / hỏi luật / team building]
   Nội dung: [input]
3. Hiển thị status: "Đang gửi…" → "✅ Đã gửi" hoặc "❌ Lỗi: [lý do]"

Test: điền form thật, check Telegram cá nhân của anh chị xem tin có tới không.`,
      },
      {
        title: 'Ngẫm lại: ba mươi phút nữa anh chị đã làm gì?', xp: 40,
        desc: 'Step duy nhất KHÔNG paste prompt cho máy — anh chị tự viết. Bài này bot chấm theo rubric 3 phần dưới đây. Thiếu 1 phần là borderline.',
        gradingCriteria: [
          'Phần 1: liệt kê đủ 5 việc đã làm, mỗi việc có ít nhất 2 câu (làm gì + chỗ khó/dễ). KHÔNG chấp nhận "xong", "ok", "đã làm".',
          'Phần 2: có ít nhất 1 câu hỏi cụ thể về điều chưa rõ. Câu chung chung kiểu "khoá hay không thầy?" KHÔNG tính.',
          'Phần 3: chọn 1 bài HR cụ thể + mô tả prompt sẽ paste + kỳ vọng kết quả. Tối thiểu 3 câu. "Tôi sẽ áp dụng" không kèm chi tiết = fail phần này.',
        ],
        sampleType: 'rubric',
        samplePrompt: `📝 Cấu trúc bài tổng kết (paste vào textarea bên dưới):

PHẦN 1 — NĂM THỨ EM LÀM HÔM NAY (mỗi thứ 2 câu, ghi rõ làm gì + chỗ khó):
1. ...
2. ...
3. ...
4. ...
5. ...

PHẦN 2 — MỘT CÂU HỎI EM CÒN VƯỚNG (thầy sẽ trả lời trên Zalo cohort):
> ...

PHẦN 3 — MỘT BÀI HR EM SẼ ÁP TƯ DUY VỪA HỌC (3-5 câu):
- Bài HR đó là gì:
- Em sẽ paste prompt như nào:
- Kỳ vọng kết quả ra sao:`,
      },
    ],
  },

  2: {
    week: 'TUẦN 2', duration: '90 phút',
    title: 'Buổi 2 — Bữa nay ta screen ba mươi CV thật. Năm phút. Cái việc to tôi sẽ chia thành năm bước nhỏ cho máy xử lần lượt.',
    sub: 'CV là CV thật, không phải demo. Cái output cũng không phải Sheet chán chường — là dashboard gửi cho sếp, sếp click vào ứng viên là nhìn modal đẹp như báo cáo của tập đoàn lớn. Buổi này một câu prompt xong.',
    principle: { num: 2, name: 'Chia nhỏ việc' },
    hints: [
      'Anh chị có thấy — bài "screen ba mươi CV" nó không phải MỘT việc đâu',
      'Nó là năm việc nhỏ máy xử từng bước một: đọc rồi trích, đối chiếu rồi chấm, cuối cùng vẽ ra dashboard',
      'Việc to chia nhỏ → mỗi mảnh máy biết phải làm gì rõ ràng → kết quả ra đúng ý',
    ],
    revealMsg: 'Bài to mà khó → chia ra thành từng mảnh nhỏ rõ ràng → máy xử từng mảnh một, không bị lộn xộn. Đây là tư duy đắt nhất cả khóa, sau cái rễ ở Buổi 1.',
    layers: [
      { name: 'Là cái gì', text: 'Việc khó thì tách thành năm bảy bước nhỏ, mỗi bước có đầu vào đầu ra cụ thể. Máy xử từng bước một, không bị cái gọi là "ngợp" — tôi mượn chữ này từ các em sinh viên thi cuối kỳ, máy cũng vậy, quá nhiều việc một lúc là nó ngợp.' },
      { name: 'Vì sao trúng', text: 'Prompt to mà mơ hồ thì máy đoán mò, đoán mò thì sai. Nhưng prompt năm bước rõ ràng thì máy biết phải làm gì lần lượt, sai chỗ nào sửa chỗ ấy chứ không phải đập đi xây lại từ đầu. Cái này bọn HR ta hay gọi là "có quy trình", tên hơi khô, nhưng nó work.' },
      { name: 'Khi nào đừng dùng', text: 'Việc đơn giản một bước — kiểu "tóm tắt giúp tôi đoạn này thôi" — thì đừng chia nhỏ, đừng overengineer. Chia chỉ làm khi việc có ba bước rõ trở lên. Nhỏ quá mà cũng chia thì giống ăn phở mà phải lập biểu đồ Gantt, không cần thiết.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "CV thật có ảnh, có scan ngược chiều, máy mà đọc nhầm là sao?" Câu hỏi rất hay. Câu trả lời cũng vui: máy quý 4/2026 đọc CV scan tốt hơn anh chị tưởng — có khi tốt hơn cả anh chị vào lúc bốn giờ chiều mệt mỏi. Buổi này chúng ta test thẳng, không phải nghe tôi nói suông.',
    outcomes: {
      cam: [
        'Dashboard HTML chạy được, click vào ứng viên là ra modal popup',
        'Ba mươi CV đã chấm xong, mỗi CV có lý do cụ thể chứ không phải con số khô tanh',
        'Top 5 hiển thị radar chart so sánh năm chiều, sếp nhìn cái gật ngay',
      ],
      tuduy: [
        'Bài lớn → chia thành bước nhỏ. Quy trình ra trước, prompt theo sau',
        'Mỗi bước phải có đầu vào đầu ra rõ ràng, máy không tự diễn xuất được',
        'Anonymize trước khi đưa data cho máy — đừng để CV ứng viên đi du lịch ngoài ý muốn',
      ],
    },
    steps: [
      {
        title: 'Anonymize 30 CV (che SĐT, CCCD, tên, ảnh)', xp: 30,
        desc: '⚠ Theo Nghị định 13/2023 (bảo vệ dữ liệu cá nhân VN), CV chứa PII — anh chị phải che TRƯỚC khi đưa cho AI. KHÔNG chỉ che SĐT/CCCD như khoá cũ — bổ sung danh sách dưới.',
        sampleType: 'instruction',
        samplePrompt: `📋 PII (Personal Identifiable Information) cần ANONYMIZE TRƯỚC khi gửi cho AI:

✅ BẮT BUỘC redact:
- Họ tên đầy đủ → thay bằng "Ứng viên #1, #2, ..."
- Số điện thoại → che 4 số cuối (vd: 0901234*** )
- Email → giữ domain, che username (vd: ***@gmail.com)
- CCCD/CMND → xoá hoàn toàn
- Ảnh chân dung → xoá khỏi PDF
- LinkedIn URL → xoá
- Địa chỉ chi tiết → giữ Quận/Thành phố, xoá số nhà/đường

✅ GIỮ LẠI (không phải PII):
- Năm sinh / khoảng tuổi (vd: "26-30 tuổi")
- Giới tính
- Trường đại học, năm tốt nghiệp
- Kinh nghiệm (công ty cũ thì che tên, giữ "công ty bán lẻ ~500 nhân viên")
- Kỹ năng, ngôn ngữ, certificate

CÁCH LÀM (chọn 1):
(a) NHANH NHẤT — paste prompt cho Claude Code:
"Đọc tất cả file trong folder ./cvs/, anonymize theo checklist trên (giữ năm sinh, kỹ năng, giấu PII). Output sang folder ./cvs-anon/ giữ format gốc."

(b) THỦ CÔNG — mỗi CV mở Word/PDF, Find/Replace 7 mục PII trên. ~3 phút/CV × 30 = 90 phút.

⚠ Nếu công ty anh chị chưa có 30 CV thật: dùng bộ CV mẫu của khoá tại /sample-cvs/ (30 CV synthetic VN, đã anonymize sẵn).`,
      },
      {
        title: 'Một prompt, dashboard hiện ra', xp: 80,
        desc: 'Paste prompt 5 bước (CHIA NHỎ VIỆC) — máy chấm 30 CV → render dashboard. Đây là "wow moment" của khoá.',
        sampleType: 'prompt',
        samplePrompt: `Tôi vừa anonymize 30 CV trong folder ./cvs-anon/.
Vai trò tuyển: [VAI TRÒ — vd: Sales Lead chuỗi bán lẻ]
Yêu cầu chính của vị trí (5 yêu cầu):
1. [Vd: 3+ năm kinh nghiệm bán lẻ]
2. [Vd: Tiếng Anh giao tiếp]
3. [Vd: Đã quản lý team ≥ 5 người]
4. [Vd: Sẵn sàng đi miền Bắc 1-2 lần/tháng]
5. [Vd: Lương kỳ vọng ≤ 25M]

Hãy làm theo 5 BƯỚC (chia nhỏ việc):
BƯỚC 1: Đọc 30 CV → trích {id, exp_years, key_skills[], salary_expect_M, languages[], management_yrs, location}
BƯỚC 2: Đối chiếu mỗi CV với 5 yêu cầu trên → cho điểm 0-10 mỗi yêu cầu, ghi 1 câu lý do
BƯỚC 3: Tổng score = trung bình 5 yêu cầu → rank
BƯỚC 4: Top 5 → trích thêm 2 quote từ CV làm evidence
BƯỚC 5: Render file dashboard.html (1 file standalone, dùng Chart.js qua CDN):
  - Bảng 30 ứng viên (sort/filter), highlight Top 5
  - Click 1 hàng → modal popup hiện CV anonymized + radar chart 5 chiều (5 yêu cầu)
  - Top 5 panel riêng, radar chart so sánh 5 người
  - Theme dark mode

Mở dashboard.html cho tôi xem.`,
      },
      {
        title: 'Sửa đi sửa lại: bo tròn avatar, thêm cột', xp: 30,
        desc: 'Test sức mạnh "iterate". Paste 1 lệnh sửa, máy update cả schema + UI.',
        sampleType: 'prompt',
        samplePrompt: `Sửa dashboard.html:
1. Thêm cột "Lương kỳ vọng (M VND)" — sort được
2. Bo tròn avatar mỗi hàng (dù đang là placeholder, vẫn cần round)
3. Thêm filter dropdown "Lọc theo khu vực: TP.HCM / Hà Nội / Khác"
4. Top 5 panel — đổi từ list dọc sang grid 5 cột

Refresh browser sau khi sửa.`,
      },
      {
        title: 'Click ứng viên ra modal popup', xp: 40,
        desc: 'Modal đẹp = sếp gật ngay. Paste prompt thêm chi tiết.',
        sampleType: 'prompt',
        samplePrompt: `Sửa modal popup khi click 1 ứng viên trong dashboard:
1. Hiện 4 phần:
   - Header: ID + Tổng score + radar chart cá nhân
   - "Match" (xanh lá): 2-3 câu evidence chứng minh ứng viên match yêu cầu
   - "Miss" (cam): điểm yếu chính, 1-2 câu
   - Bottom: 3 nút action giả "📞 Gọi", "📧 Email", "📅 Hẹn phỏng vấn"
2. Modal có animation slide-in từ phải, click ngoài = đóng
3. Phím ESC cũng đóng modal được

Refresh + click thử 1 ứng viên Top 5 cho tôi xem.`,
      },
      {
        title: 'Đo Trước/Sau và viết transfer plan', xp: 70,
        desc: 'Step duy nhất KHÔNG paste prompt — anh chị tự viết. Bot chấm theo rubric 4 phần.',
        sampleType: 'rubric',
        samplePrompt: `📝 Cấu trúc bài tổng kết Buổi 2:

PHẦN 1 — BẢNG TRƯỚC/SAU (≥ 3 hàng số liệu cụ thể):
| Tiêu chí | Trước (làm tay) | Sau (dùng agent) | Tiết kiệm |
|---|---|---|---|
| Thời gian sàng 30 CV | __ phút | __ phút | __% |
| Số CV miss top thực tế | __ | __ | |
| __ | __ | __ | |

PHẦN 2 — TƯ DUY "CHIA NHỎ VIỆC" ĐÃ DÙNG NHƯ THẾ NÀO (3-5 câu):
> Bài này tôi chia thành ... bước, mỗi bước có đầu vào X và đầu ra Y, mục đích là ...

PHẦN 3 — 1 CÂU HỎI EM CÒN VƯỚNG:
> ...

PHẦN 4 — BÀI HR KHÁC EM SẼ ÁP "CHIA NHỎ VIỆC" (3-5 câu):
- Bài đó là gì:
- Tôi sẽ chia thành mấy bước, mỗi bước làm gì:
- Kỳ vọng kết quả gì:`,
        gradingCriteria: [
          'Phần 1: bảng Trước/Sau có ít nhất 3 hàng, mỗi hàng có CON SỐ cụ thể (phút/giờ/%/cái), KHÔNG chấp nhận "nhanh hơn", "đỡ hơn".',
          'Phần 2: mô tả ít nhất 3 bước chia nhỏ với input/output rõ. Câu chung chung "tôi chia thành nhiều bước" KHÔNG tính.',
          'Phần 3: có 1 câu hỏi cụ thể.',
          'Phần 4: chọn 1 bài HR khác (KHÔNG phải tuyển dụng) + chia ≥ 3 bước. "Tôi sẽ áp dụng vào HR" mà không cụ thể = fail.',
        ],
      },
    ],
  },

  3: {
    week: 'TUẦN 3', duration: '90 phút',
    title: 'Buổi 3 — Tả việc cho máy rõ như tả JD cho nhân viên mới. Đóng gói thành Skills Package, đồng nghiệp clone về máy năm phút là chạy.',
    sub: 'Mỗi buổi tôi paste prompt dài, đồng nghiệp cùng paste cũng được. Nhưng paste hai trăm dòng mỗi lần là... mệt. Buổi này tôi xin được rủ anh chị khác cách: viết hẳn một cái package, có brand công ty, có năm cái lệnh. Đồng nghiệp clone về máy là chạy được. Nói cách khác: anh chị nhân bản được chính mình.',
    principle: { num: 3, name: 'Tả việc rõ' },
    hints: [
      'Viết yêu cầu cho máy giống y như viết JD cho nhân viên mới…',
      'Rõ đến mức ai đọc cũng làm giống nhau, không tự diễn hay thêm bớt…',
      'Tách "kiến thức nghề" (rubric, brand) ra khỏi "quy trình" (cách chạy), để có thể update độc lập',
    ],
    revealMsg: 'Tả việc cho máy cũng là viết JD cho nhân viên ảo. Càng rõ, máy càng đúng ý. Càng mơ hồ, máy càng diễn xuất. Diễn xuất thì để Oscar, không để công sở.',
    layers: [
      { name: 'Là cái gì', text: 'Mỗi việc giao cho máy phải có đủ năm thứ: vai trò, các bước, tiêu chí pass, trường hợp đặc biệt, ví dụ input/output. Y như JD. Trong đời HR anh chị đã viết hàng trăm cái JD — giờ chỉ là viết JD cho một nhân viên không bao giờ xin nghỉ phép thôi.' },
      { name: 'Vì sao trúng', text: 'Máy nó không đọc được ý ngầm của anh chị đâu. Anh chị ngầm hiểu chứ máy không ngầm hiểu. Tả rõ → kết quả nhất quán → đồng nghiệp dùng cũng ra cùng output. Không phải mỗi người ngồi chạy, vừa chạy vừa cằn nhằn vì máy "lạc đề".' },
      { name: 'Khi nào đừng dùng', text: 'Việc khám phá — kiểu brainstorm sơ bộ, "anh cứ vẽ vài ý cho tôi xem" — thì đừng spec chặt. Spec chặt chỉ làm khi cần kết quả nhất quán + đồng nghiệp dùng lại. Brainstorm mà spec chặt thì giống đi ăn buffet mà tự gọi từng món, mất hết cái thú.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Đóng gói cho mệt thật. Paste prompt xong mỗi lần là OK rồi mà sao phải lưu?" Câu hỏi cũng hay. Nhưng paste hai trăm dòng prompt mỗi lần thì… mệt, mệt thật. Đóng gói rồi → đồng nghiệp gõ /screen-cv là chạy xong. Sếp hỏi "phòng mình có quy trình không?" → anh chị show cái folder, sếp gật liền. Đỡ phải giải trình mười lăm phút.',
    outcomes: {
      cam: [
        'GitHub repo private có brand công ty anh chị',
        'Năm lệnh + sáu file skill, gọn ghẽ như tủ thuốc',
        'Đồng nghiệp clone về máy năm phút là chạy được mà không cần ask anh chị',
      ],
      tuduy: [
        'Skill là kiến thức nghề, ít khi sửa. Command là quy trình, sửa thường xuyên',
        'Tách hai cái ra → đổi rubric không phải viết lại quy trình toàn bộ',
        'Một lần định nghĩa rõ, cả team dùng cùng một cách',
      ],
    },
    steps: [
      {
        title: 'Tạo cấu trúc Skills Package', xp: 30,
        desc: 'Folder .claude/skills/ với SKILL.md + rubric + brand-voice + format. Cái này máy tạo giúp, anh chị chỉ ngồi duyệt.',
        sampleType: 'prompt',
        samplePrompt: `Tạo cho tôi cấu trúc Skills Package chuẩn cho HR Việt Nam:

📁 .claude/skills/
   ├── screen-cv/SKILL.md       (rubric chấm CV cho [VAI TRÒ — vd: HR Executive])
   ├── draft-jd/SKILL.md         (template JD chuẩn cho công ty SME Việt)
   ├── brand-voice/SKILL.md      (tone công ty + từ cấm)
   ├── compliance/SKILL.md       (Nghị định 13/2023 PII checklist)

Mỗi SKILL.md gồm: Mục đích · Khi nào dùng · 5 ví dụ input/output · Tiêu chí pass.

Tạo xong: in cây folder + show 3 file đầu tiên cho tôi review.`,
        gradingCriteria: ['Có ≥3 skill folder', 'Mỗi SKILL.md có Mục đích + Khi nào dùng + ≥3 ví dụ + Tiêu chí pass', 'Folder name viết kebab-case không space'],
      },
      {
        title: 'Điền brand voice công ty anh chị', xp: 50,
        desc: 'Tone, từ cấm dùng, phúc lợi mặc định, format JD bắt buộc. Đây là phần CHỈ anh chị biết, máy đoán không nổi.',
        sampleType: 'prompt',
        samplePrompt: `Điền cho tôi file .claude/skills/brand-voice/SKILL.md theo brand công ty [TÊN CÔNG TY]:

- Tone: [thân thiện / chuyên nghiệp / trang trọng]
- 5 từ KHÔNG được dùng: [vd: "ứng viên đẹp trai", "lương cạnh tranh" mà không số…]
- Phúc lợi mặc định công ty: [13 tháng + BHXH + ăn trưa…]
- Format JD bắt buộc: 6 mục cố định (Vị trí · Mô tả · Yêu cầu · Quyền lợi · Cách ứng tuyển · Liên hệ)

Giữ tone công ty, không "AI giọng".`,
        gradingCriteria: ['Có tone cụ thể (không general)', 'Có ≥5 từ cấm', 'Có ≥3 phúc lợi cụ thể có số', 'Format JD có ≥5 mục'],
      },
      {
        title: 'Build 5 lệnh: /screen-cv, /draft-jd…', xp: 60,
        desc: 'Mỗi lệnh ngắn gọn — gọi skill, không tự định nghĩa rubric. Tách bạch ra cho dễ sửa sau.',
        sampleType: 'prompt',
        samplePrompt: `Tạo 5 file lệnh trong .claude/commands/:

1. /screen-cv → đọc CV, chấm theo skill screen-cv, output bảng top 5
2. /draft-jd → nhận vị trí + level, output JD đúng brand
3. /interview-question → gen 10 câu phỏng vấn theo competency
4. /onboard-checklist → list checklist 30/60/90 ngày cho vai trò mới
5. /policy-explain → giải thích 1 policy nội bộ cho nhân viên mới

Mỗi command file CHỈ gọi skill tương ứng + truyền tham số. KHÔNG copy logic skill vào command.`,
        gradingCriteria: ['Đủ 5 file command', 'Mỗi command ≤30 dòng', 'Command gọi skill bằng @skill (không inline rubric)', 'Có example usage trong mỗi command'],
      },
      {
        title: 'Test với JD ngành khác', xp: 40,
        desc: 'Chạy /draft-jd cho một vị trí khác hẳn ngành chính. Brand có giữ được không? Hay máy "lạc giọng"?',
        sampleType: 'prompt',
        samplePrompt: `Test brand voice của Skills Package: chạy /draft-jd cho 3 vị trí khác hẳn nhau:

1. [Vị trí gốc của anh chị — vd: HR Executive]
2. Ngành 100% khác — vd: Senior Backend Engineer
3. Ngành lạ hơn nữa — vd: Đầu bếp trưởng nhà hàng

So 3 JD: brand công ty có giữ giống nhau không? Tone có lệch không?
Nếu lệch ở vị trí 2/3 → quay lại brand-voice/SKILL.md viết rõ hơn.`,
        gradingCriteria: ['Test ≥3 vị trí khác ngành', 'Show diff/so sánh brand consistency', 'Có 1 lần fix brand-voice sau khi phát hiện lệch'],
      },
      {
        title: 'Push GitHub + share đồng nghiệp', xp: 70,
        desc: 'Repo private. Đồng nghiệp clone, chạy, ghi nhận trải nghiệm. Đây là khoảnh khắc anh chị nhân bản được mình.',
        sampleType: 'instruction',
        samplePrompt: `📋 Phần A — Push code:

1. Trong Claude Code, gõ: \`git init && git add . && git commit -m "Skills Package v1"\`
2. Tạo repo PRIVATE trên github.com/new tên "skills-hr-[ten-cong-ty]"
3. \`git remote add origin <url>\` → \`git push -u origin main\`

📋 Phần B — Share + thu feedback (≥1 đồng nghiệp):

1. Invite 1 đồng nghiệp HR vào repo (Settings → Collaborators)
2. Gửi cho họ: link repo + 5 phút screencast anh chị chạy /screen-cv
3. Ghi nhận: họ clone về mất bao lâu? Lệnh nào họ kẹt? Brand có giữ không khi họ chạy?

Đính file FEEDBACK-[ten-dong-nghiep].md vào repo — đây là evidence để Lan chấm.`,
        gradingCriteria: ['Repo GitHub private active', 'Có ≥3 file skill + ≥5 file command', 'Có ≥1 file FEEDBACK đồng nghiệp đã thử', 'Đồng nghiệp clone & chạy được /screen-cv không cần Lan support'],
      },
    ],
  },

  4: {
    week: 'TUẦN 4', duration: '90 phút · ⭐ MỐC HOÀN 5M',
    prereqWarning: '⚠ Buổi này anh chị cần chọn 1 trong 2 path: (a) Claude Code Max ($100/tháng) chạy Routines cloud tự động, hoặc (b) Pro $20 chạy local cron + GitHub Actions (Lan hướng dẫn 1-1). Không chọn path nào → không pass mốc hoàn 5M.',
    title: 'Buổi 4 — Agent tự kích hoạt. Tắt laptop, agent vẫn ngồi xét CV trong đêm. Sáu giờ sáng nhắn tin cho anh chị kết quả.',
    sub: 'Sáu giờ sáng máy nhắn Telegram: "Đêm qua xử năm CV mới. Top 1: Vũ Thị An, 9.2/10." Anh chị đang ngủ, máy thì không ngủ. Agent chạy theo trigger — mỗi sáng lúc 6h, hoặc mỗi khi có file CV mới, hoặc theo webhook.',
    principle: { num: 4, name: 'Tự kích hoạt' },
    hints: [
      'Buổi 1-3 anh chị phải mở Claude Code thì agent mới chạy được…',
      'Buổi này agent chạy KHI sự kiện xảy ra — không cần anh chị ra lệnh nữa…',
      'Sáu giờ sáng → agent tự dậy → quét folder → screen CV → nhắn Telegram anh chị kết quả',
    ],
    revealMsg: 'Agent chạy tự động theo trigger (theo giờ, theo file mới, theo webhook). Anh chị không cần online. Tư duy này biến HR thành rảnh tay 24/7 — nghe quảng cáo quá, nhưng quả thực vậy.',
    layers: [
      { name: 'Là cái gì', text: 'Routines = agent chạy trên cloud Anthropic theo lịch, hay theo webhook, hay theo GitHub event. Tắt máy anh chị đi, agent vẫn chạy. Cái máy anh chị cuối cùng cũng được nghỉ phép — nó cảm ơn anh chị lắm đấy.' },
      { name: 'Vì sao trúng', text: 'Anthropic host agent cho anh chị, tính tiền theo lúc chạy — khoảng hai mươi cent một tháng cho một routine năm phút mỗi ngày. Anh chị không phải build server. Không phải hiểu cloud là gì. Chỉ cần biết bật cái nút "Activate".' },
      { name: 'Khi nào đừng dùng', text: 'Việc làm một lần thôi — kiểu "screen batch CV này hôm nay xong là xong" — đừng đẻ ra routine. Routine chỉ dành cho việc lặp nhiều lần. Việc một lần thì làm một lần, đẻ routine cho nó là phí tiền vừa phí tinh thần.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Data CV gửi cloud Anthropic có an toàn không?" Câu hỏi rất hay, rất nên hỏi sớm. Anthropic không train trên data routine của anh chị — anh chị bật zero retention là xong. Tuần 9 mình bàn sâu chuyện compliance, lúc đó anh chị yên tâm hơn.',
    outcomes: {
      cam: [
        'Routine (cloud Max HOẶC local cron Pro $20) active đủ 7 ngày liên tiếp — log kiểm chứng được',
        'Bảng ROI Trước/Sau với ≥ 3 measurable cụ thể (giờ/tuần, % accuracy, # CV xử lý)',
        'GitHub repo có ≥ 5 guardrails đầy đủ — phòng cháy chữa cháy luôn',
      ],
      tuduy: [
        'Trigger có ba kiểu: theo lịch / theo API / theo GitHub event',
        'Cloud > local khi cần 24/7 — đơn giản vậy thôi',
        'Mọi routine BẮT BUỘC có rào chắn. Không có rào, đừng deploy.',
      ],
    },
    steps: [
      {
        title: 'Setup trigger (cloud Max HOẶC local cron)', xp: 40,
        desc: 'Tuỳ plan: Max → cloud, Pro $20 → local. Cả 2 đều OK pass mốc.',
        sampleType: 'instruction',
        samplePrompt: `📋 Chọn 1 trong 2 path:

PATH A — CLAUDE CODE MAX ($100/tháng):
1. Mở claude.ai/code → tab "Routines" (nút bánh răng)
2. + New Routine → tên "Daily HR Briefing 6h"
3. Trigger: Schedule → 06:00 daily (Asia/Ho_Chi_Minh)
4. Save (chưa active)

PATH B — CLAUDE CODE PRO $20 (alternative):
1. Trên máy anh chị (luôn bật / có cloud sync), mở terminal
2. Chạy: \`crontab -e\` (Mac/Linux) hoặc Task Scheduler (Windows)
3. Thêm dòng: \`0 6 * * * cd ~/hr-builder-lan-1 && claude run prompt-routine.md > log-$(date +%Y%m%d).txt\`
4. Save → kiểm với: \`crontab -l\`

Cả 2 path đều cần Step 2 (viết prompt routine + guardrails).

⚠ Pro $20 path: máy anh chị phải bật 6h sáng (đặt báo thức wake máy). Nếu máy tắt ngày nào → ngày đó không tính vào "7 ngày liên tiếp" cam kết.`,
      },
      {
        title: 'Một prompt → Routine config + 5 guardrails', xp: 80,
        desc: 'Viết prompt routine (8 bước) + 5 guardrails BẮT BUỘC. Guardrail = rào chắn an toàn.',
        sampleType: 'prompt',
        samplePrompt: `📋 Lưu prompt sau vào file prompt-routine.md trong repo:

---
ROUTINE: Daily HR Briefing 06:00

CONTEXT: Tôi là [VAI TRÒ] @ [CÔNG TY]. Mảng [MẢNG]. Mỗi sáng cần 1 brief tóm gọn về CV mới + lịch hôm nay.

8 BƯỚC AGENT THỰC HIỆN:
1. Đọc folder ./cvs-incoming/ → list file mới (timestamp > 24h trước)
2. Anonymize PII (theo Nghị định 13 — checklist Buổi 2)
3. Score mỗi CV theo rubric công ty (đọc từ ./brand/rubric.md)
4. Top 3 → trích quote evidence
5. Đọc Google Calendar → lấy lịch hôm nay (interview, meeting)
6. Compile brief markdown: {top_cv, today_schedule, action_items}
7. Gửi brief tới Telegram chat_id [PASTE CHAT_ID]
8. Log vào ./logs/YYYY-MM-DD.md

5 GUARDRAILS BẮT BUỘC (KHÔNG được skip):
1. KHÔNG gửi PII chưa anonymize ra ngoài → check before each Gemini call
2. Timeout cứng 5 phút/CV → tránh infinite loop
3. Cost cap $0.50/run → routine tự stop nếu vượt
4. Nếu confidence < 70% → KHÔNG quyết, escalate qua Telegram "cần anh chị xem"
5. Mỗi run log đầy đủ vào ./logs/ — không silent fail

OUTPUT MẪU (xem ./samples/brief-example.md).
---

Sau khi save file, paste prompt này cho Claude Code:
"Đọc prompt-routine.md, validate 8 bước + 5 guardrails có đủ + actionable không. Liệt kê thiếu gì."`,
      },
      {
        title: 'Test "Run now" → Telegram đổ tin', xp: 50,
        desc: 'Test trước khi activate. Đảm bảo Telegram nhận được brief.',
        sampleType: 'instruction',
        samplePrompt: `1. Đảm bảo có ≥ 3 CV trong ./cvs-incoming/ (dùng CV mẫu từ Buổi 2 nếu cần)
2. Path A (Max): mở Routines → routine của anh chị → "Run now" button
3. Path B (Pro): chạy thủ công \`claude run prompt-routine.md\` để test
4. Đợi 2-5 phút (Gemini gọi 8 bước = ~30-60s/CV)
5. Check Telegram → bot phải nhắn brief markdown đầy đủ
6. Check ./logs/ → có file log timestamp đúng không

⚠ Nếu fail:
- Telegram không nhận → check token + chat_id trong file (cùng cách Buổi 1)
- Brief rỗng → check anonymize bước 2 có over-redact không
- Cost vượt → review guardrail 3 + giảm số CV/run`,
      },
      {
        title: 'Activate Routine + chạy 7 ngày', xp: 100,
        desc: 'Bật + theo dõi log mỗi sáng 7 ngày liên tiếp.',
        sampleType: 'instruction',
        samplePrompt: `1. Path A (Max): toggle "Active" trên Routines manager → ON
2. Path B (Pro): cron đã add ở Step 1 — verify với \`crontab -l\`

Mỗi sáng 6 ngày tới:
- Telegram phải có brief lúc 06:00-06:05
- Mở ./logs/ check log entry ngày đó
- Tick vào checklist:
  □ Day 1 (YYYY-MM-DD): brief OK / fail
  □ Day 2: ...
  □ Day 3: ...
  □ Day 4: ...
  □ Day 5: ...
  □ Day 6: ...
  □ Day 7: ...

⚠ Day nào fail (no brief, no log): ghi rõ lý do + fix ngay (đừng để fail 2 ngày liên tiếp).

Pass mốc: 7/7 ngày có brief + log. 6/7 = borderline, Lan review case-by-case. ≤5/7 = fail.`,
      },
      {
        title: 'Báo cáo Trước/Sau (mốc hoàn 5M)', xp: 130,
        desc: 'Đo cụ thể với 3 measurable. KHÔNG cần đạt "5h/tuần" — chỉ cần measurable + log đủ.',
        sampleType: 'rubric',
        samplePrompt: `📝 Bảng báo cáo Trước/Sau Buổi 4 — paste vào textarea bên dưới.

PHẦN 1 — 3 MEASURABLE CỨNG (BẮT BUỘC đủ 3):

| # | Tiêu chí | Trước (tuần làm tay) | Sau (tuần routine) | Evidence |
|---|---|---|---|---|
| 1 | Thời gian sàng CV/tuần | __ giờ | __ giờ | Link logs |
| 2 | # CV xử lý/tuần | __ CV | __ CV | Link logs |
| 3 | Accuracy (ứng viên qua phỏng vấn / total) | __% | __% | Link recruiter feedback |

PHẦN 2 — ROUTINE LOGS (link đính kèm):
- 7 entries log: [link folder logs]
- 7 Telegram screenshot: [link Drive]
- Routine config: [link prompt-routine.md trên GitHub]

PHẦN 3 — 5 GUARDRAILS đã trigger thực tế tuần qua (số lần):
- G1 (PII check): __ lần
- G2 (timeout): __ lần
- G3 (cost cap): __ lần
- G4 (confidence escalate): __ lần
- G5 (logging): __ lần

⚠ MỐC HOÀN 5M:
- PASS = 3/3 measurable nộp đủ + 7/7 ngày log + 5 guardrails functional
- KHÔNG yêu cầu "5h/tuần" — chỉ cần đo được + active 7 ngày
- Lan review evidence trong 48h → quyết định pass/fail/borderline`,
        gradingCriteria: [
          'Phần 1: đủ 3 hàng measurable, mỗi hàng có CON SỐ Trước + Sau (không "nhanh hơn"). Ô Evidence không được rỗng.',
          'Phần 2: ≥ 7 log entries (link folder hoặc paste 7 timestamp).',
          'Phần 3: 5 guardrails liệt kê số lần trigger (0 lần OK, miễn không rỗng).',
        ],
      },
    ],
  },

  5: {
    week: 'TUẦN 5', duration: '90 phút',
    title: 'Buổi 5 — Đưa công cụ cho agent. Nó kết nối Drive, Gmail, Zalo, HRIS. Thành đồng nghiệp ảo có tay chân, không phải chatbot xịn.',
    sub: 'Bốn buổi trước agent chỉ "biết", chưa "làm" được gì lớn — nó như nhân viên mới ngồi học quy trình. Buổi này agent có "tay chân" rồi — kết nối Drive, Gmail, Zalo OA, HRIS. Nó gửi email, nó log vào spreadsheet, nó trả lời candidate. Mỗi top 5 ứng viên sẽ nhận một microsite riêng, lời nhắn cá nhân hóa, lịch phỏng vấn nhúng sẵn. Recruiter bên đối thủ… há hốc.',
    principle: { num: 5, name: 'Đưa công cụ' },
    hints: [
      'Bốn tuần đầu agent chỉ "biết", chưa "làm" được gì lớn…',
      'Buổi này agent có "tay chân" — kết nối Drive, Gmail, Zalo, HRIS, máy có thể đi gửi email thật',
      'Click connect như bật notification điện thoại — không gõ một dòng API code',
    ],
    revealMsg: 'Cho agent quyền truy cập hệ thống thật → nó không còn là chatbot. Thành đồng nghiệp ảo có quyền hành động. Mà đồng nghiệp ảo thì không xin nghỉ ốm.',
    prereqWarning: '⚠ Buổi này cần Claude Code Max ($100/tháng) vì dùng MCP connectors. Pro $20 không chạy MCP được.',
    layers: [
      { name: 'Là cái gì', text: '**MCP** — viết tắt của một thứ tiếng Anh dài dòng tôi xin được lược qua — là chuẩn để agent kết nối Drive/Gmail/Zalo/Notion bằng vài cú click. Không gõ code API. Hồi 2024 muốn làm cái này phải thuê dev một tuần. Giờ click năm phút xong.' },
      { name: 'Vì sao trúng', text: 'Agent có "tay chân" thì làm việc thật, không chỉ chat suông. Chat suông giống nhân viên buôn chuyện hành lang — vui, nhưng không ra việc. Có tay chân thì nó đi pha cà phê, gửi email, log vào HRIS, trả lời Zalo. Khác hẳn.' },
      { name: 'Khi nào đừng dùng', text: 'Đừng connect hai mươi hệ thống cùng lúc. Bắt đầu ít ít. Mỗi connector có scope rõ — kiểu "Drive READ-ONLY folder cv-incoming/" — đừng để agent có chìa khóa toàn nhà. Có chìa khóa toàn nhà thì lỡ tay là banh nhà, không phải lỡ tay là quét lại bếp.' },
    ],
    lanVoice: 'Tôi nghe anh chị lo: "Sếp không cho dùng Zalo OA cho agent đâu." Câu này tôi nghe nhiều lắm. Cách giải quyết: làm pilot năm ứng viên trước, đo "agent giảm 60% câu hỏi candidate" → show sếp con số → sếp gật ngay. Đừng xin trước. Show kết quả trước. Người Việt chúng mình nghe số dễ gật hơn nghe lý thuyết.',
    outcomes: {
      cam: [
        'Bốn connector sáng đèn xanh, kết nối Drive/Gmail/Zalo/HRIS',
        'Năm microsite cá nhân hóa cho top 5 ứng viên, mỗi ứng viên một URL',
        '**Zalo OA** bot trả ba câu cơ bản, candidate hỏi không phải đợi mail HR',
      ],
      tuduy: [
        'Mỗi connector có scope rõ ràng — không scope rõ là không connect',
        'Audit hằng tuần — xem agent dùng connector nào, bao nhiêu lần',
        'Bắt đầu ít, scale dần. Đừng tham một lúc, không phải ai cũng cần cả năm connector',
      ],
    },
    steps: [
      {
        title: 'Connect 4 hệ thống (Drive/Gmail/Zalo/HRIS)',
        xp: 50,
        desc: 'Settings → MCP → Add. Bốn connector sáng đèn là OK. Đẹp như bốn cái đèn đường mới lắp.',
        sampleType: 'instruction',
        samplePrompt: `📋 Hướng dẫn Connect 4 MCP Connector:

BƯỚC 1 — Settings → Code Preferences → MCP
1. Click "Add MCP"
2. Thêm 4 connector: GoogleDrive, Gmail, Zalo, HRIS
3. Cấp quyền (OAuth): đăng nhập Google + Zalo OA admin

BƯỚC 2 — Chọn scope rõ ràng (KHÔNG toàn nhà):
- Drive: READ-ONLY folder "cv-incoming/" (chứa CV ứng viên)
- Gmail: READ folder "recruitment@" (outbox để draft email)
- Zalo: write-only OA "bot-candidate"
- HRIS: read "recruitment" sheet (chứa danh sách candidate)

BƯỚC 3 — Test: paste prompt:
"Đọc từ Drive folder cv-incoming/ năm file CVlatest. List tên, years experience."
Nếu agent trả được → OK.

⚠ Đừng cấp quyền "Full access" → để scope rõ "cv-incoming/" thôi.`,
        gradingCriteria: [
          'Bốn connector sáng đèn (Status: connected) — screenshot proof',
          'Mỗi connector có scope rõ (folder/label cụ thể, không "Full access")',
          'Test thành công: agent đọc được ≥1 file từ Drive hoặc Gmail',
        ],
      },
      {
        title: 'Một prompt → 5 microsite + 5 email draft',
        xp: 80,
        desc: 'Mỗi ứng viên một URL, lời nhắn personalized, lịch phỏng vấn nhúng sẵn. Cá nhân hóa thật, không phải mail merge thường.',
        sampleType: 'prompt',
        samplePrompt: `Tôi có 5 ứng viên top trong folder Drive "cv-top5/". Tôi muốn:

1. Tạo 5 microsite — mỗi ứng viên 1 URL riêng
2. Lịch phỏng vấn nhúng sẵn (Calendly link hoặc simple HTML form)
3. Email draft gửi cho mỗi ứng viên — personalized (gọi tên, mention skill chính, lịch phỏng vấn)

CONSTRAINTS:
- Microsite URL dùng slug (vd: /candidate-001/, KHÔNG dùng tên đầy đủ ứng viên — quy định PII)
- Email tone: chuyên nghiệp, warm, không "copy-paste thường"
- Background color theme: brand company [CHỌN 1 color]

Hãy:
1. Gen 5 file HTML (microsite) — save ./microsites/candidate-{id}.html
2. Gen 5 email draft — save ./emails/candidate-{id}.txt
3. List 5 URLs để tôi test

Mở ./microsites/candidate-001.html cho tôi xem.`,
        gradingCriteria: [
          '≥5 microsite files tạo được, mỗi cái dùng slug không tên riêng (PII safety)',
          '≥5 email draft, mỗi email personalized (có tên/skill ứng viên cụ thể)',
          'Lịch phỏng vấn nhúng sẵn — form hoặc Calendly link',
        ],
      },
      {
        title: 'Setup Zalo OA bot trả candidate',
        xp: 60,
        desc: 'Bot trả lời các câu cơ bản. Câu khó → escalate cho anh chị. Bot biết phận của nó, không tự diễn quá đà.',
        sampleType: 'prompt',
        samplePrompt: `Setup Zalo OA bot "bot-candidate" — trả lời ba câu basic:

PROMPT cho bot:

Bạn là Zalo OA bot cho vị trí [JOB TITLE — vd: Sales Lead].

RULESET:
1. Candidate hỏi "Lương bao nhiêu?" → trả: "[SALARY RANGE] + khác thưởng KPI"
2. Candidate hỏi "Địa chỉ công ty?" → trả: "[ADDRESS] + bản đồ link"
3. Candidate hỏi "Deadline nộp hồ sơ?" → trả: "[DATE] + link form submit"
4. Câu khó (kiến thức HR chuyên sâu) → escalate: "Câu này em chuyển cho HR [NAME]. Anh/chị sẽ được reply trong 24h"

LOG: mỗi tin nhắn → append vào ./zalo-logs.txt (timestamp, candidate_id, message, agent_response)

Test: gửi 3 tin nhắn sample từ 3 "ứng viên" khác nhau → verify bot reply đúng.`,
        gradingCriteria: [
          'Bot reply đúng 3 câu thường gặp (lương, địa chỉ, deadline)',
          'Câu không trong ruleset → escalate đúng (không tự bịa)',
          'Log file có ≥3 entries với timestamp cụ thể',
        ],
      },
      {
        title: 'Log activity vào HRIS công ty',
        xp: 50,
        desc: 'Tạo candidate record + activity log có timestamp. Sếp hỏi "ai đang ở vòng nào" → anh chị show được.',
        sampleType: 'prompt',
        samplePrompt: `Auto-log mỗi activity vào HRIS (Google Sheet):

HRIS Sheet schema:
| Candidate | Round | Stage | Timestamp | Action | Notes |
|---|---|---|---|---|---|
| Candidate #001 | 1 | Initial Screening | 2024-01-15 09:30 | email_sent | Microsite + calendar link |
| ... | ... | ... | ... | ... | ... |

AUTOMATION:
1. Sau khi gửi email microsite → log "email_sent + timestamp"
2. Sau khi Zalo bot trả → log "zalo_contacted + timestamp"
3. Nếu candidate submit form → log "form_submitted + timestamp"

Mỗi lần agent chạy, append 1 hàng vào Sheet.

Test: chạy 5 lần mock → bảng HRIS có ≥5 rows với timestamp khác nhau.`,
        gradingCriteria: [
          'HRIS Sheet có schema rõ (Candidate/Round/Stage/Timestamp/Action)',
          'Log ≥5 activity entries với timestamp autoupdate',
          'Mỗi action tương ứng event thật (email_sent, zalo_contacted, form_submitted)',
        ],
      },
      {
        title: 'Ngẫm: bài HR nào cần connector gì?',
        xp: 60,
        desc: 'Transfer plan: chọn một bài HR khác + bốn connector phù hợp. Không nhất thiết phải tuyển dụng.',
        sampleType: 'rubric',
        samplePrompt: `📝 Transfer Plan — Buổi 5:

Chọn 1 bài HR (KHÔNG phải tuyển dụng) + spec 4 connector sẽ dùng:

TEMPLATE:
Bài HR tôi chọn: [Vd: Payroll Processing]
Tại sao bài này cần automation: [2-3 câu + con số — vd: "HR mất 40 giờ/tháng check công, tính lương → auto được 80%"]

4 Connector tôi sẽ dùng:
1. Google Drive: [scope + tác dụng — vd: "READ timesheet folder → extract công"]
2. Gmail: [scope — vd: "WRITE payroll notification email → HR + accounting nhận"]
3. [Connector 3]: [mô tả — vd: "Slack → notify manager nếu công bất thường"]
4. [Connector 4]: [mô tả — vd: "HRIS → auto log payroll run date + status"]

Tôi sẽ viết prompt nào để chạy automation này? (3-5 dòng nhập cảnh + spec 5 bước)

⚠ Transfer plan phải khác Recruiter Agent (Buổi 1-5) — tư duy chứ không phải copy template.`,
        gradingCriteria: [
          'Chọn ≥1 bài HR khác (KHÔNG tuyển dụng) — ví dụ: Payroll / Onboarding / Offboarding / Sentiment',
          'Mỗi connector mapping rõ (READ/WRITE scope + tác dụng cụ thể)',
          'Prompt spec ≥3 bước (KHÔNG chung chung)',
          'Con số thời gian tiết kiệm cụ thể (giờ/tuần, %, đơn vị)',
        ],
      },
    ],
  },

  6: {
    week: 'TUẦN 6', duration: '90 phút',
    title: 'Buổi 6 — Phối hợp bốn agent chạy song song. Tốc độ nhanh gấp bốn lần. Một orchestrator điều phối như HR Manager.',
    sub: 'Buổi 5 agent một mình làm bảy việc, nó cũng mệt. Buổi này tôi xin được chia bảy việc cho bốn agent con chạy song song. Một agent screen CV, một đối chiếu với JD, một viết email, một tổng hợp báo cáo. Anh chị ngồi xem bốn cửa sổ làm việc cùng lúc — như xem trận bóng có bốn camera.',
    principle: { num: 6, name: 'Phối hợp nhiều agent' },
    hints: [
      'Buổi 5 agent của anh chị một mình làm bảy việc — nó cũng mệt…',
      'Buổi này chia bảy việc cho bốn agent con, chạy song song…',
      'Một orchestrator điều phối — như HR Manager điều team junior, nhưng team junior này không xin nghỉ phép',
    ],
    revealMsg: 'Việc to chia cho nhiều agent chuyên hóa. Mỗi agent một vai rõ ràng. Có một "trưởng team" điều phối. Nguyên tắc giống y team người thật, chỉ khác là không phải mời cà phê.',
    prereqWarning: '⚠ Buổi này cần Claude Code Max ($100/tháng) vì dùng multi-session (4 session chạy cùng lúc). Pro $20 không đủ resource.',
    layers: [
      { name: 'Là cái gì', text: 'Orchestrator agent chia task cho ba đến năm sub-agent. Mỗi sub-agent chuyên một vai: screener, matcher, writer, reporter. Đặt tên xong nghe oách phết, mà thực ra chỉ là máy phân vai cho máy.' },
      { name: 'Vì sao trúng', text: 'Volume cao, trên năm mươi task, lại cần chuyên hóa → multi-agent nhanh hơn ba đến năm lần. Mỗi agent giỏi một việc, không phải "đa năng nhưng trung bình". Ý này tôi mượn ý nhân sự: tuyển chuyên gia xịn hơn tuyển người-cái-gì-cũng-biết-một-tí.' },
      { name: 'Khi nào đừng dùng', text: 'Volume thấp, dưới hai mươi task → một agent đủ. Multi-agent tốn gấp bốn tiền API. Chỉ chính đáng khi có khối lượng. Đẻ multi-agent cho năm CV/tuần thì giống mua xe tải để đi chợ — chở được, nhưng phí xăng.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Gấp bốn tiền API có đáng không?" Câu hỏi rất hay. Đáp tùy quy mô. Năm chục CV/tuần thì chưa cần. Năm trăm CV/tuần thì multi-agent tiết kiệm anh chị mười lăm giờ một tuần — ROI tính ra đẹp lắm.',
    outcomes: {
      cam: [
        'Bốn sub-agent chạy song song, cửa sổ riêng biệt',
        'Orchestrator điều phối, không có chuyện cãi nhau giữa agent',
        'Loom screencast 90 giây show bốn panel cùng lúc — đem khoe sếp được',
      ],
      tuduy: [
        'Khi nào dùng multi, khi nào dùng single — đo volume rồi quyết',
        'Pattern: Orchestrator + sub-agents. Đơn giản mà mạnh',
        'Coordination qua shared file. Đừng để agent đoán ý nhau',
      ],
    },
    steps: [
      {
        title: 'Mở 4 session trong sidebar',
        xp: 30,
        desc: 'Click "+" bốn lần. Đặt tên: screener / matcher / writer / reporter. Đặt tên xong tự nhiên thấy mình giống quản lý dự án thật.',
        sampleType: 'instruction',
        samplePrompt: `📋 Hướng dẫn mở 4 multi-session:

BƯỚC 1 — Mở 4 session trong sidebar:
1. Click "+" icon (tạo session mới)
2. Repeat 3 lần nữa → 4 session tổng cộng
3. Đặt tên: "Screener" / "Matcher" / "Writer" / "Reporter"

BƯỚC 2 — Xác nhận:
- 4 session hiển thị trong sidebar cùng lúc
- Click vô từng session thay đổi context
- Nói chuyện với 4 agent khác nhau mà không tắt session

TEST: paste prompt trong "Screener" session: "Tôi là agent Screener. Vai trò của tôi là gì?"
Nếu agent trả được → Multi-session setup OK.`,
        gradingCriteria: [
          '4 session mở được trong sidebar, đặt tên rõ (Screener/Matcher/Writer/Reporter)',
          'Mỗi session là context riêng (chat trong session 1 không ảnh hưởng session 2)',
          'Screenshot proof tất cả 4 session trong sidebar',
        ],
      },
      {
        title: 'Setup orchestrator điều phối',
        xp: 70,
        desc: 'Orchestrator: chia task, theo dõi progress, giải quyết khi sub-agent vướng. Nó là cái HR Manager ảo của anh chị.',
        sampleType: 'prompt',
        samplePrompt: `Bạn là Orchestrator HR Manager. Vai trò của bạn:

INPUT: 100 CV + 3 vị trí cần tuyển
OUTPUT: Bảng final ranking 3 vị trí × top 10 ứng viên mỗi vị trí

QUYẾT ĐỊNH HẰNG NGÀY (công dân cho 4 sub-agent):
1. Screener: "Lọc 100 CV → output 30 CV pass basic criteria (có kinh nghiệm, không red flag)"
2. Matcher: "Đối chiếu 30 CV vs 3 JD → cho điểm 0-10 match từng vị trí"
3. Writer: "Draft 30 email → mỗi email personalized cho từng ứng viên"
4. Reporter: "Tổng hợp → tạo dashboard 3 vị trí × top 10"

TƯ DUY ĐIỀU PHỐI:
- Chờ Screener xong trước cho task Matcher
- Nếu Matcher stuck → liên hệ Screener: "Dữ liệu gì bị thiếu?"
- Viết log trace (timestamp, task_id, agent, status, issue)

GUARDRAIL:
- Không assign task trùng
- Nếu 1 sub-agent down → tạo session backup
- Report progress mỗi giờ

Bắt đầu quy trình.`,
        gradingCriteria: [
          'Orchestrator setup prompt có 4 sub-agent role (Screener/Matcher/Writer/Reporter) cụ thể',
          'Orchestrator spec workflow (chờ step trước xong rồi step sau)',
          'Có log/trace mechanism — record timestamp + task status',
        ],
      },
      {
        title: 'Bốn sub-agent chuyên hóa',
        xp: 60,
        desc: 'Mỗi sub-agent có system prompt + scope riêng. Không cho ai làm chéo — chéo là loạn.',
        sampleType: 'prompt',
        samplePrompt: `Setup 4 sub-agent trong 4 session tương ứng:

SESSION 1 — SCREENER:
"Bạn là Screener. Nhiệm vụ: lọc 100 CV → output 30 CV pass.
CRITERIA:
- Kinh nghiệm ≥ [MIN_YRS] năm
- Không red flag: job hopping >3 lần/3 năm, CV không dấu, quá cũ >5 năm
- Tiếng Anh: ≥ TOEIC 550 hoặc equivalent
OUTPUT: Bảng {cv_id, exp_yrs, red_flags, pass/fail, note}"

SESSION 2 — MATCHER:
"Bạn là Matcher. Nhiệm vụ: đối chiếu 30 CV vs 3 JD.
Đưa cho tôi bảng {cv_id, jd_1_score, jd_2_score, jd_3_score, best_fit_jd}"

SESSION 3 — WRITER:
"Bạn là Writer. Nhiệm vụ: draft 30 email greeting personalized.
Format: {cv_id, recipient_name, matched_jd, email_draft}"

SESSION 4 — REPORTER:
"Bạn là Reporter. Nhiệm vụ: tổng hợp 3 vị trí × top 10 ứng viên.
Output: dashboard HTML standalone (dùng CDN Chart.js)"

Mỗi agent chỉ làm việc của mình — KHÔNG cross-over.`,
        gradingCriteria: [
          '4 sub-agent có system prompt riêng rõ ràng (role + scope + output format)',
          'Mỗi sub-agent chỉ làm 1 việc cụ thể (KHÔNG cross-over)',
          'Output format rõ ràng (bảng/JSON/email/HTML)',
        ],
      },
      {
        title: 'Run All — 100 CV cho 3 vị trí',
        xp: 80,
        desc: 'Năm đến bảy phút (so với hai lăm đến ba mươi phút nếu chạy single). Output: ba dashboard. Bạn ngồi pha cà phê lúc nó chạy.',
        sampleType: 'prompt',
        samplePrompt: `START MULTI-AGENT RUN:

Orchestrator (Main session): Paste prompt này:

"Bắt đầu quy trình tuyển dụng 100 CV cho 3 vị trí.
Folder: ./cvs/ (100 files)
3 JD:
1. [JOB_TITLE_1] — [REQUIREMENTS]
2. [JOB_TITLE_2] — [REQUIREMENTS]
3. [JOB_TITLE_3] — [REQUIREMENTS]

Gọi Screener session → screen → chờ xong
Gọi Matcher session → match 30 CV → chờ xong
Gọi Writer session → draft email → chờ xong
Gọi Reporter session → tạo dashboard → chờ xong

Report progress mỗi 2 phút. Khi xong → show dashboard."

TRACK TIMING:
- Start timestamp: ___
- Screener done: ___
- Matcher done: ___
- Writer done: ___
- Reporter done: ___
- Total time: ___ (target: 5-7 phút)`,
        gradingCriteria: [
          'Toàn bộ quy trình chạy xong ≤10 phút (nếu Max, thường 5-7 phút)',
          'Output: 30 CV screened + matcher scores + 30 email draft + 1 dashboard HTML',
          'Timestamp log đầy đủ (start/end cho mỗi sub-agent)',
        ],
      },
      {
        title: 'Multi-agent cho bài ngoài tuyển dụng',
        xp: 60,
        desc: 'Transfer: payroll audit / sentiment / learning path. Tư duy chứ không phải template — quan trọng là vậy.',
        sampleType: 'rubric',
        samplePrompt: `📝 Transfer Plan — Buổi 6:

Chọn 1 bài HR (KHÔNG phải tuyển dụng) — apply multi-agent orchestrator pattern:

TEMPLATE:
Bài HR tôi chọn: [Vd: Monthly Payroll Processing]
Tại sao bài này cần multi-agent: [2-3 câu + con số — vd: "Payroll có 4 step: validate, compute, audit, send. Nếu 1 agent → 3 giờ. Nếu 4 agent song song → 45 phút. Savings: 2.25h/tháng × 12 = 27 giờ/năm"]

4 Sub-agent role tôi sẽ tạo:
1. [Agent 1 name]: [nhiệm vụ cụ thể + output]
2. [Agent 2 name]: [nhiệm vụ cụ thể + output]
3. [Agent 3 name]: [nhiệm vụ cụ thể + output]
4. [Agent 4 name]: [nhiệm vụ cụ thể + output]

Orchestrator sẽ chia công việc thế nào? (3-5 bước không quá mơ hồ)

⚠ Transfer plan phải khác Recruiter Agent (Buổi 1-6) — tư duy multi-agent pattern, không copy template.`,
        gradingCriteria: [
          'Chọn ≥1 bài HR khác (KHÔNG tuyển dụng) — ví dụ: Payroll / Onboarding / Sentiment / L&D',
          'Mỗi sub-agent role mapping cụ thể (tên + nhiệm vụ + output format)',
          'Orchestrator workflow ≥3 bước (KHÔNG chung chung)',
          'Con số tiết kiệm thời gian cụ thể (giờ/tuần, so sánh trước/sau)',
        ],
      },
    ],
  },

  7: {
    week: 'TUẦN 7', duration: '90 phút',
    title: 'Buổi 7 — Agent tích luỹ memory. Mỗi buổi anh chị feedback, nó học. Tám tuần sau nó đoán đúng ý 95%.',
    sub: 'Anh chị override mười lần "agent chấm 7, anh chị thấy 9 vì lý do xyz". Tuần 8 agent đoán đúng 9/10 trước khi anh chị xem. Như đứa em ruột cuối cùng cũng hiểu anh chị. Không phải chỉnh prompt, không phải training — agent tự học từ feedback.',
    principle: { num: 7, name: 'Agent biết học' },
    hints: [
      'Buổi 1-6 mỗi lần agent chạy là "agent mới" — không nhớ gì hôm qua…',
      'Buổi này agent NHỚ feedback của anh chị. Không phải chat memory — là database thật…',
      'Hằng tuần agent tổng hợp pattern feedback, biến thành rule mới',
    ],
    revealMsg: 'Memory + feedback loop → agent dần "thuộc về anh chị", không phải template generic. Đây là khoảnh khắc agent từ "công cụ" trở thành "đồng nghiệp đã đồng hành lâu năm".',
    layers: [
      { name: 'Là cái gì', text: 'Memory persistent gồm: profile + context + feedback + rules. Agent đọc trước mỗi lần chạy. Hằng tuần gom lại thành rule. Cái này HR ta hay gọi là "đào tạo nội bộ" — đúng là vậy thật, chỉ là đào tạo cho máy.' },
      { name: 'Vì sao trúng', text: 'Anh chị override mỗi lần → agent ghi feedback. Tuần sau áp rule mới → đoán đúng hơn ba mươi đến năm mươi phần trăm. Predict accuracy chart đo được, không phải cảm tính. Cảm tính thì sếp không gật, số liệu thì sếp gật.' },
      { name: 'Khi nào đừng dùng', text: 'Memory phình quá lớn → tốn cost + accuracy còn giảm. Phải có consolidation hằng tuần, đừng để memory thành "thùng rác kỷ niệm". À, còn một ý nữa: KHÔNG lưu PII vào memory — cái này anh chị nhớ kỹ, không phải nhắc lần thứ hai mới nhớ.' },
    ],
    lanVoice: 'Tôi đoán anh chị lo: "Memory tốn tiền không?" Có, khoảng năm đến mười phần trăm cost thêm. Đổi lại accuracy tăng ba mươi đến năm mươi phần trăm. Đáng lắm. Mà điểm hay nhất: khi anh chị nhảy job → memory đem theo. Agent đã "biết anh chị" — không phải đào tạo lại từ đầu.',
    outcomes: {
      cam: [
        'Memory 5 file đang chạy — feedback file có ≥ 10 entries thực tế',
        'Bảng so sánh Predict vs Thực tế trên 10 CV test — improvement từ Tuần 1 đến Tuần 7 đo được (không bắt 80% tuyệt đối)',
        'Rules file có ≥ 5 rule mới rút ra từ feedback — actionable, không generic',
      ],
      tuduy: [
        'Ba cấp memory: Profile / Context / Feedback / Rules',
        'Consolidation hằng tuần — rút pattern thành rule. Không gom là loạn',
        'Predict mode tăng confidence dần — và đo được',
      ],
    },
    steps: [
      {
        title: 'Setup cấu trúc memory 5 file', xp: 40,
        desc: 'Tạo folder ./memory/ với 5 file. Mỗi file 1 nhiệm vụ riêng — tách ra cho dễ audit.',
        sampleType: 'prompt',
        samplePrompt: `Tạo folder ./memory/ trong workspace với 5 file:

1. profile.md — thông tin tôi (mảng HR, ưu tiên, tone, ngành cấm)
2. context.md — context dự án hiện tại (tuyển vị trí gì, JD, deadline)
3. feedback.md — log mỗi lần tôi override agent: {timestamp, cv_id, agent_score, my_score, lý do override}
4. rules.md — rule rút ra từ feedback (pattern lặp ≥ 3 lần)
5. domain-knowledge.md — kiến thức HR domain riêng (vd: "BHXH 2026 có gì mới")

Mỗi file đầu có heading + 1 dòng mô tả mục đích. Để rỗng phần nội dung — tôi sẽ điền ở Step 2.`,
      },
      {
        title: 'Trả 5 câu profile anh chị', xp: 30,
        desc: 'Điền profile.md với 5 câu cụ thể. Càng cụ thể, agent càng "thuộc gu anh chị".',
        sampleType: 'rubric',
        samplePrompt: `📝 Điền profile.md theo 5 câu sau:

1. MẢNG HR CHÍNH: [TA / C&B / L&D / HRBP / Ops]
2. 3 ƯU TIÊN ỨNG VIÊN HÀNG ĐẦU (sort theo trọng số):
   - Ưu tiên 1 (50%): [vd: Kinh nghiệm thực chiến > 3 năm]
   - Ưu tiên 2 (30%): [vd: Tiếng Anh giao tiếp]
   - Ưu tiên 3 (20%): [vd: Cultural fit — Bắc/Trung/Nam OK]
3. TONE GIAO TIẾP VỚI ỨNG VIÊN: [vd: Trang trọng "anh/chị", không "bạn", có dấu, KHÔNG emoji trong email]
4. NGÀNH/COMPETITOR CẤM TUYỂN (poaching policy): [vd: Không tuyển từ X, Y, Z trong 6 tháng]
5. RED FLAG TỰ ĐỘNG REJECT: [vd: CV không có ngày sinh + bằng cấp + 2+ lần job hopping <1 năm]

Sau khi điền, paste cho Claude Code: "Đọc ./memory/profile.md, từ giờ MỌI lần screen CV đều phải đọc file này trước, áp 5 ưu tiên này."`,
      },
      {
        title: 'Override 10 CV → ghi feedback', xp: 60,
        desc: 'Mỗi lần anh chị override score agent → cả 2 cùng ghi vào feedback.md. Đây là dữ liệu agent học.',
        sampleType: 'prompt',
        samplePrompt: `Trong tuần này, mỗi khi anh chị không đồng ý với score của agent, paste prompt:

Tôi không đồng ý score CV [ID]. Agent chấm [X]/10, tôi chấm [Y]/10.
Lý do của tôi: [mô tả 1-2 câu — vd: "ứng viên này có 2 năm freelance không tính = 5 năm fulltime, agent chỉ đếm fulltime"]

Hãy:
1. Append vào ./memory/feedback.md theo format:
   {timestamp: ..., cv_id: ..., agent_score: ..., my_score: ..., delta: ..., reason: "..."}
2. KHÔNG generate rule ngay — đợi đủ 10 entries mới rút rule (Step 4).

Mục tiêu: ghi đủ 10 override trong 7 ngày. Nếu < 10: agent chưa đủ data học, nhưng vẫn pass nếu ≥ 7.`,
      },
      {
        title: 'Consolidation → 5 rule mới', xp: 50,
        desc: 'Sau khi có ≥ 10 entries feedback, paste prompt rút rule. Path Pro $20: chạy thủ công cuối tuần.',
        sampleType: 'prompt',
        samplePrompt: `Đọc ./memory/feedback.md (≥ 10 entries).

Rút ra ≥ 5 RULE actionable theo pattern lặp ≥ 3 lần.

Format mỗi rule:
{
  rule: "Khi [điều kiện cụ thể] → adjust score [+X / -Y]",
  evidence: ["cv_id_A", "cv_id_B", "cv_id_C"],  // ít nhất 3 evidence
  confidence: "high/medium/low"
}

Ví dụ rule tốt:
- "Khi CV có ≥ 2 năm freelance + ≥ 1 năm fulltime → tính tổng exp = freelance × 0.7 + fulltime"
- "Ứng viên ngành sản xuất chuyển sang retail → -1 điểm cultural fit"

Ví dụ rule TỆ (generic, KHÔNG actionable):
- "Ứng viên có kỹ năng tốt thì điểm cao" (vô nghĩa)
- "Cẩn thận với CV scan" (không đo được)

Append rules vào ./memory/rules.md. Từ giờ MỌI lần screen CV: agent đọc profile.md + rules.md trước.`,
      },
      {
        title: 'Predict mode — đo improvement Tuần 1 vs Tuần 7', xp: 80,
        desc: 'Test agent đã học từ feedback chưa. Đo improvement, KHÔNG đặt 80% tuyệt đối.',
        sampleType: 'rubric',
        samplePrompt: `📝 Bài test Predict mode (paste vào textarea):

PHẦN 1 — TEST PROCEDURE:
1. Lấy 10 CV mới (chưa từng score ở tuần trước).
2. Bạn chấm độc lập từng CV (0-10) — viết vào notebook, KHÔNG cho agent thấy.
3. Paste 10 CV cho agent: "Hãy predict tôi sẽ chấm CV này bao nhiêu — đọc profile.md + rules.md trước. Output JSON {cv_id, predicted_score, reasoning}".
4. So sánh agent predict vs anh chị chấm.

PHẦN 2 — BẢNG KẾT QUẢ:

| CV ID | Bạn chấm | Agent predict | Sai số |
|---|---|---|---|
| 1 | __ | __ | __ |
| 2 | __ | __ | __ |
| ... | | | |
| 10 | __ | __ | __ |

PHẦN 3 — IMPROVEMENT CHECK:
- Sai số trung bình tuần này: __ điểm
- Sai số trung bình tuần 1 (test cùng kiểu Buổi 2 không có memory): __ điểm
- Improvement: __% (giảm sai số)

PHẦN 4 — RULE ÁP DỤNG:
- Trong 10 lần predict, agent đã trigger rule nào trong rules.md? List ra.
- Có rule nào agent áp sai → cần refine không?

⚠ PASS: improvement ≥ 30% (sai số giảm) HOẶC sai số trung bình ≤ 1.5 điểm.
KHÔNG bắt 80% tuyệt đối — đo improvement quan trọng hơn con số tuyệt đối.`,
        gradingCriteria: [
          'Phần 2: bảng đủ 10 hàng, có CON SỐ ở mỗi ô, không bỏ trống.',
          'Phần 3: có cả 2 sai số (tuần này + tuần 1) + % improvement.',
          'Phần 4: list ≥ 1 rule đã trigger + đánh giá sai/đúng.',
        ],
      },
    ],
  },

  8: {
    week: 'TUẦN 8', duration: '90 phút',
    title: 'Buổi 8 — API Routine. Form công ty submit → agent xử lý tức thì. Anh chị xây "internal product", không cần dev.',
    sub: 'Ví dụ: nhân viên submit đơn nghỉ phép → agent tự đối chiếu policy + lịch team → auto-approve nếu nhỏ, escalate manager nếu to. Anh chị vừa thay một dev backend mà không cần biết backend là gì. CV thêm một dòng: "Built internal tool with AI, no code."',
    principle: { num: 8, name: 'Tự kích hoạt nâng cao' },
    hints: [
      'Buổi 4 routine chạy theo SCHEDULE, theo giờ lập lịch…',
      'Buổi này routine chạy theo API — form công ty submit = trigger ngay, không cần chờ giờ…',
      'HR build internal tool, không thuê dev. CV ghi: "Built internal product, 0 code" — sang phết',
    ],
    revealMsg: 'API Routine = form submit → agent xử lý ngay → log Sheet. Anh chị vừa thay một dev backend mà không cần biết backend là gì.',
    prereqWarning: '⚠ Buổi này cần Max ($100/tháng) + host URL public (Netlify/Vercel free được).',
    layers: [
      { name: 'Là cái gì', text: 'Routine có một URL public. Form/Webhook gọi URL → agent xử lý → trả response. Như "internal API" cho phòng HR. Tên nghe lạ, nhưng dùng quen rồi sẽ thấy đơn giản như đặt grab — gọi xe, có xe, xong.' },
      { name: 'Vì sao trúng', text: 'HR có rất nhiều quy trình lặp: đơn nghỉ phép, đơn OT, training, incident… Mỗi cái mười đến mười lăm phút × một trăm đơn/tháng = mười ba đến hai lăm giờ. Auto đi → tiết kiệm khoảng tám mươi phần trăm. Tám mươi phần trăm thời gian này, anh chị dùng làm gì là quyền của anh chị.' },
      { name: 'Khi nào đừng dùng', text: 'Việc cần judgment cá nhân — ví dụ duyệt thưởng senior, dính chính trị nội bộ, dính tế nhị — đừng auto. Auto chỉ làm cho việc có policy rõ ràng đối chiếu được. Việc tế nhị mà auto thì khó coi, thậm chí khó cứu.' },
    ],
    lanVoice: 'Tôi nghe anh chị lo: "Sếp không cho HR tự duyệt đơn." Câu này hợp lý. Cách giải: agent ĐỀ XUẤT, manager click một phát approve qua email. Manager tiết kiệm 90% thời gian → sếp gật. Anh chị vẫn không "tự duyệt" — anh chị chỉ làm trợ lý của manager. Tài tình ở chỗ ấy.',
    outcomes: {
      cam: [
        'API Routine có URL endpoint live trên Netlify/Vercel',
        'Form trigger ba test case: GREEN (auto-approve) / YELLOW (escalate) / RED (reject)',
        'Portfolio entry: "Built internal HR product: leave form → auto-approval. 80% time saved for HR team."',
      ],
      tuduy: [
        'Pattern: API → agent → log + email. Đơn giản mà mạnh',
        'Guardrails: auto chỉ ≤ 5 ngày, trên đó escalate',
        'Manager 1-click thay manual review — họ cảm ơn anh chị',
      ],
    },
    steps: [
      {
        title: 'Setup Google Form đơn nghỉ phép',
        xp: 30,
        desc: 'Form năm câu → Google Sheet auto. Mười phút, không nhanh hơn được.',
        sampleType: 'instruction',
        samplePrompt: `📋 Tạo Google Form đơn nghỉ phép (5 câu):

BƯỚC 1 — Tạo form trên Google Forms:
1. Mở forms.google.com → New form
2. Đặt tên: "Đơn xin nghỉ phép"
3. Thêm 5 câu:
   - Tên nhân viên (text)
   - Ngày bắt đầu (date)
   - Ngày kết thúc (date)
   - Lý do (dropdown: Personal / Medical / Other)
   - Ghí chú thêm (paragraph)

BƯỚC 2 — Link với Google Sheet:
1. Response → Chọn "Create spreadsheet"
2. Auto-tạo Google Sheet (form submit → append row auto)
3. Copy link Sheet

TEST: submit 1 lần form → verify row xuất hiện trong Sheet.`,
        gradingCriteria: [
          'Google Form đủ 5 câu, sáng đèn',
          'Google Sheet linked (form submit → auto append row)',
          '≥1 test submission đã có trong Sheet',
        ],
      },
      {
        title: 'Một prompt → API Routine xử lý',
        xp: 90,
        desc: 'Tám step + sáu guardrails + email response cho ba đối tượng (nhân viên, manager, HR). Đầy đủ.',
        sampleType: 'prompt',
        samplePrompt: `Tạo API Routine xử lý đơn nghỉ phép — 8 STEP:

POLICY:
- Nghỉ ≤ 3 ngày: auto-approve nếu manager available
- Nghỉ 4-5 ngày: pending manager (email yêu cầu duyệt)
- Nghỉ >5 ngày: auto-reject nếu không đặc biệt

SPEC:
1. Đọc input từ Form (JSON: name, start_date, end_date, reason)
2. Tính duration (end - start)
3. Check policy:
   - Nếu ≤3 ngày → get manager calendar, tìm slot available
   - Nếu 4-5 ngày → compose email escalate manager
   - Nếu >5 ngày → check reason ("Medical", "Family") → decide
4. Generate response email (tone warm, formal) cho 3 đối tượng:
   - Email 1: employee (approval/pending/rejection)
   - Email 2: manager (if pending, ask duyệt)
   - Email 3: HR team (log entry)
5. Hash + delete CCCD/ảnh từ form (PII safety)
6. Log vào Google Sheet: {timestamp, name, duration, status, reason, manager, cc_hash}
7. Auto-send email ngay lập tức
8. Return HTTP 200 + confirmation message

GUARDRAILS (6 cái):
- Input validation: ngày bắt đầu < ngày kết thúc
- PII check: không lưu CCCD/ảnh → hash nó
- Manager escalation: nếu duyệt mà nhân viên đã resign → flag warning
- Public holiday check: nếu inclusive public holiday → tự động +1 ngày
- Duplicate check: nếu cùng người submit 2 lần <1 ngày → reject + log warning
- Email delivery: retry 3 lần, log nếu fail

Hãy build routine này + test với 3 input cases.`,
        gradingCriteria: [
          '8-step workflow đầy đủ (read → calc → check → generate → hash → log → send → return)',
          '≥6 guardrails cụ thể (validation, PII, escalate, holiday, duplicate, retry)',
          'Email format chuẩn cho 3 đối tượng (employee/manager/HR)',
        ],
      },
      {
        title: 'Paste URL Routine vào Form Apps Script',
        xp: 50,
        desc: 'Ba click. Form submit → trigger Routine. Nếu báo lỗi, đọc lỗi cẩn thận — đa số là copy thiếu.',
        sampleType: 'instruction',
        samplePrompt: `📋 Kết nối Form → API Routine (3 bước):

BƯỚC 1 — Copy URL Routine:
- Claude Code Routine URL: https://[your-routine-url]/api/form-handler
- (Lấy từ lúc deploy Routine, Netlify/Vercel sẽ cấp)

BƯỚC 2 — Mở Apps Script trong Google Sheet:
1. Sheet (đã tạo lúc form) → Tools → Script editor
2. Paste code:

\`\`\`javascript
function onFormSubmit(e) {
  const routineURL = "https://[PASTE-YOUR-ROUTINE-URL]/api/form-handler";
  const response = e.response;
  const itemResponses = response.getItemResponses();

  const payload = {
    name: itemResponses[0].getResponse(),
    start_date: itemResponses[1].getResponse(),
    end_date: itemResponses[2].getResponse(),
    reason: itemResponses[3].getResponse(),
    notes: itemResponses[4].getResponse(),
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  UrlFetchApp.fetch(routineURL, options);
}
\`\`\`

3. Save → Select function: onFormSubmit → Run

BƯỚC 3 — Setup trigger:
1. Triggers (clock icon) → "New trigger"
2. Select: onFormSubmit · From: "Form submissions"
3. Click "Create"

TEST: submit form → verify:
- Routine log nhận request (check terminal/logs)
- Email đến employee/manager
- Google Sheet append 1 row`,
        gradingCriteria: [
          'Apps Script deploy thành công (0 error)',
          'Form submit → Routine trigger (log proof)',
          'Email gửi đi (screenshot inbox)',
          'Sheet append row tự động',
        ],
      },
      {
        title: 'Test 3 case (GREEN/YELLOW/RED)',
        xp: 60,
        desc: 'Auto-approve / Pending manager / Auto-reject. Ba case này xong là yên tâm.',
        sampleType: 'prompt',
        samplePrompt: `Test 3 case đơn nghỉ phép:

CASE 1 — GREEN (Auto-approve):
- Nhân viên: "Nguyễn Văn A"
- Ngày: 2024-01-15 to 2024-01-17 (3 ngày)
- Reason: Personal
- Expected: Email ngay "APPROVED" trong 1 phút

CASE 2 — YELLOW (Pending manager):
- Nhân viên: "Trần Thị B"
- Ngày: 2024-01-22 to 2024-01-26 (5 ngày)
- Reason: Medical
- Expected: Email to manager "Please approve/reject by EOD", employee "Pending your manager's decision"

CASE 3 — RED (Auto-reject):
- Nhân viên: "Lê Văn C"
- Ngày: 2024-02-01 to 2024-02-15 (15 ngày)
- Reason: Personal
- Expected: Email "REJECTED — exceeds 5-day threshold. Contact HR."

TEST STEPS:
1. Submit form case 1 → check email ≤60s
2. Submit form case 2 → check manager email + log in Sheet
3. Submit form case 3 → check rejection email

REPORT:
- Timestamp + status + email text (screenshot) mỗi case
- Google Sheet 3 rows tương ứng (GREEN/YELLOW/RED)`,
        gradingCriteria: [
          'Case 1 GREEN: auto-approve email ≤60s, correct status in Sheet',
          'Case 2 YELLOW: manager email escalate + employee pending email + Sheet log',
          'Case 3 RED: rejection email with reason + Sheet log',
          'Email format consistent (tone, signature, date)',
        ],
      },
      {
        title: 'Báo cáo + Loom 90s tour',
        xp: 70,
        desc: 'Tiền tiết kiệm/tháng + portfolio piece. Đem theo cả khi nhảy việc.',
        sampleType: 'rubric',
        samplePrompt: `📝 Báo cáo API Routine — Buổi 8:

PHẦN 1 — ROI CALCULATION (số liệu cụ thể):
| Metric | Trước (tay) | Sau (API Routine) | Tiết kiệm |
|---|---|---|---|
| Thời gian xử 1 đơn | __ phút | __ phút | __% |
| Số đơn/tháng | __ | __ | - |
| Tổng giờ/tháng | __ giờ | __ giờ | __h |
| Tổng tiền tiết kiệm/năm | - | - | __ triệu VND |

PHẦN 2 — SYSTEM SPEC (3-5 câu):
Routine tôi build có 8 step: [list 8 step]
Guardrails: [6 guardrails]
PII handling: [cách hash/xóa CCCD/ảnh]

PHẦN 3 — LOOM TOUR (link):
[YouTube link Loom 90s] — show:
1. Form fill sample
2. API trigger (logs)
3. Email received
4. Google Sheet update

PHẦN 4 — PORTFOLIO LINE:
"Built API Routine for leave request automation — 80% time saved for HR team on monthly leave processing. 3 test cases validated (GREEN/YELLOW/RED). System live."`,
        gradingCriteria: [
          'ROI table: con số cụ thể (phút, giờ, %, VND), không chung chung',
          'Spec: 8 step + 6 guardrails rõ ràng',
          'PII handling: mô tả hash/xóa CCCD/ảnh cụ thể',
          'Loom: 90s, show form → trigger → email → sheet',
          'Portfolio line: ngắn gọn, measurable',
        ],
      },
    ],
  },

  9: {
    week: 'TUẦN 9', duration: '90 phút',
    title: 'Buổi 9 — Compliance Scanner. Một routine quét toàn bộ pipeline → flag vi phạm Nghị định 13, Luật LĐ, BHXH.',
    sub: 'Tránh phạt một tỷ Nghị định 13, hai trăm triệu Luật LĐ. ROI khoảng một nghìn lần cho năm chục đô API mỗi năm. Nghe quá đà — nhưng con số đúng là vậy. Rào trước tốt hơn vá sau.',
    principle: { num: 9, name: 'Đặt rào trước' },
    hints: [
      'Buổi 1-8 mỗi agent có guardrails của riêng nó…',
      'Buổi này một scanner riêng quét TOÀN BỘ pipeline — như công an khu phố đi tuần…',
      'Có rào TRƯỚC khi vi phạm. Không phải vá sau khi đã bị phạt lớn',
    ],
    revealMsg: 'Guardrails có TRƯỚC khi deploy. Compliance Scanner = bảo hiểm pháp lý. Mua bảo hiểm hơi ngán, nhưng không mua thì lúc cần không kịp đâu.',
    layers: [
      { name: 'Là cái gì', text: 'Ba cấp rào: trong agent (real-time) + trong routine (mỗi lần chạy) + scanner toàn pipeline (hằng tuần). Ba lớp như áo khoác mùa đông — trông cồng kềnh, nhưng đông xuống mới biết tại sao mặc.' },
      { name: 'Vì sao trúng', text: 'Vi phạm phát hiện sớm → fix nhỏ. Phát hiện qua kiểm toán → phạt to + uy tín tan. Scanner khoảng năm chục đô một năm. Phạt một tỷ Nghị định 13. Anh chị tính ROI giùm tôi đi — tôi tính rồi, ra một nghìn đến hai mươi nghìn lần.' },
      { name: 'Khi nào đừng dùng', text: 'Tuần đầu chấp nhận false positive ba mươi phần trăm — scanner còn đang học. Sau bốn tuần memory consolidate thì giảm dần. À, và đừng để scanner tự fix vi phạm. Nó chỉ flag thôi. Anh chị fix. Anh chị là HR — quyết định cuối cùng vẫn là của anh chị.' },
    ],
    lanVoice: 'Tôi nghe anh chị lo: "Compliance phức tạp lắm, mình HR đâu phải luật sư." Câu hợp lý. Nhưng scanner = checklist ba mươi điểm chuyển hóa thành agent. Anh chị không phải học luật. Anh chị build một công cụ flag tự động — rồi luật sư confirm từng case. Hai bên đều nhàn.',
    outcomes: {
      cam: [
        'Compliance Routine chạy active ≥ 3 lần — thật, không demo',
        'Dashboard heatmap 5 phần compliance — sếp nhìn cái hiểu',
        'Báo cáo compliance một trang executive summary — đem họp được',
      ],
      tuduy: [
        'Ba cấp rào: agent + routine + scanner. Tách lớp ra cho rõ',
        'Mọi vi phạm có trích dẫn pháp luật cụ thể. Không nói chung chung',
        'False positive 30% tuần đầu — chuyện thường, đừng panic',
      ],
    },
    steps: [
      {
        title: 'Setup checklist 30 điểm 5 phần',
        xp: 50,
        desc: 'Nghị định 13 / Luật LĐ / BHXH / Thuế TNCN / Tone email. Năm phần, đủ phủ.',
        sampleType: 'prompt',
        samplePrompt: `Tạo Compliance Checklist 30 điểm (5 phần):

PHẦN 1 — NGHỊ ĐỊNH 13/2023 (PII Protection) — 6 điểm:
1. Anonymize CV trước gửi agent: tên → "#1", CCCD → hash, ảnh → xoá
2. Memory KHÔNG lưu PII: profile.md chỉ lưu role/prefer, KHÔNG lưu CV details
3. Microsite/email URL dùng slug, KHÔNG tên thật
4. Log entry: timestamp + action + status, KHÔNG output CV raw
5. Export report: PII-safe format (no sensitive columns)
6. Retention: log xoá sau 90 ngày

PHẦN 2 — LUẬT LĐ VN (Contract, Salary, Benefit) — 8 điểm:
1. JD phải có "probation period" rõ ràng (nếu có)
2. Salary ≥ minimum wage QUY ĐỊNH (check theo tỉnh/thành)
3. Benefit: ≥13 tháng lương + BHXH + đóng theo quy định
4. Email offer KHÔNG có điều khoản discriminatory (tuổi, giới tính, tôn giáo)
5. Contract period ≥ 1 năm (không fixed dưới 1 năm liên tiếp)
6. Quyền lợi: annual leave ≥ 12 ngày
7. Job hopping flag: nếu candidate >3 lần <1 năm (yellow alert to manager)
8. Termination: clarify notice period (30 ngày), severance (theo Law)

PHẦN 3 — BHXH 2026 New Rules — 6 điểm:
1. Contribution rate: employee 8% + employer 17.5% (updated 2026)
2. Insurance coverage: health/unemployment/workplace injury (chuẩn)
3. If contractor/freelance: KHÔNG force BHXH (comply with exemption)
4. Salary base for contribution: >= minimum wage, tính overtime separately
5. Monthly report: đảm bảo report BHXH đúng deadline (5th next month)
6. Audit: monthly vs actual BHXH deduction (no mismatch)

PHẦN 4 — THUẾ TNCN (Personal Income Tax) — 6 điểm:
1. Withhold tax: 5% for salary < 11M, 10% for 11-15M, 15% for >15M (2026 rule)
2. Monthly PIT form: 01/06 submit đúng hạn
3. Annual tax filing: năm nay (nếu >1 employer, phải file combine)
4. Deduction: insurance + charity (if any) tính đúng
5. Tax refund: if over-paid, process return (không quên)
6. Non-resident: check tax treaty (if candidate là non-resident)

PHẦN 5 — TONE EMAIL (HR Communication) — 4 điểm:
1. Rejection email: KHÔNG dù dằng, KHÔNG phrase "sorry we don't like you", ghi "not match at this time"
2. Offer email: KHÔNG promise benefit không stable (kiểu "có thể" 13 tháng), ghi "guaranteed")
3. Leave response: tone warm, KHÔNG judging (không ghi "tại sao mà nghỉ...")
4. Compliance warning: KHÔNG sarcasm/aggressive, ghi "please review..."

CHECKLIST OUTPUT:
Tạo file ./compliance/CHECKLIST-30.md với 30 điểm (5 phần) dạng checklist:
- [ ] Digit 1 — mô tả
- [ ] Digit 2 — mô tả
...
- [ ] Digit 30 — mô tả

Mỗi điểm có: rule cụ thể + evidence cách check (vd: "check ./memory/profile.md không có CV id")`,
        gradingCriteria: [
          '30 điểm được tạo (6+8+6+6+4 = 30), mỗi điểm có mô tả cụ thể',
          'Mỗi điểm có cách check/audit rõ ràng (file nào check, sao check)',
          'Phần 3 có reference đến BHXH 2026 rules cụ thể (not generic)',
          'Checklist markdown format dùng [ ] để sau track',
        ],
      },
      {
        title: 'Một prompt → Compliance Scanner Routine',
        xp: 80,
        desc: 'Routine weekly quét repo + Sheet + Gmail + Zalo logs. Quét cả công ty một lần.',
        sampleType: 'prompt',
        samplePrompt: `Build Compliance Scanner Routine — weekly automation:

SPEC:
Routine chạy hằng tuần (Monday 9 AM), quét toàn bộ HR pipeline:

SOURCES TO SCAN:
1. GitHub repo: all JDs in /jds/ folder
2. Google Sheet: recruitment pipeline (candidates, offers, contracts)
3. Gmail: outgoing emails (folder recruitment@)
4. Zalo logs: candidate messages (OA bot responses)
5. Memory files: ./memory/ (check for PII)

SCAN LOGIC (7 steps):
1. Read 30-point checklist (./compliance/CHECKLIST-30.md)
2. For each JD file: check points 1-8 (Labor Law)
3. For each Sheet row: check points 9-14 (BHXH/Tax)
4. For each email: scan text (points 16-19, tone check)
5. For Zalo messages: flag if PII leak (phone/CCCD/name)
6. For memory files: ensure NO PII stored (points 1-6)
7. Generate report: flag list + severity (RED/YELLOW/GREEN)

OUTPUT FORMAT (HTML dashboard):
| Violation # | Source | Point # | Severity | Text Evidence | Regulation | Fix Suggestion |
|---|---|---|---|---|---|---|
| 1 | JD-Sales.md | Point 2 | RED | "min salary 5M" | Luật LĐ 2020 art 92 | "Update to 6.5M (2026 minimum)" |
| ... | ... | ... | ... | ... | ... | ... |

GUARDRAILS (5 cái):
- Don't auto-fix: only flag + suggest, HR reviews before apply
- False positive tolerance: 30% week 1 (memory learns after week 2)
- PII in report: ANONYMIZE violation text (vd "candidate #123" không tên thật)
- Escalate if: RED severity + multi-source violation (not isolated)
- Audit trail: every scan logged (timestamp + # violations found)

SAMPLE RUN:
Test with 3 sample JDs + 5 Sheet rows + 10 emails → flag expected violations.`,
        gradingCriteria: [
          'Scanner read 5 sources (JDs, Sheet, Gmail, Zalo, memory)',
          '7-step scan logic cụ thể (KHÔNG chung chung)',
          'Output dashboard format: source+point+severity+evidence+regulation+fix',
          '≥5 guardrails có (không auto-fix, false positive tolerance, PII anon, escalate rule, audit log)',
        ],
      },
      {
        title: 'Run lần đầu → 3-5 vi phạm có sẵn',
        xp: 50,
        desc: 'Bình thường — chứng tỏ scanner work. Đừng giật mình. Phòng nào cũng có vài vi phạm, nói thật.',
        sampleType: 'instruction',
        samplePrompt: `Run Compliance Scanner lần đầu — test phase:

BƯỚC 1 — Setup test data:
1. Tạo 3 JD sample có vi phạm:
   - JD-Sales: "min salary 5M" (< 2026 minimum 6.5M)
   - JD-Dev: "30 ngày probation" (< 3 tháng, violate)
   - JD-HR: CCCD requirement (PII ask, violate Nghị định 13)

2. Tạo 5 Sheet rows (candidate records):
   - Row 1: lương 10M (missing tax calc column)
   - Row 2: "candidate Nguyễn Văn A" (KHÔNG anonymize, PII leak)
   - Row 3: contract period 6 tháng (< 1 năm, violate)
   - Row 4: BHXH contribution 7% (< 8%, underpay)
   - Row 5: clean (pass)

BƯỚC 2 — Run scanner:
Paste prompt: "Run Compliance Scanner trên test data vừa tạo. List violations."

EXPECTED OUTPUT:
Scanner sẽ flag ≥ 3-5 violations (mục đích chứng tỏ scanner detect được):
- Violation #1: JD-Sales point 2 RED (salary < minimum)
- Violation #2: JD-Dev point (probation short)
- ...
- Violation #5: Sheet row 2 point 1 RED (PII leak)

BƯỚC 3 — Validate:
1. Report generation time: ≤ 2 phút (nếu 5+ lâu quá → optimize)
2. Severity color: RED violations là violations thật (not false positive)
3. Evidence quote: mỗi violation có text evidence từ source

⚠ False positive tuần 1 là NORMAL — scanner noch learning. Week 2 sẽ improve.`,
        gradingCriteria: [
          'Test data có ≥3 intentional violations (để scanner detect)',
          'Scanner run xong và flag ≥3 violations (proof of functionality)',
          'Report có severity (RED/YELLOW), evidence text, regulation cite',
          'Run time ≤2 phút cho 3 JDs + 5 sheets (acceptable for weekly)',
        ],
      },
      {
        title: 'Fix 5 vi phạm → score 30/30',
        xp: 70,
        desc: 'Agent edit JD/email/microsite/memory. Bạn duyệt từng cái.',
        sampleType: 'prompt',
        samplePrompt: `Fix 5 violations từ scanner report:

FLOW:
1. Scanner flags violation (RED)
2. Bạn (HR) duyệt: "fix cái này có sense không?"
3. Paste prompt: "Fix violation #[N]: [description]"
4. Agent propose change
5. Bạn duyệt + apply

EXAMPLE FIX:
Violation #1: JD-Sales — salary 5M < 2026 minimum 6.5M
Prompt: "Update ./jds/JD-Sales.md: change min salary from 5M to 6.5M. Keep benefits same."
Agent: "UPDATED. New text: 'Salary: 6.5M - 8M (2026 minimum wage Hà Nội)'"
You: "Approved. Commit."

PROCESS 5 violations:
- Violation 1 (JD edit)
- Violation 2 (JD edit)
- Violation 3 (Sheet/contract edit)
- Violation 4 (Email tone edit)
- Violation 5 (Memory PII edit)

FINAL SCORE:
Re-run scanner → dashboard show "30/30 points PASS" (all violations fixed).
Screenshot: before (RED x5) → after (30/30 PASS).`,
        gradingCriteria: [
          'Fix ≥5 real violations (KHÔNG dummy fix)',
          'Mỗi fix có: violation detail → prompt to agent → agent change → you approve',
          'Final scanner run: show 30/30 or "N violations fixed" (proof of remediation)',
          'Screenshot before/after compliance dashboard',
        ],
      },
      {
        title: 'Báo cáo compliance cho sếp',
        xp: 60,
        desc: 'Score + tiền tránh phạt + plan fix tuần sau. Sếp gật.',
        sampleType: 'rubric',
        samplePrompt: `📝 Compliance Report — Buổi 9:

EXECUTIVE SUMMARY (1 trang):

[TITLE] COMPLIANCE SCANNER REPORT — TUẦN [N]
[Ngày]

1. COMPLIANCE SCORE: 30/30 PASS ✅
   (hoặc: 25/30, violations still open: [list])

2. VIOLATIONS FOUND & FIXED:
   | # | Category | Severity | Status |
   |---|---|---|---|
   | 1 | Salary (Point 2) | RED | ✅ FIXED |
   | 2 | Probation (Point 3) | YELLOW | ✅ FIXED |
   | 3 | PII Leak (Point 1) | RED | ✅ FIXED |
   | 4 | BHXH Contribution (Point 14) | YELLOW | Pending review |
   | 5 | Tax Filing (Point 18) | GREEN | OK |

3. FINANCIAL IMPACT (Tiền tránh phạt):
   - If Nghị định 13 violation detected by government → fine up to 200M VND
   - If Luật LĐ violation → fine 20-50M VND + compensation
   - Monthly PIT late filing → fine 500K-1M VND/day

   This month's scan prevented: ≥ 100M VND potential fines
   Annual savings (assuming 1-2 violations/month): 600M - 1.2B VND

4. ACTION PLAN (TUẦN SAU):
   - Monitor: BHXH contribution (currently under review)
   - Schedule: government audit prep (Q1 2026)
   - Next scan: Monday 9 AM (automated, weekly)

5. NEXT MEETING:
   [Date + time] — review compliance trend + Q1 audit prep

Prepared by: [Your name] — AI HR Builder
Tool: Compliance Scanner Routine (automated weekly)`,
        gradingCriteria: [
          'Report 1 trang: executive summary (KHÔNG dài dòng)',
          'Violations table: # + category + severity + status',
          'Financial impact: cụ thể (VND con số, tránh phạt bao nhiêu)',
          'Action plan: next week cần fix gì, khi nào',
          'Audit trail: report date + tool name + automation note',
        ],
      },
    ],
  },

  10: {
    week: 'TUẦN 10', duration: 'Demo Day · ⭐ CHỨNG CHỈ',
    title: 'Buổi 10 — Capstone tự chọn. Anh chị build agent cho bài HR riêng của công ty. Demo Day Zoom mười phút. Chứng chỉ có tên anh chị.',
    sub: 'Không phải Recruiter Agent nữa. Anh chị lấy MỘT bài HR riêng (Onboarding, Payroll, L&D, Sentiment, Helpdesk...) → áp mười nguyên lý đã học → build từ con số 0 trong một tuần. Buổi trước học để dùng, buổi này học để dạy người khác.',
    principle: { num: 10, name: 'Chuyển mảng' },
    hints: [
      'Chín buổi qua anh chị dùng Recruiter Agent làm "phương tiện"…',
      'Buổi 10 chứng minh tư duy CHUYỂN sang bài khác — không phải lặp template Recruiter…',
      'Anh chị pick bài HR riêng + áp mười nguyên lý + build production trong một tuần',
    ],
    revealMsg: 'Mười tư duy đã học áp dụng cho BẤT KỲ bài HR. Đây là test thật — anh chị có master không. Master không phải làm được một thứ. Master là chuyển được sang bài khác, sang công ty khác.',
    layers: [
      { name: 'Là cái gì', text: 'Lấy một bài HR riêng — Onboarding/Payroll/L&D/Sentiment/Helpdesk — spec chín nguyên lý → build → demo. Đơn giản về mặt cấu trúc. Phức tạp về mặt thực tế. Đó mới gọi là capstone.' },
      { name: 'Vì sao trúng', text: 'Master = transfer được. Nếu anh chị chỉ làm Recruiter Agent được → anh chị chưa master, mới chỉ học thuộc template. Buổi 10 ép anh chị transfer → chứng minh tư duy thật, không phải copy quy trình cũ. Cái này tôi xin nói thẳng vì đây là khoảnh khắc quyết định.' },
      { name: 'Khi nào đừng dùng', text: 'Đừng chọn bài quá tham — kiểu "build payroll cho 1000 nhân viên trong một tuần". Mentor giúp pick scope vừa vặn: pain thật + một tuần khả thi. Tham quá là sa lầy. Sa lầy ở tuần 10 thì tiếc lắm.' },
    ],
    lanVoice: 'Tôi đoán anh chị lo: "Tự build một mình, lỡ thất bại thì sao?" Câu hỏi rất hay, rất con người. Trả lời: KHÔNG có chuyện một mình. AI Mentor 24/7 + Zalo group + office hour Lan + chín transfer plan có sẵn. Pass tiêu chí ≥ 6/9 nguyên lý — không yêu cầu hoàn hảo. Hoàn hảo để tuần 11.',
    outcomes: {
      cam: [
        'Agent capstone chạy production — thật, không mock',
        'Video demo 5 phút cho Demo Day — đem trình sếp, trình đối tác được',
        'Chứng chỉ "AI HR Builder" verify qua Accredible — gắn LinkedIn được',
      ],
      tuduy: [
        'Mười nguyên lý áp dụng được mọi bài HR. Không chỉ tuyển dụng',
        'Master = transfer được. Một thứ = biết, hai thứ = master',
        'Capstone = portfolio centerpiece. Đem theo cả đời sự nghiệp',
      ],
    },
    steps: [
      {
        title: 'Review 9 transfer plan + chọn capstone', xp: 50,
        desc: 'Chấm 9 transfer plan đã viết ở step 5 các buổi trước. Top 3 → chọn 1.',
        sampleType: 'rubric',
        samplePrompt: `📝 Chấm 9 transfer plan đã viết ở Buổi 1-9 step 5 theo 4 tiêu chí:

| Tiêu chí | 0-2 điểm | Mô tả |
|---|---|---|
| Pain rõ | 0 / 1 / 2 | Có số liệu cụ thể (giờ/tuần, % miss, # vụ) hay chung chung? |
| Khả thi 1 tuần build | 0 / 1 / 2 | 5 ngày code + test có xong không? Hay quá tham (1 tháng)? |
| Có data thật | 0 / 1 / 2 | Anh chị có data thực thi (CV, hợp đồng, log) hay phải bịa giả? |
| Người dùng thật | 0 / 1 / 2 | Sau capstone, ≥ 3 đồng nghiệp dùng thật không? Hay chỉ anh chị xài? |

BẢNG CHẤM:
| Plan # | Tên ngắn (5 từ) | Pain | Khả thi | Data | User | Tổng |
|---|---|---|---|---|---|---|
| Buổi 1 | ... | / | / | / | / | __/8 |
| ... | | | | | | |
| Buổi 9 | ... | / | / | / | / | __/8 |

TOP 3 (≥ 6 điểm): __, __, __

QUYẾT ĐỊNH FINAL: Plan #__ vì lý do: ...

⚠ Lan/mentor sẽ challenge plan này tại Office Hour Tuần 9 → anh chị phải defend được.`,
        gradingCriteria: [
          'Bảng đủ 9 hàng, mỗi hàng có 4 điểm rõ ràng.',
          'Top 3 + lý do chọn final ít nhất 2 câu.',
          'Plan final phải khác Recruiter Agent của Buổi 1-3 (test transfer thật).',
        ],
      },
      {
        title: 'Spec capstone — đủ 9 nguyên lý', xp: 80,
        desc: 'Spec chi tiết theo template 9 nguyên lý đã học. Đây là blueprint cho 5 ngày build.',
        sampleType: 'prompt',
        samplePrompt: `📋 Template spec capstone — paste vào file ./capstone/SPEC.md:

# CAPSTONE: [Tên ngắn 5 từ]

## NGUYÊN LÝ 1 — Tự học cùng máy
Tôi sẽ hỏi máy những gì? List 3 câu cụ thể.

## NGUYÊN LÝ 2 — Chia nhỏ việc
5 step agent thực hiện (input/output mỗi step):
1. ... (in: ..., out: ...)
2. ...
3. ...
4. ...
5. ...

## NGUYÊN LÝ 3 — Tả việc rõ
Skills Package gồm những file gì? Brand voice của công ty thế nào?

## NGUYÊN LÝ 4 — Tự kích hoạt
Trigger nào? (Schedule / API / Event)
Guardrails (≥ 5):
1. ...

## NGUYÊN LÝ 5 — Đưa công cụ
Connector nào? (Drive / Gmail / Zalo / HRIS / GitHub) — scope mỗi cái.

## NGUYÊN LÝ 6 — Phân vai
Có cần multi-agent không? Nếu có: 3-4 sub-agent + scope mỗi cái.

## NGUYÊN LÝ 7 — Agent biết học
Memory layer: profile + context + feedback + rules. Predict mode setup thế nào?

## NGUYÊN LÝ 8 — Tự sửa & đo
Eval set: 10-20 case. Metric: precision / recall / cost. A/B test plan.

## NGUYÊN LÝ 9 — Chuyên hoá mảng
Bài này thuộc mảng [TA / C&B / L&D / HRBP / Ops]. Compliance gì? (Nghị định 13, Bộ luật LĐ, ...)

## OUT-OF-SCOPE (KHÔNG làm trong 5 ngày):
- ...
- ...

⚠ Pass capstone = áp ≥ 6/9 nguyên lý. Không cần đủ 9 — nhưng spec phải khai đủ 9 (ô nào không dùng thì write "N/A vì ...").

Sau khi điền, paste cho Claude Code: "Review SPEC.md. Áp đủ 6/9 nguyên lý chưa? Liệt kê nguyên lý nào yếu."`,
      },
      {
        title: 'Build 5 ngày D1→D5', xp: 200,
        desc: 'Lịch chi tiết 5 ngày. Mỗi ngày kết thúc có deliverable đo được.',
        sampleType: 'instruction',
        samplePrompt: `📅 LỊCH 5 NGÀY (1-2h/ngày bằng Claude Code):

D1 — SETUP (90 phút):
- Tạo repo capstone trên GitHub (private, scaffold từ Skills Package Buổi 3)
- Setup folder structure: /skills/, /commands/, /memory/, /tests/, /samples/
- Push commit đầu "init capstone [tên]"
- Deliverable: link GitHub + screenshot tree

D2 — CORE LOGIC (120 phút):
- Implement 5 step chính (nguyên lý 2 — chia nhỏ việc)
- Test với 3-5 sample data
- Deliverable: video screen-record 30s chạy 1 case

D3 — MCP + ROUTINE (90 phút):
- Connect 1-2 system thật (Drive / Gmail / Zalo OA)
- Setup routine trigger (cloud Max hoặc local cron)
- Deliverable: 1 lần routine chạy thành công, log entry

D4 — POLISH + MEMORY (90 phút):
- Add memory layer (rules.md với ≥ 3 rule rút từ test D2-D3)
- Add 5 guardrails
- Run eval set 10 case → đo precision/recall
- Deliverable: bảng eval result + screenshot dashboard

D5 — DEMO PREP (60 phút):
- Pre-record video demo 5 phút (theo template ở Step 4)
- Slide deck 5-7 slide (Pain → Solution → Demo → Numbers → Next)
- Run thử pitch trước gương 2 lần
- Deliverable: link video + link slide

⚠ Mỗi ngày FAIL deliverable = đẩy compress D6, D7 (cuối tuần). KHÔNG trượt sang Tuần 11.`,
      },
      {
        title: 'Demo Day — pre-record + Q&A live', xp: 100,
        desc: 'Demo Day chia 2 phần: video pre-record nộp trước 24h + Q&A live 5 phút.',
        sampleType: 'rubric',
        samplePrompt: `📋 Template DEMO 5 phút (pre-record):

[0:00-0:30] HOOK
- Trong 30s: anh chị là ai, làm mảng gì, bài anh chị build là gì
- Câu mở: "Tuần trước tôi mất X giờ làm Y. Hôm nay agent làm trong Z phút."

[0:30-1:30] PAIN + SOLUTION
- Pain cụ thể: số liệu Trước
- 5 step agent (theo Spec)
- Stack tech (1 dòng): Claude Code + Gemini + MCP {tên}

[1:30-3:30] DEMO LIVE 2 phút
- Screen record agent chạy 1 case thật từ đầu đến cuối
- Highlight 2 moment "wow" (chỉ rõ bằng arrow)

[3:30-4:30] NUMBERS
- Bảng Trước/Sau (≥ 3 measurable)
- Eval result (precision/recall/cost)
- Improvement vs baseline

[4:30-5:00] NEXT
- 1 câu: kế hoạch deploy team / scale lên cohort
- 1 câu: cảm ơn cohort + Lan

⚠ NỘP 24h TRƯỚC Demo Day:
- Link video trên Drive (public, Lan + cohort xem được)
- Link slide deck
- Link GitHub repo

⚠ DEMO DAY (live Zoom 5 phút Q&A):
- Lan + 2-3 đồng môn ngẫu nhiên hỏi
- Câu hỏi: technical (rủi ro), business (ROI), scale (bottleneck)
- Bạn trả lời ngắn, dứt khoát`,
      },
      {
        title: 'Nhận chứng chỉ + portfolio', xp: 70,
        desc: 'Sau pass Demo Day, nhận Accredible verified URL + vào alumni inner circle.',
        sampleType: 'instruction',
        samplePrompt: `📋 Quy trình nhận chứng chỉ:

1. Sau Demo Day, Lan review 48h → email kết quả PASS / BORDERLINE / FAIL
2. Nếu PASS:
   - Nhận email Accredible với link chứng chỉ verified
   - Click "Add to LinkedIn" → tự động post lên LinkedIn của anh chị
   - URL chứng chỉ public — share với sếp/HR network
3. Nhận card visit "AI HR Practitioner" (PDF) — gắn email signature
4. Được mời vào Slack Inner Circle alumni (chỉ học viên pass cohort được vào)

📝 Nộp portfolio cho Lan:
- 3 link: GitHub repo + video demo + slide
- 1 đoạn 100 từ "tôi đã build cái gì + impact" (Lan featured trên blog HR Builder VN)

⚠ Borderline: phải fix 2-3 điểm Lan note → demo lại Tuần 11. PASS được nhận chứng chỉ.

⚠ FAIL: không nhận chứng chỉ. Có thể đăng ký Cohort 2 với giá 50% (fee chỉ 5M, không deposit).`,
      },
    ],
  },
};

// === PRO TRACK — buổi 11-15 (advanced, sau khi pass capstone) ===
const PRO_TRACK = {
  11: {
    week: 'PRO · TUẦN 11', duration: '120 phút',
    title: 'Vector RAG: agent đọc CẢ knowledge base công ty anh chị — trả lời chính xác 95%+ với trích nguồn.',
    sub: 'Index toàn bộ Sổ tay nhân viên + Policy + JD library + Hợp đồng mẫu thành knowledge base. Agent trả lời câu hỏi nhân viên, KHÔNG bịa.',
    principle: { num: 11, name: 'Knowledge Base Agent (RAG)' },
    hints: [
      'Agent giờ trả lời dựa trên TÀI LIỆU CÔNG TY THẬT…',
      'Mỗi câu trả lời có CITATION chỉ rõ trang/đoạn nào trong tài liệu…',
      'Hết thời "AI bịa" — luật BHXH chính xác, policy chuẩn',
    ],
    revealMsg: 'RAG = Retrieval Augmented Generation. Tên dài, ý đơn giản: agent tra tài liệu trước khi trả lời, có trích nguồn. Đây là cách enterprise dùng AI an toàn.',
    layers: [
      { name: 'Là cái gì', text: 'Vector database lưu tài liệu thành embedding. Agent query semantic → lấy ba đến năm đoạn liên quan → trả lời + cite nguồn. Tên gọi nghe khoa học, nhưng làm là click với paste, không phải PhD.' },
      { name: 'Vì sao trúng', text: 'AI thuần generative dễ bịa — bịa ra rất tự tin, đó mới khổ. RAG ép agent dùng source thật. Trả lời sai = lỗi rõ ràng tra được, không phải "AI nói vu vơ chiều thứ Sáu".' },
      { name: 'Khi nào đừng dùng', text: 'Câu hỏi sáng tạo — brainstorm idea, viết JD mới — đừng RAG. RAG chỉ dành cho TRẢ LỜI dựa trên tài liệu CÓ SẴN. Generate sáng tạo thì để generative tự do bay.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Build vector database phức tạp lắm." Trả lời: Pinecone/Chroma có free tier một triệu vector. Setup một file khoảng ba mươi phút. KHÔNG cần ML engineer. Cái này tôi đảm bảo bằng kinh nghiệm của tôi, không phải cảm hứng.',
    outcomes: {
      cam: [
        'Knowledge base index 100+ tài liệu công ty',
        'Agent trả lời có trích nguồn — dán trang số đàng hoàng',
        'Accuracy ≥ 95% trên 30 câu test',
      ],
      tuduy: [
        'Embedding + vector search — hai khái niệm nền tảng',
        'Hybrid retrieval (semantic + keyword) — kết hợp hai loại',
        'Source citation BẮT BUỘC. Không có cite, không deploy',
      ],
    },
    steps: [
      { title: 'Setup vector DB (Pinecone/Chroma free)',  xp: 80,  desc: 'Tài khoản Pinecone free → tạo index. Hoặc Chroma local. Free tier đủ dùng.' },
      { title: 'Upload + chunk tài liệu công ty',          xp: 100, desc: 'PDF/DOCX/Markdown → chunk 500-token → embedding → index. Máy làm hết, anh chị chỉ paste.' },
      { title: 'Build RAG agent + test 30 câu',            xp: 120, desc: 'Agent: query → retrieve → trả lời có citation. Ba mươi câu test là đủ thấy đâu yếu.' },
      { title: 'Đo accuracy + hallucination rate',          xp: 80,  desc: 'Bảng so sánh: RAG vs no-RAG. Target accuracy ≥ 95%. Số đẹp thì khoe được.' },
      { title: 'Production: Helpdesk bot 24/7 dùng RAG',    xp: 150, desc: 'Connect Zalo OA. Nhân viên hỏi BHXH/policy → bot trả có trích nguồn. Bạn ngủ, bot làm.' },
    ],
  },

  12: {
    week: 'PRO · TUẦN 12', duration: '120 phút',
    title: 'Eval suite: build test cho agent của anh chị. A/B hai phiên bản → chọn version tốt hơn — bằng số, không bằng cảm.',
    sub: 'Trước giờ anh chị cứ nghĩ "agent OK" theo cảm tính. Tuần này build BỘ TEST có thật — đo accuracy, cost, hallucination, tone. Cảm tính là chuyện của trà chiều.',
    principle: { num: 12, name: 'Đo chất lượng agent' },
    hints: [
      'Agent v1 và v2 — anh chị không biết cái nào tốt hơn nếu không đo…',
      'Build 30-50 test case có ground truth — chấm tự động…',
      'Pass rate, accuracy, latency, cost — tất cả đo được. Đo là gốc của improve',
    ],
    revealMsg: 'Có eval thì improve được. Không eval thì đoán mò. Đây là tư duy engineer thật của AI — và thật ra là tư duy chung của mọi nghề muốn làm tốt lên.',
    layers: [
      { name: 'Là cái gì', text: 'Eval suite = bộ test case có input + expected output. Agent chạy → chấm tự động → ra score. Đơn giản về cấu trúc, kỳ công ở việc viết test case ban đầu.' },
      { name: 'Vì sao trúng', text: 'Đổi prompt → chạy eval → biết tốt/xấu hơn ngay. KHÔNG đoán mò "có vẻ ổn hơn". "Có vẻ" là từ tôi sợ nhất khi làm sản phẩm — vì nó vô bằng chứng.' },
      { name: 'Khi nào đừng dùng', text: 'Eval tốn thời gian build — khoảng một ngày cho năm mươi case. Chỉ làm khi agent đã production + cần improve liên tục. Prototype đang tìm hướng thì khoan, đừng eval sớm. Eval sớm là tốn công vô ích.' },
    ],
    lanVoice: 'Đây là tư duy mà chín mươi lăm phần trăm người build AI bỏ qua — không đo, chỉ cảm. Master nghĩa là đo được, cải thiện được, có cách giải trình được. Sếp hỏi "sao tốt hơn?" → anh chị trả lời bằng con số, không phải bằng "tôi cảm thấy".',
    outcomes: {
      cam: [
        'Eval suite 50 test case — đủ phủ',
        'A/B 2 prompt → chọn winner. Có số liệu',
        'Dashboard hiệu năng theo thời gian',
      ],
      tuduy: [
        'Test-driven AI development — như TDD nhưng cho AI',
        'Hallucination rate < 5% là target. Trên là phải sửa',
        'Cost per query đo được. Không đo là không scale được',
      ],
    },
    steps: [
      { title: 'Build 50 test case có ground truth',     xp: 100, desc: 'CSV: input + expected output + tiêu chí pass. Đầu tư một ngày, hưởng cả năm.' },
      { title: 'Setup auto-eval (chấm bằng AI khác)',    xp: 100, desc: 'AI Reviewer chạy eval → trả score JSON. Một AI chấm AI kia — nghe hơi siêu thực, nhưng work.' },
      { title: 'A/B test 2 prompt → chọn winner',        xp: 120, desc: 'Prompt v1 vs v2 → eval → winner pass cao hơn. Quyết bằng số.' },
      { title: 'Dashboard eval theo thời gian',          xp: 80,  desc: 'Mỗi lần đổi agent → run eval → log → chart. Theo dõi như theo dõi cân nặng.' },
      { title: 'Hallucination detector',                  xp: 100, desc: 'Agent nói gì không có trong source → flag tự động. Bịa là bị bắt ngay.' },
    ],
  },

  13: {
    week: 'PRO · TUẦN 13', duration: '120 phút',
    title: 'Cost optimization: giảm chi phí AI 60-80% qua caching + model routing + batching.',
    sub: 'Cohort #1 cost khoảng một trăm đô. Cohort #5 scale một trăm học viên có thể lên ba đến năm trăm đô nếu không tối ưu. Tuần này hạ về dưới một trăm.',
    principle: { num: 13, name: 'Tối ưu chi phí AI' },
    hints: [
      'Prompt caching: cache phần tĩnh, chỉ tính tiền phần động…',
      'Model routing: việc dễ dùng Haiku, việc khó dùng Sonnet, việc phức tạp dùng Opus…',
      'Batching: gộp 10 query thành 1 call → giảm overhead',
    ],
    revealMsg: 'Tối ưu cost thì scale được. Master = chạy 1000 query/ngày với cost của 100 query. Nghe hơi phép thuật, nhưng chỉ là kỹ thuật.',
    layers: [
      { name: 'Là cái gì', text: 'Ba thủ thuật chính. Một là prompt caching — phần cache trả mười phần trăm giá. Hai là model routing — đúng model đúng việc. Ba là batch API — giảm năm mươi phần trăm cost với điều kiện chấp nhận latency. Ba thứ kết hợp lại, cost rớt hẳn.' },
      { name: 'Vì sao trúng', text: 'Cache hit ≈ rẻ gấp mười. Haiku rẻ hơn Sonnet khoảng mười hai lần cho task đơn giản. Batch giảm năm mươi phần trăm cộng với chấp nhận chờ hai mươi tư giờ. Số nó đẹp đến mức anh chị sẽ tiếc đã không tối ưu sớm hơn — nhưng đừng tiếc, chưa scale thì chưa cần tối ưu.' },
      { name: 'Khi nào đừng dùng', text: 'Tối ưu sớm là premature. Đợi product hit traction (≥ 30 active user) rồi mới optimize. Trước đó focus chất lượng. Tối ưu cost cho mười user là tối ưu nhầm chỗ — như giảm cân khi đang cao một mét sáu nặng năm mươi cân.' },
    ],
    lanVoice: 'Cohort #5 trở đi mới thật sự care cost. Nhưng học sớm để khi scale không panic. Panic muộn thì lúng túng. Học trước thì bình tĩnh.',
    outcomes: {
      cam: [
        'Cost dashboard theo agent + time',
        'Prompt caching active — đo được hit rate',
        'Model routing logic — ba tier rõ ràng',
      ],
      tuduy: [
        'Cache hit rate > 70% là target',
        'Cost per active student < 5 đô/tháng',
        'Batch async cho task không gấp. Không gấp thì batch đỡ tiền',
      ],
    },
    steps: [
      { title: 'Setup prompt caching (Anthropic feature)', xp: 80,  desc: 'Cache system prompt + lesson content. Đo cache hit rate sau ba ngày.' },
      { title: 'Implement model routing (3 tier)',          xp: 100, desc: 'Easy → Haiku/Flash. Medium → Sonnet. Hard → Opus/Pro. Phân loại rõ rồi route.' },
      { title: 'Batch API cho task không real-time',        xp: 90,  desc: 'Compliance scanner / weekly report → batch 24h. Tiết kiệm thật.' },
      { title: 'Cost dashboard real-time',                   xp: 100, desc: 'BigQuery + Looker. Track cost per student, per agent. Số liệu rõ.' },
      { title: 'Báo cáo "Tôi giảm cost 70%"',                xp: 80,  desc: 'Show sếp số trước/sau. Justify scale. Sếp gật, sếp duyệt thêm budget.' },
    ],
  },

  14: {
    week: 'PRO · TUẦN 14', duration: '120 phút',
    title: 'Vision + Voice agents: agent đọc CV scan, ID card, video phỏng vấn. Voice agent gọi điện xác thực.',
    sub: 'Mở rộng từ text → multi-modal. CV ảnh chụp điện thoại OK. Video PV → transcribe + analyze sentiment. Agent giờ có mắt, có tai, có miệng.',
    principle: { num: 14, name: 'Multi-modal agent' },
    hints: [
      'Agent giờ "thấy" được — đọc ảnh, video, audio…',
      'Vision: xử CV scan, hợp đồng ảnh, ID card…',
      'Voice: gọi xác thực ứng viên hoặc reference check',
    ],
    revealMsg: 'Multi-modal = agent giống con người 80%. Đọc, nghe, nói, nhìn — đều hiểu. Còn 20% thì để chừa cho con người, kẻo thất nghiệp hết.',
    layers: [
      { name: 'Là cái gì', text: 'Vision API: gửi image → text. Speech-to-Text: audio → text. Text-to-Speech: text → audio. Kết hợp với LLM = agent đa giác quan. Tên dài, nhưng dùng thì click với paste.' },
      { name: 'Vì sao trúng', text: 'HR có rất nhiều dữ liệu KHÔNG phải text: CV scan, ID, video PV recording. Vision + Voice mở khóa toàn bộ data đó. Trước giờ data này nằm im trong Drive, giờ đem ra dùng được.' },
      { name: 'Khi nào đừng dùng', text: 'Vision/voice tốn nhiều tiền hơn text năm đến mười lần. Chỉ dùng khi text không đủ. Đa số task HR vẫn text. Đừng vision hóa cái gì cũng được — tốn tiền vô ích.' },
    ],
    lanVoice: 'Voice agent gọi xác thực ứng viên = wow factor lớn. Nhưng care một chuyện: tuân thủ pháp luật ghi âm — Việt Nam yêu cầu báo trước. Báo trước rồi gọi mới được, đừng gọi rồi mới báo.',
    outcomes: {
      cam: [
        'Vision agent đọc 100 CV scan',
        'Voice agent gọi xác thực 5 ứng viên',
        'Video PV analyzer (transcribe + sentiment)',
      ],
      tuduy: [
        'Multi-modal pipeline — kết hợp ba giác quan',
        'Khi nào dùng vision vs OCR truyền thống — đo cost rồi quyết',
        'Compliance ghi âm voice — báo trước, lưu hợp lý',
      ],
    },
    steps: [
      { title: 'Vision agent đọc CV scan ảnh',          xp: 120, desc: 'Gemini Vision: ảnh → CV trích xuất schema. Test 30 CV scan thật. Chụp xiêu vẹo cũng đọc được.' },
      { title: 'Voice agent gọi xác thực',              xp: 150, desc: 'Twilio + Gemini Voice. Gọi → hỏi 3 câu → ghi âm → transcribe. Ứng viên ngạc nhiên dễ chịu.' },
      { title: 'Video PV analyzer',                      xp: 130, desc: 'Upload Zoom recording → transcribe + sentiment + key moments. Khỏi phải xem lại ba mươi phút.' },
      { title: 'ID card validator',                      xp: 90,  desc: 'Vision đọc CCCD → match với HR record + check fake. Có gì lệch là flag.' },
      { title: 'Compliance ghi âm voice (Việt Nam)',    xp: 60,  desc: 'Báo trước, get consent, xóa sau 30 ngày. Theo Nghị định 13. Không có gì lươn lẹo.' },
    ],
  },

  15: {
    week: 'PRO · TUẦN 15', duration: '120 phút',
    title: 'Observability: trace, log, alert. Agent fail → anh chị biết ngay. Dashboard health real-time.',
    sub: 'Production agent ≠ demo agent. Phải biết khi nào fail, vì sao fail, fix nhanh trước khi user complain. Build dễ. Vận hành khó. Đó mới là master.',
    principle: { num: 15, name: 'Vận hành sản phẩm' },
    hints: [
      'Mỗi agent call → log đầy đủ: input, output, latency, cost…',
      'Khi error rate > 5% → alert Telegram anh chị ngay…',
      'SLA 99.5% uptime — show sếp con số là thuyết phục',
    ],
    revealMsg: 'Master = vận hành được. Không phải build được. Build dễ. Vận hành khó. Câu này tôi xin được nhắc lại lần nữa, vì nó là cốt lõi của tuần 15.',
    layers: [
      { name: 'Là cái gì', text: 'Observability nghĩa là anh chị biết MỌI THỨ về agent đang chạy. Trace mỗi call, log structured, alert khi anomaly. Trước giờ anh chị build agent xong là quên. Giờ anh chị build xong là nuôi — như nuôi cây cảnh.' },
      { name: 'Vì sao trúng', text: 'Production có sự cố. Không observe nghĩa là sửa mù, sửa lâu, sửa sai. Có observe nghĩa là sửa root cause trong năm phút. Khoảnh khắc đầu tiên log cho anh chị biết "agent fail vì lý do X" là khoảnh khắc anh chị lên level.' },
      { name: 'Khi nào đừng dùng', text: 'Demo project KHÔNG cần observability đầy đủ. Production thật BẮT BUỘC. Stage 0 dry-run skip OK. Path B paid bắt buộc đủ. Đừng nhầm hai cái — nhầm là vỡ trận.' },
    ],
    lanVoice: 'Khóa kết thúc tuần 15 nghĩa là anh chị vận hành được agent ở mức bản chính thức cho công ty. Tôi nói thật, không màu mè: ở Việt Nam chưa có công ty nào có HR làm được mức này. Anh chị đi đến đây là đã đứng ở chỗ ít người đi tới. Đáng tự hào lắm chứ không đùa.',
    outcomes: {
      cam: [
        'Trace + log đầy đủ mỗi agent call',
        'Alert Telegram khi error rate > 5%',
        'Health dashboard real-time — đẹp, gọn',
      ],
      tuduy: [
        'Structured logging (JSON, không text). Text khó query',
        'Alert có severity (critical/warning/info). Đừng alert tất cả mọi thứ',
        'SLA + SLO định nghĩa được — không định nghĩa thì không đo được',
      ],
    },
    steps: [
      { title: 'Setup logging structured cho agent',     xp: 80,  desc: 'JSON log: timestamp, agent_id, input, output, latency, cost, status. Đủ field, không thừa không thiếu.' },
      { title: 'Trace tracking (LangSmith / Helicone)',  xp: 100, desc: 'Mỗi conversation có trace ID. Debug được cả flow. Lúc cần là có ngay.' },
      { title: 'Alert Telegram khi error spike',          xp: 90,  desc: 'Error rate > 5% trong 5 phút → alert. Latency > 10s → alert. Đêm có sự cố là anh chị biết liền.' },
      { title: 'Health dashboard Looker Studio',          xp: 110, desc: 'Real-time: uptime, error rate, cost burn, latency P95. Show sếp là sếp gật.' },
      { title: 'Postmortem template + SLA report',        xp: 80,  desc: 'Mỗi sự cố → postmortem một trang. Cuối tháng → SLA report cho sếp. Chuyên nghiệp ở chỗ này.' },
    ],
  },
};

// === SPECIALTY LANES — sau Pro Track, chọn 1 trong 5 lane chuyên sâu ===
const SPECIALTY = {
  TA: {
    name: 'TA Pro — Tuyển dụng chuyên sâu',
    duration: '4 tuần', icon: '🎯',
    desc: 'Sourcing automation scale 1000 ứng viên/ngày. ATS integration sâu. Employer branding agent. Bốn tuần để thành sourcing pro.',
    weeks: [
      'Sourcing automation: crawl LinkedIn/TopCV/GitHub → outreach personalized 1000/ngày',
      'ATS integration: kết nối Greenhouse/Lever/Workday/Base ATS → sync hai chiều',
      'Employer Branding agent: blog post tự động, social media, candidate journey',
      'Capstone TA: build full sourcing → screening → onboarding pipeline cho một vị trí công ty anh chị',
    ],
  },
  CB: {
    name: 'C&B Pro — Lương thưởng chuyên sâu',
    duration: '4 tuần', icon: '💰',
    desc: 'Co-teach với luật sư. Payroll auditor 3-source. Total Rewards Statement. BHXH 2026 advisor. Số liệu sạch, ngủ ngon.',
    weeks: [
      'Payroll auditor 3-source: BHXH + Thuế TNCN + Lương → đối chiếu tự động',
      'Total Rewards Statement: PDF cá nhân hóa cho từng nhân viên',
      'Bonus calculator + Salary benchmarker (TopCV/VietnamWorks scrape)',
      'Capstone C&B: build compliance scanner BHXH 2026 + co-teach một buổi với luật sư partner',
    ],
  },
  LD: {
    name: 'L&D Pro — Đào tạo phát triển chuyên sâu',
    duration: '4 tuần', icon: '📚',
    desc: 'Personalized Learning Path 6 tháng. Microlearning daily Zalo. AI Tutor cho hard skill. Manager coaching bot. Đào tạo cá nhân hóa thật.',
    weeks: [
      'Skill gap analyzer: assess + gap chart cho từng nhân viên',
      'Personalized Learning Path 6 tháng: roadmap có content + assessment',
      'Microlearning bot daily: push 5 phút lesson qua Zalo theo gu',
      'Capstone L&D: build full L&D operating system cho một phòng ban công ty anh chị',
    ],
  },
  HRBP: {
    name: 'HRBP Pro — Đối tác kinh doanh chuyên sâu',
    duration: '4 tuần', icon: '📊',
    desc: 'Attrition predictor (ML). Workforce dashboard. Manager effectiveness scorer. Exit interview analyzer. Số liệu kể chuyện thay anh chị.',
    weeks: [
      'Attrition predictor: XGBoost + SHAP, dự đoán 3-6 tháng trước',
      'Workforce dashboard: real-time HRIS data, headcount, salary, demographics',
      'Manager effectiveness scorer: pulse survey + tần suất 1:1 + team sentiment',
      'Capstone HRBP: build People Analytics dashboard production cho công ty anh chị',
    ],
  },
  Ops: {
    name: 'HR Ops Pro — Vận hành chuyên sâu',
    duration: '4 tuần', icon: '⚙️',
    desc: 'Helpdesk 24/7 đa kênh. Ticket triage. Leave automation. Alumni network. Document RAG. HR Ops nhẹ tay, gọn việc.',
    weeks: [
      'Helpdesk 24/7 đa kênh: Zalo OA + Email + Slack + Telegram',
      'Ticket triage agent: phân loại → route đúng team',
      'Leave automation 2.0: tích hợp HRIS + Calendar + manager 1-click',
      'Capstone Ops: build full HR Service Center cho 500+ nhân viên công ty anh chị',
    ],
  },
};

// === MASTER CAPSTONE — sau khi xong Pro Track + 1 Specialty ===
const MASTER = {
  title: 'AI HR Master Capstone',
  duration: '4-6 tuần',
  icon: '⭐',
  desc: 'Build một sản phẩm AI HR production-grade cho công ty anh chị THẬT. Có user thật, có ROI thật, có team adopt thật. Viết case study public + speak ở một sự kiện HR. Đến đây là đến level cuối — không có level cao hơn.',
  requirements: [
    'Đã xong Phần A + B (10 buổi)',
    'Đã xong Pro Track (5 buổi)',
    'Đã xong 1 Specialty Lane (4 buổi)',
    'Có 1 dự án production trong công ty thật',
  ],
  outcomes: [
    'Chứng chỉ "AI HR Master" — chứng nhận cao nhất khóa',
    'Case study publish trên blog HR Builder VN',
    'Speak một sự kiện HR (Vietnam HR Summit / The Makeover / VNHR)',
    'Mentor cohort tiếp theo — trả công 5-10M/cohort',
    'Vào Master Inner Circle — ba mươi người AI HR Master VN đầu tiên',
  ],
};

// Tổng XP
const TOTAL_XP = Object.values(LESSONS).reduce((sum, l) =>
  sum + l.steps.reduce((s, step) => s + step.xp, 0), 0);

const TOTAL_PRO_XP = Object.values(PRO_TRACK).reduce((sum, l) =>
  sum + l.steps.reduce((s, step) => s + step.xp, 0), 0);

// Merge LESSONS + PRO_TRACK để lesson.html?id=11 hoạt động
Object.assign(LESSONS, PRO_TRACK);

// Tổng số bước (Phần A + B + Pro Track)
const TOTAL_STEPS = Object.values(LESSONS).length * 5;
