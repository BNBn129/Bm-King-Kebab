import React from 'react';
import { Award, Star, Phone, Utensils, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  // Determine if open right now
  const todayIndex = new Date().getDay();
  const todaySchedule = RESTAURANT_INFO.schedule.find((s) => s.dayIndex === todayIndex);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#050507] border-b border-[#181a24]">
      {/* Ambient Ember Glow in background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Emblem Plinth */}
        <div className="inline-flex flex-col items-center mb-8 relative">
          <div className="relative p-3 rounded-full bg-gradient-to-b from-amber-500/20 via-transparent to-transparent">
            <Logo size={148} />
          </div>

          {/* Gilded Accolade Ribbon */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12131b] border border-amber-500/30 text-xs font-semibold tracking-wider uppercase text-amber-300 shadow-[0_0_20px_-5px_rgba(245,158,11,0.2)]">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Złoty Laureat Orły Gastronomii 2025 & 2026</span>
          </div>
        </div>

        {/* Majestic Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase text-white font-royal leading-[1.08] [text-wrap:balance]">
          BM <span className="text-gold-gradient">KING</span> KEBAB
        </h1>

        <p className="mt-4 text-base sm:text-xl text-slate-300 font-serif italic max-w-2xl mx-auto leading-relaxed">
          Królewska jakość, tradycyjne przyprawy i bezkompromisowa gościnność w Łodzi.
        </p>

        {/* 3 Editorial Trust Metrics with Hairline Brass Dividers */}
        <div className="mt-8 max-w-3xl mx-auto py-4 px-6 rounded-2xl bg-[#0c0d14]/80 border border-[#1d1f2b] backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold font-mono text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">928+ opinii gości</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 sm:border-x sm:border-[#1e202e] sm:px-4">
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{RESTAURANT_INFO.addressShort}</span>
            </div>
            <p className="text-[11px] text-slate-400">Darmowy parking przed lokalem</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Otwarte: {todaySchedule?.open} – {todaySchedule?.close}</span>
            </div>
            <p className="text-[11px] text-emerald-400 font-medium">7 dni w tygodniu do późna</p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all shadow-[0_0_25px_-5px_rgba(245,158,11,0.35)] active:scale-95"
          >
            <Utensils className="w-4 h-4" />
            <span>Karta Menu & Cennik</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#10121b] hover:bg-[#181a26] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-amber-500/25 transition-all active:scale-95 hover:border-amber-500/40"
          >
            <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
