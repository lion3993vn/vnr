import React from "react";
import { Users, Target, Award, Zap } from "lucide-react";

const OverviewSection: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mục tiêu chiến lược",
      description:
        'Phá tan kế hoạch "Léa" của Pháp, bảo vệ cơ quan đầu não và căn cứ địa Việt Bắc',
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Lực lượng tham gia",
      description: "Quân chủ lực, bộ đội địa phương và dân quân du kích",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Zap,
      title: "Chiến thuật mới",
      description:
        "Kết hợp tác chiến chính quy với du kích linh hoạt, hiệu quả",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Award,
      title: "Ý nghĩa lịch sử",
      description:
        "Làm phá sản âm mưu “đánh nhanh, thắng nhanh”, mở đầu giai đoạn phản công của kháng chiến",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <section id="tong-quan" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Chiến Dịch Việt Bắc Thu Đông 1947
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chiến dịch Việt Bắc Thu – Đông 1947 đánh bại kế hoạch "đánh nhanh,
            thắng nhanh" của Pháp, giữ vững căn cứ địa kháng chiến.
          </p>
        </div>

        {/* Bối cảnh lịch sử */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Bối Cảnh Lịch Sử
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Năm 1947, thực dân Pháp mở cuộc hành quân quy mô lớn mang tên
                  "Léa", nhằm tiêu diệt cơ quan đầu não kháng chiến và nhanh
                  chóng kết thúc chiến tranh. Chúng huy động lực lượng lớn tấn
                  công vào căn cứ địa Việt Bắc.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trước tình hình đó, Đảng và Chính phủ phát động chiến dịch
                  phản công Việt Bắc để bảo vệ căn cứ, giữ vững lực lượng và đập
                  tan âm mưu "đánh nhanh, thắng nhanh" của Pháp.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-600">
                <h4 className="font-semibold text-gray-900 mb-3">Thời gian:</h4>
                <p className="text-red-600 font-medium mb-4">
                  7 tháng 10 – 22 tháng 12 năm 1947
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Địa bàn tác chiến:
                </h4>
                <p className="text-gray-700">
                  Việt Bắc (Cao Bằng, Bắc Kạn, Lạng Sơn, Tuyên Quang, Thái
                  Nguyên)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chuẩn bị chiến dịch */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Quá Trình Chuẩn Bị
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Tập hợp lực lượng
              </h4>
              <p className="text-gray-600 text-sm">
                Huy động và tập trung các đơn vị chủ lực, bộ đội địa phương và
                dân quân du kích tại khu căn cứ Việt Bắc.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Chuẩn bị hậu cần
              </h4>
              <p className="text-gray-600 text-sm">
                Xây dựng hệ thống kho tàng, bảo đảm lương thực, vũ khí và phương
                tiện cho các mặt trận.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Động viên nhân dân
              </h4>
              <p className="text-gray-600 text-sm">
                Đẩy mạnh tuyên truyền, khơi dậy tinh thần yêu nước và huy động
                toàn dân tham gia kháng chiến.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
