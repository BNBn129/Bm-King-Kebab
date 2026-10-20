import React from 'react';
import { Star, CheckCircle, Award } from 'lucide-react';
import { TESTIMONIALS, RESTAURANT_INFO } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="opinie" className="py-10 sm:py-16 lg:py-20 bg-[#0b0c10] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-4 sm:mb-8 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 sm:mb-2">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            <span>Zaufanie Potwierdzone Ocenami</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Co mówią goście BM King Kebab
          </h2>
          <p className="mt-1 sm:mt-1.5 text-xs sm:text-xs md:text-sm lg:text-base text-slate-300">
            Średnia ocena <span className="text-amber-400 font-bold font-mono">4.9 / 5.0</span> na podstawie ponad{' '}
            <span className="text-white font-semibold font-mono">928 recenzji</span> w serwisach Restaurant Guru i Google.
          </p>
        </div>

        {/* Testimonials Grid: 1 col on mobile, 2 cols on tablet, 3 cols on laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-3.5 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#12141a] border border-[#232733] flex flex-col justify-between space-y-2.5 sm:space-y-4 lg:space-y-6 relative"
            >
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-2.5 sm:pt-4 border-t border-[#1e222e] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-bold text-white">{t.author}</p>
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500">{t.role}</p>
                </div>

                <div className="text-right text-[9px] sm:text-[10px] md:text-[11px] text-slate-500">
                  <p className="font-medium text-slate-400">{t.source}</p>
                  <p>{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#141721] border border-[#232733] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="space-y-0.5 sm:space-y-1">
            <h4 className="text-xs sm:text-sm md:text-base font-bold text-white">Chcesz podzielić się swoją opinią?</h4>
            <p className="text-[10px] sm:text-xs text-slate-400">
              Każde słowo naszych gości pozwala nam doskonalić receptury i utrzymać najwyższy poziom kulinarny w Łodzi.
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#1f2433] hover:bg-[#2a3044] text-slate-200 hover:text-white text-[11px] sm:text-xs font-semibold rounded-lg border border-[#30384d] transition-colors whitespace-nowrap shrink-0"
          >
            Napisz recenzję na Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};
