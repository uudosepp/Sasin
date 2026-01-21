import React from 'react';

interface TimeSlotsProps {
  startTime: string | null;
  endTime: string | null;
  onSelectTimeRange: (start: string | null, end: string | null) => void;
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
];

// Mock availability - in a real app, this would come from backend
const unavailableSlots = ['11:00', '14:00', '18:00'];

// Helper function to check if a slot is in the range
const isInRange = (slot: string, start: string, end: string): boolean => {
  const slotIndex = timeSlots.indexOf(slot);
  const startIndex = timeSlots.indexOf(start);
  const endIndex = timeSlots.indexOf(end);
  
  return slotIndex > startIndex && slotIndex < endIndex;
};

// Helper function to check if there are any unavailable slots in the range
const hasUnavailableInRange = (start: string, end: string): boolean => {
  const startIndex = timeSlots.indexOf(start);
  const endIndex = timeSlots.indexOf(end);
  
  for (let i = startIndex; i <= endIndex; i++) {
    if (unavailableSlots.includes(timeSlots[i])) {
      return true;
    }
  }
  return false;
};

export function TimeSlots({ startTime, endTime, onSelectTimeRange }: TimeSlotsProps) {
  const handleSlotClick = (slot: string) => {
    // If no start time selected yet, set it as start
    if (!startTime) {
      onSelectTimeRange(slot, null);
      return;
    }
    
    // If start is selected but no end, set the end time
    if (startTime && !endTime) {
      const startIndex = timeSlots.indexOf(startTime);
      const clickedIndex = timeSlots.indexOf(slot);
      
      // If clicking the same slot, deselect
      if (startTime === slot) {
        onSelectTimeRange(null, null);
        return;
      }
      
      // Determine the range
      let rangeStart = startTime;
      let rangeEnd = slot;
      
      // If clicked slot is before start, swap them
      if (clickedIndex < startIndex) {
        rangeStart = slot;
        rangeEnd = startTime;
      }
      
      // Check if there are any unavailable slots in the range
      if (hasUnavailableInRange(rangeStart, rangeEnd)) {
        alert('Valitud ajavahemik sisaldab juba broneeritud aegu. Palun vali teistsugune aeg.');
        return;
      }
      
      onSelectTimeRange(rangeStart, rangeEnd);
      return;
    }
    
    // If both are selected, reset and start new selection
    if (startTime && endTime) {
      onSelectTimeRange(slot, null);
      return;
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 border border-border/30 rounded-2xl">
      <h3 className="text-2xl sm:text-3xl mb-8 font-light tracking-tight">Vali aeg</h3>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {timeSlots.map((slot) => {
          const isUnavailable = unavailableSlots.includes(slot);
          const isStart = startTime === slot;
          const isEnd = endTime === slot;
          const inRange = startTime && endTime && isInRange(slot, startTime, endTime);

          return (
            <button
              key={slot}
              onClick={() => !isUnavailable && handleSlotClick(slot)}
              disabled={isUnavailable}
              className={`
                py-4 sm:py-5 px-4 sm:px-5 text-sm sm:text-base font-light transition-all tracking-wide rounded-xl
                ${isStart || isEnd
                  ? 'bg-primary text-primary-foreground shadow-md cursor-pointer'
                  : inRange
                  ? 'bg-primary/20 text-primary border-2 border-primary/30 cursor-pointer'
                  : isUnavailable
                  ? 'bg-muted/30 text-muted-foreground cursor-not-allowed opacity-40'
                  : 'bg-white border border-border/50 hover:border-primary text-foreground/70 hover:text-foreground cursor-pointer'
                }
              `}
            >
              {slot}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-foreground/40 mt-8 font-light tracking-wide uppercase">
        Hall = pole saadaval
      </p>
    </div>
  );
}