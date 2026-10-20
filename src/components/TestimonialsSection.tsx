import React from 'react';
import { Star, CheckCircle, Award, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, RESTAURANT_INFO } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="opinie" className="py-10 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Zaufanie Potwierdzone Ocenami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight [text-wrap:balance]">
            Co mówią goście BM King Kebab
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
            Średnia ocena <span className="text-amber-600 font-extrabold font-mono">4.9 / 5.0</span> na podstawie ponad{' '}
            <span className="text-stone-900 font-bold font-mono">928 recenzji</span> w serwisach Google oraz Restaurant Guru.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-bold text-stone-900">{t.author}</p>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-[11px] text-stone-500">{t.role}</p>
                </div>

                <div className="text-right text-[11px] text-stone-400">
                  <p className="font-semibold text-stone-600">{t.source}</p>
                  <p>{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-stone-900">Odwiedziłeś nasz lokal na Sacharowa 45A?</h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Twoja opinia pomaga nam codziennie dbać o najwyższy standard dań i gościnności.
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Napisz recenzję na Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
