import React from 'react';
import { ArrowRight, Flame, Sparkles, Plus, Star, Award, Coffee, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface HomeTeaserMenuProps {
  onGoToMenu: () => void;
}

export const HomeTeaserMenu: React.FC<HomeTeaserMenuProps> = ({ onGoToMenu }) => {
  const { setSelectedModalDish } = useCart();

  // Exactly 3 top signature dishes to tease and entice visitors
  const preferredIds = ['tal-krolewski', 'kapsalon-s', 'tor-mega-super'];
  const matched = preferredIds
    .map((id) => MENU_ITEMS.find((item) => item.id === id))
    .filter((item): item is MenuItem => Boolean(item));

  // Fallback: ensure exactly 3 dishes are always displayed
  const teaserItems: MenuItem[] = matched.length === 3
    ? matched
    : [
        ...matched,
        ...MENU_ITEMS.filter((m) => !matched.some((t) => t.id === m.id))
      ].slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white text-slate-900 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Trust & Accolades Ribbon (Dark fonts on white background) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-slate-200">
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-800 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-950">Złoty Laureat 2025 & 2026</p>
              <p className="text-[11px] text-slate-600">Plebiscyt Orły Gastronomii Łódź</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-800 shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-950">Tradycyjny Çay Gratis</p>
              <p className="text-[11px] text-slate-600">Darmowa herbata na powitanie</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-800 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-950">Średnia 4.9 / 5.0 Gwiazdek</p>
              <p className="text-[11px] text-slate-600">928+ opinii Google & Restaurant Guru</p>
            </div>
          </div>
        </div>

        {/* Section Header with crisp, elegant dark fonts */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              <span>Wybór Szefa Kuchni</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-950 tracking-tight [text-wrap:balance]">
              Trzy Królewskie Bestsellery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Najchętniej zamawiane kompozycje w Łodzi. Świeżo wypiekane pieczywo, soczyste mięsa marynowane w autorskich ziołach i bukiet chrupiących warzyw.
            </p>
          </div>

          <button
            onClick={onGoToMenu}
            className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-950 hover:bg-amber-500 text-white hover:text-black font-bold text-xs sm:text-sm rounded-xl border border-slate-900 hover:border-amber-500 transition-all duration-300 cursor-pointer whitespace-nowrap self-start sm:self-auto active:scale-95 shadow-md shadow-slate-900/10"
          >
            <span>Zobacz całą kartę dań</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* 3 Featured Typographic Editorial Cards (Dark fonts, white/light surface) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {teaserItems.map((item) => {
            if (!item) return null;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#f8f9fa] border border-slate-200/90 hover:border-amber-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Top: Category Badge & Price */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-bold shadow-2xs">
                      {item.isSignature ? (
                        <>
                          <Flame className="w-3.5 h-3.5 text-amber-600" />
                          <span className="text-amber-900">Autorski Specjał</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span className="text-slate-900">Kultowy Bestseller</span>
                        </>
                      )}
                    </span>

                    <span className="text-xl sm:text-2xl font-black text-slate-950 font-mono tabular-nums">
                      {item.price.toFixed(2)} zł
                    </span>
                  </div>

                  {/* Dish Title (Dark Font) */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-amber-800 transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Dish Description (Dark Font) */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Composition / Ingredients List (Dark Font) */}
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-1.5 text-xs">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Składniki:</p>
                    <p className="text-slate-800 font-medium leading-normal">{item.ingredients}</p>
                  </div>

                  {/* Size options available */}
                  {item.sizes && item.sizes.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5 text-[11px]">
                      {item.sizes.map((sz) => (
                        <span key={sz} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs">
                          {sz}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedModalDish(item)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-amber-500 text-white hover:text-black font-bold text-xs sm:text-sm border border-slate-900 hover:border-amber-500 transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Dostosuj & Zamów</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
