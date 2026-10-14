/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AwardsAndStory } from './components/AwardsAndStory';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { RESTAURANT_INFO } from './data/restaurantData';
import { ShoppingBag, Phone } from 'lucide-react';

const MobileBottomBar: React.FC = () => {
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

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0b0c10] text-[#e2e8f0] flex flex-col font-sans pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AwardsAndStory />
          <MenuSection />
          <GallerySection />
          <TestimonialsSection />
          <LocationAndHours />
        </main>
        <Footer />
        <CartDrawer />
        <MobileBottomBar />
      </div>
    </CartProvider>
  );
}
