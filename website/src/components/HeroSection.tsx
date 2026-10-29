'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Sparkles, Star, Zap, Truck, ShieldCheck } from 'lucide-react';
import { CATALOG_PRODUCTS } from '@/lib/data';

export function HeroSection() {
  const featuredProduct = CATALOG_PRODUCTS[0]; // Geometric Spiral Fluted Vase
  const secondProduct = CATALOG_PRODUCTS[2]; // Voronoi Ambient Lamp

  const categories = [
    { label: 'All Store', href: '/shop', icon: '🛍️' },
    { label: 'Spiral Vases', href: '/shop?category=decor', icon: '🏺' },
    { label: 'Ambient Lamps', href: '/shop?category=lighting', icon: '💡' },
    { label: 'Sacred Idols', href: '/shop?category=sacred', icon: '🕉️' },
    { label: 'Tech & Desk', href: '/shop?category=accessories', icon: '⌨️' },
    { label: 'Custom 3D', href: '/custom', icon: '✨' },
  ];

  return (
    <>
      <section className="hero-section" id="top">
        <div>
          {/* Live Badge */}
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <span className="badge-live-dot" />
            <span style={{ fontSize: '11px' }}>Bangalore Studio &bull; Express 24–48h Dispatch</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.15, margin: 0 }}>
            Precision 3D printed products, <em style={{ color: 'var(--green-ink)' }}>crafted for life.</em>
          </h1>

          {/* Desktop Description */}
          <p className="desktop-only" style={{ color: 'var(--slate)', fontSize: '15px', margin: '16px 0 24px', maxWidth: '540px', lineHeight: 1.6 }}>
            Explore artisanal parametric home decor, ambient Voronoi lighting, sacred deity idols, and desk accessories. Hand-finished with micron accuracy in Bangalore, or submit your own custom design enquiry.
          </p>

          {/* Punchy Mobile Description (no wall of text) */}
          <p className="mobile-only" style={{ color: 'var(--slate)', fontSize: '13.5px', margin: '10px 0 16px', lineHeight: 1.45 }}>
            Artisanal parametric vases, ambient lamps &amp; desk gear. Made to order with micron accuracy in Bangalore.
          </p>

          {/* Main Action CTAs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <Link href="/shop" className="btn btn-lime" style={{ padding: '11px 18px', fontSize: '13px' }}>
              <ShoppingBag size={15} /> Shop Products <ArrowRight size={15} />
            </Link>
            <Link href="/custom" className="btn btn-light" style={{ padding: '11px 18px', fontSize: '13px' }}>
              <Sparkles size={15} /> Custom 3D Enquiry
            </Link>
          </div>

          {/* Mobile Category Quick-Rail (1-Thumb Navigation) */}
          <div className="mobile-only" style={{ marginTop: '12px', marginBottom: '6px' }}>
            <div className="mobile-category-rail">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  href={cat.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 12px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    border: '1px solid var(--line)',
                    color: 'var(--navy)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(10, 13, 20, 0.03)'
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Stats Grid */}
          <div className="hero-stats-grid desktop-only">
            <div className="hero-stat-card">
              <strong>24-48<span>h</span></strong>
              <span>Bangalore Dispatch</span>
            </div>
            <div className="hero-stat-card">
              <strong>FREE</strong>
              <span>Orders over ₹499</span>
            </div>
            <div className="hero-stat-card">
              <strong>&plusmn;0.10<span>mm</span></strong>
              <span>Calibrated Tolerance</span>
            </div>
            <div className="hero-stat-card">
              <strong>100%</strong>
              <span>Quality Inspected</span>
            </div>
          </div>

          {/* Mobile Sleek Value Strip (No Clutter) */}
          <div className="mobile-flex-only" style={{ gap: '8px', overflowX: 'auto', padding: '10px 0 4px', whiteSpace: 'nowrap', borderTop: '1px solid var(--line)', marginTop: '14px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--green-ink)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Zap size={12} /> 24–48h Dispatch
            </span>
            <span style={{ color: 'var(--line)' }}>&bull;</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--navy)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Truck size={12} /> Free over ₹499
            </span>
            <span style={{ color: 'var(--line)' }}>&bull;</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={12} /> Micron Tested
            </span>
          </div>
        </div>

        {/* E-Commerce Product Spotlight Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Main Hero Card */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 12px 35px rgba(10, 13, 20, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Link
              href={`/products/${featuredProduct.slug}`}
              style={{
                height: '190px',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '12px',
                background: '#F1F5F9',
                display: 'block'
              }}
            >
              {featuredProduct.imageUrl ? (
                <img
                  src={featuredProduct.imageUrl}
                  alt={featuredProduct.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: featuredProduct.colorGradient }} />
              )}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 13, 20, 0.75) 0%, rgba(10, 13, 20, 0.1) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '14px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <span style={{ fontSize: '9.5px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800, background: 'var(--lime)', color: 'var(--navy)', padding: '2px 7px', borderRadius: '4px', display: 'inline-block', marginBottom: '4px' }}>
                      FEATURED SPOTLIGHT
                    </span>
                    <h3 style={{ color: '#FFFFFF', fontSize: '16px', margin: 0 }}>{featuredProduct.name}</h3>
                  </div>
                  <span style={{ background: '#FFFFFF', color: 'var(--navy)', fontSize: '13px', fontWeight: 900, padding: '3px 8px', borderRadius: '16px' }}>
                    ₹{featuredProduct.price}
                  </span>
                </div>
              </div>
            </Link>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={12} fill="#F59E0B" color="#F59E0B" />
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--navy)' }}>4.9</span>
                <span style={{ fontSize: '11px', color: 'var(--slate)' }}>(38 reviews)</span>
              </div>
              <Link
                href={`/products/${featuredProduct.slug}`}
                className="btn btn-dark"
                style={{ fontSize: '11.5px', padding: '7px 14px' }}
              >
                View Product &rarr;
              </Link>
            </div>
          </div>

          {/* Secondary Mini Banner (Desktop Only to reduce mobile clutter) */}
          <div
            className="desktop-flex-only"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              padding: '12px 16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 4px 14px rgba(10, 13, 20, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', background: '#F1F5F9', flexShrink: 0 }}>
                {secondProduct.imageUrl ? (
                  <img src={secondProduct.imageUrl} alt={secondProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: secondProduct.colorGradient }} />
                )}
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>{secondProduct.name}</strong>
                <span style={{ fontSize: '11px', color: 'var(--green-ink)', fontWeight: 700 }}>₹{secondProduct.price} &bull; Includes Warm USB LED</span>
              </div>
            </div>
            <Link
              href={`/products/${secondProduct.slug}`}
              className="btn btn-light"
              style={{ fontSize: '11px', padding: '6px 12px' }}
            >
              Shop Item &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Materials and Craft Partner Strip */}
      <div className="equipment-strip">
        <span>BANGALORE RAPID ADDITIVE HUB</span>
        <div className="equipment-brands">
          <span>SILK PLA+</span>
          <span>8K SLA RESIN</span>
          <span>PETG TOUGH</span>
          <span>WOOD COMPOSITE</span>
          <span>PRECISION COREXY</span>
        </div>
      </div>
    </>
  );
}
