import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationAndHours: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const todayIndex = new Date().getDay();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-[#07080b] border-b border-[#181a24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="godziny" className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-amber-500/50" />
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-royal">
              Adres & Godziny
            </p>
            <span className="w-8 h-[1px] bg-amber-500/50" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-royal tracking-wide [text-wrap:balance]">
            Lokalizacja & Kontakt
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-serif italic">
            Zapraszamy do naszego lokalu na łódzkim Widzewie przy ul. Sacharowa 45A.
          </p>
        </div>

        {/* 2-Column Luxury Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Weekly Schedule */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-[#0c0d14] border border-[#1d1f2b] space-y-5 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-[#1b1c28]">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-royal">
                    Godziny Otwarcia
                  </h3>
                  <p className="text-[11px] text-amber-400/90 font-medium">Otwarte 7 dni w tygodniu</p>
                </div>
              </div>

              <div className="space-y-2">
                {RESTAURANT_INFO.schedule.map((item) => {
                  const isToday = item.dayIndex === todayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between text-xs py-2.5 px-3.5 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-amber-500/15 border border-amber-500/35 font-bold text-amber-300 shadow-sm'
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[9px] uppercase tracking-wider font-black text-amber-400">
                            (Dziś)
                          </span>
                        )}
                      </span>
                      <span className="font-mono tabular-nums text-slate-200">
                        {item.open} – {item.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Call Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#12141f] to-[#0a0a0f] border border-amber-500/25 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Telefon do lokalu
                </p>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-xl font-extrabold text-amber-400 hover:text-amber-300 font-mono tracking-wider transition-colors block"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="p-3.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                title="Zadzwoń teraz"
              >
                <Phone className="w-5 h-5 fill-black" />
              </a>
            </div>

          </div>

          {/* Right Column: Address, Map & Navigation */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-7 rounded-3xl bg-[#0c0d14] border border-[#1d1f2b] space-y-6 shadow-xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1b1c28]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider font-royal">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Adres Restauracji</span>
                  </div>
                  <p className="text-lg font-bold text-white">{RESTAURANT_INFO.address}</p>
                  <p className="text-xs text-slate-400 font-serif italic">Łódź Widzew · Bezpłatny parking</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-amber-500/15 active:scale-95 cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Nawiguj</span>
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#141620] hover:bg-[#1d202e] text-slate-200 text-xs font-semibold rounded-xl border border-[#272b3b] transition-colors cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Skopiowano</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopiuj</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Map embed with dark styling */}
              <div className="relative rounded-2xl overflow-hidden border border-[#222533] bg-[#050507] h-64 sm:h-80">
                <iframe
                  title="Mapa dojazdu BM King Kebab Łódź"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.7578278272517!2d19.528659177114674!3d51.75883219213197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb849f170cf9%3A0x6b2b73bc286c7cf6!2sAndrzeja%20Sacharowa%2045A%2C%2092-517%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1710000000000!5m2!1spl!2spl"
                  className="w-full h-full border-0 grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Subtle pin watermark badge */}
                <div className="absolute bottom-3 left-3 bg-[#06070a]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#222533] text-xs pointer-events-none">
                  <p className="font-extrabold text-amber-400 font-royal">BM KING KEBAB</p>
                  <p className="text-[11px] text-slate-300 font-sans">{RESTAURANT_INFO.addressShort}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
