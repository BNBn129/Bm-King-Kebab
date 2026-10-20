import React from 'react';
import { Phone, MapPin, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { TabType } from './Navbar';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090c] border-t border-[#1c1f28] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Accolade */}
          <div className="space-y-4 md:col-span-1">
            <button
              onClick={() => handleNav('home')}
              className="text-left inline-block text-xl font-bold tracking-wider text-white hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span className="text-amber-500 font-display">BM KING</span>
              <span className="font-light tracking-widest text-slate-300 ml-1.5">KEBAB</span>
            </button>
            <p className="text-slate-400 leading-relaxed text-xs">
              Królewska tradycja smaku w Łodzi. Laureat plebiscytu Orły Gastronomii 2025 i 2026. 
              Soczyste mięso, świeże warzywa i bezpłatna turecka herbata.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-medium text-xs">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Złoty Laureat 2025 & 2026</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Switching Tabs) */}
          <div className="space-y-3">
            <p className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">Zakładki Serwisu</p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Strona Główna
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Królewskie Menu & Cennik
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  O Nas & Orły Gastronomii
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Specjalności & Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Opinie Gości (4.9 / 5)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Lokalizacja & Godziny
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours Summary */}
          <div className="space-y-3">
            <p className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">Godziny Pracy</p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex justify-between">
                <span>Niedziela – Czwartek:</span>
                <span className="font-mono text-slate-400">09:00 – 01:00</span>
              </li>
              <li className="flex justify-between">
                <span>Piątek – Sobota:</span>
                <span className="font-mono text-slate-400">09:00 – 02:00</span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 pt-1">
              Realizujemy zamówienia na miejscu, na wynos i w dowozie.
            </p>
          </div>

          {/* Column 4: Contact & Order */}
          <div className="space-y-3">
            <p className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">Kontakt & Zamówienia</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-white hover:text-amber-400 font-mono font-bold transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.pyszneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors"
              >
                <span>Oficjalne zamówienia na Pyszne.pl</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Clean Row */}
        <div className="mt-12 pt-6 border-t border-[#181a22] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} BM KING KEBAB Łódź. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('menu')} className="hover:text-slate-400 transition-colors cursor-pointer">Menu</button>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400 transition-colors cursor-pointer">Dojazd</button>
            <span>·</span>
            <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-slate-400 transition-colors">Telefon</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
