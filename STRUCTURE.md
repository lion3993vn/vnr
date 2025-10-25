# Cấu Trúc Trang Web Lịch Sử Kháng Chiến

## Tổng Quan
Trang web hiện bao gồm 3 phần nội dung chính về lịch sử kháng chiến chống thực dân Pháp:

### 1. Tình Hình Chung Sau Cách Mạng Tháng 8
**Component**: `PostRevolutionSection.tsx`
**Section ID**: `tinh-hinh-sau-cm`

**Cấu trúc layout:**
- Header với tiêu đề và mô tả
- Bối cảnh lịch sử với 2 cột (nội dung + mốc thời gian)
- 4 thẻ highlight về các thách thức chính:
  - Thách thức chính trị
  - Bối cảnh quốc tế  
  - Tình hình trong nước
  - An ninh quốc phòng
- 3 phần về nỗ lực xây dựng đất nước:
  - Xây dựng chính quyền
  - Phát triển kinh tế
  - Củng cố quốc phòng
- Timeline dạng zigzag cho các sự kiện quan trọng

**Nội dung cần điền vào:**
- `[Nội dung về thắng lợi của Cách mạng Tháng 8]`
- `[Nội dung về những khó khăn ban đầu của chính quyền mới]`
- `[Tháng 8/1945: Cách mạng Tháng 8 thành công]`
- `[Tháng 9/1945: Tuyên bố độc lập]`
- `[Các sự kiện quan trọng khác]`
- Các mô tả trong phần thách thức và nỗ lực
- Các timeline items

### 2. Chiến Dịch Biên Giới Thu - Đông 1950
**Component**: `BorderCampaignSection.tsx`
**Section ID**: `chien-dich-bien-gioi`

**Cấu trúc layout:**
- Header với tiêu đề và mô tả
- Bối cảnh chiến dịch với 2 cột (nội dung + thông tin chiến dịch)
- 4 thẻ điểm nổi bật:
  - Mục tiêu chiến dịch
  - Địa bàn tác chiến
  - Lực lượng tham gia
  - Kết quả đạt được
- 3 giai đoạn diễn biến chiến dịch
- 2 thẻ trận đánh tiêu biểu
- 3 phần ý nghĩa lịch sử:
  - Ý nghĩa quân sự
  - Ý nghĩa chính trị
  - Ý nghĩa lịch sử

**Nội dung cần điền vào:**
- `[Mô tả bối cảnh lịch sử dẫn đến chiến dịch]`
- `[Tình hình lực lượng hai bên và lý do phát động chiến dịch]`
- `[Từ ngày... đến ngày...]`
- `[Các tỉnh biên giới phía Bắc]`
- `[Tên các vị tư lệnh]`
- Mô tả các giai đoạn chiến dịch
- Thông tin các trận đánh
- Ý nghĩa của chiến dịch

### 3. Chiến Dịch Việt Bắc Thu Đông 1947
**Component**: `OverviewSection.tsx`, `TimelineSection.tsx`, `SignificanceSection.tsx`
**Section ID**: `tong-quan`, `dien-bien`, `y-nghia`

**Trạng thái**: ĐÃ CÓ NỘI DUNG ĐẦY ĐỦ

## 4. Section Kết Nối (Tổng Kết)
**Component**: `ConnectionSection.tsx`
**Vị trí**: Ngay trước Footer

**Mục đích**: Thể hiện sự liên kết và phát triển logic giữa 3 giai đoạn lịch sử

**Cấu trúc:**
- Timeline ngang với 3 mốc thời gian:
  - 1945: Cách mạng Tháng 8 (Giành độc lập)
  - 1947: Việt Bắc Thu Đông (Bảo vệ độc lập)
  - 1950: Biên giới Thu Đông (Phản công thắng lợi)
- Phần "Sự Liên Kết Chiến Lược" với 3 điểm chính:
  - Từ giành chính quyền → giữ vững chính quyền
  - Từ phòng thủ → phản công chiến lược
  - Từ yếu thế → chủ động chiến trường
- Quote của Chủ tịch Hồ Chí Minh
- Thông điệp kết: Về sự liên kết tạo nên thắng lợi

**Màu sắc**: Gradient đỏ - vàng, thể hiện sự chuyển biến tích cực

## Navigation
Header được cập nhật với 5 mục menu:
1. "Sau CM Tháng 8" → `tinh-hinh-sau-cm`
2. "Biên giới 1950" → `chien-dich-bien-gioi`
3. "Việt Bắc 1947" → `tong-quan`
4. "Diễn biến" → `dien-bien`
5. "Ý nghĩa" → `y-nghia`

## Hero Section
- Cập nhật tiêu đề chung: "Lịch Sử Kháng Chiến Chống Thực Dân Pháp"
- Thời gian: 1945 - 1954
- Button chính scroll đến section đầu tiên (Sau CM Tháng 8)

## Màu sắc và Icons
### PostRevolutionSection
- Đỏ (red): Chính trị, cảnh báo
- Xanh dương (blue): Quốc tế, xây dựng
- Vàng (yellow): Trong nước, kinh tế
- Xanh lá (green): Quốc phòng, an ninh

### BorderCampaignSection  
- Đỏ (red): Mục tiêu, chiến lược
- Xanh dương (blue): Địa bàn
- Vàng (yellow): Lực lượng
- Xanh lá (green): Kết quả

## Ghi Chú Kỹ Thuật
- Tất cả components sử dụng Tailwind CSS
- Icons từ thư viện `lucide-react`
- Responsive design với breakpoints: sm, md, lg
- Smooth scroll navigation
- Hover effects và transitions
