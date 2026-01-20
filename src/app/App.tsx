import React, { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HomePage } from '@/app/components/HomePage';
import { BookingPage } from '@/app/components/BookingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking'>('home');
  const [selectedStudioId, setSelectedStudioId] = useState<number | undefined>(undefined);

  const handleNavigateToBooking = (studioId?: number) => {
    setSelectedStudioId(studioId);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'booking') => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedStudioId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' ? (
        <HomePage onNavigateToBooking={handleNavigateToBooking} />
      ) : (
        <BookingPage initialStudioId={selectedStudioId} />
      )}
    </div>
  );
}
