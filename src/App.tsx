/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { AwardsAndStory } from './components/AwardsAndStory';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishModal } from './components/DishModal';
import { RESTAURANT_INFO } from './data/restaurantData';
import { ShoppingBag, Phone, Flame, CheckCircle2, Coffee, Sparkles } from 'lucide-react';

const CulinaryPillars: React.FC = () => {
  return (
    <div className="bg-[#1C1917] text-white border-b border-stone-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-stone-900/70 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Wypiek na Żywo</p>
              <p className="text-[11px] text-stone-400 mt-0.5">Pita prosto z pieca</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-stone-900/70 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">100% Czyste Mięso</p>
              <p className="text-[11px] text-stone-400 mt-0.5">Zioła z Anatolii</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-stone-900/70 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Świeże Sosy</p>
              <p className="text-[11px] text-stone-400 mt-0.5">Robione codziennie</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-stone-900/70 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Turecki Çay Gratis</p>
              <p className="text-[11px] text-stone-400 mt-0.5">Dla każdego gościa</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const MobileBottomBar: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-2.5 bg-[#141210]/95 backdrop-blur-md border-t border-stone-800 flex items-center gap-2 shadow-2xl">
      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        className="flex-1 py-3 px-3 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-xl text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-98 transition-all"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>Zadzwoń</span>
      </a>

      <button
        onClick={() => setIsCartOpen(true)}
        className="flex-2 py-3 px-3 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-extrabold tracking-wide rounded-xl flex items-center justify-center gap-2 active:scale-98 shadow-md shadow-amber-500/20 cursor-pointer transition-all"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>Zamówienie</span>
        {totalCount > 0 && (
          <span className="bg-stone-950 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold">
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

function MainApp() {
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'glowna' || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans pb-16 md:pb-0">
      {/* Minimal luxury navbar with master 3-bar hamburger drawer */}
      <Navbar onNavigateSection={handleScrollToSection} />
      
      <main className="flex-1">
        {/* Grand Editorial Hero */}
        <Hero onGoToMenu={() => handleScrollToSection('menu')} />

        {/* Craftsmanship & Freshness Pillars */}
        <CulinaryPillars />

        {/* Full Interactive Menu & Ordering */}
        <MenuSection />

        {/* Royal Recipes & Specialties Showcase */}
        <GallerySection onGoToMenu={() => handleScrollToSection('menu')} />

        {/* Story, Tradition & Orły Gastronomii Award */}
        <AwardsAndStory onGoToMenu={() => handleScrollToSection('menu')} />

        {/* Verified Google Guest Reviews */}
        <TestimonialsSection />

        {/* Location, Opening Hours & Google Map */}
        <LocationAndHours />
      </main>

      {/* Grounding Luxury Footer */}
      <Footer onSelectTab={(tabId) => handleScrollToSection(tabId === 'home' ? 'glowna' : tabId)} />

      {/* Cart Slide-in Drawer */}
      <CartDrawer />

      {/* Global Dish Customizer Modal */}
      <GlobalDishModal />

      {/* Mobile Sticky Order & Phone Bar */}
      <MobileBottomBar />
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
