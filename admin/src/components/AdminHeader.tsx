'use client';

import React, { useState } from 'react';
import { Search, Plus, Bell, ShieldCheck, Printer, CheckCircle } from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { AddProductModal } from './AddProductModal';

export function AdminHeader() {
  const { orders, enquiries, printers } = useAdminData();
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const pendingOrders = orders.filter(o => o.orderStatus === 'Pending' || o.orderStatus === 'Slicing').length;
  const newEnquiries = enquiries.filter(e => e.status === 'New Quote').length;
  const totalAlerts = pendingOrders + newEnquiries;

  return (
    <>
      <header
        style={{
          height: '70px',
          background: '#FFFFFF',
          borderBottom: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 36px',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}
      >
        {/* Left: Quick Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, maxWidth: '440px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={16}
              color="var(--slate-light)"
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search products, orders #, customer phone, or STL files..."
              className="form-input"
              style={{ width: '100%', paddingLeft: '38px', fontSize: '13px', borderRadius: '10px' }}
            />
          </div>
        </div>

        {/* Right: Actions & Admin Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Quick Add Product Button */}
          <button
            type="button"
            onClick={() => setIsAddProductOpen(true)}
            className="btn btn-lime"
            style={{ fontSize: '12.5px', padding: '9px 16px' }}
          >
            <Plus size={16} /> Add New Product
          </button>

          {/* Notifications Indicator */}
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--slate-dark)',
              position: 'relative',
              cursor: 'pointer'
            }}
            title={`${totalAlerts} pending tasks`}
          >
            <Bell size={18} />
            {totalAlerts > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '7px',
                  right: '7px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#EF4444',
                  boxShadow: '0 0 6px #EF4444'
                }}
              />
            )}
          </div>

          {/* Profile Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '8px', borderLeft: '1px solid var(--line)' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--navy)',
                color: 'var(--lime)',
                fontWeight: 800,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              AK
            </div>
            <div>
              <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block', lineHeight: 1.2 }}>
                Akshay Kumar
              </strong>
              <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={12} color="var(--green-ink)" /> Super Admin
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Add Product Modal */}
      {isAddProductOpen && (
        <AddProductModal onClose={() => setIsAddProductOpen(false)} />
      )}
    </>
  );
}
