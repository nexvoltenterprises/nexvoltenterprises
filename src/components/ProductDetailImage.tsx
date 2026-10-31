"use client";

import { useState } from "react";
import Image from "next/image";
import { Package } from "lucide-react";

interface ProductDetailImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function ProductDetailImage({ src, alt, category }: ProductDetailImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative">
      <div className="aspect-square bg-white rounded-2xl overflow-hidden flex items-center justify-center relative shadow-sm border border-white/10 p-6">
        {!imgError ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            unoptimized
            className="object-contain p-6"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-[#C7C7C7] p-6 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[#171719] shadow-sm border border-white/10 flex items-center justify-center text-[#D4AF37] mb-4">
              <Package className="w-10 h-10 stroke-[1.5]" />
            </div>
            <span className="text-sm font-medium text-white">{alt}</span>
            <span className="text-xs text-[#C7C7C7] mt-1">{category}</span>
          </div>
        )}
      </div>
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#D4AF37] text-[#0B0B0D] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
          {category}
        </span>
      </div>
    </div>
  );
}
