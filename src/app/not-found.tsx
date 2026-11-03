import Link from "next/link";
import { ArrowLeft, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white flex items-center justify-center px-4 py-32">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-[#171719] border border-[#D4AF37]/40 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#D4AF37]/10">
          <Search className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight mb-3">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4">
          Hardware Model or Page Not Found
        </h2>
        <p className="text-[#C7C7C7] text-sm sm:text-base mb-8 leading-relaxed">
          The electronics specification or page you requested does not exist or
          has been relocated in our catalogue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#F2D675] hover:bg-[#171719] font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>Open 24-Product Catalogue</span>
          </Link>
        </div>

        {/* Quick Category Anchors */}
        <div className="pt-8 border-t border-white/10 text-xs text-[#C7C7C7]">
          <p className="mb-3 font-semibold uppercase tracking-wider text-gray-400">
            Popular Categories
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/products?category=tws-earbuds"
              className="px-3 py-1.5 rounded-lg bg-[#171719] hover:bg-[#202026] text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              TWS Earbuds
            </Link>
            <Link
              href="/products?category=soundbars"
              className="px-3 py-1.5 rounded-lg bg-[#171719] hover:bg-[#202026] text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              Soundbars
            </Link>
            <Link
              href="/products?category=charging-cables"
              className="px-3 py-1.5 rounded-lg bg-[#171719] hover:bg-[#202026] text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              Charging Cables
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-lg bg-[#171719] hover:bg-[#202026] text-[#D4AF37] border border-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
