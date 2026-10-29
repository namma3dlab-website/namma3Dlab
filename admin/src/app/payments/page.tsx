'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  ShieldCheck,
  Check,
  QrCode,
  DollarSign,
  Percent,
  Truck,
  Building,
  Save,
  AlertCircle
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';

export function PaymentSettingsPage() {
  const { paymentSettings, updatePaymentSettings } = useAdminData();
  const [form, setForm] = useState(paymentSettings);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePaymentSettings(form);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  return (
    <div>
      {/* Toast Notification */}
      {showSavedToast && (
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000, background: '#0A0D14', color: '#FFFFFF', padding: '14px 22px', borderRadius: '12px', boxShadow: '0 16px 40px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid var(--lime)' }}>
          <Check size={18} color="var(--lime)" strokeWidth={3} />
          <strong style={{ fontSize: '13px' }}>Payment Gateways &amp; Tax Settings Saved Successfully!</strong>
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Finance &bull; Gateway Integrations
          </span>
          <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: 0 }}>
            Payment Gateways &amp; Taxation Settings
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--slate)' }}>
            Configure live payment gateway keys, direct business UPI QR, GST rates, and delivery fees.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="btn btn-lime"
          style={{ padding: '10px 22px' }}
        >
          <Save size={16} /> Save Gateway Settings
        </button>
      </div>

      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Row 1: Razorpay & Cashfree */}
        <div className="admin-payments-grid">
          
          {/* Razorpay Card */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--sky-subtle)', color: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>Razorpay Gateway</strong>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Cards, UPI, NetBanking, EMI</span>
                </div>
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 700 }}>
                <input
                  type="checkbox"
                  checked={form.razorpay.enabled}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    razorpay: { ...prev.razorpay, enabled: e.target.checked }
                  }))}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--green-ink)' }}
                />
                {form.razorpay.enabled ? 'Enabled' : 'Disabled'}
              </label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label">Razorpay Key ID</label>
                <input
                  type="text"
                  value={form.razorpay.keyId}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    razorpay: { ...prev.razorpay, keyId: e.target.value }
                  }))}
                  style={{ width: '100%', fontFamily: 'monospace', fontSize: '12.5px' }}
                />
              </div>

              <div>
                <label className="form-label">Key Secret</label>
                <input
                  type="password"
                  value={form.razorpay.keySecret}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    razorpay: { ...prev.razorpay, keySecret: e.target.value }
                  }))}
                  style={{ width: '100%', fontFamily: 'monospace', fontSize: '12.5px' }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--slate-dark)', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={form.razorpay.testMode}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    razorpay: { ...prev.razorpay, testMode: e.target.checked }
                  }))}
                  style={{ accentColor: 'var(--green-ink)' }}
                />
                Enable Sandbox / Test Mode (No real charges)
              </label>
            </div>
          </div>

          {/* Direct UPI VPA & QR Code */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--green-subtle)', color: 'var(--green-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <QrCode size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>Direct UPI QR &amp; VPA</strong>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Zero gateway commission direct merchant account</span>
                </div>
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 700 }}>
                <input
                  type="checkbox"
                  checked={form.upiDirect.enabled}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    upiDirect: { ...prev.upiDirect, enabled: e.target.checked }
                  }))}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--green-ink)' }}
                />
                {form.upiDirect.enabled ? 'Active' : 'Disabled'}
              </label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label">Merchant UPI ID (VPA)</label>
                <input
                  type="text"
                  value={form.upiDirect.upiId}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    upiDirect: { ...prev.upiDirect, upiId: e.target.value }
                  }))}
                  style={{ width: '100%', fontWeight: 700 }}
                />
              </div>

              <div>
                <label className="form-label">Payee Account Legal Name</label>
                <input
                  type="text"
                  value={form.upiDirect.accountName}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    upiDirect: { ...prev.upiDirect, accountName: e.target.value }
                  }))}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label className="form-label">Customer Instructions Note</label>
                <input
                  type="text"
                  value={form.upiDirect.qrNote}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    upiDirect: { ...prev.upiDirect, qrNote: e.target.value }
                  }))}
                  style={{ width: '100%', fontSize: '12px' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: Cash on Delivery & Taxation */}
        <div className="admin-payments-grid">
          
          {/* Taxation & GST */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--amber-subtle)', color: 'var(--amber)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>Taxation &amp; GSTIN Registration</strong>
                <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Automated GST calculation for business invoices</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">GST Tax Rate (%)</label>
                  <input
                    type="number"
                    value={form.taxation.gstRatePercent}
                    onChange={e => setForm(prev => ({
                      ...prev,
                      taxation: { ...prev.taxation, gstRatePercent: Number(e.target.value) }
                    }))}
                    style={{ width: '100%', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label className="form-label">GSTIN ID</label>
                  <input
                    type="text"
                    value={form.taxation.gstin}
                    onChange={e => setForm(prev => ({
                      ...prev,
                      taxation: { ...prev.taxation, gstin: e.target.value }
                    }))}
                    style={{ width: '100%', fontFamily: 'monospace', fontWeight: 700 }}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Registered Legal Business Name</label>
                <input
                  type="text"
                  value={form.taxation.legalBusinessName}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    taxation: { ...prev.taxation, legalBusinessName: e.target.value }
                  }))}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Shipping & Courier Rates */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--purple-subtle)', color: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>Bangalore Shipping Rules</strong>
                <span style={{ fontSize: '11px', color: 'var(--slate)' }}>Delivery thresholds and express local courier tariffs</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Free Delivery Threshold (₹)</label>
                  <input
                    type="number"
                    value={form.shipping.freeShippingThreshold}
                    onChange={e => setForm(prev => ({
                      ...prev,
                      shipping: { ...prev.shipping, freeShippingThreshold: Number(e.target.value) }
                    }))}
                    style={{ width: '100%', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label className="form-label">Standard Delivery Charge (₹)</label>
                  <input
                    type="number"
                    value={form.shipping.standardCourierFee}
                    onChange={e => setForm(prev => ({
                      ...prev,
                      shipping: { ...prev.shipping, standardCourierFee: Number(e.target.value) }
                    }))}
                    style={{ width: '100%', fontWeight: 700 }}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Origin Dispatch Hub</label>
                <input
                  type="text"
                  value={form.shipping.dispatchCity}
                  onChange={e => setForm(prev => ({
                    ...prev,
                    shipping: { ...prev.shipping, dispatchCity: e.target.value }
                  }))}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>

        </div>

      </form>
    </div>
  );
}

export default PaymentSettingsPage;
