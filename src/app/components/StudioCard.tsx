import React from 'react';
import { Button } from './Button';

interface StudioCardProps {
  name: string;
  description: string;
  image: string;
  onBook: () => void;
}

export function StudioCard({ name, description, image, onBook }: StudioCardProps) {
  return (
    <div className="group bg-card overflow-hidden cursor-pointer border border-border/50 hover:border-primary/20 transition-all duration-500 rounded-2xl" onClick={onBook}>
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-10 md:p-12">
        <h3 className="text-3xl md:text-4xl mb-6 font-light tracking-tight">{name}</h3>
        <p className="text-foreground/50 mb-10 leading-relaxed text-lg font-light">{description}</p>
        <div className="inline-flex items-center gap-3 text-primary group-hover:gap-5 transition-all text-sm tracking-wider uppercase">
          <span className="font-medium">Broneeri</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}