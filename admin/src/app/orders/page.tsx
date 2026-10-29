'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Filter,
  Printer,
  Truck,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  User,
  MapPin,
  Phone
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { InvoiceModal } from '@/components/InvoiceModal';
import { AdminOrder } from '@/lib/adminData';

export default function OrdersManagementPage() {
  const { orders, updateOrderStatus, printers } = useAdminData();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState<AdminOrder | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter(o => {
    const matchesStatus = statusFilter === 'all' || o.orderStatus === statusFilter;
    const matchesSearch = o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.customerPhone.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const STATUS_OPTIONS: AdminOrder['orderStatus'][] = [
    'Pending',
    'Slicing',
    'In Print Queue',
    'Quality Inspected',
    'Dispatched',
    'Delivered'
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Store Fulfillment &bull; Live Queue
          </span>
          <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: 0 }}>
            Store Orders &amp; Dispatch Pipeline
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--slate)' }}>
            Track client store orders from slicing queue to local courier dispatch.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '14px', padding: '16px 20px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        {/* Status Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Orders' },
            { id: 'Pending', label: 'Pending Slicing' },
            { id: 'In Print Queue', label: 'Printing' },
            { id: 'Quality Inspected', label: 'Inspected' },
            { id: 'Dispatched', label: 'Dispatched' },
            { id: 'Delivered', label: 'Delivered' }
          ].map(st => (
            <button
              key={st.id}
              type="button"
              onClick={() => setStatusFilter(st.id)}
              className={`btn btn-sm ${statusFilter === st.id ? 'btn-dark' : 'btn-light'}`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={15} color="var(--slate)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search Order ID, name, phone..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ width: '100%', paddingLeft: '34px', fontSize: '12.5px' }}
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID &amp; Date</th>
              <th>Customer &amp; Delivery Address</th>
              <th>Items Ordered</th>
              <th>Total &amp; Payment</th>
              <th>Fulfillment Status</th>
              <th>Printer Assigned</th>
              <th style={{ textAlign: 'right' }}>Tax Invoice</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                {/* Order ID */}
                <td>
                  <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                    {order.id}
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                    {order.date}
                  </span>
                </td>

                {/* Customer */}
                <td style={{ maxWidth: '240px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>
                    {order.customerName}
                  </strong>
                  <span style={{ fontSize: '12px', color: 'var(--slate-dark)', display: 'block' }}>
                    {order.customerPhone}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block', marginTop: '2px', lineHeight: 1.4 }}>
                    {order.shippingAddress}, {order.city} - {order.pincode}
                  </span>
                  {order.notes && (
                    <span style={{ fontSize: '11px', color: 'var(--amber)', display: 'block', marginTop: '2px', fontWeight: 600 }}>
                      Note: {order.notes}
                    </span>
                  )}
                </td>

                {/* Items */}
                <td style={{ minWidth: '220px' }}>
                  {order.items.map((item, idx) => (
                    <div key={idx} style={{ marginBottom: '6px' }}>
                      <strong style={{ fontSize: '12.5px', color: 'var(--navy)' }}>
                        {item.qty}× {item.name}
                      </strong>
                      {item.variant && (
                        <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block' }}>
                          Finish: {item.variant}
                        </span>
                      )}
                    </div>
                  ))}
                </td>

                {/* Amount & Payment */}
                <td>
                  <strong style={{ fontSize: '16px', color: 'var(--navy)', display: 'block' }}>
                    ₹{order.grandTotal}
                  </strong>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                    <span className={`badge ${order.paymentStatus === 'Paid' ? 'badge-emerald' : 'badge-amber'}`}>
                      {order.paymentStatus}
                    </span>
                    <span className="badge badge-slate" style={{ fontSize: '10px' }}>
                      {order.paymentMethod}
                    </span>
                  </div>
                </td>

                {/* Status Selector */}
                <td>
                  <select
                    value={order.orderStatus}
                    onChange={e => updateOrderStatus(order.id, e.target.value as AdminOrder['orderStatus'])}
                    className="form-select"
                    style={{
                      fontSize: '12px',
                      padding: '6px 10px',
                      fontWeight: 700,
                      background:
                        order.orderStatus === 'Delivered'
                          ? 'var(--green-subtle)'
                          : order.orderStatus === 'Dispatched'
                          ? 'var(--sky-subtle)'
                          : '#FFFFFF'
                    }}
                  >
                    {STATUS_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Printer Assigned */}
                <td>
                  <select
                    value={order.printAssignedTo || ''}
                    onChange={e => updateOrderStatus(order.id, order.orderStatus, e.target.value)}
                    className="form-select"
                    style={{ fontSize: '11px', padding: '5px 8px', maxWidth: '170px' }}
                  >
                    <option value="">Unassigned</option>
                    {printers.map(p => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Action: Invoice */}
                <td style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedInvoiceOrder(order)}
                    className="btn btn-light btn-sm"
                  >
                    <FileText size={13} /> GST Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invoice Modal */}
      {selectedInvoiceOrder && (
        <InvoiceModal order={selectedInvoiceOrder} onClose={() => setSelectedInvoiceOrder(null)} />
      )}
    </div>
  );
}
