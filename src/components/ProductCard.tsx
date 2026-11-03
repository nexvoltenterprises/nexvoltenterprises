"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Package, ArrowUpRight } from "lucide-react";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

export interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    category: string;
    categorySlug: string;
    description: string;
    image: string;
    priceLabel: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = getProductEnquiryUrl(product.name);

  return (
    <div className="group bg-[#171719] rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300">
      {/* Studio Container for Authentic Product Photography */}
      <Link
        href={`/products/${product.slug}`}
        className="aspect-square relative overflow-hidden bg-white rounded-t-2xl p-4 flex items-center justify-center border-b border-white/10 block"
        aria-label={`View ${product.name} details`}
      >
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-[#171719]">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-[#B8932C] mb-2">
              <Package className="w-6 h-6 stroke-[1.5]" />
            </div>
            <span className="text-xs text-gray-500 font-medium text-center line-clamp-1">
              {product.name}
            </span>
          </div>
        )}

        {/* Subtle quick view indicator on hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0B0B0D]/80 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-md">
          <ArrowUpRight className="w-4 h-4 text-[#F2D675]" />
        </div>
      </Link>

      {/* Card Information */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#F2D675] font-semibold block mb-1">
            {product.category}
          </span>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-white group-hover:text-[#F2D675] transition-colors line-clamp-1 text-base">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-[#C7C7C7] line-clamp-2 mt-1.5 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
              {product.priceLabel || "Price on Request"}
            </span>
            <span className="text-[10px] text-[#C7C7C7]/60">Verified Stock</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30"
          >
            <MessageCircle className="w-4 h-4 text-[#0B0B0D]" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
