import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/sasin-logo.png';

interface NavigationProps {
  currentPage: 'home' | 'booking' | 'about' | 'gallery' | 'contact';
  onNavigate: (page: 'home' | 'booking' | 'about' | 'gallery' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Avaleht' },
    { id: 'about', label: 'Meist' },
    { id: 'gallery', label: 'Galerii' },
    { id: 'contact', label: 'Kontakt' },
  ] as const;

  const handleNavigate = (page: 'home' | 'booking' | 'about' | 'gallery' | 'contact') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300" 
      style={{ backgroundColor: isMenuOpen ? '#033c41' : 'rgba(3, 60, 65, 0.85)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between relative z-50">
        <button 
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-60 transition-opacity cursor-pointer"
        >
          <img src={logoImage} alt="Säsin Stuudio" className="h-8 sm:h-9" />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 sm:gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-xs sm:text-sm transition-all tracking-wider uppercase cursor-pointer ${ 
                currentPage === item.id 
                  ? 'font-medium text-white' 
                  : 'text-white/60 hover:text-white font-normal'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={() => handleNavigate('booking')}
            className="text-xs sm:text-sm tracking-wider uppercase px-5 sm:px-6 py-2 sm:py-2.5 bg-white rounded-full transition-all hover:shadow-lg cursor-pointer"
            style={{ color: '#033c41' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9cc9f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            Broneeri
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Sulge menüü" : "Ava menüü"}
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out h-[100dvh] w-screen ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#033c41' }}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-2xl transition-all tracking-[0.2em] uppercase ${ 
                currentPage === item.id 
                  ? 'font-medium text-white underline underline-offset-8' 
                  : 'text-white/70 hover:text-white font-light'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={() => handleNavigate('booking')}
            className="mt-6 text-lg tracking-[0.2em] uppercase px-12 py-4 bg-white rounded-full transition-all active:scale-95 shadow-xl font-medium"
            style={{ color: '#033c41' }}
          >
            Broneeri
          </button>
        </div>
      </div>
    </nav>
  );
}