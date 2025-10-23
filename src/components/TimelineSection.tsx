import React from 'react';
import { Clock, MapPin, Users, Target } from 'lucide-react';

const TimelineSection: React.FC = () => {
const timelineEvents = [
  {
    date: '7/10/1947',
    title: 'Pháp mở màn Chiến dịch Việt Bắc',
    description:
      'Quân Pháp huy động 12.000 quân mở cuộc hành quân Léa, nhảy dù xuống Bắc Kạn nhằm bắt giữ Chính phủ Việt Minh và tiêu diệt cơ quan đầu não kháng chiến.',
    icon: Target,
    color: 'bg-red-500'
  },
  {
    date: '9/10/1947',
    title: 'Việt Minh bắn rơi máy bay chỉ huy Pháp',
    description:
      'Khẩu đội 12,7mm của Trung đoàn 74 bắn rơi máy bay vận tải Ju-52 chở sĩ quan tham mưu Pháp tại Cao Bằng, thu được kế hoạch tấn công Việt Bắc.',
    icon: MapPin,
    color: 'bg-yellow-500'
  },
  {
    date: '13/10/1947',
    title: 'Thành lập ba mặt trận chủ lực',
    description:
      'Bộ Tổng chỉ huy tổ chức ba mặt trận: Sông Lô – Đường 2, Bắc Kạn – Đường 3, và Đường 4, dưới sự chỉ đạo của các chỉ huy Trần Tử Bình, Hoàng Văn Thái, Võ Nguyên Giáp.',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    date: '24/10/1947',
    title: 'Chiến thắng Sông Lô – Đoan Hùng',
    description:
      'Pháo binh Việt Minh phục kích trên sông Lô, đánh chìm hai tàu chiến Pháp, bắn hỏng hai chiếc khác. Báo chí Pháp gọi đây là “Thảm hoạ Đoan Hùng”.',
    icon: Target,
    color: 'bg-blue-500'
  },
  {
    date: '29/10/1947',
    title: 'Trận phục kích Bông Lau',
    description:
      'Tiểu đoàn 374 phục kích đoàn xe 30 chiếc của Pháp tại đèo Bông Lau, tiêu diệt 250 tên địch, thu nhiều vũ khí. Đơn vị được phong danh hiệu “Tiểu đoàn Bông Lau”.',
    icon: MapPin,
    color: 'bg-orange-500'
  },
  {
    date: '13/11/1947',
    title: 'Pháp rút khỏi Bắc Kạn – Chợ Đồn',
    description:
      'Trước sức tấn công của Việt Minh, quân Pháp buộc phải rút khỏi Chợ Đồn, Chợ Rã, Ngân Sơn. Kế hoạch Léa bị phá sản.',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    date: '20/11/1947',
    title: 'Pháp mở đợt tấn công Ceinture',
    description:
      'Mở cuộc hành quân vòng cung Ceinture càn quét vùng Tuyên Quang – Thái Nguyên – Việt Trì, nhưng tiếp tục bị Việt Minh phục kích và tiêu hao nặng.',
    icon: Target,
    color: 'bg-teal-500'
  },
  {
    date: '15/12/1947',
    title: 'Trận phục kích đèo Giàng',
    description:
      'Trung đoàn 165 phục kích tại đèo Giàng (Bắc Kạn), phá hủy 17 xe, diệt 60 lính Pháp, thu nhiều chiến lợi phẩm.',
    icon: MapPin,
    color: 'bg-pink-500'
  },
  {
    date: '19/12/1947',
    title: 'Chiến dịch kết thúc thắng lợi',
    description:
      'Quân Pháp buộc phải rút khỏi Việt Bắc. Chiến dịch Việt Bắc Thu – Đông 1947 kết thúc, đánh bại âm mưu “đánh nhanh thắng nhanh” của thực dân Pháp.',
    icon: Clock,
    color: 'bg-indigo-500'
  }
];


  return (
    <section id="dien-bien" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Diễn Biến Chiến Dịch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Theo dõi từng bước tiến của chiến dịch qua timeline chi tiết với những sự kiện 
            quan trọng và thành tựu đạt được.
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
              <div key={index} className={`relative flex items-start mb-16 ${
                index === timelineEvents.length - 1 ? 'mb-0' : ''
              }`}>
                {/* Timeline dot với animation */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 ${event.color} rounded-full border-4 border-white shadow-xl z-10 animate-pulse`}></div>
                
                {/* Connecting line to card (chỉ hiển thị trên mobile) */}
                <div className="absolute left-4 top-2.5 w-8 h-0.5 bg-gray-300 md:hidden"></div>
                
                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-[calc(50%-2rem)]`}>
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-1">
                    {/* Date badge */}
                    <div className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold ${event.color} bg-opacity-10`}>
                      <span className={`${event.color.replace('bg-', 'text-')}`}>{event.date}</span>
                    </div>
                    
                    <div className={`flex items-start gap-4 mb-4 ${
                      isEven ? 'md:flex-row-reverse md:text-right' : ''
                    }`}>
                      <div className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0 transform hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thống kê kết quả */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kết Quả Đạt Được</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">280+</div>
              <p className="text-gray-600">Làng mạc giải phóng</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">3,000+</div>
              <p className="text-gray-600">Địch quân tiêu diệt</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,500+</div>
              <p className="text-gray-600">Vũ khí thu được</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Đồn bốt phá hủy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;