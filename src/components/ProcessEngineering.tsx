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
