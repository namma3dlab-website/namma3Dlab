'use client';

import React from 'react';
import { CAPABILITIES } from '@/lib/data';
import { ArrowRight, Layers, Cpu, Compass, Factory, CheckCircle2 } from 'lucide-react';

export function CapabilitiesSection() {
  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'cap-fdm': return <Layers size={22} color="var(--green-ink)" />;
      case 'cap-sla': return <Cpu size={22} color="#0284C7" />;
      case 'cap-cad': return <Compass size={22} color="#D97706" />;
      default: return <Factory size={22} color="#4F46E5" />;
    }
  };

  return (
    <section className="section-wrap" id="capabilities" style={{ background: '#FFFFFF' }}>
      <div className="section-head">
        <span className="eyebrow lime">Additive Manufacturing Infrastructure</span>
        <h2>Industrial capabilities.<br /><em>Guaranteed micrometer tolerances.</em></h2>
        <p>
          Whether prototyping a patent invention, validating form and fit, or manufacturing end-use batches, our calibrated Bangalore print farm delivers repeat precision without compromise.
        </p>
      </div>

      <div className="capabilities-grid">
        {CAPABILITIES.map(cap => (
          <div key={cap.id} className="capability-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getCapabilityIcon(cap.id)}
              </div>
              <span className="cap-badge">{cap.tolerance}</span>
            </div>

            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '4px' }}>{cap.title}</h3>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate)', marginBottom: '12px', display: 'block' }}>
              {cap.subtitle}
            </span>
            <p style={{ fontSize: '12px', color: 'var(--slate-dark)', lineHeight: 1.6, flex: 1 }}>
              {cap.description}
            </p>

            <ul>
              {cap.benefits.map((benefit: string, i: number) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--line)', fontSize: '11px', color: 'var(--slate)' }}>
              <strong>Fleet Hardware:</strong> {cap.equipment}
            </div>
          </div>
        ))}
      </div>

      {/* Capabilities CTA Strip */}
      <div style={{ marginTop: '40px', background: 'var(--surface-alt)', borderRadius: '10px', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>Have custom engineering specifications or require NDA signing?</strong>
          <span style={{ fontSize: '12px', color: 'var(--slate)' }}>Our lab engineers review technical drawings and STEP files directly under strict confidentiality.</span>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20have%20an%20engineering%20project%20requiring%20technical%20review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          Consult Lab Engineer <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
