import React from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

const ConnectionSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 via-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hành Trình Kháng Chiến Anh Hùng
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Từ giành độc lập đến bảo vệ và phát triển thành quả cách mạng
          </p>
        </div>

        {/* Timeline liên kết */}
        <div className="relative">
          {/* Đường kết nối */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-red-600 transform -translate-y-1/2"></div>

          {/* 3 mốc chính */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Cách mạng Tháng 8 - 1945 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-red-600">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1945
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Cách Mạng Tháng 8
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed mb-4">
                <span className="font-semibold text-red-600">Giành độc lập:</span> Lật đổ 
                ách thống trị thực dân - phong kiến, lập nên nước Việt Nam Dân chủ Cộng hòa.
              </p>
              <div className="flex items-center justify-center text-red-600">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Việt Bắc - 1947 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-500">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1947
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Việt Bắc Thu Đông
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed mb-4">
                <span className="font-semibold text-yellow-600">Bảo vệ độc lập:</span> Đập tan 
                kế hoạch "đánh nhanh thắng nhanh" của Pháp, giữ vững căn cứ địa kháng chiến.
              </p>
              <div className="flex items-center justify-center text-yellow-500">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Biên giới - 1950 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-red-700">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1950
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Biên Giới Thu Đông
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed mb-4">
                <span className="font-semibold text-red-700">Phản công thắng lợi:</span> Chuyển 
                sang tổng phản công, giải phóng vùng biên giới, mở ra thời kỳ mới.
              </p>
              <div className="flex items-center justify-center text-red-700">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Câu chốt */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sự Liên Kết Chiến Lược
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ba mốc son lịch sử này đánh dấu <span className="font-semibold text-red-600">quá trình phát triển liên tục</span> của 
                cuộc kháng chiến chống thực dân Pháp:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 mt-1">→</span>
                  <span><strong>Từ giành chính quyền</strong> (1945) đến <strong>giữ vững chính quyền</strong> (1947)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 mt-1">→</span>
                  <span><strong>Từ phòng thủ</strong> chuyển sang <strong>phản công chiến lược</strong> (1950)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3 mt-1">→</span>
                  <span><strong>Từ yếu thế</strong> đến <strong>chủ động trên chiến trường</strong></span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-red-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-center text-gray-800 font-semibold italic text-lg mb-2">
                "Đoàn kết - Đoàn kết - Đại đoàn kết
              </p>
              <p className="text-center text-gray-800 font-semibold italic text-lg">
                Thành công - Thành công - Đại thành công"
              </p>
              <p className="text-center text-red-600 font-medium mt-3">
                — Chủ tịch Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        {/* Thông điệp cuối */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Mỗi thắng lợi là nền tảng cho thắng lợi tiếp theo, 
            <span className="text-red-600 font-bold"> cùng nhau tạo nên khúc hùng ca bất diệt </span>
            của dân tộc Việt Nam
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
