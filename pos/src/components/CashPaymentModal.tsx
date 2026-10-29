'use client';

import React, { useState } from 'react';
import { X, Banknote, CheckCircle2, AlertCircle } from 'lucide-react';
import { usePOS } from '@/context/POSContext';
import { POSTransaction } from '@/lib/posData';

interface CashPaymentModalProps {
  amount: number;
  onSuccess: (tx: POSTransaction) => void;
  onClose: () => void;
}

export function CashPaymentModal({ amount, onSuccess, onClose }: CashPaymentModalProps) {
  const { completeTransaction } = usePOS();
  const [cashTendered, setCashTendered] = useState<number>(amount);
  const [customerPhone, setCustomerPhone] = useState('');

  const changeDue = cashTendered >= amount ? cashTendered - amount : 0;
  const isShort = cashTendered < amount;

  const quickPresets = [
    { label: 'Exact', value: amount },
    { label: '₹100', value: 100 },
    { label: '₹200', value: 200 },
    { label: '₹500', value: 500 },
    { label: '₹1000', value: 1000 },
    { label: '₹2000', value: 2000 }
  ].filter(p => p.value >= amount || p.label === 'Exact');

  const handleConfirmCash = (e: React.FormEvent) => {
    e.preventDefault();
    if (isShort) return;

    const tx = completeTransaction('CASH', cashTendered, customerPhone || undefined);
    onSuccess(tx);
  };

  return (
    <div className="pos-modal-overlay" onClick={onClose}>
      <div className="pos-modal-window" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Banknote size={20} color="var(--green-ink)" />
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>Cash Payment &amp; Change Calculator</h3>
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
        <form onSubmit={handleConfirmCash} style={{ padding: '24px' }}>
          
          {/* Bill Summary */}
          <div style={{ background: 'var(--surface-alt)', borderRadius: '12px', padding: '16px', textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
              Total Bill Amount
            </span>
            <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              ₹{amount}
            </div>
          </div>

          {/* Quick Cash Chips */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Customer Handed Cash Note:
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {quickPresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCashTendered(preset.value)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: cashTendered === preset.value ? '2px solid var(--green-ink)' : '1px solid var(--line)',
                    background: cashTendered === preset.value ? 'var(--green-subtle)' : '#FFFFFF',
                    color: cashTendered === preset.value ? 'var(--green-ink)' : 'var(--navy)'
                  }}
                >
                  {preset.label === 'Exact' ? `Exact (₹${amount})` : `₹${preset.value}`}
                </button>
              ))}
            </div>
          </div>

          {/* Cash Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Cash Received Amount (₹)
            </label>
            <input
              type="number"
              min={amount}
              required
              value={cashTendered || ''}
              onChange={e => setCashTendered(Number(e.target.value))}
              className="pos-input"
              style={{ width: '100%', fontSize: '18px', fontWeight: 800 }}
            />
          </div>

          {/* Live Change Calculation Box */}
          <div
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: isShort ? '1px solid #FCA5A5' : '1px solid #86EFAC',
              background: isShort ? '#FEF2F2' : '#F0FDF4',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          >
            {isShort ? (
              <div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#DC2626' }}>
                  Insufficient Cash Amount!
                </span>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#DC2626' }}>
                  Short by ₹{amount - cashTendered}
                </div>
              </div>
            ) : (
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Return Change to Customer
                </span>
                <div style={{ fontSize: '32px', fontWeight: 900, color: '#166534' }}>
                  ₹{changeDue}
                </div>
              </div>
            )}
          </div>

          {/* Optional Phone */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Customer WhatsApp (Optional for digital bill)
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

          {/* Confirm Button */}
          <button
            type="submit"
            disabled={isShort}
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
              borderRadius: '12px',
              opacity: isShort ? 0.5 : 1,
              cursor: isShort ? 'not-allowed' : 'pointer'
            }}
          >
            <CheckCircle2 size={20} />
            Enter &bull; Record Cash Received
          </button>

        </form>

      </div>
    </div>
  );
}
