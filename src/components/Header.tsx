import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'tinh-hinh-sau-cm', label: 'Sau CM Tháng 8 năm 1945' },
    { id: 'tong-quan', label: 'Việt Bắc 1947' },
    { id: 'chien-dich-bien-gioi', label: 'Biên giới Thu - Đông 1950' },
    // { id: 'dien-bien', label: 'Diễn biến' },
    // { id: 'y-nghia', label: 'Ý nghĩa' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo và tiêu đề */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg font-bold transition-colors duration-300 ${
                isScrolled ? 'text-red-600' : 'text-white'
              }`}>
                Lịch Sử Kháng Chiến
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-yellow-200'
              }`}>
                Việt Nam
              </p>
            </div>
            <div className="sm:hidden">
              <span className={`text-sm font-bold transition-colors duration-300 ${
                isScrolled ? 'text-red-600' : 'text-white'
              }`}>
                Kháng Chiến VN
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-yellow-400 ${
                  activeSection === item.id
                    ? 'text-yellow-400'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-300 hover:bg-gray-50 ${
                  activeSection === item.id
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;