'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EstimatorSection } from '@/components/EstimatorSection';
import { CatalogSection } from '@/components/CatalogSection';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { MaterialsSection } from '@/components/MaterialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Modals, CartItem } from '@/components/Modals';
import { Calculator, MessageCircle } from 'lucide-react';

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (item: { id: string; name: string; price: number; meta?: string }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handlePaymentSuccess = () => {
    setCart([]);
  };

  return (
    <main>
      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCheckoutOpen(true)} />
      
      <HeroSection />
      
      <EstimatorSection />

      <CatalogSection onAddToCart={handleAddToCart} />

      <CapabilitiesSection />

      <MaterialsSection />

      <ContactSection />

      <Footer />

      {/* Interactive Modals (Guest Checkout, Razorpay Simulator, GST Bill of Supply) */}
      <Modals
        isCheckoutOpen={isCheckoutOpen}
        onCloseCheckout={() => setIsCheckoutOpen(false)}
        cart={cart}
        totalAmount={totalAmount}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Floating Cart Pill Trigger */}
      {totalCartCount > 0 && (
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
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
            cursor: 'pointer'
          }}
          onClick={() => setIsCheckoutOpen(true)}
        >
          <span style={{ background: 'var(--green-ink)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
            {totalCartCount}
          </span>
          <span style={{ fontSize: '13px', fontWeight: 800 }}>Review Cart (₹{totalAmount}) &rarr;</span>
        </div>
      )}

      {/* Mobile Sticky Conversion Strip */}
      <div
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(248, 250, 252, 0.94)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--line)',
          padding: '10px 16px',
          zIndex: 450,
          justifyContent: 'space-between',
          gap: '8px'
        }}
        className="mobile-bottom-strip"
      >
        <a href="#estimator" className="btn btn-light" style={{ flex: 1, padding: '8px 10px', fontSize: '11px' }}>
          <Calculator size={14} /> Instant Quote
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20want%20to%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ flex: 1, padding: '8px 10px', fontSize: '11px' }}
        >
          <MessageCircle size={14} /> WhatsApp Order
        </a>
      </div>
    </main>
  );
}
