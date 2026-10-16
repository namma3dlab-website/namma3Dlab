'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Cpu, CheckCircle2 } from 'lucide-react';

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
            <a href="#estimator" className="btn btn-lime">
              Instant Quote Engine <ArrowRight size={15} />
            </a>
            <a href="#catalog" className="btn btn-light">
              Explore Catalog &amp; Gifts <ArrowRight size={15} />
            </a>
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

        {/* Precision Lab Monitor Widget (Clean, modern alternative to heavy 3D video) */}
        <div>
          <div className="lab-showcase-widget">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span className="eyebrow lime" style={{ margin: 0 }}>Active Fleet Status</span>
                <h3 style={{ color: '#FFFFFF', fontSize: '18px', margin: '4px 0 0' }}>Namma 3D Lab Farm &bull; Indiranagar</h3>
              </div>
              <span className="badge-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34D399' }}>
                <span className="badge-live-dot" /> 8 Printers Active
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '16px 0' }}>
              <div className="widget-stat-row">
                <span>Motion System Architecture</span>
                <strong>CoreXY High-Speed (500mm/s)</strong>
              </div>
              <div className="widget-stat-row">
                <span>Calibrated Dimensional Tolerance</span>
                <strong style={{ color: 'var(--lime)' }}>&plusmn;0.10 mm Micron-grade</strong>
              </div>
              <div className="widget-stat-row">
                <span>Slicing &amp; Density Resolution</span>
                <strong>0.08mm – 0.28mm Adaptive</strong>
              </div>
              <div className="widget-stat-row">
                <span>QA Verification Protocol</span>
                <strong>WhatsApp Macro Photo Inspection</strong>
              </div>
              <div className="widget-stat-row" style={{ borderBottom: 'none' }}>
                <span>Custom Engineering Payment</span>
                <strong style={{ color: '#38BDF8' }}>50% Advance &bull; Balance on QA</strong>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--slate-light)' }}>
                <span>Live Sample Analysis</span>
                <span style={{ color: 'var(--lime)', fontWeight: 800 }}>Instant Calculation</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '8px 0 4px' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>Drone Arm Bracket (PETG)</span>
                <strong style={{ color: 'var(--lime)', fontSize: '20px' }}>₹240 – ₹310</strong>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--slate-light)', margin: 0 }}>
                Volume: 21.5 cm³ &bull; Infill: 25% Gyroid &bull; 1.8h Machine Time
              </p>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '8px' }}>
              <a href="#estimator" className="btn btn-lime" style={{ flex: 1, fontSize: '12px', padding: '10px 14px' }}>
                Calculate Your Model Cost <ArrowRight size={13} />
              </a>
            </div>
          </div>
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
