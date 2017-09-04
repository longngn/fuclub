# Review 27-8

> Link download bản alpha : https://goo.gl/gBK1bY

> Về cơ bản nhóm đã hoàn thành sản phẩm ở mức tương đối so với bản Alpha

## Ưu điểm

- Giao diện trong sáng, dễ nhìn
- Hoạt động tương đối ổn định kể cả với mạng tốc độ thấp.
- Đầy đủ tính năng khi release bản alpha bao gồm:
    + Chatbox cho group
    + Trang tin tức

## Nhược điểm

- Thiếu icon cho app 
- Mỗi khi mở tab mới, app sẽ gửi lại request dẫn đến tốn bandwidth server, cần tìm cách khắc phục điều này.
- Chưa có khả năng hoạt động trong điều kiện offline 


## Góp ý và giải pháp khắc phục

- Improve giao diện chọn group lúc mới cài app
- Fix lại cột chọn group khi vào bên trong app, chỉ hiện thanh scroll khi số group vượt quá chiều dài màn hình, height của khối này đang không sát với viền dưới của chrome
- Cho phép người dùng chỉnh sửa danh sách group, hiện tại mới chỉ có xóa.
- Add thêm ảnh demo lên Chrome Store 
- Cache lại data vừa có tác dụng giảm tải cho server, còn có tác dụng làm data offline.
- Ngoài bài viết từ group thì nên thêm cho admin group tính năng viết thông báo để stick lên đầu khung tin. 
- Thêm tính năng notification cho app.