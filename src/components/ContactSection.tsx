import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B8932C] font-semibold mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171719] tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Reach out to Nexvolt Enterprises for product enquiries, availability, and orders.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Address Card */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-start border border-gray-200 hover:border-[#D4AF37]/50 shadow-sm transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#171719] text-[#D4AF37] flex items-center justify-center mb-6 shrink-0">
              <MapPin className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-xl font-semibold text-[#171719] mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              #13 Moodlappa Cross, Doddamavali, Bengaluru, Karnataka, India
            </p>
          </div>

          {/* 2. Phone Card */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-start border border-gray-200 hover:border-[#D4AF37]/50 shadow-sm transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#171719] text-[#D4AF37] flex items-center justify-center mb-6 shrink-0">
              <Phone className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-xl font-semibold text-[#171719] mb-2">
              Call Us
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3">
              Speak directly with our team during business hours.
            </p>
            <a
              href="tel:+919180595957"
              className="text-[#B8932C] hover:text-[#D4AF37] font-semibold text-base inline-flex items-center gap-1.5 transition-colors"
            >
              <span>+91 91805 95957</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3. WhatsApp Card */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-start border border-gray-200 hover:border-green-400 shadow-sm transition-colors">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 shrink-0">
              <MessageCircle className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-xl font-semibold text-[#171719] mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3">
              Send us a message for quick enquiries and product availability.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold text-base inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Send us a message</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };
