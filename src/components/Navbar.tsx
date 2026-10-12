import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#050507]/95 backdrop-blur-xl border-b border-[#181922] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Gilded Brand Lockup */}
          <a
            href="#"
            className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="BM King Kebab Strona Główna"
          >
            <Logo size={48} />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-royal group-hover:text-amber-400 transition-colors">
                BM <span className="text-amber-500">KING</span> KEBAB
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium font-sans">
                Łódź · ul. Sacharowa 45A
              </span>
            </div>
          </a>

          {/* Zone 2: Editorial Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-semibold tracking-wider uppercase text-slate-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Karta Menu
            </a>
            <a href="#nagrody" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Orły Gastronomii
            </a>
            <a href="#godziny" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Godziny Otwarcia
            </a>
            <a href="#kontakt" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Lokalizacja & Kontakt
            </a>
          </nav>

          {/* Zone 3: Direct Phone Call Action */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-110 text-black font-extrabold text-xs tracking-wider uppercase rounded-lg transition-all shadow-[0_0_20px_-3px_rgba(245,158,11,0.3)] active:scale-95 whitespace-nowrap shrink-0"
              title="Zadzwoń do restauracji"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span className="font-mono tracking-normal">{RESTAURANT_INFO.phone}</span>
            </a>

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
        <div className="md:hidden border-b border-[#181922] bg-[#09090d] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-semibold tracking-wider uppercase text-slate-200">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-[#14151c]"
            >
              Karta Menu & Cennik
            </a>
            <a
              href="#nagrody"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-[#14151c]"
            >
              Orły Gastronomii 2025 & 2026
            </a>
            <a
              href="#godziny"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors border-b border-[#14151c]"
            >
              Godziny Otwarcia
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Lokalizacja & Dojazd
            </a>
          </nav>
          <div className="pt-4 border-t border-[#1a1c25] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{RESTAURANT_INFO.addressShort}</span>
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="mt-2 flex items-center justify-center gap-2 py-3 bg-amber-500 text-black font-extrabold rounded-lg text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
