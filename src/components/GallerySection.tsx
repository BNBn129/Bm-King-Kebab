import React from 'react';
import { Sparkles, Utensils, Flame, Award, Heart } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const GallerySection: React.FC = () => {
  const { setSelectedModalDish } = useCart();

  const specialties = [
    {
      id: 'talerz-special-king',
      title: 'Special King Talerz Kebab',
      category: 'Danie Flagowe',
      price: 30.0,
      description: 'Soczyste grillowane mięso z autorską kompozycją oryginalnej greckiej fety, czarnych oliwek, chrupiących frytek i świeżych surówek.',
      ingredients: 'Frytki, grillowane mięso, feta, oliwki, warzywa, autorski sos',
      dishItem: MENU_ITEMS.find((m) => m.id === 'talerz-special-king'),
      highlight: 'Złoty standard BM King Kebab',
      badgeIcon: Flame,
    },
    {
      id: 'box-kapsalon',
      title: 'Kapsalon Zapiekany w Piecu',
      category: 'Kultowy Bestseller',
      price: 26.0,
      description: 'Gorąca warstwa chrupiących frytek i wyselekcjonowanego mięsa zapieczona pod grubą kołderką ciągnącego się sera gouda ze świeżą sałatą i sosem czosnkowym.',
      ingredients: 'Mięso, frytki, ser zapiekany, świeża sałata, sos czosnkowy i ostry',
      dishItem: MENU_ITEMS.find((m) => m.id === 'box-kapsalon'),
      highlight: 'Najchętniej wybierany przez gości',
      badgeIcon: Sparkles,
    },
    {
      id: 'tor-mega-super',
      title: 'Mega Super Tortilla Kebab',
      category: 'Królewski Gigant',
      price: 32.0,
      description: 'Potrójna porcja mięsa, złociste frytki wewnątrz, ser, oliwki, grecka feta i surówki w chrupiącej opiekanej tortilli.',
      ingredients: 'Mięso x3, surówki, ser, oliwki, feta, frytki, sos',
      dishItem: MENU_ITEMS.find((m) => m.id === 'tor-mega-super'),
      highlight: 'Maksymalna sytość i smak',
      badgeIcon: Award,
    },
  ];

  return (
    <section id="specjaly" className="py-16 lg:py-24 bg-[#0e1017] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-semibold tracking-widest text-amber-500 mb-2">
              Sztuka Kulinarnego Rzemiosła
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
              Specjalności Szefa Kuchni
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Każde danie przygotowujemy z pieczołowitością, na świeżo i bez kompromisów. 
              Wybierz swoje ulubione danie i skonfiguruj dodatki według własnego smaku.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Zobacz wszystkie pozycje w menu</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 3-Column Specialties Grid (NO AI PHOTOS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item) => {
            const Icon = item.badgeIcon;
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#12141a] border border-[#232733] p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-xl pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-[11px] font-semibold text-amber-400">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </div>

                    <span className="text-xl font-bold text-amber-400 font-mono tabular-nums">
                      {item.price.toFixed(2)} zł
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-amber-400/90 font-medium mt-0.5">
                      {item.highlight}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="text-[11px] text-slate-400 pt-1">
                    <span className="text-slate-500 font-medium">Skład:</span> {item.ingredients}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1e222f]">
                  {item.dishItem && (
                    <button
                      onClick={() => setSelectedModalDish(item.dishItem || null)}
                      className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Skonfiguruj & Zamów</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
