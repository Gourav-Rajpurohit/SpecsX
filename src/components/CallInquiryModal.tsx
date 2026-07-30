"use client";

import { useState } from "react";
import { X, PhoneCall, Copy, Check, ExternalLink } from "lucide-react";

interface CallInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
  formattedNumber?: string;
}

export default function CallInquiryModal({
  isOpen,
  onClose,
  phoneNumber = "7340553468",
  formattedNumber = "+91 73405 53468",
}: CallInquiryModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0] space-y-6 cursor-default animate-in zoom-in-95 duration-200"
      >
        {/* Top Close Cross Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-[#525866] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="text-center space-y-3 pt-2">
          <div className="w-16 h-16 rounded-2xl bg-[#EFF4FF] border border-[#1D63FF]/20 flex items-center justify-center text-[#1D63FF] mx-auto shadow-sm">
            <PhoneCall className="w-8 h-8 animate-bounce" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D63FF] bg-[#EFF4FF] px-3 py-1 rounded-full border border-[#1D63FF]/20">
              INSTANT B2B QUOTE CALL
            </span>
            <h3 className="text-2xl font-bold text-[#0B0F19] mt-2">
              Call Sales Directly
            </h3>
            <p className="text-xs text-[#525866] mt-1 leading-relaxed">
              If your device does not support direct calling from the browser, please dial the number below from your phone.
            </p>
          </div>
        </div>

        {/* Phone Number & Copy Box */}
        <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 text-center">
          <p className="text-xs text-[#525866] font-medium">Direct Phone Number</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19] tracking-wider font-mono">
            {formattedNumber}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                copied
                  ? "bg-[#10B981] text-white border-[#10B981]"
                  : "bg-white text-[#0B0F19] border-[#E2E8F0] hover:bg-gray-50"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#1D63FF]" />
                  <span>Copy Number</span>
                </>
              )}
            </button>

            {/* Launch Dialer Button */}
            <button
              onClick={handleCall}
              className="py-2.5 px-4 rounded-xl bg-[#1D63FF] hover:bg-[#0049E6] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Dialer</span>
            </button>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="text-center text-[11px] text-[#525866] pt-1">
          <span>Click anywhere outside this box or the ✕ icon to close.</span>
        </div>

      </div>
    </div>
  );
}
