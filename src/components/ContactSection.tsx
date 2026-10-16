'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Custom 3D Printing (STL File)');
  const [message, setMessage] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your name and WhatsApp number.');
      return;
    }

    const payload = `Hi Namma 3D Lab,\nI have a direct manufacturing inquiry:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Required Service: ${service}\n` +
      `• Project Details: "${message || 'Standard Inquiry'}"\n` +
      `Please connect me with a lab technician.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(payload)}`, '_blank');
  };

  return (
    <section className="section-wrap" id="contact" style={{ background: '#FFFFFF' }}>
      <div className="section-head">
        <span className="eyebrow lime">Direct Lab Access</span>
        <h2>Bring your design to life.<br /><em>Start a conversation today.</em></h2>
        <p>
          Drop by our Bangalore additive facility or connect directly with an engineer on WhatsApp for instant project scoping, CAD review, and material selection.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Info Card */}
        <div className="contact-card">
          <span className="eyebrow lime">Facility Details</span>
          <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: '6px 0 16px' }}>Bangalore Rapid Prototyping Lab</h3>
          <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.6 }}>
            Centrally situated in Indiranagar to serve startups, hardware engineers, automotive innovators, and creators across the Bangalore ecosystem.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <MapPin size={18} />
              <div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>Lab Address</strong>
                <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
                  100ft Road, HAL 2nd Stage, Indiranagar, Bangalore, Karnataka &bull; PIN 560038
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone size={18} />
              <div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>Direct WhatsApp &amp; Call</strong>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: 'var(--green-ink)', fontWeight: 700 }}>
                  +91 98765 43210 (Instant Reply)
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <Mail size={18} />
              <div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>Official Inquiries &amp; POs</strong>
                <a href="mailto:hello@namma3dlab.in" style={{ fontSize: '12px', color: 'var(--navy)' }}>
                  hello@namma3dlab.in
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <Clock size={18} />
              <div>
                <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>Operating Hours</strong>
                <span style={{ fontSize: '12px', color: 'var(--slate)' }}>
                  Monday – Saturday: 9:00 AM – 9:00 PM IST &bull; 24/7 Farm Automated Runs
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
            <a
              href="https://wa.me/919876543210?text=Hi%20Namma%203D%20Lab%2C%20I%20want%20to%20chat%20with%20an%20engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageSquare size={16} /> Chat Directly on WhatsApp
            </a>
          </div>
        </div>

        {/* Direct Inquiry Form */}
        <div className="contact-card">
          <span className="eyebrow lime">Quick Engineering Request</span>
          <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: '6px 0 16px' }}>Send Project Requirements</h3>

          <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                Your Name *
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Akshay Kumar"
                  style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
                WhatsApp Phone Number *
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                />
              </label>
            </div>

            <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
              Service Category
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px', background: '#FFFFFF' }}
              >
                <option value="Custom 3D Printing (STL File)">Custom 3D Printing (Have STL/OBJ File)</option>
                <option value="CAD Modeling & Reverse Engineering">CAD Modeling &amp; Reverse Engineering (From Sketch/Broken Part)</option>
                <option value="Bulk B2B Batch Run">Bulk B2B Batch Production (10 to 1,000 units)</option>
                <option value="Personalized Gift / Nameplate">Personalized Gift or Executive Desk Plaque</option>
                <option value="SLA High-Detail Resin">SLA High-Detail Resin (0.05mm Master Model)</option>
              </select>
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '4px' }}>
              Project Scope / Dimensions / Material Notes
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention any specific requirements, tolerances, target delivery date, or link to your Google Drive / CAD files..."
                style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px', fontFamily: 'inherit' }}
              />
            </label>

            <button type="submit" className="btn btn-lime" style={{ marginTop: '6px' }}>
              Submit Request to Lab Team <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
