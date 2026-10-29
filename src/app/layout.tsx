import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#0A0D14",
};

export const metadata: Metadata = {
  title: "Namma 3D Lab | Precision 3D Printing & Design Studio",
  description: "Precision additive manufacturing, curated pre-printed design decor, and custom 3D design studio in Bangalore.",
  openGraph: {
    title: "Namma 3D Lab | Precision 3D Printing & Design Studio",
    description: "Curated 3D printed decor, gifts, and precision additive engineering in Bangalore.",
    siteName: "Namma 3D Lab"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), sans-serif' }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

