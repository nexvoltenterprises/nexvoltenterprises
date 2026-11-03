"use client";

import { useState } from "react";
import {
  FileText,
  Sliders,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Truck,
  MessageCircle,
} from "lucide-react";
import { Product } from "@/data/products";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "b2b">(
    "overview"
  );
  const whatsappUrl = getProductEnquiryUrl(product.name);

  return (
    <div className="mt-12 bg-[#171719] border border-white/10 rounded-3xl overflow-hidden shadow-xl">
      {/* Tab Navigation */}
      <div className="flex border-b border-white/10 bg-[#111114] overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 py-4 px-6 text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
            activeTab === "overview"
              ? "border-[#D4AF37] text-[#D4AF37] bg-[#171719]"
              : "border-transparent text-[#C7C7C7] hover:text-white"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Product Overview</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("specs")}
          className={`flex items-center gap-2 py-4 px-6 text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
            activeTab === "specs"
              ? "border-[#D4AF37] text-[#D4AF37] bg-[#171719]"
              : "border-transparent text-[#C7C7C7] hover:text-white"
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Hardware Specifications</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("b2b")}
          className={`flex items-center gap-2 py-4 px-6 text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
            activeTab === "b2b"
              ? "border-[#D4AF37] text-[#D4AF37] bg-[#171719]"
              : "border-transparent text-[#C7C7C7] hover:text-white"
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Commercial & Wholesale</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 sm:p-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <p className="text-base text-[#C7C7C7] leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Authentic Curation
                  </h4>
                  <p className="text-xs text-[#C7C7C7] mt-0.5">
                    Carefully chosen for dependable performance and everyday reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Direct Bengaluru Dispatch
                  </h4>
                  <p className="text-xs text-[#C7C7C7] mt-0.5">
                    Fast turnaround from our Doddamavali headquarters in Bengaluru.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Direct Technical Verification
                  </h4>
                  <p className="text-xs text-[#C7C7C7] mt-0.5">
                    Tested for safety, circuit efficiency, and acoustic balance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Dedicated Support
                  </h4>
                  <p className="text-xs text-[#C7C7C7] mt-0.5">
                    Direct phone and WhatsApp support on +91 91805 95957.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#C7C7C7]">
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-3.5 pr-6 font-semibold text-white w-1/3">
                    Product Model
                  </td>
                  <td className="py-3.5 text-[#F2D675] font-medium">
                    {product.name}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-6 font-semibold text-white">
                    Hardware Category
                  </td>
                  <td className="py-3.5 text-white">{product.category}</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-6 font-semibold text-white">
                    Commercial Pricing
                  </td>
                  <td className="py-3.5 text-[#D4AF37] font-semibold">
                    {product.priceLabel || "Price on Request"}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-6 font-semibold text-white">
                    Stock & Distribution
                  </td>
                  <td className="py-3.5 text-white">
                    Nexvolt Enterprises, Doddamavali, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-6 font-semibold text-white">
                    Enquiry Channel
                  </td>
                  <td className="py-3.5 text-white">
                    WhatsApp (+91 91805 95957) or In-Store Consultation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "b2b" && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-[#0B0B0D] border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                Commercial Orders & Retail Distribution
              </h4>
              <p className="text-xs sm:text-sm text-[#C7C7C7] leading-relaxed">
                Nexvolt Enterprises supplies corporate gifting, electronics
                retailers, and commercial establishments with wholesale pricing
                and prompt fulfillment across Karnataka and South India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-[#C7C7C7]">
                <span>Need wholesale volume rates or formal GST billing?</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Wholesale Quotation</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
