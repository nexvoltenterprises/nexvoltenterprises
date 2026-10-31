import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Headphones,
  Volume2,
  Plug,
  Cable,
  Speaker,
  Radio,
  Zap,
} from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const whatsappUrl = getGeneralEnquiryUrl();

  const previewCategories = [
    {
      name: "TWS & Neckbands",
      icon: Headphones,
      desc: "Personal wireless sound",
      badge: "Audio",
    },
    {
      name: "Charger Adapters",
      icon: Plug,
      desc: "Compact everyday power",
      badge: "Charging",
    },
    {
      name: "Bluetooth Speakers",
      icon: Volume2,
      desc: "Portable room-filling audio",
      badge: "Audio",
    },
    {
      name: "Charging Cables",
      icon: Cable,
      desc: "Durable USB-C connectivity",
      badge: "Charging",
    },
    {
      name: "Soundbars & Theatres",
      icon: Speaker,
      desc: "Living room entertainment",
      badge: "Home",
    },
    {
      name: "OWS Earbuds",
      icon: Radio,
      desc: "Open-ear wearable sound",
      badge: "Audio",
    },
  ];

  return (
    <section className="relative min-h-[85vh] bg-[#0B0B0D] flex items-center overflow-hidden py-20 lg:py-28">
      {/* Background gradients and subtle decorative mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#101014] to-[#171719] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F2D675]/05 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in-up">
            {/* Small Badge / Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171719] border border-[#D4AF37]/30 text-[#F2D675] text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F2D675] animate-pulse" />
              <span>Premium Electronics &amp; Audio</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Powering Your World with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37]">
                Smarter Electronics
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-[#C7C7C7] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
              Explore a versatile range of audio products, charging accessories,
              and everyday technology essentials from Nexvolt Enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#D4AF37] hover:border-[#F2D675] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#F2D675]" />
                <span>Contact Our Team</span>
              </a>
            </div>

            {/* Subtle feature pills */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#C7C7C7]">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F2D675]" />
                <span>Modern Audio &amp; Power</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#F2D675]" />
                <span>Instant WhatsApp Enquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2D675]" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Decorative Grid (Desktop only) */}
          <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-4">
            {previewCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-[#171719]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[#D4AF37]/50 hover:bg-[#1f1f23] transition-all duration-300 shadow-lg shadow-black/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/25 text-[#F2D675] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C7C7C7] bg-white/5 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1 group-hover:text-[#F2D675] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#C7C7C7] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
