import React, { useState } from 'react';
import { Button } from './Button';

interface BookingFormProps {
  studioName: string;
  selectedDate: Date | null;
  selectedTime: string | null;
}

export function BookingForm({ studioName, selectedDate, selectedTime }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Palun vali kuupäev ja kellaaeg');
      return;
    }

    // In a real app, this would send to backend
    console.log('Booking submitted:', {
      ...formData,
      studio: studioName,
      date: selectedDate,
      time: selectedTime,
    });

    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-lg p-6 sm:p-8 shadow-sm border border-border text-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl mb-2">Broneering saadetud!</h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          Võtame teiega peagi ühendust broneeringu kinnitamiseks.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 sm:p-8 shadow-sm border border-border">
      <h3 className="text-lg sm:text-xl mb-6">Broneeringu andmed</h3>
      
      {selectedDate && selectedTime && (
        <div className="mb-6 p-3 sm:p-4 bg-secondary/10 rounded-lg">
          <p className="text-xs sm:text-sm text-muted-foreground">Valitud aeg:</p>
          <p className="font-medium text-sm sm:text-base">
            {selectedDate.toLocaleDateString('et-EE', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} kell {selectedTime}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-2">Nimi *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Teie nimi"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">E-post *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="teie@email.ee"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="+372 5XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Lisainfo</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Kirjeldage lühidalt oma projekti või erisoove..."
          />
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full py-4"
          disabled={!selectedDate || !selectedTime}
        >
          Saada broneering
        </Button>

        {(!selectedDate || !selectedTime) && (
          <p className="text-sm text-muted-foreground text-center">
            Palun vali kuupäev ja kellaaeg
          </p>
        )}
      </form>
    </div>
  );
}