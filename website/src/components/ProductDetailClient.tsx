'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import {
  Star,
  Truck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Feather,
  Sun,
  Lamp,
  Key,
  Headphones,
  Moon,
  Grid,
  Zap,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShoppingBag
} from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { addToCart, buyNow } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : 'Standard'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [showAddedToast, setShowAddedToast] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather': return <Feather size={56} />;
      case 'Sun': return <Sun size={56} />;
      case 'Lamp': return <Lamp size={56} />;
      case 'Key': return <Key size={56} />;
      case 'Headphones': return <Headphones size={56} />;
      case 'Moon': return <Moon size={56} />;
      case 'Grid': return <Grid size={56} />;
      default: return <Sparkles size={56} />;
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedColor.replace(/\s+/g, '-').toLowerCase()}`,
      slug: product.slug,
      name: product.name,
      price: product.price,
      meta: `${product.material} • Color: ${selectedColor}`,
      variant: selectedColor,
      imageGradient: product.colorGradient,
      imageUrl: product.imageUrl,
      iconName: product.iconName,
      qty: quantity
    });

    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 2000);
  };

  const handleBuyNow = () => {
    buyNow({
      id: `${product.id}-${selectedColor.replace(/\s+/g, '-').toLowerCase()}`,
      slug: product.slug,
      name: product.name,
      price: product.price,
      meta: `${product.material} • Color: ${selectedColor}`,
      variant: selectedColor,
      imageGradient: product.colorGradient,
      imageUrl: product.imageUrl,
      iconName: product.iconName,
      qty: quantity
    });
  };

  // Build the URL to pass product data into the shared /custom form
  const customizeUrl = `/custom?product=${encodeURIComponent(product.slug)}&name=${encodeURIComponent(product.name)}&variant=${encodeURIComponent(selectedColor)}&qty=${quantity}`;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4vw 90px' }}>
      
      {/* Breadcrumbs */}
      <nav style={{ fontSize: '12px', color: 'var(--slate)', margin: '14px 0 18px', display: 'flex', gap: '6px', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'var(--slate)' }}>Home</Link>
        <span>/</span>
        <Link href="/shop" style={{ color: 'var(--slate)' }}>Shop</Link>
        <span>/</span>
        <span style={{ color: 'var(--navy)', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</span>
      </nav>

      {/* Added to Cart Notification Toast */}
      {showAddedToast && (
        <div style={{ position: 'fixed', bottom: '80px', right: '16px', left: '16px', maxWidth: '360px', margin: '0 auto', zIndex: 700, background: '#0A0D14', color: '#FFFFFF', padding: '12px 18px', borderRadius: '12px', boxShadow: '0 12px 35px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid var(--lime)' }}>
          <Check size={16} color="var(--lime)" />
          <span style={{ fontSize: '13px', fontWeight: 700 }}>Added {quantity} &times; "{product.name}" to cart!</span>
        </div>
      )}

      {/* Main Product Layout Grid */}
      <div className="pdp-main-grid">
        
        {/* Left Column: Product Visual Showcase */}
        <div>
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#F8FAFC',
              boxShadow: '0 12px 40px rgba(10, 13, 20, 0.08)',
              border: '1px solid var(--line)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', background: product.colorGradient, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                {getProductIcon(product.iconName)}
                <span style={{ marginTop: '12px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.25)', padding: '4px 12px', borderRadius: '16px' }}>
                  {selectedColor}
                </span>
              </div>
            )}

            {product.badge && (
              <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(10, 13, 20, 0.88)', backdropFilter: 'blur(8px)', color: '#FFFFFF', fontSize: '10px', fontWeight: 800, padding: '4px 10px', borderRadius: '16px', zIndex: 2 }}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Trust Guarantees Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '10px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Truck size={16} color="var(--green-ink)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '11.5px', color: 'var(--navy)', display: 'block' }}>24–48h Dispatch</strong>
                <span style={{ fontSize: '10px', color: 'var(--slate)' }}>Bangalore Express</span>
              </div>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '10px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="var(--green-ink)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '11.5px', color: 'var(--navy)', display: 'block' }}>&plusmn;0.10mm Micron</strong>
                <span style={{ fontSize: '10px', color: 'var(--slate)' }}>Laser Calibrated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Pricing, Actions & Customize */}
        <div>
          <span className="eyebrow lime" style={{ marginBottom: '4px', fontSize: '10px' }}>
            {product.category.toUpperCase()} &bull; READY TO SHIP
          </span>

          <h1 style={{ fontSize: 'clamp(22px, 3vw, 32px)', margin: '4px 0 8px', color: 'var(--navy)', lineHeight: 1.2 }}>
            {product.name}
          </h1>

          {/* Rating & Stock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <strong style={{ fontSize: '12px', color: 'var(--navy)' }}>{product.rating || 4.9}</strong>
            <span style={{ fontSize: '11.5px', color: 'var(--slate)' }}>
              ({product.reviewsCount || 28} verified reviews)
            </span>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '18px' }}>
            <span style={{ fontSize: '30px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <>
                <span style={{ fontSize: '16px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice}
                </span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#DC2626', background: '#FEE2E2', padding: '2px 7px', borderRadius: '4px' }}>
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          {/* Scannable Micro-Bullet Highlights (Replaces Verbose Text Wall) */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '12px', padding: '12px 16px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--navy)' }}>
              <Zap size={14} color="var(--green-ink)" style={{ flexShrink: 0 }} />
              <span><strong>0.12mm Ultra-Fine Layers</strong> for flawless surface texture</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--navy)' }}>
              <ShieldCheck size={14} color="var(--green-ink)" style={{ flexShrink: 0 }} />
              <span><strong>{product.material}</strong> &bull; Biodegradable &amp; durable</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--navy)' }}>
              <Truck size={14} color="var(--green-ink)" style={{ flexShrink: 0 }} />
              <span><strong>Bangalore Express Delivery</strong> in 24–48 hours</span>
            </div>
          </div>

          {/* Expandable Product Story / Description (Tuck away text on mobile) */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{
              color: 'var(--slate-dark)',
              fontSize: '13.5px',
              lineHeight: 1.55,
              margin: '0 0 6px',
              ...(!isDescExpanded ? {
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              } : {})
            }}>
              {product.description}
            </p>
            <button
              type="button"
              onClick={() => setIsDescExpanded(!isDescExpanded)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--green-ink)',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px'
              }}
            >
              {isDescExpanded ? <>Show Less <ChevronUp size={13} /></> : <>Read Full Details <ChevronDown size={13} /></>}
            </button>
          </div>

          {/* Color / Variant Selector */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--navy)', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                Color / Finish: <span style={{ color: 'var(--green-ink)' }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {product.colors.map(col => (
                  <button
                    key={col}
                    type="button"
                    onClick={() => setSelectedColor(col)}
                    style={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: selectedColor === col ? '2px solid var(--green-ink)' : '1px solid var(--line)',
                      background: selectedColor === col ? 'var(--green-subtle)' : '#FFFFFF',
                      color: selectedColor === col ? 'var(--green-ink)' : 'var(--navy)'
                    }}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector & Desktop Add to Cart / Buy Now */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '8px', background: '#FFFFFF', padding: '3px' }}>
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, color: 'var(--slate-dark)', border: 'none', background: 'transparent', cursor: 'pointer' }}
                aria-label="Decrease quantity"
              >
                <Minus size={13} />
              </button>
              <span style={{ width: '36px', textAlign: 'center', fontWeight: 800, fontSize: '13.5px' }}>
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, color: 'var(--slate-dark)', border: 'none', background: 'transparent', cursor: 'pointer' }}
                aria-label="Increase quantity"
              >
                <Plus size={13} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="btn btn-dark"
              style={{ flex: 1, padding: '12px 18px', fontSize: '13px' }}
            >
              Add to Cart &bull; ₹{product.price * quantity}
            </button>

            <button
              type="button"
              onClick={handleBuyNow}
              className="btn btn-lime"
              style={{ flex: 1, padding: '12px 18px', fontSize: '13px' }}
            >
              Buy Now &rarr;
            </button>
          </div>

          {/* Streamlined "Customize This Product" Banner (High Conversion, Zero Text Bloat) */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px dashed var(--lime)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="var(--green-ink)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '12.5px', color: 'var(--navy)', fontWeight: 600 }}>
                Want this with custom size, logo, or color?
              </span>
            </div>
            <Link
              href={customizeUrl}
              className="btn btn-lime"
              style={{ fontSize: '11.5px', padding: '6px 12px' }}
            >
              Customize &rarr;
            </Link>
          </div>

        </div>
      </div>

      {/* Technical Specifications Disclosure */}
      {product.specs && (
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '20px', marginBottom: '36px' }}>
          <h3 style={{ margin: '0 0 14px', fontSize: '16px', color: 'var(--navy)' }}>Technical Specifications</h3>
          <div className="pdp-specs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} style={{ padding: '10px 12px', background: 'var(--surface-alt)', borderRadius: '8px' }}>
                <span style={{ fontSize: '10px', color: 'var(--slate)', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>
                  {key}
                </span>
                <strong style={{ fontSize: '12.5px', color: 'var(--navy)' }}>{val}</strong>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products Section (2-column on mobile) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>You May Also Like</h3>
          <Link href="/shop" style={{ fontSize: '12px', color: 'var(--green-ink)', fontWeight: 800 }}>
            View All &rarr;
          </Link>
        </div>

        <div className="pdp-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {relatedProducts.slice(0, 3).map(rel => (
            <Link
              key={rel.id}
              href={`/products/${rel.slug}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '12px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '120px', borderRadius: '8px', overflow: 'hidden', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                {rel.imageUrl ? (
                  <img src={rel.imageUrl} alt={rel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: rel.colorGradient }} />
                )}
              </div>
              <strong style={{ fontSize: '12.5px', color: 'var(--navy)', lineHeight: 1.25, display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {rel.name}
              </strong>
              <span style={{ fontSize: '13px', fontWeight: 900, color: 'var(--navy)', marginTop: '4px' }}>
                ₹{rel.price}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR (Modern E-Commerce Standard) */}
      <div className="mobile-sticky-action-bar">
        <div>
          <span style={{ fontSize: '10px', color: 'var(--slate)', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>Total</span>
          <strong style={{ fontSize: '18px', color: 'var(--navy)' }}>₹{product.price * quantity}</strong>
        </div>

        <div style={{ display: 'flex', gap: '8px', flex: 1, justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn btn-dark"
            style={{ padding: '10px 14px', fontSize: '12px', borderRadius: '10px' }}
          >
            <ShoppingBag size={14} /> + Cart
          </button>
          <button
            type="button"
            onClick={handleBuyNow}
            className="btn btn-lime"
            style={{ padding: '10px 16px', fontSize: '12px', borderRadius: '10px', fontWeight: 800 }}
          >
            Buy Now &rarr;
          </button>
        </div>
      </div>

    </div>
  );
}
