import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8932C] font-semibold mb-2 block">
              Curated Electronics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171719] tracking-tight">
              Explore Our Product Collection
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl">
              Explore our selection of consumer electronics and everyday technology essentials.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#B8932C] hover:text-[#D4AF37] font-semibold text-sm group shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Link (Secondary Button: border with gold text) */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#D4AF37] text-[#171719] hover:bg-[#D4AF37] hover:text-[#0B0B0D] font-semibold px-6 py-3 rounded-xl transition-all w-full"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { FeaturedProducts };
