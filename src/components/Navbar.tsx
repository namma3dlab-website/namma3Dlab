'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, ShoppingBag, MessageSquare } from 'lucide-react';
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
        <span>Namma 3D Lab</span>
      </Link>

      <nav className="nav-links">
        <Link
          href="/shop"
          style={{
            color: pathname === '/shop' ? 'var(--navy)' : undefined,
            fontWeight: pathname === '/shop' ? 800 : undefined,
            borderBottom: pathname === '/shop' ? '2px solid var(--green-ink)' : undefined,
            paddingBottom: '4px'
          }}
        >
          Shop Pre-Printed
        </Link>
        <Link
          href="/custom"
          style={{
            color: pathname === '/custom' ? 'var(--navy)' : undefined,
            fontWeight: pathname === '/custom' ? 800 : undefined,
            borderBottom: pathname === '/custom' ? '2px solid var(--green-ink)' : undefined,
            paddingBottom: '4px'
          }}
        >
          Custom 3D Quote &amp; Upload
        </Link>
        <Link
          href="/#how-it-works"
          style={{
            color: pathname === '/' ? 'var(--navy)' : undefined,
            paddingBottom: '4px'
          }}
        >
          How It Works
        </Link>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => setIsCartOpen(true)}
          className="btn btn-light"
          style={{ position: 'relative', padding: '9px 14px' }}
          aria-label="View Cart"
          type="button"
        >
          <ShoppingBag size={16} />
          <span>Cart</span>
          {totalCartCount > 0 && (
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
              {totalCartCount}
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
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
