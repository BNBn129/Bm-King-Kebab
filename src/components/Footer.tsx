import React from 'react';
import { Phone, MapPin, Award, ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { TabType } from './Navbar';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (tab: TabType) => {
    const map: Record<string, string> = {
      home: 'glowna',
      menu: 'menu',
      about: 'o-nas',
      gallery: 'menu',
      reviews: 'opinie',
      contact: 'kontakt',
    };
    const target = map[tab] || tab;
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (onSelectTab) onSelectTab(tab);
  };

  return (
    <footer className="bg-[#1C1917] border-t border-stone-800 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Accolade */}
          <div className="space-y-4 md:col-span-1">
            <button
              onClick={() => handleNav('home')}
              className="text-left inline-flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-black text-sm">
                BM
              </div>
              <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                BM KING KEBAB
              </span>
            </button>
            <p className="text-stone-400 leading-relaxed text-xs">
              Królewska tradycja smaku w Łodzi. Laureat plebiscytu Orły Gastronomii 2025 i 2026. 
              Soczyste mięso, świeże warzywa, pieczywo z pieca i bezpłatna turecka herbata dla każdego gościa.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Złoty Laureat 2025 & 2026</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Zakładki Serwisu</p>
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
                  Karta Dań & Cennik
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
                  Królewskie Dania & Galeria
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
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Godziny Pracy</p>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li className="flex justify-between">
                <span>Poniedziałek – Czwartek:</span>
                <span className="font-mono text-white">09:00 – 01:00</span>
              </li>
              <li className="flex justify-between text-amber-400 font-semibold">
                <span>Piątek – Sobota:</span>
                <span className="font-mono">09:00 – 02:00</span>
              </li>
              <li className="flex justify-between">
                <span>Niedziela:</span>
                <span className="font-mono text-white">09:00 – 01:00</span>
              </li>
            </ul>
            <p className="text-[11px] text-stone-500 pt-1">
              Zamówienia na dowóz realizowane do 30 min przed zamknięciem.
            </p>
          </div>

          {/* Column 4: Contact & Actions */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Kontakt & Dojazd</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-stone-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-white hover:text-amber-400 font-mono font-bold transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={RESTAURANT_INFO.pyszneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors"
              >
                <span>Zamów na Pyszne.pl</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold rounded-lg text-xs transition-colors"
              >
                <span>Nawiguj w Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} BM KING KEBAB Łódź. Wszelkie prawa zastrzeżone.</p>
          <p className="flex items-center gap-1">
            Złoty Laureat Orły Gastronomii · ul. Andrzeja Sacharowa 45A, Łódź
          </p>
        </div>

      </div>
    </footer>
  );
};
