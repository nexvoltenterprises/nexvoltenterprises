'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import Logo from '@/components/Logo';
import { getGeneralEnquiryUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/#categories' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll detection to toggle navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu and search dropdown when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Handle smooth scroll to categories if on home page
  const handleCategoriesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const categoriesElement = document.getElementById('categories');
      if (categoriesElement) {
        categoriesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Determine if a navigation link is active
  const isLinkActive = useCallback(
    (href: string) => {
      if (href === '/') {
        return pathname === '/';
      }
      if (href === '/#categories') {
        return false;
      }
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  // Search submission handler
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/products?search=${encodeURIComponent(trimmed)}`);
    } else {
      router.push('/products');
    }
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* 1. Announcement Bar */}
      {showAnnouncement && (
        <aside
          aria-label="Announcement"
          className="bg-[#0B0B0D] border-b border-[#171719] text-[#C7C7C7] text-xs sm:text-sm py-2 px-4 transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="w-6 hidden sm:block" />
            <p className="text-center flex-1 font-medium tracking-wide">
              Discover Electronics. <span className="text-[#D4AF37]">Connect with Confidence.</span>
            </p>
            <button
              type="button"
              onClick={() => setShowAnnouncement(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* 2. Sticky Navigation Bar */}
      <header
        className={cn(
          'sticky top-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-md transition-all duration-200',
          isScrolled
            ? 'shadow-lg shadow-black/40 border-b border-[#D4AF37]/25 py-3'
            : 'border-b border-white/10 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
                aria-label="Nexvolt Enterprises Home"
              >
                <Logo variant="light" width={160} height={40} />
              </Link>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center space-x-8"
            >
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={
                      link.href === '/#categories'
                        ? handleCategoriesClick
                        : undefined
                    }
                    className={cn(
                      'relative py-1 text-sm font-medium transition-colors duration-150',
                      active
                        ? 'text-[#D4AF37] font-semibold'
                        : 'text-[#C7C7C7] hover:text-[#F2D675]'
                    )}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search & Enquire Now Button */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Toggle Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#C7C7C7] hover:text-[#F2D675] hover:bg-[#171719] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Search products"
                aria-expanded={isSearchOpen}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Enquire Now CTA (Primary Button: gold background with dark text) */}
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] text-sm font-semibold rounded-lg transition-colors shadow-sm hover:shadow-[#D4AF37]/30"
              >
                Enquire Now
              </a>
            </div>

            {/* Mobile Controls: Search & Hamburger Menu */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#C7C7C7] hover:text-[#F2D675] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#C7C7C7] hover:text-white rounded-lg hover:bg-[#171719] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-drawer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-[#171719] bg-[#171719] px-4 py-3 transition-all">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search electronics, neckbands, earbuds, chargers..."
                    className="w-full pl-9 pr-4 py-2 bg-[#0B0B0D] border border-white/15 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] text-sm font-semibold rounded-lg transition-colors"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg"
                  aria-label="Close search input"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* 3. Mobile Menu Drawer */}
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full sm:w-80 max-w-[85vw] bg-[#0B0B0D] border-l border-white/10 z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center"
            aria-label="Nexvolt Enterprises Home"
          >
            <Logo variant="light" width={140} height={36} />
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#171719] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Quick Search inside Mobile Drawer */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 bg-[#171719] border border-white/15 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </form>

          {/* Nav Links Stack */}
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={
                    link.href === '/#categories'
                      ? handleCategoriesClick
                      : () => setIsMobileMenuOpen(false)
                  }
                  className={cn(
                    'flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors',
                    active
                      ? 'bg-[#171719] text-[#D4AF37] font-semibold'
                      : 'text-[#C7C7C7] hover:bg-[#171719] hover:text-[#F2D675]'
                  )}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enquire Now Action (Primary Button: gold background with dark text) */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-semibold rounded-lg transition-colors shadow-sm"
            >
              Enquire Now
            </a>
            <p className="text-xs text-[#C7C7C7] text-center">
              Direct connection via WhatsApp &bull; Price on Request
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
