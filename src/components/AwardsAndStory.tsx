import React from 'react';
import { Award, ShieldCheck, Heart, Car, Sparkles, Flame, Coffee, ArrowRight, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import platterImg from '../assets/images/menu_talerz_kebab_1791999700741.jpg';
import pitaImg from '../assets/images/menu_pita_bulka_1791999721942.jpg';

interface AwardsAndStoryProps {
  onGoToMenu?: () => void;
}

export const AwardsAndStory: React.FC<AwardsAndStoryProps> = ({ onGoToMenu }) => {
  return (
    <section id="o-nas" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Pasja · Tradycja · Uznanie
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
            Dlaczego BM King Kebab to kulinarna wizytówka Łodzi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            BM King Kebab w Łodzi to wielokrotnie nagradzany punkt na kulinarnej mapie miasta. 
            Jako Złoty Laureat prestiżowego plebiscytu „Orły Gastronomii” w latach 2025 i 2026, łączymy 
            autentyczną recepturę z Anatolii z najwyższymi standardami świeżości, czystości i gościnności.
          </p>
        </div>

        {/* Content Split: 4 Pillars of Excellence + Official Graphic Accreditation Plaque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 4 Pillars of Excellence */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">Dwukrotny Złoty Laureat „Orły Gastronomii”</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Nagroda przyznawana na podstawie autentycznych ocen gości. 
                  Ocena 4.9 gwiazdki z ponad 928 recenzji potwierdza stałą, powtarzalną jakość każdej serwowanej porcji.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Flame className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">Sekret Soczystego Mięsa & Ziół Anatolii</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Stawiamy na najwyższej jakości drób oraz wyselekcjonowaną wołowinę, 
                  marynowane przez wiele godzin w kompozycji tradycyjnych ziół. Klienci wyróżniają wyjątkową soczystość.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">Tradycyjna Gościnność & Darmowy Çay</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Wierzymy, że jedzenie to relacja i serdeczność. Na każdego odwiedzającego nasz lokal czeka 
                  gorący napar tradycyjnej herbaty tureckiej podawany bezpłatnie na powitanie.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <Car className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900">Wygodny Parking & Sprawna Dostawa</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Lokal przy ul. Sacharowa 45A dysponuje darmowymi miejscami parkingowymi tuż przed wejściem 
                  oraz realizuje szybkie zamówienia na dowóz w Łodzi.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onGoToMenu}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <span>Przejdź do karty dań</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Graphic Accreditation Card + Photo */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Accreditation Plaque */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-white shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">Oficjalny Certyfikat</p>
                    <h4 className="text-lg sm:text-xl font-black text-white">Orły Gastronomii Łódź</h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
                    2025 · 2026
                  </span>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">4.9</span>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-stone-300 mt-1">928+ niezależnych opinii klientów w Google</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-1.5 text-xs text-stone-300">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Standard Jakości BM King Kebab
                  </p>
                  <p className="text-stone-300 leading-relaxed">
                    Weryfikowane standardy świeżości surowców, codzienny wypiek pieczywa oraz stała powtarzalność smaku. 
                    Każdy składnik przechodzi kontrolę jakości przed trafieniem na stół.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <span>Adres: Sacharowa 45A, Łódź</span>
                <span className="text-amber-400 font-semibold">Czynne 7 dni w tygodniu</span>
              </div>
            </div>

            {/* Real Kitchen & Dish Showcase Photo */}
            <div className="rounded-3xl overflow-hidden border border-stone-200/90 shadow-md">
              <img
                src={platterImg}
                alt="Autentyczny Talerz Królewski serwowany w lokalu"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-900">Serwowane w lokalu na Sacharowa 45A</p>
                  <p className="text-[11px] text-stone-500">Pita z pieca, świeża grecka feta i tradycyjne sosy</p>
                </div>
                <span className="text-xs font-bold text-amber-700">BM King Kebab</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
