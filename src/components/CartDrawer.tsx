import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Phone, ExternalLink, Check, Copy, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();

  const [orderType, setOrderType] = useState<'takeaway' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isCartOpen) return null;

  // Packaging fee: 1.00 zł per dish item (authentic restaurant fee from menu)
  const packagingFee = totalCount * 1.0;
  const deliveryFee = orderType === 'delivery' ? 7.0 : 0.0;
  const grandTotal = subtotal + packagingFee + deliveryFee;

  const generateOrderText = () => {
    let text = `👑 ZAMÓWIENIE - BM KING KEBAB ŁÓDŹ\n`;
    text += `Typ: ${orderType === 'delivery' ? 'DOSTAWA' : 'ODBIÓR W LOKALU'}\n`;
    if (customerName) text += `Klient: ${customerName}\n`;
    if (customerPhone) text += `Tel: ${customerPhone}\n`;
    if (orderType === 'delivery' && deliveryAddress) {
      text += `Adres dostawy: ${deliveryAddress}\n`;
    }
    text += `\nPOZYCJE:\n`;
    cart.forEach((i, idx) => {
      text += `${idx + 1}. ${i.item.name} (${i.quantity}x) - ${(i.finalPrice * i.quantity).toFixed(2)} zł\n`;
      if (i.size) text += `   Rozmiar: ${i.size}\n`;
      if (i.meatType) text += `   Mięso: ${i.meatType}\n`;
      if (i.sauce) text += `   Sos/Dodatki: ${i.sauce}\n`;
    });
    text += `\nOpakowania: ${packagingFee.toFixed(2)} zł\n`;
    if (deliveryFee > 0) text += `Dostawa: ${deliveryFee.toFixed(2)} zł\n`;
    text += `RAZEM DO ZAPŁATY: ${grandTotal.toFixed(2)} zł\n`;
    if (orderNotes) text += `Uwagi: ${orderNotes}\n`;
    return text;
  };

  const handleCopySummary = () => {
    const text = generateOrderText();
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md lg:max-w-lg bg-[#11131c] border-l border-[#202534] flex flex-col shadow-2xl animate-slide-in-right">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-[#232733] bg-[#161922] flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">Twoje Zamówienie</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono tabular-nums">
                  {totalCount} {totalCount === 1 ? 'pozycja' : totalCount < 5 ? 'pozycje' : 'pozycji'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Zamknij koszyk"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            
            {/* Fulfillment Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Sposób Realizacji
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#0b0c10] border border-[#232733] rounded-lg">
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    orderType === 'takeaway'
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Odbiór Osobisty (0 zł)
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Dostawa w Łodzi (+7 zł)
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                {orderType === 'takeaway'
                  ? `Odbiór w lokalu: ${RESTAURANT_INFO.address}`
                  : 'Dostawa kurierem pod wskazany adres na terenie Łodzi'}
              </p>
            </div>

            {/* Empty State */}
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-800/60 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-slate-300">Koszyk jest pusty</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Wybierz z menu swoje ulubione danie, tortillę, kebab box lub talerz szefa.
                </p>
                <a
                  href="#menu"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs rounded-lg transition-colors"
                >
                  Przejdź do Menu
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Cart Items List */}
                <div className="space-y-3">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.cartItemId}
                      className="p-3.5 rounded-xl bg-[#161822] border border-[#232733] space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-white">{cartItem.item.name}</h4>
                          {cartItem.size && (
                            <p className="text-[11px] text-amber-400">{cartItem.size}</p>
                          )}
                          {cartItem.meatType && (
                            <p className="text-[11px] text-slate-400">{cartItem.meatType}</p>
                          )}
                          {cartItem.sauce && (
                            <p className="text-[11px] text-slate-500">{cartItem.sauce}</p>
                          )}
                        </div>

                        <span className="text-sm font-bold text-white font-mono tabular-nums shrink-0 whitespace-nowrap">
                          {(cartItem.finalPrice * cartItem.quantity).toFixed(2)}&nbsp;zł
                        </span>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#232733]/60">
                        <button
                          onClick={() => removeFromCart(cartItem.cartItemId)}
                          className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
                          aria-label="Usuń pozycję"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Usuń</span>
                        </button>

                        <div className="flex items-center border border-[#2d3345] rounded-md bg-[#0b0c10]">
                          <button
                            onClick={() => updateQuantity(cartItem.cartItemId, -1)}
                            className="p-1.5 text-slate-400 hover:text-white transition-colors"
                            aria-label="Mniej"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-white font-mono tabular-nums">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(cartItem.cartItemId, 1)}
                            className="p-1.5 text-slate-400 hover:text-white transition-colors"
                            aria-label="Więcej"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <div className="text-right">
                  <button
                    onClick={clearCart}
                    className="text-xs text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    Wyczyść całe zamówienie
                  </button>
                </div>

                {/* Customer Contact Details */}
                <div className="p-4 rounded-xl bg-[#0b0c10] border border-[#232733] space-y-3">
                  <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Dane Kontaktowe & Dostawa
                  </p>
                  
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Imię i nazwisko"
                    className="w-full px-3 py-2 bg-[#161821] border border-[#232733] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />

                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Numer telefonu (np. 500 123 456)"
                    className="w-full px-3 py-2 bg-[#161821] border border-[#232733] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />

                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Adres dostawy w Łodzi (ulica, numer, klatka)"
                      className="w-full px-3 py-2 bg-[#161821] border border-[#232733] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  )}

                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Uwagi do kuchni (np. bez cebuli, dobrze wypieczone)"
                    className="w-full px-3 py-2 bg-[#161821] border border-[#232733] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

              </div>
            )}

          </div>

          {/* Drawer Footer with Transparent Breakdown & Call to Actions */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#232733] bg-[#161922] space-y-4">
              
              {/* Cost Summary Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between items-center gap-2">
                  <span>Wartość dań:</span>
                  <span className="font-mono tabular-nums text-slate-200 whitespace-nowrap shrink-0">{subtotal.toFixed(2)}&nbsp;zł</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span>Opakowania na wynos (1 zł/danie):</span>
                  <span className="font-mono tabular-nums text-slate-200 whitespace-nowrap shrink-0">{packagingFee.toFixed(2)}&nbsp;zł</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between items-center gap-2">
                    <span>Koszt dostawy (Łódź):</span>
                    <span className="font-mono tabular-nums text-slate-200 whitespace-nowrap shrink-0">{deliveryFee.toFixed(2)}&nbsp;zł</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#232733] flex justify-between items-center gap-2 text-sm font-bold text-white">
                  <span>Łącznie do zapłaty:</span>
                  <span className="text-amber-400 font-mono tabular-nums text-lg whitespace-nowrap shrink-0">
                    {grandTotal.toFixed(2)}&nbsp;zł
                  </span>
                </div>
              </div>

              {/* Order Methods */}
              <div className="space-y-2 pt-1">
                {/* 1. Direct Phone Order */}
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/15 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Zadzwoń i zamów: {RESTAURANT_INFO.phone}</span>
                </a>

                {/* 2. Copy formatted order to clipboard */}
                <button
                  onClick={handleCopySummary}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1f2433] hover:bg-[#282f42] text-slate-200 font-semibold text-xs rounded-lg border border-[#2e374f] transition-colors cursor-pointer"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Skopiowano treść zamówienia!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Skopiuj listę zamówienia (do SMS / notatki)</span>
                    </>
                  )}
                </button>

                {/* 3. Pyszne.pl Portal Link */}
                <a
                  href={RESTAURANT_INFO.pyszneUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 text-slate-400 hover:text-amber-400 text-xs transition-colors"
                >
                  <span>Lub zamów przez portal Pyszne.pl</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
