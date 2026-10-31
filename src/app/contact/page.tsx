import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Nexvolt Enterprises",
  description:
    "Get in touch with Nexvolt Enterprises in Bengaluru. Call us, send a WhatsApp message, or visit our location to discuss electronics products and accessories.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* Hero */}
      <section className="bg-[#0B0B0D] pt-32 pb-20 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#C7C7C7] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-[#C7C7C7] text-lg max-w-2xl leading-relaxed">
            Have questions about our products? Want to discuss availability or
            pricing? Reach out to Nexvolt Enterprises — we&apos;re happy to
            help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-[#171719] border border-white/10 rounded-2xl p-8 text-center hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-14 h-14 bg-[#0B0B0D] border border-white/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mx-auto mb-5">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Visit Us
              </h3>
              <p className="text-[#C7C7C7] leading-relaxed text-sm sm:text-base">
                #13, Moodlappa Cross,
                <br />
                Doddamavali,
                <br />
                Bengaluru, Karnataka, India.
              </p>
            </div>

            {/* Phone */}
            <div className="bg-[#171719] border border-white/10 rounded-2xl p-8 text-center hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-14 h-14 bg-[#0B0B0D] border border-white/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mx-auto mb-5">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Call Us
              </h3>
              <a
                href="tel:+919180595957"
                className="text-[#D4AF37] hover:text-[#F2D675] text-lg font-semibold transition-colors"
              >
                +91 91805 95957
              </a>
              <p className="text-[#C7C7C7] text-sm mt-2">
                Tap to call directly from your phone
              </p>
            </div>

            {/* WhatsApp (recognizable green styling) */}
            <div className="bg-[#171719] border border-white/10 rounded-2xl p-8 text-center hover:border-green-400/50 transition-colors">
              <div className="w-14 h-14 bg-[#0B0B0D] border border-green-500/30 rounded-2xl flex items-center justify-center text-[#25D366] mx-auto mb-5">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                WhatsApp
              </h3>
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] text-lg font-semibold hover:underline"
              >
                Send a Message
              </a>
              <p className="text-[#C7C7C7] text-sm mt-2">
                Get a quick response on WhatsApp
              </p>
            </div>
          </div>

          {/* Enquiry Section */}
          <div className="bg-gradient-to-br from-[#171719] via-[#0B0B0D] to-[#171719] border border-[#D4AF37]/30 rounded-3xl p-8 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Business Enquiries Welcome
              </h2>
              <p className="text-[#C7C7C7] leading-relaxed mb-8">
                Whether you are a retail customer looking for personal
                electronics or a business exploring product options, we welcome
                your enquiry. Connect with us to discuss product availability,
                categories, and pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire on WhatsApp
                </a>
                <a
                  href="tel:+919180595957"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#D4AF37] hover:border-[#F2D675] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold px-8 py-4 rounded-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style Info */}
      <section className="py-20 px-4 bg-[#171719] border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-[#0B0B0D] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">
                How can I enquire about a product?
              </h3>
              <p className="text-[#C7C7C7]">
                You can enquire about any product in our catalogue by clicking
                the &ldquo;Enquire&rdquo; button on the product page. This will
                open a WhatsApp conversation with our team, pre-filled with the
                product details. You can also call us directly.
              </p>
            </div>
            <div className="bg-[#0B0B0D] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">
                Are prices listed on the website?
              </h3>
              <p className="text-[#C7C7C7]">
                Product pricing is available on request. Please contact us via
                WhatsApp or phone to get the latest pricing and availability
                information for any product.
              </p>
            </div>
            <div className="bg-[#0B0B0D] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">
                Where is Nexvolt Enterprises located?
              </h3>
              <p className="text-[#C7C7C7]">
                We are located at #13, Moodlappa Cross, Doddamavali, Bengaluru,
                Karnataka, India. Feel free to reach out to us before visiting.
              </p>
            </div>
            <div className="bg-[#0B0B0D] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">
                What product categories do you offer?
              </h3>
              <p className="text-[#C7C7C7]">
                We offer products across multiple categories including
                neckbands, TWS earbuds, OWS earbuds, Bluetooth speakers,
                soundbars, home theatre systems, charger adapters, and charging
                cables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
