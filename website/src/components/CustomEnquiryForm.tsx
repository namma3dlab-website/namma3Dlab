'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Package,
  Layers,
  Send,
  RotateCcw
} from 'lucide-react';

export function CustomEnquiryForm() {
  const searchParams = useSearchParams();

  // Query parameters from product page if clicked "Customize This Product"
  const paramProductSlug = searchParams.get('product') || '';
  const paramProductName = searchParams.get('name') || '';
  const paramVariant = searchParams.get('variant') || '';
  const paramQty = Number(searchParams.get('qty')) || 1;

  const isProductSpecific = Boolean(paramProductSlug || paramProductName);

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [productName, setProductName] = useState(paramProductName || '');
  const [productReference, setProductReference] = useState(paramProductSlug || 'GEN-CUSTOM');
  const [variantPreferences, setVariantPreferences] = useState(paramVariant || '');
  const [quantity, setQuantity] = useState<number>(paramQty > 0 ? paramQty : 1);
  const [instructions, setInstructions] = useState('');

  // Submission & WhatsApp states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);
  const [googleSheetsLogged, setGoogleSheetsLogged] = useState(false);

  // Update prefill if search params change
  useEffect(() => {
    if (paramProductName) setProductName(paramProductName);
    if (paramProductSlug) setProductReference(paramProductSlug);
    if (paramVariant) setVariantPreferences(paramVariant);
    if (paramQty) setQuantity(paramQty);
  }, [paramProductName, paramProductSlug, paramVariant, paramQty]);

  const constructWhatsAppUrl = (enquiryData: {
    name: string;
    phone: string;
    productName: string;
    productReference: string;
    variants: string;
    quantity: number;
    instructions: string;
    source: string;
  }) => {
    const message = `👋 Hi Namma 3D Lab! I have submitted a customization enquiry:

👤 Customer Details:
• Name: ${enquiryData.name}
• WhatsApp: ${enquiryData.phone}

📦 Product Reference:
• Item: ${enquiryData.productName || 'Bespoke Custom Idea'}
• Reference ID: ${enquiryData.productReference || 'N/A'}
• Requested Quantity: ${enquiryData.quantity}

🎨 Preferences / Variants:
${enquiryData.variants || 'Standard / Flexible to suggestions'}

📝 Customization Instructions:
${enquiryData.instructions || 'Standard specs; please advise turnaround.'}

📌 Source: ${enquiryData.source}

I would like to discuss my requirements and finalize quotation details!`;

    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim()) {
      setSubmitError('Please provide your name and WhatsApp phone number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const source = isProductSpecific ? 'Product-Specific Customization' : 'General Customization';

    const payload = {
      name: customerName.trim(),
      phone: customerPhone.trim(),
      email: customerEmail.trim(),
      productName: productName.trim() || 'Custom Project',
      productReference: productReference.trim() || 'GEN-CUSTOM',
      variants: variantPreferences.trim() || 'Standard Finish',
      quantity,
      instructions: instructions.trim() || 'None provided',
      source
    };

    try {
      const res = await fetch('/api/custom-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok && !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      setGoogleSheetsLogged(Boolean(data.googleSheetsSynced));
      const generatedWhatsAppUrl = constructWhatsAppUrl(payload);
      setWhatsAppUrl(generatedWhatsAppUrl);
      setSubmitSuccess(true);

      // Auto-trigger WhatsApp click-to-chat in a new tab for seamless user flow
      window.open(generatedWhatsAppUrl, '_blank');
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'Something went wrong while recording your enquiry. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
    setWhatsAppUrl(null);
    setSubmitError(null);
  };

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 6vw 70px' }}>
      
      {/* Header & Context Badge */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="eyebrow lime">Customization &bull; Direct WhatsApp Handshake</span>
        <h1 style={{ fontSize: '32px', color: 'var(--navy)', margin: '8px 0 12px' }}>
          {isProductSpecific ? 'Customize Your Selected Product' : 'Start a Customization Enquiry'}
        </h1>
        <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.55 }}>
          {isProductSpecific
            ? 'Request specific dimensions, corporate embossing, custom colors, or batch volumes for this item. Your enquiry is logged directly to our Google Sheet and pre-filled into WhatsApp.'
            : 'Looking for a bespoke creation, broken part replacement, or corporate gift batch? Describe your requirements below and chat with our additive engineers on WhatsApp.'}
        </p>
      </div>

      {/* Product-Specific Context Badge Card */}
      {isProductSpecific && (
        <div
          style={{
            background: 'var(--green-subtle)',
            border: '1px solid #A7F3D0',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '28px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-ink)' }}>
              <Package size={20} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Prefilled From Product Page
              </span>
              <strong style={{ fontSize: '14px', color: '#064E3B', display: 'block' }}>
                {productName}
              </strong>
              {variantPreferences && (
                <span style={{ fontSize: '12px', color: '#047857' }}>
                  Selected Variant: {variantPreferences} &bull; Qty: {quantity}
                </span>
              )}
            </div>
          </div>

          <Link
            href="/custom"
            style={{ fontSize: '12px', color: '#065F46', textDecoration: 'underline', fontWeight: 700 }}
          >
            Switch to General Customization
          </Link>
        </div>
      )}

      {/* Submission Success State */}
      {submitSuccess && (
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid var(--lime)',
            borderRadius: '16px',
            padding: '36px',
            textAlign: 'center',
            boxShadow: '0 16px 40px rgba(10, 13, 20, 0.08)',
            marginBottom: '32px'
          }}
        >
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--green-subtle)', color: 'var(--green-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <CheckCircle2 size={32} />
          </div>

          <h3 style={{ margin: '0 0 8px', fontSize: '22px', color: 'var(--navy)' }}>
            Enquiry Successfully Submitted!
          </h3>

          <p style={{ color: 'var(--slate)', fontSize: '14px', maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.5 }}>
            Thank you, <strong>{customerName}</strong>! Your requirements for <strong>"{productName || 'your custom project'}"</strong> have been securely recorded.
            {googleSheetsLogged && ' Our team has also been alerted via email.'}
          </p>

          {/* Action to Contact on WhatsApp with Prefilled Message */}
          {whatsAppUrl && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  padding: '16px 28px',
                  fontSize: '15px',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 800
                }}
              >
                <MessageCircle size={20} />
                Open Conversation on WhatsApp &rarr;
              </a>
              <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
                (All your entered details, quantities, and instructions are pre-filled in the chat message)
              </span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
            <button
              type="button"
              onClick={handleResetForm}
              className="btn btn-light"
              style={{ fontSize: '12px' }}
            >
              <RotateCcw size={14} /> Submit Another Enquiry
            </button>
            <Link href="/shop" className="btn btn-light" style={{ fontSize: '12px' }}>
              Return to Shop &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Main Form (shown if not yet submitted) */}
      {!submitSuccess && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#FFFFFF',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 12px 35px rgba(10, 13, 20, 0.05)'
          }}
        >
          {submitError && (
            <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#B91C1C', fontSize: '13px', marginBottom: '20px' }}>
              <AlertCircle size={16} />
              <span>{submitError}</span>
            </div>
          )}

          {/* Section 1: Customer Contact Information */}
          <h3 style={{ margin: '0 0 16px', fontSize: '16px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
            1. Your Contact Details
          </h3>

          <div className="responsive-form-grid-2">
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Akshay Kumar"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                className="form-input"
                placeholder="e.g. 9876543210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '28px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
              Email Address (Optional, for copy of quotation)
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="name@example.com"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          {/* Section 2: Product & Customization Requirements */}
          <h3 style={{ margin: '0 0 16px', fontSize: '16px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
            2. Product &amp; Customization Specifications
          </h3>

          <div className="responsive-form-grid-2-1">
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                Product Name or Description
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Geometric Spiral Fluted Vase or Custom Gear..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                Approximate Quantity
              </label>
              <input
                type="number"
                min={1}
                max={5000}
                className="form-input"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
              Desired Color, Finish, or Material Preferences
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Silk Gold finish, Matte Black PETG, Dual-tone White/Blue, or Tough Resin..."
              value={variantPreferences}
              onChange={(e) => setVariantPreferences(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '28px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
              Additional Instructions / Custom Dimensions / Specific Requirements
            </label>
            <textarea
              className="form-input"
              rows={4}
              placeholder="Provide any specific dimensions (e.g. 150mm height), text to emboss, intended functional use, or references..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              style={{ width: '100%', resize: 'vertical' }}
            />
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-lime"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '15px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <Send size={16} />
              {isSubmitting ? 'Recording & Connecting...' : 'Submit Custom Enquiry & Chat on WhatsApp'}
            </button>

            <p style={{ margin: 0, fontSize: '11px', color: 'var(--slate)', textAlign: 'center', lineHeight: 1.5 }}>
              🔒 Submitting automatically creates a record in our Google Sheet, alerts our engineering team, and prefills your WhatsApp chat so we have all your requirements ready.
            </p>
          </div>

        </form>
      )}

    </div>
  );
}
