import { Metadata } from "next";
import Link from "next/link";
import {
  Headphones,
  Plug,
  Cable,
  Speaker,
  Volume2,
  Home,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { categories } from "@/data/categories";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Nexvolt Enterprises",
  description:
    "Learn about Nexvolt Enterprises — a consumer electronics business based in Bengaluru, Karnataka, offering a range of audio products, charging accessories, and everyday technology essentials.",
};

const iconMap: Record<string, React.ReactNode> = {
  Headphones: <Headphones className="w-6 h-6" />,
  Ear: <Headphones className="w-6 h-6" />,
  Plug: <Plug className="w-6 h-6" />,
  Cable: <Cable className="w-6 h-6" />,
  Speaker: <Speaker className="w-6 h-6" />,
  Volume2: <Volume2 className="w-6 h-6" />,
  Airplay: <Headphones className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
};

export default function AboutPage() {
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
            <span className="text-[#D4AF37]">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Nexvolt Enterprises
          </h1>
          <p className="text-[#C7C7C7] text-lg max-w-3xl leading-relaxed">
            Nexvolt Enterprises is a consumer electronics business based in
            Bengaluru, Karnataka, India. We showcase a versatile range of audio
            products, charging accessories, and everyday technology essentials.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
                Company Overview
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Electronics for Everyday Connectivity
              </h2>
              <div className="space-y-4 text-[#C7C7C7] leading-relaxed">
                <p>
                  Nexvolt Enterprises offers a curated selection of consumer
                  electronics and accessories designed for everyday use. Our
                  product catalogue spans multiple categories including personal
                  audio, home entertainment, and charging solutions.
                </p>
                <p>
                  Based in Bengaluru, we are focused on making it convenient for
                  customers, retailers, and business partners to explore and
                  enquire about electronics products. Our team is accessible
                  through direct communication channels to discuss product
                  availability and requirements.
                </p>
                <p>
                  Whether you are looking for wireless earbuds, a home theatre
                  system, charging accessories, or portable speakers, Nexvolt
                  Enterprises provides a single destination to browse and enquire
                  about a diverse range of products.
                </p>
              </div>
            </div>
            <div className="bg-[#171719] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Our Location
              </h3>
              <div className="space-y-4 text-[#C7C7C7]">
                <div>
                  <p className="font-semibold text-white">
                    Nexvolt Enterprises
                  </p>
                  <p>#13, Moodlappa Cross,</p>
                  <p>Doddamavali,</p>
                  <p>Bengaluru, Karnataka, India.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Contact</p>
                  <a
                    href="tel:+919180595957"
                    className="text-[#D4AF37] hover:text-[#F2D675] transition-colors"
                  >
                    +91 91805 95957
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile & Leadership Section */}
      <section className="py-20 px-4 bg-[#171719] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto bg-[#0B0B0D] border border-[#D4AF37]/30 rounded-2xl p-8 sm:p-12 shadow-xl shadow-black/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/05 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171719] border border-[#D4AF37]/40 text-[#F2D675] text-xs font-semibold mb-6">
                <span>Founder Profile &amp; Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Leadership Driven by Trust &amp; Reliability
              </h2>
              <blockquote className="text-[#C7C7C7] text-base sm:text-lg leading-relaxed italic mb-8 border-l-2 border-[#D4AF37] pl-4 sm:pl-6">
                &ldquo;At Nexvolt Enterprises, our goal has always been simple: bring dependably engineered electronics and accessories to market with complete transparency, prompt customer service, and long-term commercial relationships.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-lg font-semibold text-white">Nexvolt Enterprises Leadership</h4>
                  <p className="text-sm text-[#D4AF37]">Bengaluru, Karnataka</p>
                </div>
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Our Product Categories
          </h2>
          <p className="text-[#C7C7C7] text-center max-w-2xl mx-auto mb-12">
            We offer products across a wide range of consumer electronics and
            accessory categories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="bg-[#171719] border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/60 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/15 border border-[#D4AF37]/25 rounded-xl flex items-center justify-center text-[#F2D675] mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0D] transition-colors">
                  {iconMap[category.icon] || (
                    <Speaker className="w-6 h-6" />
                  )}
                </div>
                <h3 className="font-semibold text-white group-hover:text-[#F2D675] transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[#C7C7C7] leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-[#171719] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Approach
          </h2>
          <p className="text-[#C7C7C7] max-w-2xl mx-auto mb-12">
            At Nexvolt Enterprises, we focus on providing a clear and convenient
            way for customers and business partners to explore electronics
            products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0B0B0D] border border-white/10 rounded-2xl">
              <div className="w-14 h-14 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#F2D675] mx-auto mb-4">
                <Speaker className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Curated Product Selection
              </h3>
              <p className="text-sm text-[#C7C7C7]">
                We carefully select and showcase products across audio,
                charging, and accessory categories for everyday use.
              </p>
            </div>
            <div className="p-6 bg-[#0B0B0D] border border-white/10 rounded-2xl">
              <div className="w-14 h-14 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#F2D675] mx-auto mb-4">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Direct Communication
              </h3>
              <p className="text-sm text-[#C7C7C7]">
                Connect with us directly via phone or WhatsApp to discuss
                product details, availability, and pricing.
              </p>
            </div>
            <div className="p-6 bg-[#0B0B0D] border border-white/10 rounded-2xl">
              <div className="w-14 h-14 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#F2D675] mx-auto mb-4">
                <ArrowRight className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Easy Enquiry Process
              </h3>
              <p className="text-sm text-[#C7C7C7]">
                Browse our catalogue, find products that interest you, and
                enquire with a single click. We make it simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (Primary Button: gold background with dark text) */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#171719] via-[#0B0B0D] to-[#171719] border-t border-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Our Products?
          </h2>
          <p className="text-[#C7C7C7] mb-8">
            Browse our catalogue or connect with us to discuss your electronics
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#D4AF37]/20"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
