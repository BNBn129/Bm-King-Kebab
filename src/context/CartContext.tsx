import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/restaurantData';

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  size?: string;
  meatType?: string;
  sauce?: string;
  quantity: number;
  finalPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, options?: { size?: string; meatType?: string; sauce?: string; priceAdjustment?: number }) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedModalDish: MenuItem | null;
  setSelectedModalDish: (dish: MenuItem | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bm_king_kebab_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedModalDish, setSelectedModalDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('bm_king_kebab_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (
    item: MenuItem,
    options?: { size?: string; meatType?: string; sauce?: string; priceAdjustment?: number }
  ) => {
    const size = options?.size || (item.sizes ? item.sizes[0] : undefined);
    const meatType = options?.meatType || (item.category === 'wegetarianskie' ? undefined : 'Mieszane (Kurczak & Wołowina)');
    const sauce = options?.sauce || 'Mieszany (Czosnkowy & Ostry)';
    const adjustment = options?.priceAdjustment || 0;
    const finalPrice = item.price + adjustment;

    const cartItemId = `${item.id}-${size || 'std'}-${meatType || 'none'}-${sauce || 'std'}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          item,
          size,
          meatType,
          sauce,
          quantity: 1,
          finalPrice,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.cartItemId === cartItemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = cart.reduce((acc, curr) => acc + curr.finalPrice * curr.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        selectedModalDish,
        setSelectedModalDish,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
