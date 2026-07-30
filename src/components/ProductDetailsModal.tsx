"use client";

import Image from "next/image";
import { X, Check, ShieldCheck, Zap, Sparkles, Send, Box, Factory, Phone } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  tag: string;
  material: string;
  moq: string;
  colors: string[];
  imageSrc: string;
}

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (modelName: string) => void;
}

export default function ProductDetailsModal({
  product,
  isOpen,
  onClose,
  onRequestQuote,
}: ProductDetailsModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      {/* Container Card */}
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-[#E2E8F0] p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 hover:bg-gray-100 text-[#0B0F19] border border-[#E2E8F0] shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Image */}
          <div className="md:col-span-5 relative">
            <div className="h-64 sm:h-80 w-full bg-gray-100 rounded-2xl relative overflow-hidden border border-[#E2E8F0] shadow-inner group">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

              {/* Tag & ID Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="text-xs font-bold uppercase tracking-wider bg-black/80 text-white px-3 py-1 rounded-full backdrop-blur-md">
                  {product.tag}
                </span>
                <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                  {product.id}
                </span>
              </div>

              {/* Color swatches preview */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                <span className="text-[10px] text-white/80 font-medium">Color Options:</span>
                {product.colors.map((c, i) => (
                  <span key={i} className="w-4 h-4 rounded-full border border-white/70 shadow-sm" style={{ backgroundColor: c }}></span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Product Specs & Features */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#1D63FF] uppercase tracking-wider bg-[#EFF4FF] px-3 py-1 rounded-full border border-[#1D63FF]/20">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] mt-3">
                {product.name}
              </h2>
              <p className="text-xs text-[#525866] mt-1 font-medium">
                Wholesale Eyewear Protective Case Model
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
              <div>
                <span className="text-[#525866]">Material:</span>
                <p className="font-bold text-[#0B0F19] mt-0.5">{product.material}</p>
              </div>
              <div>
                <span className="text-[#525866]">Minimum Order (MOQ):</span>
                <p className="font-bold text-[#1D63FF] mt-0.5">{product.moq}</p>
              </div>
              <div>
                <span className="text-[#525866]">Availability:</span>
                <p className="font-bold text-[#10B981] mt-0.5 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock
                </p>
              </div>
              <div>
                <span className="text-[#525866]">Production Time:</span>
                <p className="font-bold text-[#0B0F19] mt-0.5">15 Days Turnaround</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-2 text-xs text-[#0B0F19]">
              <p className="font-bold text-[#525866] uppercase tracking-wider text-[10px]">Manufacturing Highlights:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1D63FF] shrink-0" />
                  <span>High Impact & Crush Resistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1D63FF] shrink-0" />
                  <span>Custom Logo Embossing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#1D63FF] shrink-0" />
                  <span>Microfiber Velvet Inner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-[#1D63FF] shrink-0" />
                  <span>OEM Packaging & Barcode</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  window.location.href = "tel:7340553468";
                  onRequestQuote(product.name);
                }}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-[#1D63FF] hover:bg-[#0049E6] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#1D63FF]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Inquire Quote</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#F8FAFC] hover:bg-gray-100 text-[#525866] font-semibold text-xs border border-[#E2E8F0] transition-colors"
              >
                Back to Catalog
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
