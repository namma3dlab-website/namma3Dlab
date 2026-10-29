'use client';

import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-shell">
      {/* Mobile/Tablet Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar overlay"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 13, 20, 0.7)',
            backdropFilter: 'blur(4px)',
            zIndex: 140,
            cursor: 'pointer'
          }}
        />
      )}

      {/* Sidebar with open state */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Area */}
      <div className="admin-main-wrap">
        <AdminHeader onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
        <main className="admin-main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
