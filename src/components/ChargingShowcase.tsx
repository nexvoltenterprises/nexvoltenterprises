import Link from "next/link";
import { Plug, Cable, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function ChargingShowcase() {
  const chargingItems = [
    {
      title: "Charger Adapters",
      desc: "Compact charging adapters for smartphones and compatible devices.",
      icon: Plug,
      slug: "charger-adapters",
      highlights: ["Compact wall design", "Dual-port & travel friendly options"],
    },
    {
      title: "Charging Cables",
      desc: "Durable USB-C and multi-type cables for reliable connectivity.",
      icon: Cable,
      slug: "charging-cables",
      highlights: ["Reinforced braided construction", "Universal USB-C compatibility"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Product Imagery */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#0B0B0D] border border-gray-200 aspect-video flex flex-col items-center justify-end overflow-hidden shadow-md group">
              <img
                src="/images/hero/charging-showcase.jpg"
                alt="Nexvolt Charging Accessories and USB-C Cables"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/30 to-transparent pointer-events-none" />

              <div className="relative z-10 w-full p-6 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0B0B0D] text-xs font-semibold mb-2 shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-[#0B0B0D]" />
                  <span>Reliable Everyday Power</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Charging Accessories &amp; Essentials
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-md">
                  Designed for steady output, device compatibility, and everyday convenience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Product Types */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-[#B8932C] font-semibold mb-2 block">
              Charging Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171719] tracking-tight mb-4">
              Everyday Power. Essential Connectivity.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Discover charging accessories and connectivity essentials for compatible devices.
            </p>

            {/* List of charging product types */}
            <div className="space-y-6 w-full mb-8">
              {chargingItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[#D4AF37]/50 shadow-xs transition-colors flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#171719] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#171719] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                        {item.highlights.map((h, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8932C]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button (Primary Button: gold background with dark text) */}
            <Link
              href="/products?category=charger-adapters"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5"
            >
              <span>Explore Charging Accessories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ChargingShowcase };
