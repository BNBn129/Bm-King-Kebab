import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Leaf, Phone } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';

interface CategoryGroup {
  id: string;
  label: string;
  roman?: string;
  desc?: string;
  items: MenuItem[];
}

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesIngr = item.ingredients.toLowerCase().includes(query);
        if (!matchesName && !matchesIngr) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // Group items by category when viewing "all"
  const groupedCategories = useMemo<CategoryGroup[]>(() => {
    if (activeCategory !== 'all' || searchQuery.trim() !== '') {
      return [{ id: activeCategory, label: 'Wybrane Pozycje', items: filteredItems }];
    }
    return [
      {
        id: 'tortilla',
        label: 'Strefa Kebab Tortilla',
        roman: 'I',
        desc: 'Chrupiąca opieczona tortilla z obfitym nadzieniem i autorskimi sosami',
        items: MENU_ITEMS.filter((i) => i.category === 'tortilla'),
      },
      {
        id: 'box',
        label: 'Strefa Kebab Box & Kapsalon',
        roman: 'II',
        desc: 'Wygodne boxy oraz słynny kapsalon zapiekany pod grubą warstwą sera',
        items: MENU_ITEMS.filter((i) => i.category === 'box'),
      },
      {
        id: 'pita',
        label: 'Strefa Kebab Pita & Bułka',
        roman: 'III',
        desc: 'Tradycyjny chlebek pita oraz chrupiące tureckie pieczywo z pieca',
        items: MENU_ITEMS.filter((i) => i.category === 'pita'),
      },
      {
        id: 'talerz',
        label: 'Strefa Talerz Królewski',
        roman: 'IV',
        desc: 'Pełnowymiarowe dania obiadowe z frytkami, górą mięsa i świeżymi surówkami',
        items: MENU_ITEMS.filter((i) => i.category === 'talerz'),
      },
      {
        id: 'burger',
        label: 'Strefa Burgery z Grilla',
        roman: 'V',
        desc: 'Soczyste kotlety wołowo-baranie oraz drobiowe w chrupiących maślanych bułkach',
        items: MENU_ITEMS.filter((i) => i.category === 'burger'),
      },
      {
        id: 'wegetarianskie',
        label: 'Strefa Wegetariańska',
        roman: 'VI',
        desc: 'Złocisty falafel z ciecierzycy oraz orzeźwiające sałatki z grecką fetą',
        items: MENU_ITEMS.filter((i) => i.category === 'wegetarianskie'),
      },
      {
        id: 'dodatki',
        label: 'Nuggets, Dodatki & Napoje',
        roman: 'VII',
        desc: 'Chrupiące dodatki, gorące skrzydełka i oryginalne napoje tureckie',
        items: MENU_ITEMS.filter((i) => i.category === 'dodatki'),
      },
    ];
  }, [activeCategory, searchQuery, filteredItems]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#07080b] border-b border-[#1b1c26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-amber-500/50" />
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-royal">
              Carte Gastronomique
            </p>
            <span className="w-8 h-[1px] bg-amber-500/50" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-royal tracking-wide [text-wrap:balance]">
            Karta Menu & Cennik
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-serif italic">
            Wszystkie pozycje przyrządzane są na bieżąco z zachowaniem najwyższych standardów świeżości i smaku.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
            <span>Zamówienia na miejscu & telefonicznie:</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-amber-400 hover:text-amber-300 font-mono font-bold tracking-wider inline-flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Szukaj w karcie (np. kapsalon, feta, falafel, frytki)..."
            className="w-full pl-11 pr-10 py-3.5 bg-[#0e1017] border border-[#222533] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              aria-label="Wyczyść wyszukiwanie"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Elegant Category Navigation Tabs */}
        <div className="mb-14 flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-3 scrollbar-none border-b border-[#181a24]">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery('');
              }}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#12131b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Content Display */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#0c0d14] rounded-2xl border border-[#1d1f2b] max-w-lg mx-auto">
            <p className="text-base text-slate-300 font-medium">Brak dań spełniających podane kryteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-5 py-2.5 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Pokaż całą kartę
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {groupedCategories.map((group) => {
              if (group.items.length === 0) return null;
              return (
                <div key={group.id} className="space-y-6">
                  
                  {/* Category Section Header */}
                  <div className="pb-3 border-b border-[#1f2230] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {group.roman && (
                        <span className="text-xs font-bold text-amber-500 font-royal tracking-widest">
                          [{group.roman}]
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-royal tracking-wide">
                        {group.label}
                      </h3>
                    </div>
                    {group.desc && (
                      <p className="text-xs text-slate-400 font-serif italic">
                        {group.desc}
                      </p>
                    )}
                  </div>

                  {/* 2-Column Carte Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                    {group.items.map((item: MenuItem) => (
                      <div
                        key={item.id}
                        className="group flex flex-col justify-between py-2 border-b border-[#141620] hover:border-[#2d3246] transition-colors"
                      >
                        {/* Title, Leader Line, and Price */}
                        <div className="flex items-baseline justify-between w-full">
                          <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                              {item.name}
                            </span>
                            {item.isSignature && (
                              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-0.5">
                                <Sparkles className="w-2.5 h-2.5" />
                                <span>Specjał</span>
                              </span>
                            )}
                            {item.isVegetarian && (
                              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-0.5">
                                <Leaf className="w-2.5 h-2.5" />
                                <span>Vege</span>
                              </span>
                            )}
                          </div>

                          <div className="carte-leader" aria-hidden="true" />

                          <span className="text-base font-bold text-amber-400 font-mono tabular-nums shrink-0 ml-2">
                            {item.price.toFixed(2)} zł
                          </span>
                        </div>

                        {/* Ingredients & Portion Sizes */}
                        <div className="flex items-baseline justify-between text-xs text-slate-400 mt-1">
                          <span className="text-slate-400 font-normal leading-relaxed pr-4">
                            {item.ingredients}
                          </span>
                          {item.sizes && (
                            <span className="text-[11px] text-slate-500 shrink-0 font-medium whitespace-nowrap">
                              {item.sizes.join(' · ')}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Footer Order Note */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0c0d14] border border-amber-500/20 text-center space-y-2">
          <p className="text-sm font-bold text-white uppercase tracking-wider font-royal">
            Świeże Dania na Zamówienie
          </p>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Zapraszamy do lokalu przy ul. Sacharowa 45A w Łodzi lub do składania zamówień telefonicznych z odbiorem osobistym.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-base font-bold text-amber-400 hover:text-amber-300 font-mono tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 fill-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
