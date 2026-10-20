import React, { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, Phone, ExternalLink, Check, Copy, ArrowRight, MapPin, Truck, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { TabType } from './Navbar';

interface OrderViewProps {
  setActiveTab: (tab: TabType) => void;
}

export const OrderView: React.FC<OrderViewProps> = ({ setActiveTab }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, totalCount } = useCart();
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const packagingFee = cart.length > 0 ? 1.0 : 0;
  const deliveryFee = fulfillmentType === 'delivery' ? 7.0 : 0;
  const grandTotal = subtotal + packagingFee + deliveryFee;

  // Formatted order summary for clipboard
  const generateOrderSummary = () => {
    let summary = `*ZAMÓWIENIE BM KING KEBAB ŁÓDŹ*\n`;
    summary += `-----------------------------\n`;
    cart.forEach((ci, idx) => {
      summary += `${idx + 1}. ${ci.item.name} (${ci.quantity}x) - ${(ci.finalPrice * ci.quantity).toFixed(2)} zł\n`;
      if (ci.size) summary += `   Rozmiar: ${ci.size}\n`;
      if (ci.meatType) summary += `   Mięso: ${ci.meatType}\n`;
      if (ci.sauce) summary += `   Sos/Dodatki: ${ci.sauce}\n`;
    });
    summary += `-----------------------------\n`;
    summary += `Opakowanie: ${packagingFee.toFixed(2)} zł\n`;
    if (fulfillmentType === 'delivery') {
      summary += `Dostawa: ${deliveryFee.toFixed(2)} zł\n`;
      if (deliveryAddress) summary += `Adres dostawy: ${deliveryAddress}\n`;
    } else {
      summary += `Odbiór: Osobisty (Sacharowa 45A)\n`;
    }
    if (customerPhone) summary += `Telefon klienta: ${customerPhone}\n`;
    if (notes) summary += `Uwagi: ${notes}\n`;
    summary += `ŁĄCZNIE: ${grandTotal.toFixed(2)} zł\n`;
    return summary;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateOrderSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-8 md:py-12 animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Królewskie Zamówienie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Twoje Zamówienie & Koszyk
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Sprawdź wybrane pozycje, dostosuj odbiór lub dostawę i złóż zamówienie prosto do restauracji.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16 bg-[#1a1d28] rounded-2xl border border-[#2d3345] p-8 space-y-5">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#232736] flex items-center justify-center text-amber-400">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Twój koszyk jest jeszcze pusty</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Nie dodałeś jeszcze żadnego dania do zamówienia. Przejrzyj nasze menu ze zdjęciami i wybierz coś pysznego!
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-98 cursor-pointer"
            >
              <span>Przejdź do Menu i Wybierz Dania</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Active Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#2d3345]">
                <span className="text-sm font-bold text-white">
                  Wybrane Dania ({totalCount})
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Wyczyść koszyk</span>
                </button>
              </div>

              <div className="space-y-3">
                {cart.map((ci) => (
                  <div
                    key={ci.cartItemId}
                    className="p-4 rounded-xl bg-[#1a1d28] border border-[#2d3345] flex gap-3 sm:gap-4 items-center"
                  >
                    {/* Item Image Thumbnail */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-[#272d3f] bg-[#12141d]">
                      <img
                        src={ci.item.image}
                        alt={ci.item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white truncate">
                          {ci.item.name}
                        </h4>
                        <span className="text-sm font-bold text-amber-400 font-mono tabular-nums shrink-0 whitespace-nowrap">
                          {(ci.finalPrice * ci.quantity).toFixed(2)}&nbsp;zł
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-400 space-y-0.5">
                        {ci.size && <p>Rozmiar: <span className="text-slate-300 font-medium">{ci.size}</span></p>}
                        {ci.meatType && <p>Mięso: <span className="text-slate-300 font-medium">{ci.meatType}</span></p>}
                        {ci.sauce && <p>Sosy: <span className="text-slate-300 font-medium">{ci.sauce}</span></p>}
                      </div>

                      {/* Quantity Buttons */}
                      <div className="flex items-center gap-3 pt-1">
                        <div className="flex items-center border border-[#2d3345] rounded-lg bg-[#141620]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(ci.cartItemId, ci.quantity - 1)}
                            className="p-1 text-slate-400 hover:text-white transition-colors"
                            aria-label="Mniej"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white font-mono tabular-nums">
                            {ci.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(ci.cartItemId, ci.quantity + 1)}
                            className="p-1 text-slate-400 hover:text-white transition-colors"
                            aria-label="Więcej"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(ci.cartItemId)}
                          className="text-[11px] text-slate-400 hover:text-red-400 transition-colors"
                        >
                          Usuń
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add more dishes button */}
              <button
                onClick={() => {
                  setActiveTab('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 bg-[#1e2230] hover:bg-[#252a3b] text-slate-200 text-xs font-semibold rounded-xl border border-[#2f364a] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Dodaj więcej dań z menu</span>
              </button>
            </div>

            {/* Right Column: Checkout & Order Submission */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Fulfillment Type Toggle */}
              <div className="p-5 rounded-2xl bg-[#1a1d28] border border-[#2d3345] space-y-4">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Sposób Realizacji
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('pickup')}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                      fulfillmentType === 'pickup'
                        ? 'border-amber-500 bg-amber-500/20 text-amber-300 font-bold shadow-sm'
                        : 'border-[#2d3345] bg-[#141620] text-slate-400 hover:text-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Odbiór Osobisty</span>
                    <span className="text-[10px] text-emerald-400">0 zł · Gotowe w 15 min</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType('delivery')}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                      fulfillmentType === 'delivery'
                        ? 'border-amber-500 bg-amber-500/20 text-amber-300 font-bold shadow-sm'
                        : 'border-[#2d3345] bg-[#141620] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>Dostawa w Łodzi</span>
                    <span className="text-[10px] text-amber-400 font-mono">+7,00 zł</span>
                  </button>
                </div>

                {fulfillmentType === 'pickup' ? (
                  <div className="p-3 bg-[#13151f] rounded-xl border border-[#242938] text-xs text-slate-300 space-y-1">
                    <p className="font-semibold text-amber-400">Adres odbioru:</p>
                    <p>{RESTAURANT_INFO.address}</p>
                    <p className="text-[11px] text-slate-400">Darmowy parking pod samym wejściem.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-xs text-slate-300 block">Adres dostawy w Łodzi:</label>
                    <input
                      type="text"
                      placeholder="Ulica, numer domu i mieszkania..."
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full p-2.5 bg-[#141620] border border-[#2d3345] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                )}

                <div className="space-y-2 pt-1">
                  <label className="text-xs text-slate-300 block">Twój numer telefonu:</label>
                  <input
                    type="tel"
                    placeholder="np. 500 123 456"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 bg-[#141620] border border-[#2d3345] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-300 block">Uwagi do zamówienia (opcjonalnie):</label>
                  <input
                    type="text"
                    placeholder="np. sztućce, ostry sos osobno..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 bg-[#141620] border border-[#2d3345] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-5 rounded-2xl bg-[#1a1d28] border border-[#2d3345] space-y-3">
                <div className="flex justify-between items-center gap-2 text-xs text-slate-300">
                  <span>Wartość dań:</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0">{subtotal.toFixed(2)}&nbsp;zł</span>
                </div>
                <div className="flex justify-between items-center gap-2 text-xs text-slate-300">
                  <span>Opakowanie na wynos:</span>
                  <span className="font-mono tabular-nums whitespace-nowrap shrink-0">{packagingFee.toFixed(2)}&nbsp;zł</span>
                </div>
                {fulfillmentType === 'delivery' && (
                  <div className="flex justify-between items-center gap-2 text-xs text-slate-300">
                    <span>Dostawa w Łodzi:</span>
                    <span className="font-mono tabular-nums whitespace-nowrap shrink-0">{deliveryFee.toFixed(2)}&nbsp;zł</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#2d3345] flex items-baseline justify-between gap-2">
                  <span className="text-sm font-bold text-white">RAZEM:</span>
                  <span className="text-2xl font-bold text-amber-400 font-mono tabular-nums whitespace-nowrap shrink-0">
                    {grandTotal.toFixed(2)}&nbsp;zł
                  </span>
                </div>

                {/* Primary Ordering Action: Call to order */}
                <div className="pt-2 space-y-2">
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-black" />
                    <span>Zadzwoń i Zamów ({grandTotal.toFixed(2)} zł)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full py-2.5 px-4 bg-[#202433] hover:bg-[#282e40] text-slate-200 text-xs font-semibold rounded-xl border border-[#343d52] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Skopiowano podsumowanie do schowka!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Skopiuj treść zamówienia</span>
                      </>
                    )}
                  </button>

                  <a
                    href={RESTAURANT_INFO.pyszneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#161822] hover:bg-[#1d202c] text-slate-400 hover:text-slate-200 text-xs font-medium rounded-xl border border-[#2b3042] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Zamów przez portal Pyszne.pl</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
