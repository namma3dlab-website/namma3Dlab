'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const pathname = usePathname();
  const { totalCartCount, setIsCartOpen } = useCart();

  return (
    <header className="site-header">
      <Link href="/" className="brand-wrap" aria-label="Namma 3D Lab Home">
        <div className="brand-icon-box">
          <Box size={18} strokeWidth={2.5} />
        </div>
        <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 800 }}>Namma 3D Lab</span>
      </Link>

      <nav className="nav-links">
        <Link
          href="/"
          style={{
            color: pathname === '/' ? 'var(--navy)' : 'var(--slate)',
            fontWeight: pathname === '/' ? 800 : 600,
            padding: '6px 14px',
            borderRadius: '20px',
            background: pathname === '/' ? 'var(--surface-alt)' : 'transparent',
            transition: 'all 0.2s ease'
          }}
        >
          Home
        </Link>
        <Link
          href="/shop"
          style={{
            color: pathname === '/shop' || pathname.startsWith('/products/') ? 'var(--navy)' : 'var(--slate)',
            fontWeight: pathname === '/shop' || pathname.startsWith('/products/') ? 800 : 600,
            padding: '6px 14px',
            borderRadius: '20px',
            background: pathname === '/shop' || pathname.startsWith('/products/') ? 'var(--surface-alt)' : 'transparent',
            transition: 'all 0.2s ease'
          }}
        >
          Shop Catalogue
        </Link>
        <Link
          href="/cart"
          style={{
            color: pathname === '/cart' ? 'var(--navy)' : 'var(--slate)',
            fontWeight: pathname === '/cart' ? 800 : 600,
            padding: '6px 14px',
            borderRadius: '20px',
            background: pathname === '/cart' ? 'var(--surface-alt)' : 'transparent',
            transition: 'all 0.2s ease'
          }}
        >
          Cart
        </Link>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Prominent Custom Navigation Item in Top-Right */}
        <Link
          href="/custom"
          className="btn btn-lime"
          style={{
            padding: '8px 16px',
            fontSize: '12px',
            borderRadius: '20px',
            boxShadow: pathname === '/custom' ? '0 0 0 2px var(--navy)' : '0 2px 8px rgba(141, 198, 63, 0.25)'
          }}
        >
          <Sparkles size={14} />
          <span>Custom</span>
        </Link>

        {/* Live Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="btn btn-light"
          style={{ position: 'relative', padding: '8px 12px', borderRadius: '10px' }}
          aria-label="View Shopping Cart"
          type="button"
        >
          <ShoppingBag size={16} />
          {totalCartCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--green-ink)',
                color: '#FFFFFF',
                borderRadius: '50%',
                padding: '1px 6px',
                fontSize: '10px',
                fontWeight: 900
              }}
            >
              {totalCartCount}
            </span>
          )}
        </button>

        {/* WhatsApp Support Contact */}
        <a
          href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20have%20an%20order%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
          style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '10px' }}
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={14} color="#25D366" />
          <span style={{ fontSize: '12px' }}>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
