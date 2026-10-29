'use client';

import React, { useState } from 'react';
import {
  FileCode,
  Search,
  MessageCircle,
  FileCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Edit2,
  Layers,
  Send
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { CustomEnquiry } from '@/lib/adminData';

export default function CustomEnquiriesPage() {
  const { enquiries, updateEnquiryStatus } = useAdminData();
  const [searchQuery, setSearchQuery] = useState('');
  const [editingQuoteId, setEditingQuoteId] = useState<string | null>(null);
  const [quoteVal, setQuoteVal] = useState<number>(0);

  const filteredEnquiries = enquiries.filter(e => {
    return (
      e.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.materialRequested.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.fileAttachmentName && e.fileAttachmentName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleStartEditQuote = (enq: CustomEnquiry) => {
    setEditingQuoteId(enq.id);
    setQuoteVal(enq.quotedPrice || 0);
  };

  const handleSaveQuote = (id: string, currentStatus: CustomEnquiry['status']) => {
    updateEnquiryStatus(id, currentStatus === 'New Quote' ? 'Quote Sent' : currentStatus, quoteVal);
    setEditingQuoteId(null);
  };

  const STATUS_OPTIONS: CustomEnquiry['status'][] = [
    'New Quote',
    'CAD Reviewing',
    'Quote Sent',
    'Approved',
    'Printing',
    'Completed'
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Custom 3D Printing &bull; CAD Consultation
          </span>
          <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: 0 }}>
            Bespoke Quotes &amp; CAD Submissions
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--slate)' }}>
            Client files uploaded from /custom with automated Google Sheets sync and direct WhatsApp replies.
          </p>
        </div>

        {/* Google Sheets Live Status */}
        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
          <span style={{ fontSize: '12px', color: 'var(--navy)', fontWeight: 700 }}>
            Google Sheets Synced
          </span>
          <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
            (Auto-Appended via Webhook)
          </span>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '14px', padding: '14px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '360px' }}>
          <Search size={15} color="var(--slate)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search by client, material, or CAD file name..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ width: '100%', paddingLeft: '34px', fontSize: '12.5px' }}
          />
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Quote Reference</th>
              <th>Client / Company</th>
              <th>3D CAD Attachment</th>
              <th>Material &amp; Scope</th>
              <th>Quoted Estimate</th>
              <th>Review Status</th>
              <th style={{ textAlign: 'right' }}>WhatsApp Consultation</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnquiries.map(enq => {
              const cleanPhone = enq.customerPhone.replace(/[^0-9]/g, '');
              const whatsappMessage = `Hi ${enq.customerName}, Akshay from Namma 3D Lab here! Regarding your custom 3D printing enquiry #${enq.id} (${enq.fileAttachmentName || 'Design'} in ${enq.materialRequested}): ${enq.quotedPrice ? `We have reviewed your geometry and the estimated cost is ₹${enq.quotedPrice}.` : 'We are reviewing your CAD model.'} Let us know if you would like to proceed with the print queue!`;

              return (
                <tr key={enq.id}>
                  {/* Quote Reference */}
                  <td>
                    <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                      {enq.id}
                    </strong>
                    <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                      {enq.date}
                    </span>
                  </td>

                  {/* Client */}
                  <td>
                    <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>
                      {enq.customerName}
                    </strong>
                    <span style={{ fontSize: '12px', color: 'var(--slate-dark)', display: 'block' }}>
                      {enq.customerPhone}
                    </span>
                    {enq.customerEmail && (
                      <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block' }}>
                        {enq.customerEmail}
                      </span>
                    )}
                  </td>

                  {/* CAD File */}
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FileCode size={18} color="var(--green-ink)" />
                      <div>
                        <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, color: 'var(--navy)' }}>
                          {enq.fileAttachmentName || 'Design Consultation'}
                        </span>
                        <span style={{ display: 'block', fontSize: '11px', color: 'var(--slate)' }}>
                          {enq.fileSize} &bull; Qty: {enq.quantity}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Material & Project Specs */}
                  <td style={{ maxWidth: '260px' }}>
                    <strong style={{ fontSize: '12px', color: 'var(--navy)', display: 'block' }}>
                      {enq.materialRequested}
                    </strong>
                    {enq.estimatedGrams && (
                      <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block' }}>
                        Est. Mass: ~{enq.estimatedGrams}g
                      </span>
                    )}
                    <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--slate-dark)', lineHeight: 1.4 }}>
                      {enq.projectDetails}
                    </p>
                  </td>

                  {/* Quoted Price */}
                  <td>
                    {editingQuoteId === enq.id ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700 }}>₹</span>
                        <input
                          type="number"
                          value={quoteVal}
                          onChange={e => setQuoteVal(Number(e.target.value))}
                          className="form-input"
                          style={{ width: '80px', padding: '4px 8px', fontSize: '13px' }}
                        />
                        <button
                          type="button"
                          onClick={() => handleSaveQuote(enq.id, enq.status)}
                          className="btn btn-lime btn-sm"
                          style={{ padding: '4px 8px' }}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ fontSize: '15px', color: enq.quotedPrice ? 'var(--navy)' : 'var(--amber)' }}>
                          {enq.quotedPrice ? `₹${enq.quotedPrice}` : 'Reviewing'}
                        </strong>
                        <button
                          type="button"
                          onClick={() => handleStartEditQuote(enq)}
                          style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer', padding: '2px' }}
                          title="Set Quoted Price"
                        >
                          <Edit2 size={13} />
                        </button>
                      </div>
                    )}
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    <select
                      value={enq.status}
                      onChange={e => updateEnquiryStatus(enq.id, e.target.value as CustomEnquiry['status'])}
                      className="form-select"
                      style={{ fontSize: '12px', padding: '6px 10px', fontWeight: 700 }}
                    >
                      {STATUS_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* WhatsApp Action */}
                  <td style={{ textAlign: 'right' }}>
                    <a
                      href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lime btn-sm"
                    >
                      <MessageCircle size={14} /> Send WhatsApp Quote
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
