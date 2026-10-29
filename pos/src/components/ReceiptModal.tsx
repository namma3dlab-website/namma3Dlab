'use client';

import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, Printer, Share2, Sparkles } from 'lucide-react';
import { POSTransaction } from '@/lib/posData';

interface ReceiptModalProps {
  transaction: POSTransaction;
  onNextCustomer: () => void;
}

export function ReceiptModal({ transaction, onNextCustomer }: ReceiptModalProps) {
  const [phone, setPhone] = useState(transaction.customerPhone || '');
  const [sentNotice, setSentNotice] = useState(false);

  const itemsText = transaction.items
    .map((item, idx) => `${idx + 1}. ${item.qty}× ${item.name} - ₹${item.price * item.qty}`)
    .join('\n');

  const receiptMessage = `✨ *Namma 3D Lab | Pop-up Stall Bill* ✨

🧾 *Bill Ref:* ${transaction.id}
📍 *Venue:* ${transaction.stallName}
⏰ *Time:* ${transaction.timestamp}

📦 *Items Purchased:*
${itemsText}

💰 *Total Paid:* ₹${transaction.totalAmount} (${transaction.paymentMethod})
${transaction.paymentMethod === 'CASH' && transaction.cashTendered ? `• Cash Tendered: ₹${transaction.cashTendered}\n• Change Returned: ₹${transaction.changeDue}\n` : ''}
🙏 Thank you for supporting local precision 3D printing in Bangalore!
🌐 Visit us online: https://namma3dlab.in
📸 Follow Instagram: @namma3dlab`;

  const handleSendWhatsApp = () => {
    if (!phone.trim()) {
      alert('Please enter a WhatsApp phone number');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/91${cleanPhone.length === 10 ? cleanPhone : cleanPhone.slice(-10)}?text=${encodeURIComponent(receiptMessage)}`;
    window.open(url, '_blank');
    setSentNotice(true);
  };

  return (
    <div className="pos-modal-overlay">
      <div className="pos-modal-window" style={{ maxWidth: '440px', textAlign: 'center' }}>
        
        {/* Success Header */}
        <div style={{ padding: '32px 24px 20px', background: '#F0FDF4', borderBottom: '1px solid #BBF7D0' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#22C55E',
              color: '#FFFFFF',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(34, 197, 94, 0.35)',
              marginBottom: '14px'
            }}
          >
            <CheckCircle2 size={36} strokeWidth={2.5} />
          </div>

          <h2 style={{ fontSize: '24px', margin: '0 0 4px', color: '#14532D' }}>
            Payment Successful!
          </h2>
          <span style={{ fontSize: '13px', color: '#166534', fontWeight: 600 }}>
            {transaction.id} &bull; {transaction.timestamp}
          </span>
        </div>

        {/* Bill Receipt Card */}
        <div style={{ padding: '24px', textAlign: 'left' }}>
          
          <div style={{ background: 'var(--surface-alt)', borderRadius: '12px', padding: '16px', marginBottom: '18px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
              <strong style={{ fontSize: '14px', color: 'var(--navy)' }}>Total Collected</strong>
              <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--navy)' }}>
                ₹{transaction.totalAmount}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--slate)', marginBottom: '8px' }}>
              <span>Payment Mode:</span>
              <strong style={{ color: transaction.paymentMethod === 'UPI' ? 'var(--green-ink)' : 'var(--navy)' }}>
                {transaction.paymentMethod === 'UPI' ? '📱 UPI (PhonePe / GPay)' : '💵 Cash Tendered'}
              </strong>
            </div>

            {transaction.paymentMethod === 'CASH' && transaction.cashTendered && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--slate)' }}>
                <span>Change Returned:</span>
                <strong style={{ color: '#166534' }}>₹{transaction.changeDue}</strong>
              </div>
            )}

            <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--line)', fontSize: '12px', color: 'var(--slate-dark)' }}>
              {transaction.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>{item.qty}× {item.name}</span>
                  <span style={{ fontWeight: 700 }}>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Digital Bill Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Send Digital Bill on WhatsApp
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="tel"
                placeholder="Customer Phone (10 digits)"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="pos-input"
                style={{ flex: 1, fontSize: '13px' }}
              />
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="btn btn-dark btn-sm"
                style={{ padding: '8px 14px' }}
              >
                <MessageCircle size={15} /> Send
              </button>
            </div>
            {sentNotice && (
              <span style={{ fontSize: '11px', color: 'var(--green-ink)', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                ✓ Opened WhatsApp chat with receipt!
              </span>
            )}
          </div>

          {/* Next Customer Button */}
          <button
            type="button"
            onClick={onNextCustomer}
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
            Next Customer / New Bill <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}
