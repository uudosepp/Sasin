import React from 'react';
import logoImage from 'figma:asset/42ef674de9c079a01b618a13ab84c47b19c67051.png';

interface NavigationProps {
  currentPage: 'home' | 'booking' | 'about' | 'gallery' | 'contact';
  onNavigate: (page: 'home' | 'booking' | 'about' | 'gallery' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(3, 60, 65, 0.85)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-60 transition-opacity cursor-pointer"
        >
          <img src={logoImage} alt="Säsin Stuudio" className="h-8 sm:h-9" />
        </button>
        
        <div className="flex items-center gap-8 sm:gap-12">
          <button
            onClick={() => onNavigate('home')}
            className={`text-xs sm:text-sm transition-all tracking-wider uppercase cursor-pointer ${ 
              currentPage === 'home' 
                ? 'font-medium text-white' 
                : 'text-white/60 hover:text-white font-normal'
            }`}
          >
            Avaleht
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`text-xs sm:text-sm transition-all tracking-wider uppercase cursor-pointer ${ 
              currentPage === 'about' 
                ? 'font-medium text-white' 
                : 'text-white/60 hover:text-white font-normal'
            }`}
          >
            Meist
          </button>
          <button
            onClick={() => onNavigate('gallery')}
            className={`text-xs sm:text-sm transition-all tracking-wider uppercase cursor-pointer ${ 
              currentPage === 'gallery' 
                ? 'font-medium text-white' 
                : 'text-white/60 hover:text-white font-normal'
            }`}
          >
            Galerii
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`text-xs sm:text-sm transition-all tracking-wider uppercase cursor-pointer ${ 
              currentPage === 'contact' 
                ? 'font-medium text-white' 
                : 'text-white/60 hover:text-white font-normal'
            }`}
          >
            Kontakt
          </button>
          
          <button
            onClick={() => onNavigate('booking')}
            className="text-xs sm:text-sm tracking-wider uppercase px-5 sm:px-6 py-2 sm:py-2.5 bg-white rounded-full transition-all hover:shadow-lg cursor-pointer"
            style={{ color: '#033c41' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9cc9f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            Broneeri
          </button>
        </div>
      </div>
    </nav>
  );
}