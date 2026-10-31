import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AudioShowcase from "@/components/AudioShowcase";
import ChargingShowcase from "@/components/ChargingShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import BusinessEnquiry from "@/components/BusinessEnquiry";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <AudioShowcase />
      <ChargingShowcase />
      <WhyChooseUs />
      <BusinessEnquiry />
      <ContactSection />
    </>
  );
}
