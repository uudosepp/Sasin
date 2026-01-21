import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-background border-t border-border/20" style={{ backgroundColor: '#033c41' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 mb-16">
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-8 text-background/50 font-medium">Kontakt</h3>
            <div className="space-y-5">
              <a 
                href="mailto:info@sasinstuudio.ee" 
                className="flex items-center gap-3 hover:text-secondary transition-colors text-base font-light"
              >
                <Mail className="w-4 h-4 flex-shrink-0 opacity-60" />
                info@sasinstuudio.ee
              </a>
              <a 
                href="tel:+3725551234" 
                className="flex items-center gap-3 hover:text-secondary transition-colors text-base font-light"
              >
                <Phone className="w-4 h-4 flex-shrink-0 opacity-60" />
                +372 555 1234
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-8 text-background/50 font-medium">Aadress</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 flex-shrink-0 opacity-60 mt-1" />
              <p className="text-base font-light leading-relaxed">
                Päeva 23<br />
                10313 Tallinn<br />
                Eesti
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-8 text-background/50 font-medium">Sotsiaalmeedia</h3>
            <a 
              href="https://www.instagram.com/sasinstuudio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-secondary transition-colors text-base font-light"
            >
              <Instagram className="w-4 h-4 flex-shrink-0 opacity-60" />
              Instagram
            </a>
          </div>
        </div>
        
        <div className="pt-10 border-t border-background/10 text-center text-background/40 text-xs tracking-wider uppercase font-light">
          <p>&copy; {new Date().getFullYear()} Säsin Stuudio. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}