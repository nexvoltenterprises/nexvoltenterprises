import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-4 bg-[#171719]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 block">
            Product Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Explore Our Product Categories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C7C7C7]">
            Discover electronics and accessories designed for everyday connectivity and entertainment.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              slug={category.slug}
              description={category.description}
              image={category.image}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { CategoriesSection };
