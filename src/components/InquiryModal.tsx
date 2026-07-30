"use client";

import { X, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModel?: string;
}

export default function InquiryModal({ isOpen, onClose, selectedModel }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0]">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-[#525866]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto" />
            <h3 className="text-2xl font-bold text-[#0B0F19]">Quote Request Sent!</h3>
            <p className="text-xs text-[#525866]">
              Thank you for inquiring about {selectedModel || "SpecsX Eyewear Cases"}. Our team will send a proposal shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#1D63FF] text-white text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <Image
                src="/logo.png"
                alt="SpecsX Logo"
                width={120}
                height={35}
                className="h-8 w-auto object-contain mb-3"
              />
              <span className="text-[10px] font-bold text-[#1D63FF] uppercase tracking-wider bg-[#EFF4FF] px-3 py-1 rounded-full">
                B2B DIRECT QUOTE
              </span>
              <h3 className="text-2xl font-bold text-[#0B0F19] mt-2">
                Inquire for {selectedModel || "Custom Case Order"}
              </h3>
              <p className="text-xs text-[#525866] mt-1">
                Fast sampling & wholesale pricing for bulk buyers.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-[#0B0F19] mb-1">Company / Store Name *</label>
                <input required type="text" placeholder="e.g. VisionOptics Ltd." className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs focus:ring-2 focus:ring-[#1D63FF] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B0F19] mb-1">Phone / WhatsApp Number *</label>
                <input required type="tel" placeholder="+91 73405 53468" className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs focus:ring-2 focus:ring-[#1D63FF] focus:outline-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B0F19] mb-1">Target Quantity</label>
                <input type="text" defaultValue="1,000 units" className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs focus:ring-2 focus:ring-[#1D63FF] focus:outline-none" />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1D63FF] hover:bg-[#0049E6] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Quotation</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
