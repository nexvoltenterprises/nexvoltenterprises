"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Read category from URL on client side
  useMemo(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) setSelectedCategory(cat);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    // Update URL without reload
    const url = slug === "all" ? "/products" : `/products?category=${slug}`;
    window.history.replaceState({}, "", url);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* Page Header */}
      <section className="bg-[#0B0B0D] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#C7C7C7] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Product Catalogue
          </h1>
          <p className="text-[#C7C7C7] text-lg max-w-2xl">
            Browse our complete range of consumer electronics, audio products,
            and charging accessories. Enquire about any product directly via
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 z-30 bg-[#171719] border-y border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-white/15 bg-[#0B0B0D] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm text-[#C7C7C7] border border-white/15 rounded-lg px-4 py-2.5 hover:text-white"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
              Filters
            </button>

            {/* Desktop category filters */}
            <div className="hidden md:flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold shadow-md"
                    : "bg-[#0B0B0D] text-[#C7C7C7] hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold shadow-md"
                      : "bg-[#0B0B0D] text-[#C7C7C7] hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile category filters */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 mt-4 pb-2">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold shadow-md"
                    : "bg-[#0B0B0D] text-[#C7C7C7] hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold shadow-md"
                      : "bg-[#0B0B0D] text-[#C7C7C7] hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-4 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <p className="text-sm text-[#C7C7C7] mb-6">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {selectedCategory !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="font-medium text-[#D4AF37]">
                  {categories.find((c) => c.slug === selectedCategory)?.name}
                </span>
              </span>
            )}
            {searchQuery && (
              <span>
                {" "}
                matching &ldquo;
                <span className="font-medium text-[#D4AF37]">
                  {searchQuery}
                </span>
                &rdquo;
              </span>
            )}
          </p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#171719] rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-[#0B0B0D] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                No products found
              </h3>
              <p className="text-[#C7C7C7] mb-6">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("all");
                }}
                className="text-[#D4AF37] hover:text-[#F2D675] font-semibold underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
