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
