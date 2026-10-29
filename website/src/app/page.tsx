import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';
import { ShoppingBag, Sparkles, ArrowRight, Truck, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero with e-commerce spotlight cards */}
      <HeroSection />

      {/* Featured Products E-Commerce Showcase */}
      <FeaturedProducts />

      {/* Two Clear Portals Showcase */}
      <section className="section-wrap" style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}>
        <div className="section-head" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <span className="eyebrow lime">Explore Namma 3D Lab</span>
          <h2>Two Simple Ways to <em>Work With Us</em></h2>
          <p>
            Choose between ready-to-dispatch 3D decor from our catalogue or submit a custom additive manufacturing enquiry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Portal 1: Pre-Printed Store */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(10, 13, 20, 0.04)'
            }}
          >
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--green-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-ink)', marginBottom: '20px' }}>
                <ShoppingBag size={26} />
              </div>
              <span className="eyebrow lime" style={{ margin: 0 }}>Direct E-Commerce Store</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '24px', color: 'var(--navy)' }}>
                Pre-Printed 3D Items
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px' }}>
                Explore parametric spiral vases, intricate deity idols, ambient Voronoi desk lamps, and personalized executive nameplates. Carefully inspected and packaged.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <span className="badge-pill" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', fontSize: '11px' }}>
                  24–48h Dispatch
                </span>
                <span className="badge-pill" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', fontSize: '11px' }}>
                  From ₹199
                </span>
                <span className="badge-pill" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', fontSize: '11px' }}>
                  Free shipping over ₹499
                </span>
              </div>
            </div>

            <Link href="/shop" className="btn btn-lime" style={{ width: '100%', padding: '14px', fontSize: '14px' }}>
              Shop Full Catalogue <ArrowRight size={16} />
            </Link>
          </div>

          {/* Portal 2: Custom 3D Printing & CAD Quote */}
          <div
            style={{
              background: 'var(--navy-surface)',
              color: '#FFFFFF',
              border: '1px solid var(--navy-border)',
              borderRadius: '16px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 50px rgba(10, 13, 20, 0.15)'
            }}
          >
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(141, 198, 63, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lime)', marginBottom: '20px' }}>
                <Sparkles size={26} />
              </div>
              <span className="eyebrow lime" style={{ margin: 0 }}>Custom Solutions</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '24px', color: '#FFFFFF' }}>
                Bespoke Custom Enquiries
              </h3>
              <p style={{ color: 'var(--slate-light)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px' }}>
                Need a product in custom dimensions, corporate branding, or a custom 3D model printed? Submit your requirements; our team logs it to Google Sheets and connects with you on WhatsApp.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '11px' }}>
                  &plusmn;0.10mm Precision
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '11px' }}>
                  Google Sheets Logged
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: 'var(--lime)', fontSize: '11px' }}>
                  Instant WhatsApp Connect
                </span>
              </div>
            </div>

            <Link href="/custom" className="btn btn-lime" style={{ width: '100%', padding: '14px', fontSize: '14px' }}>
              Start Custom Enquiry <ArrowRight size={16} />
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

