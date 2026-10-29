'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  ShieldCheck,
  Truck,
  ArrowRight,
  MessageCircle,
  CreditCard,
  CheckCircle2,
  Printer,
  ShoppingBag,
  AlertCircle
} from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function CheckoutPage() {
  const { cart, totalAmount, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Bangalore');
  const [pincode, setPincode] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentOption, setPaymentOption] = useState<'upi' | 'card' | 'cod'>('upi');

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');
  const [confirmedOrderDate, setConfirmedOrderDate] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const subtotal = totalAmount;
  const isFreeDelivery = subtotal >= 499 || subtotal === 0;
  const deliveryCharge = isFreeDelivery ? 0 : 50;
  const grandTotal = subtotal + deliveryCharge;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim() || !address.trim() || !pincode.trim()) {
      setFormError('Please fill in all mandatory delivery address fields.');
      return;
    }

    if (cart.length === 0) {
      setFormError('Your cart is empty. Please add products before checking out.');
      return;
    }

    setFormError(null);
    const orderId = `ORD-N3D-${Math.floor(100000 + Math.random() * 900000)}`;
    const orderDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    // Direct Order Confirmation & Instant Invoice Generation
    setConfirmedOrderId(orderId);
    setConfirmedOrderDate(orderDate);
    setOrderConfirmed(true);
    clearCart();
  };

  // If order completed successfully
  if (orderConfirmed) {
    return (
      <main style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: '680px', width: '100%', margin: '40px auto 70px', padding: '0 6vw', flex: 1 }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '2px solid var(--lime)',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 16px 45px rgba(10, 13, 20, 0.08)'
            }}
          >
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'var(--green-subtle)',
                color: 'var(--green-ink)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <span className="eyebrow lime">Order Confirmed</span>
            <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: '8px 0 12px' }}>
              Thank You for Your Order!
            </h1>
            <p style={{ color: 'var(--slate)', fontSize: '15px', lineHeight: 1.55, margin: '0 0 24px' }}>
              Your order <strong>#{confirmedOrderId}</strong> has been logged. Our dispatch team in Bangalore is preparing your items with precision inspection.
            </p>

            <div
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                <span style={{ color: 'var(--slate)' }}>Order ID:</span>
                <strong style={{ color: 'var(--navy)' }}>{confirmedOrderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                <span style={{ color: 'var(--slate)' }}>Order Date:</span>
                <span style={{ color: 'var(--navy)' }}>{confirmedOrderDate}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                <span style={{ color: 'var(--slate)' }}>Recipient:</span>
                <span style={{ color: 'var(--navy)' }}>{customerName} ({customerPhone})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--slate)' }}>Estimated Dispatch:</span>
                <span style={{ color: 'var(--green-ink)', fontWeight: 700 }}>Within 24–48 Hours</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn btn-light"
                style={{ fontSize: '13px' }}
              >
                <Printer size={15} /> Print Receipt
              </button>
              <a
                href={`https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20checking%20status%20for%20order%20%23${confirmedOrderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: '13px' }}
              >
                <MessageCircle size={15} /> Track on WhatsApp
              </a>
              <Link href="/shop" className="btn btn-lime" style={{ fontSize: '13px' }}>
                Continue Shopping &rarr;
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // If cart is empty
  if (cart.length === 0) {
    return (
      <main style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: '600px', width: '100%', margin: '60px auto', padding: '0 6vw', textAlign: 'center', flex: 1 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '48px 24px' }}>
            <ShoppingBag size={48} color="var(--slate-light)" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '22px', color: 'var(--navy)', margin: '0 0 10px' }}>No items in checkout</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', marginBottom: '24px' }}>
              Your cart is empty. Please select products from our shop before proceeding to checkout.
            </p>
            <Link href="/shop" className="btn btn-lime" style={{ padding: '12px 24px', fontSize: '14px', display: 'inline-flex' }}>
              Browse Shop Products &rarr;
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '40px 6vw 70px', flex: 1 }}>
        
        {/* Navigation Breadcrumb */}
        <nav style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <Link href="/" style={{ color: 'var(--slate)' }}>Home</Link>
          <span>/</span>
          <Link href="/cart" style={{ color: 'var(--slate)' }}>Cart</Link>
          <span>/</span>
          <span style={{ color: 'var(--navy)', fontWeight: 700 }}>Checkout</span>
        </nav>

        <h1 style={{ fontSize: '30px', margin: '0 0 8px', color: 'var(--navy)' }}>Secure Checkout</h1>
        <p style={{ color: 'var(--slate)', fontSize: '14px', margin: '0 0 32px' }}>
          Complete your delivery details for express dispatch across Bangalore.
        </p>

        {formError && (
          <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#B91C1C', fontSize: '13px', marginBottom: '24px' }}>
            <AlertCircle size={16} />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmitOrder}>
          <div className="checkout-main-grid">
            
            {/* Left Column: Delivery Address & Payment Method */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Delivery Details Card */}
              <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 14px rgba(10, 13, 20, 0.03)' }}>
                <h3 style={{ margin: '0 0 20px', fontSize: '18px', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={20} color="var(--green-ink)" /> Delivery Address
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

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                    Email Address (Optional, for digital receipt)
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

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                    Street Address &amp; Flat/House No. *
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. #42, 5th Main, 100ft Road, Indiranagar"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={{ width: '100%' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. 560038"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                    Delivery Notes / Landmark (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Near Metro Station / Call on arrival"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 14px rgba(10, 13, 20, 0.03)' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CreditCard size={20} color="var(--green-ink)" /> Payment Method
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label
                    style={{
                      border: paymentOption === 'upi' ? '2px solid var(--green-ink)' : '1px solid var(--line)',
                      background: paymentOption === 'upi' ? 'var(--green-subtle)' : '#FFFFFF',
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={paymentOption === 'upi'}
                      onChange={() => setPaymentOption('upi')}
                      style={{ marginTop: '3px' }}
                    />
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                        UPI / Instant QR Code (Google Pay, PhonePe, Paytm, BHIM)
                      </strong>
                      <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--slate)' }}>
                        Instant 0% surcharge payment via any UPI app with immediate order verification.
                      </p>
                    </div>
                  </label>

                  <label
                    style={{
                      border: paymentOption === 'card' ? '2px solid var(--green-ink)' : '1px solid var(--line)',
                      background: paymentOption === 'card' ? 'var(--green-subtle)' : '#FFFFFF',
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={paymentOption === 'card'}
                      onChange={() => setPaymentOption('card')}
                      style={{ marginTop: '3px' }}
                    />
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                        Credit / Debit Card &amp; NetBanking
                      </strong>
                      <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--slate)' }}>
                        Visa, MasterCard, RuPay, and corporate net banking supported.
                      </p>
                    </div>
                  </label>

                  <label
                    style={{
                      border: paymentOption === 'cod' ? '2px solid var(--green-ink)' : '1px solid var(--line)',
                      background: paymentOption === 'cod' ? 'var(--green-subtle)' : '#FFFFFF',
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={paymentOption === 'cod'}
                      onChange={() => setPaymentOption('cod')}
                      style={{ marginTop: '3px' }}
                    />
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                        Pay on Delivery (Bangalore Hubs)
                      </strong>
                      <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--slate)' }}>
                        Pay via cash or UPI scan when your courier partner arrives at your doorstep.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Order Review & Total */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 10px 30px rgba(10, 13, 20, 0.04)',
                position: 'sticky',
                top: '90px'
              }}
            >
              <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: 'var(--navy)' }}>Order Items ({cart.length})</h3>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '280px', overflowY: 'auto', marginBottom: '20px', paddingRight: '4px' }}>
                {cart.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
                    <div>
                      <strong style={{ color: 'var(--navy)', display: 'block' }}>{item.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                        Qty: {item.qty} {item.variant ? `• ${item.variant}` : ''}
                      </span>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--navy)' }}>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid var(--line)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--slate)' }}>
                  <span>Subtotal</span>
                  <span style={{ color: 'var(--navy)', fontWeight: 600 }}>₹{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--slate)' }}>
                  <span>Bangalore Delivery</span>
                  <span style={{ color: isFreeDelivery ? 'var(--green-ink)' : 'var(--navy)', fontWeight: 600 }}>
                    {isFreeDelivery ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--slate-light)' }}>
                  <span>Taxes</span>
                  <span>Included</span>
                </div>
              </div>

              {/* Final Amount */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
                <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>Total Payable</strong>
                <strong style={{ fontSize: '26px', color: 'var(--navy)' }}>₹{grandTotal}</strong>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="btn btn-lime"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '15px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontWeight: 800
                }}
              >
                <ShieldCheck size={18} /> Complete Order &amp; Generate Invoice
              </button>

              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <Link href="/cart" style={{ fontSize: '12px', color: 'var(--slate)', textDecoration: 'underline' }}>
                  Return to Cart to Modify Items
                </Link>
              </div>

              {/* Notice */}
              <div style={{ marginTop: '20px', padding: '12px', background: 'var(--surface-alt)', borderRadius: '8px', fontSize: '11px', color: 'var(--slate)', lineHeight: 1.45 }}>
                ℹ️ <strong>Standard Store Order:</strong> For bespoke CAD design, STL uploads, or custom corporate embossing, please use the <strong>Custom</strong> enquiry tab.
              </div>
            </div>

          </div>
        </form>

      </div>
      <Footer />
    </main>
  );
}
