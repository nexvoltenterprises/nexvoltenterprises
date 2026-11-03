import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";
import {
  products,
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";
import { getProductEnquiryUrl } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";
import ProductDetailImage from "@/components/ProductDetailImage";
import ProductTabs from "@/components/ProductTabs";
import StickyMobileBar from "@/components/StickyMobileBar";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
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
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
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

  // JSON-LD Structured Data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.nexvoltenterprises.com${product.image}`,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Nexvolt Enterprises",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Nexvolt Enterprises",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nexvoltenterprises.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.nexvoltenterprises.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `https://www.nexvoltenterprises.com/products?category=${product.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `https://www.nexvoltenterprises.com/products/${product.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Trail */}
      <section className="bg-[#171719] border-b border-white/10 pt-28 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#C7C7C7]">
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

      {/* Product Detail Stage */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Image with Click-to-Zoom Lightbox */}
            <div className="lg:col-span-6">
              <ProductDetailImage
                src={product.image}
                alt={product.name}
                category={product.category}
              />
            </div>

            {/* Right: Product Details & Commercial Action */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  {product.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-green-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Stock
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#C7C7C7] leading-relaxed">
                {product.description}
              </p>

              {/* Pricing Box */}
              <div className="mt-6 bg-[#171719] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                      Commercial Pricing
                    </p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
                      {product.priceLabel || "Price on Request"}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 bg-[#0B0B0D] px-3 py-1.5 rounded-lg border border-white/10">
                    B2B & Retail
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#C7C7C7] mt-3 pt-3 border-t border-white/10">
                  Connect directly with our Bengaluru sales office via WhatsApp
                  or phone for current batch availability and wholesale pricing.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F2D675] text-[#0B0B0D] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-[#0B0B0D]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="tel:+919180595957"
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#F2D675] hover:bg-[#171719] font-semibold px-6 py-4 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call +91 91805 95957</span>
                </a>
              </div>

              {/* Trust Pillars */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C7C7C7]">
                  <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Bengaluru Local Dispatch</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C7C7C7]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Authentic Tested Quality</span>
                </div>
              </div>

              {/* Back to Catalogue */}
              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm text-[#C7C7C7] hover:text-[#F2D675] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all products</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Specification & B2B Tabs */}
          <ProductTabs product={product} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#171719] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1 block">
                  Category Lineup
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Related in {product.category}
                </h2>
              </div>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-[#F2D675] transition-colors"
              >
                <span>View All</span>
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

      {/* Sticky Mobile Quote Bar */}
      <StickyMobileBar
        productName={product.name}
        priceLabel={product.priceLabel}
      />
    </div>
  );
}
