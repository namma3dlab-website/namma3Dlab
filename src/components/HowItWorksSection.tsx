'use client';

import React from 'react';
import { ShoppingBag, UploadCloud, MessageCircle, Truck, CheckCircle2 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      icon: <ShoppingBag size={24} color="var(--green-ink)" />,
      title: 'Choose or Upload',
      desc: 'Browse our ready-to-ship pre-printed decor and desk gear, or upload your 3D model (.STL, .OBJ) for on-demand manufacturing.'
    },
    {
      num: '02',
      icon: <MessageCircle size={24} color="var(--green-ink)" />,
      title: 'Seamless WhatsApp Quote',
      desc: 'Pick your material, infill, and color. All details are saved to our Google Sheet and pre-filled into WhatsApp so we can chat immediately.'
    },
    {
      num: '03',
      icon: <Truck size={24} color="var(--green-ink)" />,
      title: 'Precision Print & Express Dispatch',
      desc: 'Produced with ±0.10mm micron tolerance on our CoreXY farm, verified with macro photos, and dispatched across Bangalore in 24–48h.'
    }
  ];

  return (
    <section className="section-wrap" id="how-it-works" style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <span className="eyebrow lime">Simple 3-Step Process</span>
        <h2>How ordering works at <em>Namma 3D Lab.</em></h2>
        <p>
          Whether buying ready-made items or manufacturing complex mechanical prototypes, our workflow is built for zero friction.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              padding: '28px',
              position: 'relative',
              boxShadow: '0 4px 16px rgba(10, 13, 20, 0.04)'
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '28px',
                fontWeight: 900,
                color: 'var(--surface-muted)',
                lineHeight: 1
              }}
            >
              {step.num}
            </span>

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'var(--green-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}
            >
              {step.icon}
            </div>

            <h3 style={{ fontSize: '16px', color: 'var(--navy)', margin: '0 0 8px' }}>
              {step.title}
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.6, margin: 0 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
