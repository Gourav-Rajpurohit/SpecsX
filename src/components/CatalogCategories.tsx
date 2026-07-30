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
