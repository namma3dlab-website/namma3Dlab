'use client';

import React, { useState } from 'react';
import {
  Package,
  Plus,
  Search,
  CheckCircle,
  XCircle,
  Trash2,
  Edit2,
  ExternalLink,
  Tag,
  Layers,
  ArrowUpDown
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { AddProductModal } from '@/components/AddProductModal';
import { AdminProduct } from '@/lib/adminData';

export default function ProductsManagementPage() {
  const { products, toggleProductStock, deleteProduct, updateProduct } = useAdminData();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [newPriceVal, setNewPriceVal] = useState<number>(0);

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleStartEditPrice = (product: AdminProduct) => {
    setEditingPriceId(product.id);
    setNewPriceVal(product.price);
  };

  const handleSavePrice = (id: string) => {
    if (newPriceVal > 0) {
      updateProduct(id, { price: newPriceVal });
    }
    setEditingPriceId(null);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Store Catalog &bull; Inventory Matrix
          </span>
          <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: 0 }}>
            Products &amp; Manufacturing Inventory
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--slate)' }}>
            Manage finished 3D printed items, pricing, inventory availability, and lead times.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="btn btn-lime"
        >
          <Plus size={16} /> Add New Product
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '14px', padding: '16px 20px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Catalog' },
            { id: 'decor', label: 'Desk Decor' },
            { id: 'lighting', label: 'Lamps & Lighting' },
            { id: 'sacred', label: 'Sacred & Cultural' },
            { id: 'accessories', label: 'Tech & Stands' },
            { id: 'gifts', label: 'Bespoke Gifts' }
          ].map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn btn-sm ${selectedCategory === cat.id ? 'btn-dark' : 'btn-light'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={15} color="var(--slate)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search products or material..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ width: '100%', paddingLeft: '34px', fontSize: '12.5px' }}
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Category</th>
              <th>Price &amp; MRP</th>
              <th>Stock &amp; Availability</th>
              <th>Print Lead Time</th>
              <th>Total Sold</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                {/* Product Details with Photo */}
                <td style={{ minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '10px', overflow: 'hidden', background: '#F1F5F9', flexShrink: 0, border: '1px solid var(--line)' }}>
                      {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: product.colorGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                          <Layers size={18} />
                        </div>
                      )}
                    </div>
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block', lineHeight: 1.3 }}>
                        {product.name}
                      </strong>
                      <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block' }}>
                        {product.material} &bull; {product.dimensions}
                      </span>
                      {product.badge && (
                        <span className="badge badge-emerald" style={{ fontSize: '9px', marginTop: '3px', padding: '1px 6px' }}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td>
                  <span className="badge badge-slate" style={{ textTransform: 'capitalize' }}>
                    {product.category}
                  </span>
                </td>

                {/* Price (Editable inline) */}
                <td>
                  {editingPriceId === product.id ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700 }}>₹</span>
                      <input
                        type="number"
                        value={newPriceVal}
                        onChange={e => setNewPriceVal(Number(e.target.value))}
                        className="form-input"
                        style={{ width: '80px', padding: '4px 8px', fontSize: '13px' }}
                      />
                      <button
                        type="button"
                        onClick={() => handleSavePrice(product.id)}
                        className="btn btn-lime btn-sm"
                        style={{ padding: '4px 8px' }}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <strong style={{ fontSize: '15px', color: 'var(--navy)' }}>₹{product.price}</strong>
                      {product.originalPrice && (
                        <span style={{ fontSize: '12px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                          ₹{product.originalPrice}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => handleStartEditPrice(product)}
                        style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer', padding: '2px' }}
                        title="Edit Price"
                      >
                        <Edit2 size={13} />
                      </button>
                    </div>
                  )}
                </td>

                {/* Stock Toggle */}
                <td>
                  <button
                    type="button"
                    onClick={() => toggleProductStock(product.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    {product.inStock ? (
                      <span className="badge badge-emerald">
                        <CheckCircle size={12} /> In Stock ({product.stockQuantity || 25})
                      </span>
                    ) : (
                      <span className="badge badge-rose">
                        <XCircle size={12} /> Out of Stock
                      </span>
                    )}
                  </button>
                </td>

                {/* Lead Time */}
                <td>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--slate-dark)' }}>
                    {product.leadTime}
                  </span>
                </td>

                {/* Total Sold */}
                <td>
                  <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>
                    {product.salesCount || 0} units
                  </strong>
                </td>

                {/* Actions */}
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${product.name}" from store catalog?`)) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="btn btn-danger btn-sm"
                      style={{ padding: '6px 10px' }}
                      title="Delete Product"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <AddProductModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
}
