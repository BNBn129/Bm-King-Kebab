import React, { useState, useMemo } from 'react';
import { Search, Plus, Sparkles, Leaf, Flame, X } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { DishModal } from './DishModal';

export const MenuSection: React.FC = () => {
  const { setSelectedModalDish, selectedModalDish } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(false);
  const [signatureOnly, setSignatureOnly] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Vegetarian filter
      if (vegetarianOnly && !item.isVegetarian) {
        return false;
      }
      // Signature/Bestseller filter
      if (signatureOnly && !item.isSignature && !item.isBestseller) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngr = item.ingredients.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesIngr) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery, vegetarianOnly, signatureOnly]);

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#0b0c10] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase font-semibold tracking-widest text-amber-500 mb-2">
            Królewska Karta Dań
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            Menu & Cennik BM King Kebab
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Świeże składniki, obfite porcje, autorskie sosy i tradycyjne pieczywo. 
            Wybierz swoje ulubione danie, dostosuj skład i zamów z odbiorem lub dowozem.
          </p>
        </div>

        {/* Search & Quick Toggles Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj dania, składnika (np. feta, kapsalon, falafel)..."
              className="w-full pl-10 pr-10 py-2.5 bg-[#141721] border border-[#232733] rounded-lg text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Wyczyść wyszukiwanie"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Special Preferences Toggles */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setSignatureOnly(!signatureOnly)}
              className={`px-3 py-2 text-xs font-medium rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                signatureOnly
                  ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                  : 'bg-[#141721] border-[#232733] text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Specjały & Bestsellery</span>
            </button>

            <button
              onClick={() => setVegetarianOnly(!vegetarianOnly)}
              className={`px-3 py-2 text-xs font-medium rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                vegetarianOnly
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300'
                  : 'bg-[#141721] border-[#232733] text-slate-400 hover:text-slate-200'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tylko Wegetariańskie</span>
            </button>
          </div>

        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-[#1c202a]">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/15'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#12141c] rounded-2xl border border-[#232733]">
            <p className="text-base text-slate-300 font-medium">Brak pozycji spełniających wybrane kryteria.</p>
            <p className="text-xs text-slate-500 mt-1">Spróbuj zresetować filtry lub zmienić frazę wyszukiwania.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setVegetarianOnly(false);
                setSignatureOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-black font-semibold text-xs rounded-lg hover:bg-amber-400 transition-colors"
            >
              Zresetuj filtry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-[#12141a] border border-[#232733] hover:border-slate-700 hover:shadow-xl transition-all duration-200"
              >
                <div>
                  
                  {/* Header Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {item.isSignature ? (
                      <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-500" />
                        Autorski Specjał
                      </span>
                    ) : item.isBestseller ? (
                      <span className="text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Bestseller Łodzi
                      </span>
                    ) : item.isVegetarian ? (
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                        <Leaf className="w-3 h-3 text-emerald-400" />
                        Wegetariańskie
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider">
                        BM King Kebab
                      </span>
                    )}

                    {/* Price with tabular nums */}
                    <span className="text-base sm:text-lg font-bold text-amber-400 font-mono tabular-nums">
                      {item.price.toFixed(2)} zł
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Ingredients Clean Text */}
                  <div className="mt-3 text-[11px] text-slate-400">
                    <span className="text-slate-500 font-medium">Skład:</span> {item.ingredients}
                  </div>
                </div>

                {/* Card Action Row with Working Add/Customize Button */}
                <div className="mt-5 pt-4 border-t border-[#1d212b] flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    {item.sizes ? (
                      <span>Rozmiary: {item.sizes.join(' · ')}</span>
                    ) : (
                      <span>Świeże na zamówienie</span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedModalDish(item)}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1b1f2b] hover:bg-amber-500 hover:text-black text-amber-400 font-semibold text-xs rounded-lg border border-[#2b3245] transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Wybierz</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Active Dish Customizer Modal */}
      <DishModal
        dish={selectedModalDish}
        onClose={() => setSelectedModalDish(null)}
      />
    </section>
  );
};
