import React from "react";
import { Award, TrendingUp, Shield, Globe } from "lucide-react";

const SignificanceSection: React.FC = () => {
  const significanceItems = [
    {
      icon: TrendingUp,
      title: "Chuyển biến chiến lược",
      description:
        "Đánh dấu bước chuyển từ thế phòng thủ sang thế tấn công, mở đầu giai đoạn phản công chiến lược trong kháng chiến chống Pháp.",
      highlight: "Bước ngoặt lịch sử",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Shield,
      title: "Bảo vệ căn cứ địa",
      description:
        "Giữ vững và mở rộng căn cứ địa Việt Bắc – trung tâm chỉ đạo kháng chiến của cả nước.",
      highlight: "Củng cố hậu phương",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Award,
      title: "Nâng cao tinh thần",
      description:
        "Chiến thắng làm nức lòng quân dân, củng cố niềm tin và ý chí quyết thắng trong toàn quốc.",
      highlight: "Khí thế chiến thắng",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Ảnh hưởng quốc tế",
      description:
        "Khẳng định vị thế chính nghĩa của Việt Nam, thu hút sự ủng hộ rộng rãi của nhân dân tiến bộ trên thế giới.",
      highlight: "Vang dội quốc tế",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const impacts = [
    {
      category: "Quân sự",
      items: [
        'Đập tan kế hoạch "Léa" của Pháp',
        "Giải phóng và mở rộng vùng căn cứ Việt Bắc",
        "Thu nhiều vũ khí, phương tiện và trang bị hiện đại của địch",
      ],
    },
    {
      category: "Chính trị",
      items: [
        "Củng cố niềm tin của nhân dân vào kháng chiến",
        "Tăng cường khối đại đoàn kết toàn dân tộc",
        "Nâng cao uy tín và vị thế lãnh đạo của Đảng và Chính phủ",
      ],
    },
    {
      category: "Xã hội",
      items: [
        "Khơi dậy tinh thần yêu nước và ý chí kháng chiến toàn dân",
        "Phát triển mạnh phong trào dân quân du kích",
        "Thắt chặt mối liên hệ giữa quân đội và nhân dân",
      ],
    },
    {
      category: "Quốc tế",
      items: [
        "Thu hút sự ủng hộ của nhân dân tiến bộ trên thế giới",
        "Tố cáo chính sách xâm lược, tàn bạo của thực dân Pháp",
        "Khẳng định chính nghĩa và quyền tự quyết của dân tộc Việt Nam",
      ],
    },
  ];

  return (
    <section id="y-nghia" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ý Nghĩa Lịch Sử
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chiến dịch Việt Bắc Thu Đông 1947 để lại những ảnh hưởng sâu sắc và
            lâu dài đối với cuộc kháng chiến và lịch sử dân tộc.
          </p>
        </div>

        {/* Ý nghĩa chính */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {significanceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full -translate-y-16 translate-x-16`}
                ></div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r ${item.color} text-white rounded-full mb-2`}
                  >
                    {item.highlight}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tác động chi tiết */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tác Động Toàn Diện
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-red-100">
                  Mặt {impact.category}
                </h4>
                <ul className="space-y-3">
                  {impact.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trích dẫn lịch sử */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 italic mb-6 leading-relaxed">
              "Chiến dịch Việt Bắc Thu Đông 1947 là bước ngoặt quan trọng, mở
              đầu cho giai đoạn phản công chiến lược trong cuộc kháng chiến
              chống thực dân Pháp xâm lược."
            </blockquote>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-4 rounded-full"></div>
            <cite className="text-gray-600 font-medium">
              — Từ các tài liệu lịch sử
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignificanceSection;
