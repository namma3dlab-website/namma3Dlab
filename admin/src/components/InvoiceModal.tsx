'use client';

import React from 'react';
import { X, Printer, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AdminOrder } from '@/lib/adminData';

interface InvoiceModalProps {
  order: AdminOrder;
  onClose: () => void;
}

export function InvoiceModal({ order, onClose }: InvoiceModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--line)', background: '#F8FAFC' }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy)' }}>
            Official GST Tax Invoice &bull; {order.id}
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="button" onClick={handlePrint} className="btn btn-lime btn-sm">
              <Printer size={14} /> Print Invoice
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FFFFFF', border: '1px solid var(--line)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Invoice Printable Sheet */}
        <div style={{ padding: '32px 36px' }}>
          
          {/* Company & Invoice Meta */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid var(--navy)', paddingBottom: '20px', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '20px', margin: '0 0 4px', color: 'var(--navy)' }}>Namma 3D Lab</h2>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--slate)', lineHeight: 1.5 }}>
                Rapid Additive Engineering LLP<br />
                100ft Road, Indiranagar, Bangalore 560038<br />
                GSTIN: <strong>29AABCN3381D1ZX</strong><br />
                Email: billing@namma3dlab.in
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '8px' }}>
                {order.paymentStatus}
              </span>
              <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                {order.id}
              </strong>
              <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
                Date: {order.date}
              </span>
            </div>
          </div>

          {/* Bill To */}
          <div style={{ marginBottom: '24px', background: 'var(--surface-alt)', padding: '16px', borderRadius: '10px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Billed &amp; Shipped To:
            </span>
            <strong style={{ fontSize: '14px', color: 'var(--navy)' }}>{order.customerName}</strong>
            <div style={{ fontSize: '12px', color: 'var(--slate-dark)', marginTop: '2px' }}>
              Phone: {order.customerPhone} {order.customerEmail ? `| Email: ${order.customerEmail}` : ''}<br />
              {order.shippingAddress}, {order.city} - {order.pincode}
            </div>
          </div>

          {/* Line Items Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)', textAlign: 'left', color: 'var(--slate)', fontSize: '11px', textTransform: 'uppercase' }}>
                <th style={{ padding: '8px 0' }}>Item Description</th>
                <th style={{ padding: '8px 10px', textAlign: 'center' }}>Qty</th>
                <th style={{ padding: '8px 10px', textAlign: 'right' }}>Rate</th>
                <th style={{ padding: '8px 0', textAlign: 'right' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 0' }}>
                    <strong style={{ color: 'var(--navy)', display: 'block' }}>{item.name}</strong>
                    {item.variant && <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Variant: {item.variant}</span>}
                  </td>
                  <td style={{ padding: '12px 10px', textAlign: 'center' }}>{item.qty}</td>
                  <td style={{ padding: '12px 10px', textAlign: 'right' }}>₹{item.price}</td>
                  <td style={{ padding: '12px 0', textAlign: 'right', fontWeight: 700 }}>₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Financial Breakdown */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
            <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--slate)' }}>
                <span>Subtotal:</span>
                <span style={{ fontWeight: 600, color: 'var(--navy)' }}>₹{order.subtotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--slate)' }}>
                <span>Bangalore Courier:</span>
                <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{order.deliveryFee === 0 ? 'FREE' : `₹${order.deliveryFee}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--slate)' }}>
                <span>CGST (9%) + SGST (9%):</span>
                <span>Included</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 900, color: 'var(--navy)', borderTop: '2px solid var(--navy)', paddingTop: '8px' }}>
                <span>Grand Total:</span>
                <span>₹{order.grandTotal}</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '11px', color: 'var(--slate)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Computer generated tax invoice. No signature required.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--green-ink)', fontWeight: 700 }}>
              <ShieldCheck size={14} /> Verified 3D Lab Dispatch
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
