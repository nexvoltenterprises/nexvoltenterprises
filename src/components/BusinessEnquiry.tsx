import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export default function BusinessEnquiry() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#171719] via-[#141417] to-[#0B0B0D] border border-[#D4AF37]/35 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl shadow-black/80">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#F2D675]/05 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0D] border border-[#D4AF37]/30 text-[#F2D675] text-xs font-semibold mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2D675]" />
              <span>Commercial &bull; Retail &bull; Direct Partnerships</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Good Technology. Better Business Relationships.
            </h2>

            {/* Subtext */}
            <p className="text-[#C7C7C7] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Looking for electronics products, custom orders, or commercial distribution?
              Connect directly with Nexvolt Enterprises for specifications, current stock,
              and tailored quotes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5 text-base"
              >
                <MessageCircle className="w-5 h-5 text-[#0B0B0D]" />
                <span>Discuss on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B0B0D] hover:bg-[#1f1f23] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-white font-semibold px-7 py-4 rounded-xl transition-all hover:-translate-y-0.5 text-base"
              >
                <Mail className="w-4 h-4 text-[#F2D675]" />
                <span>Contact Details &amp; Location</span>
              </Link>
            </div>

            {/* Operating Badges */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#C7C7C7]/70">
              <span>Price on Request</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span>Direct WhatsApp Quotes</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { BusinessEnquiry };
