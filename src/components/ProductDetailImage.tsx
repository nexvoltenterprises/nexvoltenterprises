"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Package, Maximize2, X, ZoomIn } from "lucide-react";

interface ProductDetailImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function ProductDetailImage({
  src,
  alt,
  category,
}: ProductDetailImageProps) {
  const [imgError, setImgError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsLightboxOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleKeyDown]);

  return (
    <>
      <div className="relative group">
        <button
          type="button"
          onClick={() => !imgError && setIsLightboxOpen(true)}
          aria-label={`Inspect ${alt} in high resolution`}
          className="w-full aspect-square bg-white rounded-3xl overflow-hidden flex items-center justify-center relative shadow-xl border border-white/10 p-6 cursor-zoom-in text-left block"
        >
          {!imgError ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority
              unoptimized
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-500 ease-out"
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

          {/* Interactive Zoom Indicator */}
          {!imgError && (
            <div className="absolute bottom-4 right-4 bg-[#0B0B0D]/80 backdrop-blur-md border border-white/15 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:border-[#D4AF37]/50 transition-all shadow-md">
              <ZoomIn className="w-3.5 h-3.5 text-[#F2D675]" />
              <span className="text-[11px] text-gray-200">Click to expand</span>
            </div>
          )}
        </button>

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="bg-[#D4AF37] text-[#0B0B0D] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} Image Lightbox`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#111114] border border-[#D4AF37]/40 rounded-3xl overflow-hidden p-6 sm:p-10 flex flex-col items-center justify-center shadow-2xl"
          >
            {/* Lightbox Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close image lightbox"
                className="w-10 h-10 rounded-full bg-[#1F1F24] hover:bg-[#D4AF37] text-white hover:text-[#0B0B0D] border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full text-left mb-4 pb-3 border-b border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                Authentic Studio Photography • {category}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {alt}
              </h3>
            </div>

            {/* High-Res Studio View */}
            <div className="w-full aspect-square max-h-[65vh] bg-white rounded-2xl relative p-6 flex items-center justify-center overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>

            <div className="mt-4 text-xs text-[#C7C7C7] flex items-center justify-between w-full">
              <span>Authentic Nexvolt hardware photographic capture</span>
              <kbd className="px-2 py-0.5 rounded bg-[#171719] border border-white/15 text-[10px]">
                ESC to close
              </kbd>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
