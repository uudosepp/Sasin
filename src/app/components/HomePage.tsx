import React from 'react';
import { Button } from './Button';
import { StudioCard } from './StudioCard';
import { Footer } from './Footer';

interface HomePageProps {
  onNavigateToBooking: (studioId?: number) => void;
}

const studios = [
  {
    id: 1,
    name: 'Stuudio A',
    description: 'Professionaalne salvestusstuudio koos tipptasemel seadmetega. Ideaalne muusika salvestamiseks ja miksikseks.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Stuudio B',
    description: 'Mitmekülgne produktsioonistuudio podcast\'ide, voice-over\'ite ja väiksemate projektide jaoks.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Stuudio C',
    description: 'Proovisaal bändidele ja ansambilitele. Hea akustika ja piisavalt ruumi.',
    image: 'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Stuudio D',
    description: 'Loominguline ruum sisu loomiseks, fotosessioonideks ja väikesteks üritusteks.',
    image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg0NDU3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HomePage({ onNavigateToBooking }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight">
            Säsin Stuudio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
            Loominguline ruum muusikutele, kunstnikele ja sisutegijatele.<br className="hidden sm:block" />
            Professionaalsed stuudioruumid Tallinnas.
          </p>
          <Button 
            variant="secondary" 
            onClick={() => onNavigateToBooking()}
            className="text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4"
          >
            Broneeri stuudio
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-8">Meie stuudio</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Säsin Stuudio on loodud inspireerimaks loojaid ja võimaldamaks neil oma ideid ellu viia. 
            Pakume nelja erineva iseloomuga stuudiot, mis sobivad muusika salvestamisest kuni 
            sisu loomiseni.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meie professionaalne tehnika ja hubane atmosfäär loovad ideaalse keskkonna 
            igasugusteks loomingulisteks projektideks.
          </p>
        </div>
      </section>

      {/* Studios Overview */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-4 text-center">Meie stuudiod</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Vali oma projektile sobiv ruum
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studios.map((studio) => (
              <StudioCard
                key={studio.id}
                name={studio.name}
                description={studio.description}
                image={studio.image}
                onBook={() => onNavigateToBooking(studio.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}