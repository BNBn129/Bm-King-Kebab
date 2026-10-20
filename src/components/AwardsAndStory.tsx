import React from 'react';
import { Award, ShieldCheck, Heart, Car, Sparkles, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AwardsAndStoryProps {
  onGoToMenu?: () => void;
}

export const AwardsAndStory: React.FC<AwardsAndStoryProps> = ({ onGoToMenu }) => {
  return (
    <section id="o-nas" className="py-12 sm:py-16 lg:py-24 bg-[#090a0e] border-b border-[#1f2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-amber-500 mb-2">
            Pasja · Tradycja · Uznanie
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Dlaczego BM King Kebab to kulinarna wizytówka Łodzi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            BM King Kebab w Łodzi to wielokrotnie nagradzany punkt na kulinarnej mapie miasta. 
            Jako Złoty Laureat prestiżowego plebiscytu „Orły Gastronomii” w latach 2025 i 2026, łączymy 
            autentyczną recepturę z Anatolii z najwyższymi standardami świeżości i czystości.
          </p>
        </div>

        {/* Content Split: 4 Pillars of Excellence + Official Graphic Accreditation Plaque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 4 Pillars of Excellence */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            <div className="flex gap-4 p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white">Dwukrotny Złoty Laureat „Orły Gastronomii”</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Nagroda przyznawana na podstawie autentycznych ocen gości. 
                  Ocena 4.9 gwiazdki z ponad 900 recenzji potwierdza stałą, powtarzalną jakość każdej porcji.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white">Sekret Soczystego Mięsa & Ziół Anatolii</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Stawiamy na najwyższej jakości drób oraz wyselekcjonowaną wołowinę i baraninę, 
                  marynowane przez wiele godzin w kompozycji tradycyjnych ziół. Klienci wyróżniają wyjątkową soczystość.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white">Tradycyjna Gościnność & Darmowy Çay</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Wierzymy, że jedzenie to relacja i serdeczność. Na każdego odwiedzającego nasz lokal czeka 
                  gorący napar tradycyjnej herbaty tureckiej podawany bezpłatnie na powitanie.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-[#11131c] border border-[#202534] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                <Car className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white">Parking, Podjazd & Sprawna Dostawa</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Lokal przy ul. Sacharowa 45A dysponuje darmowymi miejscami parkingowymi tuż przed drzwiami 
                  oraz realizuje szybkie zamówienia na dowóz w Łodzi.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Graphic Accreditation Card (No cheap photos) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Bespoke Accreditation Plaque */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#151824] via-[#10121a] to-[#0c0d12] border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="flex items-center justify-between pb-6 border-b border-[#232838]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">Certyfikat Jakości</p>
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
                    <p className="text-xs text-slate-400 mt-1">928+ niezależnych opinii klientów</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0c10] border border-[#1e2332] space-y-2 text-xs sm:text-sm text-slate-300">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Standard Królewski BM King Kebab
                  </p>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Weryfikowane standardy higieny, świeżości surowców oraz stałej powtarzalności smaku. 
                    Każdy składnik przechodzi codzienną kontrolę jakości przed trafieniem na stół.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#232838] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>Lokalizacja: ul. Andrzeja Sacharowa 45A</span>
                <span className="text-amber-400 font-medium">Zweryfikowano oficjalnie</span>
              </div>
            </div>

            {/* Inclusivity & Dietary Note */}
            <div className="p-6 rounded-2xl bg-[#11131c] border border-[#202534] space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Menu Dopasowane Do Każdego Gościa
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Poza soczystymi mięsami oferujemy opcje wegetariańskie (chrupiący złocisty falafel, ser feta z oliwkami), 
                różne gramatury dań oraz pełną przejrzystość kompozycji składników i sosów.
              </p>

              {onGoToMenu && (
                <div className="pt-2">
                  <button
                    onClick={onGoToMenu}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <span>Zobacz całe menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
