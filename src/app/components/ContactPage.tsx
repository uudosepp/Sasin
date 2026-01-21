import React, { useState } from 'react';
import { Footer } from './Footer';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from './Button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl mb-4 font-light tracking-tight text-white">
            Võta ühendust
          </h1>
          
          <div className="h-1 w-16 bg-secondary mx-auto mb-12"></div>
          
          <p className="text-2xl text-white/90 leading-relaxed font-light">
            Küsi lisainfot või broneeri stuudio aeg
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-12 font-light tracking-tight">
                Kontaktinfo
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 font-light">Aadress</h3>
                    <p className="text-foreground/60 font-light">
                      Muusika tee 15<br />
                      10156 Tallinn, Eesti
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 font-light">Telefon</h3>
                    <p className="text-foreground/60 font-light">
                      +372 5123 4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 font-light">E-post</h3>
                    <p className="text-foreground/60 font-light">
                      info@sasinstuudio.ee
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 font-light">Lahtiolekuajad</h3>
                    <p className="text-foreground/60 font-light">
                      E-R: 10:00 - 22:00<br />
                      L-P: 12:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-12 h-64 bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary/40" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg">
              <h2 className="text-4xl mb-8 font-light tracking-tight">
                Saada sõnum
              </h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl mb-3 font-light">Sõnum saadetud!</h3>
                  <p className="text-foreground/60 font-light">
                    Võtame teiega peagi ühendust.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-foreground/70 font-light">
                      Nimi *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-background/50 font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-foreground/70 font-light">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-background/50 font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-foreground/70 font-light">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-background/50 font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-foreground/70 font-light">
                      Sõnum *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-background/50 resize-none font-light"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 rounded-full"
                    style={{ backgroundColor: '#033c41', color: 'white' }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Saada sõnum
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}