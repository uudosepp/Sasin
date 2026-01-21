import React, { useState } from 'react';
import { Button } from './Button';

interface BookingFormProps {
  studioName: string;
  selectedDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  isFoonika?: boolean;
}

export function BookingForm({ studioName, selectedDate, startTime, endTime, isFoonika }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFoonika && (!selectedDate || !startTime || !endTime)) {
      alert('Palun vali kuupäev ja kellaaeg');
      return;
    }

    // In a real app, this would send to backend
    console.log('Booking submitted:', {
      ...formData,
      studio: studioName,
      date: isFoonika ? formData.preferredDate : selectedDate,
      time: isFoonika ? formData.preferredTime : `${startTime}-${endTime}`,
    });

    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', preferredDate: '', preferredTime: '' });
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
      <div className="bg-white p-10 sm:p-12 border border-border/30 rounded-2xl text-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl sm:text-4xl mb-4 font-light tracking-tight">
          {isFoonika ? 'Päring saadetud!' : 'Broneering saadetud!'}
        </h3>
        <p className="text-lg text-foreground/60 font-light">
          {isFoonika 
            ? 'Võtame teiega peagi ühendust, et kinnitada sobiv aeg või pakkuda alternatiive.'
            : 'Võtame teiega peagi ühendust broneeringu kinnitamiseks.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 border border-border/30 rounded-2xl">
      <h3 className="text-2xl sm:text-3xl mb-10 font-light tracking-tight">
        {isFoonika ? 'Saada päring' : 'Broneeringu andmed'}
      </h3>
      
      {!isFoonika && selectedDate && startTime && endTime && (
        <div className="mb-10 p-6 sm:p-8 bg-muted/20 border border-border/30 rounded-2xl">
          <p className="text-xs text-foreground/50 mb-3 font-light tracking-wider uppercase">Valitud aeg:</p>
          <p className="font-light text-lg sm:text-xl text-foreground">
            {selectedDate.toLocaleDateString('et-EE', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} kell {startTime}-{endTime}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-3 text-sm font-light tracking-wide">Nimi *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-white border border-border/50 focus:outline-none focus:border-primary transition-all font-light"
            placeholder="Teie nimi"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-3 text-sm font-light tracking-wide">E-post *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-white border border-border/50 focus:outline-none focus:border-primary transition-all font-light"
            placeholder="teie@email.ee"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-3 text-sm font-light tracking-wide">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-white border border-border/50 focus:outline-none focus:border-primary transition-all font-light"
            placeholder="+372 5XXX XXXX"
          />
        </div>

        {isFoonika && (
          <>
            <div>
              <label htmlFor="preferredDate" className="block mb-3 text-sm font-light tracking-wide">Soovitud kuupäev *</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white border border-border/50 focus:outline-none focus:border-primary transition-all font-light"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block mb-3 text-sm font-light tracking-wide">Soovitud kellaaeg *</label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white border border-border/50 focus:outline-none focus:border-primary transition-all font-light"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="block mb-3 text-sm font-light tracking-wide">
            {isFoonika ? 'Projekti kirjeldus ja lisainfo *' : 'Lisainfo'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required={isFoonika}
            className="w-full px-5 py-4 bg-white border border-border/50 focus:outline-none focus:border-primary transition-all resize-none font-light"
            placeholder={isFoonika ? "Kirjeldage oma projekti, soovitud teenused (miksimise, masterdamise, podcast jne) ja muud olulised detailid..." : "Kirjeldage lühidalt oma projekti või erisoove..."}
          />
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full py-5 sm:py-6 text-base sm:text-lg rounded-full"
          style={
            (isFoonika || (selectedDate && startTime && endTime))
              ? { backgroundColor: '#033c41', color: 'white' }
              : { backgroundColor: '#94a3b8', color: 'white', opacity: 0.6 }
          }
          disabled={!isFoonika && (!selectedDate || !startTime || !endTime)}
        >
          {isFoonika ? 'Saada päring' : 'Saada broneering'}
        </Button>

        {!isFoonika && (!selectedDate || !startTime || !endTime) && (
          <p className="text-xs text-foreground/40 text-center font-light tracking-wide uppercase">
            Palun vali kuupäev ja kellaaeg
          </p>
        )}
      </form>
    </div>
  );
}