'use client';

import React, { useState } from 'react';
import { X, Plus, Sparkles, Image as ImageIcon, Check } from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { AdminProduct } from '@/lib/adminData';

interface AddProductModalProps {
  onClose: () => void;
}

const PRESET_IMAGES = [
  { label: 'Spiral Vase', url: '/images/products/spiral_fluted_vase.jpg' },
  { label: 'Deity Idol', url: '/images/products/cultural_deity_idol.jpg' },
  { label: 'Voronoi Lamp', url: '/images/products/voronoi_ambient_lamp.jpg' },
  { label: 'Headphone Stand', url: '/images/products/modular_headphone_stand.jpg' },
  { label: 'Lithophane Box', url: '/images/products/lithophane_photo_box.jpg' },
  { label: 'Hex Organizer', url: '/images/products/hex_desk_organizer.jpg' },
  { label: 'Bespoke Keychains', url: '/images/products/bespoke_keychains.jpg' }
];

export function AddProductModal({ onClose }: AddProductModalProps) {
  const { addProduct } = useAdminData();

  const [name, setName] = useState('');
  const [category, setCategory] = useState<AdminProduct['category']>('decor');
  const [price, setPrice] = useState<number>(499);
  const [originalPrice, setOriginalPrice] = useState<number>(699);
  const [material, setMaterial] = useState('PLA+ Matte Reinforced');
  const [dimensions, setDimensions] = useState('160 × 80 × 80 mm');
  const [leadTime, setLeadTime] = useState('24 Hours');
  const [stockQuantity, setStockQuantity] = useState<number>(30);
  const [badge, setBadge] = useState('New Release');
  const [colorsInput, setColorsInput] = useState('Silk Gold, Matte White, Obsidian Black');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('/images/products/spiral_fluted_vase.jpg');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const colors = colorsInput
      .split(',')
      .map(c => c.trim())
      .filter(Boolean);

    addProduct({
      slug,
      name,
      category,
      price: Number(price),
      originalPrice: Number(originalPrice) || undefined,
      material,
      dimensions,
      leadTime,
      description: description || `Precision additive manufactured ${name} engineered with industrial accuracy.`,
      colorGradient: 'linear-gradient(135deg, #0A0D14, #1E293B)',
      iconName: 'Sparkles',
      imageUrl,
      colors: colors.length > 0 ? colors : ['Standard'],
      inStock: true,
      badge,
      rating: 5.0,
      reviewsCount: 1,
      stockQuantity: Number(stockQuantity)
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', borderBottom: '1px solid var(--line)' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)' }}>Add New Product to Store Catalog</h3>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--slate)' }}>
              Configure 3D printing specifications, material grade, and inventory pricing.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface-alt)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} color="var(--slate-dark)" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px' }}>
            
            {/* Left Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="form-label">Product Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Torus Spiral Kinetic Planter"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Category</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value as AdminProduct['category'])}
                    style={{ width: '100%' }}
                  >
                    <option value="decor">Desk Decor</option>
                    <option value="lighting">Lamps &amp; Lighting</option>
                    <option value="sacred">Sacred &amp; Cultural</option>
                    <option value="accessories">Tech &amp; Accessories</option>
                    <option value="gifts">Gifts &amp; Tokens</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Badge Tag</label>
                  <input
                    type="text"
                    placeholder="e.g. Best Seller, Popular"
                    value={badge}
                    onChange={e => setBadge(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Selling Price (₹) *</label>
                  <input
                    type="number"
                    required
                    min={49}
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    style={{ width: '100%', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label className="form-label">Original Price (₹)</label>
                  <input
                    type="number"
                    min={49}
                    value={originalPrice}
                    onChange={e => setOriginalPrice(Number(e.target.value))}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Material Grade</label>
                  <input
                    type="text"
                    value={material}
                    onChange={e => setMaterial(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label className="form-label">Print Lead Time</label>
                  <input
                    type="text"
                    value={leadTime}
                    onChange={e => setLeadTime(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">Dimensions</label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={e => setDimensions(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label className="form-label">Initial Stock Qty</label>
                  <input
                    type="number"
                    min={0}
                    value={stockQuantity}
                    onChange={e => setStockQuantity(Number(e.target.value))}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Color Finish Options (Comma separated)</label>
                <input
                  type="text"
                  value={colorsInput}
                  onChange={e => setColorsInput(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label className="form-label">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe generative design, infill density, application..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  style={{ width: '100%', resize: 'none' }}
                />
              </div>
            </div>

            {/* Right: Image Selection & Card Preview */}
            <div>
              <label className="form-label">Select Product Photography</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
                {PRESET_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setImageUrl(img.url)}
                    style={{
                      aspectRatio: '1',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: imageUrl === img.url ? '2px solid var(--lime)' : '1px solid var(--line)',
                      boxShadow: imageUrl === img.url ? '0 0 0 2px var(--navy)' : 'none',
                      padding: 0,
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    <img src={img.url} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {imageUrl === img.url && (
                      <div style={{ position: 'absolute', top: '4px', right: '4px', background: 'var(--lime)', color: '#0A0D14', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Live Preview Card */}
              <div style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '14px', background: '#FFFFFF', boxShadow: '0 4px 14px rgba(10, 13, 20, 0.05)' }}>
                <span className="badge badge-emerald" style={{ marginBottom: '8px', fontSize: '10px' }}>
                  Live Storefront Preview
                </span>
                <div style={{ aspectRatio: '1.2', borderRadius: '10px', overflow: 'hidden', background: '#F8FAFC', marginBottom: '10px' }}>
                  <img src={imageUrl} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block', marginBottom: '2px' }}>
                  {name || 'New Product Title'}
                </strong>
                <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block', marginBottom: '6px' }}>
                  {material} &bull; {leadTime}
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>₹{price}</strong>
                  {originalPrice && originalPrice > price && (
                    <span style={{ fontSize: '12px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                      ₹{originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Form Actions Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
            <button type="button" onClick={onClose} className="btn btn-light">
              Cancel
            </button>
            <button type="submit" className="btn btn-lime">
              <Plus size={16} /> Publish Product to Catalog
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
