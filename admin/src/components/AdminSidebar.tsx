'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  FileCode,
  CreditCard,
  Printer,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';

export function AdminSidebar() {
  const pathname = usePathname();
  const { orders, enquiries, printers } = useAdminData();

  const pendingOrders = orders.filter(o => o.orderStatus === 'Pending' || o.orderStatus === 'Slicing').length;
  const newEnquiries = enquiries.filter(e => e.status === 'New Quote' || e.status === 'CAD Reviewing').length;
  const activePrinters = printers.filter(p => p.status === 'Printing').length;

  const navLinks = [
    {
      name: 'Overview & Metrics',
      href: '/',
      icon: <LayoutDashboard size={18} />
    },
    {
      name: 'Products & Inventory',
      href: '/products',
      icon: <Package size={18} />
    },
    {
      name: 'Store Orders',
      href: '/orders',
      icon: <ShoppingBag size={18} />,
      badge: pendingOrders > 0 ? `${pendingOrders} queue` : undefined,
      badgeColor: 'amber'
    },
    {
      name: 'Custom CAD Enquiries',
      href: '/custom-enquiries',
      icon: <FileCode size={18} />,
      badge: newEnquiries > 0 ? `${newEnquiries} new` : undefined,
      badgeColor: 'emerald'
    },
    {
      name: 'Payment & Finance',
      href: '/payments',
      icon: <CreditCard size={18} />
    },
    {
      name: '3D Print Farm Fleet',
      href: '/fleet',
      icon: <Printer size={18} />,
      badge: `${activePrinters} active`,
      badgeColor: 'lime'
    }
  ];

  return (
    <aside
      style={{
        width: '260px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        background: 'var(--admin-sidebar-bg)',
        borderRight: '1px solid #1E293B',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50
      }}
    >
      {/* Brand Header */}
      <div style={{ padding: '24px 20px', borderBottom: '1px solid #1E293B' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--lime)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0A0D14',
              boxShadow: '0 0 16px rgba(141, 198, 63, 0.4)'
            }}
          >
            <Layers size={20} strokeWidth={2.5} />
          </div>
          <div>
            <strong style={{ color: '#FFFFFF', fontSize: '15px', letterSpacing: '-0.02em', display: 'block' }}>
              Namma 3D Lab
            </strong>
            <span style={{ fontSize: '10px', color: 'var(--lime)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Mission Control &bull; Admin
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav style={{ padding: '20px 14px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 10px 8px' }}>
          Management
        </div>

        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 14px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#FFFFFF' : '#94A3B8',
                background: isActive ? 'rgba(141, 198, 63, 0.12)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--lime)' : '3px solid transparent',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: isActive ? 'var(--lime)' : '#64748B' }}>
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </div>
              {link.badge && (
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '10px',
                    background:
                      link.badgeColor === 'amber'
                        ? 'rgba(245, 158, 11, 0.2)'
                        : link.badgeColor === 'emerald'
                        ? 'rgba(7, 135, 93, 0.25)'
                        : 'rgba(141, 198, 63, 0.25)',
                    color:
                      link.badgeColor === 'amber'
                        ? '#FBBF24'
                        : link.badgeColor === 'emerald'
                        ? '#34D399'
                        : '#BEF264'
                  }}
                >
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '20px 10px 8px' }}>
          Storefront Link
        </div>

        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#94A3B8',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px dashed #334155',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sparkles size={16} color="var(--lime)" />
            <span>Customer Website</span>
          </div>
          <ExternalLink size={14} color="#64748B" />
        </a>
      </nav>

      {/* Lab Hardware Status Card */}
      <div style={{ padding: '16px', margin: '14px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
          <strong style={{ fontSize: '12px', color: '#FFFFFF' }}>Indiranagar Lab Hub</strong>
        </div>
        <div style={{ fontSize: '11px', color: '#94A3B8' }}>
          6 3D Printers Active &bull; Low latency
        </div>
      </div>
    </aside>
  );
}
