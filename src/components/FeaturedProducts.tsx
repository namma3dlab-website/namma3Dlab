'use client';

import React from 'react';
import Link from 'next/link';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import {
  Star,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Feather,
  Sun,
  Lamp,
  Key,
  Headphones,
  Moon,
  Grid,
  Check
} from 'lucide-react';

export function FeaturedProducts() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  // Take top 4 featured products
  const featured = CATALOG_PRODUCTS.slice(0, 4);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather': return <Feather size={32} />;
      case 'Sun': return <Sun size={32} />;
      case 'Lamp': return <Lamp size={32} />;
      case 'Key': return <Key size={32} />;
      case 'Headphones': return <Headphones size={32} />;
      case 'Moon': return <Moon size={32} />;
      case 'Grid': return <Grid size={32} />;
      default: return <Sparkles size={32} />;
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
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section className="section-wrap" style={{ background: '#FFFFFF', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="eyebrow lime">Handcrafted &bull; Bangalore Studio</span>
          <h2 style={{ margin: '6px 0 0', fontSize: '28px', color: 'var(--navy)' }}>Featured 3D Printed Creations</h2>
        </div>
        <Link href="/shop" className="btn btn-light" style={{ fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          View Full Catalogue &rarr;
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
        {featured.map((product) => {
          const isAdded = addedId === product.id;

          return (
            <div
              key={product.id}
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 12px rgba(10, 13, 20, 0.03)'
              }}
            >
              {/* Real Product Photography */}
              <Link
                href={`/products/${product.slug}`}
                className="product-thumb"
                style={{
                  height: '220px',
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
                      top: '12px',
                      right: '12px',
                      background: 'rgba(10, 13, 20, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      letterSpacing: '0.04em',
                      zIndex: 2
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </Link>

              {/* Product Info */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--green-ink)', fontWeight: 800, letterSpacing: '0.04em' }}>
                      {product.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)' }}>{product.rating || 4.9}</span>
                    </div>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {product.name}
                  </Link>

                  <p style={{ fontSize: '13px', color: 'var(--slate)', margin: '0 0 16px', lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--navy)' }}>₹{product.price}</span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '13px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn btn-light"
                      style={{ flex: 1, padding: '10px', fontSize: '12px', textAlign: 'center', textDecoration: 'none' }}
                    >
                      Details
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={isAdded ? 'btn btn-dark' : 'btn btn-lime'}
                      style={{ flex: 1.2, padding: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} /> Added!
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} /> Add to Cart
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
