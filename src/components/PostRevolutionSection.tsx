import React from "react";
import { AlertCircle, Users, Globe, Shield } from "lucide-react";

const PostRevolutionSection: React.FC = () => {
const challenges = [
  {
    icon: AlertCircle,
    title: "Thách thức chính trị",
    description:
      "Chính quyền cách mạng non trẻ phải đối mặt với âm mưu lật đổ của các thế lực phản động trong và ngoài nước, cần nhanh chóng củng cố hệ thống nhà nước mới.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Globe,
    title: "Bối cảnh quốc tế",
    description:
      "Chiến tranh thế giới thứ hai vừa kết thúc, phe Đồng minh chiếm đóng Đông Dương, Pháp và các nước lớn tranh giành ảnh hưởng khiến tình hình ngoại giao của Việt Nam rất phức tạp.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Tình hình trong nước",
    description:
      "Nạn đói, nạn mù chữ, tài chính kiệt quệ; kinh tế suy sụp nặng nề, đời sống nhân dân khốn khó, cần khôi phục và ổn định đất nước sau chiến tranh.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "An ninh quốc phòng",
    description:
      "Quân Tưởng ở miền Bắc, quân Anh – Pháp ở miền Nam; nguy cơ tái xâm lược và nội loạn đe dọa nền độc lập vừa giành được, cần xây dựng lực lượng vũ trang và bảo vệ chính quyền.",
    color: "bg-green-100 text-green-600",
  },
];


  return (
    <section id="tinh-hinh-sau-cm" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
 <div className="text-center mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
    Tình Hình Chung Sau Cách Mạng Tháng 8
  </h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
    Sau thắng lợi Cách mạng Tháng Tám 1945, Việt Nam giành được độc lập nhưng chính quyền
    non trẻ phải đối mặt với muôn vàn khó khăn trong bối cảnh “thù trong, giặc ngoài”.
  </p>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mt-3">
    <span className="font-bold text-red-600">Tình thế đất nước khi ấy:</span>{" "}
    <span className="italic">“Ngàn cân treo sợi tóc.”</span>
  </p>
</div>


        {/* Bối cảnh chung */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Bối Cảnh Lịch Sử
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Thắng lợi của Cách mạng Tháng 8
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    <li className="ml-10">Lật đổ ách thống trị của thực dân Pháp và phát xít Nhật, cùng chính quyền phong kiến.</li>
                    <li className="ml-10">Giành chính quyền về tay nhân dân trong cả nước.</li>
                    <li className="ml-10">Thành lập Nhà nước Việt Nam Dân chủ Cộng hòa - nhà nước công nông đầu tiên ở Đông Nam Á.</li>
                    <li className="ml-10">Mở ra kỷ nguyên mới: độc lập, tự do, nhân dân làm chủ, tiến lên con đường xã hội chủ nghĩa.</li>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Những khó khăn ban đầu
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    <li className="ml-10">Thù trong giặc ngoài: Nhiều thế lực phản động và quân ngoại xâm (Pháp, Tưởng, Anh, Nhật) kéo vào nước ta.</li>
                    <li className="ml-10">Kinh tế kiệt quệ: Nạn đói 1945 làm hơn 2 triệu người chết, sản xuất đình đốn, tài chính trống rỗng.</li>
                    <li className="ml-10">Xã hội rối ren: Hơn 90% dân mù chữ, đời sống nhân dân cực khổ.</li>
                    <li className="ml-10">Chính quyền non trẻ: Mới thành lập, chưa có kinh nghiệm quản lý, dễ bị lật đổ.</li>

                  </p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Mốc thời gian quan trọng:
                </h4>
                <ul className="space-y-2 text-gray-700">
                   <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>9/3/1945: Nhật đảo chính Pháp, độc chiếm Đông Dương.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>15/8/1945: Nhật Bản đầu hàng Đồng minh vô điều kiện, tạo thời cơ cho cách mạng.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>16/8/1945: Đại hội Quốc dân ở Tân Trào thông qua Lệnh Tổng khởi nghĩa và 10 chính sách lớn của Việt Minh.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>19/8/1945: Nhân dân Hà Nội giành chính quyền – mở đầu thắng lợi cả nước.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>23/8/1945: Nhân dân Huế giành chính quyền.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>25/8/1945: Nhân dân Sài Gòn – Gia Định giành chính quyền, cả nước hoàn toàn thắng lợi.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>2/9/1945: Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Các thách thức chính */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Các Thách Thức Chính
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item, index) => {
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

     {/* Các nỗ lực của chính quyền mới */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
    Nỗ Lực Xây Dựng Đất Nước Sau Cách Mạng Tháng Tám
  </h3>
  <div className="grid md:grid-cols-3 gap-8">
    {/* 1. Xây dựng chính quyền */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-xl font-bold">1</span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
        Xây dựng chính quyền
      </h4>
      <p className="text-gray-600 text-sm text-center">
        Thành lập Chính phủ lâm thời, ban hành Hiến pháp đầu tiên, tổ chức Tổng tuyển cử và xây dựng bộ máy nhà nước của dân, do dân, vì dân.
      </p>
    </div>

    {/* 2. Phát triển kinh tế */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-xl font-bold">2</span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
        Phát triển kinh tế
      </h4>
      <p className="text-gray-600 text-sm text-center">
        Phát động phong trào tăng gia sản xuất, tiết kiệm, diệt giặc đói; phát hành tiền Việt Nam, khôi phục sản xuất và ổn định đời sống nhân dân.
      </p>
    </div>

    {/* 3. Củng cố quốc phòng */}
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-xl font-bold">3</span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
        Củng cố quốc phòng
      </h4>
      <p className="text-gray-600 text-sm text-center">
        Thành lập Quân đội Quốc gia và Công an nhân dân; huy động toàn dân bảo vệ chính quyền, chống giặc ngoại xâm và giữ vững an ninh trật tự.
      </p>
    </div>
  </div>
</div>

        {/* Timeline sự kiện quan trọng */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Dòng Thời Gian Sự Kiện
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
            
           {/* Timeline item 1 */}
<div className="relative mb-8">
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-5/12 md:mr-auto md:ml-0">
      <div className="flex items-center mb-2">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          15/8/1945
        </span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        Nhật đầu hàng Đồng minh
      </h4>
      <p className="text-gray-600 text-sm">
        Thời cơ thuận lợi cho toàn dân nổi dậy giành chính quyền.
      </p>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
  </div>
</div>

{/* Timeline item 2 */}
<div className="relative mb-8">
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-5/12 md:ml-auto md:mr-0">
      <div className="flex items-center mb-2">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          19/8/1945
        </span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        Hà Nội giành chính quyền
      </h4>
      <p className="text-gray-600 text-sm">
        Cuộc khởi nghĩa thắng lợi mở đầu cho phong trào cả nước.
      </p>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
  </div>
</div>

{/* Timeline item 3 */}
<div className="relative mb-8">
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-5/12 md:mr-auto md:ml-0">
      <div className="flex items-center mb-2">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          25/8/1945
        </span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        Sài Gòn – Gia Định giành chính quyền
      </h4>
      <p className="text-gray-600 text-sm">
        Hoàn thành tổng khởi nghĩa trên toàn quốc, chính quyền về tay nhân dân.
      </p>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
  </div>
</div>

{/* Timeline item 4 */}
<div className="relative mb-8">
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-5/12 md:ml-auto md:mr-0">
      <div className="flex items-center mb-2">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          2/9/1945
        </span>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        Tuyên ngôn Độc lập
      </h4>
      <p className="text-gray-600 text-sm">
        Chủ tịch Hồ Chí Minh đọc Tuyên ngôn khai sinh nước Việt Nam Dân chủ Cộng hòa.
      </p>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
  </div>
</div>


          </div>
        </div>

        {/* Ý nghĩa lịch sử */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ý Nghĩa Lịch Sử Của Cách Mạng Tháng Tám
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ý nghĩa đối với dân tộc */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Đối với dân tộc Việt Nam
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Lật đổ hoàn toàn chế độ thực dân, phong kiến trị vì hơn 80 năm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Giành lại độc lập, tự do cho dân tộc, mở ra kỷ nguyên mới trong lịch sử</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Thành lập nước Việt Nam Dân chủ Cộng hòa – Nhà nước của dân, do dân, vì dân</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span>Khẳng định sức mạnh và ý chí độc lập của dân tộc Việt Nam</span>
                </li>
              </ul>
            </div>

            {/* Ý nghĩa về phương thức cách mạng */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Về phương thức cách mạng
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Thành công của đường lối tổng khởi nghĩa giành chính quyền</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Kết hợp sức mạnh dân tộc với thời cơ quốc tế thuận lợi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Phát huy sức mạnh đại đoàn kết toàn dân tộc dưới lãnh đạo của Đảng</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Mẫu mực về cách mạng giải phóng dân tộc trong thế kỷ 20</span>
                </li>
              </ul>
            </div>

            {/* Ý nghĩa quốc tế */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Ý nghĩa quốc tế
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 mt-1">•</span>
                  <span>Mở đầu phong trào giải phóng dân tộc sau Chiến tranh thế giới II</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 mt-1">•</span>
                  <span>Cổ vũ và cổ động các dân tộc thuộc địa đấu tranh giành độc lập</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 mt-1">•</span>
                  <span>Góp phần làm suy yếu hệ thống thực dân cũ trên toàn thế giới</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 mt-1">•</span>
                  <span>Khẳng định quyền tự quyết và bình đẳng của các dân tộc</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote nổi bật */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 border-l-4 border-red-600">
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
                  "Cách mạng tháng Tám năm 1945 là một mốc son chói lọi trong lịch sử dân tộc ta. 
                  Nó đánh dấu bước ngoặt vĩ đại, mở ra kỷ nguyên mới - kỷ nguyên độc lập, tự do, 
                  đi lên chủ nghĩa xã hội."
                </p>
                <p className="text-red-600 font-semibold">
                  — Chủ tịch Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostRevolutionSection;
