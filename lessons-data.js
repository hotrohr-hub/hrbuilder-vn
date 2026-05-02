// Dữ liệu 10 buổi HR Builder VN — viết theo lối "giáo sư Đinh Tiến Dũng": tếu táo, có nhịp, đôi khi lạc đề
// Mỗi buổi: 1 nguyên lý + 5 bước + 3 hint + 3 tầng đào sâu

const LESSONS = {
  1: {
    week: 'TUẦN 1', duration: '90-150 phút tuỳ tốc độ',
    title: 'Cổng HR Portal và tư duy "Tự học cùng AI"',
    sub: 'Anh em thân mến, bình thường gặp ca khó là mình hay lên Google. Nhưng Google giờ như cái chợ, ném cho mình một đống link rồi bắt mình tự bơi. Tuần này, mình đổi bài: Không biết thì nắm áo AI mà hỏi. AI không thông minh hơn mình đâu, nhưng nó là đứa trợ lý "trâu bò" nhất mà anh em từng thấy. Người làm nhanh có thể xong trong 90 phút, người mới setup lần đầu mất vài tiếng cũng là chuyện thường.',
    principle: { num: 1, name: 'Tự học cùng AI' },
    hints: [
      'Hỏi thật thà: "Tôi không biết code, hãy dựng giúp tôi một cái cổng xin nghỉ phép". Càng thật lòng, AI càng thương.',
      'Quên Google đi: Coi AI như đứa em khóa dưới, cứ giao việc trực tiếp cho nó.',
      'Chăm chỉ là thắng: Ở Masan hay Vinamilk, đứa làm nhanh chưa chắc bằng đứa làm đúng và đều. Con AI này chính là đứa đó.',
    ],
    revealMsg: 'Nền tảng cốt lõi của cả khóa học nằm ở đây — cần giải quyết việc gì thì hỏi thẳng AI, đừng vòng vo qua Google. Tư duy này anh em nắm chắc thì các buổi sau sẽ cực kỳ nhàn.',
    diligenceNote: '⚠ Góc bảo mật: Anh em lưu ý, cái "Mã kích hoạt" (Token) gửi tin nhắn giống như chìa khóa nhà vậy. Đừng vứt lung tung trên mạng kẻo người lạ vào spam nát cái Zalo/Telegram nội bộ. Tuần 1 cứ chạy trên máy cá nhân cho chắc.',
    layers: [
      { name: 'Là cái gì', text: 'Cần kiến thức gì để dựng HR Portal? Chỉ cần viết prompt hỏi thẳng AI là xong. Các agent hiện nay có khả năng ghi nhớ context (ngữ cảnh) anh/chị đang làm HR, nên không phải giải thích dài dòng lại từ đầu mỗi lần chat. Còn Google thì ném cho anh/chị một mớ tài liệu để tự đọc, tự chắt lọc. Nỗi vất vả đó chắc dân HR mình ai cũng thấm.' },
      { name: 'Vì sao trúng', text: 'Lý do rất đơn giản: AI nó đã tổng hợp, phân tích data giúp anh/chị rồi đóng gói lại thành câu trả lời trực tiếp. Tôi xin nhấn mạnh lại: AI không giỏi chuyên môn HR bằng anh/chị đâu, nhưng năng suất cày cuốc của nó thì vô địch. Mình dùng nó làm trợ lý thực thi là chuẩn bài.' },
      { name: 'Khi nào đừng hỏi máy', text: 'Có những thứ anh/chị phải tự tra cứu văn bản gốc, đặc biệt là các vấn đề liên quan đến Luật lao động, Bảo hiểm xã hội, Thuế TNCN... Nếu AI bịa số liệu (hallucinate) mà anh/chị đem báo cáo sếp hay tư vấn cho nhân viên thì hậu quả rất khó lường. Thêm một nguyên tắc sống còn: Tuyệt đối KHÔNG đưa dữ liệu cá nhân nhạy cảm (PII) của nhân sự vào prompt. Mất data là sự cố cực kỳ nghiêm trọng.' },
    ],
    lanVoice: 'Tôi đoán anh em đang lo: "Mình dân HR mù tịt code, dựng HR Portal kiểu gì?" — Yên tâm, năm 2026 rồi, việc viết code là việc của AI, việc của HR là tư duy quy trình + ra lệnh. 90 phút nữa anh em đã có Portal xịn như thuê team dev. Cả 10 buổi đều có path miễn phí. Đến Buổi 4 ai muốn AI ngủ vẫn chạy thì có Path C — bridge anh Lân host miễn phí, không phải mua thêm gói nào.\n\n💬 HỎI ĐÁP NHANH:\nQ: "Em không biết code, AI đưa đống chữ loằng ngoằng thì sao?"\nA: Copy hết, dán vào Bàn làm việc, nó tự chạy. Đừng đọc code, hãy đọc kết quả.\n\nQ: "Sao không dùng Google Form cho nhanh?"\nA: Google Form nhìn phèn, không custom theo ý mình được. Tự build portal mới có cảm giác làm chủ.',
    outcomes: {
      cam: [
        'Một HR Portal chạy mượt mà trên máy tính cá nhân, có sẵn 3 tính năng cốt lõi: xin nghỉ phép, hỏi đáp chính sách, đăng ký team building.',
        'Điền form xong là tin nhắn "Ting Ting" tự động bắn về Telegram của anh/chị, hoàn toàn miễn phí.',
        'Đường link public sẽ được setup ở Buổi 1.5 — chuyện đó bàn sau, cứ làm tốt phần local đã.',
      ],
      tuduy: [
        'Hiểu rõ AI agent (như Cursor, Cline...) khác biệt hoàn toàn với ChatGPT thông thường — nó tự tạo file, tự viết và chạy code, giải phóng anh/chị khỏi việc copy-paste thủ công.',
        'Giao việc cho AI (viết prompt) y hệt như viết JD hoặc giao KPI cho nhân viên mới: yêu cầu càng clear, kết quả càng chuẩn.',
        'Gặp bug (lỗi) ở đâu, hỏi thẳng AI ở đó để nó tự debug.',
      ],
    },
    steps: [
      {
        title: 'Mở "Bàn làm việc AI" — chọn 1 công cụ để chat với code', xp: 20,
        desc: '🛠️ Đây coi như bước warm-up — khoan vội viết prompt. Chọn 1 trong 4 công cụ, tất cả đều free.\n\n💡 Ví dụ HR: Giống như anh em chọn dùng Excel hay Google Sheets để làm bảng lương vậy — tool nào tay quen thì dùng.\n\n⚠ Lưu ý cho HR enterprise: 🅰 Antigravity là dễ nhất nếu máy công ty không có quyền admin (chỉ cần login Google). 3 lựa chọn 🅱🅲🅳 đều cần cài software — nếu IT chặn, quay về 🅰 hoặc xin IT mở quyền cài VSCode User-mode.',
        sampleType: 'instruction',
        samplePrompt: `Chọn 1 trong 4 IDE — anh/chị nên đọc lướt 4 lựa chọn rồi chọn cái phù hợp với máy đang dùng:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅰 GOOGLE ANTIGRAVITY  ⭐ ĐỀ XUẤT cho non-tech / máy công ty bị IT chặn
   • Vào antigravity.google → tải installer (~150MB)
   • Login bằng Google (gmail cá nhân OK — KHÔNG dùng email công ty để tránh lẫn data)
   • Tạo project mới → ô chat hiện ra bên phải → sẵn sàng
   • Free, không cần thẻ tín dụng, không cần API key
   ✅ Khuyên dùng nếu: chưa từng cài IDE, sợ tech, máy công ty chặn admin
   ⚠ Nếu IT chặn cài software → xin support cài "User-mode" (không cần admin)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅱 VSCode + GITHUB COPILOT CHAT  (cần admin máy + tài khoản GitHub)
   • Tải VSCode từ code.visualstudio.com (chọn bản "User Installer" cho Windows nếu không có admin)
   • Mở VSCode → Sign in bằng tài khoản GitHub (góc trái dưới)
   • Bấm icon Chat ở sidebar (hình bong bóng) — giao diện chat hiện ra
   ⚠ Lưu ý: Bản Copilot free có giới hạn message/ngày. Hết quota → chuyển 🅰 hoặc 🅳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅲 CURSOR  (cần admin máy, có 14 ngày Pro miễn phí)
   • Tải từ cursor.com → cài đặt (~150MB, cần quyền cài software)
   • Login Google/GitHub → được 14 ngày dùng bản Pro, sau đó về bản free
   • Bấm tổ hợp Ctrl+L → ô chat hiện ra
   ⚠ Sau 14 ngày bản free khá hạn chế — cohort 10 tuần sẽ hết Pro trước khi xong
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅳 VSCode + CLINE  (cần admin + tự setup API key — phù hợp người tech nhất)
   • Tải VSCode → mở tab Extensions → tìm "Cline" → Install
   • Cline cần API key của Anthropic / OpenAI / Gemini (có tier free)
   • Setup key trong phần Settings của Cline → New chat session
   ⚠ Khó nhất cho non-tech — chọn nếu anh/chị đã quen dev tools
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Cài xong + thấy ô chat hỏi "How can I help you?" — là anh/chị đã sẵn sàng sang Bước 2.

⚠ Nếu kẹt ở đâu, đừng Google nữa, hãy chat thẳng với con AI anh/chị vừa cài: "Tôi mới cài tool, đang gặp lỗi là ...". Nó sẽ hướng dẫn cách fix.

🆘 Nếu IT chặn HẾT cả 4 lựa chọn → nhắn nhóm Zalo cohort hoặc anh Lan hỗ trợ workaround.`,
      },
      {
        title: 'Ra lệnh dựng "Cổng thông tin HR" — 1 câu prompt', xp: 50,
        desc: 'Copy prompt mẫu dưới, điền tên + công ty + vai trò vào ô [...] rồi nhấn Enter. Giờ ngồi nhâm nhi cà phê, xem AI tự vẽ trang web có 3 nút: Xin nghỉ phép / Hỏi đáp chính sách / Đăng ký Team building.',
        sampleType: 'prompt',
        samplePrompt: `Tôi tên là [TÊN BẠN — ví dụ: Nguyễn Thị Tuyền].
Tôi làm [VAI TRÒ — ví dụ: HR Executive] tại [CÔNG TY — ví dụ: An Nam Retail].

Hãy tạo cho tôi 1 cổng HR Portal hoàn chỉnh, gom tất cả code vào duy nhất 1 file index.html:
- Giao diện trang chủ: Tên công ty + logo placeholder + 1 dòng giới thiệu ngắn gọn.
- Tạo 3 nút chức năng chính:
  1. Xin nghỉ phép (icon 📅)
  2. Hỏi đáp chính sách & luật công ty (icon ❓)
  3. Đăng ký Team building (icon 🎉)
- Khi click vào mỗi nút → hiện ra form popup.
- Các trường trong Form: Họ và tên + Email/SĐT + Nội dung chi tiết → Nút "Gửi".
- Thiết kế UI: Theme dark mode, hiệu ứng animation mượt mà, phong cách chuyên nghiệp (tránh màu mè rườm rà).

Sau khi tạo xong: hãy mở localhost để tôi preview kết quả ngay lập tức. File này sẽ làm base để tích hợp API Telegram ở step 4.`,
      },
      {
        title: 'Trang điểm giao diện (Màu + Logo + Footer)', xp: 30,
        desc: 'Đổi màu sắc cho đúng nhận diện thương hiệu công ty, thay logo, thêm hotline phòng HR ở dưới cùng. Chỉ cần vài dòng prompt, AI update tức khắc.',
        sampleType: 'prompt',
        samplePrompt: `Sửa lại cổng HR Portal giúp tôi:
1. Đổi background theme từ dark mode sang [MÀU SẮC — ví dụ: xanh dương gradient / xám nhạt thanh lịch]
2. Cập nhật logo placeholder thành text "[TÊN CÔNG TY]" đặt ở vị trí trên cùng.
3. Thêm phần footer bao gồm: Năm thành lập + Hotline HR + "© 20XX. All rights reserved."

Sau khi sửa xong code, hãy refresh browser để tôi xem UI mới.`,
      },
      {
        title: 'Nối dây thông báo về Telegram', xp: 60,
        desc: '🔔 Lấy "Mã kết nối" từ Telegram. Giờ ai bấm nút "Xin nghỉ" trên web là điện thoại anh em "tinh tinh" ngay.\n\n💡 Giải ngố: "Webhook" thực ra là cái dây nối — Webhook kêu thì điện thoại rung. Nghe ghê vậy chứ thực chất chỉ là 2 cái mã copy-paste.\n\n⚠ Step này cần anh em chuẩn bị 2 thông số (PRE-REQUISITE) TRƯỚC khi chạy prompt — bỏ qua sẽ bị kẹt lâu.',
        sampleType: 'prompt',
        samplePrompt: `📋 PRE-REQUISITE — Làm 2 bước này TRƯỚC khi paste prompt cho AI:

1. LẤY BOT TOKEN:
   • Mở app Telegram → tìm tài khoản @BotFather → bấm Start
   • Gõ lệnh /newbot → đặt tên cho bot (vd "HR_Bot") → đặt username (vd "hr_company_bot")
   • Copy chuỗi mã dạng "8123456789:ABC-DEF1234..." — đây chính là BOT_TOKEN.

2. LẤY CHAT_ID CÁ NHÂN CỦA BẠN:
   • Trên Telegram, tìm tài khoản @userinfobot → bấm Start
   • Bot sẽ trả về một dãy số (vd "987654321") — đây là CHAT_ID của anh/chị.

Khi đã có đủ 2 thông số trên → paste prompt sau cho AI:
─────────────────────────
Hãy sửa file index.html: Thiết lập logic khi user bấm nút "Gửi" trên các form popup:
1. Form sẽ bắn request (POST) tới Telegram Bot API.
   - Bot token: [PASTE BOT_TOKEN CỦA BẠN VÀO ĐÂY]
   - Chat ID: [PASTE CHAT_ID CỦA BẠN VÀO ĐÂY]
2. Format tin nhắn gửi về Telegram:
   📝 [Họ tên nhân viên]
   SĐT/Email liên hệ: [input]
   Loại yêu cầu: [Nghỉ phép / Hỏi chính sách / Team building]
   Nội dung chi tiết: [input]
3. Cập nhật UI trạng thái trên nút bấm: "Đang xử lý…" → "✅ Đã gửi thành công" hoặc "❌ Lỗi: [hiện lý do]".

Bây giờ tôi sẽ test thử bằng cách điền form trên browser, hãy đảm bảo tin nhắn được push về Telegram cá nhân của tôi.`,
      },
      {
        title: 'Tự soi lại mình — Reflection 3 phần', xp: 40,
        desc: '✍️ Bước duy nhất CẤM dùng AI, anh em phải tự viết bằng "cơm". Bot sẽ chấm dựa trên rubric 3 phần dưới đây. Làm hời hợt là fail.',
        gradingCriteria: [
          'Phần 1: Phải có đủ 5 gạch đầu dòng, mỗi gạch có ít nhất 2 câu mô tả chi tiết. Từ chối các câu chung chung như "đã làm xong", "bước này OK".',
          'Phần 2: Phải là 1 câu hỏi mang tính chuyên môn/kỹ thuật. Các câu kiểu "Khoá học rất hay ạ" KHÔNG được tính điểm.',
          'Phần 3: Use case HR phải rõ ràng + có mô tả cấu trúc prompt + kết quả kỳ vọng cụ thể (tối thiểu 3 câu).',
        ],
        sampleType: 'rubric',
        samplePrompt: `📝 Cấu trúc bài Reflection (viết vào textarea bên dưới):

PHẦN 1 — REVIEW NHỮNG TASK ĐÃ HOÀN THÀNH (Liệt kê đủ 5 task, mỗi task ghi rõ đã làm gì + chỗ nào thấy khó/hay nhất):
1. ...
2. ...
3. ...
4. ...
5. ...

PHẦN 2 — MỘT CÂU HỎI HOẶC VƯỚNG MẮC (Anh Lân sẽ giải đáp trực tiếp trên group Zalo của cohort):
> ...

PHẦN 3 — USE CASE HR ÁP DỤNG TƯ DUY NÀY (3-5 câu):
- Nêu 1 nghiệp vụ HR cụ thể:
- Anh/chị sẽ viết prompt như thế nào để xử lý:
- Outcome (kết quả) kỳ vọng đạt được là gì:`,
      },
    ],
  },

  2: {
    week: 'TUẦN 2', duration: '90 phút',
    title: 'Xử lý "Núi CV" và nghệ thuật "Task Breakdown" (Chia nhỏ việc)',
    sub: 'Đọc 10 cái CV thì tỉnh, đọc đến cái thứ 50 là mắt bắt đầu "đứng hình". Nếu anh em quăng cả xấp cho AI rồi bảo "Chấm đi", nó sẽ làm ẩu ngay. Bí kíp ở đây là: Việc lớn thì phải băm nhỏ. 90 phút buổi này, mình làm ra cái dashboard phân tích CV xịn như hệ thống ATS của các tập đoàn lớn.',
    principle: { num: 2, name: 'Task Breakdown (Chia nhỏ việc)' },
    hints: [
      'AI rất sợ bị "ngợp" context — ném cho nó một khối lượng công việc khổng lồ và mù mờ, kết quả trả về sẽ rất tệ.',
      'Phải dắt tay nó đi theo workflow: Đọc trích xuất data -> Đối chiếu JD -> Chấm điểm -> Visualize ra biểu đồ.',
      'Áp dụng tư duy chia nhỏ (Task breakdown) giống hệt như cách anh/chị quy chuẩn hoá quy trình cho team HR của mình.',
    ],
    revealMsg: 'Bài toán phức tạp thì xé nhỏ thành từng step rõ ràng, yêu cầu AI xử lý từng mảng một. Tư duy "Task Breakdown" này là kỹ năng quan trọng top 2 của khoá học, chỉ đứng sau tư duy "Tự học cùng AI".',
    diligenceNote: '⚠ Lưu ý sống còn về Data Privacy tuần này: 30 CV mẫu chứa thông tin định danh cá nhân (PII) thật như Tên, SĐT, Email, Ảnh. Theo Nghị định 13/2023 về Bảo vệ Dữ liệu Cá nhân, gửi nguyên xi CV này cho hệ thống AI cloud (như OpenAI, Anthropic) khi chưa được phép là vi phạm pháp luật. Bước 1 (Anonymize data) là BẮT BUỘC. Tuyệt đối không có tư tưởng "làm nháp vài cái chắc không sao". Lộ PII là rủi ro pháp lý cực kỳ lớn.',
    layers: [
      { name: 'Là cái gì', text: 'Gặp một process phức tạp, anh/chị cần chẻ nó ra thành 5-7 task nhỏ, mỗi task quy định rõ Input (đầu vào) và Output (đầu ra). AI sẽ chạy qua từng node một, không bị tình trạng quá tải context.' },
      { name: 'Vì sao trúng', text: 'Viết một prompt quá tham lam và chung chung sẽ khiến AI đoán mò, mà đoán mò thì sẽ hallucinate (bịa data). Khi chia thành các bước rõ ràng (step-by-step), AI hiểu chính xác luồng tư duy của anh/chị. Sai ở step nào, mình debug và fix ngay step đó, không phải chạy lại cả cục từ đầu. Đây chính là tư duy "Quy trình hoá" (Process Optimization) cực kỳ quen thuộc của dân HR.' },
      { name: 'Khi nào đừng dùng', text: 'Với những task đơn giản kiểu "Tóm tắt đoạn text này" hay "Viết lại email này cho chuyên nghiệp hơn" — thì cứ 1 prompt là xong. Đừng cố chia nhỏ làm gì cho phức tạp hoá vấn đề. Việc nhỏ mà vẽ workflow thì chỉ tốn thời gian.' },
    ],
    lanVoice: 'Nhiều anh/chị thắc mắc: "CV thực tế gửi về có định dạng lộn xộn, file PDF scan ngược, AI có đọc chuẩn không?" Câu hỏi rất thực tế. Tin vui là năng lực trích xuất dữ liệu (OCR/Data Extraction) của các model hiện tại mạnh hơn anh/chị tưởng rất nhiều, thậm chí ít sai sót hơn một HR lúc 4h chiều mỏi mắt. Hôm nay mình sẽ đưa data thật vào test luôn để thấy kết quả.',
    outcomes: {
      cam: [
        'Một Dashboard phân tích CV chạy mượt mà, click vào tên ứng viên sẽ pop-up ra phân tích chi tiết.',
        '30 CV được scan và chấm điểm tự động, mỗi điểm số đều có rationale (lý do) rõ ràng chứ không cảm tính.',
        'Hệ thống tự động lọc ra Top 5 ứng viên match nhất, kèm biểu đồ Radar so sánh năng lực để anh/chị đem đi present với Hiring Manager (Sếp).',
      ],
      tuduy: [
        'Xử lý bài toán lớn bằng phương pháp "Task breakdown" — Workflow đi trước, Prompt theo sau.',
        'Quy định chặt chẽ Input/Output cho từng step để tránh AI tự sáng tạo nội dung.',
        'Nắm vững nguyên tắc Anonymize (ẩn danh) PII theo Nghị định 13 để bảo vệ dữ liệu ứng viên.',
      ],
    },
    steps: [
      {
        title: '"Làm sạch" 30 CV mẫu — Ẩn PII (SĐT, CCCD, Tên, Ảnh)', xp: 30,
        desc: '🧽 Dùng AI quét qua, đổi "Nguyễn Văn A" thành "Ứng viên #1", che số điện thoại.\n\n💡 Ví dụ HR: Giống như khi anh em gửi danh sách đề xuất tăng lương cho Sếp mà phải ẩn tên để khách quan vậy.\n\n⚠ Theo Nghị định 13/2023, phải "bôi đen" PII TRƯỚC khi đẩy lên AI. Bám sát checklist dưới đây.',
        sampleType: 'instruction',
        samplePrompt: `📋 PII (Personal Identifiable Information) cần ANONYMIZE TRƯỚC khi xử lý bằng AI:

✅ BẮT BUỘC ẩn/xoá (Redact):
- Họ tên thật → Đổi thành "Ứng viên #1, #2, ..."
- Số điện thoại → Che 4 số cuối (vd: 0901234*** )
- Email → Giữ lại domain công ty/gmail, ẩn tên user (vd: ***@gmail.com)
- Số CCCD/CMND → Xoá sạch
- Ảnh chân dung → Xoá khỏi file PDF
- Link LinkedIn/Facebook cá nhân → Xoá
- Địa chỉ chi tiết → Chỉ giữ lại cấp Quận/Thành phố, xoá số nhà/tên đường

✅ ĐƯỢC PHÉP GIỮ (Phục vụ đánh giá):
- Năm sinh / Khoảng tuổi (vd: "26-30 tuổi")
- Giới tính
- Tên trường Đại học, năm tốt nghiệp
- Kinh nghiệm làm việc (có thể ẩn tên Cty cũ nếu nhạy cảm, giữ lại quy mô vd "Cty Bán lẻ ~500 nhân sự")
- Kỹ năng, ngoại ngữ, chứng chỉ (Certificates)

HƯỚNG DẪN THỰC HIỆN (Chọn 1 trong 2):
(a) DÙNG AGENT (Nhanh nhất) — Viết prompt cho Claude Code/Cursor:
"Hãy quét tất cả các file trong folder ./cvs/, thực hiện anonymize theo đúng checklist PII trên (giữ lại năm sinh, skills, xoá thông tin định danh). Output các file đã xử lý sang folder ./cvs-anon/ và giữ nguyên format gốc."

(b) LÀM THỦ CÔNG — Mở từng file Word/PDF và Find/Replace. Sẽ mất khoảng 90 phút cho 30 CV.

⚠ Nếu anh/chị chưa có sẵn data: Hãy dùng bộ data mẫu tại folder /sample-cvs/ (Gồm 30 CV giả lập của VN đã được anonymize sẵn).`,
      },
      {
        title: 'Xuất bản "Bảng điều khiển" chấm điểm', xp: 80,
        desc: '🎯 Dùng 1 câu lệnh, AI sẽ vừa trích xuất kinh nghiệm, vừa chấm điểm theo tiêu chí (vd văn hóa Vinamilk 8/10), vừa vẽ biểu đồ hình nhện. Đây là khoảnh khắc "Wow" của Buổi 2.',
        sampleType: 'prompt',
        samplePrompt: `Tôi đã chuẩn bị 30 CV (đã anonymized) trong folder ./cvs-anon/.
Vị trí tuyển dụng: [ĐIỀN VỊ TRÍ — vd: Sales Lead mảng Bán lẻ]
Tiêu chí đánh giá cốt lõi (5 tiêu chí):
1. [Vd: Tối thiểu 3 năm kinh nghiệm trong ngành Bán lẻ]
2. [Vd: Tiếng Anh giao tiếp tốt]
3. [Vd: Đã từng manage team từ 5 nhân sự trở lên]
4. [Vd: Chấp nhận đi công tác tỉnh 1-2 lần/tháng]
5. [Vd: Lương kỳ vọng (Expected Salary) ≤ 25M]

Hãy thực thi tuần tự theo 5 BƯỚC (Task breakdown) sau:
BƯỚC 1 (Extract): Đọc 30 CV và trích xuất các data point: {id, exp_years, key_skills[], salary_expect_M, languages[], management_yrs, location}
BƯỚC 2 (Scoring): Đối chiếu data của mỗi CV với 5 tiêu chí JD ở trên → Chấm điểm thang 0-10 cho từng tiêu chí, kèm theo 1 câu rationale (lý do chấm điểm).
BƯỚC 3 (Ranking): Tính Total Score = Trung bình cộng 5 tiêu chí → Sắp xếp Ranking từ cao xuống thấp.
BƯỚC 4 (Evidence): Lọc ra Top 5 ứng viên xuất sắc nhất → Trích xuất 2 quote (trích dẫn) nguyên gốc từ CV của họ để làm bằng chứng (evidence).
BƯỚC 5 (Visualize): Render ra 1 file dashboard.html (Code chung vào 1 file, dùng thư viện Chart.js qua CDN):
  - Hiển thị Bảng danh sách 30 ứng viên (Có chức năng sort/filter), highlight row của Top 5.
  - Khi click vào 1 hàng → Bật Modal popup hiển thị CV summary + Biểu đồ Radar Chart đánh giá 5 tiêu chí.
  - Tạo 1 Panel riêng cho Top 5, vẽ Radar chart so sánh năng lực của 5 người này.
  - Thiết kế UI Dark mode chuyên nghiệp.

Làm xong hãy mở file dashboard.html lên cho tôi xem kết quả.`,
      },
      {
        title: 'Chỉnh sửa theo ý thích — Iterate UI', xp: 30,
        desc: 'Thêm cột "Lương mong muốn", đổi layout cho đẹp hơn. Chỉ cần ra lệnh, AI tự sửa cả cấu trúc dữ liệu lẫn giao diện. Làm đến khi nào thấy ưng thì thôi.',
        sampleType: 'prompt',
        samplePrompt: `Cập nhật file dashboard.html theo các yêu cầu sau:
1. Thêm cột "Lương kỳ vọng (Triệu VNĐ)" vào bảng và cho phép sort (sắp xếp).
2. Bo góc tròn (border-radius) cho các avatar ở mỗi hàng (dù là ảnh placeholder).
3. Thêm Dropdown Filter: "Lọc theo khu vực: TP.HCM / Hà Nội / Tỉnh thành khác".
4. Ở phần Panel Top 5 — Đổi layout hiển thị từ danh sách dọc sang dạng Grid 5 cột ngang.

Cập nhật code xong nhớ refresh lại browser để tôi xem.`,
      },
      {
        title: 'Hoàn thiện "Cửa sổ chi tiết" ứng viên', xp: 40,
        desc: '🪟 Bấm vào tên ứng viên là hiện ra: Điểm mạnh (xanh) / Điểm yếu (đỏ).\n\n💡 Giải ngố: "Modal popup" chỉ là cái bảng hiện ra giữa màn hình khi mình bấm nút.',
        sampleType: 'prompt',
        samplePrompt: `Cải thiện UI/UX của Modal popup khi tôi click vào 1 ứng viên trong bảng:
1. Modal cần chia làm 4 section rõ ràng:
   - Header: Hiển thị ID ứng viên + Total Score + Biểu đồ Radar Chart cá nhân.
   - "Match" (Highlight xanh lá): Ghi 2-3 câu evidence chứng minh ứng viên rất phù hợp với JD.
   - "Miss" (Highlight cam/đỏ): Chỉ ra điểm yếu/gap lớn nhất của ứng viên, 1-2 câu ngắn gọn.
   - Footer: Thêm 3 nút Call-to-action giả lập UI: "📞 Gọi điện", "📧 Gửi Email", "📅 Set lịch PV".
2. Thêm hiệu ứng Animation (Slide-in từ mép phải màn hình), cho phép click ra ngoài vùng xám để đóng Modal.
3. Hỗ trợ bấm phím ESC trên bàn phím cũng đóng được Modal.

Sửa xong hãy refresh và tự động click mở thử 1 ứng viên trong Top 5 để tôi check UI.`,
      },
      {
        title: 'Báo cáo "Hiệu quả" Before/After + Transfer Plan', xp: 70,
        desc: '📊 So sánh: Trước khi dùng AI mất bao lâu? Giờ mất bao lâu? (Gợi ý: Thường là giảm từ 4 tiếng xuống 15 phút). Bước này tự viết, bám rubric để pass.',
        sampleType: 'rubric',
        samplePrompt: `📝 Cấu trúc bài tóm tắt Buổi 2:

PHẦN 1 — BẢNG ĐO LƯỜNG BEFORE/AFTER (Bắt buộc có số liệu cụ thể ở ≥ 3 hàng):
| Tiêu chí | Trước đây (Manual) | Hiện tại (Dùng AI Agent) | % Tối ưu / Tiết kiệm |
|---|---|---|---|
| Thời gian lọc 30 CV | __ phút | __ phút | __% |
| Tỷ lệ bỏ sót ứng viên tiềm năng | __% | __% | |
| [Tiêu chí khác tuỳ chọn] | __ | __ | |

PHẦN 2 — CÁCH ANH/CHỊ ÁP DỤNG TƯ DUY "TASK BREAKDOWN" (3-5 câu):
> Ở bài toán này, tôi đã chia quy trình làm ... bước. Input của bước 1 là X, Output là Y... Mục đích của việc chia nhỏ này là để ...

PHẦN 3 — 1 VƯỚNG MẮC CẦN HỖ TRỢ:
> ...

PHẦN 4 — TRANSFER PLAN (ỨNG DỤNG CHO NGHIỆP VỤ HR KHÁC) (3-5 câu):
- Bài toán HR anh/chị muốn áp dụng (KHÔNG lấy nghiệp vụ Tuyển dụng):
- Sẽ chia quy trình này thành mấy bước nhỏ, cụ thể từng bước:
- Outcome kỳ vọng:`,
        gradingCriteria: [
          'Phần 1: Bảng Before/After phải có định lượng số liệu rõ ràng. Các câu định tính như "Nhanh hơn nhiều", "Đỡ mệt hơn" sẽ bị fail.',
          'Phần 2: Giải thích được logic của ≥ 3 bước chia nhỏ kèm Input/Output.',
          'Phần 3: Phải có 1 câu hỏi cụ thể, thực tế.',
          'Phần 4: Chọn 1 nghiệp vụ khác (VD: Onboarding, Đánh giá KPI...) và chia được workflow ≥ 3 bước.',
        ],
      },
    ],
  },

  3: {
    week: 'TUẦN 3', duration: '90 phút',
    title: 'Đóng gói quy trình và nghệ thuật "Viết JD cho AI"',
    sub: 'Viết lệnh cho AI thực chất là viết Mô tả công việc (JD) cho một đứa nhân viên ảo. JD lôm côm thì nó làm bậy. Tuần này mình học cách "đóng gói" những câu lệnh hay nhất từ Buổi 1 & 2 thành một bộ thư viện dùng chung cho cả phòng HR. Chỉ cần share folder, đồng nghiệp gõ /screen-cv là AI tự chạy. Sếp hỏi "Phòng mình chuẩn hoá đến đâu?" — mở folder ra là xong.',
    principle: { num: 3, name: 'Tả việc cho rõ (Prompt Engineering)' },
    hints: [
      'Viết prompt cho AI bản chất y hệt như anh/chị viết bản Mô tả công việc (JD) & Hướng dẫn (Guideline) cho một nhân viên mới: Nếu guideline mập mờ, nhân viên sẽ tự "sáng tạo" và làm sai lệch ý đồ.',
      'Tiêu chuẩn của một prompt đóng gói tốt là: Bất kỳ ai trong team HR sử dụng đều cho ra một chuẩn kết quả (consistency) giống nhau.',
      'Nguyên tắc tách biệt: Tách phần "Kiến thức chuyên môn (Rubric, Brand voice)" ra khỏi phần "Quy trình thực thi (Commands)". Sau này muốn update tiêu chí chấm điểm, chỉ cần sửa file Rubric mà không sợ làm hỏng luồng quy trình chạy AI.',
    ],
    revealMsg: 'Tả việc cho máy rõ ràng chính là năng lực viết JD và SOP (Quy trình chuẩn) cho nhân viên ảo. Yêu cầu càng chi tiết, kết quả càng chuẩn xác. Ngược lại, để AI tự đoán mò thì anh/chị sẽ phải đi dọn dẹp hậu quả. Ở công sở, chúng ta cần hiệu quả, không cần AI "diễn xuất".',
    diligenceNote: '⚠ Cẩn trọng tuần này: Thư viện Skills Package của anh/chị khi đẩy lên GitHub sẽ chứa các bí mật kinh doanh như: Bộ tiêu chí chấm điểm CV (Rubric), Tone of voice thương hiệu, và có thể là dữ liệu ứng viên mẫu. Hãy đảm bảo Repository trên GitHub được set ở chế độ PRIVATE. Khi muốn share cho team, hãy dùng tính năng "Add Collaborators" thay vì để Public. Để lộ Rubric tuyển dụng cho đối thủ cạnh tranh là một rủi ro lớn.',
    layers: [
      { name: 'Là cái gì', text: 'Mỗi quy trình giao cho AI cần cấu trúc chuẩn 5 phần: Vai trò (Role), Các bước thực hiện (Steps), Tiêu chí đạt (Pass criteria), Các trường hợp ngoại lệ (Edge cases), và Ví dụ mẫu (Few-shot examples). Là dân HR, anh/chị đã quá quen với việc viết JD rồi — giờ chỉ là viết JD cho một "thực tập sinh" AI hoạt động 24/7 mà thôi.' },
      { name: 'Vì sao trúng', text: 'Khác với con người, AI không có khả năng "ngầm hiểu" văn hoá hay thói quen của anh/chị. Mọi thứ phải được text-hoá (văn bản hoá). Việc đóng gói prompt chuẩn mực giúp cố định chất lượng đầu ra, giảm thiểu tình trạng "ảo giác" (hallucination) của AI và giúp scale (nhân bản) quy trình ra toàn team một cách đồng bộ.' },
      { name: 'Khi nào đừng dùng', text: 'Với các task mang tính chất Brainstorming sáng tạo mở (VD: "Gợi ý cho tôi vài concept làm Team building cuối năm mới lạ") — anh/chị không nên đóng gói bằng prompt quá cứng nhắc. Việc ép khuôn quá chặt trong trường hợp này sẽ giết chết tính sáng tạo của AI. Hãy dùng kỹ năng này cho các tác vụ cần tính quy trình và tính lặp lại (Repetitive tasks).' },
    ],
    lanVoice: 'Tôi hiểu băn khoăn của anh/chị: "Sao phải đóng gói phức tạp, cứ lưu prompt vào file Word rồi copy-paste không nhanh hơn à?". Đúng là nhanh cho 1-2 lần đầu. Nhưng khi team anh/chị có 5 người, mỗi người copy-paste rồi tự "chế" thêm một tí, kết quả trả về sẽ loạn xì ngầu. Đóng gói quy trình (Skill Package) giúp anh/chị đồng bộ chất lượng cho toàn team. Sửa một chỗ ở file gốc, cả team đều được update. Đó mới là tư duy làm hệ thống.',
    outcomes: {
      cam: [
        'Một kho lưu trữ (Repository) riêng trên GitHub chứa toàn bộ quy trình đã chuẩn hoá, mang đậm dấu ấn và văn hoá của doanh nghiệp anh/chị.',
        'Hệ thống lệnh (Commands) gọn gàng, chia thư mục rõ ràng như một tủ hồ sơ số chuyên nghiệp.',
        'Khả năng bàn giao quy trình (handover) siêu tốc: Đồng nghiệp clone thư mục về máy, mất 5 phút setup là chạy được ngay rào rào.',
      ],
      tuduy: [
        'Nắm vững kiến trúc tách rời: "Skill" (Kiến thức/Tiêu chí nghiệp vụ - ít thay đổi) và "Command" (Lệnh thực thi/Quy trình - linh hoạt thay đổi).',
        'Một lần định nghĩa rõ ràng, cả phòng HR dùng chung một bộ não — tối ưu tính đồng bộ.',
      ],
    },
    steps: [
      {
        title: 'Tạo "Ngăn tủ" chứa Kỹ năng AI', xp: 30,
        desc: '📁 Sắp xếp các câu lệnh vào từng thư mục: Tuyển dụng / Đào tạo / Chính sách / Compliance. AI tự generate cấu trúc folder .claude/skills/ — anh em chỉ duyệt kiến trúc.',
        sampleType: 'prompt',
        samplePrompt: `Hãy tạo cho tôi một cấu trúc Skills Package chuẩn dành cho team HR Việt Nam:

📁 .claude/skills/
   ├── screen-cv/SKILL.md       (Bộ tiêu chí/Rubric chấm CV cho vị trí [ĐIỀN VỊ TRÍ — vd: HR Executive])
   ├── draft-jd/SKILL.md         (Template JD chuẩn theo format của cty SME Việt)
   ├── brand-voice/SKILL.md      (Tone of Voice của công ty + Các từ ngữ cấm dùng)
   ├── compliance/SKILL.md       (Checklist tuân thủ PII theo Nghị định 13/2023)

Yêu cầu cho mỗi file SKILL.md phải bao gồm các section:
- Mục đích sử dụng (Purpose)
- Khi nào kích hoạt (When to use)
- 5 Ví dụ mẫu (Few-shot Examples: Input -> Output)
- Tiêu chí đánh giá chất lượng (Pass criteria)

Tạo xong cấu trúc: Hãy in cây thư mục ra màn hình + show nội dung 3 file đầu tiên để tôi review.`,
      },
      {
        title: 'Dạy AI "Giọng điệu công ty"', xp: 50,
        desc: '🎙️ Dạy AI viết mail đúng phong cách công ty: thân thiện hay trang trọng? Có được dùng từ "Lương thoả thuận" không?\n\n💡 Ví dụ HR: Văn hóa FPT khác văn hóa Masan, AI cũng phải biết "nhập gia tùy tục".',
        sampleType: 'prompt',
        samplePrompt: `Hãy điền nội dung chi tiết cho file .claude/skills/brand-voice/SKILL.md, bám sát Brand guideline của công ty [TÊN CÔNG TY]:

- Tone of Voice: [Thân thiện, trẻ trung / Chuyên nghiệp, nghiêm túc / Trang trọng]
- 5 Từ vựng KHÔNG được phép sử dụng: [vd: "Lương thoả thuận" (phải có range), "Ứng viên nam/nữ" (tránh phân biệt), ...]
- Phúc lợi (Benefits) mặc định của công ty: [vd: Lương tháng 13 + BHXH full lương + Trợ cấp ăn trưa 50k/ngày + Review lương 2 lần/năm...]
- Cấu trúc JD bắt buộc: Gồm 6 phần cố định (Vị trí · Tóm tắt công việc · Mô tả chi tiết · Yêu cầu năng lực · Quyền lợi · Cách thức ứng tuyển)

Lưu ý: Content generate ra phải tự nhiên, mang đậm dấu ấn con người, KHÔNG được mang "mùi AI giọng robot".`,
      },
      {
        title: 'Tạo 5 "Phím tắt" quyền năng', xp: 60,
        desc: '⌨️ Thiết lập để chỉ cần gõ /cham-cv hay /soan-jd là AI tự hiểu + chạy đúng quy trình mình đã dạy. Lệnh chỉ "gọi" Skill ra chạy, KHÔNG copy logic Rubric vào — sau này sửa 1 chỗ là cả team update.',
        sampleType: 'prompt',
        samplePrompt: `Hãy tạo 5 file lệnh (Commands) lưu trong folder .claude/commands/:

1. /screen-cv → Trigger luồng đọc CV, chấm điểm đối chiếu với \`screen-cv/SKILL.md\`, output ra bảng xếp hạng Top 5.
2. /draft-jd → Nhận Input (Vị trí + Level), output ra bản JD hoàn chỉnh bám sát \`brand-voice/SKILL.md\`.
3. /interview-question → Sinh ra 10 câu hỏi phỏng vấn đánh giá năng lực (Competency-based).
4. /onboard-checklist → Tạo checklist Onboarding 30/60/90 ngày cho một nhân sự mới.
5. /policy-explain → Dịch/giải thích một quy chế nội bộ phức tạp thành ngôn ngữ dễ hiểu cho nhân viên.

RÀO CHẮN (CONSTRAINTS):
- Mỗi file command CHỈ chứa logic gọi tham chiếu (reference) đến skill tương ứng + truyền tham số.
- TUYỆT ĐỐI KHÔNG copy/paste logic của Rubric vào trong file Command.`,
      },
      {
        title: 'Kiểm tra độ "thấm" văn hóa', xp: 40,
        desc: '🧪 Thử bảo AI soạn JD cho một vị trí lạ hoắc (vd Bếp trưởng nhà hàng). Nếu nó vẫn viết đúng giọng điệu công ty mình → thành công. Nếu lệch tone → quay lại sửa brand-voice/SKILL.md.',
        sampleType: 'prompt',
        samplePrompt: `Bây giờ tôi muốn test độ ổn định (consistency) của thư viện Skills Package.
Hãy chạy lệnh /draft-jd để viết JD cho 3 vị trí hoàn toàn khác biệt nhau:

1. [Vị trí core của công ty — vd: HR Executive]
2. Vị trí hoàn toàn khác ngành — vd: Senior Backend Engineer
3. Vị trí đặc thù khác — vd: Bếp trưởng nhà hàng (Head Chef)

Sau khi generate xong, hãy so sánh 3 bản JD này:
- Brand voice (văn phong) có được giữ đồng nhất không?
- Các phần phúc lợi (benefits) mặc định có xuất hiện đầy đủ không?
Nếu vị trí 2 & 3 bị lệch tone → Hãy tự động quay lại file brand-voice/SKILL.md để tinh chỉnh rule cho chặt chẽ hơn.`,
      },
      {
        title: 'Cất vào "Tủ hồ sơ Online" + Handover đồng nghiệp', xp: 70,
        desc: '☁️ Đưa toàn bộ lên Kho lưu trữ bảo mật (GitHub) và mời đồng nghiệp dùng thử. Nhớ để PRIVATE — đừng để cả thế giới thấy "bí kíp" của mình. Đây là bước chứng minh "tính nhân bản" hệ thống.',
        sampleType: 'instruction',
        samplePrompt: `📋 PHẦN A — Đẩy (Push) source code lên GitHub:

1. Tại ô terminal của IDE, gõ lệnh: \`git init && git add . && git commit -m "Khởi tạo Skills Package v1 cho HR"\`
2. Truy cập [github.com/new](https://github.com/new) → Tạo Repository chế độ PRIVATE với tên "hr-skills-package-[tên-công-ty]"
3. Chạy tiếp lệnh: \`git remote add origin <url_cua_repo>\` → \`git push -u origin main\`

📋 PHẦN B — Handover & Lấy Feedback (Yêu cầu ≥1 đồng nghiệp HR tham gia):

1. Mời đồng nghiệp đó vào Repo (Settings → Collaborators).
2. Gửi cho họ: Link Repo + 1 đoạn video quay màn hình (Screencast) khoảng 5 phút hướng dẫn cách chạy lệnh \`/screen-cv\`.
3. Nhờ họ ghi nhận lại: Setup mất bao lâu? Quá trình gõ lệnh có bị lỗi kẹt ở đâu không? Kết quả trả về có đúng chuẩn văn phong công ty không?

Tạo một file FEEDBACK-[ten-dong-nghiep].md đính kèm vào Repo — đây là evidence (bằng chứng) bắt buộc để anh Lân chấm điểm.`,
      },
    ],
  },

  4: {
    week: 'TUẦN 4', duration: '90 phút · ⭐ MỐC HOÀN 5M',
    prereqWarning: '💰 Buổi này CÓ THỂ phát sinh chi phí Claude Code (ngoài học phí cohort 9.9M). 3 PATHS để chọn theo túi tiền:\n  • PATH A — Cloud Pro ($20/tháng ~ 480k/tháng): Có gói Pro của Claude, chạy Routine bằng cron job trên máy cá nhân. Phù hợp HR có laptop ở nhà bật 24/7.\n  • PATH B — Cloud Max ($100/tháng ~ 2.4M/tháng): Routines tự động chạy trên Cloud Anthropic, máy tắt vẫn chạy. Phù hợp HR có ngân sách rộng.\n  • PATH C — Bridge Lan host miễn phí (RECOMMENDED): Dùng bridge của anh Lân chạy sẵn trên server cohort. Anh/chị KHÔNG cần Pro/Max riêng, KHÔNG cần máy 24/7. Anh Lân add anh/chị vào bridge khi onboard cohort.\n\n⚠ Bắt buộc thực hiện 1 trong 3 paths để pass mốc hoàn 5 triệu — anh/chị có thể đổi path bất cứ lúc nào.',
    title: 'Tự động hóa và quyền năng "Hẹn giờ chạy"',
    sub: 'Đỉnh cao là đây: Anh em đang ngủ, AI vẫn làm. 6h sáng nó tự quét CV mới, chấm điểm, rồi nhắn tin báo cáo vào Telegram trước khi anh em ngủ dậy.',
    principle: { num: 4, name: 'Tự kích hoạt (Triggers)' },
    hints: [
      'Từ Buổi 1 đến 3, anh/chị là người "chủ động" ra lệnh. Ở tuần này, hệ thống sẽ "tự động" kích hoạt (Triggers).',
      'Có nhiều cách để đặt Trigger: Kích hoạt theo khung giờ cố định (vd: 6h sáng), Kích hoạt khi có file mới được thả vào folder, hoặc Kích hoạt bằng Webhook từ hệ thống khác.',
      '⚠ Nguyên tắc tối thượng: Automation thì phải có Guardrails (Rào chắn an toàn). Để AI chạy tự động mà không có cơ chế chặn lỗi thì rủi ro cực kỳ khủng khiếp.',
    ],
    revealMsg: 'Thiết lập cho AI chạy tự động dựa trên các Trigger (Thời gian, Event, Webhook). Anh/chị không cần online túc trực. Tư duy này chính thức biến anh/chị thành một người quản lý hệ thống, giải phóng sức lao động 24/7.',
    diligenceNote: '⚠ Lưu ý sống còn tuần này: Nếu anh/chị chạy Routine trên cloud của Anthropic, dữ liệu CV có thể bị giữ lại tối đa 30 ngày để phục vụ audit. BẮT BUỘC vào Settings → Privacy và check chọn "Zero data retention" TRƯỚC KHI cho hệ thống chạy data thật. Nếu chính sách bảo mật nội bộ công ty gắt gao không cho phép data rời khỏi VN → Bắt buộc chọn Path (b) chạy local cron job ở Bước 1, không được cố đấm ăn xôi đẩy lên Cloud.',
    layers: [
      { name: 'Là cái gì', text: 'Routines (Lịch trình) là cơ chế thiết lập để AI tự động chạy các tác vụ trên server Cloud theo một lịch trình cố định, hoặc khi nhận được tín hiệu (event). Anh/chị có thể tắt laptop đi ngủ, nhưng tiến trình công việc thì vẫn tiếp diễn.' },
      { name: 'Vì sao trúng', text: 'Các nhà cung cấp như Anthropic cho phép AI chạy ngầm trên mây và tính phí theo thời lượng thực thi — chỉ tốn cỡ 20 cents/tháng cho một routine chạy 5 phút/ngày. Anh/chị hoàn toàn không phải đau đầu cấu hình server rườm rà. Chỉ cần setup prompt chuẩn và bấm nút "Activate".' },
      { name: 'Khi nào đừng dùng', text: 'Đừng lạm dụng tạo Routine cho những việc chỉ làm mang tính "Ad-hoc" (phát sinh 1 lần). Ví dụ: "Chấm điểm 1 tập CV của đợt tuyển dụng đặc biệt này". Những task kiểu đó thì cứ chạy thủ công cho nhanh. Routine chỉ phát huy tác dụng cho các tác vụ mang tính Repetitive (lặp đi lặp lại hàng ngày/tuần).' },
    ],
    lanVoice: 'Nhiều HR thắc mắc: "Mình đẩy CV ứng viên lên cloud Anthropic/OpenAI có bị lấy data đem đi train không?". Lo này chính đáng. Cách triệt để: vào Settings → bật "Zero data retention" — AI xử xong xoá data ngay. Tuần 9 mình đào sâu compliance.\n\n💬 HỎI ĐÁP NHANH:\nQ: "Nếu máy em mất mạng thì AI có nghỉ việc không?"\nA: Nếu dùng Cách C của anh thì mạng nhà em mất nó vẫn làm. Nó chạy trên server của lớp mình mà.\n\nQ: "Sếp thấy em nhàn quá lại giao thêm việc thì sao?"\nA: Đấy là lý do anh bảo phải "giấu". Hãy dành thời gian nhàn đó để đi cafe, suy nghĩ chiến lược, hoặc đơn giản là về sớm với con.',
    outcomes: {
      cam: [
        'Một Routine Automation tự động chạy chuẩn xác trong 7 ngày liên tiếp — kèm hệ thống Log file (nhật ký) đối soát rõ ràng.',
        'Bảng báo cáo ROI (Tối ưu hóa) Before/After đo lường bằng ≥ 3 chỉ số cụ thể (Số giờ tiết kiệm/tuần, Tỷ lệ chính xác, SLA xử lý CV).',
        'Repository GitHub trang bị đủ 5 tầng Guardrails (Rào chắn an toàn) — hệ thống phanh khẩn cấp để chống rủi ro.',
      ],
      tuduy: [
        'Nắm vững 3 cơ chế Triggers cơ bản: Hẹn giờ (Schedule), Nhận tín hiệu ngoại vi (Webhook), Sự kiện thay đổi file (Event-based).',
        'Hiểu được ranh giới khi nào nên chạy Local (máy cá nhân) và khi nào cần đẩy lên Cloud.',
        'Tinh thần "Safety first": Không có Guardrails = Tuyệt đối không bật Automation.',
      ],
    },
    steps: [
      {
        title: 'Cài đặt "Lẫy kích hoạt" — chọn 1 trong 3 cách', xp: 30,
        desc: '🎯 Chọn 1 trong 3 cách. Anh em cứ chọn Cách C cho nhẹ đầu và đỡ tốn tiền.\n\n💡 Giải ngố: "Trigger" là cái lẫy — cứ đến giờ hoặc có file mới là nó "bắn" lệnh cho AI chạy.',
        sampleType: 'instruction',
        samplePrompt: `📋 CHỌN 1 TRONG 3 PATHS:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅰 PATH A — CLAUDE PRO $20/THÁNG (~480K/THÁNG)
   Cần: Có gói Pro của Anthropic + máy cá nhân bật 24/7 lúc 6h sáng
   1. Mở Terminal (Mac/Linux) hoặc PowerShell (Windows)
   2. Mac/Linux: gõ \`crontab -e\` rồi thêm dòng:
      \`0 6 * * * cd ~/hr-builder-lan-1 && claude run prompt-routine.md > log-\$(date +%Y%m%d).txt\`
   3. Windows: dùng Task Scheduler → Create Task → Daily 6:00 AM → Action: Run \`claude run prompt-routine.md\`
   4. Save + verify: Mac \`crontab -l\` / Win xem trong Task Scheduler list
   ⚠ Máy tắt 6h sáng = cron miss = mất chuỗi 7 ngày
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅱 PATH B — CLAUDE MAX $100/THÁNG (~2.4M/THÁNG)
   Cần: Có gói Max — máy tắt vẫn chạy được vì cloud Anthropic host
   1. Truy cập claude.ai/code → Tab "Routines" (Icon bánh răng)
   2. Bấm + New Routine → Đặt tên: "Daily HR Briefing 6AM"
   3. Set Trigger: Schedule → 06:00 daily (Timezone: Asia/Ho_Chi_Minh)
   4. Bấm Save (chưa Activate vội)
   ✅ Tiện lợi nhất, đắt tiền nhất
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅲 PATH C — BRIDGE COHORT (MIỄN PHÍ, ĐỀ XUẤT) ⭐
   Cần: KHÔNG cần Pro/Max, KHÔNG cần máy 24/7. Anh Lân host bridge sẵn.
   1. Đăng nhập vào dashboard cohort của anh/chị
   2. Vào "Cài đặt → Routines (Cohort Bridge)" → Add new routine
   3. Đặt tên + chọn schedule "06:00 daily" → Save
   4. Bridge sẽ chạy sẵn, anh/chị KHÔNG cần làm gì thêm
   ⚠ Lưu ý: cohort bridge giới hạn 5 routines/người, đủ cho học hết 10 tuần
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bất kể chọn Path nào, anh/chị đều phải làm Bước 2 (Viết prompt routine + Thiết lập guardrails).

🆘 Nếu vướng setup → nhắn nhóm Zalo cohort hoặc anh Lan hỗ trợ 1-1.`,
      },
      {
        title: 'Soạn kịch bản "Sáng sớm" + 5 Rào chắn', xp: 70,
        desc: '📝 Viết lệnh: 6h sáng quét CV → Ẩn thông tin → Chấm điểm → Nhắn Telegram.\n\n🛡️ Quan trọng — 5 RÀO CHẮN (Guardrails) BẮT BUỘC: nếu chi phí vượt 10k VNĐ/lần hoặc AI không chắc chắn → phải dừng lại báo ngay. Không có rào chắn = không bật automation.',
        sampleType: 'prompt',
        samplePrompt: `📋 Hãy tạo file \`prompt-routine.md\` trong repo với nội dung sau:

---
ROUTINE NAME: Daily HR Briefing 06:00

CONTEXT: Tôi là [VAI TRÒ HR] làm việc tại [CÔNG TY]. Phụ trách mảng [MẢNG]. Mỗi buổi sáng, tôi cần 1 bản brief tóm tắt về CV ứng viên mới + Lịch trình làm việc trong ngày.

8 BƯỚC THỰC THI CHO AGENT:
1. Quét folder \`./cvs-incoming/\` → Lọc ra danh sách CV mới nhận (timestamp > 24h trước).
2. Thực hiện ẩn danh (Anonymize) PII theo Nghị định 13 (Dùng checklist từ Buổi 2).
3. Chấm điểm các CV này dựa trên bộ tiêu chí chuẩn của cty (Đọc file \`./brand/rubric.md\`).
4. Lọc Top 3 CV xuất sắc nhất → Trích dẫn (quote) bằng chứng năng lực.
5. Truy cập Google Calendar → Lấy danh sách lịch họp/phỏng vấn trong ngày hôm nay.
6. Tổng hợp tất cả thành 1 bản tin Brief định dạng Markdown: {top_cv, today_schedule, action_items}.
7. Bắn bản tin Brief này về Telegram thông qua chat_id: [PASTE CHAT_ID CỦA BẠN].
8. Ghi log toàn bộ tiến trình vào folder \`./logs/YYYY-MM-DD.md\`.

5 GUARDRAILS BẮT BUỘC (TUYỆT ĐỐI KHÔNG BỎ QUA BƯỚC NÀY):
1. Chặn rò rỉ PII: KHÔNG gửi data chưa được anonymize ra môi trường ngoài → Trigger check trước mỗi call API.
2. Timeout bảo vệ: Giới hạn xử lý cứng 5 phút/CV → Chống lỗi lặp vô hạn (Infinite loop).
3. Quản lý chi phí (Cost cap): Limit $0.50/lần chạy → Tự động dừng routine nếu vượt ngưỡng.
4. Xử lý logic yếu: Nếu AI chấm điểm với độ tự tin (confidence) < 70% → KHÔNG tự quyết định, bắn alert về Telegram "Cần Human-in-loop (HR) review".
5. Tracking: Mọi lần chạy đều phải ghi file log chi tiết vào \`./logs/\` — Không được chết im lặng (Silent fail).

THAM KHẢO OUTPUT MẪU TẠI: \`./samples/brief-example.md\`.
---

Sau khi lưu file, hãy test thử bằng cách gõ prompt này cho Claude Code:
"Đọc file prompt-routine.md, hãy validate giúp tôi xem 8 bước thực thi và 5 guardrails đã đầy đủ, chặt chẽ và khả thi chưa. Báo cáo nếu thiếu sót."`,
      },
      {
        title: 'Chạy thử và nhận tin nhắn Telegram', xp: 40,
        desc: '🧪 Thả thử 3 cái CV vào thư mục. Ngồi đợi 2-5 phút xem Telegram có nổ tin nhắn tóm tắt không. Đây là Dry-run trước khi bật Activate chính thức.',
        sampleType: 'instruction',
        samplePrompt: `1. Chuẩn bị data: Đảm bảo có sẵn ≥ 3 file CV trong folder \`./cvs-incoming/\` (Lấy CV mẫu từ Buổi 2 để test).
2. Nếu dùng Path A (Max): Vào mục Routines → Chọn routine vừa tạo → Bấm nút "Run now".
3. Nếu dùng Path B (Pro): Mở Terminal gõ lệnh thủ công \`claude run prompt-routine.md\`.
4. Đợi khoảng 2-5 phút (Thời gian AI call API qua 8 bước mất cỡ 30-60s/CV).
5. Mở điện thoại check Telegram → Bot phải nhắn trả về bản brief chuẩn format Markdown.
6. Kiểm tra local folder \`./logs/\` → Có file log mới được tạo với timestamp chính xác không?

⚠ Troubleshooting (Gỡ lỗi nếu fail):
- Telegram im lìm → Check lại BOT_TOKEN và CHAT_ID xem cấu hình đúng chưa (Tham khảo lại bài Buổi 1).
- Bản brief gửi về bị trống nội dung → Check lại bước Anonymize (có thể AI xoá nhầm cả data chuyên môn thay vì chỉ xoá PII).
- Cảnh báo vượt Cost cap → Kiểm tra Guardrail số 3 + Giảm bớt số lượng CV nạp vào trong 1 batch.`,
      },
      {
        title: 'Vận hành "Ẩn mình" trong 7 ngày', xp: 80,
        desc: '🌙 Để hệ thống tự chạy liên tục 1 tuần. Mỗi sáng chỉ cần check tin nhắn xem con AI "trợ lý" báo cáo gì.\n\n💰 Điều kiện hoàn 5M: chạy ổn định ít nhất 5/7 ngày.',
        sampleType: 'instruction',
        samplePrompt: `1. Path A (Max): Gạt nút toggle sang trạng thái "Active" (Màu xanh) trên trình quản lý Routines.
2. Path B (Pro): Verify lại job cron bằng lệnh \`crontab -l\` đảm bảo đang kích hoạt.

Việc cần làm mỗi sáng trong 7 ngày tới:
- Khoảng 06:00-06:05, check Telegram xem có nhận được Brief không.
- Mở thư mục \`./logs/\` để kiểm tra file log sinh ra trong ngày.
- Đánh dấu vào bảng Tracking:
  □ Day 1 (YYYY-MM-DD): Brief OK / Failed
  □ Day 2: ...
  □ Day 3: ...
  □ Day 4: ...
  □ Day 5: ...
  □ Day 6: ...
  □ Day 7: ...

⚠ NGUYÊN TẮC: Ngày nào hệ thống Failed (không có brief/không có log) → ghi rõ nguyên nhân (máy tắt, wifi rớt, Anthropic API down, đi công tác…) + fix nếu có thể. Anh Lân hiểu lý do thực tế, không khắt khe ngày-nào-cũng-phải-có nếu không phải lỗi học viên.

Tiêu chí pass mốc:
- ✅ 5/7+ ngày có Brief + Log → PASS, hoàn 5M
- 🟡 3-4/7 ngày → BORDERLINE — anh Lân review evidence + lý do, đa số vẫn pass nếu nguyên nhân hợp lý
- ❌ Dưới 3/7 ngày + không lý do → FAIL mốc`,
      },
      {
        title: 'Báo cáo "Đổi đời" — Nộp bài duyệt mốc hoàn 5M', xp: 60,
        desc: '🎉 Nộp bảng so sánh cuối cùng. Anh em sẽ thấy mình nhàn hơn bao nhiêu. Pass bước này là anh Lân tinh tinh hoàn 5M ngay và luôn.\n\n💡 KHÔNG ép phải ra số ảo "tiết kiệm 5h/tuần" — quan trọng là biết cách đo lường thực tế + đủ evidence (Log files).',
        sampleType: 'rubric',
        samplePrompt: `📝 Bảng báo cáo Before/After Buổi 4 — Copy và điền vào textarea bên dưới:

PHẦN 1 — 3 CHỈ SỐ ĐO LƯỜNG CỐT LÕI (Bắt buộc phải có đủ 3):

| # | Chỉ số đo lường (Metric) | Trước đây (Manual) | Hiện tại (Routine) | Link Bằng chứng (Evidence) |
|---|---|---|---|---|
| 1 | Thời gian xử lý & sàng lọc CV/tuần | __ giờ | __ giờ | [Gắn link thư mục logs] |
| 2 | Khối lượng CV xử lý/tuần | __ CV | __ CV | [Gắn link thư mục logs] |
| 3 | Tỷ lệ chính xác (Accuracy: Số CV qua vòng PV / Tổng số gửi đi) | __% | __% | [Gắn link feedback từ Hiring Manager] |

PHẦN 2 — BẰNG CHỨNG VẬN HÀNH (Đính kèm Links):
- Link folder chứa 7 file Logs: [...]
- Link Drive chứa 7 ảnh chụp màn hình tin nhắn Telegram: [...]
- Link tới file cấu hình \`prompt-routine.md\` trên GitHub: [...]

PHẦN 3 — BÁO CÁO KÍCH HOẠT GUARDRAILS TRONG TUẦN (Thống kê số lần):
- Guardrail 1 (Chặn rò rỉ PII): Cảnh báo __ lần
- Guardrail 2 (Ngắt Timeout): Kích hoạt __ lần
- Guardrail 3 (Chặn Cost cap): Kích hoạt __ lần
- Guardrail 4 (Escalate do Confidence thấp): Kích hoạt __ lần
- Guardrail 5 (Tracking Logs): Hoạt động __ lần

⚠ TIÊU CHÍ DUYỆT MỐC HOÀN 5 TRIỆU:
- PASS = Điền đủ bảng số liệu 3/3 metrics + Đủ bằng chứng 7/7 ngày Logs + 5 Guardrails thiết lập chuẩn.
- Đánh giá dựa trên tư duy thiết lập đo lường, không ép buộc phải đạt số ảo "siêu tiết kiệm".
- Anh Lân sẽ trực tiếp audit các evidence này trong vòng 48h để chốt kết quả Pass/Fail/Borderline.`,
        gradingCriteria: [
          'Phần 1: Bảng số liệu bắt buộc điền con số thực tế, từ chối các cụm từ cảm tính ("nhanh hơn nhiều"). Cột Evidence bắt buộc phải có link.',
          'Phần 2: Cung cấp đầy đủ evidence của 7 ngày vận hành (Link folder hoặc paste thẳng 7 timestamps).',
          'Phần 3: Report minh bạch số lần các Guardrails được kích hoạt (Điền "0 lần" vẫn hợp lệ, miễn là hệ thống có tracking).',
        ],
      },
    ],
  },

  5: {
    week: 'TUẦN 5', duration: '90 phút',
    title: 'Tích hợp hệ thống và sức mạnh "Cấp quyền công cụ" (MCP)',
    sub: 'Bốn tuần vừa qua, chúng ta mới chỉ huấn luyện cho AI cái "não" để phân tích dữ liệu. Sang tuần này, chúng ta sẽ "lắp tay lắp chân" cho nó bằng cách tích hợp trực tiếp vào các hệ thống: Google Drive, Gmail, Zalo OA, và HRIS (Phần mềm quản lý nhân sự). Nó giống như anh/chị vừa tuyển được một trợ lý admin siêu việt — không chỉ ngồi tư vấn mà còn tự động xách giỏ đi gửi mail, nhắn tin, update file. Ứng viên sẽ phải "mắt chữ O, miệng chữ A" trước tốc độ phản hồi chuyên nghiệp của công ty anh/chị.',
    principle: { num: 5, name: 'Đưa công cụ (Tích hợp MCP)' },
    prereqWarning: '⚠ Buổi này dùng MCP (Model Context Protocol) — chuẩn mở. Tool nào cũng làm được: Claude Code Pro ($20) / Claude Code free tier / Cursor / VSCode + Cline (free, dùng API key Anthropic/OpenAI/Gemini đều OK). Anh/chị giữ nguyên tool đang dùng từ Buổi 1, không cần nâng cấp gì thêm cho buổi này.',
    hints: [
      'Bốn tuần đầu AI chỉ đóng vai trò phân tích nội bộ (Internal analysis).',
      'Tuần này AI chính thức trở thành Agent thực thi (Action-taker) — có khả năng kết nối đa nền tảng: Đọc Drive, Soạn Gmail, Rep Zalo, Update file Excel/HRIS.',
      'Việc kết nối hệ thống (Integration) giờ đây đơn giản như việc bấm "Allow notification" trên điện thoại. Không cần kiến thức code API phức tạp.',
    ],
    revealMsg: 'Khi anh/chị cấp quyền cho AI tương tác trực tiếp với các hệ thống thật, nó đã vượt ra khỏi khái niệm "Chatbot" thông thường để trở thành một "Đồng nghiệp ảo" có năng lực hành động. Và ưu điểm lớn nhất của đồng nghiệp này là: Không bao giờ xin nghỉ ốm hay phàn nàn về khối lượng công việc.',
    diligenceNote: '⚠ Lưu ý sống còn về Bảo mật tuần này: Việc kết nối Drive/Gmail/Zalo/HRIS thông qua MCP đồng nghĩa với việc anh/chị đang giao "chìa khoá nhà" cho AI. Tuyệt đối KHÔNG BAO GIỜ cấp quyền "Full access" (Toàn quyền). Mỗi kết nối (Connector) phải được phân quyền ở giới hạn (Scope) hẹp nhất có thể. Ví dụ: Drive chỉ cho phép đọc đúng folder "cv-incoming/", Gmail chỉ được thao tác ở label "recruitment". Chặn scope chặt chẽ để lỡ AI bị hallucinate (ảo giác), nó cũng không thể quét trúng thư mục Bảng lương (Payroll) của phòng Kế toán.',
    layers: [
      { name: 'Là cái gì', text: 'MCP (Model Context Protocol) là một giao thức chuẩn hoá giúp các AI Agent có thể giao tiếp và thao tác trên các nền tảng khác (Google Workspace, Notion, Slack, Zalo...) chỉ bằng vài cú click cấu hình. Điều mà năm 2024 anh/chị phải thuê 1 team Dev làm mất cả tuần, thì nay dân HR có thể tự setup trong 5 phút.' },
      { name: 'Vì sao trúng', text: 'Một trợ lý AI chỉ ngồi "tán gẫu" thì không tạo ra business value. Giống như nhân sự công sở chỉ rành lý thuyết mà không biết bắt tay vào làm việc. Khi được trang bị MCP, AI sẽ tự động đi lấy data, xử lý, soạn email phản hồi, và update trạng thái ứng viên lên phần mềm. Nó thay thế hoàn toàn các tác vụ admin nhàm chán tốn thời gian.' },
      { name: 'Khi nào đừng dùng', text: 'Nguyên tắc "Less is More": Đừng nổi hứng kết nối một lúc 20 cái hệ thống. Hãy bắt đầu thật chậm. Mỗi kết nối phải chứng minh được Business case (lý do) rõ ràng — VD "Tôi cần nó tự động đọc CV mới vào". Tuyệt đối không giao "chùm chìa khoá vạn năng" (Full admin role) cho AI. Lỗi bảo mật do phân quyền sai sẽ dẫn đến thảm hoạ rò rỉ dữ liệu (Data breach).' },
    ],
    lanVoice: 'Tôi biết rào cản lớn nhất của các anh/chị lúc này là: "Sếp IT không đời nào chịu cấp quyền Zalo OA hay HRIS cho một con AI bên ngoài chọc vào". Rất hiểu tâm lý này. Lời khuyên của tôi: Hãy chạy Pilot (thử nghiệm) ở scope siêu nhỏ — chọn ra đúng 5 ứng viên làm sample. Sau 1 tuần, anh/chị đo lường và chìa báo cáo ra: "Trợ lý AI này đã giúp team giảm 60% thời lượng phải trả lời các câu hỏi lặp đi lặp lại của ứng viên". Nói chuyện bằng con số tối ưu chi phí, sếp nào cũng sẽ gật đầu. Ở văn hoá doanh nghiệp Việt Nam, cứ phải có "demo ra số" thì mới dễ xin cơ chế.',
    outcomes: {
      cam: [
        '4 cổng kết nối (Connectors) hiển thị đèn xanh: Google Drive, Gmail, Zalo OA, Google Sheets (HRIS).',
        '5 Landing page (Microsite) được tạo tự động để chào mừng Top 5 ứng viên, nội dung được cá nhân hoá 100%, mỗi người 1 đường link riêng biệt.',
        'Bot Zalo OA thông minh: Tự động trả lời mượt mà 3 câu hỏi thường gặp nhất (FAQ) của ứng viên, giảm thiểu thời gian HR phải check tin nhắn lẻ tẻ.',
      ],
      tuduy: [
        'Nắm vững nguyên tắc phân quyền (Scoping): Chưa hiểu rõ scope của hệ thống nào thì tuyệt đối chưa kết nối.',
        'Thiết lập cơ chế Audit định kỳ: Hàng tuần phải check log xem AI đã dùng những kết nối nào, tần suất bao nhiêu, có gì bất thường không.',
        'Bắt đầu nhỏ, scale từ từ. Giải quyết trọn vẹn 1 bài toán hẵng nghĩ đến việc tích hợp các hệ thống khác.',
      ],
    },
    steps: [
      {
        title: 'Thiết lập cấu hình 4 Connectors (Drive/Gmail/Zalo/HRIS)', xp: 50,
        desc: 'Truy cập Settings → MCP → Add. Hoàn tất xác thực để 4 connector báo trạng thái "Connected" (Sáng đèn xanh).',
        sampleType: 'instruction',
        samplePrompt: `📋 Hướng dẫn Setup 4 Cổng kết nối MCP:

BƯỚC 1 — Truy cập: Settings → Code Preferences → Tab "MCP"
1. Bấm nút "Add MCP"
2. Khai báo 4 connector: GoogleDrive, Gmail, Zalo, HRIS (Google Sheets)
3. Xác thực quyền (OAuth): Đăng nhập tài khoản Google + Quyền Admin Zalo OA.

BƯỚC 2 — Phân quyền Scope chặt chẽ (TUYỆT ĐỐI KHÔNG CẤP "FULL ACCESS"):
- Trình quản lý Drive: Chỉ cấp quyền READ-ONLY (Chỉ đọc) đối với thư mục "cv-incoming/".
- Gmail: Chỉ cấp quyền READ đối với nhãn (label) "recruitment@" (Dùng làm thư mục nháp Outbox).
- Zalo OA: Chỉ cấp quyền Write-only (Chỉ gửi tin nhắn) cho bot "bot-candidate".
- HRIS (Google Sheets): Chỉ cấp quyền Read cho Sheet "recruitment_pipeline".

BƯỚC 3 — Test kết nối: Gõ prompt cho Agent:
"Hãy kết nối vào thư mục Drive 'cv-incoming/', lấy ngẫu nhiên 5 file CV mới nhất và xuất ra danh sách Tên + Số năm kinh nghiệm."
Nếu AI trả về đúng data → Cấu hình MCP thành công.

⚠ Nhắc lại: Giới hạn Scope cực kỳ quan trọng để bảo vệ dữ liệu nội bộ.`,
      },
      {
        title: 'Dùng 1 Prompt tạo hàng loạt Microsite & Email cá nhân hoá', xp: 80,
        desc: 'Ứng dụng để tự động hoá quy trình Invite phỏng vấn. Mỗi ứng viên có 1 URL riêng, lời nhắn được cá nhân hoá dựa trên skill của họ, tích hợp sẵn module đặt lịch. Đây là điểm chạm (touchpoint) cực kỳ ghi điểm với ứng viên.',
        sampleType: 'prompt',
        samplePrompt: `Tôi có danh sách Top 5 ứng viên xuất sắc nhất đang lưu trong folder Drive "cv-top5/". Tôi cần bạn thực hiện chuỗi tác vụ sau:

1. Tạo tự động 5 trang Microsite HTML — mỗi ứng viên sẽ có 1 trang với URL độc lập.
2. Tích hợp module Đặt lịch phỏng vấn (Nhúng link Calendly hoặc tạo 1 form HTML đơn giản) vào từng Microsite.
3. Soạn sẵn 5 bản nháp Email (Draft) để gửi cho từng ứng viên. Nội dung Email phải được cá nhân hoá (Personalized) cao độ: Gọi đúng tên, khen ngợi 1 skill nổi bật nhất trong CV của họ, và điều hướng họ click vào link Microsite để đặt lịch.

RÀO CHẮN AN TOÀN (CONSTRAINTS):
- URL của Microsite BẮT BUỘC dùng mã số ẩn danh (Slug) — vd: \`/candidate-001/\`. Tuyệt đối KHÔNG dùng tên thật của ứng viên trên URL (Để tuân thủ NĐ13 PII).
- Tone of Voice của Email: Chuyên nghiệp, ấm áp, tránh cảm giác "Văn mẫu copy-paste".
- UI Microsite: Phối màu theo Brand guideline [ĐIỀN MÃ MÀU THƯƠNG HIỆU CTY BẠN].

LUỒNG THỰC THI (ACTION):
1. Code & lưu 5 file HTML Microsite vào folder: \`./microsites/candidate-{id}.html\`
2. Lưu 5 bản nháp Email vào folder: \`./emails/candidate-{id}.txt\`
3. Tổng hợp danh sách 5 URLs ra màn hình để tôi review.

Làm xong, hãy mở file \`./microsites/candidate-001.html\` lên browser để tôi xem thử giao diện.`,
      },
      {
        title: 'Cấu hình Bot Zalo OA trả lời tự động', xp: 60,
        desc: 'Huấn luyện Bot Zalo OA xử lý các câu hỏi phổ thông (FAQ). Bot phải biết giới hạn kiến thức của nó, nếu gặp câu hỏi hóc búa phải tự động chuyển ngữ cảnh (Escalate) cho nhân sự HR thật.',
        sampleType: 'prompt',
        samplePrompt: `Hãy thiết lập logic cho Bot Zalo OA "bot-candidate" chuyên phụ trách mảng Tuyển dụng, xử lý 3 luồng câu hỏi cơ bản:

SYSTEM PROMPT CHO BOT:
Bạn đóng vai trò là Trợ lý Ảo Zalo OA của công ty, hỗ trợ ứng viên ứng tuyển vị trí [ĐIỀN VỊ TRÍ — vd: Sales Lead].

BỘ QUY TẮC PHẢN HỒI (RULESET):
1. Nếu ứng viên hỏi về "Lương/Thu nhập" → Phản hồi: "Mức lương cơ bản cho vị trí này là [ĐIỀN RANGE LƯƠNG] + thưởng KPI/Hoa hồng hấp dẫn theo năng lực."
2. Nếu ứng viên hỏi "Địa chỉ làm việc/Văn phòng" → Phản hồi: "[ĐIỀN ĐỊA CHỈ CHI TIẾT] + Kèm link bản đồ Google Maps."
3. Nếu ứng viên hỏi "Hạn chót nộp CV (Deadline)?" → Phản hồi: "Hạn chót là ngày [ĐIỀN NGÀY] + Kèm link Form ứng tuyển."
4. CƠ CHẾ CHUYỂN TIẾP (ESCALATION): Gặp các câu hỏi phức tạp về chính sách chuyên sâu → Bot tự động trả lời: "Câu hỏi này vượt quá phạm vi hỗ trợ của em. Em xin phép chuyển thông tin đến bộ phận HR (Anh/Chị [ĐIỀN TÊN HR]). Anh/chị sẽ nhận được phản hồi chi tiết trong vòng 24h tới ạ."

CƠ CHẾ TRACKING (LOG):
Mỗi tương tác tin nhắn → Tự động append (ghi nối) vào file \`./zalo-logs.txt\` theo cấu trúc: {Timestamp, Candidate_ID, Message_ứng_viên, Agent_Response}

TEST RUN: Tôi sẽ đóng vai 3 ứng viên gửi 3 tin nhắn mẫu vào hệ thống, hãy verify xem Bot có trigger đúng các ruleset trên không.`,
      },
      {
        title: 'Tự động hoá luồng cập nhật HRIS (Google Sheets)', xp: 50,
        desc: 'Tự động hoá việc ghi nhận trạng thái (Status tracking) của ứng viên vào file quản lý. Sếp hỏi "Tình hình Data đợt này đến đâu rồi?", anh/chị luôn có bảng Dashboard realtime để show.',
        sampleType: 'prompt',
        samplePrompt: `Thiết lập luồng tự động cập nhật Activity Log vào hệ thống HRIS (Sử dụng Google Sheets):

CẤU TRÚC BẢNG (SCHEMA) HRIS:
| Mã Ứng viên | Vòng PV | Trạng thái | Thời gian cập nhật | Thao tác hệ thống | Ghi chú |
|---|---|---|---|---|---|
| Candidate #001 | 1 | Sàng lọc hồ sơ | 2024-01-15 09:30 | email_sent | Đã gửi link Microsite + Calendly |
| ... | ... | ... | ... | ... | ... |

LOGIC TỰ ĐỘNG HOÁ (AUTOMATION):
1. Ngay khi Agent gửi xong nháp Email (Microsite) → Tự động ghi log thao tác: "email_sent + timestamp".
2. Ngay khi Bot Zalo trả lời ứng viên → Tự động ghi log thao tác: "zalo_contacted + timestamp".
3. Khi hệ thống nhận tín hiệu ứng viên Submit form đặt lịch → Tự động ghi log thao tác: "form_submitted + timestamp".

Mỗi khi Agent hoàn thành 1 action, nó phải tự động append thêm 1 dòng data mới vào Google Sheets.

TEST RUN: Khởi chạy 5 kịch bản thao tác mẫu → Kiểm tra Google Sheets xem đã được append đủ ≥5 rows với timestamp chính xác chưa.`,
      },
      {
        title: 'Reflection: Ứng dụng MCP vào một bài toán HR khác', xp: 60,
        desc: 'Bài tập Transfer plan: Áp dụng tư duy MCP (tích hợp 4 connector) vào một nghiệp vụ HR bất kỳ khác (không phải Tuyển dụng). Đánh giá tư duy hệ thống của anh/chị.',
        sampleType: 'rubric',
        samplePrompt: `📝 Bảng Kế hoạch Transfer Plan — Buổi 5:

Lựa chọn 1 nghiệp vụ HR (KHÔNG lấy nghiệp vụ Tuyển dụng) + Thiết kế giải pháp dùng 4 Connector:

TEMPLATE TRẢ LỜI:
- Nghiệp vụ HR lựa chọn: [Vd: Quy trình Chấm công & Tính lương (Payroll)]
- Bài toán/Nỗi đau cần giải quyết: [Phân tích 2-3 câu kèm định lượng — vd: "Cuối tháng HR mất 40h để check chéo bảng công, dò lỗi → Tự động hoá kỳ vọng giảm 80% thời gian này."]

Thiết kế kiến trúc 4 Connector:
1. Connector Google Drive: [Scope + Chức năng — vd: "READ-ONLY thư mục chứa Timesheet máy chấm công → Extract data"]
2. Connector Gmail: [Scope + Chức năng — vd: "WRITE-ONLY gửi email phiếu lương chi tiết cho từng cá nhân + Bắn report tổng cho Kế toán"]
3. [Connector số 3]: [Tên + Mô tả chức năng — vd: "Tích hợp Slack → Bắn alert cảnh báo Manager nếu phát hiện nhân viên OT quá giờ quy định"]
4. [Connector số 4]: [Tên + Mô tả chức năng — vd: "Tích hợp HRIS → Tự động update trạng thái "Payroll_Done" vào hồ sơ nhân sự"]

Khung Prompt điều phối (Orchestrator Prompt) cho hệ thống này (Viết 3-5 gạch đầu dòng định nghĩa Workflow tuần tự):

⚠ Lưu ý: Bắt buộc chọn Use case mới (như Payroll, Onboarding, C&B, L&D...), cấm sao chép kịch bản Recruiter Agent (Buổi 1-5).`,
        gradingCriteria: [
          'Chọn đúng Use case HR khác Tuyển dụng.',
          'Phân bổ kiến trúc 4 Connector hợp lý (Định nghĩa rõ Scope READ/WRITE và nhiệm vụ thực thi của từng cái).',
          'Prompt thiết kế quy trình thể hiện rõ luồng logic ≥3 bước tuần tự.',
          'Chỉ số kỳ vọng (Outcome) có định lượng rõ ràng (% tối ưu, số giờ tiết kiệm).',
        ],
      },
    ],
  },

  6: {
    week: 'TUẦN 6', duration: '90 phút',
    title: 'Tuần 6 — Multi-agent Workflow: Chìa khóa tăng tốc X4',
    sub: 'Tuần trước, 1 con AI phải "cân" một lúc 7 đầu việc: từ đọc CV, so sánh JD, soạn email, đến xuất báo cáo. Chạy như vậy thì nó bị "thắt cổ chai" và tốn thời gian y như một bạn nhân viên mới ôm đồm việc của cả phòng. Tuần này, chúng ta áp dụng mô hình chuyên môn hoá: Cắt 7 đầu việc đó giao cho 4 "Sub-agent" chạy song song. Một con chuyên lọc CV, một con chuyên đối chiếu điểm, một con chuyên soạn văn bản, và một con tổng hợp số liệu. Anh/chị sẽ được trải nghiệm cảm giác làm "Quản lý dự án" (Orchestrator), giám sát 4 màn hình tiến trình chạy cùng một lúc.',
    principle: { num: 6, name: 'Phối hợp nhiều Agent (Multi-agent)' },
    hints: [
      'Khi 1 Agent phải ôm quá nhiều task (Context quá dài), năng lực suy luận của nó sẽ giảm sút và tốc độ xử lý bị nghẽn.',
      'Giải pháp là chia Task cho nhiều Sub-agent (Agent phụ) chạy song song (Parallel processing) → Tốc độ hoàn thành nhanh gấp 3-4 lần.',
      'Trong mô hình này, cần thiết lập 1 Agent đóng vai trò "Orchestrator" (Quản lý điều phối) — Giống hệt như vai trò của 1 HR Manager phân công công việc cho team chuyên môn, đảm bảo các khâu vận hành trơn tru.',
    ],
    revealMsg: 'Xử lý các chiến dịch lớn bằng cách chia nhỏ cho nhiều Agent chuyên biệt, phân vai rõ ràng và có 1 Orchestrator điều phối tổng thể. Mô hình Multi-agent này chính là bản sao kỹ thuật số của một phòng ban HR hoàn chỉnh. Điểm khác biệt duy nhất: Team này chạy với tốc độ ánh sáng và không cần ngân sách phúc lợi.',
    diligenceNote: '⚠ Lưu ý kỹ thuật tuần này: 4 Sub-agent chạy song song đồng nghĩa với việc sẽ có 4 luồng Log file (nhật ký) sinh ra riêng biệt. Cuối ngày, BẮT BUỘC anh/chị phải có cơ chế Merge (gộp) 4 luồng log này về một file Audit tổng (Master Log). File Audit này phải trả lời được: Sub-agent nào đã thao tác vào lúc mấy giờ? Đụng vào vùng dữ liệu nào? Đưa ra quyết định gì? Nếu Sếp hoặc Thanh tra hỏi: "Tháng trước hệ thống loại 12 ứng viên này dựa trên cơ sở nào?" — Anh/chị chỉ việc trích xuất Audit Log ra làm bằng chứng. Không có Log tổng hợp, anh/chị sẽ không thể giải trình bảo vệ hệ thống của mình.',
    prereqWarning: '⚠ Buổi này chạy 4 session song song. Mọi tool đều mở multi-window được: Claude Code Pro $20 (mở 4 tab), Cursor (4 cửa sổ), VSCode + Cline (4 panel)... Khác biệt duy nhất: Pro $20 có cap usage 5h reset — chạy 4 agent đồng thời thì hit cap nhanh hơn. Nếu hit cap, anh/chị chạy tuần tự (xong agent này → khởi động agent khác) cũng pass được mốc.',
    layers: [
      { name: 'Là cái gì', text: 'Multi-agent là cấu trúc mô phỏng một nhóm làm việc: Có 1 Agent Trưởng nhóm (Orchestrator) chịu trách nhiệm phân bổ công việc cho 3-5 Agent Chuyên môn (Sub-agents). Mỗi Sub-agent được thiết lập để thực thi xuất sắc một "nghề" duy nhất: Agent Sàng lọc, Agent Đối chiếu, Agent Viết lách, Agent Tổng hợp.' },
      { name: 'Vì sao trúng', text: 'Khi khối lượng data lớn (>50 CV) và yêu cầu tính chính xác chuyên sâu, việc phân luồng xử lý giúp hệ thống chạy nhanh gấp 3-4 lần. Mỗi Sub-agent được prompt cấu hình sâu để trở thành "chuyên gia" trong mảng của nó, tránh tình trạng "1 người làm vạn nghề nhưng không nghề nào xuất sắc". Tư duy này rất gần gũi với nguyên tắc tổ chức nhân sự trong doanh nghiệp.' },
      { name: 'Khi nào đừng dùng', text: 'Khối lượng công việc nhỏ, tính chất Ad-hoc (<20 CV) — hãy dùng 1 Agent duy nhất cho đơn giản. Việc setup mô hình Multi-agent cho một task cỏn con giống như việc điều động cả một sư đoàn đi dọn cỏ sân vườn — giải quyết được việc nhưng cực kỳ lãng phí tài nguyên hệ thống và tiền API.' },
    ],
    lanVoice: 'Tôi hiểu bài toán chi phí của các anh/chị: "Chạy 4 con AI cùng lúc thì có tốn gấp 4 lần tiền API không? Có đáng không?". Câu trả lời là: Phụ thuộc vào quy mô (Scale). Nếu anh/chị chỉ lọc 50 CV/tuần thì chưa cần thiết. Nhưng nếu vào mùa tuyển dụng, khối lượng lên tới 500 CV/tuần, việc chia luồng cho 4 Agent sẽ tiết kiệm cho anh/chị ít nhất 15 giờ làm việc cực nhọc. So sánh 15 giờ công sức của HR với vài đô la tiền API, bài toán kinh tế này quá hời.',
    outcomes: {
      cam: [
        'Mô hình 4 Sub-agents chuyên biệt chạy song song đa luồng trên 4 cửa sổ IDE độc lập.',
        '1 Agent Orchestrator quản lý luồng công việc mượt mà, đảm bảo các Sub-agent tương tác chuẩn xác, không dẫm chân lên nhau.',
        'Video demo (khoảng 90s) quay lại màn hình khoảnh khắc "dàn nhạc" 4 Agent cùng hoà tấu xử lý data — một sản phẩm cực kỳ ấn tượng để anh/chị show-off năng lực ứng dụng AI với Ban Giám Đốc.',
      ],
      tuduy: [
        'Tư duy đánh giá tính kinh tế (Scale-evaluation): Nhận biết chính xác bài toán nào đủ "nặng" để đầu tư kiến trúc Multi-agent.',
        'Thành thạo Framework thiết kế chuẩn: 1 Orchestrator + N Sub-agents. Đơn giản, dễ bảo trì, sức mạnh vô song.',
        'Nắm vững nguyên tắc giao tiếp giữa các AI: Các Agent trao đổi thông tin với nhau thông qua việc ghi/đọc các file trung gian (Shared files), tuyệt đối không để chúng tự "đoán ý" nhau dẫn đến sai lệch quy trình.',
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
    title: 'Tuần 7 — Agent học tập liên tục (Memory Layer): Càng dùng càng "bén"',
    sub: 'Từ Buổi 1 đến 6, mỗi lần anh/chị bật AI lên chạy, nó lại hoạt động như một "tờ giấy trắng", không hề ghi nhớ kinh nghiệm từ những task ngày hôm qua. Buổi này, chúng ta sẽ trang bị cho nó một "Bộ nhớ ngữ cảnh" (Memory Layer). Anh/chị sửa điểm đánh giá của nó 10 lần — vd: Agent chấm 7, anh/chị chấm 9 kèm giải thích lý do — thì đến tuần thứ 8, AI sẽ tự động "nảy số" chấm đúng 9/10 trước cả khi anh/chị kịp xem. Nó giống hệt như việc rèn luyện một người Trợ lý: Càng làm việc lâu năm, càng thấu hiểu "gu" đánh giá của Sếp.',
    principle: { num: 7, name: 'AI biết học hỏi (Continuous Learning)' },
    hints: [
      'Ở các buổi trước (1-6), cơ chế vận hành là "Stateless" (Không lưu trạng thái) — Tắt phiên làm việc là quên sạch.',
      'Buổi này, chúng ta xây dựng cơ chế "Stateful" (Lưu trữ trạng thái) — Hệ thống sẽ NHỚ CỐT LÕI từ các phản hồi (feedback) sửa sai của anh/chị. Đây không phải là kiểu nhớ tạm bợ của lịch sử chat thông thường.',
      'Cơ chế tự động hoá: Cuối mỗi tuần, AI sẽ tự động tổng hợp các lỗi sai lặp lại → Rút trích thành "Bộ quy tắc mới" (New Rules) → Áp dụng ngay vào chu kỳ công việc tuần sau.',
    ],
    revealMsg: 'Sự kết hợp giữa "Memory Layer" (Bộ nhớ ngữ cảnh) và "Feedback Loop" (Vòng lặp phản hồi cải tiến) giúp con AI dần định hình và sở hữu "DNA làm việc" riêng biệt của anh/chị, thoát khỏi mác "Template chung chung". Đây là khoảnh khắc đột phá: Nó chính thức chuyển mình từ một Công cụ (Tool) trở thành một Đồng nghiệp ảo (AI Colleague) đã gắn bó lâu năm.',
    diligenceNote: '⚠ Cảnh báo pháp lý và bảo mật dữ liệu tuần này: Lớp Memory (Bộ nhớ) rất DỄ vô tình lưu lại PII (Thông tin định danh) của các ứng viên cũ — như Tên tuổi, Số điện thoại, hay Lý do loại cá nhân. NGUYÊN TẮC THÉP: Memory CHỈ được phép lưu trữ "SỞ THÍCH & TIÊU CHÍ NGHỀ NGHIỆP" của người HR (Ví dụ: "HR này luôn ưu tiên ứng viên có kinh nghiệm thực chiến mảng Bán lẻ > 3 năm"). TUYỆT ĐỐI KHÔNG lưu trữ các detail định danh ứng viên cụ thể. Trong Bước 3 đã có sẵn template Anonymize (Ẩn danh) để lọc PII — Vui lòng áp dụng triệt để, không lướt qua.',
    layers: [
      { name: 'Là cái gì', text: 'Lớp Memory (Bộ nhớ ngữ cảnh) của AI được thiết kế gồm 4 phân hệ file: (1) Hồ sơ cá nhân của anh/chị, (2) Ngữ cảnh dự án hiện tại, (3) Lịch sử Phản hồi/Sửa sai, và (4) Tập hợp các Quy tắc (Rules) mới được rút ra. Cơ chế: Trước khi nhận task mới, AI sẽ tự động "đọc lướt" qua 4 file này. Cuối mỗi tuần, nó sẽ chạy hàm tổng hợp Feedback thành Rule mới. Trong ngôn ngữ của HR, chúng ta gọi đây là quy trình "Đào tạo nội bộ & Cập nhật SOP" — chỉ khác là học viên ở đây là một con AI.' },
      { name: 'Vì sao trúng', text: 'Mỗi lần anh/chị override (ghi đè/sửa đổi) kết quả, AI sẽ lưu vào lịch sử. Khi đúc kết thành Rule, độ chính xác ở tuần tiếp theo sẽ được tối ưu thêm 30-40%. Sự cải thiện này được chứng minh bằng các biểu đồ tracking (số liệu định lượng), chứ không phải cảm giác "Hình như nó khôn ra". Ở công ty, Sếp chỉ duyệt khi có số liệu rõ ràng, Sếp không quan tâm đến "cảm tính".' },
      { name: 'Khi nào đừng dùng', text: 'Nếu file Memory phình to quá mức (Lưu rác quá nhiều), chi phí gọi API sẽ tăng vọt nhưng độ chính xác lại sụt giảm (do bị nhiễu context). Bắt buộc phải có thao tác "Clean-up & Consolidate" (Dọn dẹp và gom nhóm) vào cuối tuần. Không để Memory biến thành thùng rác kỹ thuật số. Thêm một lần nữa nhấn mạnh: KHÔNG BAO GIỜ lưu thông tin cá nhân (PII) của ứng viên vào file Memory.' },
    ],
    lanVoice: 'Tôi đoán các anh/chị đang có chút ngần ngại: "Trang bị bộ nhớ liên tục thế này thì có tốn thêm tiền chạy API không?". Thực tế là có, chi phí sẽ nhích lên khoảng 5-10% do phải load lại Context (Ngữ cảnh) mỗi lần chạy. Nhưng bù lại, tỷ lệ chính xác (Accuracy) trong công việc tăng vọt 30-40% — một sự đánh đổi quá hời. Và giá trị vô giá nằm ở chỗ: Bộ nhớ (Memory) này là tài sản số của riêng anh/chị. Dù sau này có chuyển việc (nhảy công ty), anh/chị chỉ cần xách theo "Cuốn sổ tay Memory" này là con AI lập tức bắt nhịp được phong cách làm việc quen thuộc, không phải mất thời gian đào tạo lại từ con số 0.',
    outcomes: {
      cam: [
        'Bộ nhớ ngữ cảnh (Memory Layer) gồm 5 file cấu trúc chuẩn đang hoạt động — riêng file Feedback đã chứa ≥10 dòng lịch sử tương tác/sửa lỗi thực tế.',
        'Bảng Report đối chiếu "Predict (AI Dự đoán) vs Actual (HR Chấm thật)" trên tệp 10 CV Test — Thể hiện rõ % độ lệch (sai số) đã được thu hẹp đáng kể so với Tuần 1.',
        'File Rules.md chứa ≥5 quy tắc đánh giá (Evaluation rules) được AI tự động đúc kết từ lịch sử — cực kỳ cụ thể, có khả năng thực thi (Actionable), không sáo rỗng.',
      ],
      tuduy: [
        'Nắm vững kiến trúc 4 lõi của Memory: Profile, Context, Feedback, Rules.',
        'Kỷ luật Consolidate: Cuối tuần phải Gom Feedback → Chuyển hoá thành Rule mới. Bỏ qua bước này, hệ thống sẽ rối loạn.',
        'Hiểu cách kích hoạt "Predict Mode" (Chế độ dự báo) để theo dõi và đo lường sự tăng trưởng năng lực (Reliability growth) của AI bằng các chỉ số định lượng.',
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
    title: 'Tuần 8 — Advanced Triggers (Trigger nâng cao) & Tư duy "HR tự thiết kế Phần mềm nội bộ"',
    sub: 'Lấy một use case điển hình: Cứ mỗi khi nhân viên gửi Đơn xin nghỉ phép qua Google Form của công ty, hệ thống AI sẽ ngay lập tức đối chiếu chính sách nghỉ phép với lịch làm việc của phòng ban. Đơn ngắn ngày (<3 ngày) -> Tự động duyệt ngay lập tức. Đơn dài ngày -> Tự động escalate (chuyển tiếp) lên email của Quản lý trực tiếp. Anh/chị vừa thay thế công việc của một đội IT Dev mà không cần viết một dòng code nào. Sau khóa học, anh/chị hoàn toàn có thể tự tin thêm 1 dòng vào CV: "Có khả năng tự thiết kế và triển khai công cụ Automation nội bộ bằng AI (No-code/Low-code)". Nghe cực kỳ uy tín.',
    principle: { num: 8, name: 'Cò nâng cao (Advanced Triggers)' },
    hints: [
      'Ở Tuần 4, hệ thống AI được thiết lập Trigger chạy theo Lịch cố định (Schedule-based) — cứ đến giờ là tự động bật.',
      'Sang Tuần này, hệ thống sẽ chạy dựa trên Trigger Sự kiện (Event-based/Webhook) — ngay khi có một sự kiện bên ngoài (Ví dụ: 1 Form được submit), AI sẽ lập tức phản hồi và xử lý luồng data đó.',
      'Tư duy đột phá: Phòng HR giờ đây có thể tự xây dựng các "Mini-Software" (Phần mềm nội bộ cỡ nhỏ) mà không cần phụ thuộc vào phòng IT. Bổ sung kỹ năng này vào CV cá nhân: "Tự dựng công cụ quản trị HR tự động (No-code)" — Một năng lực cạnh tranh vô giá.',
    ],
    revealMsg: 'Thiết lập Webhook Trigger (Cò kết nối) để "gọi" AI ngay khi có phát sinh dữ liệu từ biểu mẫu (Form) bên ngoài — AI nhận lệnh, xử lý data, ghi nhận vào hệ thống Database và gửi Email thông báo tự động. Anh/chị vừa chính thức thay thế vai trò của một System Developer mà không cần biết định nghĩa về lập trình phần mềm là gì.',
    diligenceNote: '⚠ Lưu ý sống còn về Security (Bảo mật) tuần này: Endpoint API bản chất là một "cánh cửa" mở toang từ môi trường Internet công cộng đi thẳng vào hệ thống nội bộ của anh/chị. BẮT BUỘC phải tuân thủ 2 nguyên tắc an ninh: (1) Setup API Key (Mã khoá bảo mật) bí mật. Tuyệt đối KHÔNG commit Key này lên GitHub Public, KHÔNG copy-paste gửi qua Zalo, phải lưu nó ở biến môi trường (.env). (2) Thực hiện Rotate Key (Đổi mã khoá) định kỳ 90 ngày/lần — Hãy đặt nhắc nhở (Reminder) trên điện thoại ngay bây giờ. Lộ API Key đồng nghĩa với việc hacker/bên ngoài có thể kích hoạt Routine của anh/chị. Tiêu tốn tiền API không phải là vấn đề lớn nhất — Việc bị rò rỉ, đánh cắp Dữ liệu nội bộ mới là thảm họa không thể cứu vãn.',
    prereqWarning: '⚠ Buổi này cần 1 URL public để nhận Webhook — có thể dùng dịch vụ miễn phí Netlify hoặc Vercel (deploy trong 5 phút, không cần thẻ). Phần AI vẫn dùng tool anh/chị đang quen từ Buổi 1 (Claude Code Pro $20 / Cursor / Antigravity / VSCode + Cline...) — không cần nâng cấp lên gói gì cao hơn cho buổi này.',
    layers: [
      { name: 'Là cái gì', text: 'Hệ thống AI sẽ được cấp một địa chỉ public (API Endpoint). Bất cứ khi nào có một biểu mẫu (Web form) được submit hoặc có một tín hiệu điện tử ngoại vi gọi tới địa chỉ đó, AI sẽ ngay lập tức được "đánh thức", xử lý luồng data nhận được và trả về kết quả. Tưởng tượng nó như một "Quầy giao dịch tự động" 24/7 của phòng HR. Thuật ngữ IT nghe có vẻ phức tạp, nhưng vận hành thực tế thì dễ và nhanh gọn y như việc anh/chị mở app gọi một cuốc Grab.' },
      { name: 'Vì sao trúng', text: 'Phòng HR hàng ngày phải gồng gánh vô số quy trình giấy tờ lặp lại (Repetitive processes): Đơn xin nghỉ phép, Đơn báo cáo OT (Làm thêm giờ), Form đăng ký Khóa học đào tạo, Báo cáo sự cố thiết bị... Xử lý thủ công mỗi đơn từ này "ngốn" khoảng 10-15 phút. Nhân lên với hàng trăm đơn mỗi tháng, tổng thời gian hao phí lên đến 15-25 giờ làm việc. Tự động hoá (Automate) khâu này giúp HR tiết kiệm đến 80% thời gian chết (Idle time). 80% thời gian rảnh rỗi đó, anh/chị dùng để làm các công tác chiến lược (Strategic HR) hay gì khác là quyền chủ động của anh/chị.' },
      { name: 'Khi nào đừng dùng', text: 'Tuyệt đối KHÔNG TỰ ĐỘNG HOÁ các tác vụ đòi hỏi khả năng phán đoán cảm xúc (Human judgment) hoặc các vấn đề nhạy cảm: Xét duyệt mức Thưởng (Bonus) cho nhân sự C-level, Xử lý các case dính tới "Chính trị nội bộ" (Office politics), hay các buổi phỏng vấn chấm dứt hợp đồng. Automation chỉ dành cho các tác vụ có Chính sách đối chiếu (Policy) rõ ràng trắng đen (Black-and-white). Giao việc nhạy cảm cho máy móc tự động xử lý là một hành động phản cảm, thiều tính người, và rất dễ dẫn đến khủng hoảng truyền thông nội bộ.' },
    ],
    lanVoice: 'Tôi biết nỗi băn khoăn của nhiều HR: "Giám đốc không bao giờ duyệt cho bộ phận HR tự ý dùng AI để approve (Duyệt) phép đâu". Mối lo này rất chính xác. Cách giải quyết cực kỳ khôn khéo: AI chỉ đóng vai trò phân tích và "Đề xuất" (Recommend), cuối cùng Sếp chỉ việc bấm 1 nút "Duyệt" trên email. Khi giải pháp của anh/chị giúp Sếp tiết kiệm 90% thời gian phải đọc và check lịch thủ công, Sếp sẽ gật đầu ngay lập tức. Anh/chị không tự ý cướp quyền phê duyệt — anh/chị đang đóng vai trò một Trợ lý điều phối đắc lực cho Sếp. Cái tài tình của người làm quy trình là ở chỗ đó.',
    outcomes: {
      cam: [
        'Một địa chỉ API (Endpoint) Public đang trong trạng thái Live (Hoạt động) — cứ có nhân sự nộp Form là AI tự động tiếp nhận xử lý ngay lập tức (Real-time).',
        'Hoàn thiện bộ 3 Kịch bản Test (Use cases): (1) Đơn nhỏ (<3 ngày) -> AI duyệt tự động, (2) Đơn vừa -> AI chuyển tiếp (Escalate) cho Sếp quyết định, (3) Đơn vi phạm quy chế -> AI tự động gửi mail từ chối khéo léo.',
        'Một "Bảo bối" để cập nhật vào Hồ sơ năng lực (CV): "Thiết kế thành công Công cụ HR Automation nội bộ — Tự động hoá luồng xét duyệt Đơn từ, giúp team HR tiết kiệm 80% thời gian xử lý thủ công hàng tháng."',
      ],
      tuduy: [
        'Thành thạo Framework thiết kế chuẩn: Tín hiệu kích hoạt (Trigger) → AI Xử lý (Process) → Ghi nhận Database (Log) + Gửi Email phản hồi (Notify). Đơn giản, tinh gọn nhưng sức mạnh công phá cực lớn.',
        'Thiết lập Rào chắn (Guardrails): Set giới hạn tự động duyệt tối đa 5 ngày, vượt ngưỡng này BẮT BUỘC phải chuyển luồng phê duyệt lên cấp Quản lý (Manager).',
        'Chuyển đổi tư duy: Thay vì yêu cầu Sếp phải đọc email và gõ reply phê duyệt thủ công, giải pháp của anh/chị giúp Sếp chỉ cần thao tác bấm đúng 1 Nút bấm — Sếp sẽ thầm cảm ơn sự tinh tế của anh/chị.',
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
    title: 'Tuần 9 — Compliance Scanner (Kiểm toán tuân thủ): Đặt rào chắn trước, tránh rủi ro pháp lý',
    sub: 'Phòng bệnh hơn chữa bệnh. Tránh rủi ro bị phạt hàng tỷ đồng vì vi phạm Nghị định 13/2023 (Bảo vệ dữ liệu cá nhân), hoặc hàng trăm triệu do sai phạm Luật Lao động. Tỷ suất hoàn vốn (ROI) của việc đầu tư $50 chi phí API/năm để đổi lấy sự an toàn pháp lý này là x1000 lần. Nghe có vẻ phóng đại, nhưng thực tế bài toán rủi ro doanh nghiệp đúng là như vậy. Nguyên lý muôn đời của HR: Rào chắn rủi ro luôn phải được thiết lập TRƯỚC khi thiệt hại xảy ra, chứ không phải đi dọn dẹp "bãi chiến trường" sau khi đã có án phạt.',
    principle: { num: 9, name: 'Đặt rào trước (Proactive Compliance)' },
    hints: [
      'Ở các Tuần 1-8, mỗi con Agent riêng lẻ đều được trang bị các rào chắn (Guardrails) của riêng nó.',
      'Đến Tuần này, chúng ta sẽ kiến tạo một "Agent Kiểm toán" (Compliance Scanner) làm nhiệm vụ tuần tra chéo (Cross-check) toàn bộ hệ thống lưu trữ — Hoạt động độc lập giống như anh Công an đi tuần tra khu phố mỗi cuối tuần.',
      'Nguyên tắc tối thượng: Rào chắn Compliance BẮT BUỘC phải có mặt TRƯỚC khi vi phạm (Violations) phát sinh. Không được có tâm lý "Chờ rảnh rỗi rồi vá sau".',
    ],
    revealMsg: 'Hàng rào an ninh luôn phải được dựng lên TRƯỚC KHI hệ thống Go-live (Đưa vào sử dụng thật). "Agent Kiểm toán" này đóng vai trò y hệt một hợp đồng Bảo hiểm Pháp lý cao cấp — Phải trích ngân sách "mua" thì cảm thấy hơi xót tiền, nhưng nếu "không mua", đến lúc sự cố ập đến (Bị thanh tra/Kiện tụng), công ty sẽ không có cơ hội trở tay.',
    diligenceNote: '⚠ Nhắc nhở Cẩn trọng tuần này: ĐÂY CHÍNH LÀ buổi học mang tính sống còn về Diligence (Sự mẫn cán). Anh/chị đã mất 8 tuần để xây móng và dựng nhà — buổi học này đóng vai trò "cất nóc" khóa hệ thống. Một nhiệm vụ bổ sung Bắt buộc (không nằm trong 5 Step thực hành): Cuối tuần này, hãy rà soát lại toàn bộ giáo trình từ Buổi 1 đến Buổi 8 — Liệu có bất kỳ phần nào có cảnh báo "Cẩn trọng/Diligence note" mà anh/chị đã cố tình lướt qua (Skip) không? Nếu có, BẮT BUỘC phải quay lại Fix triệt để mọi lỗ hổng TRƯỚC KHI cho phép hệ thống tự động chạy (Auto-trigger) chia sẻ với các đồng nghiệp khác.',
    layers: [
      { name: 'Là cái gì', text: 'Hệ thống bảo vệ đa tầng gồm 3 cấp độ Rào chắn: (1) Rào chắn kiểm soát ngay bên trong nội bộ từng Agent con (Sub-agent), (2) Rào chắn kiểm soát xuyên suốt 1 chu kỳ chạy (Routine), và (3) "Agent Kiểm toán" tổng quát (Scanner) rà quét toàn bộ hệ sinh thái dữ liệu của phòng ban vào mỗi dịp cuối tuần. Mô hình 3 lớp bảo mật này có vẻ cồng kềnh như mặc áo ấm 3 lớp giữa mùa hè — Thật sự rất rườm rà, nhưng khi bão (Sự cố/Thanh tra) kéo về, anh/chị mới thấm thía công dụng của việc "mặc đủ ấm".' },
      { name: 'Vì sao trúng', text: 'Phát hiện vi phạm (Violations) ngay từ trứng nước thì chi phí fix (sửa lỗi) cực kỳ nhỏ. Ngược lại, nếu để Đoàn kiểm toán Nhà nước phát hiện ra vi phạm, công ty không chỉ mất tiền nộp phạt mà còn khủng hoảng Uy tín thương hiệu. Chi phí để nuôi "Agent Kiểm toán" này chỉ tốn cỡ $50/Năm, trong khi đó, án phạt kịch khung vi phạm Nghị định 13 lên đến 5% Doanh thu hoặc Tiền Tỷ. Anh/chị hãy tự làm bài toán ROI (Tỷ suất lợi nhuận) giúp tôi — Tôi đã tính toán rồi, ROI của việc đầu tư cho Compliance dao động từ x1.000 đến x20.000 lần.' },
      { name: 'Khi nào đừng dùng', text: 'Lưu ý ở giai đoạn đầu (Tuần thứ nhất), hãy chấp nhận việc "Agent Kiểm toán" sẽ Cảnh báo sai (False Positive) với sai số dao động khoảng 30% — Nó vẫn đang trong giai đoạn Machine Learning (Học máy). Sau 4 tuần liên tục nạp Feedback để tối ưu Rule, sai số này sẽ tiệm cận 0. VÀ lưu ý đặc biệt: TUYỆT ĐỐI KHÔNG cấp quyền cho Agent tự động "Fix" (Sửa) các lỗi vi phạm pháp lý. Quyền năng của nó chỉ dừng lại ở mức "Báo động & Chỉ điểm". Anh/chị (Human) MỚI LÀ người có thẩm quyền rà soát và quyết định Sửa. Bởi vì anh/chị là người làm nghề HR — Người đứng ra chịu trách nhiệm cuối cùng trước Pháp luật vẫn luôn là anh/chị, không phải công cụ AI.' },
    ],
    lanVoice: 'Tôi rất hiểu nỗi lo chung: "Việc tuân thủ (Compliance) và đọc văn bản luật rườm rà lắm, HR tụi mình đâu ai có bằng Luật sư chuyên nghiệp." Một suy nghĩ hoàn toàn hợp lý. Nhưng với AI, "Cậu thanh tra ảo" (Compliance Scanner) này bản chất chỉ là việc anh/chị số hóa (digitalize) một checklist gồm 30 tiêu chí tuân thủ và chuyển giao cho hệ thống tự động rà quét. Anh/chị không cần cày ngày đêm học thuộc Luật, chỉ cần xây dựng Agent quét tự động và nhờ Luật sư nội bộ đối chiếu/xác nhận lại với các case bị "tuýt còi". Quy trình này giúp cả HR và Pháp chế đều nhàn đi trông thấy.',
    outcomes: {
      cam: [
        'Một hệ thống "Agent Kiểm toán" (Compliance Scanner) đã trực tiếp Run (chạy) thành công ít nhất 3 chu kỳ thực tế — Chạy thật trên Data thật, không làm màu biểu diễn (Demo).',
        'Một bảng Dashboard "Biểu đồ Nhiệt" (Heatmap) theo dõi Real-time 5 khía cạnh Tuân thủ Pháp lý — Trực quan đến mức Sếp chỉ cần lướt qua 5s là nắm được tình hình.',
        'Một bản Báo cáo Tổng kết Hành pháp 1 trang (1-pager Executive Summary) — Format cực kỳ chuyên nghiệp, sẵn sàng đem đi trình chiếu trong các cuộc họp giao ban (Board Meeting).',
      ],
      tuduy: [
        'Nắm vững kiến trúc Thiết kế Bảo mật 3 Cấp độ: Bên trong lõi Agent → Bên trong luồng Routine → Rà quét tổng thể toàn Hệ sinh thái.',
        'Nguyên tắc Báo cáo: MỌI Cảnh báo vi phạm (Flags) BẮT BUỘC phải đính kèm Trích dẫn Điều khoản Luật (Citations) cụ thể (Nghị định số mấy, Điều nào, Khoản nào). Tuyệt đối không đưa ra các Cảnh báo "Chung chung cảm tính".',
        'Tâm lý vững vàng (Mindset): Việc hệ thống báo động sai (False Positive) ở ngưỡng 30% trong giai đoạn đầu là quy luật tất yếu của Machine Learning — Giữ thái độ bình tĩnh, từ từ nạp Feedback để tối ưu, không được rối trí (Panic).',
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
    title: 'Tuần 10 — Capstone Project (Bài tập Tổng kết): Ngày Demo Day và Chứng chỉ AI HR Builder',
    sub: 'Tuần này chúng ta tạm cất bộ "Recruiter Agent" đi. Nhiệm vụ của anh/chị là bóc tách MỘT bài toán/nghiệp vụ HR CỦA CHÍNH CÔNG TY MÌNH đang gặp đau đớn (Pain points) — ví dụ: Quy trình Đào tạo Hội nhập (Onboarding), Automation Bảng lương, Hệ thống Đánh giá KPI, Đo lường Cảm xúc nội bộ (Sentiment), hay Bot Hỗ trợ Giải đáp chế độ cho nhân sự. Hãy áp dụng trọn vẹn 10 Nguyên lý tư duy đã học, tự tay Build (Dựng) một hệ thống Agent hoàn chỉnh từ con số 0 tròn trĩnh chỉ trong vỏn vẹn 7 ngày. Các buổi trước anh/chị học để ứng dụng cho mình, buổi này anh/chị "Học để dạy và thuyết phục người khác".',
    principle: { num: 10, name: 'Năng lực Chuyển đổi (Transferability)' },
    hints: [
      'Trong suốt 9 tuần qua, anh/chị đã mượn hình tượng "Recruiter Agent" làm phương tiện (Vehicle) để rèn luyện bộ Tư duy AI.',
      'Tuần thứ 10 là Bài Test thực tế: Chứng minh năng lực "Transfer" (Chuyển giao Tư duy) sang một bài toán nghiệp vụ hoàn toàn khác, tuyệt đối không được xào nấu hay Copy-paste lại logic của bài Tuyển dụng.',
      'Roadmap cực kỳ rõ ràng: Chọn 1 Bài toán HR đặc thù + Map đủ 10 Nguyên lý Tư duy + Execute (Thực thi Code) ra sản phẩm chạy được (Live) trong vòng 7 ngày.',
    ],
    revealMsg: 'Bộ 10 Nguyên lý tư duy này là chiếc "Chìa khoá vạn năng" có thể bẻ khóa BẤT KỲ bài toán HR nào, không chỉ gói gọn trong mảng Tuyển dụng (TA). Đây là một Bài Test "Nửa đùa nửa thật" — Để kiểm chứng xem anh/chị đã thực sự chạm đến ngưỡng "Master" (Bậc thầy) hay chưa. Khái niệm Master không được định nghĩa bằng việc anh/chị làm giỏi 1 thứ. Master là khi anh/chị nắm được Cốt lõi (Core logic), bốc nó sang 1 Bài toán khác, 1 Công ty khác, và hệ thống vẫn chạy trơn tru. Tôi xin thẳng thắn nói trước — Đây chính là "Điểm bùng phát" (Tipping point) quyết định sự nghiệp của anh/chị.',
    diligenceNote: '⚠ Cẩn trọng tối thượng của tuần bảo vệ: Sản phẩm Capstone này là thứ anh/chị sẽ mang đi trình bày (Pitching) với Sếp và gắn vĩnh viễn vào Portfolio (Hồ sơ năng lực) cá nhân. Do đó, BẮT BUỘC trong phần Báo cáo phải có một Đoạn "AI Disclosure" (Tuyên bố ranh giới AI minh bạch): Bóc tách rạch ròi Đoạn code/Công đoạn nào do AI sinh ra, Phần cốt lõi nào do anh/chị (Human) tư duy, và anh/chị đã Review/Kiểm duyệt (Audit) hệ thống như thế nào. Nghe có vẻ hình thức thừa thãi, nhưng xin thưa, ĐÂY LÀ TIÊU CHUẨN ĐẠO ĐỨC NGHỀ NGHIỆP CỦA HR GLOBAL bắt đầu từ năm 2025. Rèn thói quen viết Disclosure minh bạch ngay từ bây giờ, sau này khi đi Phỏng vấn xin việc (Headhunt), tiếng nói của anh/chị sẽ cực kỳ có trọng lượng và uy tín.',
    layers: [
      { name: 'Là cái gì', text: 'Lấy một "Nỗi đau" (Pain point) HR từ chính doanh nghiệp của anh/chị — Ví dụ mảng L&D (Đào tạo), C&B (Lương Thưởng), HRBP, hay HR Ops (Vận hành) — Viết tài liệu Thiết kế Đặc tả (Spec) phủ kín 9 Nguyên lý đã học, tiến hành Code Dựng hệ thống, và mang sản phẩm đi Trình diễn (Demo Day). Về mặt kiến trúc (Structure) thì đơn giản vì đã có Template, nhưng độ phức tạp (Complexity) khi ứng dụng vào Thực tế (Real-world) thì cực kỳ "khoai". Đó mới chính là ý nghĩa thực sự của chữ "Tổng kết" (Capstone).' },
      { name: 'Vì sao trúng', text: 'Định nghĩa của sự Master (Thành thạo) là khả năng Chuyển giao (Transferable Skills). Nếu anh/chị chỉ biết làm mỗi cái Bot Tuyển dụng (Recruiter Agent), thì anh/chị chưa gọi là Master đâu, anh/chị mới chỉ dừng ở mức "Học vẹt thuộc lòng" một cái Template có sẵn. Tuần thứ 10 cố tình "Ép" (Force) anh/chị phải lao vào một mảng Nghiệp vụ mới toanh để chứng minh Tư duy Logic độc lập của bản thân, chứ không phải đi Copy lại các quy trình cũ. Xin được chia sẻ thật lòng — Đây là Khoảnh khắc Chân lý (Moment of Truth).' },
      { name: 'Khi nào đừng dùng', text: 'Tuyệt đối ĐỪNG mắc bẫy "Tham vọng quá đà" (Over-engineering) — Ví dụ: Đòi "Tự code nguyên một con Hệ thống tính lương Core-HR cho Tập đoàn 1.000 người chỉ trong 1 tuần". Đội ngũ Mentor sẽ đóng vai trò "Kéo anh/chị trở lại mặt đất", giúp chọn ra một Bài toán Vừa vặn (Right-size): Đó phải là một Nỗi đau thật (Real pain), nhưng Scope (Phạm vi) đủ khả thi để Build xong chỉ trong 5 ngày. Tham lam quá dẫn đến "Sa lầy" (Bogged down). Mà để bị Sa lầy và Bỏ cuộc ngay tại Tuần cuối cùng thì quả thực là một sự lãng phí quá lớn.' },
    ],
    lanVoice: 'Tôi đoán các anh/chị đang gặp "Áp lực tâm lý": "Tự tay dựng nguyên một hệ thống từ số 0, lỡ làm giữa chừng bị fail thì sao?". Một nỗi lo hoàn toàn bình thường (rất Human). Lời giải đáp: Anh/chị KHÔNG HỀ CÔ ĐƠN trên hành trình này. Sẽ có một "AI Mentor" (Cố vấn ảo) túc trực hỗ trợ code 24/7, có Group Zalo của cả Cohort, có các khung giờ Office Hour trực tiếp của tôi, và quan trọng nhất là anh/chị đã tích luỹ được 9 bản Transfer Plan (Kế hoạch chuyển đổi) cực kỳ chi tiết từ 9 tuần trước. Tiêu chuẩn Pass (Vượt ải) cho Tuần này chỉ là Áp dụng thành công 6/9 Nguyên lý — Tôi không đòi hỏi một sản phẩm Perfect (Hoàn hảo tuyệt đối). Sự Hoàn hảo, chúng ta sẽ để dành trau chuốt ở Tuần 11 (Pro Track).',
    outcomes: {
      cam: [
        'Một Hệ thống AI Agent hoàn chỉnh (Capstone) được Deploy và Chạy Real-time — Chạy trên Data thật, có User thật, tuyệt đối không phải là bản Demo click "làm màu".',
        'Một đoạn Video Pre-record (Quay sẵn) 5 phút "Pitching" Sản phẩm chuẩn bị cho Ngày hội Demo Day — Đoạn Video này đủ chất lượng để đem đi Pitch với Ban Giám Đốc hoặc gửi cho các Đối tác Tuyển dụng Cấp cao.',
        'Chứng chỉ "AI HR Builder" Verify (Được xác thực) bởi Hệ thống Quốc tế — Sẵn sàng đính thẳng lên Profile LinkedIn cá nhân để "Khoe" với cộng đồng Mạng lưới (Network).',
      ],
      tuduy: [
        'Nhận thức sâu sắc: Bộ 10 Nguyên lý AI này là Tư duy cốt lõi (Framework), có thể ốp vào BẤT KỲ bài toán Nhân sự nào, không hề bị giới hạn ở mảng Tuyển dụng (TA).',
        'Định nghĩa lại chữ Master: Master là năng lực "Chuyển giao Tư duy" (Transfer). Anh/chị làm rành 1 bài toán thì chỉ là "Biết dùng Tool", khi anh/chị xử lý mượt mà từ 2 bài toán Khác ngành trở lên, anh/chị mới chính thức là Master.',
        'Bài thi Capstone này không chỉ là Bài tập cuối khóa, nó chính là "Điểm sáng chói lọi" (Highlight) trong Hồ sơ năng lực cá nhân, là Vũ khí cạnh tranh (Competitive Advantage) đi theo anh/chị trong suốt chặng đường Sự nghiệp phía trước.',
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
    title: 'Tuần 11 (Pro) — RAG: Biến AI thành "Bách khoa toàn thư" nội bộ (Tra cứu có trích nguồn)',
    sub: 'Bê nguyên Sổ tay nhân viên (Employee Handbook), Hệ thống Quy chế Công ty, Kho JD mẫu, Hàng ngàn file Hợp đồng — Tất tần tật số hóa thành một Kho lưu trữ riêng cho AI "nhai". Khi Nhân sự hỏi về Chế độ Thai sản, Cách tính Công Tác Phí, hay Chính sách Nghỉ ốm... AI sẽ tự động Trích xuất trả lời chuẩn xác từng Câu, từng Chữ, từng Số Trang tham chiếu. Tuyệt đối KHÔNG CÒN tình trạng AI Bịa (Hallucinate) ra câu trả lời chung chung nữa.',
    principle: { num: 11, name: 'Tra cứu tài liệu nội bộ (RAG - Retrieval-Augmented Generation)' },
    hints: [
      'Level mới: Khống chế AI KHÔNG được phép dùng "Vốn tự có" (Kiến thức training gốc) để trả lời. Bắt buộc nó chỉ được phép dựa trên TÀI LIỆU CÔNG TY THẬT.',
      'Tiêu chuẩn khắt khe: Mọi câu trả lời sinh ra đều BẮT BUỘC phải đính kèm Trích dẫn Nguồn gốc (Citation) — Dẫn link chuẩn xác tới Số trang, Đoạn văn (Paragraph) y như cách viết Luận văn.',
      'Kỷ nguyên của sự "Ảo giác" (Hallucination) đã kết thúc — Từ nay, AI phát ngôn về Luật BHXH hay Quy chế Cty là chuẩn không cần chỉnh.',
    ],
    revealMsg: 'Khái niệm Kỹ thuật thuật ngữ là RAG (Retrieval-Augmented Generation), nhưng anh/chị cứ hiểu nôm na: "Tra cứu tài liệu trước khi mở miệng, và nói có sách, mách có chứng". Đây chính là Phương thức Độc bản (Gold Standard) mà các Tập đoàn Đa quốc gia (MNCs) đang áp dụng để triển khai AI một cách an toàn tuyệt đối.',
    layers: [
      { name: 'Là cái gì', text: 'RAG bản chất là một Kho lưu trữ thông minh. Nó băm nhỏ toàn bộ các file PDF/Word của anh/chị ra, chuyển hóa thành một dạng ngôn ngữ mã hóa mà Máy có thể hiểu được (Vector Embeddings). Khi user đặt câu hỏi, AI sẽ "lặn" vào Kho này, bốc lên 3 đến 5 đoạn văn bản liên quan sát nhất (Context), rồi dựa vào đó để Xào nấu (Generate) thành một câu trả lời hoàn chỉnh kèm Trích nguồn (Source citation). Tên Tiếng Anh nghe có vẻ Cao siêu, nhưng các thao tác Setup thực tế chỉ toàn là Click chuột và Copy-paste Prompt, dân Non-tech làm dư sức.' },
      { name: 'Vì sao trúng', text: 'Đặc điểm cố hữu của AI (LLMs) là rất thích Bịa chuyện (Hallucinate) — Vấn đề là nó bịa một cách cực kỳ Tự tin, khiến những người non kinh nghiệm tin sái cổ. Giải pháp RAG này là "Vòng kim cô" ép AI chỉ được phép nói dựa trên Nguồn tài liệu nội bộ thật. Nếu nó trả lời sai, anh/chị chỉ cần click vào link Citation là phát hiện ra ngay nó đang lôi data rác từ đâu ra. Mọi thứ Minh bạch (Transparent) và Dễ kiểm soát (Traceable) chứ không phải kiểu "Ngồi buồn chiều Thứ Sáu AI tự dưng nói nhảm".' },
      { name: 'Khi nào đừng dùng', text: 'Tuyệt đối KHÔNG dùng RAG cho các tác vụ mang tính Sáng tạo (Creative) — Ví dụ: Nghĩ ra ý tưởng Tổ chức Year-End Party mới lạ, hay Viết nháp một bản JD cho 1 vị trí chưa từng có tiền lệ. Phương pháp RAG sinh ra ĐỘC QUYỀN để giải quyết bài toán TRẢ LỜI/TRUY VẤN dựa trên TÀI LIỆU CÓ SẴN (Document-based Q&A). Cần Sáng tạo thì tháo xích cho AI bay bổng; Cần Tra cứu Chính sách thì đeo xích RAG vào.' },
    ],
    lanVoice: 'Tôi đoán các Quản lý HR đang e dè: "Nghe cái chữ RAG (Retrieval-Augmented Generation) này đao to búa lớn quá, setup chắc phải cần nguyên team Data Engineer." Đây là lầm tưởng lớn nhất. Thực tế, các hệ thống Vector Database (Kho dữ liệu véc-tơ) như Pinecone hay Chroma cung cấp sẵn gói Free (Miễn phí) đủ chứa hàng triệu File tài liệu. Việc setup cấu hình nhét File vào kho này chỉ tốn của anh/chị chưa tới 30 phút. Hoàn toàn KHÔNG cần bằng kỹ sư Máy học. Tôi dám bảo lãnh (Guarantee) điều này bằng danh dự và kinh nghiệm thực chiến của mình, đây không phải là những lời chém gió truyền cảm hứng.',
    outcomes: {
      cam: [
        'Một "Hộp đen" (Vector DB) được nạp đầy đủ hơn 100+ File Tài liệu Nội bộ công ty (Sổ tay, Quy định, Biểu mẫu), đã được AI lập chỉ mục (Index) sẵn sàng tra cứu.',
        'Một Agent Tra cứu Thông minh: Trả lời mượt mà, rành mạch, và CỰC KỲ QUAN TRỌNG: Mọi câu chữ đều có đính kèm Link Trích Nguồn (Citation) rõ ràng về File/Trang gốc.',
        'Đạt tỷ lệ Chính xác (Accuracy) >= 95% khi Test thử áp lực (Stress-test) trên tập 30 Câu hỏi FAQ siêu hóc búa của Nhân sự.',
      ],
      tuduy: [
        'Thấu hiểu 2 Khái niệm Nền móng của RAG: Chuyển hóa Tài liệu (Embedding/Chunking) và Thuật toán Tìm kiếm theo Ngữ nghĩa (Semantic Search).',
        'Tư duy Tối ưu hóa Tìm kiếm: Kết hợp linh hoạt giữa Tìm kiếm theo Nghĩa (Semantic) và Tìm kiếm Từ khóa truyền thống (Keyword-based) — Hai phương pháp này bù trừ khiếm khuyết cho nhau (Hybrid search).',
        'Luật Bất thành văn: KHÔNG TRÍCH NGUỒN (No Citation) = HỦY BỎ (No Go). Không bao giờ được phép Triển khai (Deploy) một Bot Tư vấn Luật nội bộ mà không có chức năng Trích dẫn nguồn.',
      ],
    },
    steps: [
      { title: 'Khởi tạo Cấu trúc Kho Vector (Setup Vector DB — Dùng Pinecone/Chroma Free)',  xp: 80,  desc: 'Đăng ký tài khoản Pinecone (Tier Free) → Cấu hình tạo Index lưu trữ. Hoặc anh/chị có thể cài Chroma DB chạy Local (trên máy). Cả 2 cách bản Free đều dư sức cân mảng tài liệu HR.' },
      { title: 'Bơm Dữ liệu & Băm nhỏ Tài liệu Cty (Upload & Chunking)',          xp: 100, desc: 'Quét các tệp PDF/DOCX/Markdown → Cấu hình cho AI băm nhỏ (Chunk) ra thành các đoạn 500-tokens → Chạy thuật toán Embedding → Bơm thẳng vào Index. Đoạn này AI Code tự động 100%, anh/chị chỉ việc Paste Prompt.' },
      { title: 'Build hoàn chỉnh RAG Agent + Test "ép xung" 30 Câu hỏi',            xp: 120, desc: 'Thiết lập Agent chạy luồng: Tiếp nhận Query → Lặn tìm Retrieve data → Phục hồi (Generate) Câu trả lời kèm Citation. Chạy Test 30 câu hỏi khoai nhất để xem "Chất lượng" tới đâu.' },
      { title: 'Đo lường Độ chính xác (Accuracy) & Tỷ lệ Ảo giác (Hallucination Rate)',          xp: 80,  desc: 'Lập bảng so sánh Benchmark: Dùng AI chạy luồng RAG vs Chạy luồng thường (No-RAG). Target (Mục tiêu) bắt buộc Tỷ lệ Accuracy ≥ 95%. Chạy ra số liệu đẹp (Metric tốt) là có thứ để báo cáo Sếp ngay.' },
      { title: 'Đưa vào Vận hành (Production): Helpdesk Bot 24/7 Dùng sức mạnh RAG',    xp: 150, desc: 'Connect Bot này thẳng vào Zalo OA Cty. Nửa đêm nhân viên nhắn tin hỏi về Mức hưởng BHXH hay Quy chế OT → Bot check kho RAG tự động Rep rành mạch kèm Trích dẫn. Nhân sự an giấc, Bot thức làm việc.' },
    ],
  },

  12: {
    week: 'PRO · TUẦN 12', duration: '120 phút',
    title: 'Tuần 12 (Pro) — Đánh giá Hiệu suất AI (Auto-Eval): Định lượng bằng Con số, nói không với Cảm tính',
    sub: 'Chấm dứt thời kỳ anh/chị nhìn lướt qua kết quả của AI rồi gật gù: "Nó chạy có vẻ ổn đấy". Tuần này, chúng ta sẽ xây dựng một Hệ thống "Chấm điểm chéo" (Eval Framework) bài bản — Đo lường Tỷ lệ Chính xác, Đo lường Chi phí ($), Đo lường Tỷ lệ Bịa chuyện (Hallucination), và Đo lường sự Ổn định của Tone of Voice. Tư duy làm việc cảm tính (Gut-feeling) là câu chuyện của buổi trà chiều. Làm HR Tech là phải nói chuyện bằng Số liệu (Data-driven).',
    principle: { num: 12, name: 'Đánh giá chất lượng AI bằng Số liệu (Auto-Evaluation)' },
    hints: [
      'Giữa Agent Phiên bản V1 và V2 — Anh/chị sẽ vĩnh viễn mù mờ không biết con nào xịn hơn nếu thiếu đi Thước đo (Benchmark).',
      'Giải pháp: Build một "Ngân hàng Đề thi" (Test set) gồm 30-40 tình huống hóc búa có sẵn Đáp án chuẩn (Ground truth) → Cho AI tự động chạy và tự động Chấm điểm (Auto-grade).',
      'Các chỉ số cốt lõi: Tỷ lệ Pass rate, Độ chính xác (Accuracy), Độ trễ (Latency), và Chi phí API (Cost). "Đo lường" (Measurement) là cội nguồn của mọi sự "Tối ưu" (Optimization).',
    ],
    revealMsg: 'Chỉ khi Đo lường được, chúng ta mới Cải thiện được. Không đo đếm thì tất cả chỉ là Đoán mò. Đây là Tư duy Kỹ thuật Phần mềm (Software Engineering Mindset) chính hiệu — Và thực chất, nó cũng là hệ tư duy lõi của mọi công việc Quản trị (Management) muốn tiến lên đẳng cấp Professional.',
    layers: [
      { name: 'Là cái gì', text: 'Bộ công cụ Auto-Eval (Tự động Đánh giá) bản chất là một tập hợp các Kịch bản kiểm thử (Test cases). Mỗi kịch bản quy định rõ Input Đầu vào và Output Đáp án kỳ vọng. Cứ mỗi lần anh/chị chỉnh sửa file Prompt, hệ thống sẽ tự động bắt AI chạy lại toàn bộ tập Test này, sau đó dùng chính 1 con AI khác làm "Giám khảo" chấm điểm, cuối cùng nhả ra 1 file Báo cáo Score (Điểm số). Về mặt Hệ thống (Architecture) thì siêu đơn giản, nhưng để Viết ra được Ngân hàng đề thi (Test cases) ban đầu thì cần sự Tỉ mỉ và Kỳ công của HR.' },
      { name: 'Vì sao trúng', text: 'Khi anh/chị hí hoáy sửa 1 câu lệnh (Prompt), chạy lại Bộ Eval, Bảng Dashboard sẽ nhảy số báo ngay kết quả Xanh (Tốt lên) hay Đỏ (Tệ đi). TUYỆT ĐỐI chấm dứt ngôn từ "Hình như có vẻ ổn hơn". Cụm từ "Có vẻ" (It seems) là cụm từ Gây ám ảnh nhất trong quá trình phát triển Sản phẩm — Vì nó thiếu Vắng sự Bảo chứng của Dữ liệu (Evidence-based).' },
      { name: 'Khi nào đừng dùng', text: 'Quá trình "Nặn" ra được 1 Bộ Eval Test 50 tình huống chuẩn chỉnh tốn của anh/chị ít nhất 1 Ngày làm việc Full-time. Do đó, CHỈ NÊN Build Eval khi hệ thống AI của anh/chị đã Go-live (Chạy thực tế) và có nhu cầu Cải thiện Update liên tục. Ở giai đoạn đầu còn đang Mò mẫm tìm hướng đi (Prototyping), đừng vội đâm đầu vào làm Eval. Tối ưu đo lường quá sớm (Premature optimization) là sự lãng phí tài nguyên vô nghĩa.' },
    ],
    lanVoice: 'Đây chính là lỗ hổng tư duy Trầm trọng nhất mà 95% những người học build AI ngoài kia đang mắc phải — Họ chỉ biết "Cảm" (Feel) chứ không biết "Đo" (Measure). Danh xưng "Master" định nghĩa ở việc anh/chị phải Đo lường được (Measurable), Tối ưu được (Optimizable), và Giải trình được (Explainable). Nếu Giám đốc hỏi: "Phiên bản AI Prompt V2 này có gì Tốt hơn bản V1?" → Anh/chị phải chìa Bảng số liệu ra, chứ không thể trả lời "Em cảm thấy văn phong nó tự nhiên hơn Sếp ạ."',
    outcomes: {
      cam: [
        'Sở hữu "Ngân hàng Đề thi Eval" chứa 50 Kịch bản Test chuẩn mực — Đủ sức Cover (Bao phủ) mọi ngóc ngách của các loại Câu hỏi/Tình huống.',
        'Thiết lập Trận "So găng" (A/B Testing) giữa 2 Phiên bản Prompt khác nhau → Phân định Thắng/Thua cực kỳ minh bạch bằng Bảng chỉ số (Metrics).',
        'Một bảng Dashboard Live Tracking hiệu năng (Performance) hệ thống chạy theo Trục thời gian.',
      ],
      tuduy: [
        'Nắm bắt quy trình "Thử nghiệm Dẫn dắt Phát triển" (Test-Driven Development) — Tư duy Tối cao của giới Lập trình viên quốc tế.',
        'Set chuẩn KPI: Tỷ lệ AI Ảo giác (Hallucination) phải được kiểm soát dưới < 5%. Nếu vọt qua mốc này = Phải Roll-back (Gỡ lỗi) khẩn cấp.',
        'Quản trị Chi phí: Đo đếm chính xác Tiền API phải trả cho từng Câu hỏi (Query). Không đo được Cost = Không có cơ sở để Scale-up (Nhân bản) hệ thống ra diện rộng.',
      ],
    },
    steps: [
      { title: 'Xây dựng Tập dữ liệu 50 Test Cases có Đáp án Chuẩn (Ground Truth)',     xp: 100, desc: 'Thiết lập file CSV chứa: Input (Câu hỏi/Data vào) + Expected Output (Đầu ra kỳ vọng) + Pass Criteria (Tiêu chí chấm điểm). Bỏ ra 1 Ngày mài rìu, hưởng thành quả Auto-check cả năm.' },
      { title: 'Thiết lập Bộ máy Chấm Tự động (Dùng AI Chấm AI - LLM-as-a-Judge)',    xp: 100, desc: 'Setup 1 "AI Reviewer" chuyên đóng vai Giám khảo. Nó sẽ Run các Eval → Phân tích và nhả ra file Báo cáo chấm điểm định dạng JSON. Khái niệm 1 con AI đi chấm thi 1 con AI khác — Nghe hơi Inception (Viễn tưởng), nhưng thực tế nó hoạt động Cực kỳ Chuẩn xác (Work perfectly).' },
      { title: 'So găng A/B Test 2 Prompts → Lựa chọn Phiên bản Tối ưu',        xp: 120, desc: 'Chạy đọ sức: Prompt v1 (Bản cũ) vs Prompt v2 (Bản mới) → Đẩy qua bộ Eval → Con nào đạt Pass rate cao hơn thì chọn (Winner). Ra quyết định hoàn toàn bằng Dữ liệu Số.' },
      { title: 'Dashboard Tracking Lịch sử Đánh giá (Eval Timeline)',          xp: 80,  desc: 'Mỗi lần Commit thay đổi Agent → Kích hoạt Run Eval → Ghi Log → Vẽ Chart (Biểu đồ). Theo sát độ "Khôn" của AI y hệt như việc anh/chị theo dõi Biểu đồ Cân nặng khi tập Gym.' },
      { title: 'Lắp Hệ thống "Còi báo động" Bịa chuyện (Hallucination Detector)',                  xp: 100, desc: 'Bất cứ khi nào Agent trả lời 1 nội dung KHÔNG HỀ TỒN TẠI trong kho Source (Tài liệu gốc) → Hệ thống tự động Cắm cờ Flag đỏ (Auto-flag). Mọi hành vi "Bịa data" đều bị bóc mẽ và chặn đứng ngay lập tức.' },
    ],
  },

  13: {
    week: 'PRO · TUẦN 13', duration: '120 phút',
    title: 'Tuần 13 (Pro) — Tối ưu hóa Chi phí API (Cắt giảm 60-70% ngân sách)',
    sub: 'Khi triển khai cho Khóa học đầu tiên (Cohort 1), chi phí API chỉ loanh quanh khoảng $100. Nhưng khi Hệ thống Scale (Nhân bản) lên phục vụ cho Doanh nghiệp có 100-500 nhân sự, chi phí có thể bốc hơi $300-$400/tháng nếu anh/chị code cẩu thả. Tuần này chúng ta sẽ áp dụng các "Thủ thuật Bóp Ngân sách" (Cost Reduction) để ép chi phí vận hành rớt xuống dưới mốc $100 — Chỉ thông qua 3 Tuyệt chiêu kỹ thuật cực kỳ Tinh gọn.',
    principle: { num: 13, name: 'Tối ưu hóa Tiền máy (Cost Optimization)' },
    hints: [
      'Tuyệt kỹ Caching (Lưu bộ nhớ tạm): Chỉ tính tiền phần biến đổi (Dynamic), cất kín phần lệnh tĩnh (Static Prompt) — Mẹo này cắt giảm một mớ tiền to.',
      'Quy tắc Routing (Phân luồng Máy): Việc cỏn con thì dùng Model "Size S" (Haiku/Flash), Việc hóc búa mới xài Model "Size XL" (Opus/Pro). Đừng mang Dao mổ Trâu đi giết Gà.',
      'Tuyệt kỹ Gom Lô (Batching): Gom 10 Câu hỏi/Task lại thành 1 cục rồi gửi Call API 1 lần — Phương pháp này giúp triệt tiêu phần Chi phí lãng phí rườm rà.',
    ],
    revealMsg: 'Khống chế được Chi phí API (Cost control) = Nắm chắc tấm vé Scale-up (Nhân bản diện rộng). Chân lý của Master là: Phục vụ hàng Ngàn lượt truy vấn (Queries) mỗi ngày nhưng chỉ tốn Ngân sách bằng với phục vụ 100 queries. Nghe cứ như có Phép thuật (Magic), nhưng nó hoàn toàn là Nghệ thuật Kỹ thuật (Technical Art).',
    layers: [
      { name: 'Là cái gì', text: 'Gói gọn trong 3 Kỹ thuật: Một là Prompt Caching (Lưu tĩnh bộ lệnh gốc) — Phần được lưu trữ này chỉ bị Charge (Tính tiền) bằng 1/10 giá gốc. Hai là Model Routing (Phân luồng thông minh) — Đẩy task khó cho máy lớn, task dễ cho máy nhỏ (Máy nhỏ Haiku có giá cước rẻ hơn máy lớn Sonnet tới 12 lần). Ba là Batch API (Xử lý theo Lô) — Nếu Task không yêu cầu xử lý Gấp (Delay 24h được), gom cục lại chạy Batch sẽ được Discount 50% chi phí. Phối hợp cả 3 Đòn đánh này, Hóa đơn API rụng lả tả.' },
      { name: 'Vì sao trúng', text: 'Áp dụng Caching thì giá rẻ gấp 10. Chọn đúng Size Máy thì tiết kiệm gấp 12 lần cho các task Admin nhỏ lẻ. Gom Lô (Batch) thì Auto giảm thêm 50%. Khi anh/chị nhìn thấy Bảng Dashboard Cost rớt xuống những con số Đẹp như mơ, anh/chị sẽ tự Trách mình sao không đi Tối ưu (Optimize) việc này sớm hơn. NHƯNG, Đừng hối hận — Nếu hệ thống chưa có User thật, chưa đi Scale, thì việc Tối ưu Cost là vô nghĩa.' },
      { name: 'Khi nào đừng dùng', text: 'Lao vào Tối ưu hóa Cost quá Sớm (Premature optimization) là hành động đốt thời gian vô ích. Hãy cứ bung xõa cho đến khi Sản phẩm (Agent) của anh/chị đạt mốc 30 Người dùng thật (Active users) rồi hẵng nghĩ đến việc bóp Cost. Ưu tiên số 1 giai đoạn đầu phải luôn là Chất lượng (Quality & Accuracy). Việc ngồi hì hục Tối ưu Cost API cho 1 Hệ thống mới có lèo tèo 10 User dùng thử giống hệt như câu chuyện: Một thanh niên cao 1m60 nặng 50kg nhưng cứ khăng khăng đòi đăng ký liệu trình Giảm cân vậy — Rất vô lý.' },
    ],
    lanVoice: 'Thực ra, chỉ khi anh/chị đưa hệ thống đi Scale phục vụ số đông (Mass deployment) thì mới thực sự bị "Bỏng tay" vì bài toán Cost API. Nhưng học trước Tư duy tối ưu này để khi Scale không bị cuống. Để Tình trạng cuống xảy ra lúc cuối thì rất Lúng túng (Messy), còn Học trước thì luôn Giữ được sự Điềm tĩnh (Calmness) của người làm Master.',
    outcomes: {
      cam: [
        'Một Dashboard "Cost Tracking" Live Tracking từng đồng API bị đốt bởi từng Sub-agent, vẽ biểu đồ theo thời gian thực (Time-series).',
        'Một hệ thống đã được Bật tính năng Caching (Cất phần lệnh tĩnh) — Có biểu đồ hiển thị rõ Tỷ lệ Cache Hit Rate (Đo lường độ hiệu quả).',
        'Thiết lập thành công Logic "Phân luồng 3 Tầng Máy" (3-Tier Routing) siêu thông minh.',
      ],
      tuduy: [
        'Chỉ số KPI: Tỷ lệ Cache Hit Rate (Bắt dính dữ liệu lưu tạm) phải duy trì ở mốc > 70% thì mới gọi là Đạt chuẩn (Good).',
        'Target (Mục tiêu): Ép chi phí duy trì trên mỗi Đầu User (Per-student cost) xuống ngưỡng dưới < $5/Tháng là Cực kỳ Tối ưu.',
        'Tư duy Delay (Hoãn binh): Tác vụ nào KHÔNG yêu cầu Real-time (Gấp gáp) → Bắt buộc đẩy vào cơ chế Gom Lô (Batching) để tối đa hoá Tiết kiệm.',
      ],
    },
    steps: [
      { title: 'Cấu hình Prompt Caching (Đặc quyền của hệ sinh thái Anthropic)', xp: 80,  desc: 'Đóng gói (Cache) đoạn System Prompt khổng lồ + Nội dung Bài học vào Bộ nhớ. Sau 3 ngày chạy thử, tiến hành Đo lường chỉ số Cache Hit Rate (Tỷ lệ bắt dính cache).' },
      { title: 'Lập trình Routing Đa Tầng (3-Tier Model Routing)',          xp: 100, desc: 'Định nghĩa Logic: Task dễ (Easy) → Đẩy cho Haiku/Flash xử lý. Task trung bình (Medium) → Đẩy cho Sonnet cân. Task Phân tích Sâu (Hard) → Điều phối cho Opus/Pro. Phân quyền cấp độ Máy rõ ràng.' },
      { title: 'Cấu hình Batch API cho Tác vụ Nền (Background Tasks)',        xp: 90,  desc: 'Đẩy các Task kiểu như: Chạy Compliance Scanner, Chạy Báo cáo Tuần (Weekly Report) → Vào hàng đợi Batch chờ 24h chạy 1 lần. Chỗ này là chỗ tiết kiệm "Tiền tươi thóc thật" rõ rệt nhất.' },
      { title: 'Build Dashboard Cảnh báo Chi phí Real-time',                   xp: 100, desc: 'Kết nối hạ tầng BigQuery + Looker Studio. Tracking cực sâu: Burn-rate (Tốc độ đốt tiền) cho từng User, từng Sub-agent. Số liệu trong vắt như pha lê.' },
      { title: 'Báo cáo "Bản thành tích Tối ưu 70% Ngân sách"',                xp: 80,  desc: 'Đóng gói Báo cáo Before/After về Cost đưa lên mặt Sếp. Chứng minh được năng lực Kiểm soát Ngân sách khi Scale. Sếp gật đầu cái rụp, duyệt luôn thêm Budget (Ngân sách) Quý tới.' },
    ],
  },

  14: {
    week: 'PRO · TUẦN 14', duration: '120 phút',
    title: 'Tuần 14 (Pro) — Mở khóa Đa phương thức (Multimodal): Lắp "Mắt, Tai, Miệng" cho AI',
    sub: 'Nâng cấp Agent của anh/chị thoát khỏi thế giới "Chỉ biết đọc chữ Text". Giờ đây, AI đã được khai nhãn "Có Mắt để Nhìn, Có Tai để Nghe, Có Miệng để Nói". Dù ứng viên có chụp ảnh CV bằng Điện thoại xiêu vẹo mờ ảo, AI vẫn đọc (Scan) mượt mà. Ứng viên tham gia Phỏng vấn Video qua Zoom, AI tự động "Nghe" ghi âm, bóc băng (Transcribe) và tóm tắt rành mạch. Agent lúc này sở hữu trọn bộ 3 Giác quan cốt lõi — Hoàn mỹ đến mức chỉ thiếu mỗi cái Nồi cơm điện.',
    principle: { num: 14, name: 'Xử lý Đa phương thức (Multimodal AI)' },
    hints: [
      'Agent giờ đây sở hữu "Thị giác" (Vision) & "Thính giác" (Audio) — Năng lực phân tích Ảnh chụp, Video clips, và Tệp Ghi âm.',
      'Ứng dụng "Mắt": Trích xuất (Extract) data từ CV dạng Ảnh Scan, Quét Hợp đồng giấy, Đọc Data từ Ảnh thẻ CCCD.',
      'Ứng dụng "Miệng": Cấu hình Voicebot tự động Call (Gọi điện) Xác thực thông tin ứng viên vòng Sơ loại, hoặc Tự động Call Reference Check (Xác minh qua Người tham chiếu).',
    ],
    revealMsg: 'Lắp thành công bộ 3 Giác quan này, AI Agent của anh/chị đã chạm mốc mô phỏng con người lên tới 80%. Khả năng Đọc hiểu, Lắng nghe, Nói chuyện, và Quan sát — Tất cả đều đã được tự động hóa. Phần Trí tuệ 20% cốt lõi còn lại, chúng ta phải giữ lại cho Human (Con người) — Nếu không, cả Làng HR chúng ta chuẩn bị hồ sơ đi xin Việc khác là vừa.',
    layers: [
      { name: 'Là cái gì', text: 'Hệ thống tích hợp: Một Engine AI Vision (Phân tích Ảnh → Bóc chữ), Một Engine Speech-to-Text (Nghe Âm thanh → Bóc băng Chữ), và Một Engine Text-to-Speech (Đọc Chữ → Phát Âm thanh giọng người thật). Gom 3 cái Engine này hòa trộn cùng "Não bộ" (LLMs) xử lý Text truyền thống → Ta có khái niệm AI Đa phương thức (Multimodal). Nghe thuật ngữ Kỹ thuật dài ngoằng, nhưng lúc vào IDE Setup thực chiến, chỉ tóm gọn bằng vài thao tác Click chuột & Paste Config.' },
      { name: 'Vì sao trúng', text: 'Kho dữ liệu của phòng HR phần lớn là nhóm Dữ liệu Phi cấu trúc (Unstructured data) và KHÔNG PHẢI LÀ CHỮ TEXT MÁY TÍNH: Hàng lố CV dạng Scan PDF/Ảnh JPG, Ảnh chụp Thẻ CCCD, Hàng trăm Giờ Ghi âm/Video Phỏng vấn Zoom. Khi lắp bộ Giác quan Multimodal vào, anh/chị chính thức "Unlock" (Mở khóa) toàn bộ kho báu Data khổng lồ này. Những tài liệu nằm bám bụi (Idle) trong Google Drive hàng năm trời, nay bỗng dưng trở thành Nguồn tài nguyên có thể Query (Truy vấn) và Phân tích được.' },
      { name: 'Khi nào đừng dùng', text: 'Lưu ý Chí mạng: Cước phí API cho "Mắt" (Vision) và "Tai" (Audio) đắt đỏ hơn việc Xử lý "Chữ" (Text) truyền thống từ 5 đến 10 LẦN. NGUYÊN TẮC: Chỉ kích hoạt Multimodal khi Text thông thường "Bất lực". Rất nhiều (Đa số) các quy trình HR vẫn chỉ cần giao tiếp bằng Text là đủ. Đừng mắc bệnh "Bị nghiện Công nghệ" — Cái gì cũng lôi "Mắt/Tai" ra phân tích trong khi không cần thiết, đốt Tiền API lãng phí vô ích.' },
    ],
    lanVoice: 'Tính năng Voice Agent (Gọi điện xác thực ứng viên) là một thứ "Vũ khí tạo Wow" (Wow-factor) cực kỳ mạnh mẽ, gây ấn tượng cực sâu với ứng viên. TUY NHIÊN, có một Lằn ranh Đỏ (Red line) về Pháp lý tại Việt Nam: Luật Bảo vệ Quyền riêng tư quy định Việc Ghi âm cuộc gọi BẮT BUỘC phải được Cảnh báo & Xin phép (Consent) TRƯỚC. Phải nói rõ "Cuộc gọi này sẽ được AI ghi âm..." rồi mới tiến hành trao đổi. Đừng bao giờ làm ngược lại (Gọi xong mới báo) — Vi phạm Pháp luật đấy.',
    outcomes: {
      cam: [
        'Trình làng 1 "Agent Mắt thần" (Vision Agent) Đọc và Trích xuất mượt mà 100+ CV định dạng Scan/Ảnh JPG không sót 1 chữ.',
        'Trình làng 1 "Agent Call Center" (Voice Agent) Thực hiện các cuộc gọi Xác thực tự động cho 5 Ứng viên thật (Real phone calls).',
        'Trình làng 1 "Agent Phân tích Video" (Video Analyzer) Xử lý toàn bộ Record Zoom phỏng vấn — Bóc băng (Transcribe) Lời thoại + Phân tích cả Biểu cảm/Cảm xúc (Sentiment) của Ứng viên.',
      ],
      tuduy: [
        'Khai thông "Kiến trúc Đa phương thức" (Multimodal Pipeline) — Nghệ thuật kết hợp luân phiên giữa 3 loại Giác quan để xử lý 1 Task hóc búa.',
        'Tư duy "Cân đối Ngân sách" (Cost-benefit Analysis): Phân tích Rõ ràng bài toán nào cần dùng Vision (Ảnh), bài toán nào dùng Text OCR truyền thống là đủ — Ra quyết định bằng Data Cost.',
        'Cập nhật Kiến thức Pháp chế Tuân thủ Ghi âm (Audio Compliance VN): Thu thập Consent (Sự đồng ý) báo trước, và Quy trình Hủy file (Delete) hợp pháp. Không có chuyện Lươn lẹo luật pháp.',
      ],
    },
    steps: [
      { title: 'Setup Vision Agent — "Máy đọc" CV Scan Ảnh',          xp: 120, desc: 'Tích hợp Gemini Vision Pro: Nhận Input là Ảnh chụp CV → Output trả về đúng cấu trúc Schema JSON trích xuất data. Test ép xung với 30 CV Scan thực tế. Kể cả ảnh chụp bị méo góc, thiếu sáng, Agent vẫn "Dịch" được.' },
      { title: 'Setup Voice Agent — "Call Center" Xác thực ứng viên',              xp: 150, desc: 'Tích hợp nền tảng Twilio (Viễn thông) + Gemini Voice. Lên kịch bản: Tự động Call số điện thoại → Hỏi 3 Câu Screening chuẩn mực → Record Ghi âm → Bóc băng (Transcribe) tóm tắt nộp lại hệ thống. Tạo trải nghiệm "Ngạc nhiên thú vị" cho ứng viên.' },
      { title: 'Setup Video PV Analyzer — Phân tích Buổi Phỏng Vấn',                      xp: 130, desc: 'Feed (Nạp) File Video Recording từ Zoom vào hệ thống → Tự động Bóc băng (Transcribe) Dialog + Đánh giá Sentiment (Cảm xúc ứng viên) + Cắt (Highlight) các Khoảnh khắc chốt (Key moments). Giải phóng anh/chị khỏi cảnh phải ngồi cày lại 30-40 Phút video.' },
      { title: 'Setup ID Card Validator — Xác thực CCCD AI',                      xp: 90,  desc: 'Dùng Vision quét Ảnh CCCD của NV → Tự động Check chéo (Cross-match) với Data trên Form lưu trữ HRIS + Cảnh báo các Điểm bất thường (Check Fake ID/PTS). Dữ liệu mà "Lệch pha" là tự động Flag Cờ Đỏ liền.' },
      { title: 'Hoàn thiện Pháp lý Ghi âm Voice (Chuẩn Việt Nam)',    xp: 60,  desc: 'Thiết lập luồng Thông báo Bắt buộc (Consent Warning) trước khi Record cuộc gọi, và Cơ chế Cronjob tự động Xóa (Auto-delete) File MP3 sau 30 ngày. Tuân thủ 100% Nghị định 13. Làm nghề HR là phải Chuẩn chỉ, Tuyệt đối không lươn lẹo.' },
    ],
  },

  15: {
    week: 'PRO · TUẦN 15', duration: '120 phút',
    title: 'Tuần 15 (Pro) — Vận hành AI & Tracking Health: Xây nhà thì Dễ, Nuôi nhà mới Khó',
    sub: 'Sản phẩm AI "Chạy thử (Demo)" thì mượt, nhưng mang ra "Chạy thật (Production)" là một câu chuyện hoàn toàn khác. Anh/chị phải Nắm bắt được (Monitoring): Hệ thống Đứt gãy ở đâu, Tại sao lại Đứt, và Sửa chữa Tốc tốc trước cả khi Người dùng (User/Sếp) kịp lên tiếng phàn nàn. Xây một Agent thì dễ ợt, Nuôi dưỡng & Vận hành nó ổn định qua năm tháng mới là đẳng cấp của một Master.',
    principle: { num: 15, name: 'Vận hành Sản phẩm (AI Operations / MLOps)' },
    hints: [
      'MỌI LẦN Agent khởi chạy (Run) ĐỀU PHẢI được Ghi chép (Logging) Tường tận vào hệ thống: Input nạp gì, Output ra sao, Độ trễ (Latency) mấy giây, Tiêu hết mấy đồng (Cost).',
      'Thiết lập Hệ thống Còi báo động (Alerting): Ngay khi Tỷ lệ Lỗi (Error Rate) vượt ngưỡng Vạch Đỏ 5% → Bot Telegram sẽ Rú còi réo tên anh/chị ngay trong đêm.',
      'Bản Cam kết Chất lượng Dịch vụ (SLA - Service Level Agreement): Đưa ra Cam kết Uptime hệ thống đạt 99.5% thời gian — Chìa cái Report này ra, Sếp nào mà không bị Thuyết phục?',
    ],
    revealMsg: 'Khái niệm MASTER (Bậc Thầy) không nằm ở khả năng "Code ra Sản phẩm", mà nằm ở năng lực "Vận hành Sản phẩm ổn định" (Operations/MLOps). Xây (Build) thì rất Dễ, Nuôi (Operate) mới cực kỳ Khó. Tôi xin lặp lại Câu châm ngôn này thêm 1 lần nữa, bởi vì nó là Toàn bộ Trái tim & Xương sống của Tuần 15 này.',
    layers: [
      { name: 'Là cái gì', text: 'Theo dõi Sức khoẻ Hệ thống (Tracking Health) là quá trình anh/chị Nắm trong Lòng bàn tay (Full Visibility) MỌI CHỈ SỐ về "Đứa con AI" đang chạy Live. Áp dụng kỹ thuật Bám vết (Tracing) cho từng câu lệnh (Call), Ghi Sổ Nhật ký (Structured Logging) theo cấu trúc chuẩn, và Tự động Bắn Thông báo Khẩn (Alert) khi có Tín hiệu lạ (Anomalies). Ở các Khóa học ngoài kia, người ta dạy Dựng Agent xong là "Đem con bỏ chợ". Ở khóa của chúng ta, Dựng xong là Bắt đầu Hành trình "Nuôi nấng" — Giống hệt như cách anh/chị Chăm sóc một chậu cây Bonsai đắt tiền.' },
      { name: 'Vì sao trúng', text: 'Đã "Chạy Thật" (Go-Live) là BẮT BUỘC sẽ có Bugs (Sự cố). Nếu không Cài đặt Hệ thống Theo dõi (Monitoring), anh/chị sẽ rơi vào cảnh: Sửa mò (Blind-fix), Sửa cực lâu (Time-consuming), và Sửa Sai bệnh. Ngược lại, nếu có Hệ thống Monitoring, anh/chị sẽ fix tận Gốc rễ (Root-cause) của sự cố chỉ trong vỏn vẹn 5 phút. Khoảnh khắc mà File Log tự động Réo thông báo: "Hệ thống sập nguyên nhân do Lỗi Data X" — Đó chính là khoảnh khắc anh/chị Nhận ra mình đã Chính thức "Lên Level" Quản trị Hệ thống.' },
      { name: 'Khi nào đừng dùng', text: 'Lưu ý rạch ròi: Với các Sản phẩm chỉ chạy "Bản Nháp/Demo" (Prototype), KHÔNG CẦN tốn công Setup Monitoring (Cứ phớt lờ đi). Nhưng một khi Hệ thống đã gắn nhãn "Bản Chính thức/Production" (Đang phục vụ User/Có dòng Tiền) thì BẮT BUỘC phải có Monitoring 100%. Đừng bao giờ Lẫn lộn giữa Ranh giới Nháp (Demo) và Thật (Production) — Nhầm lẫn chỗ này là Dẫn tới "Vỡ Trận" Hệ thống.' },
    ],
    lanVoice: 'Đồng hành đến Tuần 15 và hoàn tất module này, nghĩa là anh/chị đã đủ năng lực đưa một Hệ thống AI Agent vào Vận hành Mức độ Production (Bản Chính thức Live) cho toàn Công ty. Nói một cách Thẳng thắn, không màu mè tâng bốc: Ở Thị trường Việt Nam hiện tại, Số lượng HR sở hữu năng lực ở Mức độ (Level) này đếm trên đầu ngón tay. Anh/chị đã bước vào Nhóm thiểu số (Top 1%) Dẫn đầu ngành HR Tech. Hãy tự hào về hành trình cực kỳ khó khăn mà anh/chị vừa vượt qua.',
    outcomes: {
      cam: [
        'Cơ chế Bám vết (Tracing) + Ghi Sổ Nhật ký (Structured Logging) hoạt động Hoàn hảo 100% cho mọi Transaction (Giao dịch) của Agent.',
        'Cấu hình Telegram Còi báo động (Alert Bot) — Tự động Rú còi (Ping) ngay khi Tỷ lệ Lỗi (Error Rate) chạm mốc Cảnh báo 5%.',
        'Một Bảng Dashboard Đo Sức khoẻ Hệ thống (Health Dashboard) chạy Real-time: Giao diện Cực đẹp (Beautiful), Bố cục Tinh gọn (Clean), Data trong vắt.',
      ],
      tuduy: [
        'Nắm vững Tư duy Ghi Sổ Cấu trúc (Structured Logging — dạng JSON), Tuyệt đối Đoạn tuyệt với kiểu Ghi Sổ dạng Chữ thường lộn xộn (Unstructured Text) — Vì chữ thường thì không thể Search (Truy xuất) hay Lọc (Filter) data được.',
        'Phân luồng Cấp độ Báo động (Alert Levels): Chia rõ 3 Cấp — Khẩn cấp (Critical/P1), Cảnh báo (Warning/P2), Nhẹ (Info/P3). Tuyệt đối Đừng "Báo động rác" (Spam Alerts) cho mọi thứ lặt vặt.',
        'Thiết lập Cam kết Vận hành (SLA): Phải Định nghĩa rõ ràng Bộ Chỉ số (Metrics) thì mới Đo lường (Measure) và Cam kết được. Không có Định nghĩa = Không có SLA.',
      ],
    },
    steps: [
      { title: 'Setup Cơ chế Ghi Log Có Cấu trúc (Structured Logging)',     xp: 80,  desc: 'Chuẩn hóa Output Log ra định dạng JSON bao gồm: {timestamp, agent_id, input_payload, output_result, latency_ms, cost_usd, status_code}. Bảng Schema đầy đủ, Không thừa 1 trường, Không thiếu 1 Data.' },
      { title: 'Tích hợp Hệ thống Bám vết Trace Tracking (LangSmith / Helicone)',  xp: 100, desc: 'Gắn mã Trace_ID cho mỗi Phiên hội thoại (Conversation). Cho phép Debug (Gỡ lỗi) soi thấu suốt toàn bộ Flow logic chạy ngầm. Khi cần Khám nghiệm Tử thi (Postmortem) là có sẵn Đồ nghề (Tools) trong tay.' },
      { title: 'Setup Telegram Alert khi Bão Lỗi (Error Spike) ập đến',          xp: 90,  desc: 'Config Logic: Error Rate vọt > 5% trong Khung 5 Phút → Bắn Alert. Hoặc Độ trễ (Latency) delay > 10s → Bắn Alert. Nửa đêm Server Cty gặp sự cố, anh/chị là người Đầu tiên nắm thông tin.' },
      { title: 'Thiết kế Health Dashboard trên Looker Studio',          xp: 110, desc: 'Vẽ Biểu đồ Real-time Tracking: Uptime (Tỷ lệ hoạt động), Error rate, Tốc độ Đốt Cost (Burn-rate), Latency P95. Trình bày cái Dashboard này lên Màn hình Lớn cho Sếp xem, Sếp chỉ có Nể.' },
      { title: 'Mẫu Khám nghiệm Sự cố (Postmortem Template) & Báo cáo SLA',        xp: 80,  desc: 'Văn hóa Vận hành: Mỗi khi xảy ra Cố (Outage) → Bắt buộc viết 1 Bản Postmortem (1-pager). Cuối tháng → Tổng hợp xuất Báo cáo SLA Report trình Ban Giám Đốc. Sự "Chuyên nghiệp" (Professionalism) của Kỹ sư Hệ thống thể hiện Rõ nét nhất ở khúc này.' },
    ],
  },
};

// === SPECIALTY LANES — sau Pro Track, chọn 1 trong 5 lane chuyên sâu ===
const SPECIALTY = {
  TA: {
    name: 'Track Tuyển dụng Chuyên sâu (TA - Talent Acquisition Mastery)',
    duration: '4 tuần', icon: '🎯',
    desc: 'Thiết lập Hệ thống Săn đầu người (Headhunt) Tự động hóa quét 1.000 hồ sơ mỗi ngày. Tích hợp sâu API vào Phần mềm Quản trị Ứng viên (ATS) đang dùng của Công ty. Xây dựng một Sub-agent chuyên chăm sóc Thương hiệu Nhà tuyển dụng (Employer Branding). Sau 4 Tuần cày cuốc, anh/chị sẽ hóa thân thành "Thợ săn Nhân tài" (Top-tier Headhunter) chính hiệu.',
    weeks: [
      'Cỗ máy Săn Ứng viên Tự động (Auto-Sourcing Engine): Cào (Scrape) Data từ LinkedIn, TopCV, GitHub → Tự động sinh (Gen) InMail/Tin nhắn Chào mời Cá nhân hóa cao độ, công suất 1.000 Outreach/Ngày.',
      'Tích hợp 2 chiều Hệ thống ATS (ATS Integration): Connect thẳng Agent vào Greenhouse, Lever, Workday, hay Base E-hiring — Đồng bộ Dữ liệu Ứng viên (Sync-data) mượt mà cả 2 chiều (Đẩy/Kéo).',
      'Agent Chăm sóc Thương hiệu Nhà tuyển dụng (EB Sub-agent): Tự động lên Lên Ý tưởng (Brainstorm), Viết Bài PR (Blog Posts), Gen Content Đăng Mạng Xã hội (Social Media), và Nuôi dưỡng Điểm chạm Hành trình Ứng viên (Candidate Journey).',
      'Bài tập Cuối khóa (TA Capstone): Tự tay Dựng & Chạy thực tế (Deploy) một Dây chuyền "Sourcing → Screening → Onboarding" Hoàn chỉnh (End-to-End) cho 1 Vị trí Tuyển dụng THẬT đang Open tại Doanh nghiệp của anh/chị.',
    ],
  },
  CB: {
    name: 'Track Lương Thưởng & Phúc Lợi Chuyên sâu (C&B Mastery)',
    duration: '4 tuần', icon: '💰',
    desc: 'Khóa học được Co-teaching (Dạy đồng hành) cùng Chuyên gia Luật sư Doanh nghiệp. Build một "Agent Kiểm toán Lương" (Payroll Auditor) có khả năng Quét Đối chiếu (Cross-check) Data từ 3 Nguồn độc lập. Hệ thống tự động Generate Bảng Tổng Quyền lợi Cá nhân hóa (Total Rewards Statement) cho từng Nhân viên. Trợ lý AI Cố vấn Chính sách Luật BHXH 2026. Data Lương "Sạch" (Clean), HR C&B đêm về Ngủ Ngon giấc.',
    weeks: [
      'Agent Kiểm toán Lương 3 Nguồn (Tri-Source Payroll Auditor): Tự động quét Đối soát chéo (Reconciliation) giữa File Báo cáo BHXH, File Quyết toán Thuế TNCN (PIT), và File Bảng Lương Gốc (Master Payroll) — Bắt Lỗi lệch Data (Mismatch) trong 3s.',
      'Báo cáo Tổng Quyền lợi (Total Rewards Generator): Render tự động ra hàng trăm File PDF/HTML Báo cáo Tổng thu nhập & Phúc lợi (Total Rewards Statement) được Cá nhân hóa tới từng ngóc ngách cho mỗi Nhân sự.',
      'Hệ thống Cố vấn Tăng/Thưởng Lương (Compensation Advisor): Phân tích Data Đề xuất Tăng lương (Merit-increase) + Tự động Bóc tách/Cào Data Lương Thị trường (Market Benchmark) từ các Báo cáo của TopCV, VietnamWorks, Adecco.',
      'Bài tập Cuối khóa (C&B Capstone): Build hoàn chỉnh một "Compliance Agent" (Thanh tra Ảo) Quét tuân thủ Luật BHXH 2026 + Thực hành Thuyết trình/Bảo vệ Hệ thống trực tiếp cùng Luật sư Đối tác (Partner Lawyer).',
    ],
  },
  LD: {
    name: 'Track Đào tạo & Phát triển Chuyên sâu (L&D Mastery)',
    duration: '4 tuần', icon: '📚',
    desc: 'Tự động hóa thiết kế Lộ trình Đào tạo Cá nhân hóa (Personalized Learning Path) độ dài 6 Tháng. Triển khai Hệ thống Micro-learning (Học tập Siêu nhỏ) qua Zalo mỗi ngày. Cấu hình một "Gia sư AI" (AI Tutor) Kèm cặp Kỹ năng cứng (Hard-skills). Thiết lập một "HLV AI" (AI Coach) Định hướng cho Cấp Quản lý (Managers). Khái niệm "Đào tạo Cá nhân hóa Khóa học" (Hyper-personalized L&D) nay đã thành Hiện thực.',
    weeks: [
      'Agent Phân tích Khoảng trống Năng lực (Skill Gap Analyzer): Rà soát Data Đánh giá Năng lực (Competency Assessment) → Vẽ Biểu đồ Skill-gap Spider-web Radar (Lỗ hổng Năng lực) sắc nét cho Từng Cá nhân.',
      'Công cụ Lên Lộ trình Học 6 Tháng (6-Month Path Builder): Tự động Lên Syllabus (Lịch trình học) + Phân bổ Nội dung (Content) + Sinh (Gen) Bộ Đề Kiểm tra (Quizzes/Tests) bám sát Lỗ hổng Kỹ năng (Skill Gap) đã quét được.',
      'Hệ thống Micro-learning qua Zalo Bot (Zalo Micro-learning Delivery): Cấu hình Cronjob Bắn (Push) Nội dung Bài học ngắn (Bite-sized lesson) 5 Phút mỗi ngày qua Zalo — Định dạng Nội dung (Text/Audio/Video) tự động chuyển đổi theo "Gu" học tập của Từng người (Learning style).',
      'Bài tập Cuối khóa (L&D Capstone): Tự tay Build & Deploy nguyên 1 Hệ sinh thái Đào tạo (Learning Ecosystem) Phục vụ Xuyên suốt cho 1 Phòng Ban Nội bộ THẬT tại Công ty của anh/chị.',
    ],
  },
  HRBP: {
    name: 'Track Đối tác Nhân sự Chuyên sâu (HRBP Mastery)',
    duration: '4 tuần', icon: '📊',
    desc: 'Build "Agent Tiên tri" (Predictive Agent) có năng lực Dự báo sớm (Predict) Nhân sự có rủi ro Nghỉ việc (Turnover risk). Xây dựng Bảng Điều khiển Phân tích Nhân lực (Workforce Analytics Dashboard) toàn diện. Hệ thống Đánh giá Điểm Hiệu suất Quản lý (Manager Effectiveness Score). Agent Phân tích Dữ liệu Phỏng vấn Nghỉ việc (Exit Interview Analyzer). Data (Số liệu) sẽ Tự động Kể câu chuyện (Storytelling) cho anh/chị khi đi họp với Business.',
    weeks: [
      'Agent Tiên tri Rủi ro Nghỉ việc (Flight-risk Predictor): Áp dụng Mô hình Máy học (Machine Learning ML) Cấp độ Nhẹ → Phân tích các Chỉ báo (Red flags) → Dự báo sớm (Early Warning) Rủi ro Nghỉ việc trước 3-6 tháng.',
      'Dashboard Phân tích Nguồn Nhân lực (Workforce Analytics Dashboard): Tracking Data Real-time (Thời gian thực) về Biến động Headcount (Quân số), Quỹ lương (Payroll burn-rate), Cơ cấu Đa dạng (Diversity & Demographics).',
      'Hệ thống Chấm điểm Hiệu suất Quản lý (Manager Scorecard Generator): Tổng hợp Điểm Đánh giá từ Data Khảo sát Nhanh (Pulse Surveys), Tần suất họp 1:1 (1-on-1 Frequencies), và Chỉ số Cảm xúc Team (Team Sentiment Score) → Ra Report Điểm số.',
      'Bài tập Cuối khóa (HRBP Capstone): Thiết kế & Dựng (Build) hoàn thiện một Cấu trúc "Workforce Analytics Dashboard" (Bảng Phân tích Con người) Mức độ Production (Bản Chính thức Live) Bám sát Data THẬT của Công ty anh/chị.',
    ],
  },
  Ops: {
    name: 'Track Vận hành Nhân sự Chuyên sâu (HR Ops Mastery)',
    duration: '4 tuần', icon: '⚙️',
    desc: 'Xây dựng Hệ thống Trạm Hỗ trợ (Helpdesk) Hoạt động Đa kênh (Omni-channel) 24/7. Agent Phân luồng & Điều phối (Triage Agent) Xử lý Ticket (Yêu cầu). Nâng cấp Hệ thống Duyệt Đơn Nghỉ Phép (Leave Request v2) Tự động hóa Mức độ Cao cấp. Quản trị Mạng lưới Cựu Nhân viên (Alumni Network). Agent Đào xới Kho Tài liệu Nội bộ (Knowledge-base Miner). Phương châm: HR Ops Giải phóng Đôi tay, Nhẹ gánh Giấy tờ, Tập trung Vận hành.',
    weeks: [
      'Trung tâm Hỗ trợ Đa kênh (Omni-channel Helpdesk): Tích hợp (Integrate) luồng Support gom chung từ Zalo OA, Email Outlook/Gmail, Slack, Telegram về 1 Hub Quản lý Duy nhất.',
      'Agent Phân luồng Yêu cầu (Request Triage Agent): Đọc hiểu Nội dung Ticket → Phân loại (Categorize) Nhóm vấn đề → Tự động Phân phối (Route) Ticket về cho Đúng Tổ chuyên môn/Nhân sự phụ trách.',
      'Đơn Nghỉ Phép Tự Động Hóa Version 2 (Advanced Leave Request v2): Tích hợp Sâu (Deep Integration) với Core HRIS + Google Calendar + Slack → Khả năng cho phép Sếp (Manager) Bấm duyệt "Approve" chỉ bằng 1 Cú Click trực tiếp ngay trên App Chat (Slack/Zalo).',
      'Bài tập Cuối khóa (HR Ops Capstone): Tự tay Thiết kế, Lập trình (Build), và Triển khai (Deploy) 1 Trung tâm Dịch vụ Nhân sự Chia sẻ (HR Shared Services Center) Phục vụ trực tiếp cho tệp Quy mô 500 Nhân viên THẬT tại Công ty của anh/chị.',
    ],
  },
};

// === MASTER CAPSTONE — sau khi xong Pro Track + 1 Specialty ===
const MASTER = {
  title: 'Bài tập Tổng kết Trọng điểm (AI HR Master Capstone)',
  duration: '4-6 tuần',
  icon: '⭐',
  desc: 'Thử thách Cuối cùng (Final Challenge): Thiết kế, Lập trình (Build), và Triển khai (Deploy) MỘT Sản phẩm Công nghệ Nhân sự AI (AI HR Tech Product) Đạt chuẩn Production-level (Bản Chính thức Thương mại) Áp dụng vào DOANH NGHIỆP THẬT của anh/chị. Sản phẩm phải có Tệp User Phục vụ Thật, Phải Chứng minh được Tỷ suất Sinh lời (ROI/Impact) Bằng Số liệu Thật, và Phải được Sự phê duyệt (Buy-in) Áp dụng từ Ban Lãnh Đạo Công Ty. Sau đó, anh/chị sẽ Viết Bài Báo cáo Thực chứng (Case-study) Đăng tải Public, và Đứng Pitching (Thuyết trình) Sản phẩm trước Hàng trăm Chuyên gia tại một Sự kiện Nhân sự Quy mô lớn. Chạm tới Cột mốc này — Không còn Đỉnh núi nào cao hơn nữa.',
  requirements: [
    'Đã Hoàn tất & Pass 100% Chặng Foundation A & B (10 Buổi Lõi).',
    'Đã Hoàn tất & Pass 100% Chặng Pro Track (5 Buổi Nâng cao).',
    'Đã Tốt nghiệp Xuất sắc 1 Track Chuyên sâu (Specialty Lane - 4 Buổi).',
    'Đang Hold (Nắm giữ) và Vận hành ít nhất 1 Dự án (Project) AI HR THẬT tại Doanh nghiệp.',
  ],
  outcomes: [
    'Được Cấp phát Chứng chỉ Tối cao "AI HR Master" — Danh vị Uy tín và Đẳng cấp nhất của Toàn hệ thống.',
    'Vinh danh Case-study (Báo cáo Điển hình) Khắc tên Tác giả (Authorship) Trực tiếp trên Nền tảng Trang chủ Blog HR Builder VN.',
    'Cơ hội Trở thành Speaker (Diễn giả) Báo cáo Tham luận Độc lập tại các Sự kiện Nhóm Ngành Lớn (Vd: Vietnam HR Summit / The Makeover / VNHR Event).',
    'Được Mời Trở thành Mentor (Cố vấn Thực chiến) Đứng lớp cho các Cohort Khóa sau — Mức Thù lao Chi trả Khởi điểm từ 5.000.000đ - 10.000.000đ / Khóa.',
    'Đặc quyền Mở khóa: Gia nhập "Vòng tròn Master Nội bộ" (Master Inner Circle) — Cộng đồng Tinh hoa Quy tụ 30 Chuyên gia AI HR Master Thế hệ F1 Đầu tiên tại Thị trường Việt Nam.',
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
