import React from 'react';
import { Award, Star, ArrowRight, Phone, Utensils, Clock, MapPin, Car, Sparkles, Plus } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen, setSelectedModalDish } = useCart();
  const signatureDish = MENU_ITEMS.find((i) => i.id === 'talerz-special-king') || MENU_ITEMS[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#232733]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Accolade Lead */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-amber-400 font-medium">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Award className="w-4 h-4 text-amber-400" />
                Złoty Laureat Orły Gastronomii 2025 & 2026
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9 / 5.0 (928+ opinii)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              Królewski smak tradycyjnego kebabu w sercu Łodzi.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Odkryj autentyczną kuchnię orientalną docenioną przez setki łodzian. 
              Soczyste, perfekcyjnie przyprawione mięso, chrupiące pieczywo z pieca oraz wyraziste autorskie sosy.
            </p>

            {/* Unboxed Metadata Highlights */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                ul. Andrzeja Sacharowa 45A, Łódź
              </span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                Czynne codziennie do 01:00 (pt-sb do 02:00)
              </span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Car className="w-3.5 h-3.5 text-amber-500" />
                Darmowy parking pod lokalem
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm rounded-lg transition-all shadow-lg shadow-amber-500/20 active:scale-98"
              >
                <Utensils className="w-4 h-4" />
                <span>Przeglądaj Menu</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171a23] hover:bg-[#202431] text-white font-medium text-sm rounded-lg border border-[#2d3345] transition-all cursor-pointer active:scale-98"
              >
                <span>Szybkie Zamówienie</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Featured Dish Showcase (NO AI PHOTOS) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#12141a] border border-[#232733] shadow-2xl space-y-6 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="flex items-center justify-between border-b border-[#232733] pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Danie Flagowe Restauracji</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                  Złoty Standard
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {signatureDish.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-400 font-mono tabular-nums">
                    {signatureDish.price.toFixed(2)} zł
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {signatureDish.description}
                </p>
                <div className="text-xs text-slate-400 pt-2">
                  <span className="text-slate-500 font-medium">Skład:</span> {signatureDish.ingredients}
                </div>
              </div>

              <div className="pt-2 border-t border-[#1e222f] flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setSelectedModalDish(signatureDish)}
                  className="w-full flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md shadow-amber-500/15 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Plus className="w-4 h-4" />
                  <span>Skonfiguruj & Dodaj</span>
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-full sm:w-auto py-3 px-4 bg-[#1b1f2b] hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg border border-[#2d3345] transition-colors"
                >
                  Zobacz Koszyk
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-slate-400 border-t border-[#1e222f]">
                <div>
                  <span className="text-slate-300 font-semibold block">Odbiór Osobisty</span>
                  <span>Sacharowa 45A (0 zł)</span>
                </div>
                <div>
                  <span className="text-slate-300 font-semibold block">Dostawa w Łodzi</span>
                  <span>Szybki dowóz pod drzwi</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Highlights Strip Below Split */}
        <div className="mt-14 pt-10 border-t border-[#1d212b] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums text-amber-400">
              4.9 <span className="text-base text-slate-400">/ 5.0</span>
            </p>
            <p className="text-xs font-semibold text-slate-200">928+ Zweryfikowanych Opinii</p>
            <p className="text-xs text-slate-400">Restaurant Guru & Google Reviews</p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-white font-display text-amber-400">
              2025 & 2026
            </p>
            <p className="text-xs font-semibold text-slate-200">Złoty Laureat</p>
            <p className="text-xs text-slate-400">Plebiscyty Orły Gastronomii</p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              09:00 - 02:00
            </p>
            <p className="text-xs font-semibold text-slate-200">Królewskie Godziny</p>
            <p className="text-xs text-slate-400">Otwarte 7 dni w tygodniu do późna</p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-white font-display text-amber-400">
              100% Świeżości
            </p>
            <p className="text-xs font-semibold text-slate-200">Darmowy Parking & Podjazd</p>
            <p className="text-xs text-slate-400">Miejsca tuż przed lokalem</p>
          </div>

        </div>

      </div>
    </section>
  );
};
