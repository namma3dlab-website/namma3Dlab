'use client';

import React from 'react';
import { Box, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid var(--line)', padding: '60px 6vw 30px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '48px', marginBottom: '40px' }}>
        <div>
          <a href="#" className="brand-wrap" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <div className="brand-icon-box">
              <Box size={18} strokeWidth={2.5} />
            </div>
            <span>Namma 3D Lab</span>
          </a>
          <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.6, maxWidth: '360px' }}>
            Precision additive manufacturing, rapid prototyping, and bespoke gifts in Bangalore. Calibrated ±0.1mm tolerance with fast local dispatch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', fontSize: '13px' }}>
          <div>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '12px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Platform
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--slate)' }}>
              <a href="#estimator">Instant Cost Engine</a>
              <a href="/shop">Shop Catalog &amp; Decor</a>
              <a href="/custom">Custom 3D Printing</a>
              <a href="#materials">Materials Matrix</a>
            </div>
          </div>

          <div>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '12px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Capabilities
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--slate)' }}>
              <a href="#capabilities">High-Speed FDM CoreXY</a>
              <a href="#capabilities">SLA High-Detail Resin</a>
              <a href="#capabilities">Parametric CAD Modeling</a>
              <a href="#capabilities">Low-Volume Batch Runs</a>
            </div>
          </div>

          <div>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '12px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Direct Lab
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--slate)' }}>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">+91 98765 43210</a>
              <a href="mailto:hello@namma3dlab.in">hello@namma3dlab.in</a>
              <span>Indiranagar, Bangalore</span>
              <span>GSTIN: 29AABCN3381D1ZX</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--slate)' }}>
        <span>&copy; 2026 Namma 3D Lab. All rights reserved.</span>
        <span>Precision Additive Engineering &bull; Bangalore</span>
      </div>
    </footer>
  );
}
