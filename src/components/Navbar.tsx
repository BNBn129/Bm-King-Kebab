import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#232733] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-wider text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors flex items-center gap-2"
          >
            <span className="text-amber-500 font-display">BM KING</span>
            <span className="font-light tracking-widest text-slate-300">KEBAB</span>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Menu & Cennik
            </a>
            <a href="#o-nas" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              O Nas & Nagrody
            </a>
            <a href="#specjaly" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Specjalności
            </a>
            <a href="#opinie" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Opinie Gości
            </a>
            <a href="#kontakt" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Lokalizacja & Godziny
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 py-2 px-3 border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Zadzwoń do restauracji"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-wide rounded-lg transition-all shadow-lg shadow-amber-500/10 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Koszyk zamówienia"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Zamówienie</span>
              {totalCount > 0 && (
                <span className="inline-flex items-center justify-center bg-black text-amber-400 text-[11px] font-bold rounded-full w-5 h-5 tabular-nums">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Otwórz menu nawigacji"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232733] bg-[#0f1117] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Menu & Cennik
            </a>
            <a
              href="#o-nas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              O Nas & Orły Gastronomii
            </a>
            <a
              href="#specjaly"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Specjalności Szefa
            </a>
            <a
              href="#opinie"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Opinie Gości (4.9 / 5)
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Lokalizacja & Godziny Otwarcia
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 font-semibold"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
