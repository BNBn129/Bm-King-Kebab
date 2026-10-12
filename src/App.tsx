/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AwardsAndStory } from './components/AwardsAndStory';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO } from './data/restaurantData';
import { Phone, Utensils } from 'lucide-react';

const MobileActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-2.5 bg-[#050507]/95 backdrop-blur-xl border-t border-[#181922] flex items-center gap-2">
      <a
        href="#menu"
        className="flex-1 py-3 px-3 bg-[#11121a] border border-[#222433] rounded-xl text-slate-200 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 active:scale-98"
      >
        <Utensils className="w-3.5 h-3.5 text-amber-500" />
        <span>Karta Menu</span>
      </a>

      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        className="flex-1 py-3 px-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-110 text-black text-xs font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 active:scale-98 shadow-md shadow-amber-500/15"
      >
        <Phone className="w-3.5 h-3.5 fill-black" />
        <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#e2e8f0] flex flex-col font-sans pb-16 md:pb-0 selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <AwardsAndStory />
        <LocationAndHours />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
