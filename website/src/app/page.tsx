import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';
import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero with e-commerce spotlight cards */}
      <HeroSection />

      {/* Featured Products E-Commerce Showcase (2-column on mobile) */}
      <FeaturedProducts />

      {/* Two Clear Portals Showcase */}
      <section className="section-wrap" style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}>
        <div className="section-head" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 32px' }}>
          <span className="eyebrow lime" style={{ fontSize: '10px' }}>Explore Namma 3D Lab</span>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', margin: '4px 0 8px' }}>Two Ways to <em>Work With Us</em></h2>
          <p className="desktop-only" style={{ margin: 0, fontSize: '14px' }}>
            Choose between ready-to-dispatch 3D decor from our catalogue or submit a custom additive manufacturing enquiry.
          </p>
        </div>

        <div className="portals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          
          {/* Portal 1: Pre-Printed Store */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 18px rgba(10, 13, 20, 0.03)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--green-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-ink)', flexShrink: 0 }}>
                  <ShoppingBag size={22} />
                </div>
                <div>
                  <span className="eyebrow lime" style={{ margin: 0, fontSize: '9.5px' }}>Direct Store</span>
                  <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>
                    Pre-Printed Items
                  </h3>
                </div>
              </div>

              {/* Desktop Long Description */}
              <p className="desktop-only" style={{ color: 'var(--slate)', fontSize: '13.5px', lineHeight: 1.55, margin: '0 0 16px' }}>
                Explore parametric spiral vases, intricate deity idols, ambient Voronoi desk lamps, and personalized executive nameplates. Carefully inspected and packaged.
              </p>

              {/* Mobile Short Value Chips */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span className="badge-pill" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', fontSize: '10.5px' }}>
                  ⚡ 24–48h Dispatch
                </span>
                <span className="badge-pill" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', fontSize: '10.5px' }}>
                  🏷️ From ₹199
                </span>
                <span className="badge-pill" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', fontSize: '10.5px' }}>
                  📦 Free over ₹499
                </span>
              </div>
            </div>

            <Link href="/shop" className="btn btn-lime" style={{ width: '100%', padding: '12px', fontSize: '13px' }}>
              Shop Full Catalogue <ArrowRight size={15} />
            </Link>
          </div>

          {/* Portal 2: Custom 3D Printing & CAD Quote */}
          <div
            style={{
              background: 'var(--navy-surface)',
              color: '#FFFFFF',
              border: '1px solid var(--navy-border)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 35px rgba(10, 13, 20, 0.12)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(141, 198, 63, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lime)', flexShrink: 0 }}>
                  <Sparkles size={22} />
                </div>
                <div>
                  <span className="eyebrow lime" style={{ margin: 0, fontSize: '9.5px' }}>Bespoke Additive</span>
                  <h3 style={{ margin: 0, fontSize: '18px', color: '#FFFFFF' }}>
                    Custom Enquiries
                  </h3>
                </div>
              </div>

              {/* Desktop Long Description */}
              <p className="desktop-only" style={{ color: 'var(--slate-light)', fontSize: '13.5px', lineHeight: 1.55, margin: '0 0 16px' }}>
                Need a product in custom dimensions, corporate branding, or a custom 3D model printed? Submit your requirements; our team logs it to Google Sheets and connects with you on WhatsApp.
              </p>

              {/* Mobile Short Value Chips */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '10.5px' }}>
                  🎯 &plusmn;0.10mm Micron
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '10.5px' }}>
                  📊 Sheets Synced
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: 'var(--lime)', fontSize: '10.5px' }}>
                  💬 WhatsApp Handshake
                </span>
              </div>
            </div>

            <Link href="/custom" className="btn btn-lime" style={{ width: '100%', padding: '12px', fontSize: '13px' }}>
              Start Custom Enquiry <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* Simple 3-step explanation */}
      <HowItWorksSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
