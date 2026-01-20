import React from 'react';
import logoImage from 'figma:asset/6311f0d1b8750d12cb3743713698c9fe9bd5bf62.png';

interface NavigationProps {
  currentPage: 'home' | 'booking';
  onNavigate: (page: 'home' | 'booking') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2D5A5A] border-b border-[#2D5A5A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={logoImage} alt="Säsin Stuudio" className="h-10 sm:h-12" />
        </button>
        
        <div className="flex gap-4 sm:gap-8">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm sm:text-base transition-colors ${
              currentPage === 'home' 
                ? 'text-[#F4A261]' 
                : 'text-[#F4A261]/70 hover:text-[#F4A261]'
            }`}
          >
            Avaleht
          </button>
          <button
            onClick={() => onNavigate('booking')}
            className={`text-sm sm:text-base transition-colors ${
              currentPage === 'booking' 
                ? 'text-[#F4A261]' 
                : 'text-[#F4A261]/70 hover:text-[#F4A261]'
            }`}
          >
            Broneeri
          </button>
        </div>
      </div>
    </nav>
  );
}