"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { getGeneralEnquiryUrl } from '@/lib/whatsapp';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const CATEGORY_LINKS = [
  { name: 'Neckbands', slug: 'neckbands' },
  { name: 'TWS Earbuds', slug: 'tws-earbuds' },
  { name: 'Charger Adapters', slug: 'charger-adapters' },
  { name: 'Charging Cables', slug: 'charging-cables' },
  { name: 'Soundbars', slug: 'soundbars' },
  { name: 'Bluetooth Speakers', slug: 'bluetooth-speakers' },
  { name: 'OWS Earbuds', slug: 'ows-earbuds' },
  { name: 'Home Theatre Systems', slug: 'home-theatre-systems' },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0B0B0D] border-t border-white/10 text-[#C7C7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              aria-label="Nexvolt Enterprises Home"
            >
              <Logo variant="light" width={160} height={40} />
            </Link>
            <p className="text-sm leading-relaxed text-[#C7C7C7]">
              Nexvolt Enterprises showcases a range of consumer electronics, audio
              products, and charging accessories.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#171719] text-[#F2D675] text-xs font-medium rounded-full border border-[#D4AF37]/30">
                Price on Request
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#C7C7C7] hover:text-[#F2D675] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Product Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {CATEGORY_LINKS.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-[#C7C7C7] hover:text-[#F2D675] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-[#C7C7C7]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  #13, Moodlappa Cross, Doddamavali, Bengaluru, Karnataka, India
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+919180595957"
                  className="hover:text-[#F2D675] transition-colors"
                >
                  +91 91805 95957
                </a>
              </div>

              {/* WhatsApp Button (retains recognizable green styling) */}
              <div className="pt-2">
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-colors shadow-sm"
                  aria-label="Enquire on WhatsApp"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.563 5.375L2.25 22l4.781-1.25c1.5 1 3.25 1.563 5 1.563 5.531 0 10.031-4.5 10.031-10.031C22.063 6.5 17.563 2 12.031 2zm0 18.25c-1.688 0-3.25-.5-4.563-1.406l-.344-.219-3.375.906.906-3.281-.219-.344C3.531 14.594 3.031 13.344 3.031 12.031 3.031 7.063 7.094 3 12.031 3s9 4.063 9 9.031c0 4.969-4.031 9.031-9 9.031zm4.938-6.75c-.281-.156-1.625-.813-1.875-.906-.25-.094-.438-.156-.625.156s-.719.906-.875 1.094c-.156.188-.344.219-.625.063-.281-.156-1.188-.438-2.281-1.406-.844-.75-1.406-1.688-1.563-1.969-.156-.281-.031-.438.125-.594.125-.125.281-.344.406-.5.156-.188.219-.281.313-.469.094-.188.031-.375-.031-.5-.063-.125-.625-1.531-.875-2.094-.25-.563-.469-.469-.656-.469h-.563c-.188 0-.531.063-.813.375s-1.094 1.063-1.094 2.594c0 1.531 1.125 3.031 1.281 3.219.156.188 2.219 3.375 5.375 4.75.75.313 1.344.5 1.813.656.781.25 1.469.219 2.031.125.625-.094 1.938-.781 2.219-1.563.281-.781.281-1.438.188-1.563-.094-.125-.281-.219-.563-.375z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            &copy; {currentYear} Nexvolt Enterprises. All rights reserved.
          </p>
          <p className="text-gray-500">
            Consumer Electronics &bull; Bengaluru, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}
