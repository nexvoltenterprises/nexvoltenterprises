"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, ArrowUpRight, Package } from "lucide-react";
import { products, Product } from "@/data/products";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut Ctrl+K / Cmd+K listener & Custom Event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleOpenSearch = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search-modal", handleOpenSearch);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search-modal", handleOpenSearch);
    };
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return products.slice(0, 5); // show top 5 suggestions when empty
    const q = query.toLowerCase().trim();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelectProduct = (slug: string) => {
    setIsOpen(false);
    router.push(`/products/${slug}`);
  };

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#111114] border border-[#D4AF37]/40 rounded-2xl shadow-2xl shadow-[#D4AF37]/10 overflow-hidden flex flex-col"
      >
        {/* Search Input Bar */}
        <form
          onSubmit={handleFullSearch}
          className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#171719]"
        >
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            id="search-modal-title"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search audio, chargers, soundbars, neckbands... (Press Esc to close)"
            autoFocus
            className="w-full bg-transparent text-white placeholder-gray-400 text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-[#202025]"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close search"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#C7C7C7] mb-2 px-2">
            <span>
              {query.trim()
                ? `Results for "${query}" (${results.length})`
                : "Suggested Hardware"}
            </span>
            <span className="text-[11px] text-[#D4AF37]/80">
              Press ↵ for catalogue
            </span>
          </div>

          {results.length > 0 ? (
            results.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => handleSelectProduct(product.slug)}
                className="w-full p-3 rounded-xl bg-[#171719] hover:bg-[#202026] border border-white/5 hover:border-[#D4AF37]/40 transition-all flex items-center justify-between group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#F2D675] font-semibold block">
                      {product.category}
                    </span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#F2D675] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#C7C7C7] line-clamp-1 max-w-md">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-3 shrink-0">
                  <span className="text-xs font-semibold text-[#D4AF37] hidden sm:inline">
                    {product.priceLabel || "Price on Request"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#F2D675] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            ))
          ) : (
            <div className="py-12 text-center">
              <Package className="w-10 h-10 text-gray-500 mx-auto mb-3" />
              <p className="text-white font-medium">No electronics match your search</p>
              <p className="text-xs text-[#C7C7C7] mt-1">
                Try searching for &quot;earbuds&quot;, &quot;soundbar&quot;, &quot;cable&quot;, or &quot;charger&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#171719] border-t border-white/10 flex items-center justify-between text-xs text-[#C7C7C7]">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-0.5 rounded bg-[#0B0B0D] border border-white/15 text-[10px] text-gray-300">
              ESC
            </kbd>
            <span>to close</span>
          </div>

          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="text-[#F2D675] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Browse Full 24-Product Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export { SearchModal };
