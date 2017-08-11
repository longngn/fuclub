* Sau khi clone về, chạy **npm install** rồi **npm run build**
* Thư mục build chính là extension của mình, load thư mục build vào Chrome
* Mở New Tab ra, chờ 1-2s để extension lấy token
* Kiểm tra extension đã lấy token thành công chưa bằng cách mở console rồi gõ **document.cookie**
* Chạy **npm start** rồi mở localhost ra, đây sẽ là môi trường dev của chúng ta
* Tất nhiên localhost sẽ chưa hiện ra cái vẹo gì cả, ae cần copy **document.cookie** từ New Tab rồi paste vào **document.cookie** của localhost, nhớ copy từng cái một =))
```javascript
document.cookie = 'uid=12345xxxx'
document.cookie = 'accessToken=niof3080xxxxxxxxx'
```
* Kiếm tra lại **document.cookie** bên localhost, cái App bây giờ sẽ nên đang hiển thị :) Bây giờ thì chúng ta dev bình thường như dev một app React