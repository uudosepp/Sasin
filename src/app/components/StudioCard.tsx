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
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-2">{name}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <Button onClick={onBook} variant="outline" className="w-full">
          Vaata & broneeri
        </Button>
      </div>
    </div>
  );
}
