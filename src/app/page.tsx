import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';
import { ShoppingBag, UploadCloud, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero with seamless 3D print simulation */}
      <HeroSection />

      {/* Two Clear Portals Showcase */}
      <section className="section-wrap" style={{ background: '#FFFFFF', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="section-head" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <span className="eyebrow lime">Choose Your Path</span>
          <h2>How would you like to <em>work with us?</em></h2>
          <p>
            Whether buying curated ready-made products or manufacturing bespoke engineering prototypes, select your destination below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          
          {/* Portal 1: Pre-Printed Store */}
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(10, 13, 20, 0.04)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
          >
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--green-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-ink)', marginBottom: '20px' }}>
                <ShoppingBag size={26} />
              </div>
              <span className="eyebrow lime" style={{ margin: 0 }}>Pillar 1 &bull; Direct E-Commerce</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '24px', color: 'var(--navy)' }}>
                Shop Pre-Printed Creations
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px' }}>
                Explore ready-to-ship Voronoi desk lamps, cultural deity idols, modular headphone stands, and custom embossed executive nameplates. Hand-finished and quality inspected.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <span className="badge-pill" style={{ background: '#FFFFFF', border: '1px solid var(--line)', fontSize: '11px' }}>
                  24–48h Dispatch
                </span>
                <span className="badge-pill" style={{ background: '#FFFFFF', border: '1px solid var(--line)', fontSize: '11px' }}>
                  Starts at ₹199
                </span>
                <span className="badge-pill" style={{ background: '#FFFFFF', border: '1px solid var(--line)', fontSize: '11px' }}>
                  Live Nameplate Studio
                </span>
              </div>
            </div>

            <Link href="/shop" className="btn btn-lime" style={{ width: '100%', padding: '14px', fontSize: '14px' }}>
              Enter Pre-Printed Store <ArrowRight size={16} />
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
              boxShadow: '0 20px 50px rgba(10, 13, 20, 0.15)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
          >
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(141, 198, 63, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lime)', marginBottom: '20px' }}>
                <UploadCloud size={26} />
              </div>
              <span className="eyebrow lime" style={{ margin: 0 }}>Pillar 2 &bull; On-Demand Manufacturing</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '24px', color: '#FFFFFF' }}>
                Custom 3D Quote &amp; CAD
              </h3>
              <p style={{ color: 'var(--slate-light)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px' }}>
                Upload your 3D model (.STL, .OBJ) for instant mesh volume calculation, or request CAD modeling for a broken part or sketch. Leads auto-sync to Google Sheets and prefill in WhatsApp.
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '11px' }}>
                  &plusmn;0.10mm Micron Grade
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', fontSize: '11px' }}>
                  Instant Volume Slicing
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: 'var(--lime)', fontSize: '11px' }}>
                  Google Sheets &amp; WhatsApp Sync
                </span>
              </div>
            </div>

            <Link href="/custom" className="btn btn-lime" style={{ width: '100%', padding: '14px', fontSize: '14px' }}>
              Upload File &amp; Get Quote <ArrowRight size={16} />
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
