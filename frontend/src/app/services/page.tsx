import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesGrid } from "@/components/services/services-grid";
import { CTAStrip } from "@/components/sections/home/cta-strip";

export const metadata: Metadata = {
  title: "Services | Galaxy CarHire",
  description:
    "Self-drive rentals, chauffeured rides, airport transfers, and long-term corporate hire in Nairobi.",
};

const ServicesPage = () => (
  <div className="space-y-16 pb-24 pt-10">
    <section className="container space-y-8">
      <SectionHeading
        eyebrow="Services"
        title="Our services are built for every Nairobi journey"
        description="Self-drive car rentals, chauffeured rides, airport transfers, and long-term corporate hire - all managed by a support team that responds instantly."
      />
      <ServicesGrid />
    </section>
    <section className="container space-y-6">
      <SectionHeading
        eyebrow="Booking Process"
        title="Simple & fast"
        description="Send us your documents and reserve in minutes."
      />
      <ol className="space-y-4 text-platinum/80">
        <li>1️⃣ Choose your car.</li>
        <li>2️⃣ Send your ID + driving licence.</li>
        <li>3️⃣ Make reservation payment.</li>
        <li>4️⃣ Pick up or get the car delivered.</li>
      </ol>
    </section>
    <CTAStrip />
  </div>
);

export default ServicesPage;

