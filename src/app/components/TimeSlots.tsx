import React from 'react';

interface TimeSlotsProps {
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00', '20:00',
];

// Mock availability - in a real app, this would come from backend
const unavailableSlots = ['11:00', '14:00', '18:00'];

export function TimeSlots({ selectedSlot, onSelectSlot }: TimeSlotsProps) {
  return (
    <div className="bg-card rounded-lg p-4 sm:p-6 shadow-sm border border-border">
      <h3 className="text-base sm:text-lg mb-4">Vali aeg</h3>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {timeSlots.map((slot) => {
          const isUnavailable = unavailableSlots.includes(slot);
          const isSelected = selectedSlot === slot;

          return (
            <button
              key={slot}
              onClick={() => !isUnavailable && onSelectSlot(slot)}
              disabled={isUnavailable}
              className={`
                py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all
                ${isSelected
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : isUnavailable
                  ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                  : 'bg-card border-2 border-border hover:border-primary hover:bg-primary/5'
                }
              `}
            >
              {slot}
            </button>
          );
        })}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground mt-4">
        Hall = pole saadaval
      </p>
    </div>
  );
}