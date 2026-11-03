"use client";

import { useState } from "react";
import { MessageCircle, Send, Sparkles, Building, User, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactFormRfq() {
  const [buyerType, setBuyerType] = useState("Wholesale / B2B Commercial");
  const [category, setCategory] = useState("Personal Audio (TWS & Neckbands)");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*New RFQ / Commercial Enquiry — Nexvolt Enterprises*\n\n`;
    text += `• *Enquiry Type:* ${buyerType}\n`;
    text += `• *Category Interest:* ${category}\n`;
    if (name.trim()) text += `• *Contact Person:* ${name.trim()}\n`;
    if (company.trim()) text += `• *Company / Store:* ${company.trim()}\n`;
    if (notes.trim()) text += `• *Requirements / Notes:* ${notes.trim()}\n\n`;
    text += `_Sent via Nexvolt Enterprises Online RFQ Generator_`;

    const url = getWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#171719] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
          <span className="text-[11px] uppercase tracking-wider text-[#F2D675] font-semibold">
            Interactive RFQ Builder
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Instant Quotation & Inquiry Generator
        </h3>
        <p className="text-sm sm:text-base text-[#C7C7C7] mt-2 mb-8 leading-relaxed max-w-2xl">
          Select your requirements below to generate a pre-formatted
          quotation request directly to our Bengaluru sales team on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Buyer Type */}
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold block mb-2">
              1. Customer Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Wholesale / B2B Commercial",
                "Retail Store Purchase",
                "Corporate Gifting / Bulk",
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setBuyerType(type)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all text-center border cursor-pointer ${
                    buyerType === type
                      ? "bg-[#D4AF37] text-[#0B0B0D] font-bold border-[#D4AF37] shadow-md"
                      : "bg-[#0B0B0D] text-[#C7C7C7] border-white/10 hover:border-white/25"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Product Category Interest */}
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold block mb-2">
              2. Hardware Category of Interest
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Hardware Category of Interest"
              className="w-full bg-[#0B0B0D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
            >
              <option value="Personal Audio (TWS & Neckbands)">
                Personal Audio (TWS Earbuds, Neckbands, OWS Earbuds)
              </option>
              <option value="Fast Charging (Adapters & Braided Cables)">
                Fast Charging (Wall Chargers, USB-C Cables)
              </option>
              <option value="Living Space Audio (Soundbars & Speakers)">
                Living Space Audio (Bluetooth Speakers, Soundbars, Home Theatres)
              </option>
              <option value="Complete Catalogue Assortment (All Categories)">
                Complete Catalogue Assortment (All 8 Categories)
              </option>
            </select>
          </div>

          {/* Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold block mb-2">
                Your Name / Representative
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-[#0B0B0D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold block mb-2">
                Company / Organization (Optional)
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Nex Retailers Pvt Ltd"
                className="w-full bg-[#0B0B0D] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold block mb-2">
              Specific Requirements or Quantity (Optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Looking for pricing on 50 units of PureBuds TWS and 100 units of Braided USB-C cables with delivery to Bengaluru."
              className="w-full bg-[#0B0B0D] border border-white/15 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
            />
          </div>

          {/* Submit to WhatsApp */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 active:scale-[0.99] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#0B0B0D]" />
            <span>Generate & Send Structured WhatsApp RFQ</span>
          </button>
        </form>
      </div>
    </div>
  );
}
