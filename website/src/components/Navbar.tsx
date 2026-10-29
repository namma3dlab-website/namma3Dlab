'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, ShoppingBag, Sparkles, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const pathname = usePathname();
  const { totalCartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="site-header">
        {/* Brand */}
        <Link href="/" onClick={closeMenu} className="brand-wrap" aria-label="Namma 3D Lab Home">
          <div className="brand-icon-box">
            <Box size={18} strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 800 }}>Namma 3D Lab</span>
        </Link>

        {/* Desktop Nav Links (hidden on mobile via CSS) */}
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

        {/* Right Actions & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          {/* Custom Navigation Button */}
          <Link
            href="/custom"
            onClick={closeMenu}
            className="btn btn-lime site-nav-custom-btn"
            style={{
              padding: '7px 14px',
              fontSize: '12px',
              borderRadius: '20px',
              boxShadow: pathname === '/custom' ? '0 0 0 2px var(--navy)' : '0 2px 8px rgba(141, 198, 63, 0.25)'
            }}
          >
            <Sparkles size={13} />
            <span>Custom</span>
          </Link>

          {/* Cart Icon Button */}
          <button
            onClick={() => {
              closeMenu();
              setIsCartOpen(true);
            }}
            className="btn btn-light"
            style={{ position: 'relative', padding: '8px 11px', borderRadius: '10px' }}
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

          {/* WhatsApp Support Button */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20have%20an%20order%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark site-nav-wa-btn"
            style={{ padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '5px', borderRadius: '10px' }}
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle size={14} color="#25D366" />
            <span className="hide-on-xs" style={{ fontSize: '12px' }}>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button (shown only on mobile/tablet) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="site-mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            style={{
              padding: '8px',
              background: 'var(--surface-alt)',
              border: '1px solid var(--line)',
              borderRadius: '10px',
              color: 'var(--navy)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Dropdown Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={closeMenu}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 13, 20, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 490
            }}
          />
          <div
            className="site-mobile-drawer"
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              background: '#FFFFFF',
              borderBottom: '2px solid var(--line)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              padding: '20px 24px 28px',
              zIndex: 495,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              animation: 'slideDownNav 0.2s ease-out'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              Store Navigation
            </div>

            <Link
              href="/"
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '12px',
                background: pathname === '/' ? 'var(--surface-alt)' : '#F8FAFC',
                fontWeight: 700,
                color: 'var(--navy)',
                fontSize: '14px'
              }}
            >
              <span>Home Storefront</span>
              <ChevronRight size={16} color="var(--slate)" />
            </Link>

            <Link
              href="/shop"
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '12px',
                background: pathname === '/shop' ? 'var(--surface-alt)' : '#F8FAFC',
                fontWeight: 700,
                color: 'var(--navy)',
                fontSize: '14px'
              }}
            >
              <span>Shop All Products</span>
              <ChevronRight size={16} color="var(--slate)" />
            </Link>

            <Link
              href="/custom"
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(141, 198, 63, 0.12)',
                border: '1px solid rgba(141, 198, 63, 0.3)',
                fontWeight: 800,
                color: 'var(--navy)',
                fontSize: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="var(--green-ink)" />
                <span>Custom 3D Printing &bull; Enquiry</span>
              </div>
              <ChevronRight size={16} color="var(--green-ink)" />
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '12px',
                background: pathname === '/cart' ? 'var(--surface-alt)' : '#F8FAFC',
                fontWeight: 700,
                color: 'var(--navy)',
                fontSize: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShoppingBag size={16} />
                <span>Cart ({totalCartCount} items)</span>
              </div>
              <ChevronRight size={16} color="var(--slate)" />
            </Link>

            <div style={{ borderTop: '1px solid var(--line)', marginTop: '8px', paddingTop: '14px' }}>
              <a
                href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20have%20an%20order%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn btn-dark"
                style={{ width: '100%', justifyContent: 'center', padding: '12px', borderRadius: '12px' }}
              >
                <MessageCircle size={16} color="#25D366" />
                <span>Chat with Lab on WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
