import React from 'react';
import { Footer } from './Footer';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1698769676386-7984304c8261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcmVoZWFyc2FsJTIwcm9vbXxlbnwxfHx8fDE3Njg5ODkyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl mb-4 font-light tracking-tight text-white">
            Meist
          </h1>
          
          <div className="h-1 w-16 bg-secondary mx-auto mb-16"></div>
          
          <p className="text-2xl text-white/90 leading-relaxed mb-12 font-light">
            Säsin Stuudio on loodud kirest muusika ja loomingulisuse vastu. 
            Meie missioon on pakkuda inspireerivat ja professionaalset keskkonda 
            kõigile loojatele.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 font-light tracking-tight">
                Meie lugu
              </h2>
              
              <div className="h-1 w-16 bg-accent mb-8"></div>
              
              <p className="text-lg text-foreground/70 leading-relaxed mb-6 font-light">
                Alustasime 2020. aastal väikese unistusega - luua ruum, kus 
                kunstnikud saaksid vabalt luua ja katsetada. Täna pakume 
                kolme unikaalset stuudiot, mis teenindavad erinevaid 
                loomingulisi vajadusi.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed font-light">
                Meie stuudiod on võõrustanud sadu projekte alates muusika 
                salvestamisest kuni podcastide loomiseni. Oleme uhked, et 
                saame olla osa Eesti loomingulisest kogukonnast.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Säsin Stuudio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl mb-4 font-light tracking-tight">
              Meie väärtused
            </h2>
            
            <div className="h-1 w-16 bg-accent mx-auto mb-8"></div>
            
            <p className="text-xl text-muted-foreground font-light">
              Mida me hindame kõige rohkem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4 font-light">Kogukond</h3>
              <p className="text-foreground/60 font-light leading-relaxed">
                Usume tugevasse loomingulisse kogukonasse ja vastastikusse 
                toetusesse loojate vahel.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4 font-light">Kvaliteet</h3>
              <p className="text-foreground/60 font-light leading-relaxed">
                Pakume tipptasemel seadmeid ja professionaalset keskkonda, 
                et iga projekt õnnestuks.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4 font-light">Loovus</h3>
              <p className="text-foreground/60 font-light leading-relaxed">
                Julgustame eksperimenteerimist ja loome inspireeriva 
                õhkkonna igasugusteks projektideks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl mb-4 font-light tracking-tight">
              Meie meeskond
            </h2>
            
            <div className="h-1 w-16 bg-accent mx-auto mb-8"></div>

            <p className="text-xl text-muted-foreground font-light">
              Inimesed, kes teevad Säsin Stuudio võimalikuks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Mari Kask',
                role: 'Asutaja & Loovjuht',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Jaan Tamm',
                role: 'Helitehnik',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
              {
                name: 'Liis Mets',
                role: 'Stuudiojuht',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl mb-2 font-light">{member.name}</h3>
                <p className="text-foreground/60 font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}