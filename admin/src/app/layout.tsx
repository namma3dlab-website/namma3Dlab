import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { AdminDataProvider } from '@/context/AdminDataContext';
import { AdminSidebar } from '@/components/AdminSidebar';
import { AdminHeader } from '@/components/AdminHeader';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Namma 3D Lab | Mission Control & Admin Hub',
  description: 'Industrial 3D Printing & Storefront Management, Live Print Farm Queue, Product Catalog, Orders & Payment Settings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <AdminDataProvider>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Left Nav Sidebar */}
            <AdminSidebar />

            {/* Main Application Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, marginLeft: '260px' }}>
              <AdminHeader />
              <main style={{ flex: 1, padding: '32px 36px 60px' }}>
                {children}
              </main>
            </div>
          </div>
        </AdminDataProvider>
      </body>
    </html>
  );
}
