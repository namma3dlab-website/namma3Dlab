'use client';

import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, Printer } from 'lucide-react';

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

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'upi'>('whatsapp');
  
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    city: 'Bangalore',
    pincode: ''
  });

  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');

  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= 499 || subtotal === 0 ? 0 : 50;
  const finalTotal = subtotal + deliveryFee;

  const handleProceedToShipping = () => {
    if (cart.length === 0) return;
    setCheckoutStep('shipping');
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name.trim() || !customer.phone.trim() || !customer.address.trim() || !customer.pincode.trim()) {
      alert('Please fill in all shipping fields to complete your order.');
      return;
    }

    if (paymentMethod === 'whatsapp') {
      // Format structured WhatsApp Order Message
      const itemsList = cart.map((item, idx) => `${idx + 1}. ${item.name}\n   Qty: ${item.qty} × ₹${item.price} = ₹${item.price * item.qty}${item.meta ? ` (${item.meta})` : ''}`).join('\n\n');
      
      const msg = `🛍️ Hi Namma 3D Lab! I want to place a pre-printed store order:

📦 Order Items:
${itemsList}

💰 Payment Summary:
• Subtotal: ₹${subtotal}
• Delivery: ${deliveryFee === 0 ? 'FREE Bangalore Express' : `₹${deliveryFee}`}
• Total Payable: ₹${finalTotal} (50% Advance: ₹${Math.round(finalTotal * 0.5)})

📍 Shipping Address:
• Name: ${customer.name}
• Phone: ${customer.phone}
• Address: ${customer.address}, ${customer.city} - ${customer.pincode}

Please share UPI payment QR for order confirmation & dispatch!`;

      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
      onClearCart();
      onClose();
      setCheckoutStep('cart');
    } else {
      // Instant Simulated UPI Checkout
      setInvoiceNumber(`INV-N3D-${Math.floor(1000 + Math.random() * 9000)}`);
      setInvoiceDate(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
      setCheckoutStep('success');
      onClearCart();
    }
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--green-ink)" />
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>
              {checkoutStep === 'cart' && `Your Cart (${totalItems})`}
              {checkoutStep === 'shipping' && 'Shipping & Payment'}
              {checkoutStep === 'success' && 'Order Confirmed'}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-dark)' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* STEP 1: CART ITEMS LIST */}
        {checkoutStep === 'cart' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 73px)' }}>
            {cart.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-light)', marginBottom: '16px' }}>
                  <ShoppingBag size={32} />
                </div>
                <h4 style={{ margin: '0 0 6px', fontSize: '16px', color: 'var(--navy)' }}>Your cart is empty</h4>
                <p style={{ margin: '0 0 20px', fontSize: '13px', color: 'var(--slate)' }}>
                  Explore our pre-printed catalog to add desk decor, lamps, or sacred idols.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-lime"
                  style={{ fontSize: '12px' }}
                >
                  Browse Shop &rarr;
                </button>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 0',
                        borderBottom: '1px solid var(--line)',
                        gap: '12px'
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block', marginBottom: '2px' }}>
                          {item.name}
                        </strong>
                        {item.meta && (
                          <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block', marginBottom: '4px' }}>
                            {item.meta}
                          </span>
                        )}
                        <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--green-ink)' }}>
                          ₹{item.price * item.qty}
                          {item.qty > 1 && <span style={{ fontSize: '11px', color: 'var(--slate)', fontWeight: 500 }}> (₹{item.price} each)</span>}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '6px', background: 'var(--surface-alt)' }}>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, -1)}
                            style={{ padding: '4px 8px', fontSize: '14px', fontWeight: 800 }}
                          >
                            &minus;
                          </button>
                          <span style={{ padding: '0 8px', fontSize: '12px', fontWeight: 700 }}>
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, 1)}
                            style={{ padding: '4px 8px', fontSize: '14px', fontWeight: 800 }}
                          >
                            &#43;
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          style={{ color: '#EF4444', padding: '6px' }}
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Subtotal & Action */}
                <div style={{ padding: '20px 24px', background: 'var(--surface-alt)', borderTop: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
                    <span style={{ color: 'var(--slate)' }}>Items Subtotal</span>
                    <strong style={{ color: 'var(--navy)' }}>₹{subtotal}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '13px' }}>
                    <span style={{ color: 'var(--slate)' }}>Bangalore Delivery</span>
                    <strong style={{ color: deliveryFee === 0 ? 'var(--green-ink)' : 'var(--navy)' }}>
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', paddingTop: '10px', borderTop: '1px solid var(--line)', fontSize: '16px' }}>
                    <strong style={{ color: 'var(--navy)' }}>Estimated Total</strong>
                    <strong style={{ color: 'var(--navy)', fontSize: '18px' }}>₹{finalTotal}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={handleProceedToShipping}
                    className="btn btn-lime"
                    style={{ width: '100%', padding: '14px', fontSize: '14px' }}
                  >
                    Proceed to Shipping &rarr;
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* STEP 2: SHIPPING DETAILS & PAYMENT SELECTION */}
        {checkoutStep === 'shipping' && (
          <form onSubmit={handleCompleteOrder} style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 73px)', padding: '24px', overflowY: 'auto' }}>
            <h4 style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Delivery Address (Bangalore Dispatch)
            </h4>

            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>Full Name *</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Rahul Sharma"
                value={customer.name}
                onChange={(e) => setCustomer(prev => ({ ...prev, name: e.target.value }))}
                style={{ width: '100%' }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>WhatsApp Phone Number *</label>
              <input
                type="tel"
                required
                className="form-input"
                placeholder="e.g. 9876543210"
                value={customer.phone}
                onChange={(e) => setCustomer(prev => ({ ...prev, phone: e.target.value }))}
                style={{ width: '100%' }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>Delivery Street Address *</label>
              <textarea
                required
                rows={2}
                className="form-input"
                placeholder="House / Flat No., Street, Landmark..."
                value={customer.address}
                onChange={(e) => setCustomer(prev => ({ ...prev, address: e.target.value }))}
                style={{ width: '100%', resize: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>City</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={customer.city}
                  onChange={(e) => setCustomer(prev => ({ ...prev, city: e.target.value }))}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>Pincode *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="560038"
                  value={customer.pincode}
                  onChange={(e) => setCustomer(prev => ({ ...prev, pincode: e.target.value }))}
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <h4 style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Choose Checkout Method
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: '8px',
                  border: paymentMethod === 'whatsapp' ? '2px solid #25D366' : '1px solid var(--line)',
                  background: paymentMethod === 'whatsapp' ? '#F0FDF4' : '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="radio"
                  name="pm"
                  checked={paymentMethod === 'whatsapp'}
                  onChange={() => setPaymentMethod('whatsapp')}
                />
                <div>
                  <strong style={{ fontSize: '13px', color: '#166534', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MessageCircle size={15} color="#25D366" /> Order Directly on WhatsApp (Fastest)
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                    Opens chat with your exact cart &amp; address prefilled. Pay 50% advance via UPI QR.
                  </span>
                </div>
              </label>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: '8px',
                  border: paymentMethod === 'upi' ? '2px solid var(--navy)' : '1px solid var(--line)',
                  background: paymentMethod === 'upi' ? 'var(--surface-alt)' : '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="radio"
                  name="pm"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>
                    Direct Online Checkout &amp; Instant Invoice
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                    Pay via UPI / Cards simulation and download official GST receipt.
                  </span>
                </div>
              </label>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="btn btn-light"
                style={{ flex: 1 }}
              >
                &larr; Back
              </button>
              <button
                type="submit"
                className={`btn ${paymentMethod === 'whatsapp' ? 'btn-whatsapp' : 'btn-lime'}`}
                style={{ flex: 2 }}
              >
                {paymentMethod === 'whatsapp' ? 'Place Order on WhatsApp' : `Pay ₹${finalTotal} Now`}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER SUCCESS / INVOICE */}
        {checkoutStep === 'success' && (
          <div style={{ padding: '32px 24px', textAlign: 'center', overflowY: 'auto' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--green-subtle)', color: 'var(--green-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ margin: '0 0 6px', fontSize: '20px', color: 'var(--navy)' }}>Order Successfully Placed!</h3>
            <p style={{ fontSize: '13px', color: 'var(--slate)', margin: '0 0 20px' }}>
              Invoice <strong>{invoiceNumber}</strong> generated on {invoiceDate}. Slicing &amp; print queue started.
            </p>

            <div style={{ background: 'var(--surface-alt)', borderRadius: '8px', padding: '16px', textAlign: 'left', fontSize: '12px', marginBottom: '24px', border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: 'var(--slate)' }}>Customer:</span>
                <strong>{customer.name} ({customer.phone})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: 'var(--slate)' }}>Shipping To:</span>
                <strong>{customer.city} - {customer.pincode}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate)' }}>Status:</span>
                <strong style={{ color: 'var(--green-ink)' }}>Queued for Dispatch (24h)</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                setCheckoutStep('cart');
              }}
              className="btn btn-dark"
              style={{ width: '100%' }}
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
