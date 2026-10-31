import { ArrowRight, MessageCircle } from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export default function BusinessEnquiry() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="bg-gradient-to-br from-[#0B0B0D] via-[#171719] to-[#0B0B0D] border-y border-[#D4AF37]/25 py-20 px-4 text-center relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F2D675]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171719] border border-[#D4AF37]/30 text-[#F2D675] text-xs font-medium mb-6">
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Direct WhatsApp Enquiries</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Looking for Electronics Products?
        </h2>

        <p className="text-[#C7C7C7] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect with Nexvolt Enterprises to discuss product availability, specifications, and pricing.
        </p>

        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] rounded-full px-8 py-4 font-semibold shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5 transition-all text-base"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export { BusinessEnquiry };
