"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="SpecsX Logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              Premier B2B eyewear case manufacturer and wholesale distributor. Engineering durable protection and high-end branding for optical businesses worldwide.
            </p>
          </div>

          {/* Catalog Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Product Catalog</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Hard Shell Cases</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Soft Microfiber Pouches</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Magnetic Collapsible Cases</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Structure Rigid Boxes</a></li>
            </ul>
          </div>

          {/* Manufacturing */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Manufacturing</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#customization" className="hover:text-white transition-colors">Pantone Color Matching</a></li>
              <li><a href="#customization" className="hover:text-white transition-colors">Debossing & Foil Stamping</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">ISO 9001 Compliance</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">OEM / ODM Custom Tooling</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Global Sales</h4>
            <p className="text-xs text-gray-400">Inquiries: sales@specsx.com</p>
            <p className="text-xs text-gray-400 mt-1">Phone: +91 73405 53468</p>
            <p className="text-xs text-gray-400 mt-1">Mon – Fri: 8:00 AM – 6:00 PM EST</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} SpecsX Eyewear Manufacturing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Wholesale Service</a>
            <a href="#" className="hover:text-gray-300">ISO Certification</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
