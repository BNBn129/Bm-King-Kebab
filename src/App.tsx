/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar, TabType } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeTeaserMenu } from './components/HomeTeaserMenu';
import { HomeExploreCards } from './components/HomeExploreCards';
import { AwardsAndStory } from './components/AwardsAndStory';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishModal } from './components/DishModal';
import { RESTAURANT_INFO } from './data/restaurantData';
import { ShoppingBag, Phone, ChevronRight, Home } from 'lucide-react';

const MobileBottomBar: React.FC<{ onGoToMenu: () => void }> = ({ onGoToMenu }) => {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-2.5 bg-[#0b0c10]/95 backdrop-blur-lg border-t border-[#232733] flex items-center gap-2">
      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        className="flex-1 py-2.5 px-3 bg-[#161822] border border-[#2b3142] rounded-lg text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-98"
      >
        <Phone className="w-3.5 h-3.5 text-amber-500" />
        <span>Zadzwoń</span>
      </a>

      <button
        onClick={() => setIsCartOpen(true)}
        className="flex-2 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 active:scale-98 shadow-md shadow-amber-500/10 cursor-pointer"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Zamówienie</span>
        {totalCount > 0 && (
          <span className="bg-black text-amber-400 text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold">
            {totalCount}
          </span>
        )}
      </button>
    </div>
  );
};

const GlobalDishModal: React.FC = () => {
  const { selectedModalDish, setSelectedModalDish } = useCart();
  return (
    <DishModal
      dish={selectedModalDish}
      onClose={() => setSelectedModalDish(null)}
    />
  );
};

interface SubpageHeaderProps {
  currentTab: TabType;
  title: string;
  subtitle: string;
  onGoHome: () => void;
}

const SubpageHeader: React.FC<SubpageHeaderProps> = ({ title, subtitle, onGoHome }) => {
  return (
    <div className="bg-[#0e1017] border-b border-[#232733] py-3.5 sm:py-5 lg:py-8">
      <div className="w-full px-3.5 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <nav className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] lg:text-xs text-slate-400 mb-1 sm:mb-2">
              <button
                onClick={onGoHome}
                className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Strona Główna</span>
              </button>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600" />
              <span className="text-amber-400 font-medium">{title}</span>
            </nav>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {title}
            </h1>
            <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs lg:text-sm text-slate-300">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onGoHome}
            className="self-start sm:self-center px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#161822] border border-[#2b3142] text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
          >
            ← Wróć na stronę główną
          </button>
        </div>
      </div>
    </div>
  );
};

function getTabFromHash(hash: string): TabType {
  const clean = hash.replace('#', '').toLowerCase();
  if (clean === 'menu') return 'menu';
  if (clean === 'o-nas' || clean === 'about') return 'about';
  if (clean === 'specjaly' || clean === 'galeria' || clean === 'gallery') return 'gallery';
  if (clean === 'opinie' || clean === 'reviews') return 'reviews';
  if (clean === 'kontakt' || clean === 'contact') return 'contact';
  return 'home';
}

function getHashFromTab(tab: TabType): string {
  switch (tab) {
    case 'menu': return '#menu';
    case 'about': return '#o-nas';
    case 'gallery': return '#specjaly';
    case 'reviews': return '#opinie';
    case 'contact': return '#kontakt';
    default: return '#glowna';
  }
}

function MainApp() {
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return getTabFromHash(window.location.hash);
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      window.location.hash = getHashFromTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e2e8f0] flex flex-col font-sans pb-16 md:pb-0">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      
      <main className="flex-1">
        {/* TAB 1: HOME PAGE (Strona Główna) */}
        {activeTab === 'home' && (
          <div key="home" className="animate-fade-in-up">
            <Hero onGoToMenu={() => handleTabChange('menu')} />
            {/* Top 3 items max teaser */}
            <HomeTeaserMenu onGoToMenu={() => handleTabChange('menu')} />
            {/* Enticing exploration cards to top tabs */}
            <HomeExploreCards onSelectTab={(tab) => handleTabChange(tab)} />
          </div>
        )}

        {/* TAB 2: MENU & CENNIK (Królewskie Menu) */}
        {activeTab === 'menu' && (
          <div key="menu" className="animate-fade-in-up">
            <SubpageHeader
              currentTab={activeTab}
              title="Królewskie Menu & Cennik"
              subtitle="Kompletna karta dań BM King Kebab: tortille, talerze, kapsalony, pity, burgery i dodatki."
              onGoHome={() => handleTabChange('home')}
            />
            <MenuSection />
          </div>
        )}

        {/* TAB 3: O NAS & NAGRODY */}
        {activeTab === 'about' && (
          <div key="about" className="animate-fade-in-up">
            <SubpageHeader
              currentTab={activeTab}
              title="O Nas & Plebiscyt Orły Gastronomii"
              subtitle="Poznaj historię naszej pasji, kulinarnych wyróżnień oraz tradycję darmowej tureckiej herbaty."
              onGoHome={() => handleTabChange('home')}
            />
            <AwardsAndStory onGoToMenu={() => handleTabChange('menu')} />
          </div>
        )}

        {/* TAB 4: SPECJALNOŚCI & RECEPTURY */}
        {activeTab === 'gallery' && (
          <div key="gallery" className="animate-fade-in-up">
            <SubpageHeader
              currentTab={activeTab}
              title="Królewskie Receptury & Rytuały"
              subtitle="Poznaj autorskie kompozycje, tradycję zapiekanego kapsalona oraz rytuał parzenia herbaty."
              onGoHome={() => handleTabChange('home')}
            />
            <GallerySection onGoToMenu={() => handleTabChange('menu')} />
          </div>
        )}

        {/* TAB 5: OPINIE GOŚCI */}
        {activeTab === 'reviews' && (
          <div key="reviews" className="animate-fade-in-up">
            <SubpageHeader
              currentTab={activeTab}
              title="Opinie Gości · Średnia 4.9 / 5.0"
              subtitle="Prawdziwe recenzje z Google oraz Restaurant Guru od mieszkańców Łodzi i gości lokalu."
              onGoHome={() => handleTabChange('home')}
            />
            <TestimonialsSection />
          </div>
        )}

        {/* TAB 6: LOKALIZACJA & GODZINY */}
        {activeTab === 'contact' && (
          <div key="contact" className="animate-fade-in-up">
            <SubpageHeader
              currentTab={activeTab}
              title="Lokalizacja, Dojazd & Godziny Otwarcia"
              subtitle="Andrzeja Sacharowa 45A, Łódź. Czynne codziennie do późna. Bezpłatny parking."
              onGoHome={() => handleTabChange('home')}
            />
            <LocationAndHours />
          </div>
        )}
      </main>

      <Footer onSelectTab={handleTabChange} />
      <CartDrawer />
      <GlobalDishModal />
      <MobileBottomBar onGoToMenu={() => handleTabChange('menu')} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
