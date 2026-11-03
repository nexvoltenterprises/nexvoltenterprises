import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Shield, Zap, Sparkles } from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center bg-[#0B0B0D] overflow-hidden">
      {/* 3D Electronics Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nexvolt-hero-background.png"
          alt="Nexvolt Premium 3D Consumer Electronics Showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[center_right] lg:object-right select-none"
          unoptimized
        />

        {/* Directed Left-to-Right and Bottom Vignette Overlays for Maximum Readability */}
        {/* Desktop left dark gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/85 via-50% to-transparent hidden md:block" />

        {/* Mobile top-to-bottom dark gradient to protect headline contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/95 via-[#0B0B0D]/80 to-[#0B0B0D]/40 md:hidden" />

        {/* Bottom edge blending into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0B0B0D] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24 lg:py-32">
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

          {/* Authentic Trust & Operating Signals */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-xs sm:text-sm text-[#C7C7C7]">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#F2D675] shrink-0" />
              <span className="font-medium">Curated Audio &amp; Power</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F2D675] shrink-0" />
              <span className="font-medium">Price on Request</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F2D675] shrink-0" />
              <span className="font-medium">Direct WhatsApp Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
