import React from 'react';
import { Award, ShieldCheck, Heart, Car, Sparkles, CheckCircle2, Star } from 'lucide-react';

export const AwardsAndStory: React.FC = () => {
  return (
    <section id="o-nas" className="py-16 lg:py-24 bg-[#0e1017] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase font-semibold tracking-widest text-amber-500 mb-2">
            Pasja · Tradycja · Uznanie
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Dlaczego BM King Kebab zdobył serca mieszkańców Łodzi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            BM King Kebab w Łodzi to wielokrotnie nagradzany punkt na kulinarnej mapie miasta. 
            Jako Złoty Laureat plebiscytu „Orły Gastronomii” w latach 2025 i 2026, łączymy wielowiekową 
            tradycję kuchni Bliskiego Wschodu z nowoczesnymi standardami czystości i najwyższej świeżości.
          </p>
        </div>

        {/* Content Split: Story Pillars & Accolade Showcase (NO AI PHOTOS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 4 Pillars of Excellence */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">Dwukrotny Złoty Laureat „Orły Gastronomii”</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Nagroda przyznawana na podstawie autentycznych ocen gości z całego kraju. 
                  Średnia 4.9 gwiazdki z niemal tysiąca recenzji potwierdza stałą, powtarzalną jakość każdego dania.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">Sekret Soczystego Mięsa & Marynat</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Stawiamy na najwyższej jakości drób oraz wyselekcjonowaną wołowinę i baraninę, 
                  marynowane przez wiele godzin w kompozycji ziół z Anatolii. Klienci szczególnie wyróżniają kruchość i wyrazistość naszego kurczaka.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">Królewska Gościnność & Świeże Surówki</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Wierzymy, że jedzenie to relacja. Każde zamówienie przygotowujemy na bieżąco, 
                  dbając o chrupkość surówek, gorące pieczywo i nienaganną czystość.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                <Car className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">Wygoda: Parking, Podjazd & Szybka Dostawa</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lokal przy ul. Andrzeja Sacharowa 45A dysponuje bezpłatnymi miejscami parkingowymi, 
                  jest w pełni dostępny dla wózków inwalidzkich oraz realizuje zamówienia z szybkim dowozem na terenie całej Łodzi.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Prestigious Certificate & Values Plinth (NO AI PHOTOS) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#151824] to-[#0c0d14] border border-amber-500/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#232733] pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Certyfikat Doskonałości Kulinarnej</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 font-mono">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
              </div>

              <div className="space-y-2 text-center py-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Plebiscyt Ogólnopolski</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  ORŁY GASTRONOMII
                </h3>
                <p className="text-amber-400 text-lg font-bold font-mono">
                  Złoty Laureat 2025 & 2026
                </p>
                <p className="text-xs text-slate-300 max-w-sm mx-auto pt-2">
                  Oficjalne wyróżnienie dla BM King Kebab w Łodzi za stałą jakość, higienę i zaufanie gości.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#232733] text-center">
                <div className="p-3 rounded-lg bg-[#0b0c10] border border-[#1f232f]">
                  <p className="text-base font-bold text-white font-mono">928+</p>
                  <p className="text-[11px] text-slate-400">Opinii Restaurant Guru & Google</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0b0c10] border border-[#1f232f]">
                  <p className="text-base font-bold text-emerald-400 font-mono">100%</p>
                  <p className="text-[11px] text-slate-400">Świeże mięso & własne sosy</p>
                </div>
              </div>

            </div>

            {/* Inclusivity & Dietary Note */}
            <div className="p-6 rounded-xl bg-[#141721] border border-[#232733] space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Menu Przyjazne Wszystkim Preferencjom
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Oprócz klasycznych mięs oferujemy pyszne opcje wegetariańskie (chrupiący falafel, sałatka grecka z oryginalną fetą), 
                różnorodne rozmiary porcji dopasowane do każdego apetytu oraz pełną przejrzystość składników i alergenów.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
