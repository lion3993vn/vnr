import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const OverviewSection: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Mục tiêu chiến lược',
      description: 'Phá vỡ kế hoạch "Pacification" của Pháp, giải phóng vùng Việt Bắc',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Users,
      title: 'Lực lượng tham gia',
      description: 'Quân chủ lực, bộ đội địa phương và dân quân du kích',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Zap,
      title: 'Chiến thuật mới',
      description: 'Kết hợp tác chiến chính quy và du kích hiệu quả',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      title: 'Ý nghĩa lịch sử',
      description: 'Mở đầu giai đoạn phản công chiến lược trong kháng chiến',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section id="tong-quan" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tổng Quan Chiến Dịch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chiến dịch Việt Bắc Thu Đông 1947 là bước ngoặt quan trọng trong cuộc kháng chiến chống Pháp,
            đánh dấu sự chuyển biến từ phòng thủ sang tấn công.
          </p>
        </div>

        {/* Bối cảnh lịch sử */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bối Cảnh Lịch Sử</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Đầu năm 1947, thực dân Pháp tiến hành kế hoạch "Pacification" nhằm "bình định" 
                  toàn bộ lãnh thổ Việt Nam. Họ tập trung lực lượng tấn công vào khu căn cứ địa 
                  Việt Bắc, trung tâm chỉ đạo kháng chiến của ta.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trong hoàn cảnh đó, Đảng và Chính phủ quyết định tổ chức chiến dịch phản công 
                  lớn nhằm phá tan âm mưu của địch, bảo vệ căn cứ địa và giành thế chủ động 
                  trên chiến trường.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-600">
                <h4 className="font-semibold text-gray-900 mb-3">Thời gian diễn ra:</h4>
                <p className="text-red-600 font-medium mb-4">7 tháng 10 - 22 tháng 12 năm 1947</p>
                <h4 className="font-semibold text-gray-900 mb-3">Khu vực tác chiến:</h4>
                <p className="text-gray-700">Các tỉnh Cao Bằng, Lạng Sơn, Hà Giang và một phần Thái Nguyên</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Chuẩn bị chiến dịch */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quá Trình Chuẩn Bị</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tập hợp lực lượng</h4>
              <p className="text-gray-600 text-sm">
                Điều động và tập trung các đơn vị chủ lực, bộ đội địa phương 
                và dân quân du kích từ nhiều địa phương.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Chuẩn bị hậu cần</h4>
              <p className="text-gray-600 text-sm">
                Tổ chức hệ thống hậu cần, đảm bảo lương thực, vũ khí đạn dược 
                cho các đơn vị tham chiến.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Động viên nhân dân</h4>
              <p className="text-gray-600 text-sm">
                Tuyên truyền, giải thích mục đích của chiến dịch, huy động 
                sức mạnh toàn dân tham gia kháng chiến.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;