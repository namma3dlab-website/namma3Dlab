'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Sparkles, ShieldCheck, Truck, Star } from 'lucide-react';
import { CATALOG_PRODUCTS } from '@/lib/data';

export function HeroSection() {
  const featuredProduct = CATALOG_PRODUCTS[0]; // Geometric Spiral Fluted Vase
  const secondProduct = CATALOG_PRODUCTS[2]; // Voronoi Ambient Lamp

  return (
    <>
      <section className="hero-section" id="top">
        <div>
          <div className="badge-pill" style={{ marginBottom: '18px' }}>
            <span className="badge-live-dot" />
            <span>Bangalore Additive Craft &bull; 24–48h Dispatch</span>
          </div>

          <h1>
            Precision 3D printed products, <em>crafted for life.</em>
          </h1>

          <p style={{ color: 'var(--slate)', fontSize: '16px', margin: '18px 0 28px', maxWidth: '560px', lineHeight: 1.6 }}>
            Explore artisanal parametric home decor, ambient Voronoi lighting, sacred deity idols, and desk accessories. Hand-finished with micron accuracy in Bangalore, or submit your own custom design enquiry.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn btn-lime">
              <ShoppingBag size={15} /> Explore All Products <ArrowRight size={15} />
            </Link>
            <Link href="/custom" className="btn btn-light">
              <Sparkles size={15} /> Custom Enquiry <ArrowRight size={15} />
            </Link>
          </div>

          <div className="hero-stats-grid">
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
        </div>

        {/* Conventional E-Commerce Visual: Product Spotlight Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Main Hero Card */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 20px 45px rgba(10, 13, 20, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Link
              href={`/products/${featuredProduct.slug}`}
              style={{
                height: '240px',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '16px',
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
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: featuredProduct.colorGradient }} />
              )}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 13, 20, 0.7) 0%, rgba(10, 13, 20, 0.1) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800, background: 'var(--lime)', color: 'var(--navy)', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '6px' }}>
                      FEATURED BESTSELLER
                    </span>
                    <h3 style={{ color: '#FFFFFF', fontSize: '18px', margin: 0 }}>{featuredProduct.name}</h3>
                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.95)', color: 'var(--navy)', fontSize: '13px', fontWeight: 800, padding: '4px 10px', borderRadius: '20px' }}>
                    ₹{featuredProduct.price}
                  </span>
                </div>
              </div>
            </Link>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                  <Star size={13} fill="#F59E0B" color="#F59E0B" />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--navy)' }}>4.9</span>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>(38 verified reviews)</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
                  {featuredProduct.material} &bull; {featuredProduct.leadTime} Dispatch
                </span>
              </div>
              <Link
                href={`/products/${featuredProduct.slug}`}
                className="btn btn-dark"
                style={{ fontSize: '12px', padding: '8px 16px' }}
              >
                View Details &rarr;
              </Link>
            </div>
          </div>

          {/* Secondary Mini Banner */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
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
