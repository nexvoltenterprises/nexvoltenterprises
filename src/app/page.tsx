import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import AudioShowcase from "@/components/AudioShowcase";
import ChargingShowcase from "@/components/ChargingShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandIntro from "@/components/BrandIntro";
import BusinessEnquiry from "@/components/BusinessEnquiry";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO */}
      <HeroSection />

      {/* SECTION 2 — PRODUCT CATEGORY DISCOVERY */}
      <CategoriesSection />

      {/* SECTION 3 — AUDIO COLLECTION */}
      <AudioShowcase />

      {/* SECTION 4 — CHARGING COLLECTION */}
      <ChargingShowcase />

      {/* SECTION 5 — NEXVOLT ESSENTIALS */}
      <FeaturedProducts />

      {/* SECTION 6 — ABOUT NEXVOLT */}
      <BrandIntro />

      {/* SECTION 7 — BUSINESS PARTNERSHIPS */}
      <BusinessEnquiry />
    </>
  );
}
