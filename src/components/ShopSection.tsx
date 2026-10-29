'use client';

import React, { useState } from 'react';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { ShoppingBag, Sparkles, Feather, Sun, Lamp, Key, Headphones, Moon, Grid, Plus, Check, Search, ArrowRight } from 'lucide-react';

import { useCart } from '@/context/CartContext';

interface ShopSectionProps {
  onAddToCart?: (item: { id: string; name: string; price: number; meta?: string }) => void;
  onBuyNow?: (item: { id: string; name: string; price: number; meta?: string }) => void;
}

export function ShopSection({ onAddToCart, onBuyNow }: ShopSectionProps) {
  const cartContext = useCart();
  const handleAdd = onAddToCart || cartContext.addToCart;
  const handleBuy = onBuyNow || cartContext.buyNow;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Personalized Nameplate Studio State
  const [nameText, setNameText] = useState('AKSHAY KUMAR');
  const [subText, setSubText] = useState('FOUNDER • LEAD ENGINEER');
  const [fontFamily, setFontFamily] = useState<'sans' | 'mono' | 'serif'>('sans');
  const [baseColor, setBaseColor] = useState('#101828');
  const [baseName, setBaseName] = useState('Matte Obsidian');
  const [textColor, setTextColor] = useState('#8DC63F');
  const [textName, setTextName] = useState('Neon Lime');

  const filteredProducts = CATALOG_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
      name: `${product.name} (${chosenColor})`,
      price: product.price,
      meta: `${product.material} • ${product.dimensions}`
    });

    setAddedNotice(product.name);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  const handleProductBuyNow = (product: Product) => {
    const chosenColor = selectedColors[product.id] || (product.colors && product.colors[0]) || 'Standard';
    handleBuy({
      id: `${product.id}-${chosenColor.replace(/\s+/g, '-').toLowerCase()}`,
      name: `${product.name} (${chosenColor})`,
      price: product.price,
      meta: `${product.material} • ${product.dimensions}`
    });
  };

  const handleAddNameplateToCart = (isBuyNow = false) => {
    const item = {
      id: `custom-nameplate-${Date.now()}`,
      name: `Custom Nameplate: ${nameText}`,
      price: 599,
      meta: `Base: ${baseName} | Text: ${textName} | Font: ${fontFamily.toUpperCase()}`
    };

    if (isBuyNow) {
      handleBuy(item);
    } else {
      handleAdd(item);
      setAddedNotice(`Personalized Nameplate (${nameText})`);
      setTimeout(() => setAddedNotice(null), 2500);
    }
  };

  return (
    <section className="section-wrap" id="shop" style={{ background: 'var(--paper)' }}>
      <div className="section-head">
        <span className="eyebrow lime">E-Commerce Store &bull; Ready to Ship</span>
        <h2>Shop pre-printed items &amp; <em>curated 3D creations.</em></h2>
        <p>
          High-precision 3D printed desk accessories, ambient Voronoi lamps, sacred idols, and customizable executive gifts. Hand-finished, quality inspected, and dispatched locally across Bangalore within 24–48 hours.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
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

        {/* Search Input */}
        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search items, materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', paddingLeft: '36px', height: '38px', borderRadius: '30px', fontSize: '12px' }}
          />
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
          const activeColor = selectedColors[product.id] || (product.colors && product.colors[0]);
          return (
            <div key={product.id} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Product Badge */}
              <div className="product-thumb" style={{ background: product.colorGradient, position: 'relative' }}>
                {getProductIcon(product.iconName)}
                {product.badge && (
                  <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(10, 13, 20, 0.85)', color: '#FFFFFF', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.04em' }}>
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="product-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '15px', color: 'var(--navy)', lineHeight: 1.25 }}>{product.name}</strong>
                </div>

                <span style={{ fontSize: '11px', color: 'var(--slate)', marginBottom: '8px' }}>
                  {product.material} &bull; {product.dimensions}
                </span>

                <p style={{ fontSize: '12px', color: 'var(--slate-dark)', margin: '0 0 14px', lineHeight: 1.45, flex: 1 }}>
                  {product.description}
                </p>

                {/* Color Selector Pills if available */}
                {product.colors && product.colors.length > 0 && (
                  <div style={{ marginBottom: '14px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      Color: <strong style={{ color: 'var(--navy)' }}>{activeColor}</strong>
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

                {/* Pricing & CTA */}
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
                      {product.leadTime} Dispatch
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
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
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Personalized Nameplate Studio */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '36px', boxShadow: '0 12px 40px rgba(10, 13, 20, 0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', alignItems: 'center' }}>
          
          {/* Controls */}
          <div>
            <span className="eyebrow lime">Live Interactive Studio</span>
            <h3 style={{ margin: '6px 0 12px', fontSize: '24px' }}>Customize Your Executive Desk Nameplate</h3>
            <p style={{ color: 'var(--slate)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.5 }}>
              Dual-extrusion fusion with high-contrast embossed lettering. Perfect for corporate desks, home studios, or personalized gifts.
            </p>

            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>Primary Embossed Name</label>
              <input
                type="text"
                className="form-input"
                maxLength={24}
                value={nameText}
                onChange={(e) => setNameText(e.target.value.toUpperCase())}
                style={{ width: '100%', fontWeight: 800 }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '18px' }}>
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>Designation / Subtitle</label>
              <input
                type="text"
                className="form-input"
                maxLength={32}
                value={subText}
                onChange={(e) => setSubText(e.target.value.toUpperCase())}
                style={{ width: '100%' }}
              />
            </div>

            {/* Color Pair Options */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {[
                { base: '#101828', baseN: 'Matte Obsidian', text: '#8DC63F', textN: 'Neon Lime' },
                { base: '#101828', baseN: 'Matte Obsidian', text: '#F59E0B', textN: 'Silk Gold' },
                { base: '#F8FAFC', baseN: 'Arctic White', text: '#0A0D14', textN: 'Midnight Black' },
                { base: '#0F172A', baseN: 'Deep Navy', text: '#38BDF8', textN: 'Cyber Cyan' }
              ].map((scheme, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => {
                    setBaseColor(scheme.base);
                    setBaseName(scheme.baseN);
                    setTextColor(scheme.text);
                    setTextName(scheme.textN);
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: baseName === scheme.baseN && textName === scheme.textN ? '2px solid var(--navy)' : '1px solid var(--line)',
                    background: scheme.base,
                    color: scheme.text
                  }}
                >
                  {scheme.baseN} / {scheme.textN}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => handleAddNameplateToCart(false)}
                className="btn btn-dark"
                style={{ flex: 1 }}
              >
                <Plus size={15} /> Add Custom Nameplate (₹599)
              </button>
              <button
                type="button"
                onClick={() => handleAddNameplateToCart(true)}
                className="btn btn-lime"
                style={{ flex: 1 }}
              >
                Buy Now &rarr;
              </button>
            </div>
          </div>

          {/* Live 3D Embossed Preview Stand */}
          <div style={{ background: 'var(--surface-alt)', borderRadius: '12px', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line)' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                background: baseColor,
                borderRadius: '8px',
                padding: '24px 20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,0.1)',
                textAlign: 'center',
                transform: 'perspective(600px) rotateX(10deg)',
                borderBottom: '6px solid rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  color: textColor,
                  letterSpacing: '0.08em',
                  textShadow: `0 2px 0 rgba(0,0,0,0.4), 0 0 12px ${textColor}40`,
                  fontFamily: 'var(--font-sans)',
                  marginBottom: '6px'
                }}
              >
                {nameText || 'YOUR NAME'}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: textColor,
                  opacity: 0.85,
                  letterSpacing: '0.15em'
                }}
              >
                {subText || 'TITLE / SPECIALIZATION'}
              </div>
            </div>

            <span style={{ marginTop: '20px', fontSize: '11px', color: 'var(--slate)', fontWeight: 600 }}>
              Live 3D-Fused Extrusion Preview &bull; Weighted Antislip Desk Wedge
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
