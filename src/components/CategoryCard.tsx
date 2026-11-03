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
  featured?: boolean;
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
  featured = false,
}: CategoryCardProps) {
  const [imgError, setImgError] = useState(false);
  const IconComponent = iconMap[icon] || Package;

  if (featured) {
    return (
      <Link
        href={`/products?category=${slug}`}
        className="group relative rounded-2xl bg-[#171719] border border-white/10 overflow-hidden flex flex-col md:flex-row hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 md:col-span-2"
      >
        {/* Featured Image Container */}
        <div className="relative aspect-[16/10] md:aspect-auto md:w-1/2 overflow-hidden bg-[#0B0B0D]">
          {!imgError ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#0B0B0D] text-[#D4AF37]">
              <IconComponent className="w-12 h-12" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#171719]/40 to-[#171719] pointer-events-none" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B0B0D]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-semibold text-[#F2D675] uppercase tracking-wider">
            Flagship Category
          </div>
        </div>

        {/* Featured Content */}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#0B0B0D] border border-[#D4AF37]/25 text-[#F2D675] flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0D] transition-colors">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#F2D675] transition-colors mb-2">
              {name}
            </h3>
            <p className="text-sm text-[#C7C7C7] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-semibold text-[#D4AF37] group-hover:text-[#F2D675]">
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/products?category=${slug}`}
      className="group bg-[#171719] rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
    >
      {/* Category Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-[#0B0B0D]">
        {!imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B0B0D] text-[#C7C7C7]">
            <div className="w-12 h-12 rounded-xl bg-[#171719] border border-white/10 flex items-center justify-center text-[#D4AF37] mb-2">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-[#C7C7C7] uppercase tracking-wider">
              {name}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#0B0B0D]/80 backdrop-blur-md border border-white/10 text-[#F2D675] flex items-center justify-center">
          <IconComponent className="w-4 h-4" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-lg text-white group-hover:text-[#F2D675] transition-colors mb-1.5">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C7C7] line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-medium text-[#D4AF37] group-hover:text-[#F2D675]">
          <span>View Products</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export { CategoryCard };
