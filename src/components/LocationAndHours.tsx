import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy, Car, Accessibility, Coffee } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationAndHours: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Determine current day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const todayIndex = new Date().getDay();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="kontakt" className="py-10 sm:py-16 lg:py-20 bg-[#0e1017] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-4 sm:mb-8 lg:mb-16">
          <p className="text-[10px] sm:text-[11px] lg:text-xs uppercase font-semibold tracking-widest text-amber-500 mb-1 sm:mb-2">
            Gdzie Nas Znaleźć
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Odwiedź BM King Kebab w Łodzi
          </h2>
          <p className="mt-1 sm:mt-1.5 text-xs sm:text-xs md:text-sm lg:text-base text-slate-300">
            Czekamy na Ciebie przy ulicy Andrzeja Sacharowa 45A na łódzkim Widzewie. 
            Serwujemy posiłki na miejscu, przygotowujemy zamówienia na wynos oraz realizujemy szybkie dowozy.
          </p>
        </div>

        {/* 2-Column Grid: Hours Table & Map Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Weekly Hours & Amenities */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 lg:space-y-6">
            
            <div className="p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-[#12141a] border border-[#232733] space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="flex items-center gap-2.5 sm:gap-3 pb-2.5 sm:pb-3 border-b border-[#232733]">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white">Godziny Otwarcia</h3>
                  <p className="text-[10px] sm:text-xs text-amber-400/90 font-medium">Otwarte 7 dni w tygodniu do późnych godzin</p>
                </div>
              </div>

              {/* Weekly Schedule Rows */}
              <div className="space-y-1.5 sm:space-y-2">
                {RESTAURANT_INFO.schedule.map((item) => {
                  const isToday = item.dayIndex === todayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between text-[11px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 rounded-lg transition-colors ${
                        isToday
                          ? 'bg-amber-500/15 border border-amber-500/30 font-semibold text-amber-300'
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[9px] sm:text-[10px] text-amber-400 uppercase tracking-wider font-bold">
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

            {/* Amenities Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 lg:p-4 rounded-xl bg-[#12141a] border border-[#232733] text-center space-y-1">
                <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mx-auto" />
                <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-white">Darmowy Parking</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400">Przed lokalem</p>
              </div>

              <div className="p-2 sm:p-3 lg:p-4 rounded-xl bg-[#12141a] border border-[#232733] text-center space-y-1">
                <Accessibility className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mx-auto" />
                <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-white">Dla Wózków</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400">Podjazd bez barier</p>
              </div>

              <div className="p-2 sm:p-3 lg:p-4 rounded-xl bg-[#12141a] border border-[#232733] text-center space-y-1">
                <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400 mx-auto" />
                <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-white">Herbata Gratis</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400">Na powitanie</p>
              </div>
            </div>

          </div>

          {/* Right Column: Address Details & Interactive Route Container */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-6">
            
            <div className="p-3.5 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#12141a] border border-[#232733] space-y-3 sm:space-y-4 lg:space-y-6">
              
              {/* Contact & Address Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pb-3 sm:pb-4 lg:pb-6 border-b border-[#232733]">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                    <span>Adres Restauracji</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-white">{RESTAURANT_INFO.address}</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">Łódź Widzew · 92-517</p>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                    <span>Kontakt Telefoniczny</span>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-xs sm:text-sm md:text-base font-bold text-amber-400 hover:text-amber-300 font-mono transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-[10px] sm:text-xs text-slate-400">Szybkie zamówienia z odbiorem i dowozem</p>
                </div>
              </div>

              {/* Action Buttons: Copy Address & Google Route */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-[11px] sm:text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/10 active:scale-98"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-2 px-4 py-3 bg-[#191d29] hover:bg-[#222737] text-slate-200 text-xs font-medium rounded-lg border border-[#2c3345] transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Adres skopiowany</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Skopiuj adres</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="relative rounded-xl overflow-hidden border border-[#232733] bg-[#0b0c10] h-64 sm:h-72">
                <iframe
                  title="Mapa lokalizacji BM King Kebab Łódź"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.7578278272517!2d19.528659177114674!3d51.75883219213197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb849f170cf9%3A0x6b2b73bc286c7cf6!2sAndrzeja%20Sacharowa%2045A%2C%2092-517%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1710000000000!5m2!1spl!2spl"
                  className="w-full h-full border-0 grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Pin Card Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#0b0c10]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#232733] text-xs pointer-events-none">
                  <p className="font-bold text-amber-400">BM KING KEBAB</p>
                  <p className="text-[11px] text-slate-300">Andrzeja Sacharowa 45A, Łódź</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
