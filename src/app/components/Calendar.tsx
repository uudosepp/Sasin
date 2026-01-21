import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const monthNames = [
    'Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni',
    'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
  ];

  const dayNames = ['P', 'E', 'T', 'K', 'R', 'L', 'P'];

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    dateToCheck.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  const handleDayClick = (day: number) => {
    if (isPastDate(day)) return;
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onSelectDate(newDate);
  };

  return (
    <div className="bg-white p-8 sm:p-10 border border-border/30 rounded-2xl">
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl font-light tracking-tight">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2.5 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/50" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2.5 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/50" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {dayNames.map((day, index) => (
          <div key={`day-${index}`} className="text-center text-xs sm:text-sm text-foreground/40 font-medium py-3 tracking-wider uppercase">
            {day}
          </div>
        ))}

        {Array.from({ length: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const past = isPastDate(day);
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              disabled={past}
              className={`
                aspect-square flex items-center justify-center text-sm sm:text-base transition-all font-light
                ${past
                  ? 'text-foreground/20 cursor-not-allowed'
                  : isSelected(day) 
                  ? 'bg-primary text-primary-foreground font-medium cursor-pointer' 
                  : isToday(day)
                  ? 'border border-primary text-primary cursor-pointer'
                  : 'hover:bg-muted/30 text-foreground/70 hover:text-foreground cursor-pointer'
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}