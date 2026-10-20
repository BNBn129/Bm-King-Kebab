import React from 'react';
import { Award, Utensils, MessageSquareQuote, MapPin, ArrowRight, Coffee, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HomeExploreCardsProps {
  onSelectTab: (tab: 'about' | 'gallery' | 'reviews' | 'contact') => void;
}

export const HomeExploreCards: React.FC<HomeExploreCardsProps> = ({ onSelectTab }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#090a0e] border-b border-[#1f2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dine-In & Delivery Direct Action Banner */}
        <div className="mb-8 sm:mb-12 lg:mb-16 p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#11131c] border border-[#202534] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 lg:gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-amber-400">
                  Łódź Widzew · ul. Sacharowa 45A
                </span>
                <span className="text-xs text-slate-500 hidden xs:inline">·</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Na miejscu, na wynos i z dowozem</span>
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-white mt-1">
                Odwiedź nas stacjonarnie lub zamów telefonicznie
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Wygodny parking tuż pod wejściem, gorąca bezpłatna turecka herbata na powitanie i ekspresowa realizacja zamówień.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0 w-full md:w-auto">
            <div className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#171a25] border border-[#272d3f] text-xs text-slate-200">
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span>Darmowa herbata</span>
            </div>
            <div className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#171a25] border border-[#272d3f] text-xs text-slate-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Czynne do 02:00</span>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-left max-w-2xl mb-6 sm:mb-8 lg:mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-amber-500 mb-1">
            Poznaj BM King Kebab
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white tracking-tight">
            Wszystko o naszym lokalu
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Wybierz interesującą Cię sekcję:
          </p>
        </div>

        {/* 4 Navigation Cards with Smooth Transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          
          {/* Card 1: About */}
          <button
            onClick={() => onSelectTab('about')}
            className="group p-5 sm:p-6 rounded-2xl bg-[#11131c] border border-[#202534] hover:border-amber-500/50 hover:bg-[#141724] hover:shadow-xl hover:shadow-amber-500/5 text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer hover:-translate-y-1 active:scale-98"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors duration-200">
                O Nas & Nagrody
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Historia naszej kuchni, sekret anatolijskich marynat i tradycja darmowej herbaty tureckiej.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 pt-2">
              <span>Zobacz historię</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 2: Recipes & Specialties */}
          <button
            onClick={() => onSelectTab('gallery')}
            className="group p-5 sm:p-6 rounded-2xl bg-[#11131c] border border-[#202534] hover:border-amber-500/50 hover:bg-[#141724] hover:shadow-xl hover:shadow-amber-500/5 text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer hover:-translate-y-1 active:scale-98"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors duration-200">
                Receptury & Rytuały
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Autorskie kompozycje, oryginalny zapiekany kapsalon, talerze z fetą i rytuał parzenia herbaty.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 pt-2">
              <span>Odkryj specjały</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 3: Reviews */}
          <button
            onClick={() => onSelectTab('reviews')}
            className="group p-5 sm:p-6 rounded-2xl bg-[#11131c] border border-[#202534] hover:border-amber-500/50 hover:bg-[#141724] hover:shadow-xl hover:shadow-amber-500/5 text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer hover:-translate-y-1 active:scale-98"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors duration-200">
                Opinie Gości (4.9★)
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Ponad 928 zweryfikowanych recenzji z Google i Restaurant Guru potwierdzających królewski standard.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 pt-2">
              <span>Czytaj recenzje</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 4: Location & Hours */}
          <button
            onClick={() => onSelectTab('contact')}
            className="group p-5 sm:p-6 rounded-2xl bg-[#11131c] border border-[#202534] hover:border-amber-500/50 hover:bg-[#141724] hover:shadow-xl hover:shadow-amber-500/5 text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer hover:-translate-y-1 active:scale-98"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors duration-200">
                Lokalizacja & Godziny
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                {RESTAURANT_INFO.address}. Mapa Google, godziny otwarcia i darmowe miejsca parkingowe.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 pt-2">
              <span>Sprawdź dojazd</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
