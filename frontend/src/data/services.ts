import type { Service } from "@common/types";

export const services: Service[] = [
  {
    id: "self-drive",
    title: "Self-Drive Car Rentals",
    summary: "Move at your pace. Flexible, convenient, and private.",
    idealFor: "Errands, business travel, road trips, short stays, and daily use.",
    description:
      "Pick a compact saloon or a premium SUV, send us your ID and driving licence, and collect or receive delivery anywhere in Nairobi.",
    icon: "steering",
    cta: "Book Self-Drive",
    benefits: ["Door-to-door delivery", "GPS assistance", "Rapid approvals"],
    includes: [
      "Full tank option",
      "Free basic insurance",
      "Flexible mileage packages",
    ],
  },
  {
    id: "chauffeured",
    title: "Chauffeured Car Hire",
    summary: "Professional drivers for events, business, and luxury travel.",
    idealFor: "Corporate runs, weddings, VIP transfers, and hosted guests.",
    description:
      "Uniformed chauffeurs arrive early, assist with luggage, and deliver first-class etiquette across Nairobi and all major towns.",
    icon: "sparkle",
    cta: "Reserve Chauffeur",
    benefits: ["Discreet communication", "Real-time updates", "Complimentary water"],
    includes: [
      "Professional driver",
      "On-time pickups",
      "Clean, comfortable, and safe rides",
    ],
  },
  {
    id: "airport",
    title: "Airport Transfers",
    summary: "Reliable pickup and drop-off with luggage assistance.",
    idealFor: "JKIA & Wilson arrivals, hotel shuttles, and group delegations.",
    description:
      "We monitor flights, hold branded signage, and coordinate WhatsApp updates so every guest feels expected.",
    icon: "clock",
    cta: "Schedule Transfer",
    benefits: ["24/7 dispatch", "Meet-and-greet crew", "Coordinated convoys"],
    includes: [
      "JKIA & Wilson coverage",
      "Luggage assistance",
      "Live flight tracking",
    ],
  },
  {
    id: "corporate",
    title: "Long-Term & Corporate Hire",
    summary: "Discounted monthly rates for companies and executives.",
    idealFor: "Executive teams, NGOs, production crews, and diplomats.",
    description:
      "Secure a dedicated fleet with maintenance included, priority replacements, and consolidated invoicing.",
    icon: "shield",
    cta: "Start Corporate Hire",
    benefits: ["Dedicated account manager", "Vehicle branding ready", "Usage analytics"],
    includes: [
      "Discounted monthly rates",
      "Dedicated support team",
      "Vehicle replacement guarantee",
    ],
  },
];

