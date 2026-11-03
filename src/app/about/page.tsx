import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { categories } from "@/data/categories";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Nexvolt Enterprises — Consumer Electronics | Bengaluru",
  description:
    "Learn about Nexvolt Enterprises — a Bengaluru-based consumer electronics distributor and retailer specializing in personal audio, soundbars, and charging hardware.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=13+Moodlappa+Cross+Doddamavali+Bengaluru+Karnataka+560004";

export default function AboutPage() {
  const whatsappUrl = getGeneralEnquiryUrl();

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nexvolt Enterprises",
    description:
      "Consumer electronics business based in Bengaluru, Karnataka, offering a range of audio products, charging accessories, and home entertainment essentials.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Nexvolt Enterprises",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#13, Moodlappa Cross, Doddamavali",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560004",
        addressCountry: "IN",
      },
      telephone: "+91-9180595957",
    },
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#0B0B0D] pt-32 pb-16 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#C7C7C7] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37]">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
              Corporate Heritage &amp; Vision
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              About Nexvolt Enterprises
            </h1>
            <p className="text-[#C7C7C7] text-base sm:text-lg mt-3 leading-relaxed">
              Based in Bengaluru, Karnataka, Nexvolt Enterprises is a dedicated
              supplier of personal audio devices, living space acoustics, and
              high-durability fast-charging hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Location Card */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Electronics Curated for Everyday Connectivity
              </h2>
              <div className="space-y-4 text-[#C7C7C7] text-base leading-relaxed">
                <p>
                  Nexvolt Enterprises curates a balanced portfolio of consumer
                  electronics engineered for real-world resilience and acoustic
                  clarity. From commuter-ready TWS earbuds and flexible neckbands
                  to high-fidelity soundbars and braided USB-C cables, our
                  products are chosen to meet rigorous daily demands.
                </p>
                <p>
                  Headquartered in the commercial heart of Bengaluru, we serve
                  both retail individual buyers and B2B commercial clients
                  including retailers, corporate partners, and bulk procurement
                  agencies throughout Karnataka and South India.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Direct Dispatch Agility
                    </h4>
                    <p className="text-xs text-[#C7C7C7] mt-0.5">
                      Doddamavali distribution hub ensures expedited delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Transparent Commercial Model
                    </h4>
                    <p className="text-xs text-[#C7C7C7] mt-0.5">
                      Direct WhatsApp quotes and flexible volume billing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Location & Headquarters Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#171719] border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B0B0D] border border-white/10 flex items-center justify-center text-[#D4AF37]">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
                      Registered Office
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Nexvolt Enterprises
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-[#C7C7C7] leading-relaxed">
                    <p>#13, Moodlappa Cross,</p>
                    <p>Doddamavali, Bengaluru,</p>
                    <p>Karnataka 560004, India.</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">Phone Desk</span>
                      <a
                        href="tel:+919180595957"
                        className="text-sm font-bold text-[#D4AF37] hover:text-[#F2D675] transition-colors"
                      >
                        +91 91805 95957
                      </a>
                    </div>

                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#F2D675] bg-[#202025] hover:bg-[#282830] px-3.5 py-2 rounded-xl transition-all"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Integrity Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#171719] border-y border-white/10">
        <div className="max-w-4xl mx-auto bg-[#0B0B0D] border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171719] border border-[#D4AF37]/30 text-[#F2D675] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Leadership Principle</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              Built on Direct Accountability &amp; Trust
            </h2>
            <blockquote className="text-[#C7C7C7] text-base sm:text-lg leading-relaxed italic mb-8 border-l-2 border-[#D4AF37] pl-4 sm:pl-6">
              &ldquo;At Nexvolt Enterprises, our goal has always been simple: bring
              dependably engineered electronics and accessories to market with complete
              transparency, prompt customer service, and long-term commercial
              relationships.&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-base font-bold text-white">
                  Nexvolt Enterprises Commercial Desk
                </h4>
                <p className="text-xs text-[#D4AF37]">Bengaluru, Karnataka</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#0B0B0D]" />
                <span>Connect with Leadership</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Categories Grid with Authentic Photography */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
              Inventory Breadth
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our 8 Hardware Categories
            </h2>
            <p className="text-sm sm:text-base text-[#C7C7C7] mt-3">
              Explore our core product lines spanning personal acoustics, home
              audio, and high-efficiency power delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="bg-[#171719] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                <div className="aspect-[4/3] bg-white relative p-4 flex items-center justify-center overflow-hidden border-b border-white/10">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#F2D675] transition-colors mb-1.5">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#C7C7C7] leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#171719] via-[#0E0E10] to-[#171719] border-t border-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Explore Our Catalogue?
          </h2>
          <p className="text-sm sm:text-base text-[#C7C7C7] mb-8 max-w-xl mx-auto leading-relaxed">
            Browse our complete 24-product collection or reach out directly to
            discuss batch requirements, commercial distribution, or pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              <span>Explore 24 Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#202025] hover:bg-[#282830] text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Contact Bengaluru Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
