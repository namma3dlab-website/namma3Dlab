'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  QrCode,
  Banknote,
  DollarSign,
  TrendingUp,
  MapPin,
  Layers,
  Sparkles,
  Edit2,
  RotateCcw,
  Store,
  CheckCircle2,
  Search
} from 'lucide-react';
import { usePOS } from '@/context/POSContext';
import { POSProduct, POSTransaction } from '@/lib/posData';
import { UPIPaymentModal } from '@/components/UPIPaymentModal';
import { CashPaymentModal } from '@/components/CashPaymentModal';
import { ReceiptModal } from '@/components/ReceiptModal';
import { ShiftSummaryModal } from '@/components/ShiftSummaryModal';

export default function POSTerminalPage() {
  const {
    products,
    cart,
    transactions,
    shift,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    addCustomItem,
    subtotal,
    totalItemsCount,
    updateShift
  } = usePOS();

  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customName, setCustomName] = useState('');
  const [customPrice, setCustomPrice] = useState<number | ''>('');

  // Payment & Receipts Modals
  const [isUPIOpen, setIsUPIOpen] = useState(false);
  const [isCashOpen, setIsCashOpen] = useState(false);
  const [activeReceipt, setActiveReceipt] = useState<POSTransaction | null>(null);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isEditingVenue, setIsEditingVenue] = useState(false);
  const [venueInput, setVenueInput] = useState(shift.stallName);

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const totalDayRevenue = transactions.reduce((sum, tx) => sum + tx.totalAmount, 0);

  const handlePaymentSuccess = (tx: POSTransaction) => {
    setIsUPIOpen(false);
    setIsCashOpen(false);
    setActiveReceipt(tx);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customPrice && Number(customPrice) > 0) {
      addCustomItem(customName || 'Custom 3D Print / Token', Number(customPrice));
      setCustomName('');
      setCustomPrice('');
    }
  };

  const handleSaveVenue = (e: React.FormEvent) => {
    e.preventDefault();
    if (venueInput.trim()) {
      updateShift({ stallName: venueInput.trim() });
    }
    setIsEditingVenue(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      
      {/* Top Stall Bar */}
      <header
        style={{
          background: 'var(--navy)',
          color: '#FFFFFF',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
          borderBottom: '1px solid #1E293B'
        }}
      >
        {/* Left: Branding & Stall Venue */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A0D14' }}>
            <Layers size={18} strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <strong style={{ fontSize: '15px', color: '#FFFFFF' }}>Namma 3D Lab</strong>
              <span style={{ fontSize: '10px', background: 'rgba(141, 198, 63, 0.25)', color: 'var(--lime)', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>
                STALL POS
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#94A3B8' }}>
              <MapPin size={12} color="var(--lime)" />
              {isEditingVenue ? (
                <form onSubmit={handleSaveVenue} style={{ display: 'inline-flex', gap: '4px' }}>
                  <input
                    type="text"
                    value={venueInput}
                    onChange={e => setVenueInput(e.target.value)}
                    className="pos-input"
                    style={{ padding: '2px 6px', fontSize: '11px', height: '22px', width: '180px' }}
                  />
                  <button type="submit" className="btn btn-lime btn-sm" style={{ padding: '2px 6px', height: '22px', fontSize: '10px' }}>
                    Save
                  </button>
                </form>
              ) : (
                <span onClick={() => setIsEditingVenue(true)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  {shift.stallName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Revenue Summary & EOD Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right', display: 'none', minWidth: '100px' }} className="pos-desktop-stat">
            <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase' }}>Shift Sales</span>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--lime)' }}>
              ₹{totalDayRevenue} ({transactions.length})
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsSummaryOpen(true)}
            className="btn btn-light btn-sm"
            style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.15)' }}
          >
            <TrendingUp size={14} color="var(--lime)" /> Day Settlement
          </button>
        </div>
      </header>

      {/* Main Terminal Workspace (Split: Catalog Left, Active Bill Right) */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        
        {/* Left Column: Product Selection Grid */}
        <div style={{ flex: '1 1 65%', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--line)', background: '#F8FAFC', minWidth: 0 }}>
          
          {/* Category Filter Pills & Search */}
          <div style={{ padding: '12px 18px', background: '#FFFFFF', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
              {[
                { id: 'all', label: 'All Items' },
                { id: 'edc', label: '₹99 Keychains' },
                { id: 'tech', label: 'Desk Organizers' },
                { id: 'decor', label: 'Vases & Lamps' },
                { id: 'sacred', label: 'Temple Idols' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: selectedCat === cat.id ? '1px solid var(--navy)' : '1px solid var(--line)',
                    background: selectedCat === cat.id ? 'var(--navy)' : '#FFFFFF',
                    color: selectedCat === cat.id ? '#FFFFFF' : 'var(--slate-dark)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: '200px' }}>
              <Search size={14} color="var(--slate)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pos-input"
                style={{ width: '100%', paddingLeft: '30px', fontSize: '12px', height: '32px' }}
              />
            </div>
          </div>

          {/* Catalog Grid */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '14px' }}>
              {filteredProducts.map(product => {
                const inCart = cart.find(ci => ci.id === product.id);
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => addToCart(product)}
                    style={{
                      background: '#FFFFFF',
                      border: inCart ? '2px solid var(--lime-dark)' : '1px solid var(--line)',
                      borderRadius: '12px',
                      padding: '10px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 8px rgba(10, 13, 20, 0.04)',
                      transition: 'all 0.15s ease',
                      position: 'relative'
                    }}
                  >
                    {inCart && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          background: 'var(--lime)',
                          color: '#0A0D14',
                          fontWeight: 900,
                          fontSize: '11px',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                        }}
                      >
                        {inCart.qty}
                      </span>
                    )}

                    <div style={{ width: '100%', aspectRatio: '1.2', borderRadius: '8px', overflow: 'hidden', background: '#F1F5F9', marginBottom: '8px' }}>
                      {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: product.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                          <Sparkles size={20} />
                        </div>
                      )}
                    </div>

                    <div>
                      <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block', lineHeight: 1.25, marginBottom: '4px' }}>
                        {product.name}
                      </strong>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ fontSize: '15px', color: 'var(--navy)' }}>₹{product.price}</strong>
                        <span style={{ fontSize: '10px', color: 'var(--slate)', fontWeight: 600 }}>
                          {product.stockQty} left
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Custom Token / Print Bar */}
          <form
            onSubmit={handleAddCustom}
            style={{
              padding: '12px 18px',
              background: '#FFFFFF',
              borderTop: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Custom / MISC:
            </span>
            <input
              type="text"
              placeholder="Item name (e.g. Custom Keychain)"
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              className="pos-input"
              style={{ flex: 1, fontSize: '12px', height: '34px' }}
            />
            <input
              type="number"
              placeholder="Price ₹"
              value={customPrice}
              onChange={e => setCustomPrice(e.target.value === '' ? '' : Number(e.target.value))}
              className="pos-input"
              style={{ width: '90px', fontSize: '12px', height: '34px', fontWeight: 700 }}
            />
            <button type="submit" className="btn btn-dark btn-sm" style={{ height: '34px' }}>
              <Plus size={14} /> Add
            </button>
          </form>

        </div>

        {/* Right Column: Active Bill & Payment Trays */}
        <div style={{ flex: '0 0 35%', display: 'flex', flexDirection: 'column', background: '#FFFFFF', minWidth: '320px' }}>
          
          {/* Bill Header */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>
                Active Bill ({totalItemsCount} items)
              </strong>
              <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                Order #{String(transactions.length + 1).padStart(3, '0')}
              </span>
            </div>

            {cart.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                style={{ background: 'none', border: 'none', color: '#DC2626', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Trash2 size={13} /> Clear
              </button>
            )}
          </div>

          {/* Cart Items List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 18px' }}>
            {cart.length === 0 ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-light)', textAlign: 'center', padding: '20px' }}>
                <ShoppingBag size={42} strokeWidth={1.5} style={{ marginBottom: '12px' }} />
                <strong style={{ fontSize: '14px', color: 'var(--navy)' }}>Cart is Empty</strong>
                <p style={{ fontSize: '12px', color: 'var(--slate)', margin: '4px 0 0' }}>
                  Tap any 3D printed product on the left to add it to this bill.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cart.map(item => (
                  <div
                    key={item.id}
                    style={{
                      borderBottom: '1px solid var(--line)',
                      paddingBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ flex: 1, paddingRight: '8px' }}>
                      <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block', lineHeight: 1.2 }}>
                        {item.name}
                      </strong>
                      <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
                        ₹{item.price} each
                      </span>
                    </div>

                    {/* Stepper */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '6px', background: '#FFFFFF' }}>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-dark)' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ width: '26px', textAlign: 'center', fontSize: '13px', fontWeight: 800 }}>
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-dark)' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <strong style={{ fontSize: '14px', color: 'var(--navy)', minWidth: '48px', textAlign: 'right' }}>
                        ₹{item.price * item.qty}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payment Actions Footer */}
          <div style={{ padding: '18px 20px', borderTop: '2px solid var(--line)', background: '#F8FAFC' }}>
            
            {/* Total Payable Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
                Total Payable
              </span>
              <strong style={{ fontSize: '32px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                ₹{subtotal}
              </strong>
            </div>

            {/* Quick Checkout Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => setIsUPIOpen(true)}
                className="btn btn-lime"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '15px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  borderRadius: '12px',
                  opacity: cart.length === 0 ? 0.4 : 1,
                  cursor: cart.length === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                <QrCode size={20} />
                Pay via Dynamic UPI QR
              </button>

              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => setIsCashOpen(true)}
                className="btn btn-dark"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  borderRadius: '12px',
                  opacity: cart.length === 0 ? 0.4 : 1,
                  cursor: cart.length === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                <Banknote size={20} color="var(--lime)" />
                Pay via Cash (Change Calc)
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* UPI Payment Modal */}
      {isUPIOpen && (
        <UPIPaymentModal
          amount={subtotal}
          onSuccess={handlePaymentSuccess}
          onClose={() => setIsUPIOpen(false)}
        />
      )}

      {/* Cash Payment Modal */}
      {isCashOpen && (
        <CashPaymentModal
          amount={subtotal}
          onSuccess={handlePaymentSuccess}
          onClose={() => setIsCashOpen(false)}
        />
      )}

      {/* Digital Receipt Modal */}
      {activeReceipt && (
        <ReceiptModal
          transaction={activeReceipt}
          onNextCustomer={() => setActiveReceipt(null)}
        />
      )}

      {/* End of Day Shift Summary Modal */}
      {isSummaryOpen && (
        <ShiftSummaryModal onClose={() => setIsSummaryOpen(false)} />
      )}

    </div>
  );
}
