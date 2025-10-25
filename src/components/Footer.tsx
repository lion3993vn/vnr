import React from 'react';
import { MapPin, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Sau Cách mạng 8/1945', href: '#sau-cach-mang-1945' },
    { label: 'Chiến dịch Việt Bắc 1947', href: '#viet-bac-1947' },
    { label: 'Chiến dịch Biên giới 1950', href: '#bien-gioi-1950' },
  ];

  const relatedLinks = [
    { label: 'Bảo tàng Lịch sử Quân sự Việt Nam', href: 'https://vi.wikipedia.org/wiki/B%E1%BA%A3o_t%C3%A0ng_L%E1%BB%8Bch_s%E1%BB%AD_Qu%C3%A2n_s%E1%BB%B1_Vi%E1%BB%87t_Nam' },
    { label: 'Viện Lịch sử Đảng', href: 'https://vi.wikipedia.org/wiki/H%E1%BB%8Dc_vi%E1%BB%87n_Ch%C3%ADnh_tr%E1%BB%8B_Qu%E1%BB%91c_gia_H%E1%BB%93_Ch%C3%AD_Minh' },
    { label: 'Bộ Quốc phòng Việt Nam', href: 'https://vi.wikipedia.org/wiki/B%E1%BB%99_Qu%E1%BB%91c_ph%C3%B2ng_(Vi%E1%BB%87t_Nam)' },
    { label: 'Cục Chính trị - Bộ Quốc phòng', href: 'https://vi.wikipedia.org/wiki/T%E1%BB%95ng_c%E1%BB%A5c_Ch%C3%ADnh_tr%E1%BB%8B,_Qu%C3%A2n_%C4%91%E1%BB%99i_nh%C3%A2n_d%C3%A2n_Vi%E1%BB%87t_Nam' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'contact@lichsu-vietbac.edu.vn' },
    { icon: Phone, label: '+84 (24) 3826 7892' },
    { icon: MapPin, label: 'Hà Nội, Việt Nam' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo và mô tả */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Lịch sử Kháng Chiến</h3>
                <p className="text-sm text-gray-400">1945 - 1950</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Trang web giới thiệu về giai đoạn đầu cuộc kháng chiến chống thực dân Pháp 
              (1945-1950), từ sau Cách mạng Tháng Tám đến chiến thắng Biên giới - 
              những bước ngoặt quan trọng trong lịch sử dân tộc.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">1945 - 1950</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Nội Dung Chính</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Liên Kết Hữu Ích</h4>
            <ul className="space-y-3">
              {relatedLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Thông Tin Liên Hệ</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 p-4 bg-red-600/10 rounded-lg border border-red-600/20">
              <p className="text-xs text-gray-400 leading-relaxed">
                Trang web được thiết kế nhằm mục đích giáo dục, tuyên truyền lịch sử kháng chiến 
                và giáo dục truyền thống yêu nước cho thế hệ trẻ. 
                Mọi thông tin được sưu tầm từ các nguồn tài liệu chính thống.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Lịch Sử Kháng Chiến 1945-1950. Mọi quyền được bảo lưu.
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Được thiết kế với ❤️ để tưởng nhớ các anh hùng liệt sĩ và thế hệ tiền nhân</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500 italic">
              "Không có gì quý hơn độc lập, tự do" - Chủ tịch Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;