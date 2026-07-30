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
