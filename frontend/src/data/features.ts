import type { FeatureIcon } from "@common/types";

export const featureDictionary: Record<
  FeatureIcon,
  { label: string; description: string }
> = {
  shield: { label: "Insurance & Safety", description: "Comprehensive insurance & security." },
  sparkle: { label: "Premium Finish", description: "Showroom detail & styling." },
  clock: { label: "24/7 Support", description: "Round-the-clock dispatch help." },
  support: { label: "Concierge Team", description: "Dedicated WhatsApp line." },
  steering: { label: "Self-drive Ready", description: "Smooth automatic drive." },
  gps: { label: "GPS & Tracking", description: "Live tracking & navigation." },
  wifi: { label: "Connectivity", description: "Onboard WiFi & entertainment." },
  seat: { label: "Seating Comfort", description: "Captain seats & recline." },
  camera: { label: "Safety Tech", description: "Reverse camera & sensors." },
  ac: { label: "Climate Control", description: "Dual-zone AC & vents." },
  luggage: { label: "Cargo Space", description: "Generous boot & rails." },
  fuel: { label: "Fuel Efficient", description: "Economical consumption." },
};

