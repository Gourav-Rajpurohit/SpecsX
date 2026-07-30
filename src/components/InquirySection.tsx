"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "500-1000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: History & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight">
              Protecting Vision <br />
              <span className="text-[#1D63FF]">Since 2008</span>
            </h2>

            <p className="text-base sm:text-lg text-[#525866] leading-relaxed">
              SpecsX has been a trusted leader in custom eyewear case manufacturing for over 15 years. We partner directly with optical chains, optometrists, and eyewear brands worldwide to deliver premium protective solutions.
            </p>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E2E8F0]">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19]">15+</p>
                <p className="text-xs font-semibold text-[#525866] mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1D63FF]">20M+</p>
                <p className="text-xs font-semibold text-[#525866] mt-1">Cases Produced</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19]">500+</p>
                <p className="text-xs font-semibold text-[#525866] mt-1">B2B Clients</p>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <h4 className="text-sm font-bold text-[#0B0F19]">Direct Sales Office:</h4>
              <div className="space-y-2 text-xs text-[#525866]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#1D63FF]" />
                  <span>sales@specsx.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#1D63FF]" />
                  <span>+1 (800) 555-0199</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#1D63FF]" />
                  <span>SpecsX Industrial Park, Building 4A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: B2B Quote Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-xl">
              <h3 className="text-2xl font-bold text-[#0B0F19] mb-2">Request Wholesale Quote</h3>
              <p className="text-xs text-[#525866] mb-8">
                Fill out the form below to receive a custom price quotation and free physical sample kit.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto" />
                  <h4 className="text-xl font-bold text-[#0B0F19]">Inquiry Received!</h4>
                  <p className="text-sm text-[#525866]">
                    Our B2B account team will contact you within 24 hours with a formal quotation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B0F19] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B0F19] mb-2">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@opticalstore.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B0F19] mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B0F19] mb-2">Estimated Order Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                    >
                      <option value="500-1000">500 – 1,000 units (Sample/Trial)</option>
                      <option value="1000-5000">1,000 – 5,000 units</option>
                      <option value="5000-20000">5,000 – 20,000 units</option>
                      <option value="20000+">20,000+ units (Wholesale Chain)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B0F19] mb-2">Message / Custom Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Describe case models, logo embossing, or custom packaging needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D63FF]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#1D63FF] hover:bg-[#0049E6] text-white font-bold text-sm shadow-lg shadow-[#1D63FF]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit B2B Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
