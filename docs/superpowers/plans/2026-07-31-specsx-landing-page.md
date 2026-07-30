# SpecsX Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance, responsive B2B wholesale eyewear case landing page and product catalog for SpecsX using Next.js, Tailwind CSS v4, and TypeScript.

**Architecture:** A modular single-page application (`src/app/page.tsx`) that composes 12 clean, self-contained React components (`src/components/`) styled using Tailwind CSS tokens defined in `src/app/globals.css`.

**Tech Stack:** Next.js (App Router), React 19, Tailwind CSS v4, TypeScript, Lucide React Icons.

## Global Constraints

- Use Next.js 16+ App Router conventions (`src/app`).
- Use Tailwind CSS v4 custom variables for colors (`--primary-blue: #1D63FF`, `--blue-subtle: #EFF4FF`, `--text-dark: #0B0F19`, `--text-muted: #525866`, `--bg-card: #F8FAFC`, `--border-subtle: #E2E8F0`).
- Ensure all interactive buttons, modals, catalog filters, and color swatch customizers are fully responsive (Mobile, Tablet, Desktop).
- Zero TypeScript errors (`npm run build` validation).

---

### Task 1: Setup Global CSS Design System Tokens

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: Tailwind CSS v4 `@import "tailwindcss";`
- Produces: CSS color variables and utility classes used by all components (`bg-[var(--primary-blue)]`, etc.)

- [ ] **Step 1: Configure global CSS variables in `src/app/globals.css`**

```css
@import "tailwindcss";

:root {
  --primary-blue: #1D63FF;
  --primary-blue-hover: #0049E6;
  --blue-subtle: #EFF4FF;
  --text-dark: #0B0F19;
  --text-muted: #525866;
  --bg-card: #F8FAFC;
  --border-subtle: #E2E8F0;
  --bg-badge-dark: #0B0F19;
}

body {
  background-color: #ffffff;
  color: var(--text-dark);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow-x: hidden;
}
```

- [ ] **Step 2: Update `src/app/layout.tsx` metadata and title**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpecsX — Premium Eyewear Case Manufacturer & Wholesale Supplier",
  description: "High-volume custom eyewear case manufacturing for optical chains, distributors, and brands. Engineered for durability, elegance, and brand protection.",
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
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Success with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "style: configure global CSS theme variables and layout metadata"
```

---

### Task 2: Build Header & Navigation Component (`Navbar.tsx`)

**Files:**
- Create: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: Lucide React (`Menu`, `X`, `ChevronRight`, `PhoneCall`)
- Produces: `Navbar` component, `onOpenModal` callback trigger

- [ ] **Step 1: Create `src/components/Navbar.tsx`**

```tsx
"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenModal: (caseModel?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#1D63FF] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            S
          </div>
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add sticky Navbar component with mobile drawer"
```

---

### Task 3: Build Hero Section Component (`HeroSection.tsx`)

**Files:**
- Create: `src/components/HeroSection.tsx`

**Interfaces:**
- Consumes: Lucide React (`ShieldCheck`, `Award`, `Zap`, `Globe`, `ArrowRight`, `FileText`)
- Produces: `HeroSection` component

- [ ] **Step 1: Create `src/components/HeroSection.tsx`**

```tsx
"use client";

import { ShieldCheck, Award, Zap, Globe, ArrowRight, FileText } from "lucide-react";

interface HeroProps {
  onOpenModal: (caseModel?: string) => void;
}

export default function HeroSection({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-[#EFF4FF]/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF4FF] border border-[#1D63FF]/20 text-[#1D63FF] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#1D63FF] animate-pulse"></span>
              B2B EYEWEAR CASE MANUFACTURING
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
              Premium Eyewear Cases for Modern{" "}
              <span className="text-[#1D63FF]">Optical Businesses</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#525866] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              High-volume custom case manufacturing for optical chains, distributors, and eyewear brands. Engineered for maximum durability, elegance, and complete brand protection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1D63FF] hover:bg-[#0049E6] text-white font-semibold shadow-lg shadow-[#1D63FF]/25 hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
              >
                <span>Request Wholesale Catalog</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-[#0B0F19] font-semibold border border-[#E2E8F0] shadow-sm transition-all flex items-center justify-center gap-2 text-base"
              >
                <FileText className="w-5 h-5 text-[#525866]" />
                <span>Talk to Sales</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-8 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">OEM / ODM Available</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">Fast 15-Day Production</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">Global Distribution</span>
              </div>
            </div>
          </div>

          {/* Right Product Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1D63FF]/20 to-blue-200/50 rounded-3xl blur-2xl -z-10"></div>

              {/* Graphic Mockup Container */}
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-2xl space-y-6">
                <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 border border-[#E2E8F0] flex flex-col items-center justify-center relative overflow-hidden group">
                  
                  {/* CSS Rendered Eyewear Cases Stack */}
                  <div className="relative w-56 h-36 flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    {/* Top Open Hard Case */}
                    <div className="w-48 h-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-black shadow-xl border border-slate-700 flex items-center justify-center relative z-20">
                      <div className="w-40 h-10 rounded-xl bg-blue-900/40 border border-blue-400/30 flex items-center justify-center">
                        <span className="text-[10px] uppercase font-bold text-blue-200 tracking-widest">SPECSX PREMIUM</span>
                      </div>
                    </div>

                    {/* Middle Folding Case */}
                    <div className="w-52 h-14 rounded-2xl bg-gradient-to-r from-[#1D63FF] to-blue-700 shadow-xl border border-blue-400 -mt-4 relative z-10 flex items-center justify-center">
                      <div className="w-12 h-1 rounded-full bg-white/40"></div>
                    </div>

                    {/* Bottom Leather Case */}
                    <div className="w-56 h-12 rounded-2xl bg-gradient-to-r from-amber-900 to-amber-950 shadow-md border border-amber-800 -mt-4 flex items-center justify-center">
                      <span className="text-[9px] text-amber-200 font-semibold uppercase tracking-wider">GENUINE LEATHER</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs font-semibold text-[#525866]">
                    <span>Wholesale Bulk Packaging</span>
                    <span className="text-[#1D63FF] font-bold">500,000+ Units/Mo</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EFF4FF] border border-[#1D63FF]/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#525866]">Minimum Order Quantity</p>
                    <p className="text-sm font-bold text-[#0B0F19]">500 Pcs per model</p>
                  </div>
                  <button
                    onClick={() => onOpenModal("Catalog Overview")}
                    className="px-4 py-2 rounded-lg bg-[#1D63FF] text-white text-xs font-semibold hover:bg-[#0049E6] transition-colors"
                  >
                    Inquire Sample
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: add HeroSection with B2B value props and graphic mockup"
```

---

### Task 4: Build Manufacturing Pillars Component (`ProcessEngineering.tsx`)

**Files:**
- Create: `src/components/ProcessEngineering.tsx`

- [ ] **Step 1: Create `src/components/ProcessEngineering.tsx`**

```tsx
"use client";

import { Layers, Sparkles, Factory, Truck } from "lucide-react";

export default function ProcessEngineering() {
  const pillars = [
    {
      icon: Layers,
      title: "Premium Materials",
      description: "Eco-friendly PU leather, high-grade aluminum shells, microfiber velvet linings, and custom metallic finishes.",
    },
    {
      icon: Sparkles,
      title: "Custom Design",
      description: "Tailored to your brand specs with custom debossing, gold foil stamping, custom dimensions, and pantone matching.",
    },
    {
      icon: Factory,
      title: "Mass Manufacturing",
      description: "Automated precision machinery delivering a monthly production capacity of over 500,000 cases with zero defects.",
    },
    {
      icon: Truck,
      title: "Global Distribution",
      description: "Seamless door-to-door B2B shipping, barcode tagging, custom export packaging, and hassle-free customs clearance.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight">
            Precision Engineering, Every Single Time
          </h2>
          <p className="text-base sm:text-lg text-[#525866]">
            From raw material selection to automated quality inspection, our process ensures zero-defect bulk production for wholesale clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#1D63FF] hover:shadow-lg transition-all group duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-6 group-hover:bg-[#1D63FF] transition-colors shadow-sm">
                  <IconComponent className="w-7 h-7 text-[#1D63FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[#525866] leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProcessEngineering.tsx
git commit -m "feat: add ProcessEngineering component with 4 manufacturing pillars"
```

---

### Task 5: Build Catalog Categories Component (`CatalogCategories.tsx`)

**Files:**
- Create: `src/components/CatalogCategories.tsx`

- [ ] **Step 1: Create `src/components/CatalogCategories.tsx`**

```tsx
"use client";

import { Shield, Feather, Magnet, Box } from "lucide-react";

interface CatalogCategoriesProps {
  onSelectCategory: (cat: string) => void;
}

export default function CatalogCategories({ onSelectCategory }: CatalogCategoriesProps) {
  const categories = [
    {
      id: "hard-cases",
      title: "Hard Shell Cases",
      subtitle: "Maximum protective aluminum & metal shell for optical frames.",
      icon: Shield,
      tag: "Heavy Duty Protection",
      color: "from-blue-600 to-indigo-800",
    },
    {
      id: "soft-pouches",
      title: "Soft Pouches",
      subtitle: "Sleek, portable & lightweight microfiber velvet pouches.",
      icon: Feather,
      tag: "Ultra Lightweight",
      color: "from-emerald-600 to-teal-800",
    },
    {
      id: "magnetic",
      title: "Magnetic Foldable Cases",
      subtitle: "Collapsible space-saving designs with strong magnetic lock.",
      icon: Magnet,
      tag: "Space Saving Bestseller",
      color: "from-amber-600 to-orange-800",
    },
    {
      id: "structure-box",
      title: "Structure Box Cases",
      subtitle: "Luxury rigid presentation boxes for high-end boutique frames.",
      icon: Box,
      tag: "Boutique Luxury",
      color: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight">
              Explore Catalog Range
            </h2>
            <p className="text-base text-[#525866] mt-2">
              Tailored case solutions engineered for every optical brand and price tier.
            </p>
          </div>
          <span className="text-xs font-bold text-[#1D63FF] uppercase tracking-wider bg-[#EFF4FF] px-4 py-2 rounded-full border border-[#1D63FF]/20 self-start md:self-auto">
            4 Core Lines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.title)}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className={`h-40 rounded-xl bg-gradient-to-br ${cat.color} p-4 flex flex-col justify-between mb-6 text-white shadow-inner relative overflow-hidden`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full self-start">
                      {cat.tag}
                    </span>
                    <Icon className="w-12 h-12 opacity-80 group-hover:scale-110 transition-transform self-end" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B0F19] group-hover:text-[#1D63FF] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#525866] mt-2 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#1D63FF]">
                  <span>View Wholesale Models</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CatalogCategories.tsx
git commit -m "feat: add CatalogCategories component"
```

---

### Task 6: Build Featured Products Grid Component (`FeaturedProducts.tsx`)

**Files:**
- Create: `src/components/FeaturedProducts.tsx`

- [ ] **Step 1: Create `src/components/FeaturedProducts.tsx`**

```tsx
"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";

interface FeaturedProductsProps {
  onOpenModal: (caseModel: string) => void;
}

export default function FeaturedProducts({ onOpenModal }: FeaturedProductsProps) {
  const [filter, setFilter] = useState("All");

  const products = [
    {
      id: "SX-101",
      name: "Model SX-101 Pro Hard",
      category: "Hard Shell",
      tag: "BESTSELLER",
      material: "Textured PU Leather + Aluminum Shell",
      moq: "500 pcs",
      colors: ["#0B0F19", "#1D63FF", "#8B5CF6", "#10B981"],
      imageBg: "bg-slate-900",
    },
    {
      id: "SX-204",
      name: "Model SX-204 Soft Pouch",
      category: "Soft Pouches",
      tag: "NEW",
      material: "Ultra-Soft Microfiber Felt + Drawstring",
      moq: "1,000 pcs",
      colors: ["#64748B", "#D97706", "#EC4899"],
      imageBg: "bg-amber-800",
    },
    {
      id: "SX-305",
      name: "Model SX-305 Magnetic Triangle",
      category: "Magnetic",
      tag: "BESTSELLER",
      material: "Collapsible Rigid Board + N52 Magnet",
      moq: "500 pcs",
      colors: ["#0B0F19", "#1D63FF", "#047857"],
      imageBg: "bg-[#1D63FF]",
    },
    {
      id: "SX-402",
      name: "Model SX-402 Luxury Box",
      category: "Structure Box",
      tag: "PREMIUM",
      material: "Rigid Bookboard + Velvet Cushion",
      moq: "300 pcs",
      colors: ["#0F172A", "#B45309"],
      imageBg: "bg-slate-800",
    },
    {
      id: "SX-508",
      name: "Model SX-508 Eco Felt",
      category: "Soft Pouches",
      tag: "ECO-FRIENDLY",
      material: "Recycled PET Felt + Wooden Button",
      moq: "1,000 pcs",
      colors: ["#475569", "#15803D"],
      imageBg: "bg-emerald-900",
    },
    {
      id: "SX-612",
      name: "Model SX-612 Slim Metallic",
      category: "Hard Shell",
      tag: "NEW",
      material: "Anodized Matte Aluminum Alloy",
      moq: "500 pcs",
      colors: ["#334155", "#94A3B8", "#B91C1C"],
      imageBg: "bg-zinc-800",
    },
    {
      id: "SX-715",
      name: "Model SX-715 Executive Fold",
      category: "Magnetic",
      tag: "BESTSELLER",
      material: "Cross-grain PU + Magnetic Closure",
      moq: "500 pcs",
      colors: ["#0B0F19", "#78350F", "#1E3A8A"],
      imageBg: "bg-amber-950",
    },
    {
      id: "SX-820",
      name: "Model SX-820 Custom Embossed",
      category: "Structure Box",
      tag: "CUSTOM OEM",
      material: "Full Foil Stamped Pattern + Satin",
      moq: "500 pcs",
      colors: ["#0B0F19", "#B91C1C", "#1D63FF"],
      imageBg: "bg-indigo-950",
    },
  ];

  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight">
              Featured Wholesale Products
            </h2>
            <p className="text-base text-[#525866] mt-2">
              Our highest volume case designs ready for custom logo embossing.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#F8FAFC] p-1.5 rounded-xl border border-[#E2E8F0]">
            {["All", "Hard Shell", "Magnetic", "Soft Pouches", "Structure Box"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filter === tab
                    ? "bg-[#1D63FF] text-white shadow-sm"
                    : "text-[#525866] hover:text-[#0B0F19]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Placeholder Render */}
                <div className={`h-52 ${prod.imageBg} p-4 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white px-2.5 py-1 rounded-full backdrop-blur-md">
                      {prod.tag}
                    </span>
                    <span className="text-[10px] font-semibold text-white/80 bg-white/20 px-2 py-0.5 rounded">
                      {prod.id}
                    </span>
                  </div>

                  {/* Stylized Eyewear Case Shape */}
                  <div className="w-40 h-20 mx-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-xs font-bold text-white tracking-widest">SPECSX</span>
                    <span className="text-[9px] text-white/70">OEM CASE</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {prod.colors.map((c, i) => (
                      <span key={i} className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm" style={{ backgroundColor: c }}></span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-[#0B0F19] group-hover:text-[#1D63FF] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#525866] line-clamp-2">
                    {prod.material}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#525866] pt-3 border-t border-[#E2E8F0]">
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-[#1D63FF]" />
                    MOQ: <strong className="text-[#0B0F19]">{prod.moq}</strong>
                  </span>
                  <span className="text-[#10B981] font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> In Stock
                  </span>
                </div>

                <button
                  onClick={() => onOpenModal(prod.name)}
                  className="w-full py-2.5 rounded-xl bg-[#EFF4FF] hover:bg-[#1D63FF] text-[#1D63FF] hover:text-white font-semibold text-xs transition-colors text-center"
                >
                  Inquire Wholesale Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FeaturedProducts.tsx
git commit -m "feat: add FeaturedProducts grid component with tab filtering"
```

---

### Task 7: Build Interactive Color Swatch Customizer (`ColorPossibilities.tsx`)

**Files:**
- Create: `src/components/ColorPossibilities.tsx`

- [ ] **Step 1: Create `src/components/ColorPossibilities.tsx`**

```tsx
"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

export default function ColorPossibilities() {
  const colorOptions = [
    { name: "Midnight Black", hex: "#0B0F19", pms: "Pantone Black C", bgClass: "bg-[#0B0F19]" },
    { name: "Royal Navy", hex: "#1D63FF", pms: "Pantone 286 C", bgClass: "bg-[#1D63FF]" },
    { name: "Caramel Brown", hex: "#854D0E", pms: "Pantone 730 C", bgClass: "bg-[#854D0E]" },
    { name: "Charcoal Grey", hex: "#475569", pms: "Pantone 425 C", bgClass: "bg-[#475569]" },
    { name: "Crimson Red", hex: "#B91C1C", pms: "Pantone 186 C", bgClass: "bg-[#B91C1C]" },
    { name: "Champagne Gold", hex: "#D97706", pms: "Pantone 7555 C", bgClass: "bg-[#D97706]" },
  ];

  const [selectedColor, setSelectedColor] = useState(colorOptions[1]);

  return (
    <section id="customization" className="py-24 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1D63FF]/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Swatches */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#1D63FF]" />
              <span>UNLIMITED CUSTOMIZATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Unlimited <span className="text-[#1D63FF]">Color Possibilities</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl">
              Choose from over 500+ Pantone matched synthetic leathers, microfiber fabrics, velvet linings, and metallic anodized aluminum finishes.
            </p>

            {/* Color Selector Buttons */}
            <div className="space-y-4 pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Select Pantone Finish Preview:
              </p>
              <div className="flex flex-wrap gap-4">
                {colorOptions.map((opt) => (
                  <button
                    key={opt.name}
                    onClick={() => setSelectedColor(opt)}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${opt.bgClass} ${
                      selectedColor.name === opt.name
                        ? "ring-4 ring-[#1D63FF] scale-110"
                        : "opacity-80 hover:opacity-100 hover:scale-105"
                    }`}
                    title={opt.name}
                  >
                    {selectedColor.name === opt.name && <Check className="w-5 h-5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Color Info Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Selected Color Option</p>
                <p className="text-lg font-bold text-white mt-1">{selectedColor.name}</p>
                <p className="text-xs text-[#1D63FF] font-semibold mt-0.5">{selectedColor.pms}</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-gray-300">
                {selectedColor.hex}
              </div>
            </div>
          </div>

          {/* Right Product Image Interactive Preview */}
          <div className="lg:col-span-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center">
              
              <div className="w-full h-80 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500 shadow-2xl" style={{ backgroundColor: selectedColor.hex }}>
                <div className="w-64 h-32 rounded-3xl border-2 border-white/30 bg-black/20 backdrop-blur-md flex flex-col items-center justify-center text-white shadow-2xl space-y-2 transform hover:scale-105 transition-transform">
                  <span className="text-sm font-extrabold tracking-widest">YOUR LOGO HERE</span>
                  <span className="text-[10px] text-white/70 uppercase">Debossed / Gold Foil Stamped</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between w-full text-xs text-gray-400">
                <span>Inner Lining: Microfiber Velvet</span>
                <span className="text-white font-semibold">Custom Embossing Available</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ColorPossibilities.tsx
git commit -m "feat: add interactive ColorPossibilities component"
```

---

### Task 8: Build Retailer's Choice & Manufacturing Gallery Components (`RetailersChoice.tsx`, `InsideSpecsX.tsx`)

**Files:**
- Create: `src/components/RetailersChoice.tsx`
- Create: `src/components/InsideSpecsX.tsx`

- [ ] **Step 1: Create `src/components/RetailersChoice.tsx`**

```tsx
"use client";

import { DollarSign, ShieldCheck, Clock, Palette, Leaf, UserCheck } from "lucide-react";

export default function RetailersChoice() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Wholesale Pricing",
      desc: "Direct factory pricing with tiered volume discounts starting from 500 units.",
    },
    {
      icon: ShieldCheck,
      title: "Strict Quality Assurance",
      desc: "100% inline quality inspection before packaging to guarantee zero defects.",
    },
    {
      icon: Clock,
      title: "Fast Production Turnaround",
      desc: "Rapid sampling in 3 days and full order fulfillment in as fast as 15-20 days.",
    },
    {
      icon: Palette,
      title: "Custom Logo Branding",
      desc: "Inner lining silk stamping, exterior debossing, and custom outer packaging.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      desc: "Sustainable options including GRS-certified recycled PU and organic cotton.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Manager",
      desc: "Personalized B2B support throughout your entire sampling and delivery process.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight">
            The Retailer's Choice
          </h2>
          <p className="text-base text-[#525866]">
            Built specifically to empower optical chains, independent optometrists, and eyewear brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-lg transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] border border-[#1D63FF]/20 flex items-center justify-center text-[#1D63FF]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19]">{b.title}</h3>
                <p className="text-sm text-[#525866] leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/components/InsideSpecsX.tsx`**

```tsx
"use client";

import { Camera } from "lucide-react";

export default function InsideSpecsX() {
  const galleryItems = [
    { title: "Automated Laser Cutting Facility", category: "Machinery", bg: "bg-slate-900" },
    { title: "Handcrafted Stitching & Finishing", category: "Craftsmanship", bg: "bg-zinc-800" },
    { title: "Raw PU Leather Quality Inspection", category: "QA Testing", bg: "bg-blue-950" },
    { title: "High-Volume Packaging Line", category: "Logistics", bg: "bg-stone-900" },
    { title: "Custom Mold & Tooling Department", category: "R&D", bg: "bg-[#0B0F19]" },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight">
              Inside SpecsX
            </h2>
            <p className="text-base text-[#525866] mt-2">
              Take a look inside our state-of-the-art case manufacturing facility.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#525866]">
            <Camera className="w-4 h-4 text-[#1D63FF]" />
            <span>Factory Tour Gallery</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`h-64 rounded-2xl ${item.bg} p-6 flex flex-col justify-between text-white border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden relative`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full self-start">
                {item.category}
              </span>

              <div className="space-y-1 relative z-10">
                <h3 className="text-lg font-bold group-hover:text-[#1D63FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300">SpecsX Plant 1 — ISO Certified</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/RetailersChoice.tsx src/components/InsideSpecsX.tsx
git commit -m "feat: add RetailersChoice and InsideSpecsX factory gallery components"
```

---

### Task 9: Build Inquiry Form & Stats Component (`InquirySection.tsx`)

**Files:**
- Create: `src/components/InquirySection.tsx`

- [ ] **Step 1: Create `src/components/InquirySection.tsx`**

```tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "500-1000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: History & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight">
              Protecting Vision <br />
              <span className="text-[#1D63FF]">Since 2008</span>
            </h2>

            <p className="text-base sm:text-lg text-[#525866] leading-relaxed">
              SpecsX has been a trusted leader in custom eyewear case manufacturing for over 15 years. We partner directly with optical chains, optometrists, and eyewear brands worldwide to deliver premium protective solutions.
            </p>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E2E8F0]">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19]">15+</p>
                <p className="text-xs font-semibold text-[#525866] mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1D63FF]">20M+</p>
                <p className="text-xs font-semibold text-[#525866] mt-1">Cases Produced</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19]">500+</p>
                <p className="text-xs font-semibold text-[#525866] mt-1">B2B Clients</p>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <h4 className="text-sm font-bold text-[#0B0F19]">Direct Sales Office:</h4>
              <div className="space-y-2 text-xs text-[#525866]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#1D63FF]" />
                  <span>sales@specsx.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#1D63FF]" />
                  <span>+1 (800) 555-0199</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#1D63FF]" />
                  <span>SpecsX Industrial Park, Building 4A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: B2B Quote Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-xl">
              <h3 className="text-2xl font-bold text-[#0B0F19] mb-2">Request Wholesale Quote</h3>
              <p className="text-xs text-[#525866] mb-8">
                Fill out the form below to receive a custom price quotation and free physical sample kit.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto" />
                  <h4 className="text-xl font-bold text-[#0B0F19]">Inquiry Received!</h4>
                  <p className="text-sm text-[#525866]">
                    Our B2B account team will contact you within 24 hours with a formal quotation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B0F19] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B0F19] mb-2">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@opticalstore.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B0F19] mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B0F19] mb-2">Estimated Order Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                    >
                      <option value="500-1000">500 – 1,000 units (Sample/Trial)</option>
                      <option value="1000-5000">1,000 – 5,000 units</option>
                      <option value="5000-20000">5,000 – 20,000 units</option>
                      <option value="20000+">20,000+ units (Wholesale Chain)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B0F19] mb-2">Message / Custom Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Describe case models, logo embossing, or custom packaging needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#1D63FF] hover:bg-[#0049E6] text-white font-bold text-sm shadow-lg shadow-[#1D63FF]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit B2B Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/InquirySection.tsx
git commit -m "feat: add InquirySection component with form and statistics"
```

---

### Task 10: Build Quote Modal & Footer Components (`InquiryModal.tsx`, `Footer.tsx`)

**Files:**
- Create: `src/components/InquiryModal.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create `src/components/InquiryModal.tsx`**

```tsx
"use client";

import { X, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModel?: string;
}

export default function InquiryModal({ isOpen, onClose, selectedModel }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0]">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-[#525866]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto" />
            <h3 className="text-2xl font-bold text-[#0B0F19]">Quote Request Sent!</h3>
            <p className="text-xs text-[#525866]">
              Thank you for inquiring about {selectedModel || "SpecsX Eyewear Cases"}. Our team will send a proposal shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#1D63FF] text-white text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold text-[#1D63FF] uppercase tracking-wider bg-[#EFF4FF] px-3 py-1 rounded-full">
                B2B DIRECT QUOTE
              </span>
              <h3 className="text-2xl font-bold text-[#0B0F19] mt-2">
                Inquire for {selectedModel || "Custom Case Order"}
              </h3>
              <p className="text-xs text-[#525866] mt-1">
                Fast sampling & wholesale pricing for bulk buyers.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-[#0B0F19] mb-1">Company / Store Name *</label>
                <input required type="text" placeholder="e.g. VisionOptics Ltd." className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs focus:ring-2 focus:ring-[#1D63FF] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B0F19] mb-1">Business Email *</label>
                <input required type="email" placeholder="contact@visionoptics.com" className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs focus:ring-2 focus:ring-[#1D63FF] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B0F19] mb-1">Target Quantity</label>
                <input type="text" defaultValue="1,000 units" className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs focus:ring-2 focus:ring-[#1D63FF] focus:outline-none" />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1D63FF] hover:bg-[#0049E6] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Quotation</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/Footer.tsx`**

```tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1D63FF] flex items-center justify-center font-bold text-white text-base">
                S
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Specs<span className="text-[#1D63FF]">X</span>
              </span>
            </div>
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
            <p className="text-xs text-gray-400 mt-1">Phone: +1 (800) 555-0199</p>
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
```

- [ ] **Step 3: Commit**

```bash
git add src/components/InquiryModal.tsx src/components/Footer.tsx
git commit -m "feat: add InquiryModal and Footer components"
```

---

### Task 11: Assemble Main Page (`src/app/page.tsx`) & Verify Build

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Compose all components into `src/app/page.tsx`**

```tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessEngineering from "@/components/ProcessEngineering";
import CatalogCategories from "@/components/CatalogCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import ColorPossibilities from "@/components/ColorPossibilities";
import RetailersChoice from "@/components/RetailersChoice";
import InsideSpecsX from "@/components/InsideSpecsX";
import InquirySection from "@/components/InquirySection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | undefined>(undefined);

  const handleOpenModal = (model?: string) => {
    setSelectedModel(model);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#0B0F19] selection:bg-[#1D63FF] selection:text-white">
      <Navbar onOpenModal={handleOpenModal} />
      <HeroSection onOpenModal={handleOpenModal} />
      <ProcessEngineering />
      <CatalogCategories onSelectCategory={(cat) => handleOpenModal(cat)} />
      <FeaturedProducts onOpenModal={handleOpenModal} />
      <ColorPossibilities />
      <RetailersChoice />
      <InsideSpecsX />
      <InquirySection />
      <Footer />
      
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedModel={selectedModel}
      />
    </main>
  );
}
```

- [ ] **Step 2: Run build to verify zero errors**

Run: `npm run build`
Expected: Build succeeds with 0 errors and generates static App Router routes.

- [ ] **Step 3: Final Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: complete SpecsX B2B landing page assembly"
```
