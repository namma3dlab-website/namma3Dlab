import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { CustomEnquiryForm } from '@/components/CustomEnquiryForm';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Custom 3D Printing & Bespoke Enquiries | Namma 3D Lab',
  description: 'Submit your custom 3D printing requirements, dimensions, and finishes. Enquiries are automatically logged to Google Sheets and prefilled for instant WhatsApp discussion.',
  openGraph: {
    title: 'Custom 3D Printing & Bespoke Design | Namma 3D Lab',
    description: 'Rapid additive manufacturing with CoreXY high-speed & 8K SLA resin printers in Bangalore.',
  }
};

export default function CustomQuotePage() {
  return (
    <main>
      <div style={{ background: '#FFFFFF', paddingTop: '40px' }}>
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--slate)' }}>Loading customization form...</div>}>
          <CustomEnquiryForm />
        </Suspense>
      </div>
      <HowItWorksSection />
      <Footer />
    </main>
  );
}

