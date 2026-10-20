import React from 'react';
import { ArrowRight, Flame, Sparkles, Plus, Star, Check } from 'lucide-react';
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
    <section className="py-12 sm:py-16 lg:py-24 bg-[#090a0e] border-b border-[#1f2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400 mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Wybór Szefa Kuchni</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
              Trzy Królewskie Bestsellery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Najchętniej zamawiane kompozycje w Łodzi. Świeże pieczywo, soczyste mięsa marynowane w autorskich ziołach i bukiet chrupiących warzyw.
            </p>
          </div>

          <button
            onClick={onGoToMenu}
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#13151f] hover:bg-amber-500 hover:text-black text-amber-400 font-bold text-xs sm:text-sm rounded-xl border border-[#262c3e] hover:border-amber-500 transition-all duration-300 cursor-pointer whitespace-nowrap self-start sm:self-auto active:scale-95 shadow-sm"
          >
            <span>Zobacz całą kartę dań</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* 3 Featured Typographic Editorial Cards (Zero cheap photos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {teaserItems.map((item) => {
            if (!item) return null;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#11131c] border border-[#202534] hover:border-amber-500/50 hover:bg-[#141724] hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Top: Category Badge & Price */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-[#1b1f2b]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171a25] border border-amber-500/20 text-amber-400 text-xs font-semibold">
                      {item.isSignature ? (
                        <>
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          <span>Autorski Specjał</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Kultowy Bestseller</span>
                        </>
                      )}
                    </span>

                    <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">
                      {item.price.toFixed(2)} zł
                    </span>
                  </div>

                  {/* Dish Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Dish Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Composition / Ingredients List */}
                  <div className="mt-4 pt-4 border-t border-[#1a1e2b] space-y-1.5 text-xs text-slate-400">
                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Składniki:</p>
                    <p className="text-slate-300 leading-normal">{item.ingredients}</p>
                  </div>

                  {/* Size options available */}
                  {item.sizes && item.sizes.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-400">
                      {item.sizes.map((sz) => (
                        <span key={sz} className="px-2 py-0.5 rounded bg-[#181c28] border border-[#282f42] text-slate-300">
                          {sz}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-[#1a1e2b]">
                  <button
                    onClick={() => setSelectedModalDish(item)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-bold text-xs sm:text-sm border border-amber-500/30 hover:border-amber-500 transition-all duration-200 cursor-pointer active:scale-95"
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
