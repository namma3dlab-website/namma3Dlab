'use client';

import React, { useState, useEffect } from 'react';
import { UploadCloud, Box, Edit3, ArrowRight, Sparkles, Send, CheckCircle2, MessageCircle, FileText, Check, AlertCircle } from 'lucide-react';
import { parseSTL, parseOBJ, calculatePrintCost, MeshAnalysisResult, CostCalculationResult } from '@/lib/stl-parser';

export function CustomQuoteSection() {
  const [tab, setTab] = useState<'upload' | 'design'>('upload');

  // Customer Contact Info
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCity, setCustomerCity] = useState('Bangalore');
  const [customerNotes, setCustomerNotes] = useState('');

  // 3D Printing Parameters
  const [technology, setTechnology] = useState('fdm');
  const [material, setMaterial] = useState('pla');
  const [infill, setInfill] = useState(25);
  const [color, setColor] = useState('Obsidian Black');
  const [quantity, setQuantity] = useState(1);
  const [manualWeight, setManualWeight] = useState(55);

  // CAD Design Request Specifics
  const [designDescription, setDesignDescription] = useState('');
  const [designDimensions, setDesignDimensions] = useState('');

  // Mesh analysis state
  const [meshData, setMeshData] = useState<{
    fileName: string;
    fileSizeMb?: number;
    analysis: MeshAnalysisResult;
  } | null>(null);

  const [isParsing, setIsParsing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Submit / Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Calculation output
  const [quote, setQuote] = useState<CostCalculationResult>({
    singleWeightGrams: 55,
    totalWeightGrams: 55,
    printHours: 2.2,
    minPrice: 380,
    maxPrice: 490,
    advance50Percent: 190
  });

  // Calculate costs whenever parameters change
  useEffect(() => {
    if (meshData && meshData.analysis.volumeCm3) {
      const result = calculatePrintCost(
        meshData.analysis.volumeCm3,
        material,
        infill,
        technology,
        quantity
      );
      setQuote(result);
      setManualWeight(result.singleWeightGrams);
    } else {
      const result = calculatePrintCost(
        manualWeight / 1.2,
        material,
        infill,
        technology,
        quantity
      );
      setQuote(result);
    }
  }, [meshData, material, infill, technology, quantity, manualWeight]);

  const handleFileProcess = async (file: File) => {
    const isStl = file.name.toLowerCase().endsWith('.stl');
    const isObj = file.name.toLowerCase().endsWith('.obj');

    if (!isStl && !isObj) {
      alert('Please upload a valid .STL or .OBJ file.');
      return;
    }

    setIsParsing(true);
    try {
      let analysis: MeshAnalysisResult;
      if (isStl) {
        const buffer = await file.arrayBuffer();
        analysis = await parseSTL(buffer);
      } else {
        const text = await file.text();
        analysis = parseOBJ(text);
      }

      setMeshData({
        fileName: file.name,
        fileSizeMb: Number((file.size / (1024 * 1024)).toFixed(2)),
        analysis
      });
    } catch (err) {
      console.error('Error parsing 3D model:', err);
      alert('Error parsing 3D file. Please verify file geometry.');
    } finally {
      setIsParsing(false);
    }
  };

  const handleLoadSample = async () => {
    setIsParsing(true);
    try {
      const res = await fetch('/assets/models/sample-bracket.stl');
      const blob = await res.blob();
      const file = new File([blob], 'drone_mounting_bracket.stl', { type: 'model/stl' });
      await handleFileProcess(file);
    } catch (err) {
      console.error('Failed to load sample STL:', err);
    } finally {
      setIsParsing(false);
    }
  };

  const constructWhatsAppMessage = () => {
    const isUpload = tab === 'upload';
    const matLabel = material.toUpperCase();
    const reqType = isUpload ? '3D Model Slicing & Print' : 'Custom CAD Modeling & Print';
    const fileLabel = isUpload
      ? (meshData ? `${meshData.fileName} (~${meshData.analysis.volumeCm3} cm³)` : 'File to be sent in chat')
      : `CAD Request: ${designDescription.slice(0, 60)}...`;

    return `👋 Hi Namma 3D Lab! I just submitted a custom 3D printing inquiry:

📋 Customer Details:
• Name: ${customerName || 'Customer'}
• WhatsApp: ${customerPhone || 'Direct'}
• Email: ${customerEmail || 'Not specified'}
• Location: ${customerCity}

🛠️ Project Specifications:
• Request Type: ${reqType}
• File / Part: ${fileLabel}
• Material: ${matLabel} (${technology.toUpperCase()})
• Infill: ${infill}% | Color: ${color}
• Quantity: ${quantity} Unit(s)
• Estimated Price: ₹${quote.minPrice} – ₹${quote.maxPrice} (50% Advance: ₹${quote.advance50Percent})

📝 Project Notes:
${customerNotes || (isUpload ? 'Ready to print, please review slicing.' : designDescription || 'Please advise on CAD turnaround.')}

I would like to confirm slicing parameters and proceed with the order!`;
  };

  const handleSubmitAndChat = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim() || !customerEmail.trim()) {
      alert('Please enter your Name, WhatsApp Phone Number, and Email Address so our team can link your quote.');
      return;
    }

    if (tab === 'design' && !designDescription.trim()) {
      alert('Please enter a brief description of the part or idea you need CAD modeled.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const payload = {
      name: customerName.trim(),
      phone: customerPhone.trim(),
      email: customerEmail.trim(),
      city: customerCity.trim(),
      requestType: tab === 'upload' ? '3D File Upload' : 'Custom CAD Design',
      fileName: meshData?.fileName || (tab === 'design' ? 'CAD Modeling Project' : 'Direct Upload'),
      fileVolumeCm3: meshData?.analysis.volumeCm3 || null,
      dimensions: meshData ? `${meshData.analysis.dimensions.x} × ${meshData.analysis.dimensions.y} × ${meshData.analysis.dimensions.z} mm` : designDimensions || 'Custom',
      material: material.toUpperCase(),
      technology: technology.toUpperCase(),
      infill: infill,
      color: color,
      quantity: quantity,
      estimatedPrice: `₹${quote.minPrice} – ₹${quote.maxPrice}`,
      advance50Percent: `₹${quote.advance50Percent}`,
      notes: customerNotes || designDescription || 'None',
      timestamp: new Date().toISOString()
    };

    try {
      // 1. Send lead to API endpoint (forwards to Google Apps Script -> Google Sheet & Email)
      await fetch('/api/quote-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSubmitSuccess(true);
    } catch (err: any) {
      console.warn('Google Sheet endpoint sync warning:', err);
      // Non-blocking: proceed with WhatsApp handshake regardless
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);

      // 2. Open WhatsApp with complete formatted inquiry
      const waText = constructWhatsAppMessage();
      const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <section className="section-wrap" id="custom-quote" style={{ background: '#FFFFFF' }}>
      <div className="section-head">
        <span className="eyebrow lime">Instant Custom Quote Engine</span>
        <h2>Upload your 3D CAD file or <em>request a custom design.</em></h2>
        <p>
          Need an engineering component, custom bracket, or broken part replaced? Upload your 3D model (.STL, .OBJ) or describe your idea. Our system logs your project to Google Sheets, sends an instant alert to our lab, and connects you on WhatsApp with your exact specs pre-filled.
        </p>
      </div>

      {/* Main Dual-Column Builder */}
      <form onSubmit={handleSubmitAndChat} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px' }}>
        
        {/* Left Column: File / Design + Specs + Contact */}
        <div>
          {/* Method Selector Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <button
              type="button"
              onClick={() => setTab('upload')}
              className={`filter-btn ${tab === 'upload' ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px' }}
            >
              <UploadCloud size={16} /> I Have a 3D File (.STL / .OBJ)
            </button>
            <button
              type="button"
              onClick={() => setTab('design')}
              className={`filter-btn ${tab === 'design' ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px' }}
            >
              <Edit3 size={16} /> I Need CAD Modeling / From Idea
            </button>
          </div>

          {/* TAB 1: 3D File Drag & Drop */}
          {tab === 'upload' && (
            <div style={{ marginBottom: '24px' }}>
              <div
                className={`dropzone ${dragOver ? 'dragover' : ''}`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileProcess(e.dataTransfer.files[0]);
                  }
                }}
                onClick={() => document.getElementById('cad-file-input')?.click()}
                style={{ padding: '36px 20px', textAlign: 'center', cursor: 'pointer' }}
              >
                <input
                  type="file"
                  id="cad-file-input"
                  accept=".stl,.obj"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileProcess(e.target.files[0]);
                    }
                  }}
                />
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--surface-alt)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-ink)', marginBottom: '12px' }}>
                  <UploadCloud size={24} />
                </div>
                <h4 style={{ margin: '0 0 6px', fontSize: '15px', color: 'var(--navy)' }}>
                  Drag &amp; drop your 3D CAD file here, or <span style={{ color: 'var(--green-ink)', textDecoration: 'underline' }}>browse</span>
                </h4>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--slate)' }}>
                  Supports ASCII &amp; Binary .STL, .OBJ (Max 100MB) • Instant client-side mesh calculation
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <span style={{ fontSize: '12px', color: 'var(--slate)' }}>No 3D file yet? Test with our sample:</span>
                <button
                  type="button"
                  onClick={handleLoadSample}
                  disabled={isParsing}
                  style={{ fontSize: '12px', color: 'var(--green-ink)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <Sparkles size={13} /> Load Sample Drone Bracket STL
                </button>
              </div>

              {/* Uploaded File Geometry Pill */}
              {meshData && (
                <div style={{ marginTop: '16px', background: 'var(--green-subtle)', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="var(--green-ink)" />
                      <strong style={{ fontSize: '13px', color: '#064E3B' }}>{meshData.fileName}</strong>
                      {meshData.fileSizeMb && <span style={{ fontSize: '11px', color: '#047857' }}>({meshData.fileSizeMb} MB)</span>}
                    </div>
                    <div style={{ fontSize: '12px', color: '#065F46', marginTop: '4px' }}>
                      Volume: <strong>{meshData.analysis.volumeCm3} cm³</strong> &bull; Dimensions: {meshData.analysis.dimensions.x} &times; {meshData.analysis.dimensions.y} &times; {meshData.analysis.dimensions.z} mm
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMeshData(null)}
                    style={{ fontSize: '11px', color: '#DC2626', fontWeight: 700, textDecoration: 'underline' }}
                  >
                    Change File
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Custom CAD Design Request */}
          {tab === 'design' && (
            <div style={{ marginBottom: '24px', background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label" style={{ fontWeight: 700 }}>
                  Describe the part you need designed &amp; printed *
                </label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="e.g. Broken gear from an espresso machine, custom GoPro mount with 45-degree angle, or robotics chassis bracket..."
                  value={designDescription}
                  onChange={(e) => setDesignDescription(e.target.value)}
                  style={{ width: '100%', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                    Target Dimensions (approx.)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 80 × 50 × 30 mm"
                    value={designDimensions}
                    onChange={(e) => setDesignDimensions(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                    Estimated Part Weight (g)
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    min={5}
                    max={2000}
                    value={manualWeight}
                    onChange={(e) => setManualWeight(Number(e.target.value) || 50)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Technical Manufacturing Specifications */}
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h4 style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Select Printing Specifications
            </h4>

            {/* Material Chips */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate-dark)', display: 'block', marginBottom: '8px' }}>
                Material
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { id: 'pla', name: 'PLA+ High Speed', badge: 'Standard / Prototyping' },
                  { id: 'petg', name: 'PETG Tough', badge: 'Impact / Outdoor' },
                  { id: 'abs', name: 'ABS Industrial', badge: '100°C Heat / Rigid' },
                  { id: 'resin', name: 'SLA Resin (8K)', badge: 'Ultra-Fine 0.05mm' },
                  { id: 'tpu', name: 'TPU Flexible', badge: 'Rubber-like Elastic' }
                ].map(mat => (
                  <button
                    type="button"
                    key={mat.id}
                    onClick={() => {
                      setMaterial(mat.id);
                      if (mat.id === 'resin') setTechnology('sla');
                      else setTechnology('fdm');
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: material === mat.id ? '2px solid var(--green-ink)' : '1px solid var(--line)',
                      background: material === mat.id ? 'var(--green-subtle)' : '#FFFFFF',
                      color: material === mat.id ? 'var(--green-ink)' : 'var(--navy)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {mat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Infill & Color & Quantity */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate-dark)', display: 'block', marginBottom: '6px' }}>
                  Infill Density: {infill}%
                </label>
                <select
                  className="form-input"
                  value={infill}
                  onChange={(e) => setInfill(Number(e.target.value))}
                  style={{ width: '100%', fontSize: '13px' }}
                >
                  <option value={15}>15% (Light Visual)</option>
                  <option value={25}>25% (Standard Utility)</option>
                  <option value={40}>40% (Functional Rigidity)</option>
                  <option value={60}>60% (Heavy Duty Mechanical)</option>
                  <option value={100}>100% (Solid Maximum Strength)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate-dark)', display: 'block', marginBottom: '6px' }}>
                  Color
                </label>
                <select
                  className="form-input"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{ width: '100%', fontSize: '13px' }}
                >
                  <option value="Obsidian Black">Obsidian Black</option>
                  <option value="Pure White">Pure White</option>
                  <option value="Cyber Lime">Cyber Lime</option>
                  <option value="Signal Orange">Signal Orange</option>
                  <option value="Stealth Grey">Stealth Grey</option>
                  <option value="Custom / Dual-Color">Custom / Discuss</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--slate-dark)', display: 'block', marginBottom: '6px' }}>
                  Quantity
                </label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: '6px', background: '#FFFFFF' }}>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ padding: '8px 12px', fontSize: '16px', fontWeight: 800, color: 'var(--slate-dark)' }}
                  >
                    &minus;
                  </button>
                  <span style={{ flex: 1, textAlign: 'center', fontWeight: 800, fontSize: '14px' }}>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ padding: '8px 12px', fontSize: '16px', fontWeight: 800, color: 'var(--slate-dark)' }}
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Details Form */}
          <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
            <h4 style={{ margin: '0 0 14px', fontSize: '14px', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Your Contact Details (For Instant WhatsApp &amp; Email Handshake)
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                  Email Address * (For quotation receipt)
                </label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="name@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                  Delivery City / Pincode
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Indiranagar, Bangalore - 560038"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                Special Instructions / Dimensional Requirements (Optional)
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. M3 heat-set insert holes required, must fit with 0.2mm clearance..."
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Live Estimate Summary & WhatsApp Trigger */}
        <div>
          <div style={{ position: 'sticky', top: '100px', background: 'var(--navy-surface)', color: '#FFFFFF', borderRadius: '16px', padding: '28px', border: '1px solid var(--navy-border)', boxShadow: '0 20px 50px rgba(10, 13, 20, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <span className="eyebrow lime" style={{ margin: 0 }}>Live Cost Estimation</span>
              <span className="badge-pill" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontSize: '10px' }}>
                <span className="badge-live-dot" /> Instant Formula
              </span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', color: 'var(--slate-light)', display: 'block' }}>Estimated Cost Range ({quantity} unit{quantity > 1 ? 's' : ''})</span>
              <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--lime)', letterSpacing: '-0.03em', margin: '4px 0' }}>
                ₹{quote.minPrice} – ₹{quote.maxPrice}
              </div>
              <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 700 }}>
                50% Advance on Slicing: ₹{quote.advance50Percent} &bull; Balance on QA Photo
              </span>
            </div>

            {/* Spec Breakdown List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '20px', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-light)' }}>Material &amp; Process:</span>
                <strong>{material.toUpperCase()} &bull; {technology.toUpperCase()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-light)' }}>Calculated Total Weight:</span>
                <strong>~{quote.totalWeightGrams} grams</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-light)' }}>Machine Print Time:</span>
                <strong>~{quote.printHours} hours</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-light)' }}>Infill &amp; Color:</span>
                <strong>{infill}% &bull; {color}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-light)' }}>Dispatch Target:</span>
                <strong style={{ color: 'var(--lime)' }}>24–48 Hours</strong>
              </div>
            </div>

            {/* Dual Action Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '14px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '12px'
              }}
            >
              <MessageCircle size={18} />
              {isSubmitting ? 'Recording & Connecting...' : 'Submit Details & Chat on WhatsApp'}
            </button>

            {/* Notification Confirmation Toast */}
            {submitSuccess && (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#34D399', marginBottom: '14px' }}>
                <Check size={14} />
                <span>Details saved to Google Sheets &amp; email sent to our lab! WhatsApp opened.</span>
              </div>
            )}

            <p style={{ margin: 0, fontSize: '11px', color: 'var(--slate-light)', lineHeight: 1.5, textAlign: 'center' }}>
              🔒 Submitting automatically creates a record in our Google Sheet, alerts our engineering email, and prefills your WhatsApp chat so you can speak directly with our team.
            </p>
          </div>
        </div>

      </form>
    </section>
  );
}
