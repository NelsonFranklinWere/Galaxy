import {
  ShieldCheck,
  Sparkles,
  MapPin,
  Headphones,
  CalendarClock,
  UserRound,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const trustPoints = [
  {
    title: "Reliable. Flexible. Affordable.",
    icon: ShieldCheck,
    copy: "Transparent Nairobi pricing with packages for every journey.",
  },
  {
    title: "Immaculate Vehicles",
    icon: Sparkles,
    copy: "Premium fleet from SUVs to luxury sedans, always clean and serviced.",
  },
  {
    title: "Flexible Pickup & Drop-off",
    icon: MapPin,
    copy: "Airport, hotel, or door-to-door delivery anywhere around Nairobi.",
  },
  {
    title: "24/7 Customer Support",
    icon: Headphones,
    copy: "WhatsApp, phone, and dispatch support that never sleeps.",
  },
  {
    title: "Daily, Weekly & Monthly Packages",
    icon: CalendarClock,
    copy: "Pay only for what you need with short or long-term bundles.",
  },
  {
    title: "Professional Chauffeurs",
    icon: UserRound,
    copy: "Trained, polite, and experienced drivers for every occasion.",
  },
];

export const TrustSection = () => (
  <section className="container space-y-10">
    <SectionHeading
      eyebrow="Why Choose Us"
      title="Reliable. Flexible. Affordable."
      description="Galaxy CarHire delivers premium fleet quality, punctual logistics, and concierge support for every Nairobi itinerary."
      align="center"
    />
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
      {trustPoints.map((point) => (
        <div
          key={point.title}
          className="glass-panel space-y-3 p-6 text-center hover:-translate-y-1 hover:shadow-glow"
        >
          <point.icon className="mx-auto h-8 w-8 text-platinum" />
          <p className="font-semibold">{point.title}</p>
          <p className="text-sm text-platinum/80">{point.copy}</p>
        </div>
      ))}
    </div>
  </section>
);

