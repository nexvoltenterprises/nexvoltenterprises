"use client";

import { MessageCircle } from "lucide-react";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

interface StickyMobileBarProps {
  productName: string;
  priceLabel: string;
}

export default function StickyMobileBar({
  productName,
  priceLabel,
}: StickyMobileBarProps) {
  const whatsappUrl = getProductEnquiryUrl(productName);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-md border-t border-white/10 p-3.5 px-4 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
            Price
          </span>
          <span className="text-sm font-bold text-[#D4AF37]">
            {priceLabel || "Price on Request"}
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-xs py-3 px-4 rounded-xl shadow-lg shadow-[#D4AF37]/20 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#0B0B0D]" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
