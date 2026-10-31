import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { getProductEnquiryUrl } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";
import ProductDetailImage from "@/components/ProductDetailImage";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} — ${product.category}`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Nexvolt Enterprises`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const whatsappUrl = getProductEnquiryUrl(product.name);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* Breadcrumb */}
      <section className="bg-[#171719] border-b border-white/10 pt-28 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#C7C7C7]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="hover:text-white transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37] font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 px-4 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <ProductDetailImage
              src={product.image}
              alt={product.name}
              category={product.category}
            />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-[#C7C7C7] text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="bg-[#171719] border border-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#C7C7C7] mb-1">Pricing</p>
                    <p className="text-2xl font-bold text-[#D4AF37]">
                      {product.priceLabel}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#C7C7C7] mt-2">
                  Contact us via WhatsApp for current pricing and availability.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire About This Product
                </a>
                <a
                  href="tel:+919180595957"
                  className="flex items-center justify-center gap-2 border-2 border-[#D4AF37] hover:border-[#F2D675] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold px-8 py-4 rounded-xl transition-all"
                >
                  Call +91 91805 95957
                </a>
              </div>

              {/* Back link */}
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#C7C7C7] hover:text-[#F2D675] mt-8 text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 bg-[#171719] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Related Products
                </h2>
                <p className="text-[#C7C7C7] mt-1">
                  More products in {product.category}
                </p>
              </div>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="hidden md:flex items-center gap-2 text-[#D4AF37] hover:text-[#F2D675] font-medium transition-colors"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
