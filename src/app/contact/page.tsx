import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Clock,
  Sparkles,
} from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import ContactFormRfq from "@/components/ContactFormRfq";
import ContactFaq from "@/components/ContactFaq";

export const metadata: Metadata = {
  title: "Contact & B2B Inquiries — Nexvolt Enterprises | Bengaluru",
  description:
    "Get in touch with Nexvolt Enterprises in Bengaluru. Request quotes, submit commercial RFQs, call our desk at +91 91805 95957, or visit our Doddamavali office.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=13+Moodlappa+Cross+Doddamavali+Bengaluru+Karnataka+560004";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* Hero Header */}
      <section className="bg-[#0B0B0D] pt-32 pb-16 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#C7C7C7] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Contact</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2.5 block">
              Direct Communication Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Connect with Nexvolt Enterprises
            </h1>
            <p className="text-[#C7C7C7] text-base sm:text-lg mt-3 leading-relaxed">
              Have questions about product models, retail stock, or bulk commercial
              terms? Connect directly with our team in Bengaluru via WhatsApp,
              phone, or our online quotation builder.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Map Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Address & Google Maps Direction Card */}
            <div className="bg-[#171719] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl group">
              <div>
                <div className="w-12 h-12 bg-[#0B0B0D] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Bengaluru Headquarters
                </h3>
                <p className="text-sm text-[#C7C7C7] leading-relaxed mb-4">
                  #13, Moodlappa Cross,
                  <br />
                  Doddamavali, Bengaluru,
                  <br />
                  Karnataka 560004, India.
                </p>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F2D675] pt-3 border-t border-white/10 group-hover:translate-x-0.5 transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone Desk */}
            <div className="bg-[#171719] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl group">
              <div>
                <div className="w-12 h-12 bg-[#0B0B0D] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-5">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Direct Telephone Desk
                </h3>
                <a
                  href="tel:+919180595957"
                  className="text-xl font-bold text-[#D4AF37] hover:text-[#F2D675] transition-colors block mb-2"
                >
                  +91 91805 95957
                </a>
                <p className="text-sm text-[#C7C7C7] leading-relaxed mb-4">
                  Monday to Saturday: 10:00 AM – 7:00 PM IST.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#C7C7C7] pt-3 border-t border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Immediate phone assistance</span>
              </div>
            </div>

            {/* Official WhatsApp Channel */}
            <div className="bg-[#171719] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#25D366]/50 transition-all duration-300 shadow-xl group">
              <div>
                <div className="w-12 h-12 bg-[#0B0B0D] border border-[#25D366]/30 rounded-2xl flex items-center justify-center text-[#25D366] mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  WhatsApp Support & Quotes
                </h3>
                <p className="text-sm text-[#C7C7C7] leading-relaxed mb-4">
                  Quickest way to check real-time stock, request quotes, and get
                  product photographs.
                </p>
              </div>

              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#0B0B0D]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive WhatsApp RFQ Generator */}
          <div className="mb-20">
            <ContactFormRfq />
          </div>

          {/* Frequently Asked Questions */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
                Help & Clarifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <ContactFaq />
          </div>
        </div>
      </section>
    </div>
  );
}
