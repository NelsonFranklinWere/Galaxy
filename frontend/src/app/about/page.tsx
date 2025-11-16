import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContact } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Galaxy CarHire",
  description:
    "Discover the story, mission, and values powering Galaxy CarHire's premium Nairobi car rental experience.",
};

const values = [
  { title: "Reliability", copy: "Vehicles and chauffeurs that honour every call time and itinerary." },
  { title: "Safety", copy: "Well-serviced cars, comprehensive insurance, and vetted drivers." },
  { title: "Customer care", copy: "Human support on WhatsApp, phone, and email 24/7." },
  { title: "Professionalism", copy: "From dispatch to chauffeurs, we communicate with clarity and respect." },
  { title: "Quality service", copy: "Premium vehicles, clean interiors, and smooth booking experiences." },
];

const differentiators = [
  "Well-maintained vehicles only - we regularly service every car.",
  "Transparent pricing - no hidden costs.",
  "Fast booking - book in minutes via WhatsApp.",
  "Trusted by hundreds of clients - corporate, tourists, and city travelers.",
  "Professional team - from customer support to chauffeurs.",
];

const milestones = [
  "2015 - Started with two SUVs along Ngong Road.",
  "2019 - Added executive saloons and corporate leasing.",
  "2022 - Dedicated wedding/events fleet & styling.",
  "2024 - Expanded dispatch to cover Naivasha, Kisumu, and Coast.",
];

const AboutPage = () => (
  <div className="space-y-16 pb-24 pt-10">
    <section className="container space-y-6">
      <SectionHeading
        eyebrow="Who We Are"
        title="Galaxy CarHire moves Nairobi with confidence"
        description="We are a Nairobi-based premium car rental company providing reliable, safe, and comfortable vehicles for everyday travel, business, or luxury experiences."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-lg text-platinum/80">
          Located along Ngong Road, we serve clients across Nairobi with both
          self-drive and chauffeur-driven solutions. Whether you need a fuel-efficient
          saloon, an executive convoy, or a rugged SUV, our dispatch team keeps every
          car spotless, documented, and ready at short notice.
        </p>
        <div className="space-y-3 rounded-2xl border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
            Mission
          </p>
          <p className="text-2xl font-semibold">
            To make car hire in Kenya easy, flexible, and affordable - without
            compromising on quality or safety.
          </p>
          <p className="text-platinum/70">
            Every process, from inspection to chauffeur briefing, protects your
            safety while keeping luxury within reach.
          </p>
        </div>
      </div>
    </section>

    <section className="container grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
          What Makes Us Different
        </p>
        <ul className="list-disc space-y-3 pl-5 text-platinum/80">
          {differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="glass-panel space-y-3 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
          Trusted by Nairobi
        </p>
        <p className="text-sm text-platinum/80">
          From corporates and diplomats to filmmakers and leisure travelers,
          hundreds rely on Galaxy CarHire for spotless handovers and concierge-level communication.
        </p>
      </div>
    </section>

    <section className="container grid gap-8 md:grid-cols-3">
      {values.map((value) => (
        <div key={value.title} className="glass-panel space-y-3 p-6">
          <p className="text-xl font-semibold">{value.title}</p>
          <p className="text-sm text-platinum/70">{value.copy}</p>
        </div>
      ))}
    </section>

    <section className="container grid gap-6 md:grid-cols-2">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/assets/cars/MidSUV.png"
          alt="Galaxy CarHire showroom"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4 rounded-2xl border border-white/10 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
          Headquarters
        </p>
        <p className="text-2xl font-semibold">{siteContact.address}</p>
        <p className="text-sm text-platinum/70">{siteContact.businessHours}</p>
        <p className="text-sm text-platinum/70">
          Schedule a visit to preview the fleet, finalise contracts, or enjoy a
          coffee with our concierge.
        </p>
      </div>
      <div className="glass-panel space-y-3 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
          Milestones
        </p>
        <ul className="space-y-2 text-sm text-platinum/70">
          {milestones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default AboutPage;

