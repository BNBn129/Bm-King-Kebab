import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Utensils, Home, Award, Camera, MessageSquareQuote, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export type TabType = 'home' | 'menu' | 'about' | 'gallery' | 'reviews' | 'contact';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navTabs: { id: TabType; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Strona Główna', shortLabel: 'Główna', icon: <Home className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'menu', label: 'Królewskie Menu', shortLabel: 'Menu', icon: <Utensils className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'about', label: 'O Nas & Nagrody', shortLabel: 'O Nas', icon: <Award className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'gallery', label: 'Specjały & Galeria', shortLabel: 'Galeria', icon: <Camera className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'reviews', label: 'Opinie (4.9★)', shortLabel: 'Opinie', icon: <MessageSquareQuote className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'contact', label: 'Lokalizacja & Godziny', shortLabel: 'Lokalizacja', icon: <MapPin className="w-3.5 h-3.5 shrink-0" /> },
  ];

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#232733] transition-colors w-full">
      <div className="w-full px-3 sm:px-5 lg:px-6 xl:px-10">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-16 sm:h-20">
          
          {/* Brand Wordmark (anchored to the far left) */}
          <button
            onClick={() => handleTabClick('home')}
            className="text-lg sm:text-xl xl:text-2xl font-bold tracking-wider text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors flex items-center gap-1.5 sm:gap-2 cursor-pointer text-left"
            title="BM KING KEBAB - Strona Główna"
          >
            <span className="text-amber-500 font-display">BM KING</span>
            <span className="font-light tracking-widest text-slate-300">KEBAB</span>
          </button>

          {/* Navigation Tabs for Laptop & Tablet Landscape (1024px+) */}
          {/* Uses shortLabel on lg (1024-1279px) and full label on xl (1280px+) so Lokalizacja & Zamówienie are never pushed off */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/40 shadow-sm shadow-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-slate-400'}>
                    {tab.icon}
                  </span>
                  <span className="hidden xl:inline">{tab.label}</span>
                  <span className="xl:hidden inline">{tab.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone (anchored, shrink-0 so Zamówienie is always 100% visible) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Phone button: compact icon on tablet landscape, full text on 2xl */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden sm:flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 p-2 xl:py-2 xl:px-3 border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title={`Zadzwoń: ${RESTAURANT_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden 2xl:inline">{RESTAURANT_INFO.phone}</span>
              <span className="hidden xl:inline 2xl:hidden">Zadzwoń</span>
            </a>

            {/* Cart Button (Always completely visible, shrink-0) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 xl:px-4 py-2 sm:py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-wide rounded-lg transition-all shadow-lg shadow-amber-500/10 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Koszyk zamówienia"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="inline">Zamówienie</span>
              {totalCount > 0 && (
                <span className="inline-flex items-center justify-center bg-black text-amber-400 text-[10px] sm:text-[11px] font-bold rounded-full w-5 h-5 tabular-nums shrink-0">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile/Tablet menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none cursor-pointer shrink-0"
              aria-label="Otwórz menu nawigacji"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Full Drawer Navigation */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-black/60 backdrop-blur-xs z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-40 lg:hidden border-b border-[#202534] bg-[#0c0d14] px-4 sm:px-6 py-5 space-y-3 animate-fade-in-up shadow-2xl">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
              Przejdź do zakładki
            </p>
            <nav className="flex flex-col space-y-1 text-sm font-medium">
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                        : 'text-slate-200 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-amber-400' : 'text-slate-400'}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        Aktywna
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-200 font-semibold hover:border-amber-500/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Zadzwoń do restauracji: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
