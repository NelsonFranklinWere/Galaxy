export type CarCategory =
  | "suv"
  | "saloon"
  | "luxury"
  | "budget"
  | "seven-seater"
  | "self-drive"
  | "chauffeured";

export type FeatureIcon =
  | "shield"
  | "sparkle"
  | "clock"
  | "support"
  | "steering"
  | "gps"
  | "wifi"
  | "seat"
  | "camera"
  | "ac"
  | "luggage"
  | "fuel";

export interface CarSpec {
  key: string;
  value: string;
}

export interface Car {
  id: string;
  slug: string;
  name: string;
  description: string;
  heroTagline: string;
  categories: CarCategory[];
  tags: string[];
  seats: number;
  luggage: string;
  transmission: "automatic" | "manual";
  fuel: "petrol" | "diesel" | "hybrid";
  priceDaily: number;
  priceWeekly: number;
  includes: FeatureIcon[];
  options: {
    selfDrive: boolean;
    chauffeured: boolean;
  };
  heroImage: string;
  gallery: string[];
  specs: CarSpec[];
  badges: string[];
  whatsappMessage: string;
  spotlights?: string[];
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  idealFor: string;
  description: string;
  icon: FeatureIcon;
  cta: string;
  benefits: string[];
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContact {
  phones: string[];
  whatsappNumbers: string[];
  email: string;
  address: string;
  googleMapEmbed: string;
  businessHours: string;
}

