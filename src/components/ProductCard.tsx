"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Package } from "lucide-react";
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
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#D4AF37]/60 transition-all duration-300">
      {/* Product Image Link */}
      <Link
        href={`/products/${product.slug}`}
        className="aspect-square relative overflow-hidden bg-white block rounded-t-xl p-4 border-b border-gray-100"
      >
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-gray-400 group-hover:bg-amber-50/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#B8932C] mb-2 shadow-xs">
              <Package className="w-6 h-6 stroke-[1.5]" />
            </div>
            <span className="text-xs text-gray-500 font-medium line-clamp-1 text-center px-2">
              {product.name}
            </span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#B8932C] font-semibold block mb-1">
            {product.category}
          </span>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-[#171719] group-hover:text-[#B8932C] transition-colors line-clamp-1 text-base">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 line-clamp-2 mt-1 mb-3">
            {product.description}
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-500 italic mb-3">
            {product.priceLabel || "Price on Request"}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-lg px-4 py-2 w-full flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire About This Product</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
