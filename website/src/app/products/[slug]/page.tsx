import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATALOG_PRODUCTS, getProductBySlug } from '@/lib/data';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { Footer } from '@/components/Footer';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATALOG_PRODUCTS.map(product => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Namma 3D Lab',
    };
  }

  return {
    title: `${product.name} | Namma 3D Lab`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ₹${product.price}`,
      description: product.description,
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products from the same or other categories
  const relatedProducts = CATALOG_PRODUCTS
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '28px' }}>
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
}
