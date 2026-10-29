'use client';

import React from 'react';
import { ShoppingBag, MessageCircle, Truck } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      icon: <ShoppingBag size={20} color="var(--green-ink)" />,
      title: 'Choose or Upload',
      shortDesc: 'Pick ready-to-ship decor or describe your custom 3D idea.',
      fullDesc: 'Browse our ready-to-ship pre-printed decor and desk gear, or upload your 3D model (.STL, .OBJ) for on-demand manufacturing.'
    },
    {
      num: '02',
      icon: <MessageCircle size={20} color="var(--green-ink)" />,
      title: 'Instant WhatsApp Quote',
      shortDesc: 'Saved to Google Sheets & connected on WhatsApp.',
      fullDesc: 'Pick your material, infill, and color. All details are saved to our Google Sheet and pre-filled into WhatsApp so we can chat immediately.'
    },
    {
      num: '03',
      icon: <Truck size={20} color="var(--green-ink)" />,
      title: 'Print & 24–48h Dispatch',
      shortDesc: 'Micron tolerance inspection & express Bangalore courier.',
      fullDesc: 'Produced with ±0.10mm micron tolerance on our CoreXY farm, verified with macro photos, and dispatched across Bangalore in 24–48h.'
    }
  ];

  return (
    <section className="section-wrap" id="how-it-works" style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)' }}>
      <div className="section-head" style={{ marginBottom: '28px' }}>
        <span className="eyebrow lime" style={{ fontSize: '10px' }}>Simple 3-Step Process</span>
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', margin: '4px 0 8px' }}>How ordering works at <em>Namma 3D Lab.</em></h2>
        <p className="desktop-only" style={{ margin: 0, fontSize: '14px' }}>
          Whether buying ready-made items or manufacturing complex mechanical prototypes, our workflow is built for zero friction.
        </p>
      </div>

      <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '14px',
              padding: '20px',
              position: 'relative',
              boxShadow: '0 2px 10px rgba(10, 13, 20, 0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {step.icon}
              </div>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  color: 'var(--surface-muted)',
                  lineHeight: 1
                }}
              >
                {step.num}
              </span>
            </div>

            <h3 style={{ fontSize: '15px', color: 'var(--navy)', margin: '0 0 6px' }}>
              {step.title}
            </h3>

            {/* Concise Mobile Copy */}
            <p className="mobile-only" style={{ fontSize: '12.5px', color: 'var(--slate)', lineHeight: 1.45, margin: 0 }}>
              {step.shortDesc}
            </p>

            {/* Detailed Desktop Copy */}
            <p className="desktop-only" style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.55, margin: 0 }}>
              {step.fullDesc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
