import React from 'react';
import type { Metadata } from 'next';
import { ShopSection } from '@/components/ShopSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shop Pre-Printed 3D Items | Namma 3D Lab',
  description: 'Shop precision 3D printed desk accessories, ambient Voronoi lamps, sacred idols, and custom nameplates. 24–48h express Bangalore delivery.',
  openGraph: {
    title: 'Shop Pre-Printed 3D Items | Namma 3D Lab',
    description: 'Curated 3D printed decor, gadgets, and personalized gifts in Bangalore.',
  }
};

export default function ShopPage() {
  return (
    <main>
      <div style={{ background: 'var(--paper)', paddingTop: '32px' }}>
        <ShopSection />
      </div>
      <Footer />
    </main>
  );
}
