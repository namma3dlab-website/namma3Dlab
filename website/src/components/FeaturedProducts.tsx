'use client';

import React from 'react';
import Link from 'next/link';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import {
  Star,
  ShoppingBag,
  Sparkles,
  Feather,
  Sun,
  Lamp,
  Key,
  Headphones,
  Moon,
  Grid,
  Check,
  Plus
} from 'lucide-react';

export function FeaturedProducts() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  // Take top 4 featured products
  const featured = CATALOG_PRODUCTS.slice(0, 4);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather': return <Feather size={28} />;
      case 'Sun': return <Sun size={28} />;
      case 'Lamp': return <Lamp size={28} />;
      case 'Key': return <Key size={28} />;
      case 'Headphones': return <Headphones size={28} />;
      case 'Moon': return <Moon size={28} />;
      case 'Grid': return <Grid size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: `${product.id}-default`,
      slug: product.slug,
      name: product.name,
      price: product.price,
      meta: `${product.material} • Standard`,
      variant: product.colors?.[0] || 'Standard',
      imageGradient: product.colorGradient,
      imageUrl: product.imageUrl,
      iconName: product.iconName,
      qty: 1
    });

    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="section-wrap" style={{ background: '#FFFFFF', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <span className="eyebrow lime" style={{ marginBottom: '2px', fontSize: '10px' }}>Bangalore Studio</span>
          <h2 style={{ margin: 0, fontSize: 'clamp(20px, 3vw, 26px)', color: 'var(--navy)' }}>Featured Creations</h2>
        </div>
        <Link href="/shop" style={{ fontSize: '12px', fontWeight: 800, color: 'var(--green-ink)', textDecoration: 'none' }}>
          View All &rarr;
        </Link>
      </div>

      {/* 2-Column Mobile & Responsive Desktop Grid */}
      <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {featured.map((product) => {
          const isAdded = addedId === product.id;

          return (
            <div
              key={product.id}
              className="product-card mobile-compact-card"
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 10px rgba(10, 13, 20, 0.03)'
              }}
            >
              {/* Product Visual */}
              <Link
                href={`/products/${product.slug}`}
                className="product-thumb"
                style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-card-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: product.colorGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                    {getProductIcon(product.iconName)}
                  </div>
                )}

                {product.badge && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(10, 13, 20, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '9.5px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '12px',
                      letterSpacing: '0.04em',
                      zIndex: 2
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </Link>

              {/* Product Info */}
              <div className="product-body" style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--green-ink)', fontWeight: 800, letterSpacing: '0.04em' }}>
                      {product.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Star size={11} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--navy)' }}>{product.rating || 4.9}</span>
                    </div>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="product-title"
                    style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '6px',
                      lineHeight: 1.3
                    }}
                  >
                    {product.name}
                  </Link>

                  {/* Desktop Only Description — Hidden on Mobile to Avoid Text Walls */}
                  <p className="hide-desc-on-mobile" style={{ fontSize: '12.5px', color: 'var(--slate)', margin: '0 0 12px', lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '10px' }}>
                    <span className="product-price" style={{ fontSize: '18px', fontWeight: 900, color: 'var(--navy)' }}>₹{product.price}</span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '11px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons: Compact on Mobile */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn btn-light desktop-only"
                      style={{ flex: 1, padding: '8px', fontSize: '11.5px', textAlign: 'center', textDecoration: 'none' }}
                    >
                      Details
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={isAdded ? 'btn btn-dark' : 'btn btn-lime'}
                      style={{
                        flex: 1,
                        padding: '9px 10px',
                        fontSize: '11.5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                      }}
                    >
                      {isAdded ? (
                        <>
                          <Check size={13} /> Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={13} />
                          <span className="desktop-only">Add to Cart</span>
                          <span className="mobile-only">+ Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
