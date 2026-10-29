'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '@/components/CartDrawer';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalCartCount: number;
  totalAmount: number;
  addToCart: (item: { id: string; name: string; price: number; meta?: string }) => void;
  buyNow: (item: { id: string; name: string; price: number; meta?: string }) => void;
  updateQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart from localStorage on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('namma3d_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage', e);
    }
  }, []);

  // Save cart to localStorage on updates
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('namma3d_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cart, isMounted]);

  const addToCart = (item: { id: string; name: string; price: number; meta?: string }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const buyNow = (item: { id: string; name: string; price: number; meta?: string }) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        totalCartCount,
        totalAmount,
        addToCart,
        buyNow,
        updateQty,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
