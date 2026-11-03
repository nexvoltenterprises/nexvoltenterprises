"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Shield,
  Zap,
  Sparkles,
  Headphones,
  Radio,
  Plug,
  Volume2,
  ArrowUpRight,
  X,
  Compass,
} from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

interface Hotspot {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  x: number; // percentage from left on desktop
  y: number; // percentage from top on desktop
  mobileFocus: { x: number; y: number; scale: number }; // camera pan for mobile
  icon: typeof Headphones;
  label: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "headphones",
    name: "Acoustic Over-Ear Headphones",
    label: "Headphones",
    category: "Personal Audio",
    description: "High-precision acoustic drivers with ergonomic cushioned seal.",
    href: "/products?category=neckbands",
    x: 56,
    y: 35,
    mobileFocus: { x: -15, y: -5, scale: 1.15 },
    icon: Headphones,
  },
  {
    id: "tws",
    name: "PureBuds TWS Earbuds",
    label: "TWS Earbuds",
    category: "Wireless Audio",
    description: "Compact wireless charging case with instant auto-connect.",
    href: "/products?category=tws-earbuds",
    x: 68,
    y: 58,
    mobileFocus: { x: -20, y: -15, scale: 1.2 },
    icon: Radio,
  },
  {
    id: "speaker",
    name: "Portable Bluetooth Speaker",
    label: "Speaker",
    category: "Living Space Audio",
    description: "Room-filling 360° acoustic projection with passive radiator.",
    href: "/products?category=bluetooth-speakers",
    x: 42,
    y: 62,
    mobileFocus: { x: 5, y: -15, scale: 1.18 },
    icon: Volume2,
  },
  {
    id: "charger",
    name: "Dual-Port Wall Charger",
    label: "Fast Charger",
    category: "Power Delivery",
    description: "High-efficiency thermal management & surge protection.",
    href: "/products?category=charger-adapters",
    x: 84,
    y: 66,
    mobileFocus: { x: -30, y: -20, scale: 1.22 },
    icon: Plug,
  },
];

export default function HeroSection() {
  const whatsappUrl = getGeneralEnquiryUrl();
  const containerRef = useRef<HTMLElement>(null);

  // Mouse Parallax & Dynamic 3D Perspective States
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Device orientation for mobile tilt
  const [gyroOffset, setGyroOffset] = useState({ x: 0, y: 0 });

  const activeHotspot = HOTSPOTS.find((h) => h.id === activeHotspotId) || null;

  // Desktop Mouse Parallax
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setOffset({ x: normalizedX, y: normalizedY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
    setIsHovering(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  // Subtle mobile gyroscope listener (fallback-safe)
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const x = Math.min(Math.max(e.gamma / 30, -1), 1);
        const y = Math.min(Math.max((e.beta - 45) / 30, -1), 1);
        setGyroOffset({ x, y });
      }
    };

    if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    }
    return () => {
      if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  // Compute mobile focus camera shift
  const mobileShiftX = activeHotspot ? activeHotspot.mobileFocus.x : gyroOffset.x * 6;
  const mobileShiftY = activeHotspot ? activeHotspot.mobileFocus.y : gyroOffset.y * 6;
  const mobileScale = activeHotspot ? activeHotspot.mobileFocus.scale : 1.05;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] sm:min-h-[92vh] lg:min-h-[94vh] flex flex-col justify-start sm:justify-center bg-[#0B0B0D] overflow-hidden select-none"
    >
      {/* 3D Electronics Hero Background Layer with Interactive Parallax & Video-Like Cinematic Drift */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dynamic Light Beam tracking behind hardware */}
        <div
          className="absolute w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-radial from-[#D4AF37]/18 via-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none transition-transform duration-700 ease-out"
          style={{
            top: "20%",
            right: "10%",
            transform: `translate3d(${offset.x * 40}px, ${offset.y * 30}px, 0)`,
          }}
        />

        {/* Desktop 3D Canvas (Mouse Parallax) */}
        <div
          className="hidden md:block relative w-full h-full transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `perspective(1000px) rotateX(${offset.y * -2.5}deg) rotateY(${offset.x * 3.5}deg) scale(${
              isHovering ? 1.04 : 1.02
            }) translate3d(${offset.x * 14}px, ${offset.y * 10}px, 0)`,
          }}
        >
          <Image
            src="/images/nexvolt-hero-background.png"
            alt="Nexvolt Premium 3D Consumer Electronics Showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-[center_right] lg:object-right"
            unoptimized
          />
        </div>

        {/* Mobile 3D Canvas with Smooth Camera Pan Focus on Selection */}
        <div
          className="md:hidden relative w-full h-full transition-all duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(${mobileShiftX}%, ${mobileShiftY}%, 0) scale(${mobileScale})`,
          }}
        >
          <Image
            src="/images/nexvolt-hero-background.png"
            alt="Nexvolt 3D Hardware"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
            unoptimized
          />
        </div>

        {/* Desktop Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/90 via-45% to-transparent hidden md:block" />

        {/* Mobile Vignette Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 md:hidden ${
            activeHotspot
              ? "bg-gradient-to-b from-[#0B0B0D]/85 via-[#0B0B0D]/60 to-[#0B0B0D]/90"
              : "bg-gradient-to-b from-[#0B0B0D]/95 via-[#0B0B0D]/80 to-[#0B0B0D]/40"
          }`}
        />

        {/* Bottom edge blending into next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0B0B0D] to-transparent" />
      </div>

      {/* DESKTOP INTERACTIVE RADAR HOTSPOTS */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        {HOTSPOTS.map((hotspot) => {
          const isActive = activeHotspotId === hotspot.id;
          const Icon = hotspot.icon;

          return (
            <div
              key={hotspot.id}
              className="absolute pointer-events-auto transition-transform duration-500"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: `translate3d(${offset.x * 18}px, ${offset.y * 14}px, 0)`,
              }}
            >
              <button
                type="button"
                onClick={() => setActiveHotspotId(isActive ? null : hotspot.id)}
                onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                aria-label={`Inspect ${hotspot.name}`}
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#171719]/90 border border-[#D4AF37] text-[#F2D675] shadow-lg shadow-[#D4AF37]/30 hover:scale-125 transition-all duration-300 cursor-pointer group"
              >
                <span className="absolute -inset-1.5 rounded-full bg-[#D4AF37]/30 animate-ping pointer-events-none" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2D675] group-hover:bg-white transition-colors" />
              </button>

              {isActive && (
                <div
                  onMouseLeave={() => setActiveHotspotId(null)}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-[#111114]/95 backdrop-blur-xl border border-[#D4AF37]/50 rounded-2xl p-4 shadow-2xl shadow-black/90 z-30 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F2D675]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                      {hotspot.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {hotspot.name}
                  </h4>
                  <p className="text-xs text-[#C7C7C7] leading-relaxed mb-3">
                    {hotspot.description}
                  </p>

                  <Link
                    href={hotspot.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F2D675] hover:text-[#D4AF37] transition-colors"
                  >
                    <span>View Category Range</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* HERO EDITORIAL CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-8 sm:py-24 lg:py-32">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171719]/90 backdrop-blur-md border border-[#D4AF37]/35 text-[#F2D675] text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-[#F2D675] animate-pulse" />
            <span>Nexvolt Enterprises &bull; Bengaluru</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Technology That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2D675] via-[#D4AF37] to-[#B8932C]">
              Moves With You.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-[#C7C7C7] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg lg:max-w-xl font-normal">
            Discover thoughtfully selected consumer electronics, personal audio,
            soundbars, and everyday charging essentials from Nexvolt Enterprises.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 hover:-translate-y-0.5 text-base"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#171719]/80 hover:bg-[#171719] border border-[#D4AF37]/60 hover:border-[#F2D675] text-[#F2D675] font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>Enquire Now</span>
            </a>
          </div>

          {/* MOBILE EXCLUSIVE: INTERACTIVE 3D PRODUCT TOUR BAR */}
          <div className="mt-8 md:hidden w-full">
            <div className="p-3 rounded-2xl bg-[#111114]/90 backdrop-blur-xl border border-[#D4AF37]/35 shadow-2xl">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Interactive 3D Hardware Tour
                </span>
                <span className="text-[10px] text-gray-400">Tap to inspect</span>
              </div>

              {/* Touch Pills */}
              <div className="grid grid-cols-4 gap-1.5">
                {HOTSPOTS.map((hotspot) => {
                  const isSelected = activeHotspotId === hotspot.id;
                  const Icon = hotspot.icon;

                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() =>
                        setActiveHotspotId(isSelected ? null : hotspot.id)
                      }
                      className={`py-2 px-1 rounded-xl text-[11px] font-semibold flex flex-col items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer border ${
                        isSelected
                          ? "bg-[#D4AF37] text-[#0B0B0D] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/25"
                          : "bg-[#171719] text-[#C7C7C7] border-white/10"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate w-full text-center text-[10px] leading-tight">
                        {hotspot.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Authentic Trust Signals */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-[11px] sm:text-sm text-[#C7C7C7]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2D675] shrink-0" />
              <span className="font-medium truncate">Curated Hardware</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2D675] shrink-0" />
              <span className="font-medium truncate">Price on Request</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2D675] shrink-0" />
              <span className="font-medium truncate">WhatsApp Quotes</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM SHEET MODAL (SLIDES UP OVER MOBILE VIEWPORT WHEN A PILL IS TAPPED) */}
      {activeHotspot && (
        <div
          id="hero-mobile-sheet"
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveHotspotId(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#111114] border-t border-[#D4AF37]/50 rounded-t-3xl p-5 shadow-2xl pb-8 animate-in slide-in-from-bottom duration-300 relative z-[60]"
          >
            {/* Top Drag Pill */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4" />

            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#F2D675]">
                  <activeHotspot.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block">
                    {activeHotspot.category}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {activeHotspot.name}
                  </h4>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveHotspotId(null)}
                className="w-8 h-8 rounded-full bg-[#1F1F24] text-gray-400 hover:text-white flex items-center justify-center"
                aria-label="Close sheet"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#C7C7C7] leading-relaxed mb-4 mt-2">
              {activeHotspot.description}
            </p>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href={activeHotspot.href}
                onClick={() => setActiveHotspotId(null)}
                className="inline-flex items-center justify-center gap-1.5 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] text-xs font-bold py-3 px-3 rounded-xl transition-all shadow-md shadow-[#D4AF37]/20"
              >
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setActiveHotspotId(null)}
                className="inline-flex items-center justify-center text-xs font-semibold text-[#C7C7C7] bg-[#171719] border border-white/15 py-3 px-3 rounded-xl hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export { HeroSection };
