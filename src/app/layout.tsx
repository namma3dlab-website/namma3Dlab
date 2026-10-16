import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namma 3D Lab | Precision 3D Printing & Rapid Prototyping",
  description: "Precision additive manufacturing, rapid prototyping, and custom gifts in Bangalore. Instant STL mesh volume calculation with transparent pricing and ±0.1mm tolerance.",
  themeColor: "#0A0D14",
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
      <body>{children}</body>
    </html>
  );
}
