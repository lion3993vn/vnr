import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import bgImage from '../img/background_vnr.png';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image với overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600/20 text-yellow-400 backdrop-blur-sm border border-yellow-400/30">
            <Calendar className="w-4 h-4 mr-2" />
            Thu Đông 1947
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Chiến Dịch
          <span className="text-yellow-400 block mt-2">Việt Bắc Thu Đông</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Một trong những chiến dịch quan trọng nhất trong lịch sử kháng chiến chống Pháp, 
          mở đầu cho giai đoạn phản công chiến lược của quân dân ta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
            <span>Khu vực Việt Bắc</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
            <span>7/10 - 22/12/1947</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => window.location.href = '/game.html'}
            className="group inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-yellow-500/50"
          >
            Vào Chiến Trường
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('tong-quan')}
            className="group inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Tổng quan chiến dịch
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;