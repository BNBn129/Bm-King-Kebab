import React from 'react';
import { Phone, MapPin, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030305] border-t border-[#14151e] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={46} />
              <div>
                <p className="text-lg font-black text-white font-royal">
                  BM <span className="text-amber-500">KING</span> KEBAB
                </p>
                <p className="text-[11px] text-slate-400">{RESTAURANT_INFO.addressShort}</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-serif italic max-w-sm">
              Królewska tradycja smaku w Łodzi. Świeże składniki, obfite porcje i wysoka jakość doceniona przez gości.
            </p>
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs font-royal">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Złoty Laureat Orły Gastronomii 2025 & 2026</span>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-3">
            <p className="font-bold text-slate-200 uppercase tracking-widest text-[11px] font-royal">
              Godziny Pracy
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex justify-between border-b border-[#111219] pb-1">
                <span>Niedziela – Czwartek:</span>
                <span className="font-mono text-slate-300">09:00 – 01:00</span>
              </li>
              <li className="flex justify-between border-b border-[#111219] pb-1">
                <span>Piątek – Sobota:</span>
                <span className="font-mono text-slate-300">09:00 – 02:00</span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 pt-1 font-serif italic">
              Serwujemy dania na miejscu oraz przygotowujemy zamówienia na wynos.
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <p className="font-bold text-slate-200 uppercase tracking-widest text-[11px] font-royal">
              Kontakt & Adres
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-200">{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-amber-400 hover:text-amber-300 font-mono font-bold text-base transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#11121a] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} BM KING KEBAB Łódź. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Karta Menu</a>
            <span>·</span>
            <a href="#nagrody" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Orły Gastronomii</a>
            <span>·</span>
            <a href="#kontakt" className="hover:text-amber-400 transition-colors uppercase tracking-wider">Dojazd</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
