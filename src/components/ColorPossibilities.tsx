"use client";

import { useState } from "react";
import Image from "next/image";
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
                <div className="w-64 h-32 rounded-3xl border-2 border-white/30 bg-black/30 backdrop-blur-md flex flex-col items-center justify-center text-white shadow-2xl space-y-2 transform hover:scale-105 transition-transform p-4">
                  <Image
                    src="/logo.png"
                    alt="SpecsX Logo Custom Emboss"
                    width={140}
                    height={40}
                    className="h-10 w-auto object-contain brightness-0 invert drop-shadow-md"
                  />
                  <span className="text-[10px] text-white/80 uppercase font-medium tracking-wider">Debossed / Gold Foil Stamped</span>
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
