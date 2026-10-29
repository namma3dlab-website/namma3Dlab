'use client';

import React from 'react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';

function GlobalCartElements() {
  const { cart, isCartOpen, setIsCartOpen, updateQty, removeItem, clearCart, totalCartCount, totalAmount } = useCart();

  return (
    <>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQty}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />

      {/* Floating Cart Trigger Button */}
      {totalCartCount > 0 && !isCartOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 400,
            background: 'var(--navy)',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 12px 35px rgba(10, 13, 20, 0.35)',
            cursor: 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
          onClick={() => setIsCartOpen(true)}
        >
          <span style={{ background: 'var(--green-ink)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
            {totalCartCount}
          </span>
          <span style={{ fontSize: '13px', fontWeight: 800 }}>Review Cart (₹{totalAmount}) &rarr;</span>
        </div>
      )}
    </>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
      <GlobalCartElements />
    </CartProvider>
  );
}
