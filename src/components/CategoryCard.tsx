"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Headphones,
  Ear,
  Plug,
  Cable,
  Speaker,
  Volume2,
  Airplay,
  Home,
  Package,
  ArrowRight,
} from "lucide-react";

export interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  Ear,
  Plug,
  Cable,
  Speaker,
  Volume2,
  Airplay,
  Home,
};

export default function CategoryCard({
  name,
  slug,
  description,
  image,
  icon,
}: CategoryCardProps) {
  const [imgError, setImgError] = useState(false);
  const IconComponent = iconMap[icon] || Package;

  return (
    <Link
      href={`/products?category=${slug}`}
      className="group bg-[#0B0B0D] rounded-xl shadow-md border border-white/10 overflow-hidden flex flex-col hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
    >
      {/* Category Image / Fallback */}
      <div className="aspect-square relative overflow-hidden bg-[#171719] rounded-t-xl">
        {!imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-[#171719] flex flex-col items-center justify-center p-6 text-[#C7C7C7] group-hover:bg-[#1f1f23] transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[#0B0B0D] shadow-sm border border-white/10 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
              <IconComponent className="w-8 h-8" />
            </div>
            <span className="text-xs font-medium text-[#C7C7C7] uppercase tracking-wider">
              {name}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-lg text-white group-hover:text-[#F2D675] transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-[#C7C7C7] line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-sm font-medium text-[#D4AF37] group-hover:text-[#F2D675]">
          <span className="group-hover:underline">Explore Category</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export { CategoryCard };
