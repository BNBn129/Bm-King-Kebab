import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../data/restaurantData';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('Standardowy');
  const [selectedMeat, setSelectedMeat] = useState<string>('Kurczak (Soczysty & Delikatny)');
  const [selectedSauce, setSelectedSauce] = useState<string>('Mieszany (Czosnkowy + Ostry)');
  const [extraCheese, setExtraCheese] = useState<boolean>(false);
  const [extraMeat, setExtraMeat] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (dish) {
      if (dish.sizes && dish.sizes.length > 0) {
        setSelectedSize(dish.sizes[0]);
      } else {
        setSelectedSize('Standardowy');
      }
      setSelectedMeat(
        dish.category === 'wegetarianskie'
          ? 'Falafel (100% Wegetariański)'
          : 'Kurczak (Soczysty & Delikatny)'
      );
      setSelectedSauce('Mieszany (Czosnkowy + Ostry)');
      setExtraCheese(false);
      setExtraMeat(false);
      setQuantity(1);
      setAddedSuccess(false);
    }
  }, [dish]);

  if (!dish) return null;

  // Calculate size adjustments
  let sizeAdjustment = 0;
  if (selectedSize.includes('+4 zł')) sizeAdjustment = 4;
  else if (selectedSize.includes('+8 zł')) sizeAdjustment = 8;
  else if (selectedSize.includes('+5 zł')) sizeAdjustment = 5;
  else if (selectedSize.includes('+3 zł')) sizeAdjustment = 3;
  else if (selectedSize.includes('+6 zł')) sizeAdjustment = 6;
  else if (selectedSize.includes('12 zł')) sizeAdjustment = 4;

  const extrasAdjustment = (extraCheese ? 3 : 0) + (extraMeat ? 5 : 0);
  const unitPrice = dish.price + sizeAdjustment + extrasAdjustment;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(dish, {
        size: selectedSize,
        meatType: selectedMeat,
        sauce: `${selectedSauce}${extraCheese ? ' + Dodatkowy Ser' : ''}${extraMeat ? ' + Ekstra Mięso' : ''}`,
        priceAdjustment: sizeAdjustment + extrasAdjustment,
      });
    }
    setAddedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 450);
  };

  const meatOptions = dish.category === 'wegetarianskie' 
    ? ['Falafel z ciecierzycy', 'Warzywa i grecka feta']
    : [
        'Kurczak (Soczysty & Delikatny)',
        'Wołowina i Baranina (Intensywny smak)',
        'Mieszane (Pół na pół)',
      ];

  const sauceOptions = [
    'Mieszany (Czosnkowy + Ostry)',
    'Łagodny Czosnkowy (Domowy)',
    'Pikantny Orientalny (Ognisty)',
    'Ziołowo-Jogurtowy (Świeży)',
    'Ketchup łagodny',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#12141c] border border-[#232733] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#232733] bg-[#161922]">
          <div>
            <h3 className="text-xl font-bold text-white font-display">{dish.name}</h3>
            <p className="text-xs text-amber-400 font-medium mt-0.5 font-mono tabular-nums">
              Cena bazowa: {dish.price.toFixed(2)} zł
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Ingredients Note */}
          <div className="p-3 rounded-lg bg-[#0b0c10] border border-[#1f232f] text-xs text-slate-300">
            <span className="text-slate-400 font-medium">Skład:</span> {dish.ingredients}
          </div>

          {/* Size Selection (if applicable) */}
          {dish.sizes && dish.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                1. Wybierz Rozmiar Porcji
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {dish.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                        : 'border-[#232733] bg-[#161821] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Meat Selection (if applicable) */}
          {dish.category !== 'dodatki' && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                2. Wybór Mięsa / Farszu
              </label>
              <div className="space-y-1.5">
                {meatOptions.map((meat) => (
                  <button
                    key={meat}
                    type="button"
                    onClick={() => setSelectedMeat(meat)}
                    className={`w-full py-2.5 px-3 rounded-lg text-xs text-left border flex items-center justify-between transition-colors cursor-pointer ${
                      selectedMeat === meat
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                        : 'border-[#232733] bg-[#161821] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{meat}</span>
                    {selectedMeat === meat && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sauce Selection */}
          {dish.category !== 'dodatki' && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                3. Wybór Autorskiego Sosu
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sauceOptions.map((sauce) => (
                  <button
                    key={sauce}
                    type="button"
                    onClick={() => setSelectedSauce(sauce)}
                    className={`py-2 px-3 rounded-lg text-xs text-left border transition-colors cursor-pointer ${
                      selectedSauce === sauce
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                        : 'border-[#232733] bg-[#161821] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {sauce}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Extras / Dodatki */}
          {dish.category !== 'dodatki' && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                4. Dodatki Specjalne
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setExtraCheese(!extraCheese)}
                  className={`py-2.5 px-3 rounded-lg text-xs flex items-center justify-between border cursor-pointer transition-colors ${
                    extraCheese
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-medium'
                      : 'border-[#232733] bg-[#161821] text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span>Dodatkowy Ser Gouda</span>
                  <span className="font-mono tabular-nums">+3,00 zł</span>
                </button>
                <button
                  type="button"
                  onClick={() => setExtraMeat(!extraMeat)}
                  className={`py-2.5 px-3 rounded-lg text-xs flex items-center justify-between border cursor-pointer transition-colors ${
                    extraMeat
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-medium'
                      : 'border-[#232733] bg-[#161821] text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span>Ekstra Porcja Mięsa</span>
                  <span className="font-mono tabular-nums">+5,00 zł</span>
                </button>
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Liczba Porcji</span>
            <div className="flex items-center border border-[#2d3345] rounded-lg bg-[#0b0c10] overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Zmniejsz liczbę"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-sm font-bold text-white font-mono tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Zwiększ liczbę"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer with Final Action */}
        <div className="p-4 sm:p-6 border-t border-[#232733] bg-[#161922] flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-slate-400">Łączna kwota pozycji</p>
            <p className="text-xl font-bold text-amber-400 font-mono tabular-nums">
              {totalPrice.toFixed(2)} zł
            </p>
          </div>

          <button
            onClick={handleConfirm}
            disabled={addedSuccess}
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer disabled:opacity-80"
          >
            {addedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Dodano do koszyka!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Dodaj do zamówienia</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
