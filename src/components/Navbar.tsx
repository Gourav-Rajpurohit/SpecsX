"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenModal: (caseModel?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="SpecsX Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            priority
          />
          <span className="text-2xl font-extrabold tracking-tight text-[#0B0F19]">
            Specs<span className="text-[#1D63FF]">X</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525866]">
          <a href="#catalog" className="hover:text-[#1D63FF] transition-colors">Catalog</a>
          <a href="#process" className="hover:text-[#1D63FF] transition-colors">Manufacturing</a>
          <a href="#customization" className="hover:text-[#1D63FF] transition-colors">Custom Branding</a>
          <a href="#why-us" className="hover:text-[#1D63FF] transition-colors">Why SpecsX</a>
          <a href="#contact" className="hover:text-[#1D63FF] transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenModal()}
            className="px-6 py-2.5 rounded-full bg-[#0B0F19] hover:bg-[#1D63FF] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#0B0F19] hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#0B0F19]">Catalog</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#0B0F19]">Manufacturing</a>
          <a href="#customization" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#0B0F19]">Custom Branding</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#0B0F19]">Why SpecsX</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#0B0F19]">Contact</a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full mt-3 py-3 rounded-full bg-[#1D63FF] text-white font-semibold text-center"
          >
            Get B2B Quote
          </button>
        </div>
      )}
    </header>
  );
}
