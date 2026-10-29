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
  Wrench,
  HelpCircle
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
    setTimeout(() => setShowAddedToast(false), 2500);
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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 6vw 70px' }}>
      
      {/* Breadcrumbs */}
      <nav style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'var(--slate)' }}>Home</Link>
        <span>/</span>
        <Link href="/shop" style={{ color: 'var(--slate)' }}>Shop</Link>
        <span>/</span>
        <span style={{ color: 'var(--navy)', fontWeight: 700 }}>{product.name}</span>
      </nav>

      {/* Added to Cart Notification Toast */}
      {showAddedToast && (
        <div style={{ position: 'fixed', bottom: '80px', right: '24px', zIndex: 600, background: '#0A0D14', color: '#FFFFFF', padding: '12px 20px', borderRadius: '10px', boxShadow: '0 12px 35px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid var(--lime)' }}>
          <Check size={16} color="var(--lime)" />
          <span style={{ fontSize: '13px', fontWeight: 700 }}>Added {quantity} &times; "{product.name}" to cart!</span>
        </div>
      )}

      {/* Main Product Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'flex-start', marginBottom: '60px' }}>
        
        {/* Left Column: Product Visual Showcase */}
        <div>
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#F8FAFC',
              boxShadow: '0 24px 60px rgba(10, 13, 20, 0.12)',
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
                <span style={{ marginTop: '16px', fontSize: '14px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.25)', padding: '6px 14px', borderRadius: '20px' }}>
                  {selectedColor}
                </span>
              </div>
            )}

            {product.badge && (
              <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(10, 13, 20, 0.88)', backdropFilter: 'blur(8px)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '5px 12px', borderRadius: '20px', zIndex: 2 }}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Trust Guarantees Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Truck size={18} color="var(--green-ink)" />
              <div>
                <strong style={{ fontSize: '12px', color: 'var(--navy)', display: 'block' }}>24–48h Dispatch</strong>
                <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Express Bangalore courier</span>
              </div>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={18} color="var(--green-ink)" />
              <div>
                <strong style={{ fontSize: '12px', color: 'var(--navy)', display: 'block' }}>Micron Tolerance</strong>
                <span style={{ fontSize: '11px', color: 'var(--slate)' }}>&plusmn;0.10mm inspection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Pricing, Actions & Customize */}
        <div>
          <span className="eyebrow lime" style={{ marginBottom: '6px' }}>
            {product.category.toUpperCase()} &bull; READY TO SHIP
          </span>

          <h1 style={{ fontSize: '32px', margin: '4px 0 12px', color: 'var(--navy)', lineHeight: 1.2 }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{product.rating || 4.9}</strong>
            <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
              ({product.reviewsCount || 28} verified customer reviews)
            </span>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '32px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <>
                <span style={{ fontSize: '18px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#DC2626', background: '#FEE2E2', padding: '2px 8px', borderRadius: '4px' }}>
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p style={{ color: 'var(--slate-dark)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
            {product.description}
          </p>

          {/* Color / Variant Selector */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <label style={{ fontSize: '12px', fontWeight: 800, color: 'var(--navy)', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                Select Color / Finish: <span style={{ color: 'var(--green-ink)' }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.colors.map(col => (
                  <button
                    key={col}
                    type="button"
                    onClick={() => setSelectedColor(col)}
                    style={{
                      padding: '8px 14px',
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

          {/* Quantity Selector & Add to Cart / Buy Now */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '8px', background: '#FFFFFF', padding: '4px' }}>
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800, color: 'var(--slate-dark)' }}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span style={{ width: '40px', textAlign: 'center', fontWeight: 800, fontSize: '14px' }}>
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800, color: 'var(--slate-dark)' }}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="btn btn-dark"
              style={{ flex: 1, padding: '14px 20px', fontSize: '14px' }}
            >
              Add to Cart &bull; ₹{product.price * quantity}
            </button>

            <button
              type="button"
              onClick={handleBuyNow}
              className="btn btn-lime"
              style={{ flex: 1, padding: '14px 20px', fontSize: '14px' }}
            >
              Buy Now &rarr;
            </button>
          </div>

          {/* Delivery Details Card */}
          <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: '10px', padding: '14px 18px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Truck size={15} color="var(--green-ink)" />
              <strong style={{ fontSize: '12px', color: 'var(--navy)' }}>Bangalore Express Shipping</strong>
            </div>
            <p style={{ margin: 0, fontSize: '12px', color: 'var(--slate)' }}>
              Dispatches within <strong>{product.leadTime}</strong>. Free delivery on orders over ₹499 (Flat ₹50 for orders below ₹499).
            </p>
          </div>

          {/* Clearly Visible "Customize This Product" Card */}
          <div
            style={{
              background: '#FFFFFF',
              border: '2px dashed var(--lime)',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 14px rgba(141, 198, 63, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--green-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-ink)', flexShrink: 0 }}>
                <Sparkles size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--navy)' }}>
                  Need this customized or in specific dimensions?
                </h4>
                <p style={{ margin: '0 0 14px', fontSize: '12px', color: 'var(--slate)', lineHeight: 1.45 }}>
                  Want custom dimensions, corporate embossed logos, specific industrial filament, or batch quantities? We prefill this product into our custom enquiry form.
                </p>
                <Link
                  href={customizeUrl}
                  className="btn btn-lime"
                  style={{ fontSize: '12px', padding: '9px 16px', display: 'inline-flex' }}
                >
                  <Sparkles size={14} /> Customize This Product &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Technical Specifications Section */}
      {product.specs && (
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', marginBottom: '48px' }}>
          <h3 style={{ margin: '0 0 18px', fontSize: '18px', color: 'var(--navy)' }}>Technical Specifications</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} style={{ padding: '12px', background: 'var(--surface-alt)', borderRadius: '8px' }}>
                <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>
                  {key}
                </span>
                <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{val}</strong>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--navy)' }}>You May Also Like</h3>
          <Link href="/shop" style={{ fontSize: '12px', color: 'var(--green-ink)', fontWeight: 800 }}>
            View All in Shop &rarr;
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {relatedProducts.map(rel => (
            <Link
              key={rel.id}
              href={`/products/${rel.slug}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '16px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '140px', borderRadius: '8px', overflow: 'hidden', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                {rel.imageUrl ? (
                  <img src={rel.imageUrl} alt={rel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: rel.colorGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                    {getProductIcon(rel.iconName)}
                  </div>
                )}
              </div>
              <strong style={{ fontSize: '14px', color: 'var(--navy)', marginBottom: '4px' }}>{rel.name}</strong>
              <span style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '8px' }}>{rel.material}</span>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 900, color: 'var(--navy)' }}>₹{rel.price}</span>
                <span style={{ fontSize: '11px', color: 'var(--green-ink)', fontWeight: 700 }}>View &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
