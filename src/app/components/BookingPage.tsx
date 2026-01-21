import React, { useState } from 'react';
import { Calendar } from './Calendar';
import { TimeSlots } from './TimeSlots';
import { BookingForm } from './BookingForm';
import { Footer } from './Footer';

interface BookingPageProps {
  initialStudioId?: number;
}

const studios = [
  {
    id: 1,
    name: 'Suur tuba',
    description: 'Meie ruumikaim stuudio bändide proovideks ja üritusteks.',
    fullDescription: 'Suur tuba on meie ruumikaim stuudio, mis on loodud spetsiaalselt bändide proovideks, live-salvestusteks ja muudeks loomingulisteks üritusteks. Ruumikus ruum pakub piisavalt vabadust ja võimsust ka suurematele koosseisudele ning intensiivseteks sessiooonideks.',
    mainImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Võimendid ja PA-süsteem', 'Ruumikas prooviruum', 'Hea akustika', 'Sobib bändidele ja üritusteks'],
    pricePerHalfHour: '10€',
    minimumDuration: 'Minimaalne broneering 1 tund',
  },
  {
    id: 2,
    name: 'Trummiruum',
    description: 'Väiksem tuba trummide harjutamiseks ja salvestamiseks.',
    fullDescription: 'Trummiruum on väiksem isoleeritud tuba, mis on mõeldud spetsiaalselt trummide harjutamiseks ja salvestamiseks. Hea akustikaga ruum pakub ideaalset keskkonda nii algajatele kui ka kogenud trummaritele, kes soovivad rahulikult harjutada või oma pala salvestada.',
    mainImage: 'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Trummikomplekt', 'Heli isolatsioon', 'Salvestusvõimalus', 'Sobilik harjutamiseks'],
    pricePerHalfHour: '8€',
    minimumDuration: 'Minimaalne broneering 1 tund',
  },
  {
    id: 3,
    name: 'Foonika',
    description: 'Professionaalne produktsioonistuudio miksimiseks ja helitöödeks.',
    fullDescription: 'Foonika on meie professionaalne produktsioonistuudio, mis sobib ideaalselt miksimiseks, masterdamiseks, podcast\'ide salvestamiseks ja igasugusteks helitöödeks. Varustatud kvaliteetsete monitorite ja salvestusseadmetega, pakub see stuudio täpset ja inspireerivat keskkonda iga heliprojekti jaoks.',
    mainImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Miksimis- ja masterdamistööriistad', 'Podcast seadmed', 'Stuudio monitorid', 'Voice-over ja helitööd'],
  },
];

export function BookingPage({ initialStudioId = 1 }: BookingPageProps) {
  const [selectedStudio, setSelectedStudio] = useState(
    studios.find((s) => s.id === initialStudioId) || studios[0]
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(selectedStudio.mainImage);

  const handleStudioChange = (studio: typeof studios[0]) => {
    setSelectedStudio(studio);
    setMainImage(studio.mainImage);
    setSelectedDate(null);
    setStartTime(null);
    setEndTime(null);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    // Reset time selection when date changes
    setStartTime(null);
    setEndTime(null);
  };

  const handleTimeRangeChange = (start: string | null, end: string | null) => {
    setStartTime(start);
    setEndTime(end);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Hero Section with Background - starts from top */}
      <div className="relative">
        {/* Background Image - extends behind header */}
        <div className="absolute inset-0 top-0 overflow-hidden" style={{ height: '400px' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1698769676386-7984304c8261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcmVoZWFyc2FsJTIwcm9vbXxlbnwxfHx8fDE3Njg5ODkyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6 sm:mb-8 font-light tracking-tight text-white">Broneeri stuudio</h1>
              <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto">
                Vali sobiv stuudio ja aeg oma loomingulisele projektile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Selector - below hero */}
      <div className="relative px-4 sm:px-6 pb-8 sm:pb-12 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {studios.map((studio) => (
              <button
                key={studio.id}
                onClick={() => handleStudioChange(studio)}
                className={`
                  px-8 sm:px-10 py-4 sm:py-5 font-light transition-all text-sm sm:text-base tracking-wide rounded-4xl cursor-pointer
                  ${selectedStudio.id === studio.id
                    ? 'text-white shadow-md'
                    : 'bg-white border border-border/50 hover:border-primary/50 text-foreground/70 hover:text-foreground'
                  }
                `}
                style={selectedStudio.id === studio.id ? { backgroundColor: '#033c41' } : undefined}
              >
                {studio.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pb-20 sm:pb-28 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">{/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20">
            {/* Left Side - Studio Images and Details */}
            <div className="space-y-10">
              {/* Main Image */}
              <div className="overflow-hidden border border-border/30 rounded-2xl">
                <img
                  src={mainImage}
                  alt={selectedStudio.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {selectedStudio.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(thumb)}
                    className={`
                      rounded-xl overflow-hidden transition-all cursor-pointer
                      ${mainImage === thumb 
                        ? 'ring-4 ring-primary shadow-lg scale-105' 
                        : 'hover:opacity-75 hover:scale-105'
                      }
                    `}
                  >
                    <img
                      src={thumb}
                      alt={`${selectedStudio.name} ${index + 1}`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Studio Details */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-border">
                <h2 className="text-3xl sm:text-4xl mb-6 font-light tracking-tight">{selectedStudio.name}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
                  {selectedStudio.fullDescription}
                </p>
                
                {/* Pricing Information */}
                {'pricePerHalfHour' in selectedStudio && (
                  <div className="mb-8 pb-8 border-b border-border/30">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-light" style={{ color: '#033c41' }}>
                        {selectedStudio.pricePerHalfHour}
                      </span>
                      <span className="text-xl text-foreground/60 font-light">/pool tundi</span>
                    </div>
                    <p className="text-sm text-foreground/50 font-light tracking-wide">
                      {selectedStudio.minimumDuration}
                    </p>
                  </div>
                )}
                
                <h3 className="font-medium mb-4 text-lg">Võimalused:</h3>
                <ul className="space-y-3">
                  {selectedStudio.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground text-lg font-light">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Booking */}
            <div className="space-y-6">
              {selectedStudio.id === 3 ? (
                // Foonika - special booking without calendar
                <div className="p-8 sm:p-10 border border-border/30 rounded-2xl">
                  <h3 className="text-2xl sm:text-3xl mb-4 font-light tracking-tight">Foonika stuudio broneerimise ajad on kokkuleppelised</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed font-light">
                    Saada meile päring oma soovitud ajaga ja võtame teiega ühendust, et kinnitada või pakkuda alternatiivset aega.
                  </p>
                </div>
              ) : (
                <>
                  <Calendar selectedDate={selectedDate} onSelectDate={handleDateChange} />
                  
                  {selectedDate && (
                    <TimeSlots 
                      startTime={startTime} 
                      endTime={endTime} 
                      onSelectTimeRange={handleTimeRangeChange} 
                    />
                  )}
                </>
              )}
              
              <BookingForm
                studioName={selectedStudio.name}
                selectedDate={selectedDate}
                startTime={startTime}
                endTime={endTime}
                isFoonika={selectedStudio.id === 3}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}