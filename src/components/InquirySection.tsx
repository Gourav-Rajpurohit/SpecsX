"use client";

import { Phone, Mail, MapPin, Building, ShieldCheck, Clock } from "lucide-react";

export default function InquirySection() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & History */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D63FF] bg-[#EFF4FF] px-4 py-1.5 rounded-full border border-[#1D63FF]/20">
            WHOLESALE DISTRIBUTION & MANUFACTURING
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight">
            Protecting Vision <span className="text-[#1D63FF]">Since 2008</span>
          </h2>
          <p className="text-base sm:text-lg text-[#525866] leading-relaxed">
            SpecsX has been a trusted leader in custom eyewear case manufacturing for over 15 years. We partner directly with optical chains, optometrists, and eyewear brands worldwide to deliver premium protective solutions.
          </p>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-2">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#0B0F19]">15+</p>
            <p className="text-sm font-semibold text-[#525866]">Years Manufacturing Experience</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#EFF4FF] border border-[#1D63FF]/20 text-center space-y-2">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#1D63FF]">20M+</p>
            <p className="text-sm font-semibold text-[#0B0F19]">Cases Delivered Worldwide</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-2">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#0B0F19]">500+</p>
            <p className="text-sm font-semibold text-[#525866]">B2B Optical Clients</p>
          </div>
        </div>

        {/* Direct Contact & Sales Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Direct Sales */}
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] border border-[#1D63FF]/20 flex items-center justify-center text-[#1D63FF]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B0F19]">B2B Direct Sales Office</h3>
                <p className="text-xs text-[#525866]">Wholesale Orders & Quotations</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E2E8F0] text-sm text-[#0B0F19]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1D63FF]" />
                <span className="font-semibold">sales@specsx.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1D63FF]" />
                <span className="font-semibold">+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#525866]">
                <Clock className="w-4 h-4 text-[#1D63FF]" />
                <span>Monday – Friday: 8:00 AM – 6:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* Card 2: Plant & HQ Address */}
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] border border-[#1D63FF]/20 flex items-center justify-center text-[#1D63FF]">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B0F19]">Manufacturing Plant & HQ</h3>
                <p className="text-xs text-[#525866]">Global Export Facility</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E2E8F0] text-sm text-[#0B0F19]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1D63FF] shrink-0 mt-1" />
                <span className="font-semibold">SpecsX Industrial Park, Building 4A, Global Freight Hub</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#525866]">
                <ShieldCheck className="w-4 h-4 text-[#1D63FF]" />
                <span>ISO 9001 Certified Production Line</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
