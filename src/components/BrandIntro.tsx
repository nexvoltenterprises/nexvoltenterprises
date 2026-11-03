import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap } from "lucide-react";

export default function BrandIntro() {
  const pillars = [
    {
      icon: Compass,
      title: "Thoughtful Curation",
      desc: "Every product in our audio, charging, and entertainment catalogue is selected for build integrity, balanced acoustics, and dependable daily performance.",
    },
    {
      icon: Zap,
      title: "Commercial Agility",
      desc: "Operating on a transparent Price on Request model, we provide quick WhatsApp consultations, stock availability, and tailored commercial terms.",
    },
    {
      icon: ShieldCheck,
      title: "Bengaluru Heritage",
      desc: "Headquartered at Doddamavali, Bengaluru, Nexvolt Enterprises combines local operational accountability with accessible consumer electronics supply.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#171719] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 block">
              Corporate Overview &bull; Bengaluru
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Curated Electronics Built for Dependability and Everyday Performance.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-[#C7C7C7] text-base sm:text-lg leading-relaxed mb-4">
              Nexvolt Enterprises is a Bengaluru-based consumer electronics enterprise
              focused on personal audio, home entertainment systems, and essential
              charging accessories.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F2D675] hover:text-[#D4AF37] transition-colors group"
              >
                <span>Discover our company story and approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#0B0B0D] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#171719] border border-[#D4AF37]/30 text-[#F2D675] flex items-center justify-center mb-6 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F2D675] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#C7C7C7] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C7C7C7]/60">
                  <span className="font-mono">0{index + 1}</span>
                  <span className="uppercase tracking-wider">Nexvolt Principle</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { BrandIntro };
