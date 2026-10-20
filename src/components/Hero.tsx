import React from 'react';
import { Award, Star, ArrowRight, Phone, Utensils, Clock, MapPin, Coffee, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface HeroProps {
  onGoToMenu?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGoToMenu }) => {
  const { setIsCartOpen } = useCart();

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 border-b border-[#1f2330] bg-[#090a0e]">
      {/* Editorial Luxury Ambient Glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-gradient-to-b from-amber-500/12 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-24 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Hero Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          
          {/* Editorial Kicker & Award Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141722] border border-amber-500/25 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm shadow-amber-500/5 transition-all duration-300 hover:border-amber-500/50">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="uppercase tracking-wider">Złoty Laureat Orły Gastronomii 2025 & 2026</span>
            <span className="text-slate-600 hidden xs:inline">·</span>
            <span className="text-slate-300 hidden xs:inline flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" /> 4.9/5
            </span>
          </div>

          {/* Prominent, Bold Mobile & Desktop Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            Królewska tradycja. <br className="hidden xs:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Autentyczny smak.
            </span>
          </h1>

          {/* Editorial Description */}
          <p className="text-sm sm:text-base lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            Wielokrotnie nagradzany kebab orientalny w sercu Łodzi. 
            Soczyste, długo marynowane mięso w anatolijskich ziołach, świeżo wypiekany chleb 
            i tradycyjny parzący çay na powitanie każdego gościa.
          </p>

          {/* Location & Opening Hours Strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 pt-1">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>ul. Andrzeja Sacharowa 45A, Łódź</span>
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Otwarte do 01:00 (pt-sb do 02:00)</span>
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Darmowa herbata & parking</span>
            </span>
          </div>

          {/* Primary Action Buttons with Smooth Transitions */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onGoToMenu}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
            >
              <Utensils className="w-4 h-4" />
              <span>Przeglądaj Kartę Dań</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-6 sm:py-4 bg-[#141722] hover:bg-[#1a1f2e] text-white font-semibold text-xs sm:text-sm rounded-xl border border-[#2b3145] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Szybkie Zamówienie</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-4 text-slate-300 hover:text-amber-400 font-medium text-xs sm:text-sm transition-colors duration-200 text-center"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>

        </div>

        {/* 4-Column Proof & Metric Cards - High-Contrast Editorial Surfaces */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-10 border-t border-[#1a1e2b] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              4.9 <span className="text-xs sm:text-sm text-slate-400 font-normal">/ 5.0</span>
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">928+ Opinii Gości</p>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Google & Restaurant Guru</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400">
              2025 & 2026
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Złoty Laureat</p>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Plebiscyt Orły Gastronomii</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
              09:00 - 02:00
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Otwarte 7 Dni</p>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Świeże dania do późnej nocy</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400">
              100% Gratis
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Turecka Herbata</p>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Parking tuż przy wejściu</p>
          </div>

        </div>

      </div>
    </section>
  );
};
