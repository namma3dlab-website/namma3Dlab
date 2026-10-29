'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  AdminProduct,
  AdminOrder,
  CustomEnquiry,
  PaymentGatewaySettings,
  PrinterMachine,
  INITIAL_PRODUCTS,
  INITIAL_ORDERS,
  INITIAL_ENQUIRIES,
  INITIAL_PAYMENT_SETTINGS,
  INITIAL_PRINTERS
} from '@/lib/adminData';

interface AdminDataContextType {
  products: AdminProduct[];
  orders: AdminOrder[];
  enquiries: CustomEnquiry[];
  paymentSettings: PaymentGatewaySettings;
  printers: PrinterMachine[];
  addProduct: (product: Omit<AdminProduct, 'id' | 'salesCount'>) => void;
  updateProduct: (id: string, updates: Partial<AdminProduct>) => void;
  deleteProduct: (id: string) => void;
  toggleProductStock: (id: string) => void;
  updateOrderStatus: (orderId: string, status: AdminOrder['orderStatus'], printAssignedTo?: string) => void;
  updateEnquiryStatus: (enquiryId: string, status: CustomEnquiry['status'], quotedPrice?: number) => void;
  updatePaymentSettings: (updates: Partial<PaymentGatewaySettings>) => void;
  updatePrinterStatus: (printerId: string, updates: Partial<PrinterMachine>) => void;
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export function AdminDataProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<AdminProduct[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_admin_products');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [orders, setOrders] = useState<AdminOrder[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_admin_orders');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_ORDERS;
  });

  const [enquiries, setEnquiries] = useState<CustomEnquiry[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_admin_enquiries');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_ENQUIRIES;
  });

  const [paymentSettings, setPaymentSettings] = useState<PaymentGatewaySettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_admin_payment_settings');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_PAYMENT_SETTINGS;
  });

  const [printers, setPrinters] = useState<PrinterMachine[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('n3d_admin_printers');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* fallback */ }
      }
    }
    return INITIAL_PRINTERS;
  });

  // Save to localStorage whenever states change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_admin_products', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_admin_orders', JSON.stringify(orders));
    }
  }, [orders]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_admin_enquiries', JSON.stringify(enquiries));
    }
  }, [enquiries]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_admin_payment_settings', JSON.stringify(paymentSettings));
    }
  }, [paymentSettings]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('n3d_admin_printers', JSON.stringify(printers));
    }
  }, [printers]);

  const addProduct = (newProd: Omit<AdminProduct, 'id' | 'salesCount'>) => {
    const id = `prod-custom-${Date.now()}`;
    const product: AdminProduct = {
      ...newProd,
      id,
      salesCount: 0
    };
    setProducts(prev => [product, ...prev]);
  };

  const updateProduct = (id: string, updates: Partial<AdminProduct>) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const toggleProductStock = (id: string) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, inStock: !p.inStock } : p))
    );
  };

  const updateOrderStatus = (
    orderId: string,
    status: AdminOrder['orderStatus'],
    printAssignedTo?: string
  ) => {
    setOrders(prev =>
      prev.map(o => {
        if (o.id === orderId) {
          return {
            ...o,
            orderStatus: status,
            ...(printAssignedTo ? { printAssignedTo } : {})
          };
        }
        return o;
      })
    );
  };

  const updateEnquiryStatus = (
    enquiryId: string,
    status: CustomEnquiry['status'],
    quotedPrice?: number
  ) => {
    setEnquiries(prev =>
      prev.map(e => {
        if (e.id === enquiryId) {
          return {
            ...e,
            status,
            ...(quotedPrice !== undefined ? { quotedPrice } : {})
          };
        }
        return e;
      })
    );
  };

  const updatePaymentSettings = (updates: Partial<PaymentGatewaySettings>) => {
    setPaymentSettings(prev => ({
      ...prev,
      ...updates
    }));
  };

  const updatePrinterStatus = (printerId: string, updates: Partial<PrinterMachine>) => {
    setPrinters(prev =>
      prev.map(p => (p.id === printerId ? { ...p, ...updates } : p))
    );
  };

  return (
    <AdminDataContext.Provider
      value={{
        products,
        orders,
        enquiries,
        paymentSettings,
        printers,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProductStock,
        updateOrderStatus,
        updateEnquiryStatus,
        updatePaymentSettings,
        updatePrinterStatus
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }
  return context;
}
