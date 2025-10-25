import React from "react";
import { MapPin, Target, Trophy, TrendingUp } from "lucide-react";

const BorderCampaignSection: React.FC = () => {
const campaignHighlights = [
  {
    icon: Target,
    title: "Mục tiêu chiến dịch",
    description:
      "Tiêu diệt một bộ phận sinh lực địch, khai thông biên giới Việt - Trung, mở rộng căn cứ địa Việt Bắc và củng cố tuyến giao thông chiến lược phục vụ kháng chiến lâu dài.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: MapPin,
    title: "Địa bàn tác chiến",
    description:
      "Khu vực biên giới Việt - Trung, trọng điểm là tuyến Cao Bằng – Lạng Sơn – Thất Khê, trong đó hướng chủ yếu là Đông Khê – điểm then chốt trên đường số 4.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Lực lượng tham gia",
    description:
      "Khoảng 35.000 quân ta gồm ba đại đoàn chủ lực (308, 312, 316) và lực lượng địa phương. Địch có khoảng 11.000 quân Pháp và ngụy, được trang bị mạnh và cố thủ trong hệ thống cứ điểm dọc biên giới.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Trophy,
    title: "Kết quả đạt được",
    description:
      "Chiến dịch thắng lợi hoàn toàn: ta tiêu diệt và bắt hơn 8.000 địch, giải phóng đường biên giới dài hơn 750 km, mở thông liên lạc quốc tế, tạo bước ngoặt cho cuộc kháng chiến chống Pháp.",
    color: "bg-green-100 text-green-600",
  },
];

const battlePhases = [
  {
    phase: "Giai đoạn 1",
    title: "Chuẩn bị và triển khai",
    period: "Tháng 8 – đầu tháng 9 năm 1950",
    description:
      "Quân ta trinh sát, chuẩn bị hậu cần, mở đường và tập kết lực lượng ở Việt Bắc. Bộ Tổng Tư lệnh xác định Đông Khê là hướng tiến công chủ yếu, huy động dân công và lương thực từ các tỉnh trung du lên biên giới.",
  },
  {
    phase: "Giai đoạn 2",
    title: "Tấn công chính",
    period: "16/9 – 8/10/1950",
    description:
      "Ngày 16/9, ta nổ súng mở màn bằng trận Đông Khê, tiêu diệt toàn bộ cứ điểm. Sau đó, đánh bại các đợt phản kích của Pháp tại Thất Khê và trên đường số 4, cắt rời hoàn toàn Cao Bằng với Lạng Sơn.",
  },
  {
    phase: "Giai đoạn 3",
    title: "Hoàn thành chiến dịch",
    period: "9/10 – 22/10/1950",
    description:
      "Ta truy kích và tiêu diệt toàn bộ binh đoàn Charton – Le Page rút chạy từ Cao Bằng và Thất Khê. Ngày 22/10, chiến dịch kết thúc thắng lợi, biên giới hoàn toàn được khai thông.",
  },
];

    return (
        <section id="chien-dich-bien-gioi" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Chiến Dịch Biên Giới Thu - Đông 1950
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Chiến dịch mở đầu thời kỳ đánh địch tiến công, đánh dấu bước ngoặt
                        quan trọng trong cuộc kháng chiến chống thực dân Pháp
                    </p>
                </div>

                {/* Bối cảnh và tổng quan */}
                <div className="mb-16">
  <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Bối Cảnh Chiến Dịch
    </h3>
    <div className="grid md:grid-cols-2 gap-8 items-center">

      {/* Bối cảnh - Tóm tắt theo điểm */}
      <div className="space-y-4">
        <ul className="list-disc ml-5 text-gray-700 leading-relaxed space-y-2">
          <li>
            Sau Chiến dịch Việt Bắc 1947, ta giữ vững căn cứ địa nhưng vẫn bị địch
            bao vây, cô lập. Kinh tế kháng chiến còn yếu, vũ khí thô sơ.
          </li>
          <li>
            Đầu năm 1950, Cách mạng Trung Quốc thắng lợi, mở ra điều kiện thuận lợi
            để Việt Nam nhận viện trợ quốc tế và mở rộng quan hệ đối ngoại.
          </li>
          <li>
            Đảng và Chính phủ quyết định mở Chiến dịch Biên giới Thu – Đông 1950
            nhằm phá thế bao vây, mở rộng vùng tự do và thông biên giới với Trung Quốc.
          </li>
          <li>
            Quân đội ta ngày càng trưởng thành, có sự hỗ trợ của bạn bè quốc tế;
            quân Pháp tuy mạnh về hỏa lực nhưng lực lượng phân tán, dễ bị cô lập.
          </li>
          <li>
            Mục tiêu: Tiêu diệt sinh lực địch, giải phóng khu vực biên giới,
            mở đường viện trợ và khẳng định vị thế Việt Nam Dân chủ Cộng hòa.
          </li>
        </ul>
      </div>

      {/* Thông tin chiến dịch */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-600">
        <h4 className="font-semibold text-gray-900 mb-3">
          Thông tin chiến dịch:
        </h4>
        <div className="space-y-3 text-gray-700">
          <div>
            <span className="font-medium text-gray-900">Thời gian: </span>
            <p className="text-red-600 font-medium">
              Từ ngày 16/9 đến ngày 22/10 năm 1950
            </p>
          </div>

          <div>
            <span className="font-medium text-gray-900">Địa bàn: </span>
            <p>
              Khu vực biên giới Việt – Trung, trọng điểm là các tỉnh
              <span className="font-semibold text-gray-900"> Cao Bằng, Lạng Sơn </span>
              và <span className="font-semibold text-gray-900">Thái Nguyên</span>.
            </p>
          </div>

          <div>
            <span className="font-medium text-gray-900">Tư lệnh: </span>
            <p>
              <span className="font-semibold text-gray-900">
                Đại tướng Võ Nguyên Giáp
              </span>{" "}
              (Chỉ huy trưởng kiêm Chính ủy chiến dịch)
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



                {/* Điểm nổi bật của chiến dịch */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Điểm Nổi Bật
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {campaignHighlights.map((item, index) => {
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
                </div>

                {/* Các giai đoạn chiến dịch */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Diễn Biến Chiến Dịch
                    </h3>
                    <div className="space-y-6">
                        {battlePhases.map((phase, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <h4 className="text-xl font-semibold text-gray-900">
                                                {phase.title}
                                            </h4>
                                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                                                {phase.period}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

      {/* Các trận đánh tiêu biểu */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
    Trận Đánh Tiêu Biểu
  </h3>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Trận đánh 1 */}
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-red-600 text-white px-6 py-3">
        <h4 className="font-semibold">Trận Đông Khê</h4>
      </div>
      <div className="p-6">
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-gray-900">Thời gian:</span>
            <span className="text-gray-700 ml-2">16 – 18/9/1950</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Địa điểm:</span>
            <span className="text-gray-700 ml-2">Cứ điểm Đông Khê, Cao Bằng</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Kết quả:</span>
            <p className="text-gray-700 mt-1">
              Quân ta tiêu diệt toàn bộ cứ điểm Đông Khê, bắt sống 270 tù binh,
              thu nhiều vũ khí. Đây là thắng lợi mở màn, tạo bước ngoặt cho toàn chiến dịch.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Trận đánh 2 */}
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-red-600 text-white px-6 py-3">
        <h4 className="font-semibold">Trận Thất Khê – Cao Bằng</h4>
      </div>
      <div className="p-6">
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-gray-900">Thời gian:</span>
            <span className="text-gray-700 ml-2">30/9 – 7/10/1950</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Địa điểm:</span>
            <span className="text-gray-700 ml-2">Đường số 4, giữa Cao Bằng – Thất Khê</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Kết quả:</span>
            <p className="text-gray-700 mt-1">
              Quân ta phục kích, tiêu diệt toàn bộ hai binh đoàn Charton và Le Page
              đang rút chạy. Hơn 8.000 quân địch bị tiêu diệt và bắt sống, hoàn toàn làm chủ biên giới.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Ý nghĩa và kết quả */}
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
    Ý Nghĩa Lịch Sử
  </h3>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="text-center">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Trophy className="w-8 h-8" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        Ý nghĩa quân sự
      </h4>
      <p className="text-gray-600 text-sm">
        Lần đầu tiên quân đội ta chủ động mở chiến dịch lớn, tiêu diệt sinh lực địch quy mô lớn,
        làm thay đổi cục diện chiến tranh, chuyển từ phòng ngự sang tấn công trên toàn chiến trường.
      </p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-8 h-8" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        Ý nghĩa chính trị
      </h4>
      <p className="text-gray-600 text-sm">
        Chiến thắng nâng cao uy tín và vị thế của Việt Nam Dân chủ Cộng hòa trên trường quốc tế,
        mở đường cho quan hệ ngoại giao với Trung Quốc và Liên Xô, tạo thế hợp pháp quốc tế cho kháng chiến.
      </p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <MapPin className="w-8 h-8" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        Ý nghĩa lịch sử
      </h4>
      <p className="text-gray-600 text-sm">
        Chiến dịch Biên giới Thu – Đông 1950 là bước ngoặt của cuộc kháng chiến chống Pháp,
        đánh dấu thời kỳ chủ động tiến công, tạo tiền đề cho các chiến thắng lớn sau này như Hòa Bình,
        Tây Bắc, Điện Biên Phủ.
      </p>
    </div>
  </div>
</div>

            </div>
        </section>
    );
};

export default BorderCampaignSection;
