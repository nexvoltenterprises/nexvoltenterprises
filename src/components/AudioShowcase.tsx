import Link from "next/link";
import Image from "next/image";
import {
  Headphones,
  Ear,
  Airplay,
  Volume2,
  Speaker,
  Home,
  ArrowRight,
  Radio,
} from "lucide-react";

export default function AudioShowcase() {
  const audioCategories = [
    { name: "TWS Earbuds", slug: "tws-earbuds", icon: Ear, label: "Cable-Free Freedom" },
    { name: "Neckbands", slug: "neckbands", icon: Headphones, label: "All-Day Battery" },
    { name: "OWS Earbuds", slug: "ows-earbuds", icon: Airplay, label: "Ambient Awareness" },
    { name: "Bluetooth Speakers", slug: "bluetooth-speakers", icon: Volume2, label: "Room-Filling Sound" },
    { name: "Soundbars", slug: "soundbars", icon: Speaker, label: "Living Room Audio" },
    { name: "Home Theatre", slug: "home-theatre-systems", icon: Home, label: "Surround Immersion" },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F2D675]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Audio Showcase Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full rounded-3xl overflow-hidden bg-[#171719] border border-[#D4AF37]/30 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/10] group">
              <Image
                src="/images/hero/audio-showcase.jpg"
                alt="Nexvolt Audio Systems and Personal Sound Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/30 to-transparent pointer-events-none" />

              {/* Floating Specification Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F2D675] block">
                    Acoustic Portfolio
                  </span>
                  <p className="text-base font-semibold text-white mt-0.5">
                    Personal Audio &bull; Soundbars &bull; Home Theatres
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F2D675] shrink-0">
                  <Radio className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Audio Engineering Narrative & Feature Grid */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 block">
              Audio Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Sound Engineered for Clarity, Immersion, and Daily Living.
            </h2>
            <p className="text-[#C7C7C7] text-base sm:text-lg leading-relaxed mb-8">
              From commute-ready True Wireless earbuds and active neckbands to
              powerful Bluetooth speakers and multi-speaker home theatre arrays,
              Nexvolt provides acoustic solutions tailored to every space and lifestyle.
            </p>

            {/* 6 Audio Categories Quick Access */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              {audioCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/products?category=${item.slug}`}
                    className="p-3.5 rounded-xl bg-[#171719] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#1f1f26] transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="w-4 h-4 text-[#F2D675]" />
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7C7C7]/40 group-hover:text-[#F2D675] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#F2D675] transition-colors line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#C7C7C7]/70 line-clamp-1 mt-0.5">
                        {item.label}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5 text-sm"
            >
              <span>Explore Audio Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AudioShowcase };
