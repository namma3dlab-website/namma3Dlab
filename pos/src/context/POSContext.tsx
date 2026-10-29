'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  POSProduct,
  POSCartItem,
  POSTransaction,
  StallShift,
  INITIAL_POS_PRODUCTS,
  DEFAULT_SHIFT
} from '@/lib/posData';

interface POSContextType {
  products: POSProduct[];
  cart: POSCartItem[];
  transactions: POSTransaction[];
  shift: StallShift;
  addToCart: (product: POSProduct, variant?: string) => void;
  updateQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  addCustomItem: (name: string, price: number) => void;
  completeTransaction: (
    paymentMethod: 'UPI' | 'CASH',
    cashTendered?: number,
    customerPhone?: string
  ) => POSTransaction;
  updateShift: (updates: Partial<StallShift>) => void;
  resetAllTransactions: () => void;
  subtotal: number;
  totalItemsCount: number;
}

const POSContext = createContext<POSContextType | undefined>(undefined);

export function POSProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<POSProduct[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_pos_products');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_POS_PRODUCTS;
  });

  const [cart, setCart] = useState<POSCartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_pos_active_cart');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return [];
  });

  const [transactions, setTransactions] = useState<POSTransaction[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_pos_transactions');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return [];
  });

  const [shift, setShift] = useState<StallShift>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_pos_shift');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return DEFAULT_SHIFT;
  });

  // LocalStorage sync
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_pos_products', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_pos_active_cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_pos_transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_pos_shift', JSON.stringify(shift));
    }
  }, [shift]);

  const addToCart = (product: POSProduct, variant?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1, variant }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as POSCartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addCustomItem = (name: string, price: number) => {
    const customId = `custom-token-${Date.now()}`;
    setCart(prev => [...prev, { id: customId, name: name || 'Custom 3D Print', price, qty: 1 }]);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const completeTransaction = (
    paymentMethod: 'UPI' | 'CASH',
    cashTendered?: number,
    customerPhone?: string
  ): POSTransaction => {
    const orderNumber = transactions.length + 1;
    const id = `STALL-${String(orderNumber).padStart(3, '0')}`;
    const timestamp = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const changeDue = cashTendered && cashTendered > subtotal ? cashTendered - subtotal : 0;

    const newTx: POSTransaction = {
      id,
      orderNumber,
      timestamp,
      items: [...cart],
      totalAmount: subtotal,
      paymentMethod,
      cashTendered: cashTendered || (paymentMethod === 'CASH' ? subtotal : undefined),
      changeDue,
      customerPhone,
      stallName: shift.stallName
    };

    // Deduct stock for sold items
    setProducts(prev =>
      prev.map(p => {
        const soldInCart = cart.find(ci => ci.id === p.id);
        if (soldInCart) {
          return { ...p, stockQty: Math.max(0, p.stockQty - soldInCart.qty) };
        }
        return p;
      })
    );

    setTransactions(prev => [newTx, ...prev]);
    clearCart();
    return newTx;
  };

  const updateShift = (updates: Partial<StallShift>) => {
    setShift(prev => ({ ...prev, ...updates }));
  };

  const resetAllTransactions = () => {
    setTransactions([]);
    setShift(prev => ({ ...prev, startedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) }));
  };

  return (
    <POSContext.Provider
      value={{
        products,
        cart,
        transactions,
        shift,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        addCustomItem,
        completeTransaction,
        updateShift,
        resetAllTransactions,
        subtotal,
        totalItemsCount
      }}
    >
      {children}
    </POSContext.Provider>
  );
}

export function usePOS() {
  const context = useContext(POSContext);
  if (!context) {
    throw new Error('usePOS must be used within a POSProvider');
  }
  return context;
}
