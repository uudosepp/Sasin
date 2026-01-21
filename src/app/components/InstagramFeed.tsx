import React from 'react';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  link: string;
}

// Mock Instagram posts - in real app, these would come from Instagram API
const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzY4NDcwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=600',
    caption: 'Uus salvestus stuudios! 🎵',
    likes: 234,
    link: 'https://www.instagram.com/sasinstuudio/',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0ODM1ODJ8MA&ixlib=rb-4.1.0&q=80&w=600',
    caption: 'Meie uus seadmed on kohale jõudnud! 🎧',
    likes: 189,
    link: 'https://www.instagram.com/sasinstuudio/',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjByZWNvcmRpbmd8ZW58MXx8fHwxNzY4NDgzNTgyfDA&ixlib=rb-4.1.0&q=80&w=600',
    caption: 'Täna stuudios: võimas vokaalissessioon! 🎤',
    likes: 312,
    link: 'https://www.instagram.com/sasinstuudio/',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhlYXJzYWwlMjByb29tfGVufDF8fHx8MTc2ODQ4MzU4MXww&ixlib=rb-4.1.0&q=80&w=600',
    caption: 'Bändiproov Stuudio C-s 🥁🎸',
    likes: 156,
    link: 'https://www.instagram.com/sasinstuudio/',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY4NDgzNTgyfDA&ixlib=rb-4.1.0&q=80&w=600',
    caption: 'Night sessions ✨🌙',
    likes: 278,
    link: 'https://www.instagram.com/sasinstuudio/',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg0NDU3NjZ8MA&ixlib=rb-4.1.0&q=80&w=600',
    caption: 'Stuudio D fotosessioon 📸',
    likes: 201,
    link: 'https://www.instagram.com/sasinstuudio/',
  },
];

export function InstagramFeed() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl mb-4 font-light tracking-tight">@sasinstuudio</h2>
          
          <div className="h-1 w-16 bg-accent mx-auto mb-8"></div>
          
          <p className="text-xl text-foreground/50 font-light max-w-2xl mx-auto">
            Jälgi meid Instagramis ja näe meie igapäevatööd
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="font-light">{post.likes}</span>
                  </div>
                  <p className="text-xs font-light line-clamp-2 opacity-90">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/sasinstuudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 border-2 border-foreground/10 text-foreground hover:border-primary hover:text-primary transition-all duration-300 font-light tracking-wide text-sm uppercase rounded-full"
          >
            <Instagram className="w-4 h-4" />
            Jälgi Instagramis
          </a>
        </div>
      </div>
    </section>
  );
}