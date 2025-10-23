import React, { useState } from 'react';
import { Image, MapPin, Users, Award, Calendar } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('maps');

  const tabs = [
    { id: 'maps', label: 'Bản đồ chiến dịch', icon: MapPin },
    { id: 'forces', label: 'Lực lượng tham gia', icon: Users },
    { id: 'moments', label: 'Khoảnh khắc lịch sử', icon: Image },
    { id: 'achievements', label: 'Thành tựu đạt được', icon: Award }
  ];

  const galleryContent = {
    maps: [
      {
        title: 'Bản đồ tình hình chung',
        description: 'Tổng quan về khu vực tác chiến và các mục tiêu chính của chiến dịch',
        image: 'https://images.pexels.com/photos/8828642/pexels-photo-8828642.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Khu vực Việt Bắc với địa hình núi non hiểm trở, thuận lợi cho tác chiến du kích'
      },
      {
        title: 'Các tuyến tiến công',
        description: 'Sơ đồ các hướng tấn công chính và phụ của quân ta',
        image: 'https://images.pexels.com/photos/7203720/pexels-photo-7203720.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Ba hướng tiến công chính từ Cao Bằng, Lạng Sơn và Hà Giang'
      },
      {
        title: 'Vùng giải phóng mới',
        description: 'Các khu vực được giải phóng sau chiến dịch',
        image: 'https://images.pexels.com/photos/8828649/pexels-photo-8828649.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Hơn 280 làng mạc được giải phóng, mở rộng căn cứ địa Việt Bắc'
      }
    ],
    forces: [
      {
        title: 'Lực lượng chủ lực',
        description: 'Các đơn vị bộ đội chủ lực tham gia chiến dịch',
        image: 'https://images.pexels.com/photos/8828651/pexels-photo-8828651.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Các trung đoàn bộ binh và pháo binh được trang bị vũ khí hiện đại'
      },
      {
        title: 'Bộ đội địa phương',
        description: 'Lực lượng bộ đội địa phương và dân quân du kích',
        image: 'https://images.pexels.com/photos/8001055/pexels-photo-8001055.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Hàng nghìn chiến sĩ địa phương am hiểu địa hình tham gia chiến đấu'
      },
      {
        title: 'Hậu cần nhân dân',
        description: 'Lực lượng hậu cần và nhân dân hỗ trợ',
        image: 'https://images.pexels.com/photos/7203722/pexels-photo-7203722.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Hàng chục nghìn nhân dân tham gia vận chuyển lương thực, đạn dược'
      }
    ],
    moments: [
      {
        title: 'Giải phóng Cao Bằng',
        description: 'Khoảnh khắc lịch sử giải phóng thành phố Cao Bằng',
        image: 'https://images.pexels.com/photos/8001066/pexels-photo-8001066.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Ngày 15/10/1947, quân ta giải phóng thành công thành phố Cao Bằng'
      },
      {
        title: 'Chiến thắng Lạng Sơn',
        description: 'Trận đánh quyết định tại Lạng Sơn',
        image: 'https://images.pexels.com/photos/8001064/pexels-photo-8001064.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Sau những trận đánh ác liệt, Lạng Sơn được giải phóng ngày 28/10/1947'
      },
      {
        title: 'Mít tinh chiến thắng',
        description: 'Nhân dân vùng giải phóng mít tinh ăn mừng chiến thắng',
        image: 'https://images.pexels.com/photos/7203715/pexels-photo-7203715.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Khí thế hào hùng của nhân dân trong ngày chiến thắng'
      }
    ],
    achievements: [
      {
        title: 'Vũ khí thu được',
        description: 'Số lượng lớn vũ khí trang bị thu được từ địch',
        image: 'https://images.pexels.com/photos/8001056/pexels-photo-8001056.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Hơn 1,500 khẩu súng các loại và nhiều trang bị quân sự'
      },
      {
        title: 'Đồn bốt phá hủy',
        description: 'Các đồn bốt và công sự của địch bị phá hủy',
        image: 'https://images.pexels.com/photos/8001054/pexels-photo-8001054.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Hơn 50 đồn bốt và nhiều công trình quân sự bị phá hủy'
      },
      {
        title: 'Vùng giải phóng',
        description: 'Bản đồ các vùng được giải phóng',
        image: 'https://images.pexels.com/photos/7203716/pexels-photo-7203716.jpeg?auto=compress&cs=tinysrgb&w=800',
        details: 'Mở rộng đáng kể căn cứ địa Việt Bắc với hàng trăm làng mạc'
      }
    ]
  };

  return (
    <section id="hinh-anh" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tư Liệu Lịch Sử
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá các tư liệu quý giá về chiến dịch qua bản đồ, hình ảnh và 
            tài liệu lịch sử được lưu giữ.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl p-2 shadow-sm max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryContent[activeTab as keyof typeof galleryContent].map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs text-gray-500 italic">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Quote */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-red-100">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="w-12 h-12 text-red-600 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 italic mb-6 leading-relaxed">
              "Những hình ảnh và tư liệu này là minh chứng sống động cho tinh thần bất khuất 
              và ý chí quyết thắng của quân dân ta trong cuộc kháng chiến thiêng liêng."
            </blockquote>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-4 rounded-full"></div>
            <cite className="text-gray-600 font-medium">— Ghi chép từ các tài liệu lịch sử</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;