'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, Printer, CheckCircle2, ArrowRight } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  meta?: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

interface ModalsProps {
  isCheckoutOpen: boolean;
  onCloseCheckout: () => void;
  cart: CartItem[];
  totalAmount: number;
  onPaymentSuccess: () => void;
}

export function Modals({
  isCheckoutOpen,
  onCloseCheckout,
  cart,
  totalAmount,
  onPaymentSuccess
}: ModalsProps) {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'whatsapp'>('razorpay');
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    city: 'Bangalore',
    pincode: ''
  });

  const [invoiceNumber, setInvoiceNumber] = useState('INV-N3D-2026-881');
  const [invoiceDate, setInvoiceDate] = useState('17 Oct 2026');

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.phone || !customer.address || !customer.pincode) {
      alert('Please fill in all required shipping fields.');
      return;
    }

    if (paymentMethod === 'razorpay') {
      onCloseCheckout();
      setPaymentModalOpen(true);
    } else {
      // WhatsApp Advance Handshake
      const itemsList = cart.map(i => `• ${i.name} (Qty: ${i.qty}) - ₹${i.price * i.qty}`).join('\n');
      const advanceVal = Math.round(totalAmount * 0.5);
      const msg = `Hi Namma 3D Lab, I placed a guest order on your website:\n` +
        `Order Summary:\n${itemsList}\n` +
        `Total: ₹${totalAmount} | 50% Advance: ₹${advanceVal}\n\n` +
        `Shipping To:\n` +
        `• Name: ${customer.name}\n` +
        `• Phone: ${customer.phone}\n` +
        `• Address: ${customer.address}, ${customer.city} - ${customer.pincode}\n\n` +
        `Please share UPI QR code for advance payment confirmation.`;

      onCloseCheckout();
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  const handleSimulatePayment = () => {
    setInvoiceNumber(`INV-N3D-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setInvoiceDate(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
    setPaymentModalOpen(false);
    setInvoiceModalOpen(true);
    onPaymentSuccess();
  };

  const taxableVal = Number((totalAmount / 1.18).toFixed(2));
  const cgstVal = Number(((totalAmount - taxableVal) / 2).toFixed(2));
  const sgstVal = cgstVal;

  return (
    <>
      {/* 1. Guest Checkout Modal */}
      {isCheckoutOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-window">
            <button
              onClick={onCloseCheckout}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--surface-alt)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <span className="eyebrow lime">Fast Guest Checkout</span>
            <h3 style={{ fontSize: '22px', margin: '4px 0 6px' }}>Review &amp; Place Order</h3>
            <p style={{ fontSize: '12px', color: 'var(--slate)', margin: '0 0 20px' }}>
              No forced Google passwords or account creation. Seamlessly optimized for Instagram ad visitors.
            </p>

            {/* Cart Summary */}
            <div style={{ background: 'var(--surface-alt)', borderRadius: '8px', padding: '14px', marginBottom: '20px' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '8px' }}>
                Order Summary
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #CBD5E1', paddingBottom: '6px' }}>
                    <div>
                      <strong style={{ color: 'var(--navy)' }}>{item.name}</strong>
                      {item.meta && <small style={{ display: 'block', color: 'var(--slate)' }}>{item.meta}</small>}
                      <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Qty: {item.qty} &bull; ₹{item.price} each</span>
                    </div>
                    <strong style={{ color: 'var(--navy)' }}>₹{item.price * item.qty}</strong>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #CBD5E1', marginTop: '10px', paddingTop: '8px', fontSize: '15px', fontWeight: 900 }}>
                <span>Total Order Value:</span>
                <span style={{ color: 'var(--green-ink)' }}>₹{totalAmount}</span>
              </div>
            </div>

            {/* Shipping Form */}
            <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                  Full Name *
                  <input
                    required
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    placeholder="Akshay Kumar"
                    style={{ padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                  WhatsApp Phone Number *
                  <input
                    required
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    placeholder="9876543210"
                    style={{ padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>
              </div>

              <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                Delivery Address *
                <textarea
                  required
                  rows={2}
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="Flat/House No, Street, Landmark..."
                  style={{ padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px', fontFamily: 'inherit' }}
                />
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                  City *
                  <input
                    required
                    type="text"
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    style={{ padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                  Pincode *
                  <input
                    required
                    type="text"
                    maxLength={6}
                    value={customer.pincode}
                    onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                    placeholder="560001"
                    style={{ padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>
              </div>

              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', marginTop: '8px' }}>
                Select Payment Method:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div
                  onClick={() => setPaymentMethod('razorpay')}
                  style={{
                    border: `2px solid ${paymentMethod === 'razorpay' ? 'var(--green)' : 'var(--line)'}`,
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                    background: paymentMethod === 'razorpay' ? 'var(--green-subtle)' : '#FFFFFF'
                  }}
                >
                  <strong style={{ fontSize: '12px', display: 'block', color: 'var(--navy)' }}>UPI / Razorpay</strong>
                  <small style={{ fontSize: '10px', color: 'var(--slate)' }}>Instant GPay, PhonePe, QR or Cards</small>
                </div>

                <div
                  onClick={() => setPaymentMethod('whatsapp')}
                  style={{
                    border: `2px solid ${paymentMethod === 'whatsapp' ? 'var(--green)' : 'var(--line)'}`,
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                    background: paymentMethod === 'whatsapp' ? 'var(--green-subtle)' : '#FFFFFF'
                  }}
                >
                  <strong style={{ fontSize: '12px', display: 'block', color: 'var(--navy)' }}>WhatsApp 50% Advance</strong>
                  <small style={{ fontSize: '10px', color: 'var(--slate)' }}>Confirm with lab engineer before pay</small>
                </div>
              </div>

              <button type="submit" className="btn btn-lime" style={{ marginTop: '14px' }}>
                Proceed to Payment <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Razorpay Simulator Modal */}
      {paymentModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-window" style={{ maxWidth: '420px', textAlign: 'center' }}>
            <button
              onClick={() => setPaymentModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--surface-alt)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#E0F2FE', color: '#0284C7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '20px', margin: '0 0 4px' }}>Razorpay Secure Checkout</h3>
            <p style={{ fontSize: '11px', color: 'var(--slate)', margin: '0 0 16px' }}>
              Namma 3D Lab &bull; Merchant ID: <code>N3D-BLR-LIVE</code>
            </p>

            <div style={{ background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', fontWeight: 800 }}>Amount Payable</div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--navy)', margin: '6px 0' }}>₹{totalAmount}</div>

              {/* Mock QR SVG */}
              <div style={{ width: '140px', height: '140px', margin: '14px auto', background: '#FFFFFF', padding: '8px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'grid', placeItems: 'center' }}>
                <svg viewBox="0 0 100 100" width="124" height="124" fill="#0F172A">
                  <rect x="5" y="5" width="28" height="28" rx="2" fill="none" stroke="#0F172A" strokeWidth="5" />
                  <rect x="12" y="12" width="14" height="14" fill="#0F172A" />
                  <rect x="67" y="5" width="28" height="28" rx="2" fill="none" stroke="#0F172A" strokeWidth="5" />
                  <rect x="74" y="12" width="14" height="14" fill="#0F172A" />
                  <rect x="5" y="67" width="28" height="28" rx="2" fill="none" stroke="#0F172A" strokeWidth="5" />
                  <rect x="12" y="74" width="14" height="14" fill="#0F172A" />
                  <rect x="42" y="12" width="16" height="6" />
                  <rect x="42" y="24" width="8" height="8" />
                  <rect x="12" y="42" width="6" height="16" />
                  <rect x="24" y="42" width="8" height="8" />
                  <rect x="42" y="42" width="16" height="16" fill="#10B981" />
                  <rect x="67" y="42" width="20" height="6" />
                  <rect x="74" y="54" width="14" height="8" />
                  <rect x="42" y="68" width="10" height="20" />
                  <rect x="62" y="68" width="8" height="12" />
                  <rect x="80" y="76" width="12" height="12" />
                </svg>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>Scan with GPay, PhonePe, Paytm, or BHIM</span>
            </div>

            <button onClick={handleSimulatePayment} className="btn btn-lime" style={{ width: '100%' }} type="button">
              <CheckCircle2 size={16} /> Simulate Successful Payment
            </button>
          </div>
        </div>
      )}

      {/* 3. GST Bill of Supply Modal */}
      {invoiceModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-window" style={{ maxWidth: '680px' }}>
            <button
              onClick={() => setInvoiceModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--surface-alt)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', margin: 0 }}>Tax Invoice &bull; Bill of Supply</h3>
              <button onClick={() => window.print()} className="btn btn-dark" style={{ padding: '7px 14px', fontSize: '11px' }} type="button">
                <Printer size={13} /> Print / Save PDF
              </button>
            </div>

            {/* Printable Invoice Container */}
            <div style={{ border: '1px solid #CBD5E1', padding: '24px', background: '#FFFFFF', borderRadius: '8px', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0F172A', paddingBottom: '12px', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>NAMMA 3D LAB</div>
                  <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px', lineHeight: 1.5 }}>
                    Additive Manufacturing &amp; Rapid Prototyping Farm<br />
                    100ft Road, Indiranagar, Bangalore, Karnataka &bull; PIN 560038<br />
                    GSTIN / UIN: 29AABCN3381D1ZX &bull; State: 29-Karnataka
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>{invoiceNumber}</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>Date: {invoiceDate}</div>
                  <span style={{ display: 'inline-block', marginTop: '6px', padding: '2px 8px', borderRadius: '4px', background: '#DCFCE7', color: '#166534', fontSize: '10px', fontWeight: 800 }}>
                    PAID &bull; UPI CONFIRMED
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '11px', background: '#F8FAFC', padding: '10px 14px', borderRadius: '6px' }}>
                <div>
                  <strong style={{ color: '#0F172A', display: 'block' }}>BILLED TO:</strong>
                  <span>{customer.name || 'Valued Customer'}</span><br />
                  <span>{customer.address}, {customer.city} - {customer.pincode}</span><br />
                  <span>WhatsApp: +91 {customer.phone}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: '#0F172A', display: 'block' }}>PLACE OF SUPPLY:</strong>
                  <span>Karnataka (Code: 29)</span><br />
                  <span>Reverse Charge: No</span>
                </div>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', margin: '14px 0', fontSize: '11px' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', textAlign: 'left' }}>
                    <th style={{ padding: '8px' }}>#</th>
                    <th style={{ padding: '8px' }}>Description &bull; Polymer</th>
                    <th style={{ padding: '8px' }}>HSN/SAC</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Qty</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Rate (₹)</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '8px' }}>{idx + 1}</td>
                      <td style={{ padding: '8px' }}>
                        <strong>{item.name}</strong>
                        {item.meta && <div style={{ fontSize: '10px', color: '#64748B' }}>{item.meta}</div>}
                      </td>
                      <td style={{ padding: '8px' }}>39269099</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>{item.qty}</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>{item.price}</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>{item.price * item.qty}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={5} style={{ padding: '8px', textAlign: 'right' }}>Taxable Value:</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>₹{taxableVal}</th>
                  </tr>
                  <tr>
                    <td colSpan={5} style={{ padding: '4px 8px', textAlign: 'right', color: '#64748B' }}>Central GST (CGST 9%):</td>
                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>₹{cgstVal}</td>
                  </tr>
                  <tr>
                    <td colSpan={5} style={{ padding: '4px 8px', textAlign: 'right', color: '#64748B' }}>State GST (SGST 9%):</td>
                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>₹{sgstVal}</td>
                  </tr>
                  <tr style={{ fontSize: '13px', fontWeight: 900, borderTop: '2px solid #0F172A' }}>
                    <th colSpan={5} style={{ padding: '8px', textAlign: 'right', color: '#0F172A' }}>Grand Total (INR):</th>
                    <th style={{ padding: '8px', textAlign: 'right', color: '#059669' }}>₹{totalAmount}.00</th>
                  </tr>
                </tfoot>
              </table>

              <div style={{ fontSize: '10px', color: '#64748B', borderTop: '1px dashed #CBD5E1', paddingTop: '10px', marginTop: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <span>This is an electronically generated Tax Invoice &bull; No physical signature required</span>
                <span>Thank you for manufacturing with Namma 3D Lab!</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
