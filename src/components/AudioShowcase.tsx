import Link from "next/link";
import {
  Headphones,
  Ear,
  Airplay,
  Volume2,
  Speaker,
  Home,
  ArrowRight,
} from "lucide-react";

export default function AudioShowcase() {
  const audioCategories = [
    {
      name: "Neckbands",
      slug: "neckbands",
      icon: Headphones,
      desc: "Wireless neckband earphones designed for comfortable daily listening and active wear.",
    },
    {
      name: "TWS Earbuds",
      slug: "tws-earbuds",
      icon: Ear,
      desc: "True wireless stereo earbuds offering cable-free convenience and balanced sound.",
    },
    {
      name: "OWS Earbuds",
      slug: "ows-earbuds",
      icon: Airplay,
      desc: "Open wearable stereo earbuds for natural ambient awareness and fatigue-free listening.",
    },
    {
      name: "Bluetooth Speakers",
      slug: "bluetooth-speakers",
      icon: Volume2,
      desc: "Portable wireless speakers delivering room-filling music wherever your day takes you.",
    },
    {
      name: "Soundbars",
      slug: "soundbars",
      icon: Speaker,
      desc: "Slim, space-saving soundbars engineered to elevate television and living room audio.",
    },
    {
      name: "Home Theatre",
      slug: "home-theatre-systems",
      icon: Home,
      desc: "Immersive multi-speaker sound systems designed for cinema-grade home entertainment.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F2D675]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#F2D675] font-semibold mb-2 block">
            Premium Sound Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Sound That Fits Your Lifestyle
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C7C7C7]">
            Explore audio solutions for personal listening, entertainment, and everyday experiences.
          </p>
        </div>

        {/* 6 Audio Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audioCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group bg-[#171719] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#1f1f23] transition-all duration-300 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/25 text-[#F2D675] flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0D] transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#F2D675] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#C7C7C7] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-[#D4AF37] group-hover:text-[#F2D675]">
                  <span className="group-hover:underline">Browse Products</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Primary Button: gold background with dark text) */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5"
          >
            <span>Explore Audio Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { AudioShowcase };
