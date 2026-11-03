import Link from "next/link";
import Image from "next/image";
import { Plug, Cable, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function ChargingShowcase() {
  const chargingPillars = [
    {
      title: "Compact Charger Adapters",
      desc: "Engineered for smartphones, tablets, and compatible peripherals with travel-friendly dimensions and steady thermal dissipation.",
      icon: Plug,
      slug: "charger-adapters",
      specs: ["Compact wall-mount form factor", "Dual-port & multi-voltage output", "Transient voltage protection"],
    },
    {
      title: "Reinforced Charging Cables",
      desc: "Built with high-density braided sleeves and reinforced strain relief collars for reliable daily connectivity and long service life.",
      icon: Cable,
      slug: "charging-cables",
      specs: ["Reinforced nylon braided construction", "Universal USB-C standard", "High-efficiency copper cores"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#171719] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Information & Feature Breakdown */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 block">
              Charging Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Everyday Power. Essential Connectivity.
            </h2>
            <p className="text-[#C7C7C7] text-base sm:text-lg leading-relaxed mb-8">
              Nexvolt charging accessories deliver dependable current output,
              resilient cable construction, and device compatibility for home, office,
              and travel environments.
            </p>

            {/* Structured Feature Breakdown */}
            <div className="space-y-5 w-full mb-8">
              {chargingPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#0B0B0D] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#171719] border border-[#D4AF37]/30 text-[#F2D675] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="text-lg font-semibold text-white">
                            {pillar.title}
                          </h3>
                          <Link
                            href={`/products?category=${pillar.slug}`}
                            className="text-xs text-[#D4AF37] hover:text-[#F2D675] font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Browse</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <p className="text-sm text-[#C7C7C7] mb-3 leading-relaxed">
                          {pillar.desc}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#C7C7C7]/80">
                          {pillar.specs.map((spec, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#F2D675] shrink-0" />
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/products?category=charger-adapters"
              className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5 text-sm"
            >
              <span>Explore Charging Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Authentic Charging Showcase Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-3xl overflow-hidden bg-[#0B0B0D] border border-[#D4AF37]/30 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/10] group">
              <Image
                src="/images/hero/charging-showcase.jpg"
                alt="Nexvolt Charging Accessories and Braided USB-C Cables"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/30 to-transparent pointer-events-none" />

              {/* Floating Specification Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#F2D675] mb-0.5">
                    <Zap className="w-3.5 h-3.5 text-[#F2D675]" />
                    <span>Reliable Everyday Power</span>
                  </div>
                  <p className="text-base font-semibold text-white">
                    Wall Adapters &bull; USB-C Braided Cables
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F2D675] shrink-0">
                  <Plug className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ChargingShowcase };
