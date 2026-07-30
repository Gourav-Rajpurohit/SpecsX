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
      title: "Eco-Friendly Options",
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
