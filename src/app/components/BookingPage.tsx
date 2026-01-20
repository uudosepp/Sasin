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
    name: 'Stuudio A',
    description: 'Professionaalne salvestusstuudio koos tipptasemel seadmetega.',
    fullDescription: 'Meie suurim ja varustusrikkam stuudio. Sobib ideaalselt muusika salvestamiseks, miksimiseks ja masterimiseks. Stuudios on täisprofessionaalne konsool, kvaliteetsed mikrofonid ja akustiline töötlus.',
    mainImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Professionaalne konsool', 'Kvaliteetsed mikrofonid', 'Akustiline töötlus', 'Istumine kuni 4 inimesele'],
  },
  {
    id: 2,
    name: 'Stuudio B',
    description: 'Mitmekülgne produktsioonistuudio podcast\'ide ja voice-over\'ite jaoks.',
    fullDescription: 'Kompaktne ja funktsionaalne stuudio, mis sobib suurepäraselt podcastide salvestamiseks, voice-over tööde tegemiseks ja väiksemate muusikaprojektide jaoks.',
    mainImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Podcast seadmed', 'Heli isolatsioon', 'Kompaktne ja hubane', 'Istumine kuni 2 inimesele'],
  },
  {
    id: 3,
    name: 'Stuudio C',
    description: 'Proovisaal bändidele ja ansambilitele.',
    fullDescription: 'Ruumikas ja hästi akusteeritud proovisaal. Ideaalne bändide proovideks, ansambli harjutusteks ja live-salvestusteks. Stuudios on bassivõimendi, kitarrivõimendid ja trummikomplekt.',
    mainImage: 'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Trummikomplekt', 'Võimendid', 'Hea akustika', 'Istumine kuni 8 inimesele'],
  },
  {
    id: 4,
    name: 'Stuudio D',
    description: 'Loominguline ruum sisu loomiseks ja fotosessioonideks.',
    fullDescription: 'Valgusküllane ja hubane ruum, mis sobib suurepäraselt sisu loomiseks, fotosessioonideks, video salvestamiseks ja väikesteks loomingulisteks kohtumisteks.',
    mainImage: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg0NDU3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg0NDU3NjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=400',
    ],
    features: ['Loomuliku valgus', 'Foto/video seadmed', 'Inspireeriv interjöör', 'Istumine kuni 6 inimesele'],
  },
];

export function BookingPage({ initialStudioId = 1 }: BookingPageProps) {
  const [selectedStudio, setSelectedStudio] = useState(
    studios.find((s) => s.id === initialStudioId) || studios[0]
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(selectedStudio.mainImage);

  const handleStudioChange = (studio: typeof studios[0]) => {
    setSelectedStudio(studio);
    setMainImage(studio.mainImage);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 sm:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Broneeri stuudio</h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Vali sobiv stuudio ja aeg oma loomingulisele projektile
            </p>
          </div>

          {/* Studio Selector */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {studios.map((studio) => (
                <button
                  key={studio.id}
                  onClick={() => handleStudioChange(studio)}
                  className={`
                    px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base
                    ${selectedStudio.id === studio.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card border-2 border-border hover:border-primary hover:bg-primary/5'
                    }
                  `}
                >
                  {studio.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Side - Studio Images and Details */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-xl">
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
                      rounded-lg overflow-hidden transition-all
                      ${mainImage === thumb 
                        ? 'ring-4 ring-primary shadow-lg' 
                        : 'hover:opacity-80'
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
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-2xl mb-4">{selectedStudio.name}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedStudio.fullDescription}
                </p>
                
                <h3 className="font-medium mb-3">Võimalused:</h3>
                <ul className="space-y-2">
                  {selectedStudio.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Booking */}
            <div className="space-y-6">
              <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
              
              {selectedDate && (
                <TimeSlots selectedSlot={selectedTime} onSelectSlot={setSelectedTime} />
              )}
              
              <BookingForm
                studioName={selectedStudio.name}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}