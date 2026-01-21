import React, { useState } from 'react';
import { Footer } from './Footer';
import { Camera, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Suur tuba',
    category: 'stuudio',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Trummiruum',
    category: 'stuudio',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDQwMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Foonika',
    category: 'stuudio',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Salvestussessioon',
    category: 'sessioon',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Muusika tootmine',
    category: 'sessioon',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1555670120-8189b33022e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0dWRpbyUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Stuudio atmosfäär',
    category: 'sessioon',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Bändisessioon',
    category: 'sessioon',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1745848413076-cdf1fa5d4d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBtaWNyb3Bob25lJTIwc2V0dXB8ZW58MXx8fHwxNzY4OTkwNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mikrofoni seadistus',
    category: 'seadmed',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Konsool',
    category: 'seadmed',
  },
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<'kõik' | 'stuudio' | 'sessioon' | 'seadmed'>('kõik');

  const filteredImages = filter === 'kõik' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
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

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl mb-4 font-light tracking-tight text-white">
            Galerii
          </h1>
          
          <div className="h-1 w-16 bg-secondary mx-auto mb-12"></div>
          
          <p className="text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            Pilguheit meie stuudiote ja sessioonide sisse
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pt-16 pb-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center gap-4 flex-wrap">
          {(['kõik', 'stuudio', 'sessioon', 'seadmed'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all ${
                filter === category
                  ? 'text-white'
                  : 'bg-muted/50 text-foreground/60 hover:bg-muted'
              }`}
              style={filter === category ? { backgroundColor: '#033c41' } : undefined}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-light">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-white text-2xl font-light">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}