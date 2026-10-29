'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { usePOS } from '@/context/POSContext';
import { POSTransaction } from '@/lib/posData';

interface UPIPaymentModalProps {
  amount: number;
  onSuccess: (tx: POSTransaction) => void;
  onClose: () => void;
}

export function UPIPaymentModal({ amount, onSuccess, onClose }: UPIPaymentModalProps) {
  const { completeTransaction } = usePOS();
  const [customerPhone, setCustomerPhone] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const upiId = 'namma3dlab@icici';
  const payeeName = 'Namma 3D Lab';
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=Stall-Order`;
  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiUrl)}&margin=10`;

  const handleConfirmPaid = () => {
    setIsVerifying(true);
    setTimeout(() => {
      const tx = completeTransaction('UPI', undefined, customerPhone || undefined);
      setIsVerifying(false);
      onSuccess(tx);
    }, 400);
  };

  return (
    <div className="pos-modal-overlay" onClick={onClose}>
      <div className="pos-modal-window" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>Scan to Pay via UPI</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface-alt)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} color="var(--slate-dark)" />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Amount Callout */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Exact Payable Total
            </span>
            <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              ₹{amount}
            </div>
          </div>

          {/* Dynamic Scannable QR Code */}
          <div
            style={{
              padding: '12px',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '2px solid var(--line)',
              boxShadow: '0 8px 30px rgba(10, 13, 20, 0.08)',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={qrImgUrl}
              alt="UPI QR Code"
              style={{ width: '220px', height: '220px', borderRadius: '8px' }}
            />
          </div>

          <div style={{ fontSize: '12px', color: 'var(--slate-dark)', marginBottom: '18px', lineHeight: 1.4 }}>
            Scan with <strong>Google Pay, PhonePe, Paytm, BHIM</strong>.<br />
            Amount is pre-locked to <strong>₹{amount}</strong>.
          </div>

          {/* Optional Phone Input for Bill */}
          <div style={{ width: '100%', marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Customer Mobile Number (Optional for WhatsApp Bill)
            </label>
            <input
              type="tel"
              placeholder="e.g. 9845012345"
              value={customerPhone}
              onChange={e => setCustomerPhone(e.target.value)}
              className="pos-input"
              style={{ width: '100%' }}
            />
          </div>

          {/* Action Confirm Button */}
          <button
            type="button"
            onClick={handleConfirmPaid}
            disabled={isVerifying}
            className="btn btn-lime"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              borderRadius: '12px'
            }}
          >
            <CheckCircle2 size={20} />
            {isVerifying ? 'Confirming...' : `Confirm Payment Received (₹${amount})`}
          </button>

        </div>

      </div>
    </div>
  );
}
