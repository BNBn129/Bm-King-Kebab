import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy, Car, Accessibility, Coffee } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationAndHours: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const todayIndex = new Date().getDay();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-[#0e1017] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase font-semibold tracking-widest text-amber-500 mb-2">
            Gdzie Nas Znaleźć
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Odwiedź BM King Kebab w Łodzi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Czekamy na Ciebie przy ulicy Andrzeja Sacharowa 45A na łódzkim Widzewie. 
            Serwujemy posiłki na miejscu, przygotowujemy zamówienia na wynos oraz realizujemy szybkie dowozy.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Weekly Hours & Amenities */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#12141a] border border-[#232733] space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#232733]">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-base font-bold text-white">Godziny Otwarcia</h3>
                  <p className="text-xs text-amber-400/90 font-medium">Otwarte 7 dni w tygodniu do późnych godzin</p>
                </div>
              </div>

              {/* Weekly Schedule Rows */}
              <div className="space-y-2.5">
                {RESTAURANT_INFO.schedule.map((item) => {
                  const isToday = item.dayIndex === todayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between text-xs py-1.5 px-3 rounded-lg transition-colors ${
                        isToday
                          ? 'bg-amber-500/15 border border-amber-500/30 font-semibold text-amber-300'
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] text-amber-400 uppercase tracking-wider font-bold">
                            (Dzisiaj)
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
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#12141a] border border-[#232733] text-center space-y-1.5">
                <Car className="w-5 h-5 text-amber-400 mx-auto" />
                <p className="text-xs font-semibold text-white">Darmowy Parking</p>
                <p className="text-[10px] text-slate-400">Przed lokalem</p>
              </div>

              <div className="p-4 rounded-xl bg-[#12141a] border border-[#232733] text-center space-y-1.5">
                <Accessibility className="w-5 h-5 text-amber-400 mx-auto" />
                <p className="text-xs font-semibold text-white">Dla Wózków</p>
                <p className="text-[10px] text-slate-400">Podjazd bez barier</p>
              </div>
            </div>

          </div>

          {/* Right Column: Address Details & Map */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-2xl bg-[#12141a] border border-[#232733] space-y-6">
              
              {/* Contact & Address Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-[#232733]">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Adres Restauracji</span>
                  </div>
                  <p className="text-base font-bold text-white">{RESTAURANT_INFO.address}</p>
                  <p className="text-xs text-slate-400">Łódź Widzew · 92-517</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Kontakt Telefoniczny</span>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-base font-bold text-amber-400 hover:text-amber-300 font-mono transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400">Szybkie zamówienia z odbiorem i dowozem</p>
                </div>
              </div>

              {/* Action Buttons: Copy Address & Google Route */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/10 active:scale-98"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Nawiguj w Google Maps</span>
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
