import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-[#171719] border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <Search className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-xl font-semibold text-[#D4AF37] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#C7C7C7] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF37] hover:border-[#F2D675] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
