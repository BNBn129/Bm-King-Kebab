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
    <section id="kontakt" className="py-10 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Gdzie Nas Znaleźć
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
            Odwiedź BM King Kebab w Łodzi
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
            Czekamy na Ciebie przy ulicy Andrzeja Sacharowa 45A na łódzkim Widzewie. 
            Serwujemy posiłki na miejscu, przygotowujemy zamówienia na wynos oraz realizujemy szybkie dowozy.
          </p>
        </div>

        {/* 2-Column Grid: Hours Table & Map Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Weekly Hours & Amenities */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <h3 className="text-base font-bold text-stone-900">Godziny Otwarcia</h3>
                  <p className="text-xs text-emerald-700 font-semibold">Czynne 7 dni w tygodniu do późna</p>
                </div>
              </div>

              {/* Weekly Schedule Rows */}
              <div className="space-y-1.5">
                {RESTAURANT_INFO.schedule.map((item) => {
                  const isToday = item.dayIndex === todayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between text-xs py-2 px-3 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-amber-50 border border-amber-300 font-bold text-amber-900'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] text-amber-700 uppercase font-black tracking-wider">
                            (Dziś)
                          </span>
                        )}
                      </span>
                      <span className="font-mono tabular-nums font-semibold">
                        {item.open} – {item.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amenities Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center space-y-1 shadow-xs">
                <Car className="w-5 h-5 text-amber-600 mx-auto" />
                <p className="text-xs font-bold text-stone-900">Parking</p>
                <p className="text-[10px] text-stone-500">Przed lokalem</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center space-y-1 shadow-xs">
                <Accessibility className="w-5 h-5 text-amber-600 mx-auto" />
                <p className="text-xs font-bold text-stone-900">Dla Wózków</p>
                <p className="text-[10px] text-stone-500">Bez barier</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center space-y-1 shadow-xs">
                <Coffee className="w-5 h-5 text-amber-600 mx-auto" />
                <p className="text-xs font-bold text-stone-900">Herbata</p>
                <p className="text-[10px] text-stone-500">Gratis</p>
              </div>
            </div>

          </div>

          {/* Right Column: Address Details & Interactive Route Container */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            <div className="p-5 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-5">
              
              {/* Contact & Address Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-stone-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>Adres Restauracji</span>
                  </div>
                  <p className="text-base font-bold text-stone-900">{RESTAURANT_INFO.address}</p>
                  <p className="text-xs text-stone-500">Łódź Widzew · 92-517</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Kontakt Telefoniczny</span>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-base font-bold text-amber-700 hover:text-amber-800 font-mono transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-stone-500">Zamówienia na wynos i dowóz</p>
                </div>
              </div>

              {/* Action Buttons: Copy Address & Google Route */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Wyznacz trasę w Google Maps</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-2 px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl border border-stone-200 transition-colors cursor-pointer active:scale-95"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Skopiowano adres!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-600" />
                      <span>Kopiuj adres</span>
                    </>
                  )}
                </button>
              </div>

              {/* Map Embed or Visual Card */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 h-64 sm:h-72 relative">
                <iframe
                  title="Mapa dojazdu do BM King Kebab Łódź ul. Sacharowa 45A"
                  src="https://maps.google.com/maps?q=Andrzeja+Sacharowa+45A,+92-517+Łódź&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
