"use client";

import Image from "next/image";
import { ShieldCheck, Award, Zap, Globe, PackageCheck, Sparkles, Building2 } from "lucide-react";

export default function HeroSection() {
  const heroImages = [
    { src: "/hero1.png", alt: "SpecsX Premium Case 1" },
    { src: "/hero2.png", alt: "SpecsX Premium Case 2" },
    { src: "/hero3.png", alt: "SpecsX Premium Case 3" },
    { src: "/hero4.png", alt: "SpecsX Premium Case 4" },
  ];

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1D63FF]/15 to-blue-300/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Stats */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF4FF] border border-[#1D63FF]/20 text-[#1D63FF] text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#1D63FF] animate-ping"></span>
              B2B Wholesale & Custom Manufacturing
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.1]">
              Custom Eyewear Cases <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#1D63FF] to-blue-700 bg-clip-text text-transparent">
                Engineered to Scale.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#525866] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              High-volume custom case manufacturing for optical chains, distributors, and eyewear brands. Engineered for maximum durability, elegance, and complete brand protection.
            </p>

            {/* Key Value Stat Highlights (Hidden on Mobile) */}
            <div className="hidden sm:grid grid-cols-3 gap-4 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[#1D63FF] mb-1">
                  <PackageCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#525866]">Capacity</span>
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0B0F19]">500K+</p>
                <p className="text-[11px] text-[#525866] mt-0.5">Units per month</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[#1D63FF] mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#525866]">Turnaround</span>
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0B0F19]">15 Days</p>
                <p className="text-[11px] text-[#525866] mt-0.5">Rapid production</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[#1D63FF] mb-1">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#525866]">Partners</span>
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0B0F19]">500+</p>
                <p className="text-[11px] text-[#525866] mt-0.5">Optical chains</p>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">OEM / ODM Available</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">Pantone Color Match</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-[#1D63FF]" />
                <span className="text-xs font-semibold text-[#0B0F19]">Global Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Hero Images Grid Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1D63FF]/20 via-blue-300/30 to-purple-200/20 rounded-3xl blur-2xl -z-10"></div>

            {/* 2x2 Image Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
              {heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-40 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out bg-white group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
