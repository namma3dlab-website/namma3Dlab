'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function CartPage() {
  const { cart, updateQty, removeItem, clearCart, totalAmount, totalCartCount } = useCart();

  const subtotal = totalAmount;
  const freeShippingThreshold = 499;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const deliveryCharge = isFreeShipping ? 0 : 50;
  const total = subtotal + deliveryCharge;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '40px 6vw 70px', flex: 1 }}>
        
        {/* Breadcrumb & Title */}
        <div style={{ marginBottom: '32px' }}>
          <nav style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '12px', display: 'flex', gap: '8px' }}>
            <Link href="/" style={{ color: 'var(--slate)' }}>Home</Link>
            <span>/</span>
            <Link href="/shop" style={{ color: 'var(--slate)' }}>Shop</Link>
            <span>/</span>
            <span style={{ color: 'var(--navy)', fontWeight: 700 }}>Shopping Cart</span>
          </nav>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h1 style={{ fontSize: '30px', margin: 0, color: 'var(--navy)' }}>Your Shopping Cart</h1>
              <p style={{ margin: '4px 0 0', color: 'var(--slate)', fontSize: '14px' }}>
                {totalCartCount === 1 ? '1 item in your basket' : `${totalCartCount} items in your basket`}
              </p>
            </div>

            {cart.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#DC2626',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Trash2 size={14} /> Clear Cart
              </button>
            )}
          </div>
        </div>

        {/* Free Shipping Progress Indicator */}
        {cart.length > 0 && (
          <div
            style={{
              background: isFreeShipping ? 'var(--green-subtle)' : '#EFF6FF',
              border: `1px solid ${isFreeShipping ? '#A7F3D0' : '#BFDBFE'}`,
              borderRadius: '12px',
              padding: '14px 20px',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <Truck size={20} color={isFreeShipping ? 'var(--green-ink)' : '#2563EB'} />
            <div style={{ flex: 1, fontSize: '13px' }}>
              {isFreeShipping ? (
                <span style={{ color: 'var(--green-ink)', fontWeight: 700 }}>
                  🎉 Congratulations! Your order qualifies for <strong>FREE Bangalore Express Delivery</strong>.
                </span>
              ) : (
                <span style={{ color: '#1E40AF' }}>
                  Add <strong>₹{amountNeededForFreeShipping}</strong> more to qualify for <strong>FREE Express Delivery</strong> (standard fee ₹50).
                </span>
              )}
            </div>
          </div>
        )}

        {/* Empty State */}
        {cart.length === 0 ? (
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '64px 24px',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(10, 13, 20, 0.04)'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--surface-alt)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--slate-light)',
                marginBottom: '18px'
              }}
            >
              <ShoppingBag size={36} />
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: '20px', color: 'var(--navy)' }}>Your cart is empty</h3>
            <p style={{ margin: '0 0 24px', color: 'var(--slate)', fontSize: '14px', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>
              Looks like you haven't added any pre-printed 3D creations yet. Browse our curated desk accessories, Voronoi lamps, and custom nameplates.
            </p>
            <Link href="/shop" className="btn btn-lime" style={{ padding: '14px 28px', fontSize: '14px', display: 'inline-flex' }}>
              Explore Shop Catalogue &rarr;
            </Link>
          </div>
        ) : (
          /* Main Cart Content: 2-Column Grid */
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '32px', alignItems: 'flex-start' }}>
            
            {/* Left Column: Cart Items List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    padding: '20px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    boxShadow: '0 4px 14px rgba(10, 13, 20, 0.03)'
                  }}
                >
                  {/* Thumbnail / Product Photo */}
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: item.imageGradient || 'var(--navy-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0
                    }}
                  >
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <ShoppingBag size={24} />
                    )}
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      {item.slug ? (
                        <Link
                          href={`/products/${item.slug}`}
                          style={{
                            fontSize: '15px',
                            fontWeight: 700,
                            color: 'var(--navy)',
                            textDecoration: 'none'
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>
                          {item.name}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--slate-light)',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {item.variant && (
                      <span style={{ display: 'inline-block', fontSize: '12px', color: 'var(--green-ink)', fontWeight: 600, background: 'var(--green-subtle)', padding: '2px 8px', borderRadius: '4px', margin: '4px 0' }}>
                        Variant: {item.variant}
                      </span>
                    )}

                    {item.meta && !item.variant && (
                      <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--slate)' }}>
                        {item.meta}
                      </p>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '6px', background: 'var(--surface-alt)', padding: '2px' }}>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-dark)' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ width: '32px', textAlign: 'center', fontWeight: 800, fontSize: '13px' }}>
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-dark)' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block' }}>
                          ₹{item.price} each
                        </span>
                        <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>
                          ₹{item.price * item.qty}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                <Link href="/shop" style={{ fontSize: '13px', color: 'var(--green-ink)', fontWeight: 700, textDecoration: 'none' }}>
                  &larr; Continue Shopping
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary Card */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 10px 30px rgba(10, 13, 20, 0.04)',
                position: 'sticky',
                top: '90px'
              }}
            >
              <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: 'var(--navy)' }}>Order Summary</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--slate)' }}>
                  <span>Items Subtotal</span>
                  <span style={{ color: 'var(--navy)', fontWeight: 600 }}>₹{subtotal}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--slate)' }}>
                  <span>Bangalore Delivery</span>
                  <span style={{ color: isFreeShipping ? 'var(--green-ink)' : 'var(--navy)', fontWeight: 600 }}>
                    {isFreeShipping ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--slate-light)' }}>
                  <span>GST (18% Included)</span>
                  <span>Included</span>
                </div>
              </div>

              {/* Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
                <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>Estimated Total</strong>
                <strong style={{ fontSize: '26px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>₹{total}</strong>
              </div>

              {/* Action */}
              <Link
                href="/checkout"
                className="btn btn-lime"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '15px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                Proceed to Checkout <ArrowRight size={18} />
              </Link>

              {/* Trust Badges */}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--slate)' }}>
                  <ShieldCheck size={16} color="var(--green-ink)" />
                  <span>Quality checked &plusmn;0.10mm tolerance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--slate)' }}>
                  <Truck size={16} color="var(--green-ink)" />
                  <span>24–48h courier dispatch across Bangalore</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
