'use client';

import React from 'react';
import { MATERIALS_MATRIX } from '@/lib/data';
import { ArrowRight, ShieldCheck, Thermometer, Zap, Layers } from 'lucide-react';

export function MaterialsSection() {
  const getBadgeStyle = (type?: string) => {
    switch (type) {
      case 'popular': return { background: '#DCFCE7', color: '#15803D' };
      case 'durable': return { background: '#CFFAFE', color: '#0369A1' };
      case 'hightemp': return { background: '#FFEDD5', color: '#C2410C' };
      case 'flexible': return { background: '#F3E8FF', color: '#7E22CE' };
      case 'resin': return { background: '#E0E7FF', color: '#4338CA' };
      case 'cf': return { background: '#F1F5F9', color: '#0F172A', border: '1px solid #CBD5E1' };
      default: return { background: '#F1F5F9', color: '#334155' };
    }
  };

  return (
    <section className="section-wrap" id="materials" style={{ background: 'var(--paper)' }}>
      <div className="section-head">
        <span className="eyebrow lime">Certified Engineering Library</span>
        <h2>15+ Industrial polymers &amp; <em>photopolymer resins.</em></h2>
        <p>
          Compare mechanical tensile load ratings, thermal glass transitions, and surface finishes to select the optimal filament or resin for your product lifecycle.
        </p>
      </div>

      <div className="materials-table-wrap">
        <table className="materials-table">
          <thead>
            <tr>
              <th>Material</th>
              <th>Polymer Type</th>
              <th>Max Temp</th>
              <th>Tensile Strength</th>
              <th>Surface Finish</th>
              <th>Rate / Gram</th>
              <th>Recommended Applications</th>
            </tr>
          </thead>
          <tbody>
            {MATERIALS_MATRIX.map(mat => (
              <tr key={mat.code}>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <strong style={{ color: 'var(--navy)', fontSize: '14px' }}>{mat.name}</strong>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '10px',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '12px',
                        width: 'fit-content',
                        ...getBadgeStyle(mat.badgeType)
                      }}
                    >
                      {mat.badge}
                    </span>
                  </div>
                </td>
                <td style={{ color: 'var(--slate-dark)' }}>{mat.type}</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: 'var(--navy)' }}>
                    <Thermometer size={13} color="#C2410C" /> {mat.tempResistance}
                  </span>
                </td>
                <td style={{ fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>{mat.tensileStrength}</td>
                <td style={{ color: 'var(--slate-dark)' }}>{mat.finish}</td>
                <td>
                  <strong style={{ color: 'var(--green-ink)', fontSize: '15px', fontFamily: 'var(--font-mono)' }}>
                    ₹{mat.pricePerGram.toFixed(2)}
                  </strong>
                  <span style={{ fontSize: '10px', color: 'var(--slate)', display: 'block' }}>per gram raw</span>
                </td>
                <td style={{ color: 'var(--slate-dark)', fontSize: '12px', lineHeight: 1.5, maxWidth: '280px' }}>
                  {mat.recommendedFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* College & Startup Discount Note */}
      <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '20px 24px', borderRadius: '8px', border: '1px solid var(--line)', flexWrap: 'wrap', gap: '14px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--green-subtle)', color: 'var(--green-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={18} />
          </div>
          <div>
            <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>Makers &amp; Student Engineering Discount</strong>
            <span style={{ fontSize: '12px', color: 'var(--slate)' }}>Present your university or startup incubator ID for a flat 15% discount on custom R&amp;D batches.</span>
          </div>
        </div>
        <a href="#estimator" className="btn btn-lime" style={{ fontSize: '12px', padding: '9px 16px' }}>
          Tune Material in Estimator <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
