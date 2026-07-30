# SpecsX B2B Wholesale Eyewear Case Landing Page — Design Spec

**Date**: 2026-07-31  
**Project**: SpecsX Landing Page & Catalog  
**Stack**: Next.js (App Router), Tailwind CSS v4, TypeScript, Lucide React Icons  

---

## 1. Overview & Purpose

SpecsX is a premier B2B manufacturer and wholesale distributor of eyewear cases for optical chains, distributors, optometrists, and eyewear brands. This landing page serves as an interactive product catalog and B2B lead generation portal, allowing clients to explore case categories, view model specifications, customize color preferences, learn about manufacturing standards, and request wholesale quotes or physical samples.

---

## 2. Design System & Global CSS Theme

All primary design tokens and color variables are saved in `src/app/globals.css`.

### Color Palette
- **Electric Royal Blue (`--primary-blue`)**: `#1D63FF` (Main CTA buttons, highlighted typography, active pills)
- **Primary Hover (`--primary-blue-hover`)**: `#0049E6`
- **Subtle Blue Tint (`--blue-subtle`)**: `#EFF4FF` (Badges, tag backgrounds, interactive highlights)
- **Rich Dark Charcoal (`--text-dark`)**: `#0B0F19` (Headings, primary titles)
- **Muted Slate Grey (`--text-muted`)**: `#525866` (Body text, subtext, captions)
- **Soft Grey Card BG (`--bg-card`)**: `#F8FAFC` (Card containers, section backgrounds)
- **Subtle Border (`--border-subtle`)**: `#E2E8F0` (Borders, dividers)
- **Dark Badge Accent (`--bg-badge-dark`)**: `#0B0F19` (Bestseller & New tags)

---

## 3. Architecture & Modular Component Structure

The landing page will be built as a single responsive page (`src/app/page.tsx`) composing modular React components located in `src/components/`:

```
src/
├── app/
│   ├── globals.css          # Design tokens, Tailwind CSS import, custom utilities
│   ├── layout.tsx           # Root layout with fonts, metadata, mobile viewport setup
│   └── page.tsx             # Main page importing and organizing all sections
└── components/
    ├── Navbar.tsx           # Sticky responsive header with logo, navigation & CTA button
    ├── HeroSection.tsx      # B2B badge, headline, subtext, action buttons, trust badges & hero graphic
    ├── ProcessEngineering.tsx # 4 manufacturing pillars (Materials, Design, Capacity, Logistics)
    ├── CatalogCategories.tsx # 4 catalog ranges (Hard, Soft, Magnetic Foldable, Structure Box)
    ├── FeaturedProducts.tsx # 8 product cards with category filtering, MOQ, and sample request
    ├── ProcessSteps.tsx     # 5-step wholesale workflow (Selection -> Delivery)
    ├── ColorPossibilities.tsx # Interactive 6-color swatch customizer with dynamic image preview
    ├── RetailersChoice.tsx  # 6 retailer benefit cards (Pricing, QA, Fast Turnaround, etc.)
    ├── InsideSpecsX.tsx     # Manufacturing facility & craftsmanship photo gallery grid
    ├── InquirySection.tsx   # Company history/stats counter + B2B quote inquiry form
    ├── InquiryModal.tsx     # Slide-over popup modal for instant quote & sample requests
    └── Footer.tsx           # Brand footer with links, compliance, and contact details
```

---

## 4. Section Specifications

### 4.1 Header (`Navbar.tsx`)
- **Left**: SpecsX Brand Logo with sleek typography.
- **Center**: Navigation Links (*Catalog*, *Process*, *Custom Branding*, *Why SpecsX*, *Contact*).
- **Right**: "Get Quote" pill button triggering the inquiry modal + mobile hamburger toggle drawer.

### 4.2 Hero Section (`HeroSection.tsx`)
- **Badge**: "B2B EYEWEAR CASE MANUFACTURING" in subtle blue badge.
- **Headline**: "Premium Eyewear Cases for Modern **Optical Businesses**".
- **Subtext**: High-volume custom case manufacturing for optical chains, distributors, and brands.
- **CTAs**: "Request Wholesale Catalog" (Primary Blue), "Talk to Sales" (Secondary Outline).
- **Trust Badges**: ISO Certified, OEM/ODM Available, Fast Production, Global Shipping.
- **Showcase Graphic**: Clean SVG/CSS render of open & closed stacked hard cases.

### 4.3 Manufacturing Pillars (`ProcessEngineering.tsx`)
- **Title**: "Precision Engineering, Every Single Time"
- 4 Cards:
  1. *Premium Materials* (Eco-leather, aluminum, velvet lining)
  2. *Custom Design* (Embossing, foil stamping, custom sizing)
  3. *Mass Manufacturing* (500k+ cases/month automated capacity)
  4. *Global Logistics* (Export compliance & barcode tagging)

### 4.4 Catalog Categories (`CatalogCategories.tsx`)
- **Title**: "Explore Catalog Range"
- 4 Category Cards: Hard Cases, Soft Pouches, Magnetic Foldable Cases, Structure Box Cases.

### 4.5 Featured Products (`FeaturedProducts.tsx`)
- Filter tabs: *All*, *Hard Shell*, *Magnetic*, *Foldable*, *Soft Pouches*.
- Grid of 8 B2B Models (SX-101, SX-204, SX-305, SX-402, SX-508, SX-612, SX-715, SX-820).
- Features on each card: Bestseller/New tag, image placeholder, material info, color dots, MOQ (e.g. 500 pcs), and "Inquire Now" button.

### 4.6 5-Step Process (`ProcessSteps.tsx`)
- Horizontal stepper: Material Selection -> Custom Branding -> Quality Inspection -> Bulk Packaging -> Global Delivery.

### 4.7 Interactive Color Possibilities (`ColorPossibilities.tsx`)
- Interactive state allowing users to pick colors: *Midnight Black*, *Royal Navy*, *Caramel Brown*, *Charcoal Grey*, *Crimson Red*, *Champagne Gold*.
- Live updating color title, hex code, and case rendering preview.

### 4.8 Retailer's Choice (`RetailersChoice.tsx`)
- 6 Grid benefits: Direct Factory Pricing, 100% QA Inspection, 15-20 Day Turnaround, Inner Lining Logo Stamping, Eco-Friendly Options, Dedicated B2B Support.

### 4.9 Inside SpecsX Gallery (`InsideSpecsX.tsx`)
- Visual grid showcasing factory floors, automated laser cutting, stitching, packaging, and quality checks.

### 4.10 B2B Inquiry Form & Stats (`InquirySection.tsx`)
- Left: "Protecting Vision Since 2008", 15+ Years, 20M+ Cases, 500+ B2B Clients.
- Right: Interactive form (Name, Business Email, Company, Order Quantity, Case Model, Message) with instant confirmation state.

### 4.11 Modal & Footer (`InquiryModal.tsx`, `Footer.tsx`)
- Global popup modal for quotes.
- Full footer with navigation, contact info (`sales@specsx.com`), and copyright.

---

## 5. Verification & Quality Assurance

- **Build Check**: Run `npm run build` to verify zero TypeScript errors.
- **Responsiveness**: Verify smooth layout on Mobile (375px), Tablet (768px), and Desktop (1440px).
- **Interactivity**: Verify modal toggles, color swatches, catalog filters, and inquiry form submission.
