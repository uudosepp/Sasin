import React, { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HomePage } from '@/app/components/HomePage';
import { BookingPage } from '@/app/components/BookingPage';
import { AboutPage } from '@/app/components/AboutPage';
import { GalleryPage } from '@/app/components/GalleryPage';
import { ContactPage } from '@/app/components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking' | 'about' | 'gallery' | 'contact'>('home');
  const [selectedStudioId, setSelectedStudioId] = useState<number | undefined>(undefined);

  const handleNavigateToBooking = (studioId?: number) => {
    setSelectedStudioId(studioId);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'booking' | 'about' | 'gallery' | 'contact') => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedStudioId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && <HomePage onNavigateToBooking={handleNavigateToBooking} />}
      {currentPage === 'booking' && <BookingPage initialStudioId={selectedStudioId} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}