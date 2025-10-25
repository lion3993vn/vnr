import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostRevolutionSection from './components/PostRevolutionSection';
import BorderCampaignSection from './components/BorderCampaignSection';
import OverviewSection from './components/OverviewSection';
import TimelineSection from './components/TimelineSection';
import SignificanceSection from './components/SignificanceSection';
import ConnectionSection from './components/ConnectionSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tinh-hinh-sau-cm', 'chien-dich-bien-gioi', 'tong-quan', 'dien-bien', 'y-nghia'];
      const scrollPosition = window.scrollY + 100;

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title
  useEffect(() => {
    document.title = 'Lịch Sử Kháng Chiến Việt Nam - Trang Lịch Sử';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* Post Revolution Section */}
        <PostRevolutionSection />

        {/* Overview Section - Việt Bắc 1947 */}
        <OverviewSection />
        {/* Timeline Section */}
        <TimelineSection />
        {/* Significance Section */}
        <SignificanceSection />
        {/* Border Campaign Section */}
        <BorderCampaignSection />

        {/* Connection Section - Tổng kết liên kết */}
        <ConnectionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 group"
          aria-label="Về đầu trang"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;