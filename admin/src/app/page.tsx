'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShoppingBag,
  FileCode,
  Printer,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Plus,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Flame,
  Layers
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { InvoiceModal } from '@/components/InvoiceModal';
import { AdminOrder } from '@/lib/adminData';
import { AddProductModal } from '@/components/AddProductModal';

export default function AdminDashboardPage() {
  const { products, orders, enquiries, printers, updateOrderStatus } = useAdminData();
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState<AdminOrder | null>(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const totalRevenue = orders.reduce((sum, o) => sum + o.grandTotal, 0);
  const pendingOrders = orders.filter(o => o.orderStatus === 'Pending' || o.orderStatus === 'Slicing' || o.orderStatus === 'In Print Queue');
  const activePrinters = printers.filter(p => p.status === 'Printing');

  return (
    <div>
      
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Mission Control &bull; Live Telemetry
          </span>
          <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: 0 }}>
            Lab Operations Dashboard
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--slate)' }}>
            Overview of store orders, custom CAD quotes, inventory, and automated 3D print fleet.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setIsAddProductOpen(true)}
            className="btn btn-lime"
          >
            <Plus size={16} /> Add Product
          </button>
          <Link href="/orders" className="btn btn-dark">
            Manage Orders &rarr;
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
        
        {/* Card 1: Revenue */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '22px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Store Revenue
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--green-subtle)', color: 'var(--green-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            ₹{totalRevenue.toLocaleString('en-IN')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--green-ink)', fontWeight: 700 }}>
            <ArrowUpRight size={14} /> +18.4% from last week
          </div>
        </div>

        {/* Card 2: Orders in Queue */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '22px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Active Store Orders
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--amber-subtle)', color: 'var(--amber)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingBag size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            {orders.length} <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--slate)' }}>({pendingOrders.length} in queue)</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--slate)' }}>
            Average Bangalore dispatch: <strong>24h</strong>
          </div>
        </div>

        {/* Card 3: Custom Enquiries */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '22px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Custom CAD Quotes
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--sky-subtle)', color: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileCode size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            {enquiries.length} Quotes
          </div>
          <div style={{ fontSize: '12px', color: 'var(--green-ink)', fontWeight: 700 }}>
            Synced with Google Sheets &bull; Active
          </div>
        </div>

        {/* Card 4: Farm Fleet Status */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '22px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              3D Print Farm Fleet
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(141, 198, 63, 0.2)', color: 'var(--lime-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Printer size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            {activePrinters.length} / {printers.length}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--slate)' }}>
            CoreXY &amp; SLA Resins operational
          </div>
        </div>

      </div>

      {/* Main Grid: Orders & Print Fleet */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Recent Store Orders Section */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>Recent Store Orders</h3>
              <span style={{ fontSize: '12px', color: 'var(--slate)' }}>Direct client orders pending slicing or dispatch</span>
            </div>
            <Link href="/orders" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-ink)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All Orders <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {orders.slice(0, 4).map((order) => {
              const isPending = order.orderStatus === 'Pending' || order.orderStatus === 'In Print Queue';
              return (
                <div
                  key={order.id}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    background: '#FFFFFF'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <strong style={{ fontSize: '14px', color: 'var(--navy)' }}>{order.id}</strong>
                      <span
                        className={`badge ${
                          order.orderStatus === 'Delivered'
                            ? 'badge-emerald'
                            : order.orderStatus === 'In Print Queue'
                            ? 'badge-lime'
                            : order.orderStatus === 'Dispatched'
                            ? 'badge-sky'
                            : 'badge-amber'
                        }`}
                      >
                        {order.orderStatus}
                      </span>
                      <span className="badge badge-slate" style={{ fontSize: '10px' }}>
                        {order.paymentMethod}
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', color: 'var(--slate-dark)' }}>
                      <strong>{order.customerName}</strong> ({order.customerPhone}) &bull; {order.city}
                    </div>

                    <div style={{ fontSize: '11px', color: 'var(--slate)', marginTop: '2px' }}>
                      {order.items.map(i => `${i.qty}× ${i.name}`).join(', ')}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>₹{order.grandTotal}</strong>
                    
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => setSelectedInvoiceOrder(order)}
                        className="btn btn-light btn-sm"
                        style={{ fontSize: '11px', padding: '4px 8px' }}
                      >
                        Invoice
                      </button>

                      {order.orderStatus === 'In Print Queue' && (
                        <button
                          type="button"
                          onClick={() => updateOrderStatus(order.id, 'Dispatched')}
                          className="btn btn-lime btn-sm"
                          style={{ fontSize: '11px', padding: '4px 8px' }}
                        >
                          Mark Dispatched
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live 3D Printer Farm Queue */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>Live 3D Print Farm</h3>
              <span style={{ fontSize: '12px', color: 'var(--slate)' }}>Connected Bambu Lab &amp; SLA machines</span>
            </div>
            <Link href="/fleet" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-ink)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Fleet Telemetry <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {printers.slice(0, 3).map((printer) => {
              const isPrinting = printer.status === 'Printing';
              return (
                <div
                  key={printer.id}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    padding: '16px',
                    background: isPrinting ? 'var(--surface-alt)' : '#FFFFFF'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div>
                      <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>
                        {printer.name}
                      </strong>
                      <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                        {printer.type} &bull; {printer.filamentType} ({printer.filamentColor})
                      </span>
                    </div>
                    <span
                      className={`badge ${
                        printer.status === 'Printing'
                          ? 'badge-lime'
                          : printer.status === 'Idle'
                          ? 'badge-slate'
                          : 'badge-amber'
                      }`}
                    >
                      {printer.status}
                    </span>
                  </div>

                  {isPrinting && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--slate-dark)', marginBottom: '4px' }}>
                        <span>Job: <strong>{printer.currentJob}</strong></span>
                        <strong>{printer.currentProgress}% ({printer.timeRemaining} left)</strong>
                      </div>
                      
                      {/* Progress Bar */}
                      <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${printer.currentProgress}%`,
                            height: '100%',
                            background: 'var(--lime-dark)',
                            borderRadius: '4px',
                            transition: 'width 0.3s'
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontSize: '11px', color: 'var(--slate)' }}>
                        <span>Nozzle: <strong>{printer.nozzleTemp}°C</strong></span>
                        <span>Bed: <strong>{printer.bedTemp}°C</strong></span>
                        <span>Spool: <strong>{printer.filamentRemainingPercent}%</strong></span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bespoke CAD Enquiries Strip */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>Custom 3D Printing &amp; Bespoke CAD Quotes</h3>
            <span style={{ fontSize: '12px', color: 'var(--slate)' }}>Direct client submissions uploaded from /custom with STL attachments</span>
          </div>
          <Link href="/custom-enquiries" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-ink)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            View All Quotes <ChevronRight size={14} />
          </Link>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Quote ID</th>
                <th>Client / Organization</th>
                <th>CAD Attachment</th>
                <th>Material &amp; Infill</th>
                <th>Est. Quote</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => (
                <tr key={enq.id}>
                  <td>
                    <strong style={{ color: 'var(--navy)' }}>{enq.id}</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--slate)' }}>{enq.date}</span>
                  </td>
                  <td>
                    <strong>{enq.customerName}</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--slate)' }}>{enq.customerPhone}</span>
                  </td>
                  <td>
                    <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--green-ink)' }}>
                      {enq.fileAttachmentName || 'Design Consultation'}
                    </span>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--slate)' }}>{enq.fileSize} &bull; Qty: {enq.quantity}</span>
                  </td>
                  <td>
                    <span>{enq.materialRequested}</span>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--slate)' }}>~{enq.estimatedGrams}g mass</span>
                  </td>
                  <td>
                    <strong style={{ fontSize: '14px', color: 'var(--navy)' }}>
                      {enq.quotedPrice ? `₹${enq.quotedPrice}` : 'Needs Review'}
                    </strong>
                  </td>
                  <td>
                    <span className={`badge ${enq.status === 'Approved' ? 'badge-emerald' : enq.status === 'Quote Sent' ? 'badge-sky' : 'badge-amber'}`}>
                      {enq.status}
                    </span>
                  </td>
                  <td>
                    <a
                      href={`https://wa.me/${enq.customerPhone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(enq.customerName)}%2C%20following%20up%20on%20your%20custom%203D%20printing%20enquiry%20%23${enq.id}%20from%20Namma%203D%20Lab`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lime btn-sm"
                      style={{ fontSize: '11px' }}
                    >
                      <MessageCircle size={13} /> Chat on WhatsApp
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Modal */}
      {selectedInvoiceOrder && (
        <InvoiceModal order={selectedInvoiceOrder} onClose={() => setSelectedInvoiceOrder(null)} />
      )}

      {/* Add Product Modal */}
      {isAddProductOpen && (
        <AddProductModal onClose={() => setIsAddProductOpen(false)} />
      )}

    </div>
  );
}
