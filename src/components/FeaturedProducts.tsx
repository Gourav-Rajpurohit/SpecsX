"use client";

import { useState } from "react";
import Image from "next/image";
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
                  <div className="w-40 h-20 mx-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 p-2">
                    <Image
                      src="/logo.png"
                      alt="SpecsX Logo"
                      width={90}
                      height={25}
                      className="h-6 w-auto object-contain brightness-0 invert opacity-95"
                    />
                    <span className="text-[8px] text-white/80 font-medium tracking-wider uppercase mt-1">OEM CASE</span>
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
