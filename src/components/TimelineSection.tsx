import React from "react";
import { Clock, MapPin, Users, Target } from "lucide-react";

const TimelineSection: React.FC = () => {
  const timelineEvents = [
    {
      date: "7/10/1947",
      title: "Pháp mở màn tiến công Việt Bắc (Léa)",
      description:
        "Hơn 10.000 quân Pháp hình thành hai gọng kìm đánh lên Việt Bắc, trọng điểm khu tam giác Bắc Kạn – Chợ Đồn – Chợ Mới.",
      icon: Target,
      color: "bg-red-500",
    },
    {
      date: "9/10/1947",
      title: "Bắn rơi máy bay chở kế hoạch của Pháp",
      description:
        "Máy bay Pháp bị ta bắn rơi tại Cao Bằng; đến 13/10 Bộ Tổng chỉ huy nhận được bản kế hoạch tiến công Việt Bắc của địch.",
      icon: MapPin,
      color: "bg-yellow-500",
    },
    {
      date: "13/10/1947",
      title: "Điều chỉnh phương án, lập 3 mặt trận",
      description:
        "Bộ Tổng chỉ huy điều chỉnh kế hoạch, phát động du kích rộng khắp và lập 3 mặt trận: Sông Lô – Đường 2, Bắc Kạn – Đường 3, và Đường 4.",
      icon: Users,
      color: "bg-green-500",
    },
    {
      date: "21/10/1947",
      title: "Trận Chợ Đồn",
      description:
        "Bộ đội ta đánh thắng ở khu vực Chợ Đồn, góp phần bẻ gãy gọng kìm của địch trên hướng Bắc Kạn – Đường 3.",
      icon: Target,
      color: "bg-blue-500",
    },
    {
      date: "23/10/1947",
      title: "Sông Lô – Đoan Hùng (đợt 1)",
      description:
        "Quân ta phục kích trên sông Lô – Đoan Hùng, đánh chìm, đánh hỏng nhiều tàu thuyền địch; chiến công phá vỡ mũi tiến công đường thủy.",
      icon: Target,
      color: "bg-indigo-500",
    },
    {
      date: "30/10/1947",
      title: "Phục kích Bông Lau",
      description:
        "Ta đánh thắng lớn ở đèo Bông Lau trên hướng Đường 4, tiêu diệt và làm thiệt hại nặng đoàn cơ giới của Pháp.",
      icon: MapPin,
      color: "bg-orange-500",
    },
    {
      date: "10/11/1947",
      title: "Sông Lô – Bình Ca (đợt 2)",
      description:
        "Tiếp tục đánh mạnh trên sông Lô, tiêu diệt thêm tàu thuyền và lực lượng địch, củng cố thế chủ động chiến dịch.",
      icon: Target,
      color: "bg-teal-500",
    },
    {
      date: "21/11/1947",
      title: "Pháp bắt đầu rút khỏi Việt Bắc",
      description:
        "Do thiệt hại lớn và bị đánh chặn nhiều hướng, quân Pháp bắt đầu bí mật rút quân khỏi Việt Bắc.",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      date: "30/11/1947",
      title: "Tập kích đồn Phủ Thông",
      description:
        "Lực lượng ta tập kích Phủ Thông và liên tiếp phục kích ở Sơn Dương, Bình Ca, Đèo Khế, Phan Lương… trong quá trình địch rút lui.",
      icon: MapPin,
      color: "bg-pink-500",
    },
    {
      date: "15/12/1947",
      title: "Phục kích Đèo Giàng",
      description:
        "Trung đoàn 165 phục kích ở Đèo Giàng (Bắc Kạn), phá hủy nhiều xe cơ giới, diệt sinh lực, thu chiến lợi phẩm.",
      icon: MapPin,
      color: "bg-emerald-600",
    },
    {
      date: "20/12/1947",
      title: "Chiến dịch kết thúc thắng lợi",
      description:
        "Chiến dịch Việt Bắc Thu – Đông 1947 hoàn tất: ta loại khỏi vòng chiến đấu hơn 7.200 quân địch, bắn rơi 18 máy bay, đánh chìm 54 tàu xuồng; làm phá sản âm mưu “đánh nhanh, thắng nhanh”.",
      icon: Clock,
      color: "bg-purple-600",
    },
  ];

  return (
    <section id="dien-bien" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Diễn Biến Chiến Dịch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Theo dõi từng bước tiến của chiến dịch qua timeline chi tiết với
            những sự kiện quan trọng và thành tựu đạt được.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Đường timeline chính */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500"></div>

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start mb-16 ${
                  index === timelineEvents.length - 1 ? "mb-0" : ""
                }`}
              >
                {/* Timeline dot với animation */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 ${event.color} rounded-full border-4 border-white shadow-xl z-10 animate-pulse`}
                ></div>

                {/* Connecting line to card (chỉ hiển thị trên mobile) */}
                <div className="absolute left-4 top-2.5 w-8 h-0.5 bg-gray-300 md:hidden"></div>

                {/* Content card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                  } md:w-[calc(50%-2rem)]`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-1">
                    {/* Date badge */}
                    <div
                      className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold ${event.color} bg-opacity-10`}
                    >
                      <span
                        className={`${event.color.replace("bg-", "text-")}`}
                      >
                        {event.date}
                      </span>
                    </div>

                    <div
                      className={`flex items-start gap-4 mb-4 ${
                        isEven ? "md:flex-row-reverse md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0 transform hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thống kê kết quả */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Kết Quả Đạt Được
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">7,200+</div>
              <p className="text-gray-600">Địch bị loại khỏi vòng chiến đấu</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">18</div>
              <p className="text-gray-600">Máy bay bị bắn rơi/hư hại</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">54</div>
              <p className="text-gray-600">Tàu thuyền bị đánh chìm</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">255+</div>
              <p className="text-gray-600">Xe cơ giới bị phá hủy</p>
            </div>
          </div>

          {/*<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                2,000+
              </div>
              <p className="text-gray-600">Vũ khí & trang bị thu được</p>
            </div>
            {/* Nếu vẫn muốn có “đồn bốt” hoặc “làng mạc”, nên ghi “không có số liệu chính thức” */}
            {/* <div className="text-center">
      <div className="text-3xl font-bold text-gray-600 mb-2">—</div>
      <p className="text-gray-600">Đồn bốt phá hủy (không có số liệu chính thức)</p>
    </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
