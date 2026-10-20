import React from 'react';
import { Sparkles, Utensils, Heart, Coffee, Flame, ArrowRight, Plus } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface GallerySectionProps {
  onGoToMenu?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onGoToMenu }) => {
  const { setSelectedModalDish } = useCart();

  const specialties = [
    {
      id: 'tal-krolewski',
      title: 'Special King Talerz & Tortilla',
      category: 'Specjał Szefa Kuchni',
      description: 'Długo marynowane, soczyste mięso z autorską kompozycją oryginalnej greckiej fety, dojrzałych czarnych oliwek kalamata i świeżych warzyw.',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      dishItem: MENU_ITEMS.find((m) => m.id === 'tal-krolewski') || MENU_ITEMS[0],
      highlight: 'Złoty standard BM King Kebab',
      tags: ['Grecka Feta', 'Oliwki Kalamata', 'Sos Czosnkowy Domowy'],
    },
    {
      id: 'kapsalon-s',
      title: 'Oryginalny Kapsalon Zapiekany',
      category: 'Kultowy Przysmak Holenderski',
      description: 'Chrupiące złociste frytki i wyselekcjonowane mięso zapieczone pod grubą warstwą sera gouda ze świeżą sałatą lodową i sosem.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      dishItem: MENU_ITEMS.find((m) => m.id === 'kapsalon-s') || MENU_ITEMS[1],
      highlight: 'Najchętniej zamawiany w dostawie',
      tags: ['Ser Gouda Zapiekany', 'Chrupiące Frytki', 'Sos Mieszany'],
    },
    {
      id: 'herbata-tradycja',
      title: 'Tradycyjny Çay & Gościnność',
      category: 'Rytuał Domu',
      description: 'Zgodnie z bliskowschodnią tradycją, każdy gość odwiedzający lokal przy Sacharowa 45A jest częstowany aromatyczną herbatą.',
      icon: <Coffee className="w-5 h-5 text-amber-400" />,
      highlight: 'Darmowa dla każdego gościa',
      tags: ['Oryginalny Çay', 'Świeże Zioła', '100% Bezpłatnie'],
    },
  ];

  return (
    <section id="specjaly" className="py-12 sm:py-16 lg:py-24 bg-[#090a0e] border-b border-[#1f2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-bold tracking-widest text-amber-500 mb-2">
              Sztuka Kulinarnego Rzemiosła
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
              Królewskie Receptury & Rytuały
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Każde danie przygotowujemy z pieczołowitością, na świeżo i bez kompromisów. 
              Poznaj nasze autorskie kompozycje, które zapewniły nam tytuł Złotego Laureata Orłów Gastronomii.
            </p>
          </div>

          {onGoToMenu && (
            <button
              onClick={onGoToMenu}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#13151f] hover:bg-amber-500 hover:text-black text-amber-400 font-bold text-xs sm:text-sm border border-[#262c3e] hover:border-amber-500 transition-all duration-300 cursor-pointer self-start sm:self-auto active:scale-95"
            >
              <span>Pełna karta dań</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          )}
        </div>

        {/* 3 High-End Editorial Dossier Cards (Zero cheap photos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#11131c] border border-[#202534] hover:border-amber-500/50 hover:bg-[#141724] hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Icon + Highlight Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1c202d]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#181c28] border border-amber-500/20 text-amber-400 text-[11px] font-semibold">
                    {spec.highlight}
                  </span>
                </div>

                {/* Category & Title */}
                <p className="mt-4 text-xs font-bold text-amber-500 uppercase tracking-wider">
                  {spec.category}
                </p>
                <h3 className="mt-1 text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-200">
                  {spec.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {spec.description}
                </p>

                {/* Composition Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#0e1017] border border-[#1e2332] text-[11px] text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action if it has a dish item */}
              <div className="mt-6 pt-4 border-t border-[#1c202d]">
                {spec.dishItem ? (
                  <button
                    onClick={() => setSelectedModalDish(spec.dishItem)}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-bold text-xs sm:text-sm border border-amber-500/30 hover:border-amber-500 transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Plus className="w-4 h-4 shrink-0" />
                      <span>Dostosuj & Zamów</span>
                    </span>
                    <span className="font-mono tabular-nums whitespace-nowrap shrink-0">
                      {spec.dishItem.price.toFixed(2)}&nbsp;zł
                    </span>
                  </button>
                ) : (
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold py-1">
                    <span>Tradycyjny poczęstunek w lokalu</span>
                    <span>100% Gratis</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
