import React from 'react';
import type { Metadata } from 'next';
import { CustomQuoteSection } from '@/components/CustomQuoteSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Custom 3D Printing Quote & File Upload | Namma 3D Lab',
  description: 'Upload your 3D CAD model (.STL, .OBJ) for instant volume & price calculation or request custom CAD design. Leads automatically logged to Google Sheets and prefilled into WhatsApp.',
  openGraph: {
    title: 'Custom 3D Printing & CAD Quote Engine | Namma 3D Lab',
    description: 'Rapid additive manufacturing with CoreXY high-speed & 8K SLA resin printers in Bangalore.',
  }
};

export default function CustomQuotePage() {
  return (
    <main>
      <div style={{ background: '#FFFFFF', paddingTop: '32px' }}>
        <CustomQuoteSection />
      </div>
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
