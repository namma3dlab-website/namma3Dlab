'use client';

import React, { useState } from 'react';
import { CATALOG_PRODUCTS, Product } from '@/lib/data';
import { ShoppingBag, Sparkles, Feather, Sun, Lamp, Key, Headphones, Moon, Grid } from 'lucide-react';

interface CatalogSectionProps {
  onAddToCart: (item: { id: string; name: string; price: number; meta?: string }) => void;
}

export function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
    </section>
  );
}
