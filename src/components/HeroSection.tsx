'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PrintCanvasAnimation } from './PrintCanvasAnimation';

export function HeroSection() {
  return (
    <>
      <section className="hero-section" id="top">
        <div>
          <div className="badge-pill" style={{ marginBottom: '18px' }}>
            <span className="badge-live-dot" />
            <span>Bangalore Rapid Additive Manufacturing Farm</span>
          </div>

          <h1>
            Precision 3D printing <em>made effortless.</em>
          </h1>

          <p style={{ color: 'var(--slate)', fontSize: '16px', margin: '18px 0 28px', maxWidth: '580px', lineHeight: 1.6 }}>
            From high-tolerance engineering prototypes to bespoke personalized gifts. Upload your 3D file for instant volume calculation, explore certified materials, and order directly on WhatsApp.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn btn-lime">
              Shop Pre-Printed Items <ArrowRight size={15} />
            </Link>
            <Link href="/custom" className="btn btn-light">
              Custom Quote &amp; File Upload <ArrowRight size={15} />
            </Link>
          </div>

          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <strong>24-48<span>h</span></strong>
              <span>Bangalore Dispatch</span>
            </div>
            <div className="hero-stat-card">
              <strong>&plusmn;0.10<span>mm</span></strong>
              <span>Tolerance Grade</span>
            </div>
            <div className="hero-stat-card">
              <strong>15<span>+</span></strong>
              <span>Certified Materials</span>
            </div>
            <div className="hero-stat-card">
              <strong>Zero <span>MOQ</span></strong>
              <span>1 to 1,000 Units</span>
            </div>
          </div>
        </div>

        {/* Simple Moving 3D Simulation Canvas */}
        <div className="hero-visual">
          <PrintCanvasAnimation />
        </div>
      </section>

      {/* Equipment and Materials Partner Strip */}
      <div className="equipment-strip">
        <span>INDUSTRIAL PLATFORMS &bull; MATERIALS</span>
        <div className="equipment-brands">
          <span>BAMBU LAB</span>
          <span>CREALITY</span>
          <span>E3D RAPID</span>
          <span>VORON DESIGN</span>
          <span>PRUSA I3</span>
        </div>
      </div>
    </>
  );
}
