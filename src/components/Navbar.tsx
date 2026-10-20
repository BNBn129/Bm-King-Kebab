import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Phone, 
  Menu as MenuIcon, 
  X, 
  Home, 
  Utensils, 
  Sparkles, 
  Award, 
  MessageSquareQuote, 
  MapPin, 
  ExternalLink, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export type TabType = 'home' | 'menu' | 'about' | 'gallery' | 'reviews' | 'contact' | 'glowna' | 'o-nas' | 'opinie' | 'kontakt' | 'specjaly';

interface NavbarProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    if (sectionId === 'cart') {
      setIsCartOpen(true);
      return;
    }
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      if (sectionId === 'glowna' || sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Full complete list of all tab/section options of the website
  const navTabs = [
    { 
      id: 'glowna', 
      label: 'Strona Główna', 
      icon: <Home className="w-5 h-5" />, 
      desc: 'Początek strony i najważniejsze wyróżnienia' 
    },
    { 
      id: 'menu', 
      label: 'Karta Dań & Pełny Cennik', 
      icon: <Utensils className="w-5 h-5" />, 
      desc: 'Tortille, talerze, kapsalony, boxy, pity i burgery',
      badge: '25+ dań'
    },
    { 
      id: 'specjaly', 
      label: 'Królewskie Receptury & Specjały', 
      icon: <Sparkles className="w-5 h-5" />, 
      desc: 'Autorskie specjały szefa kuchni i darmowy çay',
      badge: 'Polecane'
    },
    { 
      id: 'o-nas', 
      label: 'O Nas & Jakość (Orły Gastronomii)', 
      icon: <Award className="w-5 h-5" />, 
      desc: 'Dwukrotny Złoty Laureat 2025 i 2026 w Łodzi' 
    },
    { 
      id: 'opinie', 
      label: 'Opinie Gości (Ocena 4.9★)', 
      icon: <MessageSquareQuote className="w-5 h-5" />, 
      desc: 'Ponad 928 prawdziwych opinii Google i Guru' 
    },
    { 
      id: 'kontakt', 
      label: 'Lokalizacja, Godziny & Dojazd', 
      icon: <MapPin className="w-5 h-5" />, 
      desc: 'ul. Sacharowa 45A, otwarte do 02:00, parking' 
    },
    { 
      id: 'cart', 
      label: 'Twoje Zamówienie (Koszyk)', 
      icon: <ShoppingBag className="w-5 h-5" />, 
      desc: 'Dostosuj zamówienie, odbiór osobisty lub dowóz',
      badge: totalCount > 0 ? `${totalCount} ${totalCount === 1 ? 'danie' : 'dań'}` : undefined,
      isSpecial: true
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#141210]/95 backdrop-blur-md text-white shadow-md border-b border-stone-800'
          : 'bg-[#141210] text-white border-b border-stone-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Brand Logo & Name (Anchored Far-Left, shrink-0, always 100% visible) */}
          <a
            href="#glowna"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('glowna');
            }}
            className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer shrink-0"
            title="BM King Kebab"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-stone-950 font-black text-xs sm:text-sm tracking-tight shadow-md group-hover:scale-105 transition-transform shrink-0">
              BM
            </div>
            <div className="flex flex-col">
              <div className="text-sm sm:text-lg font-black tracking-wider text-white whitespace-nowrap uppercase">
                BM KING <span className="text-amber-500">KEBAB</span>
              </div>
              <p className="text-[9px] sm:text-[11px] text-stone-400 font-medium tracking-wider uppercase whitespace-nowrap hidden min-[360px]:block">
                Łódź · Sacharowa 45A
              </p>
            </div>
          </a>

          {/* Clean Right Actions Zone */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Live Open Status Indicator (desktop only) */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Otwarte do 01:00</span>
            </div>

            {/* Direct Phone Call Button (Compact icon on phone, full text on tablet/desktop) */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 text-stone-200 text-xs font-semibold transition-all hover:text-amber-400 shadow-xs flex items-center gap-1.5 shrink-0"
              title={`Zadzwoń: ${RESTAURANT_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline font-mono">{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Cart / Order Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer shrink-0"
              aria-label="Koszyk zamówienia"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Zamówienie</span>
              {totalCount > 0 && (
                <span className="inline-flex items-center justify-center bg-stone-950 text-amber-300 text-[10px] sm:text-xs font-black rounded-full px-1.5 py-0.5 tabular-nums shrink-0">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Master 3-bar Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 sm:p-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 text-stone-200 hover:text-white transition-all cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Otwórz menu nawigacji"
              title="Menu"
            >
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </button>
          </div>

        </div>
      </div>

      {/* Luxury Full Navigation Drawer displaying ALL tab options */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
            aria-label="Zamknij menu"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-[#141210] border-l border-stone-800 text-white h-full overflow-y-auto p-5 sm:p-7 flex flex-col shadow-2xl animate-slide-in-right">
            
            {/* Top Bar with Brand and Close Button */}
            <div className="flex items-center justify-between pb-5 border-b border-stone-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-stone-950 font-black text-sm shadow-md">
                  BM
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight uppercase font-serif text-white">
                    BM KING <span className="text-amber-500">KEBAB</span>
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">Wszystkie zakładki i menu</p>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Zamknij menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs List - Shows EVERY option */}
            <div className="py-4 space-y-2">
              <p className="text-[11px] font-bold text-amber-400 uppercase tracking-widest px-1">
                Wybierz sekcję
              </p>
              
              <nav className="space-y-1.5">
                {navTabs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full group p-3.5 sm:p-4 rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                      item.isSpecial
                        ? 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/40 text-amber-200'
                        : 'bg-stone-900/60 hover:bg-stone-800/90 border-stone-800/90 hover:border-amber-500/40 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        item.isSpecial 
                          ? 'bg-amber-500 text-stone-950' 
                          : 'bg-stone-800 group-hover:bg-amber-500/20 text-amber-400'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm sm:text-base font-bold truncate ${
                            item.isSpecial ? 'text-amber-300' : 'text-white group-hover:text-amber-400'
                          }`}>
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-400 truncate mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Accolade Banner */}
            <div className="my-2 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Award className="w-4 h-4 shrink-0" />
                <span>Złoty Laureat Orły Gastronomii</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Podwójny laureat 2025 i 2026. Tradycyjne receptury, świeżo wypiekany chleb i bezpłatna turecka herbata dla każdego gościa.
              </p>
            </div>

            {/* Bottom Contact & Quick Order Actions */}
            <div className="pt-4 border-t border-stone-800 space-y-2.5 mt-auto shrink-0">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Zadzwoń i zamów: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.pyszneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Zamów online na Pyszne.pl</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-center text-[10px] text-stone-400 pt-1">
                <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                <span>Otwarte: Pon-Czw, Ndz do 01:00 · Pt-Sob do 02:00</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
