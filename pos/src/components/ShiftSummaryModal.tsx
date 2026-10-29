'use client';

import React from 'react';
import { X, DollarSign, TrendingUp, Download, RotateCcw, Award, CheckCircle } from 'lucide-react';
import { usePOS } from '@/context/POSContext';

interface ShiftSummaryModalProps {
  onClose: () => void;
}

export function ShiftSummaryModal({ onClose }: ShiftSummaryModalProps) {
  const { shift, transactions, resetAllTransactions } = usePOS();

  const totalRevenue = transactions.reduce((sum, tx) => sum + tx.totalAmount, 0);
  const upiTransactions = transactions.filter(tx => tx.paymentMethod === 'UPI');
  const cashTransactions = transactions.filter(tx => tx.paymentMethod === 'CASH');

  const totalUPI = upiTransactions.reduce((sum, tx) => sum + tx.totalAmount, 0);
  const totalCash = cashTransactions.reduce((sum, tx) => sum + tx.totalAmount, 0);
  const totalCashInDrawer = totalCash + shift.openingCashFloat;

  // Aggregate product counts
  const productSalesMap: { [name: string]: { qty: number; revenue: number } } = {};
  transactions.forEach(tx => {
    tx.items.forEach(item => {
      if (!productSalesMap[item.name]) {
        productSalesMap[item.name] = { qty: 0, revenue: 0 };
      }
      productSalesMap[item.name].qty += item.qty;
      productSalesMap[item.name].revenue += item.price * item.qty;
    });
  });

  const sortedProducts = Object.entries(productSalesMap).sort((a, b) => b[1].qty - a[1].qty);

  const handleDownloadCSV = () => {
    const headers = 'Order ID,Timestamp,Payment Method,Total Amount,Items\n';
    const rows = transactions
      .map(
        tx =>
          `"${tx.id}","${tx.timestamp}","${tx.paymentMethod}",${tx.totalAmount},"${tx.items.map(i => `${i.qty}x ${i.name}`).join('; ')}"`
      )
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Stall_Sales_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pos-modal-overlay" onClick={onClose}>
      <div className="pos-modal-window" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>End-of-Day Stall Settlement</h3>
            <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
              {shift.stallName} &bull; Started at {shift.startedAt}
            </span>
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
        <div style={{ padding: '24px' }}>
          
          {/* Revenue KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
            
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
                Total Fest Sales
              </span>
              <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--navy)', margin: '4px 0' }}>
                ₹{totalRevenue}
              </div>
              <span style={{ fontSize: '11px', color: 'var(--slate)' }}>{transactions.length} Transactions</span>
            </div>

            <div style={{ background: 'var(--green-subtle)', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
                UPI Received
              </span>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#166534', margin: '4px 0' }}>
                ₹{totalUPI}
              </div>
              <span style={{ fontSize: '11px', color: '#166534' }}>{upiTransactions.length} Instant Scans</span>
            </div>

            <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#92400E', textTransform: 'uppercase' }}>
                Cash in Drawer
              </span>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#92400E', margin: '4px 0' }}>
                ₹{totalCashInDrawer}
              </div>
              <span style={{ fontSize: '10px', color: '#92400E' }}>
                (₹{totalCash} sales + ₹{shift.openingCashFloat} float)
              </span>
            </div>

          </div>

          {/* Product Sales Breakdown */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Items Sold Today ({sortedProducts.reduce((sum, p) => sum + p[1].qty, 0)} Units)
            </h4>

            {sortedProducts.length === 0 ? (
              <p style={{ fontSize: '13px', color: 'var(--slate)', textAlign: 'center', padding: '20px 0' }}>
                No items sold yet in this session.
              </p>
            ) : (
              <div style={{ maxHeight: '180px', overflowY: 'auto', border: '1px solid var(--line)', borderRadius: '10px', background: '#FFFFFF' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                  <thead style={{ background: 'var(--surface-alt)', borderBottom: '1px solid var(--line)', color: 'var(--slate)' }}>
                    <tr>
                      <th style={{ padding: '8px 12px' }}>Product</th>
                      <th style={{ padding: '8px 12px', textAlign: 'center' }}>Qty</th>
                      <th style={{ padding: '8px 12px', textAlign: 'right' }}>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedProducts.map(([name, data], idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--line)' }}>
                        <td style={{ padding: '8px 12px', fontWeight: 600 }}>{name}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 700 }}>{data.qty}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 700 }}>₹{data.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={handleDownloadCSV}
              className="btn btn-dark"
              style={{ flex: 1 }}
            >
              <Download size={15} /> Export Sales CSV
            </button>
            <button
              type="button"
              onClick={() => {
                if (confirm('Are you sure you want to close and reset today\'s register?')) {
                  resetAllTransactions();
                  onClose();
                }
              }}
              className="btn btn-danger"
              style={{ flex: 1 }}
            >
              <RotateCcw size={15} /> Close &amp; Reset Shift
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
