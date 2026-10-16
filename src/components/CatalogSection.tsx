'use client';

import React, { useState } from 'react';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { ShoppingBag, Sparkles, Feather, Sun, Lamp, Key, Headphones, Moon, Grid } from 'lucide-react';

interface CatalogSectionProps {
  onAddToCart: (item: { id: string; name: string; price: number; meta?: string }) => void;
}

export function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Nameplate Studio State
  const [nameText, setNameText] = useState('AKSHAY KUMAR');
  const [subText, setSubText] = useState('FOUNDER • LEAD ENGINEER');
  const [fontFamily, setFontFamily] = useState<'sans' | 'mono' | 'serif'>('sans');
  const [baseColor, setBaseColor] = useState('#101828');
  const [baseName, setBaseName] = useState('Matte Obsidian');
  const [textColor, setTextColor] = useState('#8DC63F');
  const [textName, setTextName] = useState('Neon Lime');

  const filteredProducts = selectedCategory === 'all'
    ? CATALOG_PRODUCTS
    : CATALOG_PRODUCTS.filter(p => p.category === selectedCategory);

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

  const handleAddNameplateToCart = () => {
    onAddToCart({
      id: `custom-nameplate-${Date.now()}`,
      name: `Custom Nameplate: ${nameText}`,
      price: 599,
      meta: `Base: ${baseName} | Text: ${textName} | Font: ${fontFamily.toUpperCase()}`
    });
  };

  return (
    <section className="section-wrap" id="catalog" style={{ background: 'var(--paper)' }}>
      <div className="section-head">
        <span className="eyebrow lime">Curated Collections &bull; Fast Dispatch</span>
        <h2>Shop ready-to-ship decor &amp; <em>custom personalized gifts.</em></h2>
        <p>
          Fixed-price finished models, desk organizers, lithophanes, and customized executive nameplates crafted with industrial accuracy.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="catalog-filter-bar">
        {[
          { id: 'all', label: 'All Products' },
          { id: 'gifts', label: 'Personalized Gifts' },
          { id: 'decor', label: 'Desk Decor' },
          { id: 'idols', label: 'Idols & Spiritual' },
          { id: 'gadgets', label: 'Functional Gadgets' }
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

      {/* Product Cards Grid */}
      <div className="catalog-grid" style={{ marginBottom: '60px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-thumb" style={{ background: product.colorGradient }}>
              {getProductIcon(product.iconName)}
            </div>
            <div className="product-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--navy)', lineHeight: 1.2 }}>{product.name}</strong>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--slate)', marginBottom: '8px' }}>
                {product.material} &bull; {product.dimensions}
              </span>
              <p style={{ fontSize: '12px', color: 'var(--slate-dark)', margin: '0 0 16px', lineHeight: 1.5, flex: 1 }}>
                {product.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                <div>
                  <small style={{ fontSize: '10px', color: 'var(--slate)', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>Lead Time</small>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-ink)' }}>{product.leadTime}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--navy)', marginBottom: '4px' }}>₹{product.price}</div>
                  <button
                    onClick={() => onAddToCart({ id: product.id, name: product.name, price: product.price })}
                    className="btn btn-dark"
                    style={{ padding: '6px 12px', fontSize: '11px' }}
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live 3D Nameplate & Gifts Customizer Studio */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '12px', padding: '36px', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow lime">Live Interactive Studio</span>
            <h3 style={{ fontSize: '26px', margin: '6px 0 12px' }}>Bespoke <em>Desk Nameplates.</em></h3>
            <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '24px' }}>
              Design executive desk plaques with real-time font and dual-tone filament preview. Built with integrated desk wedges for home office, corporate desks, or memorable gifts.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                Main Name / Title Text
                <input
                  type="text"
                  value={nameText}
                  onChange={(e) => setNameText(e.target.value)}
                  style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '13px', fontWeight: 700 }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                Subtitle / Designation
                <input
                  type="text"
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                  style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '13px' }}
                />
              </label>

              {/* Typography Options */}
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', display: 'block', marginBottom: '6px' }}>Typography Font</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[
                    { id: 'sans', label: 'Modern Sans' },
                    { id: 'mono', label: 'Tech Monospace' },
                    { id: 'serif', label: 'Editorial Serif' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setFontFamily(f.id as 'sans' | 'mono' | 'serif')}
                      className={`btn ${fontFamily === f.id ? 'btn-dark' : 'btn-light'}`}
                      style={{ padding: '6px 12px', fontSize: '11px' }}
                      type="button"
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Baseplate Color Swatches */}
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', display: 'block', marginBottom: '6px' }}>Baseplate Color: {baseName}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { color: '#101828', name: 'Matte Obsidian' },
                    { color: '#8DC63F', name: 'Signature Lime' },
                    { color: '#F8FAFC', name: 'Bone White' },
                    { color: '#0F172A', name: 'Cyber Navy' }
                  ].map(c => (
                    <button
                      key={c.color}
                      onClick={() => { setBaseColor(c.color); setBaseName(c.name); }}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: c.color,
                        border: '2px solid #FFFFFF',
                        boxShadow: baseColor === c.color ? '0 0 0 2px var(--navy)' : '0 1px 3px rgba(0,0,0,0.2)',
                        transform: baseColor === c.color ? 'scale(1.15)' : 'scale(1)',
                        transition: 'all 0.15s'
                      }}
                      title={c.name}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              {/* Text / Emboss Color Swatches */}
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', display: 'block', marginBottom: '6px' }}>Embossed Text Color: {textName}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { color: '#8DC63F', name: 'Neon Lime' },
                    { color: '#FFFFFF', name: 'Crisp White' },
                    { color: '#00E5FF', name: 'Cyber Cyan' },
                    { color: '#F59E0B', name: 'Gold Silk' }
                  ].map(c => (
                    <button
                      key={c.color}
                      onClick={() => { setTextColor(c.color); setTextName(c.name); }}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: c.color,
                        border: '2px solid #FFFFFF',
                        boxShadow: textColor === c.color ? '0 0 0 2px var(--navy)' : '0 1px 3px rgba(0,0,0,0.2)',
                        transform: textColor === c.color ? 'scale(1.15)' : 'scale(1)',
                        transition: 'all 0.15s'
                      }}
                      title={c.name}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleAddNameplateToCart}
                className="btn btn-lime"
                style={{ flex: 1 }}
                type="button"
              >
                <ShoppingBag size={15} /> Add Custom Plaque to Cart (₹599)
              </button>
            </div>
          </div>

          {/* Realistic 3D Simulated Plaque */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-alt)', borderRadius: '10px', padding: '40px 24px', border: '1px solid var(--line)' }}>
            <span className="eyebrow" style={{ marginBottom: '16px' }}>Realtime Plaque Simulation</span>
            <div
              style={{
                width: '100%',
                maxWidth: '360px',
                padding: '36px 24px',
                borderRadius: '8px',
                background: baseColor,
                color: textColor,
                textAlign: 'center',
                boxShadow: '0 24px 50px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.35)',
                border: '2px solid rgba(255,255,255,0.1)',
                transition: 'all 0.25s ease'
              }}
            >
              <small style={{ letterSpacing: '0.22em', fontSize: '8px', textTransform: 'uppercase', opacity: 0.75, display: 'block' }}>
                NAMMA 3D LAB &bull; DUAL EMBOSSED
              </small>
              <h2
                style={{
                  fontSize: '26px',
                  fontWeight: 900,
                  margin: '12px 0 6px',
                  color: 'inherit',
                  fontFamily: fontFamily === 'mono' ? 'var(--font-mono)' : fontFamily === 'serif' ? 'Georgia, serif' : 'inherit',
                  letterSpacing: fontFamily === 'mono' ? '0.04em' : '-0.02em',
                  textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                }}
              >
                {nameText || 'YOUR NAME'}
              </h2>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', opacity: 0.9, letterSpacing: '0.05em', display: 'block' }}>
                {subText}
              </span>
            </div>
            <small style={{ color: 'var(--slate)', fontSize: '11px', marginTop: '16px' }}>
              Dual-extrusion precision print &bull; Integrated desk wedge display included
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
