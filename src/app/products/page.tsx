"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ArrowUpDown,
  X,
  MessageCircle,
  ArrowUpRight,
  Package,
} from "lucide-react";
import { products, Product } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

type SortOption = "featured" | "name-asc" | "name-desc" | "category";
type ViewMode = "grid" | "list";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  // Synchronize state when URL parameter changes during render
  const urlCategory = searchParams.get("category") || "all";
  const [prevUrlCategory, setPrevUrlCategory] = useState(urlCategory);
  if (urlCategory !== prevUrlCategory) {
    setPrevUrlCategory(urlCategory);
    setSelectedCategory(urlCategory);
  }

  const urlSearch = searchParams.get("search") || "";
  const [prevUrlSearch, setPrevUrlSearch] = useState(urlSearch);
  if (urlSearch !== prevUrlSearch) {
    setPrevUrlSearch(urlSearch);
    if (urlSearch) setSearchQuery(urlSearch);
  }

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    const params = new URLSearchParams();
    if (slug !== "all") params.set("category", slug);
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    const queryStr = params.toString();
    const url = queryStr ? `/products?${queryStr}` : "/products";
    window.history.replaceState({}, "", url);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
    window.history.replaceState({}, "", "/products");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* Page Header */}
      <section className="bg-[#0B0B0D] pt-32 pb-12 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#C7C7C7] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Products</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
                Catalogue Portfolio
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Nexvolt Electronics Catalogue
              </h1>
              <p className="text-[#C7C7C7] text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
                Explore our full line of audio equipment, charging power adapters,
                cables, and home theatre systems. Direct quotes and B2B pricing
                are available on request.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* View Switcher: Grid vs List */}
              <div className="bg-[#171719] border border-white/10 p-1 rounded-xl flex items-center">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-[#D4AF37] text-[#0B0B0D]"
                      : "text-[#C7C7C7] hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    viewMode === "list"
                      ? "bg-[#D4AF37] text-[#0B0B0D]"
                      : "text-[#C7C7C7] hover:text-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <div className="flex items-center gap-2 bg-[#171719] border border-white/10 px-3 py-2 rounded-xl text-xs sm:text-sm text-[#C7C7C7]">
                  <ArrowUpDown className="w-4 h-4 text-[#D4AF37]" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    aria-label="Sort products"
                    className="bg-transparent text-white focus:outline-none cursor-pointer pr-2"
                  >
                    <option value="featured" className="bg-[#171719] text-white">
                      Featured First
                    </option>
                    <option value="name-asc" className="bg-[#171719] text-white">
                      Name: A to Z
                    </option>
                    <option value="name-desc" className="bg-[#171719] text-white">
                      Name: Z to A
                    </option>
                    <option value="category" className="bg-[#171719] text-white">
                      Category
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter & Search Toolbar */}
      <section className="sticky top-16 z-30 bg-[#171719]/95 backdrop-blur-md border-y border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search Input with Instant Clear */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl border border-white/15 bg-[#0B0B0D] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-between w-full text-sm text-[#C7C7C7] border border-white/15 rounded-xl px-4 py-2 hover:text-white bg-[#0B0B0D]"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                Filter by Category
              </span>
              <span className="text-xs text-[#D4AF37] font-semibold">
                {selectedCategory === "all"
                  ? "All"
                  : categories.find((c) => c.slug === selectedCategory)?.name}
              </span>
            </button>

            {/* Desktop category filters — Clean category names WITHOUT counts as requested */}
            <div className="hidden md:flex flex-wrap gap-2 items-center">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold shadow-md"
                    : "bg-[#0B0B0D] text-[#C7C7C7] hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
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

          {/* Mobile category filters dropdown */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  handleCategoryChange("all");
                  setShowFilters(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold"
                    : "bg-[#0B0B0D] text-[#C7C7C7] border border-white/10"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    handleCategoryChange(cat.slug);
                    setShowFilters(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-[#D4AF37] text-[#0B0B0D] font-semibold"
                      : "bg-[#0B0B0D] text-[#C7C7C7] border border-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Catalogue Content Area */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          {/* Active status & result indicator */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs sm:text-sm text-[#C7C7C7]">
            <div className="flex items-center gap-2">
              <span>Displaying</span>
              <span className="font-semibold text-white">
                {filteredAndSortedProducts.length}
              </span>
              <span>models</span>
              {selectedCategory !== "all" && (
                <span>
                  in{" "}
                  <span className="text-[#D4AF37] font-medium">
                    {categories.find((c) => c.slug === selectedCategory)?.name}
                  </span>
                </span>
              )}
              {searchQuery && (
                <span>
                  matching &ldquo;
                  <span className="text-[#D4AF37] font-medium">
                    {searchQuery}
                  </span>
                  &rdquo;
                </span>
              )}
            </div>

            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#F2D675] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            viewMode === "grid" ? (
              /* GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* COMPACT LIST VIEW FOR COMMERCIAL & WHOLESALE BUYERS */
              <div className="space-y-4">
                {filteredAndSortedProducts.map((product) => {
                  const whatsappUrl = getProductEnquiryUrl(product.name);
                  return (
                    <div
                      key={product.id}
                      className="group bg-[#171719] hover:bg-[#1C1C20] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-4 sm:p-5 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm"
                    >
                      <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                        <Link
                          href={`/products/${product.slug}`}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center relative overflow-hidden"
                          aria-label={`View ${product.name} details`}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#F2D675] font-semibold block mb-1">
                            {product.category}
                          </span>
                          <Link href={`/products/${product.slug}`}>
                            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F2D675] transition-colors truncate">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-xs sm:text-sm text-[#C7C7C7] line-clamp-2 mt-1 max-w-2xl leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Pricing & Quick Actions */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10 shrink-0">
                        <div className="text-left sm:text-right">
                          <span className="text-xs sm:text-sm font-semibold text-[#D4AF37] block">
                            {product.priceLabel || "Price on Request"}
                          </span>
                          <span className="text-[10px] text-[#C7C7C7]/70 block">
                            Verified Bengaluru Stock
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/products/${product.slug}`}
                            className="bg-[#202025] hover:bg-white/15 text-white font-medium text-xs px-3.5 py-2 rounded-xl transition-all inline-flex items-center gap-1.5"
                          >
                            <span>Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#F2D675]" />
                          </Link>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-xs px-3.5 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Enquire</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            /* ZERO RESULTS STATE WITH RESET BUTTON */
            <div className="text-center py-20 bg-[#171719] rounded-3xl border border-white/10 px-4">
              <div className="w-16 h-16 bg-[#0B0B0D] border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No products found
              </h3>
              <p className="text-[#C7C7C7] text-sm max-w-md mx-auto mb-6">
                No electronics matched your current search and filter
                parameters. Try resetting filters to explore all available hardware.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B0B0D] pt-36 px-4 text-center text-[#C7C7C7]">
          Loading products catalogue...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
