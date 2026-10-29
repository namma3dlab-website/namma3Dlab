'use client';

import React, { useState, useEffect } from 'react';
import { UploadCloud, Box, Edit3, ArrowRight, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { parseSTL, parseOBJ, calculatePrintCost, MeshAnalysisResult, CostCalculationResult } from '@/lib/stl-parser';

export function EstimatorSection() {
  const [mode, setMode] = useState<'file' | 'fallback'>('file');

  // Parameters
  const [technology, setTechnology] = useState('fdm');
  const [material, setMaterial] = useState('pla');
  const [infill, setInfill] = useState(20);
  const [manualWeight, setManualWeight] = useState(65);
  const [quantity, setQuantity] = useState(1);

  // Mesh analysis state
  const [meshData, setMeshData] = useState<{
    fileName: string;
    analysis: MeshAnalysisResult;
  } | null>(null);

  const [isParsing, setIsParsing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Calculation output
  const [quote, setQuote] = useState<CostCalculationResult>({
    singleWeightGrams: 65,
    totalWeightGrams: 65,
    printHours: 2.8,
    minPrice: 480,
    maxPrice: 620,
    advance50Percent: 240
  });

  // Calculate whenever inputs change
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
        analysis
      });
    } catch (err) {
      console.error('Error parsing 3D model:', err);
      alert('Error parsing 3D file. Please check that the file is not corrupted.');
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

  // Fallback form states
  const [fallbackDesc, setFallbackDesc] = useState('');
  const [fallbackDims, setFallbackDims] = useState('');
  const [fallbackMat, setFallbackMat] = useState('Not Sure');
  const [fallbackName, setFallbackName] = useState('');
  const [fallbackPhone, setFallbackPhone] = useState('');

  const handleFallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fallbackDesc || !fallbackName || !fallbackPhone) {
      alert('Please enter your name, phone number, and part description.');
      return;
    }

    const msg = `Hi Namma 3D Lab CAD Team,\nI need CAD Modeling & 3D Printing for a custom part:\n` +
      `• Name: ${fallbackName}\n` +
      `• WhatsApp: ${fallbackPhone}\n` +
      `• Description: "${fallbackDesc}"\n` +
      `• Target Dimensions: ${fallbackDims || 'Custom'}\n` +
      `• Material Preference: ${fallbackMat}\n` +
      `I am attaching photos/sketches here. Please advise pricing & lead time.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const generateWhatsAppQuoteLink = () => {
    const matLabel = material.toUpperCase();
    if (meshData) {
      const msg = `Hi Namma 3D Lab, I calculated an instant estimate from my 3D file on your website:\n` +
        `• File: ${meshData.fileName} (${meshData.analysis.dimensions.x}x${meshData.analysis.dimensions.y}x${meshData.analysis.dimensions.z}mm)\n` +
        `• Volume: ${meshData.analysis.volumeCm3} cm³\n` +
        `• Technology: ${technology.toUpperCase()} | Material: ${matLabel}\n` +
        `• Infill: ${infill}% | Qty: ${quantity}\n` +
        `• Total Weight: ~${quote.totalWeightGrams}g | Est. Print Time: ${quote.printHours}h\n` +
        `• Estimated Range: ₹${quote.minPrice} – ₹${quote.maxPrice} (50% Adv: ₹${quote.advance50Percent})\n` +
        `Please confirm slicing parameters and share 50% advance link.`;
      return `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    } else {
      const msg = `Hi Namma 3D Lab, I calculated an instant estimate on your website:\n` +
        `• Material: ${matLabel}\n` +
        `• Infill: ${infill}% | Qty: ${quantity}\n` +
        `• Weight: ~${manualWeight}g\n` +
        `• Estimated Range: ₹${quote.minPrice} – ₹${quote.maxPrice}\n` +
        `Please confirm quotation and file upload.`;
      return `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    }
  };

  return (
    <section className="section-wrap" id="estimator" style={{ background: '#FFFFFF' }}>
      <div className="section-head">
        <span className="eyebrow lime">Instant Cost Engine</span>
        <h2>Calculate 3D print costs with <em>transparent precision.</em></h2>
        <p>
          Upload your 3D CAD file (.STL or .OBJ) to extract geometric bounding dimensions and exact mesh volume, or let our engineering team model your sketch from scratch.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }}>
        <div>
          {/* Mode Switcher */}
          <div style={{ display: 'flex', background: 'var(--surface-alt)', padding: '4px', borderRadius: '8px', gap: '4px', marginBottom: '24px' }}>
            <button
              onClick={() => setMode('file')}
              className={`btn ${mode === 'file' ? 'btn-dark' : 'btn-light'}`}
              style={{ flex: 1, padding: '10px 14px', fontSize: '12px' }}
              type="button"
            >
              <Box size={14} /> Upload 3D File (.STL / .OBJ)
            </button>
            <button
              onClick={() => setMode('fallback')}
              className={`btn ${mode === 'fallback' ? 'btn-dark' : 'btn-light'}`}
              style={{ flex: 1, padding: '10px 14px', fontSize: '12px' }}
              type="button"
            >
              <Edit3 size={14} /> Need CAD / Have a Sketch
            </button>
          </div>

          {mode === 'file' ? (
            <div>
              {/* Dropzone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  if (e.dataTransfer.files[0]) handleFileProcess(e.dataTransfer.files[0]);
                }}
                style={{
                  border: `2px dashed ${dragOver ? 'var(--green)' : '#CBD5E1'}`,
                  borderRadius: '10px',
                  padding: '28px 16px',
                  textAlign: 'center',
                  background: dragOver ? '#F0FDF4' : 'var(--paper)',
                  cursor: 'pointer',
                  position: 'relative',
                  marginBottom: '20px'
                }}
              >
                <input
                  type="file"
                  accept=".stl,.obj"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) handleFileProcess(e.target.files[0]);
                  }}
                  style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                />
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E2E8F0', color: 'var(--slate-dark)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <UploadCloud size={22} />
                </div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy)' }}>
                  {isParsing ? 'Analyzing 3D Mesh...' : meshData ? `✓ ${meshData.fileName} Loaded` : 'Drop your .STL or .OBJ file here'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--slate)', marginTop: '4px' }}>
                  or click to browse from device (up to 50MB)
                </div>

                <div style={{ marginTop: '12px', position: 'relative', zIndex: 5 }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleLoadSample(); }}
                    type="button"
                    style={{
                      background: 'var(--green-subtle)',
                      border: '1px solid #A7F3D0',
                      color: 'var(--green-ink)',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Sparkles size={12} /> Try Sample Model (Drone Mounting Bracket)
                  </button>
                </div>
              </div>

              {/* Real-time Mesh Metadata Badge */}
              {meshData && (
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '14px 18px', marginBottom: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', fontSize: '11px' }}>
                    <div>
                      <span style={{ color: 'var(--slate)', display: 'block' }}>File</span>
                      <strong style={{ color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>{meshData.fileName}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--slate)', display: 'block' }}>Dimensions (X×Y×Z)</span>
                      <strong style={{ color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>
                        {meshData.analysis.dimensions.x} × {meshData.analysis.dimensions.y} × {meshData.analysis.dimensions.z} mm
                      </strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--slate)', display: 'block' }}>Triangles</span>
                      <strong style={{ color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>
                        {meshData.analysis.triangles.toLocaleString()}
                      </strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--slate)', display: 'block' }}>Solid Volume</span>
                      <strong style={{ color: 'var(--green-ink)', fontFamily: 'var(--font-mono)' }}>
                        {meshData.analysis.volumeCm3} cm³
                      </strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Slicing Parameter Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '6px' }}>
                  Additive Technology
                  <select
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: '#FFFFFF', fontWeight: 700 }}
                  >
                    <option value="fdm">FDM (Rapid Prototyping &bull; Tough Parts)</option>
                    <option value="sla">SLA Resin (Ultra-High Detail &bull; Mirror Smooth)</option>
                  </select>
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '6px' }}>
                  Material Formulation
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: '#FFFFFF', fontWeight: 700 }}
                  >
                    <option value="pla">PLA / PLA+ (Standard Prototyping &bull; ₹4.50/g)</option>
                    <option value="petg">PETG Structural (Impact &amp; Chemical &bull; ₹6.00/g)</option>
                    <option value="abs">ABS / ASA (High Heat 95°C &bull; ₹6.50/g)</option>
                    <option value="tpu">TPU 95A (Flexible Rubber-like &bull; ₹9.00/g)</option>
                    <option value="resin">Tough SLA Resin (Injection Grade &bull; ₹14.00/g)</option>
                  </select>
                </label>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', marginBottom: '6px' }}>
                  <span>Internal Infill Density</span>
                  <span style={{ color: 'var(--green-ink)' }}>{infill}% Gyroid / Grid</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={infill}
                  onChange={(e) => setInfill(parseInt(e.target.value, 10))}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '6px' }}>
                  Estimated Weight (g)
                  <input
                    type="number"
                    min="5"
                    max="5000"
                    value={manualWeight}
                    onChange={(e) => setManualWeight(parseFloat(e.target.value) || 50)}
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: '#FFFFFF', fontWeight: 700 }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '6px' }}>
                  Batch Quantity
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: '#FFFFFF', fontWeight: 700 }}
                  />
                </label>
              </div>

              <a
                href={generateWhatsAppQuoteLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime"
                style={{ width: '100%' }}
              >
                Confirm Quote &amp; Dispatch to WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          ) : (
            <form onSubmit={handleFallbackSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{ fontSize: '13px', color: 'var(--slate)', margin: 0 }}>
                Don&apos;t have a 3D model yet? Describe what you want to manufacture. Our mechanical CAD engineers will turn your sketches or broken part photos into a printable CAD mesh.
              </p>

              <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '5px' }}>
                Part Description &amp; Mechanical Use-Case *
                <textarea
                  required
                  rows={3}
                  value={fallbackDesc}
                  onChange={(e) => setFallbackDesc(e.target.value)}
                  placeholder="e.g. Replacement gear for a mixer with 18 teeth, or battery mounting bracket for electric scooter..."
                  style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontFamily: 'inherit', fontSize: '12px' }}
                />
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '5px' }}>
                  Approx. Dimensions (mm or cm)
                  <input
                    type="text"
                    value={fallbackDims}
                    onChange={(e) => setFallbackDims(e.target.value)}
                    placeholder="e.g. 80 × 50 × 25 mm"
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '5px' }}>
                  Preferred Material
                  <select
                    value={fallbackMat}
                    onChange={(e) => setFallbackMat(e.target.value)}
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px', background: '#FFFFFF' }}
                  >
                    <option value="Not Sure">Not Sure (Engineer Recommended)</option>
                    <option value="PLA (Standard)">PLA (Standard Prototyping)</option>
                    <option value="PETG (Durable & Heat 75°C)">PETG (Durable Structural)</option>
                    <option value="ABS (Heat 95°C)">ABS (High Temperature)</option>
                    <option value="TPU (Flexible Rubber)">TPU (Flexible Rubber)</option>
                    <option value="Resin (High Detail)">SLA Resin (Micro Precision)</option>
                  </select>
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '5px' }}>
                  Your Name *
                  <input
                    required
                    type="text"
                    value={fallbackName}
                    onChange={(e) => setFallbackName(e.target.value)}
                    placeholder="Akshay Kumar"
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', fontWeight: 800, color: 'var(--slate-dark)', gap: '5px' }}>
                  WhatsApp Phone Number *
                  <input
                    required
                    type="tel"
                    value={fallbackPhone}
                    onChange={(e) => setFallbackPhone(e.target.value)}
                    placeholder="9876543210"
                    style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', fontSize: '12px' }}
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-lime" style={{ marginTop: '6px' }}>
                Send CAD Request to Lab Engineer <Send size={15} />
              </button>
            </form>
          )}
        </div>

        {/* Live Cost Output Panel */}
        <div>
          <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: '10px', padding: '28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="eyebrow lime" style={{ margin: 0 }}>Live Honest Estimate</span>
              <span className="badge-pill" style={{ background: '#FFFFFF', color: 'var(--navy)' }}>
                {meshData ? 'Mesh Calculated' : 'Manual Approximation'}
              </span>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--slate)', letterSpacing: '0.08em' }}>
                Estimated Price Range
              </span>
              <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.04em', margin: '6px 0' }}>
                ₹{quote.minPrice} – ₹{quote.maxPrice}
              </div>
              <p style={{ fontSize: '11px', color: 'var(--slate)', margin: 0, lineHeight: 1.5 }}>
                Includes raw certified material filament, print bed machine time, and manual support removal.
              </p>

              <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px dashed var(--line)', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span>50% Custom Advance:</span>
                <strong style={{ color: 'var(--green-ink)', fontSize: '14px' }}>₹{quote.advance50Percent}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', color: 'var(--slate)', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Estimated Print Duration:</span>
                <strong style={{ color: 'var(--navy)' }}>{quote.printHours} Hours</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Layer Thickness:</span>
                <strong style={{ color: 'var(--navy)' }}>0.16mm Standard Resolution</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Turnaround Window:</span>
                <strong style={{ color: 'var(--green-ink)' }}>24 to 48 Hours Across Bangalore</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>QA &amp; Verification:</span>
                <strong style={{ color: 'var(--navy)' }}>WhatsApp Macro Photos Before Dispatch</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
