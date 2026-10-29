'use client';

import React, { useState } from 'react';
import { Search, Plus, Bell, ShieldCheck, Menu } from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { AddProductModal } from './AddProductModal';

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
}

export function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
  const { orders, enquiries } = useAdminData();
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const pendingOrders = orders.filter(o => o.orderStatus === 'Pending' || o.orderStatus === 'Slicing').length;
  const newEnquiries = enquiries.filter(e => e.status === 'New Quote').length;
  const totalAlerts = pendingOrders + newEnquiries;

  return (
    <>
      <header className="admin-header">
        {/* Left: Mobile Menu Toggle + Quick Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, maxWidth: '480px' }}>
          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="admin-hamburger-btn"
              aria-label="Open navigation menu"
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                color: 'var(--navy)',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Menu size={18} />
            </button>
          )}

          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={15}
              color="var(--slate-light)"
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search products, orders, STL files..."
              className="form-input"
              style={{ width: '100%', paddingLeft: '36px', fontSize: '13px', borderRadius: '10px', height: '38px' }}
            />
          </div>
        </div>

        {/* Right: Actions & Admin Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Quick Add Product Button */}
          <button
            type="button"
            onClick={() => setIsAddProductOpen(true)}
            className="btn btn-lime"
            style={{ fontSize: '12.5px', padding: '8px 14px', whiteSpace: 'nowrap' }}
          >
            <Plus size={15} />
            <span className="hide-on-mobile">Add New Product</span>
            <span className="show-on-mobile-inline">Add</span>
          </button>

          {/* Notifications Indicator */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--slate-dark)',
              position: 'relative',
              cursor: 'pointer',
              flexShrink: 0
            }}
            title={`${totalAlerts} pending tasks`}
          >
            <Bell size={17} />
            {totalAlerts > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#EF4444',
                  boxShadow: '0 0 6px #EF4444'
                }}
              />
            )}
          </div>

          {/* Profile Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '6px', borderLeft: '1px solid var(--line)' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--navy)',
                color: 'var(--lime)',
                fontWeight: 800,
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              AK
            </div>
            <div className="hide-on-mobile">
              <strong style={{ fontSize: '12.5px', color: 'var(--navy)', display: 'block', lineHeight: 1.2 }}>
                Akshay Kumar
              </strong>
              <span style={{ fontSize: '10px', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <ShieldCheck size={11} color="var(--green-ink)" /> Admin
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
