'use client';

import React from 'react';
import { Box, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <header className="site-header">
      <a href="#" className="brand-wrap" aria-label="Namma 3D Lab Home">
        <div className="brand-icon-box">
          <Box size={18} strokeWidth={2.5} />
        </div>
        <span>Namma 3D Lab</span>
      </a>

      <nav className="nav-links">
        <a href="#estimator">Instant Estimator</a>
        <a href="#catalog">Catalog &amp; Gifts</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#materials">Materials Matrix</a>
        <a href="#contact">Contact &amp; Lab</a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onOpenCart}
          className="btn btn-light"
          style={{ position: 'relative', padding: '9px 14px' }}
          aria-label="View Cart"
        >
          <ShoppingBag size={16} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span
              style={{
                background: 'var(--green-ink)',
                color: '#FFFFFF',
                borderRadius: '50%',
                padding: '1px 6px',
                fontSize: '10px',
                fontWeight: 900
              }}
            >
              {cartCount}
            </span>
          )}
        </button>

        <a
          href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20have%20an%20additive%20manufacturing%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
          style={{ padding: '9px 16px' }}
        >
          <MessageSquare size={14} />
          <span>Inquire</span>
        </a>
      </div>
    </header>
  );
}
