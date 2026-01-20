import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-lg sm:text-xl mb-4 text-secondary">Kontakt</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@sasinstuudio.ee" 
                className="flex items-center gap-2 hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@sasinstuudio.ee
              </a>
              <a 
                href="tel:+3725551234" 
                className="flex items-center gap-2 hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +372 555 1234
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl mb-4 text-secondary">Aadress</h3>
            <p className="opacity-90 text-sm sm:text-base">
              Päeva 23<br />
              10313 Tallinn<br />
              Eesti
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl mb-4 text-secondary">Jälgi meid</h3>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-secondary transition-colors text-sm sm:text-base"
            >
              <Facebook className="w-5 h-5 flex-shrink-0" />
              Facebook
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center opacity-75 text-sm">
          <p>&copy; {new Date().getFullYear()} Säsin Stuudio. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}