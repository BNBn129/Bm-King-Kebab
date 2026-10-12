import React from 'react';
import { Award, Star, Car, Accessibility, ShieldCheck, Quote } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AwardsAndStory: React.FC = () => {
  return (
    <section id="nagrody" className="py-20 lg:py-28 bg-[#050507] border-b border-[#181a24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prestige Plinth Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0f1018] via-[#090a0f] to-[#06070a] border border-amber-500/25 p-8 sm:p-14 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Backlight */}
          <div 
            className="absolute -top-24 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Golden Award Certificate */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold uppercase tracking-widest text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Plebiscyt Ogólnopolski</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-royal tracking-wide leading-tight">
                Złoty Laureat <br />
                <span className="text-gold-gradient">Orły Gastronomii</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-serif italic">
                Wyróżnienie przyznane dwukrotnie — w 2025 oraz 2026 roku — za bezkompromisową jakość potraw, 
                czystość oraz najwyższy wskaźnik zadowolenia gości w Łodzi.
              </p>

              {/* Verified Rating Metric */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
                <div className="p-4 rounded-xl bg-[#09090d] border border-[#1f2230] text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-400 font-bold font-mono text-xl">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <span>4.9</span>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 font-medium">
                    Ocena z 928 opinii
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#09090d] border border-[#1f2230] text-center">
                  <p className="text-xl font-bold text-white font-royal">2025 & 2026</p>
                  <p className="text-[10px] text-amber-400 uppercase tracking-wider mt-1 font-medium">
                    Złote Godło
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Culinary Pillars & Real Guest Praise */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-[#0a0b10] border border-[#1a1c26] space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Starannie Selekcjonowane Mięso & Autorskie Zioła
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">
                  Soczysty kurczak i wyselekcjonowane mięso wołowo-baranie, pieczone tradycyjną metodą 
                  i podawane w chrupiącym pieczywie z pieca ze świeżo krojonymi surówkami.
                </p>
              </div>

              {/* Feature 2: Editorial Review Quote */}
              <div className="p-5 rounded-2xl bg-[#0a0b10] border border-[#1a1c26] space-y-2 relative">
                <Quote className="w-5 h-5 text-amber-500/40 absolute top-4 right-4" />
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xs text-slate-200 italic leading-relaxed">
                  "Bez wątpienia jeden z najlepszych kebabów w Łodzi. Soczyste mięso, ogromne porcje i świetne autorskie sosy. Zdecydowanie polecam każdemu."
                </blockquote>
                <p className="text-[11px] text-slate-400 font-medium pt-1">
                  — Zweryfikowana opinia gościa · Restaurant Guru & Google
                </p>
              </div>

              {/* Feature 3: Parking & Accessibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0a0b10] border border-[#1a1c26] flex items-center gap-3">
                  <Car className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Darmowy Parking</p>
                    <p className="text-[11px] text-slate-400">Przed samym wejściem</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0b10] border border-[#1a1c26] flex items-center gap-3">
                  <Accessibility className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Dostęp dla Wózków</p>
                    <p className="text-[11px] text-slate-400">Wygodny podjazd bez barier</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
