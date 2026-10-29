import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const viewport: Viewport = {
  themeColor: "#0A0D14",
};

export const metadata: Metadata = {
  title: "Namma 3D Lab | Precision 3D Printing & Rapid Prototyping",
  description: "Precision additive manufacturing, rapid prototyping, and custom gifts in Bangalore. Instant STL mesh volume calculation with transparent pricing and ±0.1mm tolerance.",
  openGraph: {
    title: "Namma 3D Lab | Additive Manufacturing Farm",
    description: "Precision 3D printing, custom gifts, engineering models, and rapid additive manufacturing in Bangalore.",
    siteName: "Namma 3D Lab"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
