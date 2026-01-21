import React from "react";
import { Button } from "./Button";
import { StudioCard } from "./StudioCard";
import { InstagramFeed } from "./InstagramFeed";
import { Footer } from "./Footer";
import { Music, Radio, Mic2, Waves } from "lucide-react";
import logoImage from 'figma:asset/42ef674de9c079a01b618a13ab84c47b19c67051.png';

interface HomePageProps {
  onNavigateToBooking: (studioId?: number) => void;
}

const studios = [
  {
    id: 1,
    name: "Suur tuba",
    description:
      "Meie ruumikaim stuudio bändide proovideks, kontsertideks ja muudeks loomingulisteks üritusteks. Piisavalt ruumi ja võimsust kõigeks.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Trummiruum",
    description:
      "Väiksem tuba trummide harjutamiseks ja salvestamiseks. Hea akustikaga isoleeritud ruum, kus saab vabalt mängida ja katsetada.",
    image:
      "https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Foonika",
    description:
      "Professionaalne produktsioonistuudio miksimiseks, masterdamiseks, podcast'ide salvestamiseks ja igasugusteks helitöödeks.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function HomePage({
  onNavigateToBooking,
}: HomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-8xl mb-8 tracking-tight font-light">
            Säsin Stuudio
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-16 font-light opacity-90 max-w-3xl mx-auto">
            Loominguline ruum muusikatele, kunstnikele ja
            sisutegijatele
          </p>
          <Button
            variant="secondary"
            onClick={() => onNavigateToBooking()}
            className="text-base sm:text-lg px-10 sm:px-14 py-4 sm:py-5 rounded-full hover:scale-105 transition-transform"
            style={{ backgroundColor: '#033c41', color: 'white' }}
          >
            Broneeri stuudio
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Subtle musical decorative elements */}
        <div className="absolute top-20 left-10 opacity-5"></div>
        <div className="absolute bottom-20 right-10 opacity-5"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-6xl md:text-7xl mb-4 font-light tracking-tight">
            Meie stuudio
          </h2>
          
          <div className="h-1 w-16 bg-accent mx-auto mb-16"></div>

          <p className="text-2xl text-foreground/60 leading-relaxed mb-12 font-light">
            Säsin Stuudio on loodud inspireerimaks loojaid ja
            võimaldamaks neil oma ideid ellu viia. Pakume kolme
            erineva iseloomuga stuudiot, mis sobivad muusika
            salvestamisest kuni sisu loomiseni.
          </p>
          <p className="text-2xl text-foreground/60 leading-relaxed font-light">
            Meie professionaalne tehnika ja hubane atmosfäär
            loovad ideaalse keskkonna igasugusteks
            loomingulisteks projektideks.
          </p>

          {/* Säsin Logo */}
          <div className="flex items-center justify-center mt-16">
            <img src={logoImage} alt="Säsin Stuudio Logo" className="h-16 sm:h-20 opacity-80" />
          </div>
        </div>
      </section>

      {/* Studios Overview */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 font-light tracking-tight">
              Broneeri Stuudio
            </h2>
            
            <div className="h-1 w-16 bg-accent mx-auto mb-8"></div>
            
            <p className="text-xl text-muted-foreground font-light">
              Vali oma projektile sobiv ruum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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

      {/* Instagram Feed */}
      <InstagramFeed />

      <Footer />
    </div>
  );
}