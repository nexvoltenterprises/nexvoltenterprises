"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  X,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Layers,
  CheckCircle2,
  Package,
} from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

type FilterGroup = "all" | "audio" | "home" | "power";

export default function FeaturedProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterGroup>("all");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const featured = getFeaturedProducts();

  // Close modal on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, handleKeyDown]);

  const filteredProducts = featured.filter((product) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "audio") {
      return ["tws-earbuds", "neckbands", "ows-earbuds"].includes(
        product.categorySlug
      );
    }
    if (activeFilter === "home") {
      return ["soundbars", "bluetooth-speakers", "home-theatre-systems"].includes(
        product.categorySlug
      );
    }
    if (activeFilter === "power") {
      return ["charger-adapters", "charging-cables"].includes(
        product.categorySlug
      );
    }
    return true;
  });

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {/* SECTION 5 — COMPACT SPOTLIGHT BANNER (NO REPETITIVE CARDS ON MAIN PAGE) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#171719] via-[#141416] to-[#0E0E10] border border-[#D4AF37]/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-black/80">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Editorial Headline & Actions */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#F2D675] font-semibold">
                    Curated Hardware • 8 Signature Pieces
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Nexvolt Essentials
                </h2>

                <p className="mt-4 text-base sm:text-lg text-[#C7C7C7] leading-relaxed max-w-2xl">
                  A handpicked selection representing our audio performance,
                  rapid charging, and living space entertainment range. Instead
                  of repeating products on the main page, explore our signature
                  pieces on demand via our quick-view pop-up or open the full catalogue.
                </p>

                {/* Key Pillars */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Personal Audio</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Home Theatres</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Fast Charging Power</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsOpen(true)}
                    type="button"
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-[#0B0B0D] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-[#0B0B0D]" />
                    <span>Open Essentials Pop-up</span>
                  </button>

                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#F2D675] bg-[#171719] hover:bg-[#202025] border border-white/15 px-6 py-3.5 rounded-xl transition-all group"
                  >
                    <span>Open 24-Product Catalogue</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Unique Interactive Visual Preview Stack */}
              <div className="lg:col-span-5 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  aria-label="Click to open Nexvolt Essentials pop-up preview"
                  className="w-full max-w-md group text-left relative p-6 rounded-2xl bg-[#111114]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/15 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Interactive Showcase
                    </span>
                    <span className="text-xs text-[#C7C7C7] flex items-center gap-1 group-hover:text-white transition-colors">
                      <span>Click to preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F2D675] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Visual Preview Deck */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#171719] border border-white/10 flex items-center justify-between group-hover:border-[#D4AF37]/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                          <Image
                            src="/images/products/purebuds-tws-earbuds.jpg"
                            alt="PureBuds TWS Earbuds"
                            width={32}
                            height={32}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">PureBuds TWS Earbuds</p>
                          <p className="text-xs text-[#C7C7C7]">Personal Audio</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#D4AF37]">Price on Request</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#171719] border border-white/10 flex items-center justify-between group-hover:border-[#D4AF37]/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                          <Image
                            src="/images/products/slim-soundbar.jpg"
                            alt="Slim Soundbar"
                            width={32}
                            height={32}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Slim Soundbar</p>
                          <p className="text-xs text-[#C7C7C7]">Home Entertainment</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#D4AF37]">Price on Request</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#171719] border border-white/10 flex items-center justify-between group-hover:border-[#D4AF37]/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                          <Image
                            src="/images/products/usb-c-charging-cable.jpg"
                            alt="USB-C Charging Cable"
                            width={32}
                            height={32}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">USB-C Charging Cable</p>
                          <p className="text-xs text-[#C7C7C7]">Fast Charging Power</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#D4AF37]">Price on Request</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C7C7C7]">
                    <span>+ 5 more curated essentials</span>
                    <span className="text-[#F2D675] font-semibold">View in pop-up &rarr;</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE POP-UP MODAL (OPENS ONLY WHEN CLICKED) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="essentials-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[90vh] bg-[#111114] border border-[#D4AF37]/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#D4AF37]/10 flex flex-col overflow-hidden relative"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-[#171719]/80 backdrop-blur-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#F2D675]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                      Curated Electronics
                    </span>
                    <h3
                      id="essentials-modal-title"
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                    >
                      Nexvolt Essentials Quick-View
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close pop-up"
                  className="w-10 h-10 rounded-full bg-[#1F1F24] hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-[#C7C7C7] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
                    activeFilter === "all"
                      ? "bg-[#D4AF37] text-[#0B0B0D]"
                      : "bg-[#1F1F24] text-[#C7C7C7] hover:text-white hover:bg-[#26262D]"
                  }`}
                >
                  All Curated ({featured.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("audio")}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
                    activeFilter === "audio"
                      ? "bg-[#D4AF37] text-[#0B0B0D]"
                      : "bg-[#1F1F24] text-[#C7C7C7] hover:text-white hover:bg-[#26262D]"
                  }`}
                >
                  Personal Audio
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("home")}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
                    activeFilter === "home"
                      ? "bg-[#D4AF37] text-[#0B0B0D]"
                      : "bg-[#1F1F24] text-[#C7C7C7] hover:text-white hover:bg-[#26262D]"
                  }`}
                >
                  Home Entertainment
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("power")}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
                    activeFilter === "power"
                      ? "bg-[#D4AF37] text-[#0B0B0D]"
                      : "bg-[#1F1F24] text-[#C7C7C7] hover:text-white hover:bg-[#26262D]"
                  }`}
                >
                  Power & Charging
                </button>
              </div>
            </div>

            {/* Modal Scrollable Product Grid */}
            <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(90vh-180px)] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => {
                  const whatsappUrl = getProductEnquiryUrl(product.name);
                  const isImgError = !!imgErrors[product.id];

                  return (
                    <div
                      key={product.id}
                      className="group bg-[#171719] rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 p-4 flex flex-col justify-between transition-all duration-300"
                    >
                      {/* Product Studio Image */}
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="aspect-square relative overflow-hidden bg-white rounded-xl p-3 flex items-center justify-center mb-3 block"
                        aria-label={`Open ${product.name} product page`}
                      >
                        {!isImgError ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            onError={() => handleImageError(product.id)}
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-[#171719]">
                            <Package className="w-6 h-6 text-[#B8932C] mb-1" />
                            <span className="text-[10px] text-gray-500 font-medium">
                              {product.name}
                            </span>
                          </div>
                        )}
                        <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#0B0B0D]/80 border border-white/10 text-[#F2D675] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#F2D675] font-semibold block mb-1">
                            {product.category}
                          </span>
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={() => setIsOpen(false)}
                          >
                            <h4 className="font-semibold text-white text-sm group-hover:text-[#F2D675] transition-colors line-clamp-1">
                              {product.name}
                            </h4>
                          </Link>
                          <p className="text-xs text-[#C7C7C7] line-clamp-2 mt-1 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Price & Actions */}
                        <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-[#D4AF37]">
                              {product.priceLabel || "Price on Request"}
                            </span>
                            <span className="text-[#C7C7C7]/60 text-[10px]">Stock Ready</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <Link
                              href={`/products/${product.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="w-full bg-[#202025] hover:bg-[#D4AF37] text-white hover:text-[#0B0B0D] font-medium text-[11px] py-2 px-2 rounded-lg flex items-center justify-center gap-1 transition-all text-center"
                            >
                              <span>Open Page</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>

                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F2D675] hover:text-[#0B0B0D] border border-[#D4AF37]/30 hover:border-transparent font-medium text-[11px] py-2 px-2 rounded-lg flex items-center justify-center gap-1 transition-all"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>Quote</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Sticky Footer: Open Full Catalogue Page Button */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#171719] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#C7C7C7] text-center sm:text-left">
                <span>Looking for technical data sheets, bulk inquiries, or all 24 models?</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-[#D4AF37]/20"
                >
                  <span>Open Full 24-Product Catalogue Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="hidden sm:inline-flex items-center justify-center text-xs font-semibold text-[#C7C7C7] hover:text-white px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { FeaturedProducts };
