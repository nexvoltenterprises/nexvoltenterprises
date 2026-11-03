import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products Catalogue", href: "/products" },
  { name: "About Nexvolt", href: "/about" },
  { name: "Contact & Enquiries", href: "/contact" },
];

const CATEGORY_LINKS = [
  { name: "TWS Earbuds", slug: "tws-earbuds" },
  { name: "Neckbands", slug: "neckbands" },
  { name: "OWS Earbuds", slug: "ows-earbuds" },
  { name: "Bluetooth Speakers", slug: "bluetooth-speakers" },
  { name: "Soundbars", slug: "soundbars" },
  { name: "Home Theatre Systems", slug: "home-theatre-systems" },
  { name: "Charger Adapters", slug: "charger-adapters" },
  { name: "Charging Cables", slug: "charging-cables" },
];

export default function Footer() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <footer className="bg-[#0B0B0D] border-t border-white/10 text-[#C7C7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              aria-label="Nexvolt Enterprises Home"
            >
              <Logo variant="light" width={175} height={42} />
            </Link>
            <p className="text-sm leading-relaxed text-[#C7C7C7]">
              Nexvolt Enterprises is a consumer electronics business based in
              Bengaluru, Karnataka. We curate dependable personal audio, soundbars,
              and charging accessories designed for everyday performance.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="inline-block px-3 py-1 bg-[#171719] text-[#F2D675] text-xs font-semibold rounded-full border border-[#D4AF37]/30">
                Price on Request
              </span>
              <span className="text-xs text-[#C7C7C7]/70">
                Direct WhatsApp Quotes
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#C7C7C7] hover:text-[#F2D675] hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Categories
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {CATEGORY_LINKS.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-[#C7C7C7] hover:text-[#F2D675] hover:translate-x-1 transition-all inline-block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Bengaluru Office
            </h3>
            <div className="space-y-3.5 text-sm text-[#C7C7C7]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  #13, Moodlappa Cross, Doddamavali, Bengaluru, Karnataka, India
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+919180595957"
                  className="hover:text-[#F2D675] transition-colors font-medium text-xs sm:text-sm"
                >
                  +91 91805 95957
                </a>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#25D366]/20"
                  aria-label="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C7C7C7]/60 gap-4">
          <p>
            &copy; 2026 Nexvolt Enterprises. All rights reserved.
          </p>
          <p>
            Consumer Electronics &bull; Audio &bull; Charging &bull; Bengaluru, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
