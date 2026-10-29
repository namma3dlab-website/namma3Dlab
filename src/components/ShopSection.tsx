'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { ShoppingBag, Sparkles, Feather, Sun, Lamp, Key, Headphones, Moon, Grid, Plus, Check, Search, ArrowRight, Star, SlidersHorizontal } from 'lucide-react';
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
      case 'Feather': return <Feather size={36} />;
      case 'Sun': return <Sun size={36} />;
      case 'Lamp': return <Lamp size={36} />;
      case 'Key': return <Key size={36} />;
      case 'Headphones': return <Headphones size={36} />;
      case 'Moon': return <Moon size={36} />;
      case 'Grid': return <Grid size={36} />;
      default: return <Sparkles size={36} />;
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
    setTimeout(() => setAddedNotice(null), 2500);
  };

  const handleProductBuyNow = (product: Product) => {
    const chosenColor = selectedColors[product.id] || (product.colors && product.colors[0]) || 'Standard';
    handleBuy({
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
  };

  return (
    <section className="section-wrap" id="shop" style={{ background: 'var(--paper)' }}>
      <div className="section-head">
        <span className="eyebrow lime">Online Store &bull; Bangalore Rapid Dispatch</span>
        <h2>Explore our pre-printed <em>product catalogue.</em></h2>
        <p>
          High-precision 3D printed desk accessories, ambient Voronoi lighting, sacred deity idols, and executive gifts. Each item is crafted with micron tolerance, hand-inspected, and delivered across Bangalore in 24–48 hours.
        </p>
      </div>

      {/* Filter, Search & Sort Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        
        {/* Category Filter Pills */}
        <div className="catalog-filter-bar" style={{ margin: 0 }}>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'decor', label: 'Lamps & Decor' },
            { id: 'gadgets', label: 'Desk Gadgets' },
            { id: 'idols', label: 'Sacred Idols' },
            { id: 'gifts', label: 'Personalized Gifts' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <div style={{ position: 'relative', width: '240px' }}>
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
            <input
              type="text"
              className="form-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', paddingLeft: '34px', height: '38px', borderRadius: '30px', fontSize: '12px' }}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <SlidersHorizontal size={14} color="var(--slate)" />
            <select
              className="form-input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{ height: '38px', borderRadius: '8px', fontSize: '12px', padding: '0 10px' }}
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
        <div style={{ position: 'fixed', bottom: '80px', right: '24px', zIndex: 600, background: '#0A0D14', color: '#FFFFFF', padding: '12px 20px', borderRadius: '10px', boxShadow: '0 12px 35px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid var(--lime)' }}>
          <Check size={16} color="var(--lime)" />
          <span style={{ fontSize: '13px', fontWeight: 700 }}>Added "{addedNotice}" to Cart!</span>
        </div>
      )}

      {/* Products Grid */}
      <div className="catalog-grid" style={{ marginBottom: '60px' }}>
        {filteredProducts.map(product => {
          const activeColor = selectedColors[product.id] || (product.colors && product.colors[0]) || '';
          return (
            <div key={product.id} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Product Visual Photography with link to /products/[slug] */}
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
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 9px',
                      borderRadius: '20px',
                      letterSpacing: '0.04em',
                      zIndex: 2
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </Link>

              <div className="product-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title & Rating */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                    <strong style={{ fontSize: '15px', color: 'var(--navy)', lineHeight: 1.25, display: 'block' }}>
                      {product.name}
                    </strong>
                  </Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--navy)' }}>{product.rating || 4.9}</span>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>({product.reviewsCount || 20}+ reviews)</span>
                </div>

                <span style={{ fontSize: '11px', color: 'var(--slate)', marginBottom: '8px' }}>
                  {product.material} &bull; {product.dimensions}
                </span>

                <p style={{ fontSize: '12px', color: 'var(--slate-dark)', margin: '0 0 14px', lineHeight: 1.45, flex: 1 }}>
                  {product.description}
                </p>

                {/* Color Selector Pills */}
                {product.colors && product.colors.length > 0 && (
                  <div style={{ marginBottom: '14px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      Variant: <strong style={{ color: 'var(--navy)' }}>{activeColor}</strong>
                    </span>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {product.colors.map(col => (
                        <button
                          key={col}
                          type="button"
                          onClick={() => setSelectedColors(prev => ({ ...prev, [product.id]: col }))}
                          style={{
                            fontSize: '11px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            border: activeColor === col ? '1.5px solid var(--green-ink)' : '1px solid var(--line)',
                            background: activeColor === col ? 'var(--green-subtle)' : '#FFFFFF',
                            color: activeColor === col ? 'var(--green-ink)' : 'var(--slate-dark)',
                            fontWeight: activeColor === col ? 700 : 500
                          }}
                        >
                          {col}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing & Actions */}
                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--navy)' }}>₹{product.price}</span>
                      {product.originalPrice && (
                        <span style={{ fontSize: '13px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--green-ink)', background: 'var(--green-subtle)', padding: '2px 8px', borderRadius: '4px' }}>
                      {product.leadTime}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <button
                      type="button"
                      onClick={() => handleProductAdd(product)}
                      className="btn btn-light"
                      style={{ flex: 1, padding: '9px 12px', fontSize: '12px' }}
                    >
                      <Plus size={14} /> Add to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => handleProductBuyNow(product)}
                      className="btn btn-lime"
                      style={{ flex: 1, padding: '9px 12px', fontSize: '12px' }}
                    >
                      Buy Now &rarr;
                    </button>
                  </div>

                  {/* Clearly visible Customize button */}
                  <Link
                    href={`/custom?product=${product.slug}&name=${encodeURIComponent(product.name)}&variant=${encodeURIComponent(activeColor)}&qty=1`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      fontSize: '11px',
                      color: 'var(--slate)',
                      fontWeight: 700,
                      padding: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    Custom finish or dimensions? <span style={{ color: 'var(--green-ink)', textDecoration: 'underline' }}>Customize This Product</span>
                  </Link>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
