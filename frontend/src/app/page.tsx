import { BookingSection } from "@/components/sections/home/booking";
import { CTAStrip } from "@/components/sections/home/cta-strip";
import { FeaturedCars } from "@/components/sections/home/featured-cars";
import { HeroSection } from "@/components/sections/home/hero";
import { LocationSection } from "@/components/sections/home/location";
import { ServiceCategories } from "@/components/sections/home/service-categories";
import { TestimonialsSection } from "@/components/sections/home/testimonials";
import { TrustSection } from "@/components/sections/home/trust";

export default function Home() {
  return (
    <div className="space-y-24 pb-24 pt-10">
      <HeroSection />
      <TrustSection />
      <FeaturedCars />
      <ServiceCategories />
      <TestimonialsSection />
      <LocationSection />
      <BookingSection />
      <CTAStrip />
    </div>
  );
}
