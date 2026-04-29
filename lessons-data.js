// Dữ liệu 10 buổi HR Builder VN — viết theo lối "giáo sư Đinh Tiến Dũng": tếu táo, có nhịp, đôi khi lạc đề
// Mỗi buổi: 1 nguyên lý + 5 bước + 3 hint + 3 tầng đào sâu

const LESSONS = {
  1: {
    week: 'TUẦN 1', duration: '90-150 phút tuỳ tốc độ',
    title: 'Tuần 1 — Cổng HR và tuyệt chiêu "Tự học cùng máy"',
    sub: 'Thưa các anh chị, ở đời cái gì không biết thì ta hay tra Google. Nhưng Google bây giờ nó giống cái chợ trời, ném cho mình mười cái link rồi để mình tự bơi, có khi bơi mãi không thấy bờ. Vậy nên tuần này ta áp dụng triết lý đơn giản: không biết thì hỏi thẳng máy. Người làm nhanh xong trong chín mươi phút, người mới lần đầu cài đặt thì đôi ba tiếng cũng chẳng sao.',
    principle: { num: 1, name: 'Tự học cùng máy' },
    hints: [
      'Cứ chân thành mà khai báo: "Em ơi, anh mù tịt code, em dựng cho anh cái cổng xin nghỉ phép". Thật thà như đếm thế lại hay!',
      'Đừng Google nữa, tội nghiệp Google. Cứ túm áo con máy mà hỏi.',
      'Máy nó không thông minh hơn mình đâu, nhưng được cái nó chăm. Mà ở đời, cứ chăm là ăn tiền rồi.',
    ],
    revealMsg: 'Cái rễ của cả khóa nằm ở đây — cần biết gì thì hỏi thẳng máy, đừng vòng qua Google. Mà rễ thì phải sâu, các cụ đã dạy rồi, tôi xin không nhắc lại.',
    layers: [
      { name: 'Là cái gì', text: 'Cần biết X để dựng cổng HR? Hỏi thẳng máy một câu là xong, đơn giản vậy thôi. Máy nó nhớ anh chị làm mảng nào, nên không phải giải thích từ đầu mỗi lần — đỡ một mỏi miệng. Còn Google thì khác. Google quẳng cho mười cái đường dẫn rồi đi mất, để anh chị ngồi tự đọc, tự lọc, tự đoán cái nào dùng được. Nỗi khổ ấy tôi tin các anh chị đã quen.' },
      { name: 'Vì sao trúng', text: 'Lý do, kỳ thực, chẳng có gì cao siêu. Máy nó đã đọc giúp anh chị rồi, đọc xong tóm gọn lại thành câu trả lời. Tôi xin nhấn mạnh một ý mà nhiều người hay nhầm: máy không thông minh hơn anh chị đâu. Nó chỉ chăm hơn. Mà chăm, đôi khi, lại hơn thông minh. Các cụ chắc cũng đồng ý — chỉ là quên không ghi vào ca dao.' },
      { name: 'Khi nào đừng hỏi máy', text: 'Có lúc anh chị nên cất máy đi mà mở văn bản gốc ra. Chuyện luật chẳng hạn — bảo hiểm xã hội, hợp đồng lao động — máy mà lỡ phịa con số, sếp hỏi lại anh chị không cãi nổi đâu. Hợp đồng quan trọng cũng vậy: luật sư học bảy năm chứ có ít, không phải để máy thay. À, còn một ý nữa — dữ liệu nhạy cảm. Cái này tôi không nói dài: đừng quăng vào prompt. Mất thì khổ, có khi không phải mỗi mình anh chị khổ.' },
    ],
    lanVoice: 'Tôi đoán các anh chị đang lo: "Em chưa biết HTML thì dựng cổng HR kiểu gì?" Câu hỏi rất hay. Câu trả lời ngắn hơn câu hỏi — không cần biết. Năm 2026 rồi, chuyện viết mã là việc của máy, việc của các anh chị là mở miệng ra mà ra lệnh. Chín mươi phút nữa cái đường dẫn nó nằm trên Zalo bio rồi, ai vào cũng tưởng anh chị mới đi du học thung lũng Silicon ba tháng về. Kỳ thực, máy nó làm cả. Mấy em phụ giúp anh chị giờ nhiều lắm: Google Antigravity, VSCode chat, Cursor, Cline... cái nào cũng được, miễn anh chị cảm thấy thuận tay.',
    outcomes: {
      cam: [
        'Cổng HR chạy ngon ở máy mình, có ba nút tử tế: xin nghỉ phép, hỏi luật công ty, đăng ký team building',
        'Điền form xong là tin nhắn Ting Ting bay về Telegram cá nhân, không mất một xu cài đặt',
        'Đường dẫn công khai sẽ dựng ở Buổi 1.5 — chuyện đó mình bàn sau, đừng vội',
      ],
      tuduy: [
        'AI agent (Antigravity, VSCode chat, Cline...) khác ChatGPT — nó tự tạo file, tự chạy mã, không bắt anh chị cứ copy với paste mãi',
        'Tả việc cho máy y như viết bản mô tả công việc cho nhân viên mới: rõ thì việc xong, mơ hồ thì khỏi bàn',
        'Bí cái gì hỏi thẳng nó. Đừng quay sang Google nữa, mất thì giờ mà nhiều khi cũng chẳng ra',
      ],
    },
    steps: [
      {
        title: 'Cài 1 IDE có chat AI — chọn 1 trong 4 cái', xp: 20,
        desc: 'Cái này thực ra là Buổi 0 — chưa paste prompt vội đâu. Anh chị chọn 1 trong 4 cái dưới đây, cài xong là sẵn sàng. Tất cả đều miễn phí.',
        sampleType: 'instruction',
        samplePrompt: `Chọn 1 trong 4 cái — cái nào sẵn thì lấy:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅰 GOOGLE ANTIGRAVITY (đề xuất cho người mới)
   • Vào antigravity.google → tải về → cài như app
   • Login Google (gmail nào cũng được) — free, không cần thẻ
   • Tạo project mới → ô chat hiện ra ở phải → sẵn sàng
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅱 VSCode + GITHUB COPILOT CHAT
   • Tải VSCode từ code.visualstudio.com
   • Mở VSCode → Sign in bằng tài khoản GitHub (góc trái dưới)
   • Bấm icon Chat ở sidebar (hình bong bóng) — chat hiện ngay
   • (Free tier có hạn, nếu hết hạn thì chuyển qua C hoặc D)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅲 CURSOR (cũng kiểu VSCode, free tier rộng hơn)
   • Tải từ cursor.com → cài như app
   • Login Google/GitHub → free 14 ngày Pro, hết thì còn free tier
   • Bấm Ctrl+L → chat hiện ngay
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅳 VSCode + CLINE (free hoàn toàn, nhưng cần API key riêng)
   • Tải VSCode → mở Extensions → tìm "Cline" → Install
   • Cline cần anh chị có Anthropic / OpenAI / Gemini API key (có cái free)
   • Đặt key trong cài đặt Cline → New chat session
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Cài xong + thấy ô chat "Bạn cần làm gì?" / "How can I help?" — sang bước 2.

⚠ Kẹt ở đâu đừng quay sang Google nữa, hỏi thẳng AI vừa cài: "Em mới cài, lỗi là ...". Nó tự sửa cho anh chị.`,
      },
      {
        title: 'Một câu — máy dựng nguyên cái cổng', xp: 50,
        desc: 'Paste prompt mẫu dưới đây vào ô chat AI (Antigravity / VSCode chat / Cursor / Cline — tuỳ anh chị cài cái nào ở Bước 1), điền chỗ [...] rồi nhấn Enter. Anh chị ngồi xem mã chữ tự nhảy ra, không phải đụng tay gì cả.',
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
    title: 'Tuần 2 — Mớ bong bóng 30 CV và ngón đòn "Chia nhỏ việc"',
    sub: 'Lại nói chuyện đọc CV. Nhìn một xấp ba mươi cái rải trên bàn, hoa hết cả mắt, có khi anh chị vừa đọc vừa ngáp. Đưa cả cục cho máy bảo "chấm hộ cái" — nó cũng ngất. Các cụ dạy rồi, kiến tha lâu cũng đầy tổ, việc to thì phải băm nhỏ ra. Buổi này chín mươi phút, ra hẳn cái bảng phân tích đẹp như tập đoàn lớn.',
    principle: { num: 2, name: 'Chia nhỏ việc' },
    hints: [
      'Máy nó sợ "ngợp" lắm — quẳng cả mâm cỗ ra nó ăn không kịp đâu',
      'Phải dắt tay nó đi từng bước: đọc rồi mới trích, đối chiếu rồi mới chấm, chấm xong mới vẽ',
      'Việc to mà không chia thì y như đi chợ Tết không có giấy ghi: về tay không một nửa',
    ],
    revealMsg: 'Bài to mà khó thì xé thành từng mảnh nhỏ rõ ràng, máy xử từng mảnh một là xong. Tư duy này đắt nhì cả khóa, ngay sau cái rễ Buổi 1.',
    layers: [
      { name: 'Là cái gì', text: 'Việc khó thì tách ra thành năm bảy bước nhỏ, mỗi bước có đầu vào đầu ra cụ thể. Máy nó xử từng bước một, không bị cái gọi là "ngợp" — chữ này tôi mượn của các em sinh viên thi cuối kỳ, máy cũng vậy thôi, quá nhiều việc một lúc là nó ngợp.' },
      { name: 'Vì sao trúng', text: 'Một câu lệnh mà mơ hồ thì máy đoán mò, đoán mò thì sai. Còn năm bước rõ ràng thì máy biết phải làm gì lần lượt, sai chỗ nào sửa chỗ ấy, chứ đập đi xây lại từ đầu thì khổ. Cái này dân HR ta hay gọi là "có quy trình" — tên nghe hơi khô, nhưng dùng được việc.' },
      { name: 'Khi nào đừng dùng', text: 'Việc đơn giản một bước — kiểu "tóm tắt giúp tôi đoạn này thôi" — đừng chia nhỏ, đừng làm cho nó rối. Chia chỉ làm khi việc có ba bước rõ trở lên. Việc nhỏ mà cũng chia thì giống ăn bát phở phải vẽ biểu đồ — chẳng để làm gì.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "CV thật có ảnh, có khi scan ngược chiều, máy đọc nhầm thì sao?" Câu hỏi rất hay. Trả lời cũng vui — máy bây giờ đọc CV scan giỏi hơn anh chị tưởng, có khi giỏi hơn cả anh chị lúc bốn giờ chiều mỏi mắt. Buổi này mình test thẳng, không nghe tôi nói suông nữa.',
    outcomes: {
      cam: [
        'Một cái bảng phân tích chạy mượt, click vào ứng viên là hiện modal đẹp như báo cáo tập đoàn',
        'Ba mươi CV chấm xong, mỗi CV có lý do đàng hoàng chứ không phải con số khô tanh',
        'Top năm hiện ra biểu đồ năm chiều so sánh — sếp nhìn cái gật ngay',
      ],
      tuduy: [
        'Bài lớn thì chia thành bước nhỏ — quy trình ra trước, câu lệnh theo sau',
        'Mỗi bước phải có đầu vào đầu ra rõ ràng, máy không có chỗ tự diễn',
        'Lấy băng dính che thông tin cá nhân trước khi đưa cho máy — đừng để CV ứng viên đi du lịch ngoài ý muốn',
      ],
    },
    steps: [
      {
        title: 'Anonymize 30 CV (che SĐT, CCCD, tên, ảnh)', xp: 30,
        desc: '⚠ Theo Nghị định 13/2023 (bảo vệ dữ liệu cá nhân VN), CV chứa thông tin cá nhân — anh chị phải che TRƯỚC khi đưa cho AI. KHÔNG chỉ che SĐT/CCCD như khoá cũ — bổ sung danh sách dưới.',
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
    title: 'Tuần 3 — Đóng gói tri thức và nghệ thuật "Tả việc cho rõ"',
    sub: 'Anh chị làm được một lần rồi, chẳng lẽ lần sau có mớ CV mới lại ngồi hì hục gõ lại từ đầu? Rảnh rỗi sinh nông nổi à? Không, ta phải đóng gói cái sự khôn ngoan của mình lại. Tuần này mình gói toàn bộ "phép" của Buổi 1, Buổi 2 thành một cái túi, đồng nghiệp xách về là chạy ro ro.',
    principle: { num: 3, name: 'Tả việc rõ' },
    hints: [
      'Viết câu lệnh cho máy y hệt viết bản mô tả công việc cho nhân viên mới — mơ hồ là nó "sáng tạo" lạc đề ngay',
      'Rõ đến mức ai đọc cũng làm giống nhau, không tự thêm tự bớt',
      'Tách "kiến thức nghề" ra khỏi "quy trình", mai mốt đổi cái nào nâng cái đó, không phải đập đi xây lại',
    ],
    revealMsg: 'Tả việc cho máy chính là viết bản mô tả công việc cho nhân viên ảo. Càng rõ máy càng đúng ý, càng mơ hồ máy càng diễn xuất. Diễn xuất thì để Oscar, không phải để chỗ công sở.',
    layers: [
      { name: 'Là cái gì', text: 'Mỗi việc giao cho máy phải có đủ năm thứ: vai trò, các bước, tiêu chí pass, trường hợp đặc biệt, ví dụ đầu vào đầu ra. Y như bản JD. Đời HR anh chị đã viết hàng trăm cái JD rồi — giờ chỉ là viết một cái nữa cho cậu nhân viên không bao giờ xin nghỉ phép thôi.' },
      { name: 'Vì sao trúng', text: 'Máy nó không đọc được ý ngầm của anh chị đâu. Anh chị ngầm hiểu chứ máy thì không. Tả rõ thì kết quả ổn định, đồng nghiệp dùng cũng ra cùng đáp án — không phải mỗi người ngồi chạy vừa chạy vừa cằn nhằn vì máy lạc đề.' },
      { name: 'Khi nào đừng dùng', text: 'Việc khám phá — kiểu "anh cứ vẽ vài ý cho tôi xem" — đừng spec chặt. Spec chặt chỉ làm khi cần kết quả nhất quán cộng với đồng nghiệp dùng lại. Brainstorm mà spec chặt giống đi ăn buffet phải tự nấu từng món, mất hết cái thú.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Đóng gói chi cho mệt? Paste prompt mỗi lần là xong rồi mà." Câu hỏi cũng hay. Nhưng paste hai trăm dòng mỗi lần thì… mệt thật, mệt lắm chứ. Đóng gói rồi thì đồng nghiệp gõ /screen-cv là chạy. Sếp hỏi "phòng mình có quy trình không" — anh chị mở cái thư mục ra, sếp gật ngay. Đỡ phải giải trình mười lăm phút.',
    outcomes: {
      cam: [
        'Một cái kho riêng trên GitHub mang dấu ấn công ty anh chị',
        'Năm cái lệnh, sáu file kỹ năng, gọn gàng như tủ thuốc gia đình',
        'Đồng nghiệp xách về máy năm phút là chạy được, không cần hỏi han lằng nhằng',
      ],
      tuduy: [
        'Kỹ năng là phần kiến thức nghề, ít khi sửa. Lệnh là phần quy trình, sửa thường xuyên',
        'Tách hai cái ra — đổi rubric chấm không phải đập lại nguyên cái quy trình',
        'Một lần định nghĩa cho rõ, cả team dùng chung một cách — đỡ phiền',
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

Đính file FEEDBACK-[ten-dong-nghiep].md vào repo — đây là evidence để anh Lân chấm.`,
        gradingCriteria: ['Repo GitHub private active', 'Có ≥3 file skill + ≥5 file command', 'Có ≥1 file FEEDBACK đồng nghiệp đã thử', 'Đồng nghiệp clone & chạy được /screen-cv không cần anh Lân support'],
      },
    ],
  },

  4: {
    week: 'TUẦN 4', duration: '90 phút · ⭐ MỐC HOÀN 5M',
    prereqWarning: '⚠ Buổi này anh chị cần chọn một trong hai đường: (a) Claude Code Max khoảng trăm đô một tháng để chạy Routines trên mây tự động, hoặc (b) Pro hai chục đô chạy hẹn giờ ngay máy mình (anh Lân kèm một-một). Không chọn đường nào thì không qua được mốc hoàn năm triệu.',
    title: 'Tuần 4 — Chuyện sáu giờ sáng và phép màu "Tự kích hoạt"',
    sub: 'Cảnh giới cao nhất của làm việc là — đang ngủ mà việc vẫn trôi. Bốn tuần qua anh chị phải gõ thì máy mới chạy. Sang tuần này ta chơi lớn. Sáu giờ sáng, trời còn chưa sáng hẳn, anh chị còn ngái ngủ thì con máy nó đã lặng lẽ chòi dậy, quét thư mục, vớt CV mới, chấm điểm rồi nhắn cho anh chị một bản tóm tắt qua Telegram.',
    principle: { num: 4, name: 'Tự kích hoạt' },
    hints: [
      'Buổi 1 đến 3, anh chị phải bật Claude Code thì máy mới chạy. Tuần này máy nó tự bật',
      'Đặt giờ cho nó đi: sáu giờ sáng, trưa, hay khi có file mới, hay khi có ai gọi tới',
      'Lưu ý — nuôi chó phải có xích. Để máy chạy tự động là phải có rào chắn, không có rào thì xin đừng thả rông',
    ],
    revealMsg: 'Máy nó chạy tự động theo cái cò: theo giờ, theo file mới, theo tín hiệu bên ngoài. Anh chị không cần online. Tư duy này biến HR thành rảnh tay hai mươi tư trên hai mươi tư — nghe quảng cáo quá, nhưng quả thực vậy.',
    layers: [
      { name: 'Là cái gì', text: 'Routines là máy chạy trên đám mây của Anthropic theo lịch, theo tín hiệu, hay theo sự kiện. Anh chị tắt laptop đi, máy vẫn chạy. Cuối cùng thì cái laptop của anh chị cũng được nghỉ phép — nó cảm ơn anh chị lắm đấy.' },
      { name: 'Vì sao trúng', text: 'Anthropic ôm máy giúp anh chị, tính tiền theo lúc chạy — khoảng hai mươi cent một tháng cho một routine năm phút mỗi ngày. Anh chị không phải dựng máy chủ, không phải hiểu mây là gì. Chỉ cần biết bấm cái nút "Activate".' },
      { name: 'Khi nào đừng dùng', text: 'Việc làm một lần thôi — kiểu "chấm xong bộ CV này hôm nay là xong" — đừng đẻ ra routine làm gì. Routine để dành cho việc lặp đi lặp lại. Việc một lần thì làm một lần, đẻ routine ra là phí tiền vừa phí tinh thần.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Dữ liệu CV gửi lên mây Anthropic có an toàn không?" Câu hỏi rất hay, rất nên hỏi sớm. Anthropic không train trên dữ liệu routine của anh chị — bật zero retention là xong. Tuần 9 mình bàn sâu chuyện này, lúc đó anh chị yên tâm hơn.',
    outcomes: {
      cam: [
        'Một cái routine chạy đều bảy ngày liên tiếp — có nhật ký kiểm chứng đàng hoàng',
        'Bảng tính lợi ích Trước/Sau với ít nhất ba con số đo được (giờ/tuần, độ chính xác, số CV)',
        'Kho GitHub có đủ năm rào chắn — phòng cháy chữa cháy luôn',
      ],
      tuduy: [
        'Cò để bật máy có ba kiểu: theo lịch, theo tín hiệu gọi tới, theo sự kiện trên GitHub',
        'Mây thì hơn máy mình khi cần chạy hai mươi tư trên hai mươi tư — đơn giản vậy thôi',
        'Bất cứ routine nào cũng BẮT BUỘC có rào chắn. Không có rào — đừng thả rông',
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

Pass mốc: 7/7 ngày có brief + log. 6/7 = borderline, anh Lân xem từng trường hợp. ≤5/7 = fail.`,
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
- anh Lân xem bằng chứng trong 48h → quyết định pass/fail/borderline`,
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
    title: 'Tuần 5 — Lắp tay lắp chân, ngón đòn "Đưa công cụ"',
    sub: 'Bốn tuần đầu mình cho máy đi học việc — nó chỉ có cái đầu để nghĩ thôi. Tuần này ta lắp tay lắp chân cho nó. Cấp cho nó quyền vào Drive, vào Gmail, vào Zalo. Giống như anh chị có một cô Sen ảo chuyên chạy việc vặt vậy — không chỉ ngồi phán nữa mà tự xách giỏ đi làm. Đối thủ nhìn vào tốc độ chăm sóc ứng viên của công ty anh chị, mắt chữ O mồm chữ A, không hiểu sao mình mất người.',
    principle: { num: 5, name: 'Đưa công cụ' },
    hints: [
      'Bốn tuần đầu máy chỉ biết suy nghĩ, chưa làm được việc thật',
      'Tuần này máy có tay chân — kết nối Drive, Gmail, Zalo, hệ thống nhân sự, gửi email được hết',
      'Bấm kết nối như bật thông báo điện thoại — không phải gõ một dòng mã nào cả',
    ],
    revealMsg: 'Cho máy nó quyền vào hệ thống thật là nó không còn là chatbot vớ vẩn nữa. Nó thành đồng nghiệp ảo có quyền hành động. Mà đồng nghiệp ảo thì không xin nghỉ ốm.',
    prereqWarning: '⚠ Buổi này cần Claude Code Max khoảng trăm đô một tháng vì dùng các kết nối MCP. Pro hai chục đô không chạy được.',
    layers: [
      { name: 'Là cái gì', text: 'MCP — viết tắt của một cụm tiếng Anh dài dòng tôi xin lược qua — là chuẩn để máy nó kết nối với Drive, Gmail, Zalo, Notion bằng vài cú bấm. Không phải gõ code chuyên nghiệp. Hồi 2024 muốn làm cái này phải thuê thợ một tuần, giờ bấm năm phút là xong.' },
      { name: 'Vì sao trúng', text: 'Có tay chân thì máy mới làm được việc thật, không phải chỉ ngồi tán dóc. Chat dóc giống nhân viên buôn chuyện hành lang — vui đấy, nhưng không ra việc. Có tay chân thì nó đi pha cà phê, gửi email, ghi vào hệ thống nhân sự, trả lời Zalo. Khác hẳn.' },
      { name: 'Khi nào đừng dùng', text: 'Đừng kết nối hai chục hệ thống cùng lúc. Bắt đầu ít ít thôi. Mỗi kết nối phải có phạm vi rõ — kiểu "chỉ xem thư mục cv-mới-vào", đừng giao cho nó chùm chìa khóa cả nhà. Có chùm chìa khóa cả nhà mà lỡ tay là banh nhà, không phải quét lại cái bếp đâu.' },
    ],
    lanVoice: 'Tôi nghe anh chị lo: "Sếp không cho dùng Zalo OA cho con máy đâu." Câu này tôi nghe nhiều lắm. Cách giải: làm thử với năm ứng viên trước, đo được "máy giảm sáu mươi phần trăm câu hỏi của ứng viên" — đem con số đó cho sếp xem là sếp gật ngay. Đừng xin trước, hãy chìa kết quả ra trước. Người Việt mình nghe con số dễ gật hơn nghe lý thuyết.',
    outcomes: {
      cam: [
        'Bốn kết nối sáng đèn xanh: Drive, Gmail, Zalo, hệ thống nhân sự',
        'Năm trang chào mừng cá nhân hóa cho top năm ứng viên, mỗi người một địa chỉ riêng',
        'Zalo OA biết trả ba câu cơ bản, ứng viên hỏi không phải ngồi đợi email HR',
      ],
      tuduy: [
        'Mỗi kết nối phải có phạm vi rõ ràng — chưa rõ là chưa kết nối',
        'Mỗi tuần kiểm tra một lần xem máy nó dùng kết nối nào, bao nhiêu lần',
        'Bắt đầu ít, mở rộng dần. Đừng tham một lúc — không phải ai cũng cần đến năm kết nối',
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
    title: 'Tuần 6 — Một mình một việc thì lâu, dăm ba đứa cùng làm thì nhanh',
    sub: 'Tuần trước máy nó một mình ôm bảy việc, nó cũng mệt chứ — y như nhân viên mới ôm hết phòng ban làm thay. Tuần này tôi xin rủ anh chị chia bảy việc cho bốn cậu phụ chạy song song. Một cậu sàng CV, một cậu đối chiếu với mô tả công việc, một cậu soạn email, một cậu tổng hợp báo cáo. Anh chị ngồi xem bốn cửa sổ chạy cùng lúc, như xem trận bóng có bốn cái camera vậy.',
    principle: { num: 6, name: 'Phối hợp nhiều agent' },
    hints: [
      'Tuần trước máy ôm bảy việc một mình — nó mệt là phải',
      'Chia bảy việc cho bốn cậu phụ, chạy song song bốn lần nhanh hơn',
      'Cần một cậu trưởng nhóm điều phối — y như HR Manager điều team mới, chỉ khác là team này không xin nghỉ phép bao giờ',
    ],
    revealMsg: 'Việc to thì chia cho nhiều cậu chuyên môn, mỗi cậu một vai rõ ràng, có một cậu trưởng nhóm điều phối. Y như team người thật — chỉ khác là không phải mời cà phê.',
    prereqWarning: '⚠ Buổi này cần Claude Code Max khoảng trăm đô một tháng vì chạy bốn cửa sổ cùng lúc. Pro hai chục đô không đủ tài nguyên.',
    layers: [
      { name: 'Là cái gì', text: 'Một cậu trưởng nhóm chia việc cho ba đến năm cậu phụ. Mỗi cậu phụ chuyên một vai: cậu sàng, cậu đối chiếu, cậu viết, cậu tổng hợp. Tên gọi nghe oách phết, mà thực ra chỉ là máy phân vai cho máy chạy thôi.' },
      { name: 'Vì sao trúng', text: 'Việc nhiều, trên năm chục cái, lại cần chuyên môn — chia nhiều cậu chạy nhanh gấp ba bốn lần. Mỗi cậu giỏi một việc, không phải "biết đủ thứ nhưng cái gì cũng làng nhàng". Ý này tôi mượn của nghề nhân sự: tuyển chuyên gia xịn hơn tuyển người-cái-gì-cũng-biết-một-tí.' },
      { name: 'Khi nào đừng dùng', text: 'Việc ít, dưới hai chục cái — một cậu là đủ. Chia nhiều cậu tốn gấp bốn tiền chạy máy. Chỉ chính đáng khi có khối lượng. Đẻ ra bốn cậu cho năm CV mỗi tuần thì giống mua xe tải để đi chợ — chở được, nhưng phí xăng.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Gấp bốn tiền chạy máy có đáng không?" Câu hỏi rất hay. Đáp tùy quy mô. Năm chục CV mỗi tuần thì chưa cần. Năm trăm CV mỗi tuần thì chia bốn cậu tiết kiệm cho anh chị mười lăm giờ một tuần — tính ra lợi quá đi chứ.',
    outcomes: {
      cam: [
        'Bốn cậu phụ chạy song song, mỗi cậu một cửa sổ riêng',
        'Một cậu trưởng nhóm điều phối, không có chuyện cãi nhau giữa các cậu',
        'Một video chín mươi giây quay bốn cửa sổ chạy cùng lúc — đem khoe sếp được',
      ],
      tuduy: [
        'Khi nào dùng nhiều cậu, khi nào dùng một mình — đo khối lượng rồi quyết',
        'Khuôn mẫu: trưởng nhóm cộng các cậu phụ. Đơn giản mà mạnh',
        'Phối hợp qua file chung. Đừng để các cậu đoán ý nhau, lạc đề ngay',
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
    title: 'Tuần 7 — Máy biết nhớ, biết học. Càng làm càng hiểu ý anh chị',
    sub: 'Buổi 1 đến 6 mỗi lần máy chạy là máy mới, không nhớ hôm qua. Buổi này tôi xin được dạy nó cách ghi nhớ. Anh chị sửa nó mười lần — máy chấm 7, anh chị thấy 9, lý do thế này thế kia — đến tuần thứ tám máy nó đoán đúng 9/10 trước khi anh chị xem. Như đứa em họ ở cùng lâu rồi cũng hiểu tính anh chị thôi.',
    principle: { num: 7, name: 'Máy biết học' },
    hints: [
      'Buổi 1 đến 6, mỗi lần chạy là máy mới — không nhớ gì hôm qua',
      'Buổi này máy nó NHỚ phản hồi của anh chị, không phải nhớ kiểu chat tạm bợ',
      'Cuối tuần máy tự gom các phản hồi thành luật mới, áp dụng tuần sau',
    ],
    revealMsg: 'Cái sổ ghi nhớ cộng với cái vòng lặp phản hồi — máy dần thuộc về anh chị, không phải mẫu chung chung nữa. Đây là khoảnh khắc nó từ công cụ trở thành đồng nghiệp đã đồng hành lâu năm.',
    layers: [
      { name: 'Là cái gì', text: 'Cuốn sổ ghi nhớ của máy gồm bốn phần: hồ sơ anh chị, ngữ cảnh dự án, phản hồi, và các luật rút ra. Máy đọc cuốn sổ trước mỗi lần làm việc. Cuối tuần thì gom phản hồi thành luật mới. Dân HR mình gọi là "đào tạo nội bộ" — đúng là vậy thật, chỉ là đào tạo cho máy thôi.' },
      { name: 'Vì sao trúng', text: 'Anh chị sửa mỗi lần thì máy ghi vào sổ. Tuần sau áp luật mới — đoán đúng hơn ba bốn chục phần trăm. Có biểu đồ đo độ chính xác hẳn hoi, không phải cảm tính đâu. Cảm tính sếp không gật, có con số thì sếp gật.' },
      { name: 'Khi nào đừng dùng', text: 'Sổ phình to quá thì tốn tiền chạy mà độ chính xác lại giảm. Cuối tuần phải gom lại, đừng để sổ thành thùng rác kỷ niệm. À còn một ý nữa: KHÔNG lưu thông tin cá nhân của ứng viên vào sổ — cái này anh chị nhớ kỹ, không phải nhắc tới lần thứ hai mới nhớ.' },
    ],
    lanVoice: 'Tôi đoán anh chị lo: "Có sổ ghi nhớ thì tốn tiền không?" Có chứ, khoảng năm đến mười phần trăm tiền thêm. Đổi lại độ chính xác tăng ba bốn chục phần trăm — đáng lắm. Mà điểm hay nhất: anh chị nhảy việc thì cuốn sổ đem theo, máy đã "biết anh chị" rồi, không phải đào tạo lại từ đầu.',
    outcomes: {
      cam: [
        'Cuốn sổ năm trang đang chạy — trang phản hồi có ít nhất mười dòng thực tế',
        'Bảng so sánh Đoán vs Thực tế trên mười CV test — đo được mức tăng từ Tuần 1 đến Tuần 7',
        'Trang luật có ít nhất năm luật mới rút ra từ phản hồi — cụ thể, không chung chung',
      ],
      tuduy: [
        'Bốn phần trong sổ: Hồ sơ, Ngữ cảnh, Phản hồi, Luật',
        'Cuối tuần phải gom — rút phản hồi lặp thành luật. Không gom là loạn',
        'Mở chế độ đoán trước, độ tin cậy tăng dần — và đo được',
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
    title: 'Tuần 8 — Cò nâng cao và chuyện "HR tự dựng phần mềm nội bộ"',
    sub: 'Ví dụ thế này: nhân viên nộp đơn nghỉ phép qua biểu mẫu công ty. Máy tự đối chiếu chính sách với lịch của tổ — đơn nhỏ thì duyệt luôn, đơn to thì chuyển lên cho quản lý. Anh chị vừa thay một anh thợ phần mềm mà không cần biết phần mềm là gì. CV thêm một dòng: "Tự dựng công cụ nội bộ bằng AI, không gõ một dòng code".',
    principle: { num: 8, name: 'Cò nâng cao' },
    hints: [
      'Tuần 4 máy chạy theo lịch — đến giờ thì bật',
      'Tuần này máy chạy theo gọi tới — biểu mẫu công ty nộp xong là máy chạy ngay',
      'Phòng HR tự dựng phần mềm, không thuê thợ. Trong CV ghi "tự dựng phần mềm nội bộ, không một dòng code" — sang phết',
    ],
    revealMsg: 'Cò gọi máy chạy ngay khi có biểu mẫu nộp tới — máy xử lý xong ghi vào bảng. Anh chị vừa thay một anh thợ phần mềm mà chẳng cần biết phần mềm là gì.',
    prereqWarning: '⚠ Buổi này cần Max khoảng trăm đô một tháng cộng với chỗ đặt URL công khai (Netlify/Vercel miễn phí được).',
    layers: [
      { name: 'Là cái gì', text: 'Máy có một địa chỉ công khai. Biểu mẫu hay tín hiệu bên ngoài gọi tới địa chỉ đó là máy chạy, xử lý xong trả lời. Như cái "cửa hàng nhỏ" cho phòng HR. Tên nghe lạ, nhưng dùng quen rồi thấy đơn giản như gọi Grab — gọi một cái, có xe, xong.' },
      { name: 'Vì sao trúng', text: 'HR có cả tá quy trình lặp đi lặp lại: đơn nghỉ phép, đơn làm thêm giờ, đăng ký đào tạo, báo cáo sự cố. Mỗi cái mười đến mười lăm phút, nhân với trăm đơn một tháng là mười ba đến hai lăm giờ. Tự động hóa đi, tiết kiệm khoảng tám mươi phần trăm. Tám mươi phần trăm thời gian đó anh chị làm gì là quyền của anh chị.' },
      { name: 'Khi nào đừng dùng', text: 'Việc cần phán đoán cá nhân — duyệt thưởng senior, dính chính trị nội bộ, dính chuyện tế nhị — đừng tự động. Tự động chỉ làm với việc có chính sách rõ ràng để đối chiếu. Việc tế nhị mà tự động thì khó coi, thậm chí khó cứu.' },
    ],
    lanVoice: 'Tôi nghe anh chị lo: "Sếp không cho HR tự duyệt đơn đâu." Câu này hợp lý. Cách giải: máy đề xuất, sếp bấm một cái duyệt qua email. Sếp tiết kiệm chín mươi phần trăm thời gian thì sếp gật. Anh chị vẫn không tự duyệt — anh chị chỉ làm trợ lý cho sếp. Tài tình ở chỗ ấy.',
    outcomes: {
      cam: [
        'Một địa chỉ công khai chạy được, có biểu mẫu nộp là máy xử lý ngay',
        'Ba tình huống thử: nộp đơn nhỏ duyệt liền, đơn vừa chuyển sếp, đơn quá to từ chối khéo',
        'Một dòng cho hồ sơ cá nhân: "Tự dựng công cụ HR nội bộ — biểu mẫu nghỉ phép tự duyệt, tiết kiệm tám mươi phần trăm thời gian phòng nhân sự"',
      ],
      tuduy: [
        'Khuôn mẫu: gọi tới máy → máy xử lý → ghi sổ kèm gửi email. Đơn giản mà mạnh',
        'Rào chắn: tự duyệt tối đa năm ngày, trên đó chuyển sếp',
        'Sếp bấm một cái thay vì duyệt tay — họ cảm ơn anh chị',
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
    title: 'Tuần 9 — Đặt rào trước, tránh chuyện đi hầu tòa',
    sub: 'Tránh phạt một tỷ vì Nghị định 13, hai trăm triệu vì Luật Lao động. Tỉ số lợi ích đầu tư ra khoảng một nghìn lần cho năm chục đô tiền chạy máy mỗi năm. Nghe có vẻ quá, nhưng con số đúng là vậy. Các cụ đã dạy: rào trước bao giờ cũng tốt hơn vá sau.',
    principle: { num: 9, name: 'Đặt rào trước' },
    hints: [
      'Tuần 1 đến 8 mỗi máy con có rào riêng',
      'Tuần này một cậu thanh tra riêng đi quét cả phòng — như anh công an khu phố đi tuần',
      'Phải có rào TRƯỚC khi vi phạm, không phải vá sau khi bị phạt một cục',
    ],
    revealMsg: 'Rào dựng TRƯỚC khi triển khai. Cậu thanh tra này y như cái bảo hiểm pháp lý — mua thì hơi ngán, nhưng không mua thì lúc cần không kịp đâu.',
    layers: [
      { name: 'Là cái gì', text: 'Ba cấp rào: rào trong từng máy con khi nó chạy, rào trong mỗi lần routine chạy, và cậu thanh tra quét cả phòng cuối tuần. Ba lớp như áo khoác mùa đông — trông cồng kềnh thật, nhưng đông kéo về mới biết tại sao mình mặc.' },
      { name: 'Vì sao trúng', text: 'Vi phạm phát hiện sớm thì sửa nhỏ. Phát hiện qua kiểm toán thì phạt to lại mất uy tín. Cậu thanh tra khoảng năm chục đô một năm, phạt Nghị định 13 là một tỷ. Anh chị tính lợi ích giùm tôi đi — tôi tính rồi, ra một nghìn đến hai vạn lần.' },
      { name: 'Khi nào đừng dùng', text: 'Tuần đầu chấp nhận cậu thanh tra báo nhầm khoảng ba mươi phần trăm — nó còn đang học. Sau bốn tuần gom luật xong thì giảm dần. À, và đừng để nó tự sửa vi phạm. Nó chỉ chỉ điểm thôi. Anh chị mới là người sửa. Anh chị là HR — quyết định cuối cùng vẫn là của anh chị.' },
    ],
    lanVoice: 'Tôi nghe anh chị lo: "Tuân thủ phức tạp lắm, HR mình đâu phải luật sư." Câu hợp lý. Nhưng cậu thanh tra này chỉ là cái danh sách kiểm tra ba chục điểm chuyển hóa thành máy. Anh chị không phải học luật, chỉ dựng một cậu thanh tra tự động rồi luật sư xác nhận từng vụ. Hai bên đều nhàn.',
    outcomes: {
      cam: [
        'Cậu thanh tra chạy thật ít nhất ba lần — thật chứ không phải biểu diễn',
        'Một bảng nhiệt năm phần tuân thủ — sếp nhìn cái hiểu',
        'Một trang báo cáo tóm tắt cho lãnh đạo — đem họp được luôn',
      ],
      tuduy: [
        'Ba cấp rào: trong từng máy con, trong routine, và cậu thanh tra cả phòng',
        'Mọi vi phạm phải có trích dẫn luật cụ thể. Không nói chung chung',
        'Báo nhầm ba mươi phần trăm tuần đầu — chuyện thường, đừng cuống',
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
    title: 'Tuần 10 — Bài tập tổng kết, ngày trình diễn và chứng chỉ có tên anh chị',
    sub: 'Tuần này không phải Recruiter Agent nữa. Anh chị lấy MỘT bài HR riêng của công ty mình — đào tạo nhân viên mới, tính lương, đào tạo, đo cảm xúc tổ, hỗ trợ thắc mắc nhân viên — áp mười nguyên lý đã học, dựng từ con số không trong một tuần. Buổi trước học để dùng, buổi này học để dạy người khác.',
    principle: { num: 10, name: 'Chuyển mảng' },
    hints: [
      'Chín tuần qua anh chị dùng Recruiter Agent làm phương tiện học',
      'Tuần 10 chứng minh tư duy chuyển sang bài khác, không phải copy lại Recruiter',
      'Anh chị chọn một bài HR riêng + áp mười nguyên lý + dựng thật trong bảy ngày',
    ],
    revealMsg: 'Mười tư duy đã học áp dụng cho BẤT KỲ bài HR nào. Đây là phép thử thật — anh chị có thực sự master không. Master không phải là làm được một thứ. Master là chuyển được sang bài khác, sang công ty khác.',
    layers: [
      { name: 'Là cái gì', text: 'Lấy một bài HR riêng của công ty — đào tạo, lương thưởng, học và phát triển, cảm xúc tổ, hỗ trợ thắc mắc — viết hồ sơ chín nguyên lý, dựng, rồi đem trình diễn. Đơn giản về mặt cấu trúc, phức tạp về mặt thực tế. Đó mới gọi là tổng kết.' },
      { name: 'Vì sao trúng', text: 'Master nghĩa là chuyển được. Nếu anh chị chỉ làm Recruiter Agent được, anh chị chưa master đâu, mới chỉ học thuộc khuôn mẫu thôi. Tuần 10 ép anh chị chuyển sang bài khác để chứng minh tư duy thật, không phải copy quy trình cũ. Cái này tôi xin nói thẳng — đây là khoảnh khắc quyết định.' },
      { name: 'Khi nào đừng dùng', text: 'Đừng chọn bài quá tham — kiểu "dựng phần mềm tính lương cho một nghìn nhân viên trong một tuần". Mentor giúp anh chị chọn việc vừa vặn: nỗi đau thật, một tuần làm được. Tham quá là sa lầy. Sa lầy ở tuần 10 thì tiếc lắm.' },
    ],
    lanVoice: 'Tôi đoán anh chị lo: "Tự dựng một mình, lỡ thất bại thì sao?" Câu hỏi rất hay, rất con người. Trả lời: KHÔNG có chuyện một mình. Một cậu mentor AI túc trực hai mươi tư trên hai mươi tư, nhóm Zalo, giờ trực của tôi, cộng với chín kế hoạch chuyển bài đã sẵn từ các tuần trước. Tiêu chí qua mốc là sáu trên chín nguyên lý, không bắt hoàn hảo. Hoàn hảo để dành cho tuần 11.',
    outcomes: {
      cam: [
        'Một máy tổng kết chạy thật — thật chứ không phải biểu diễn',
        'Một video trình diễn năm phút cho Ngày Trình Diễn — đem trình sếp, trình đối tác được',
        'Chứng chỉ "AI HR Builder" có địa chỉ kiểm chứng — gắn LinkedIn được',
      ],
      tuduy: [
        'Mười nguyên lý áp dụng được cho mọi bài HR, không chỉ tuyển dụng',
        'Master nghĩa là chuyển được. Một thứ là biết, hai thứ trở lên là master',
        'Bài tổng kết chính là điểm sáng trong hồ sơ cá nhân, đem theo cả đời sự nghiệp',
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

⚠ anh Lân/mentor sẽ challenge plan này tại Office Hour Tuần 9 → anh chị phải defend được.`,
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
- 1 câu: cảm ơn cohort + anh Lân

⚠ NỘP 24h TRƯỚC Demo Day:
- Link video trên Drive (public, anh Lân + cohort xem được)
- Link slide deck
- Link GitHub repo

⚠ DEMO DAY (live Zoom 5 phút Q&A):
- anh Lân + 2-3 đồng môn ngẫu nhiên hỏi
- Câu hỏi: technical (rủi ro), business (ROI), scale (bottleneck)
- Bạn trả lời ngắn, dứt khoát`,
      },
      {
        title: 'Nhận chứng chỉ + portfolio', xp: 70,
        desc: 'Sau pass Demo Day, nhận Accredible verified URL + vào alumni inner circle.',
        sampleType: 'instruction',
        samplePrompt: `📋 Quy trình nhận chứng chỉ:

1. Sau Demo Day, anh Lân xem trong 48 tiếng → email kết quả PASS / BORDERLINE / FAIL
2. Nếu PASS:
   - Nhận email Accredible với link chứng chỉ verified
   - Click "Add to LinkedIn" → tự động post lên LinkedIn của anh chị
   - URL chứng chỉ public — share với sếp/HR network
3. Nhận card visit "AI HR Practitioner" (PDF) — gắn email signature
4. Được mời vào Slack Inner Circle alumni (chỉ học viên pass cohort được vào)

📝 Nộp portfolio cho anh Lân:
- 3 link: GitHub repo + video demo + slide
- 1 đoạn 100 từ "tôi đã build cái gì + impact" (anh Lân giới thiệu trên blog HR Builder VN)

⚠ Borderline: phải fix 2-3 điểm anh Lân note → demo lại Tuần 11. PASS được nhận chứng chỉ.

⚠ FAIL: không nhận chứng chỉ. Có thể đăng ký Cohort 2 với giá 50% (fee chỉ 5M, không deposit).`,
      },
    ],
  },
};

// === PRO TRACK — buổi 11-15 (advanced, sau khi pass capstone) ===
const PRO_TRACK = {
  11: {
    week: 'PRO · TUẦN 11', duration: '120 phút',
    title: 'Tuần 11 (Pro) — Cho máy đọc cả tủ tài liệu, trả lời có trích nguồn đàng hoàng',
    sub: 'Đem cả Sổ tay nhân viên, chính sách công ty, kho mô tả công việc, hợp đồng mẫu — tất tần tật vào kho cho máy đọc. Nhân viên hỏi BHXH thế nào, chính sách nghỉ ốm ra sao, máy trả lời chuẩn từng dòng từng trang. KHÔNG bịa nữa.',
    principle: { num: 11, name: 'Tra cứu có trích nguồn' },
    hints: [
      'Máy giờ trả lời dựa trên TÀI LIỆU CÔNG TY THẬT, không phải kiến thức chung chung',
      'Mỗi câu trả lời chỉ rõ trang nào, đoạn nào — y như sách giáo khoa',
      'Hết thời máy bịa — luật BHXH đúng, chính sách chuẩn',
    ],
    revealMsg: 'Tên thật gọi là RAG, viết tắt một cụm tiếng Anh dài tôi xin được lược đi. Ý đơn giản thôi: máy tra tài liệu trước khi trả lời, có trích nguồn. Đây là cách các tập đoàn lớn dùng AI cho an toàn.',
    layers: [
      { name: 'Là cái gì', text: 'Một cái kho lưu tài liệu thành dạng máy hiểu được. Máy hỏi vào kho, lấy ra ba đến năm đoạn liên quan, trả lời cộng với trích nguồn. Tên gọi nghe khoa học, nhưng làm thì chỉ là bấm với dán, không phải tiến sĩ mới làm được.' },
      { name: 'Vì sao trúng', text: 'AI nói chung dễ bịa — bịa ra rất tự tin, đó mới khổ. Cách này ép máy phải dùng nguồn thật. Trả lời sai là lỗi rõ ràng tra được, không phải kiểu "máy nó nói vu vơ chiều thứ Sáu".' },
      { name: 'Khi nào đừng dùng', text: 'Câu hỏi sáng tạo — nghĩ ý mới, viết một bản JD chưa từng có — đừng dùng cách này. Cách này chỉ để TRẢ LỜI dựa trên tài liệu CÓ SẴN. Sáng tạo thì để máy bay tự do.' },
    ],
    lanVoice: 'Tôi đoán anh chị đang lo: "Dựng cái kho này phức tạp lắm." Trả lời: Pinecone hay Chroma có gói miễn phí cho cả triệu mục. Cài đặt một file khoảng ba mươi phút là xong. KHÔNG cần kỹ sư máy học gì cả. Cái này tôi đảm bảo bằng kinh nghiệm của tôi, không phải cảm hứng.',
    outcomes: {
      cam: [
        'Một cái kho chứa hơn trăm tài liệu công ty, máy tra được',
        'Máy trả lời có trích nguồn — ghi rõ trang số đàng hoàng',
        'Độ chính xác từ chín lăm phần trăm trở lên trên ba chục câu thử',
      ],
      tuduy: [
        'Hai khái niệm nền tảng: chuyển tài liệu thành dạng máy hiểu, và tìm theo nghĩa',
        'Kết hợp tìm theo nghĩa với tìm theo từ khoá — hai loại bù nhau',
        'BẮT BUỘC trích nguồn. Không trích là không triển khai',
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
    title: 'Tuần 12 (Pro) — Đo chất lượng máy. Bằng con số, không bằng cảm',
    sub: 'Trước giờ anh chị cứ nói "máy chạy ổn" theo cảm tính. Tuần này dựng hẳn một bộ thử có thật — đo độ chính xác, đo tiền, đo tỉ lệ máy bịa, đo giọng văn. Cảm tính là chuyện của trà chiều.',
    principle: { num: 12, name: 'Đo chất lượng máy' },
    hints: [
      'Máy bản một và máy bản hai — anh chị không biết cái nào tốt hơn nếu không đo',
      'Dựng ba bốn chục câu thử có đáp án sẵn, máy chấm tự động',
      'Tỉ lệ qua, độ chính xác, tốc độ, tiền — đo được hết. Đo là gốc của cải thiện',
    ],
    revealMsg: 'Có đo thì cải thiện được. Không đo thì đoán mò. Đây là tư duy của thợ phần mềm thật — và thật ra cũng là tư duy chung của mọi nghề muốn làm tốt lên.',
    layers: [
      { name: 'Là cái gì', text: 'Bộ thử là tập hợp các tình huống có đầu vào với đáp án mong đợi. Máy chạy, máy chấm tự động, ra điểm. Đơn giản về cấu trúc, kỳ công ở việc viết tình huống thử ban đầu.' },
      { name: 'Vì sao trúng', text: 'Đổi câu lệnh, chạy bộ thử, biết tốt hay xấu ngay. KHÔNG đoán mò "có vẻ ổn hơn". "Có vẻ" là từ tôi sợ nhất khi làm sản phẩm — vì nó không có bằng chứng.' },
      { name: 'Khi nào đừng dùng', text: 'Dựng bộ thử tốn thời gian — khoảng một ngày cho năm chục tình huống. Chỉ làm khi máy đã chạy thật cộng với cần cải thiện liên tục. Lúc còn loay hoay tìm hướng thì khoan, đừng đo sớm. Đo sớm là tốn công vô ích.' },
    ],
    lanVoice: 'Đây là tư duy mà chín mươi lăm phần trăm người build AI bỏ qua — không đo, chỉ cảm. Master nghĩa là đo được, cải thiện được, có cách giải trình được. Sếp hỏi "sao tốt hơn?" → anh chị trả lời bằng con số, không phải bằng "tôi cảm thấy".',
    outcomes: {
      cam: [
        'Bộ thử năm chục tình huống — đủ để phủ các kiểu câu hỏi',
        'So tài hai phiên bản câu lệnh, chọn được người thắng bằng con số',
        'Một cái bảng theo dõi hiệu năng theo thời gian',
      ],
      tuduy: [
        'Phát triển AI bằng cách thử trước — y như nghề lập trình thật',
        'Tỉ lệ máy bịa dưới năm phần trăm là mức đạt. Trên là phải sửa',
        'Tiền mỗi câu hỏi đo được. Không đo là không nhân rộng được',
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
    title: 'Tuần 13 (Pro) — Tiết kiệm tiền chạy máy, sáu bảy chục phần trăm',
    sub: 'Khoá đầu tiên tốn khoảng trăm đô. Khoá thứ năm có một trăm học viên có thể lên ba bốn trăm đô nếu không khéo. Tuần này ta hạ về dưới trăm đô — nhờ ba ngón nghề đơn giản.',
    principle: { num: 13, name: 'Tiết kiệm tiền máy' },
    hints: [
      'Cất phần lệnh tĩnh đi, chỉ tính tiền phần động — đỡ một mớ',
      'Việc dễ dùng máy nhỏ, việc khó dùng máy to. Đừng để tô phở mua bằng phong bì cưới',
      'Gộp mười câu hỏi thành một lần gọi — giảm chi phí thừa',
    ],
    revealMsg: 'Tiết kiệm được tiền thì nhân rộng được. Master nghĩa là chạy nghìn câu hỏi mỗi ngày với chi phí của trăm câu. Nghe hơi phép thuật, nhưng chỉ là kỹ thuật thôi.',
    layers: [
      { name: 'Là cái gì', text: 'Ba ngón nghề chính. Một là cất phần lệnh tĩnh — phần cất chỉ trả một phần mười giá. Hai là chia việc đúng máy — nhỏ máy nhỏ, to máy to. Ba là gộp lô — giảm một nửa chi phí với điều kiện chấp nhận chờ. Ba thứ kết hợp, tiền rớt hẳn.' },
      { name: 'Vì sao trúng', text: 'Cất một phần lệnh thì rẻ gấp mười. Máy nhỏ Haiku rẻ hơn máy to Sonnet khoảng mười hai lần cho việc đơn giản. Gộp lô giảm một nửa cộng với chấp nhận chờ hai mươi tư giờ. Số đẹp đến mức anh chị sẽ tiếc sao không tối ưu sớm hơn — nhưng đừng tiếc, chưa nhân rộng thì chưa cần.' },
      { name: 'Khi nào đừng dùng', text: 'Tối ưu sớm là tối ưu vô ích. Đợi sản phẩm có ba chục người dùng thật rồi mới tối ưu. Trước đó tập trung chất lượng. Tối ưu chi phí cho mười người dùng là tối ưu nhầm chỗ — như đang cao một mét sáu nặng năm chục cân mà đòi giảm cân.' },
    ],
    lanVoice: 'Đến khoá thứ năm trở đi mới thật sự cần lo chuyện này. Nhưng học sớm để khi nhân rộng không cuống. Cuống muộn thì lúng túng, học trước thì bình tĩnh.',
    outcomes: {
      cam: [
        'Một cái bảng theo dõi tiền theo từng máy con và theo thời gian',
        'Cất phần lệnh tĩnh đang chạy — đo được tỉ lệ hit',
        'Logic chia việc ba bậc rõ ràng',
      ],
      tuduy: [
        'Tỉ lệ cất lệnh trúng trên bảy mươi phần trăm là mức đạt',
        'Chi phí mỗi học viên dưới năm đô một tháng là gọn',
        'Gộp lô cho việc không gấp. Không gấp thì gộp đỡ tiền',
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
    title: 'Tuần 14 (Pro) — Lắp mắt, lắp tai, lắp miệng cho máy',
    sub: 'Mở rộng máy từ chỉ biết chữ sang nhìn được, nghe được, nói được. CV chụp điện thoại xộc xệch máy vẫn đọc. Video phỏng vấn máy ghi âm rồi tóm tắt. Máy giờ có mắt, có tai, có miệng — chỉ thiếu cái nồi cơm điện.',
    principle: { num: 14, name: 'Đa giác quan' },
    hints: [
      'Máy giờ "thấy" được — đọc ảnh, đọc video, nghe ghi âm',
      'Mắt: đọc CV scan, hợp đồng chụp ảnh, ảnh thẻ căn cước',
      'Miệng: gọi điện xác thực ứng viên, hoặc gọi cho người tham chiếu',
    ],
    revealMsg: 'Lắp ba giác quan vào là máy giống con người tám mươi phần trăm. Đọc, nghe, nói, nhìn — đều hiểu. Hai mươi phần trăm còn lại để chừa cho người, kẻo thất nghiệp hết cả.',
    layers: [
      { name: 'Là cái gì', text: 'Một bộ máy nhìn ảnh ra chữ. Một bộ máy nghe tiếng ra chữ. Một bộ máy đọc chữ ra tiếng. Ba bộ này kết hợp với máy hiểu chữ là ra máy đa giác quan. Tên dài, nhưng dùng thì chỉ là bấm với dán.' },
      { name: 'Vì sao trúng', text: 'HR có cả tá dữ liệu KHÔNG phải chữ: CV scan, ảnh thẻ, ghi âm phỏng vấn. Lắp ba giác quan vào là mở khóa được hết. Trước giờ đám dữ liệu đó nằm im trong Drive, giờ đem ra dùng được.' },
      { name: 'Khi nào đừng dùng', text: 'Mắt với tai tốn nhiều tiền hơn chữ năm đến mười lần. Chỉ dùng khi chữ không đủ. Đa số việc HR vẫn là chữ. Đừng cái gì cũng nhìn cũng nghe — tốn tiền vô ích.' },
    ],
    lanVoice: 'Máy gọi xác thực ứng viên thì có yếu tố gây ấn tượng lớn. Nhưng có một chuyện phải lưu ý — luật ghi âm bên Việt Nam yêu cầu báo trước. Báo trước rồi gọi mới được, đừng gọi rồi mới báo.',
    outcomes: {
      cam: [
        'Một cậu mắt đọc trăm CV scan ngon lành',
        'Một cậu miệng gọi xác thực năm ứng viên thật',
        'Một cậu phân tích video phỏng vấn — ghi lại lời nói cộng với cảm xúc',
      ],
      tuduy: [
        'Đường dẫn đa giác quan — kết hợp ba kiểu giác quan',
        'Khi nào nhìn ảnh, khi nào dùng đọc chữ truyền thống — đo tiền rồi quyết',
        'Tuân thủ ghi âm — báo trước, lưu hợp lý',
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
    title: 'Tuần 15 (Pro) — Theo dõi sức khoẻ máy. Build dễ, vận hành mới khó',
    sub: 'Máy chạy thật khác máy chạy thử. Phải biết khi nào hỏng, vì sao hỏng, sửa nhanh trước khi người dùng kêu ca. Dựng thì dễ, nuôi mới khó. Đó mới là master.',
    principle: { num: 15, name: 'Vận hành sản phẩm' },
    hints: [
      'Mỗi lần máy chạy là phải ghi sổ đầy đủ: đầu vào, đầu ra, mất bao lâu, hết bao tiền',
      'Khi tỉ lệ lỗi vượt năm phần trăm là Telegram báo cho anh chị ngay',
      'Cam kết chạy chín chín phẩy năm phần trăm thời gian — đem cho sếp xem là thuyết phục',
    ],
    revealMsg: 'Master nghĩa là vận hành được, không phải dựng được. Dựng thì dễ, vận hành mới khó. Câu này tôi xin nhắc lại một lần nữa vì nó là cốt lõi của tuần 15.',
    layers: [
      { name: 'Là cái gì', text: 'Theo dõi sức khoẻ máy nghĩa là anh chị biết MỌI THỨ về máy đang chạy. Bám dấu mỗi lần gọi, ghi sổ có cấu trúc, báo động khi có gì lạ. Trước giờ anh chị dựng máy xong là quên. Giờ dựng xong là nuôi — như nuôi cây cảnh ấy.' },
      { name: 'Vì sao trúng', text: 'Chạy thật là phải có sự cố. Không theo dõi nghĩa là sửa mù, sửa lâu, sửa sai. Có theo dõi nghĩa là sửa được gốc rễ trong năm phút. Khoảnh khắc đầu tiên cuốn sổ báo cho anh chị biết "máy hỏng vì lý do X" là khoảnh khắc anh chị lên level.' },
      { name: 'Khi nào đừng dùng', text: 'Việc làm thử KHÔNG cần theo dõi đầy đủ. Chạy thật BẮT BUỘC phải có. Bản dùng thử bỏ qua được. Bản trả tiền bắt buộc phải đủ. Đừng nhầm hai cái — nhầm là vỡ trận.' },
    ],
    lanVoice: 'Khoá kết thúc tuần 15 nghĩa là anh chị vận hành được máy ở mức bản chính thức cho công ty. Tôi nói thật, không màu mè: ở Việt Nam chưa có công ty nào có HR làm được mức này. Anh chị đi đến đây là đã đứng ở chỗ ít người đi tới. Đáng tự hào lắm chứ không đùa.',
    outcomes: {
      cam: [
        'Bám dấu cộng với ghi sổ đầy đủ mỗi lần máy gọi',
        'Telegram báo động khi tỉ lệ lỗi vượt năm phần trăm',
        'Bảng theo dõi sức khoẻ máy chạy thời gian thực, đẹp, gọn',
      ],
      tuduy: [
        'Ghi sổ có cấu trúc, không phải kiểu chữ thường lộn xộn — chữ thường khó tra',
        'Báo động phải có mức độ: gấp, vừa, nhẹ. Đừng báo động tất cả mọi thứ',
        'Cam kết với mục tiêu phải định nghĩa được — không định nghĩa thì không đo được',
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
    name: 'Tuyển dụng chuyên sâu',
    duration: '4 tuần', icon: '🎯',
    desc: 'Săn ứng viên tự động một nghìn người mỗi ngày. Cắm sâu vào hệ thống quản lý ứng viên công ty. Một cậu phụ làm thương hiệu nhà tuyển dụng. Bốn tuần để thành tay săn xịn.',
    weeks: [
      'Săn ứng viên tự động: quét LinkedIn, TopCV, GitHub rồi viết tin chào riêng cho từng người, một nghìn cái mỗi ngày',
      'Kết nối hệ thống quản lý ứng viên: Greenhouse, Lever, Workday, Base — đồng bộ cả hai chiều',
      'Cậu phụ làm thương hiệu: tự viết bài blog, đăng mạng xã hội, chăm hành trình ứng viên',
      'Bài tập cuối: dựng nguyên cái dây chuyền tìm kiếm — sàng lọc — tiếp nhận cho một vị trí thật ở công ty anh chị',
    ],
  },
  CB: {
    name: 'Lương thưởng chuyên sâu',
    duration: '4 tuần', icon: '💰',
    desc: 'Dạy chung với luật sư. Một cậu kiểm toán lương từ ba nguồn. Bảng tổng quyền lợi cá nhân hóa. Cố vấn BHXH năm 2026. Số liệu sạch, ngủ cho ngon.',
    weeks: [
      'Cậu kiểm toán lương từ ba nguồn: bảo hiểm xã hội, thuế thu nhập, bảng lương — đối chiếu tự động',
      'Bảng tổng quyền lợi: file PDF cá nhân hóa cho từng nhân viên',
      'Tính thưởng cộng với so lương thị trường (đọc từ TopCV, VietnamWorks)',
      'Bài tập cuối: dựng cậu thanh tra BHXH 2026 cộng với dạy chung một buổi với luật sư đối tác',
    ],
  },
  LD: {
    name: 'Đào tạo phát triển chuyên sâu',
    duration: '4 tuần', icon: '📚',
    desc: 'Lộ trình học cá nhân hóa sáu tháng. Bài học nhỏ gửi Zalo mỗi ngày. Một cậu gia sư AI cho kỹ năng cứng. Một cậu huấn luyện cho quản lý. Đào tạo cá nhân hóa thật sự.',
    weeks: [
      'Cậu phân tích lỗ hổng kỹ năng: đánh giá cộng với biểu đồ lỗ hổng cho từng người',
      'Lộ trình học cá nhân hóa sáu tháng: lịch trình có nội dung cộng với bài kiểm tra',
      'Cậu gửi bài học nhỏ qua Zalo mỗi ngày: năm phút mỗi bài, theo gu từng người',
      'Bài tập cuối: dựng nguyên cái hệ thống đào tạo cho một phòng ban thật của công ty anh chị',
    ],
  },
  HRBP: {
    name: 'Đối tác kinh doanh chuyên sâu',
    duration: '4 tuần', icon: '📊',
    desc: 'Một cậu đoán nhân viên sắp nghỉ. Một bảng theo dõi nhân lực. Một cậu chấm điểm hiệu quả của các sếp. Một cậu phân tích phỏng vấn nghỉ việc. Số liệu kể chuyện thay anh chị.',
    weeks: [
      'Cậu đoán nhân viên sắp nghỉ: dùng máy học, đoán trước ba đến sáu tháng',
      'Bảng theo dõi nhân lực: dữ liệu thực thời, đầu người, lương, cơ cấu',
      'Cậu chấm hiệu quả các sếp: kết hợp khảo sát nhanh, tần suất gặp 1:1 và cảm xúc của tổ',
      'Bài tập cuối: dựng bảng phân tích con người ở mức bản chính thức cho công ty anh chị',
    ],
  },
  Ops: {
    name: 'Vận hành chuyên sâu',
    duration: '4 tuần', icon: '⚙️',
    desc: 'Bộ phận hỗ trợ chạy hai mươi tư trên hai mươi tư đa kênh. Phân loại yêu cầu. Tự động xử lý đơn nghỉ phép. Mạng lưới cựu nhân viên. Đào tài liệu nội bộ. HR Vận hành nhẹ tay, gọn việc.',
    weeks: [
      'Bộ phận hỗ trợ đa kênh: Zalo OA, email, Slack, Telegram',
      'Cậu phân loại yêu cầu: nhận đơn rồi chuyển đúng tổ',
      'Đơn nghỉ phép phiên bản 2: kết nối hệ thống nhân sự, lịch, sếp bấm một cái duyệt',
      'Bài tập cuối: dựng nguyên cái trung tâm dịch vụ HR cho năm trăm nhân viên thật ở công ty anh chị',
    ],
  },
};

// === MASTER CAPSTONE — sau khi xong Pro Track + 1 Specialty ===
const MASTER = {
  title: 'Bài tập tổng kết AI HR Master',
  duration: '4-6 tuần',
  icon: '⭐',
  desc: 'Dựng một sản phẩm AI HR ở mức bản chính thức cho công ty anh chị THẬT. Có người dùng thật, có lợi ích đo được thật, có cả tổ áp dụng thật. Viết bài kể câu chuyện công khai cộng với đứng nói ở một sự kiện HR. Đến đây là đến mức cuối — không có mức nào cao hơn.',
  requirements: [
    'Đã xong Phần A và B (mười buổi đầu)',
    'Đã xong Pro Track (năm buổi)',
    'Đã xong một Lane chuyên sâu (bốn buổi)',
    'Có một dự án thật đang chạy ở công ty',
  ],
  outcomes: [
    'Chứng chỉ "AI HR Master" — danh hiệu cao nhất của khoá',
    'Câu chuyện công khai đăng trên blog HR Builder VN',
    'Đứng nói ở một sự kiện HR (Vietnam HR Summit / The Makeover / VNHR)',
    'Làm mentor cho khoá tiếp theo — thù lao năm đến mười triệu mỗi khoá',
    'Vào Vòng tròn Master — ba chục người AI HR Master Việt Nam đầu tiên',
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
