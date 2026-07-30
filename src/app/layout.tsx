import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpecsX — Premium Eyewear Case Manufacturer & Wholesale Supplier",
  description: "High-volume custom eyewear case manufacturing for optical chains, distributors, and brands. Engineered for durability, elegance, and brand protection.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#1D63FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
