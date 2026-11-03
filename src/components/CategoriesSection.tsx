import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesSection() {
  // Highlight TWS Earbuds & Soundbars as flagship categories for varied layout proportions
  const featuredSlugs = ["tws-earbuds", "soundbars"];
  const featuredCategories = categories.filter((c) =>
    featuredSlugs.includes(c.slug)
  );
  const standardCategories = categories.filter(
    (c) => !featuredSlugs.includes(c.slug)
  );

  return (
    <section id="categories" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#171719] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading — Baseus Category Discovery Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2.5 block">
              Category Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Explore Our Product Categories
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#C7C7C7] leading-relaxed">
              Explore 8 dedicated electronics and accessory categories designed
              for personal audio, everyday power, and living space entertainment.
            </p>
          </div>
          <div className="text-xs text-[#C7C7C7]/60 font-mono shrink-0 px-3.5 py-1.5 rounded-full bg-[#0B0B0D] border border-white/10">
            8 SPECIALISED SEGMENTS
          </div>
        </div>

        {/* Varied Layout: 2 Featured Hero Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {featuredCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              slug={category.slug}
              description={category.description}
              image={category.image}
              icon={category.icon}
              featured={true}
            />
          ))}
        </div>

        {/* 6 Supporting Categories in Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              slug={category.slug}
              description={category.description}
              image={category.image}
              icon={category.icon}
              featured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { CategoriesSection };
