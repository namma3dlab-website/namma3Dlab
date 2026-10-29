'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { ShoppingBag, Sparkles, Feather, Sun, Lamp, Key, Headphones, Moon, Grid, Plus, Check, Search, Star, SlidersHorizontal } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ShopSectionProps {
  onAddToCart?: (item: { id: string; slug?: string; name: string; price: number; meta?: string; variant?: string; imageGradient?: string; iconName?: string; qty?: number }) => void;
  onBuyNow?: (item: { id: string; slug?: string; name: string; price: number; meta?: string; variant?: string; imageGradient?: string; iconName?: string; qty?: number }) => void;
}

export function ShopSection({ onAddToCart, onBuyNow }: ShopSectionProps) {
  const cartContext = useCart();
  const handleAdd = onAddToCart || cartContext.addToCart;
  const handleBuy = onBuyNow || cartContext.buyNow;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Filter and sort products
  const filteredProducts = CATALOG_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
    return 0;
  });

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

  const handleProductAdd = (product: Product) => {
    const chosenColor = selectedColors[product.id] || (product.colors && product.colors[0]) || 'Standard';
    handleAdd({
      id: `${product.id}-${chosenColor.replace(/\s+/g, '-').toLowerCase()}`,
      slug: product.slug,
      name: `${product.name}`,
      price: product.price,
      meta: `${product.material} • Color: ${chosenColor}`,
      variant: chosenColor,
      imageGradient: product.colorGradient,
      imageUrl: product.imageUrl,
      iconName: product.iconName,
      qty: 1
    });

    setAddedNotice(product.name);
    setTimeout(() => setAddedNotice(null), 2000);
  };

  return (
    <section className="section-wrap" id="shop" style={{ background: 'var(--paper)' }}>
      {/* Section Head */}
      <div className="section-head" style={{ marginBottom: '20px' }}>
        <span className="eyebrow lime" style={{ fontSize: '10px' }}>Online Store &bull; Bangalore Studio</span>
        <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 30px)', margin: '4px 0 6px' }}>
          Explore 3D Product Catalogue
        </h2>
        <p className="desktop-only" style={{ margin: 0, fontSize: '14px', color: 'var(--slate)' }}>
          High-precision 3D printed desk accessories, ambient Voronoi lighting, sacred deity idols, and executive gifts. Each item is crafted with micron tolerance, hand-inspected, and delivered across Bangalore in 24–48 hours.
        </p>
      </div>

      {/* Mobile Horizontal Category Rail & Search */}
      <div style={{ marginBottom: '24px' }}>
        {/* Horizontal Category Scroll Rail */}
        <div className="mobile-category-rail" style={{ marginBottom: '14px' }}>
          {[
            { id: 'all', label: 'All Items', icon: '🛍️' },
            { id: 'decor', label: 'Spiral Vases', icon: '🏺' },
            { id: 'lighting', label: 'Ambient Lamps', icon: '💡' },
            { id: 'sacred', label: 'Sacred Idols', icon: '🕉️' },
            { id: 'accessories', label: 'Tech & Desk', icon: '⌨️' },
            { id: 'gifts', label: 'Bespoke Gifts', icon: '🎁' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                fontSize: '12px',
                flexShrink: 0,
                cursor: 'pointer'
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <div style={{ position: 'relative', flex: 1, minWidth: '180px' }}>
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
            <input
              type="text"
              className="form-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', paddingLeft: '34px', height: '36px', borderRadius: '24px', fontSize: '12px' }}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <SlidersHorizontal size={13} color="var(--slate)" />
            <select
              className="form-input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{ height: '36px', borderRadius: '10px', fontSize: '11.5px', padding: '0 8px' }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Added to Cart Floating Toast */}
      {addedNotice && (
        <div style={{ position: 'fixed', bottom: '80px', right: '16px', left: '16px', maxWidth: '380px', margin: '0 auto', zIndex: 700, background: '#0A0D14', color: '#FFFFFF', padding: '12px 18px', borderRadius: '12px', boxShadow: '0 12px 35px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid var(--lime)' }}>
          <Check size={16} color="var(--lime)" />
          <span style={{ fontSize: '12.5px', fontWeight: 700 }}>Added "{addedNotice}" to Cart!</span>
        </div>
      )}

      {/* Products Grid: 2-Column on Mobile, Multi-Column on Desktop */}
      <div className="catalog-grid" style={{ marginBottom: '60px' }}>
        {filteredProducts.map(product => {
          const activeColor = selectedColors[product.id] || (product.colors && product.colors[0]) || '';
          return (
            <div key={product.id} className="product-card mobile-compact-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              {/* Product Visual Photography */}
              <Link
                href={`/products/${product.slug}`}
                className="product-thumb"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  height: '200px'
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

              {/* Product Body */}
              <div className="product-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
                <div>
                  {/* Category & Rating */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '9.5px', textTransform: 'uppercase', color: 'var(--green-ink)', fontWeight: 800, letterSpacing: '0.04em' }}>
                      {product.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Star size={11} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--navy)' }}>{product.rating || 4.9}</span>
                    </div>
                  </div>

                  <Link href={`/products/${product.slug}`} className="product-title" style={{ textDecoration: 'none', display: 'block' }}>
                    <strong style={{ fontSize: '14.5px', color: 'var(--navy)', lineHeight: 1.25, display: 'block' }}>
                      {product.name}
                    </strong>
                  </Link>

                  {/* Desktop Only Details — Hidden on Mobile to Prevent Wall of Text */}
                  <span className="desktop-only" style={{ fontSize: '11px', color: 'var(--slate)', margin: '4px 0 8px', display: 'block' }}>
                    {product.material} &bull; {product.dimensions}
                  </span>

                  <p className="hide-desc-on-mobile" style={{ fontSize: '12.5px', color: 'var(--slate-dark)', margin: '0 0 14px', lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.description}
                  </p>

                  {/* Color Selector Pills (Desktop Only; on mobile selected on detail page) */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="desktop-only" style={{ marginBottom: '14px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Color: <strong style={{ color: 'var(--navy)' }}>{activeColor}</strong>
                      </span>
                      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        {product.colors.map(col => (
                          <button
                            key={col}
                            type="button"
                            onClick={() => setSelectedColors(prev => ({ ...prev, [product.id]: col }))}
                            style={{
                              padding: '3px 8px',
                              borderRadius: '4px',
                              fontSize: '10.5px',
                              fontWeight: 700,
                              cursor: 'pointer',
                              border: activeColor === col ? '1.5px solid var(--green-ink)' : '1px solid var(--line)',
                              background: activeColor === col ? 'var(--green-subtle)' : '#FFFFFF',
                              color: activeColor === col ? 'var(--green-ink)' : 'var(--slate-dark)'
                            }}
                          >
                            {col}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Price & Action Button */}
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                    <span className="product-price" style={{ fontSize: '18px', fontWeight: 900, color: 'var(--navy)' }}>₹{product.price}</span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '11px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

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
                      onClick={() => handleProductAdd(product)}
                      className="btn btn-lime"
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
                      <ShoppingBag size={13} />
                      <span className="desktop-only">Add to Cart</span>
                      <span className="mobile-only">+ Add</span>
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
