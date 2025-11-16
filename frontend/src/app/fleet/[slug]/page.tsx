import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import { featureDictionary } from "@/data/features";
import { CarGallery } from "@/components/fleet/car-gallery";
import { CarTerms } from "@/components/fleet/car-terms";
import { BookingForm } from "@/components/forms/booking-form";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { formatCurrency } from "@/lib/utils";
import { siteContact } from "@/lib/constants";

type CarDetailPageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export const generateMetadata = ({ params }: CarDetailPageProps): Metadata => {
  const car = cars.find((item) => item.slug === params.slug);
  if (!car) return {};
  return {
    title: `${car.name} | Galaxy CarHire`,
    description: car.description,
    openGraph: {
      images: car.heroImage
        ? [{ url: car.heroImage, width: 1200, height: 630, alt: car.name }]
        : undefined,
    },
  };
};

const terms = [
  {
    title: "Deposit & ID",
    content:
      "Refundable security deposit from KES 30,000 plus Kenyan ID/Passport and driver's licence (2+ years experience).",
  },
  {
    title: "Payment",
    content:
      "50% to reserve, balance on pickup via M-Pesa, bank transfer, or card. Corporate LPOs accepted.",
  },
  {
    title: "Fuel & Mileage",
    content:
      "Fuel is supplied full-to-full. Unlimited mileage within Nairobi; request for upcountry packages.",
  },
  {
    title: "Coverage",
    content:
      "Comprehensive insurance with 24/7 roadside assistance and replacement vehicle guarantee.",
  },
];

const CarDetailPage = ({ params }: CarDetailPageProps) => {
  const car = cars.find((item) => item.slug === params.slug);

  if (!car) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.name,
    description: car.description,
    image: car.gallery.map((img) => `https://galaxycarhire.com${img}`),
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: car.priceDaily,
      availability: "https://schema.org/InStock",
    },
    brand: {
      "@type": "Brand",
      name: "Galaxy CarHire",
    },
  };

  return (
    <div className="space-y-16 pb-24 pt-10">
      <section className="container grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="chip">{car.categories.join(" / ")}</span>
            <h1 className="hero-text text-4xl">{car.name}</h1>
            <p className="text-lg text-platinum/80">{car.description}</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-platinum/70">
            <p>Daily {formatCurrency(car.priceDaily)}</p>
            <p>Weekly {formatCurrency(car.priceWeekly)}</p>
            <p>{car.seats} seats</p>
            <p>{car.luggage}</p>
            <p>{car.transmission}</p>
          </div>
          <CarGallery images={car.gallery} name={car.name} />
          <div className="grid gap-4 md:grid-cols-2">
            {car.includes.map((feature) => (
              <div key={feature} className="glass-panel flex items-center gap-4 p-4">
                <FeatureIcon icon={feature} className="h-8 w-8 text-platinum" />
                <div>
                  <p className="font-medium">
                    {featureDictionary[feature]?.label ?? feature}
                  </p>
                  <p className="text-sm text-platinum/70">
                    {featureDictionary[feature]?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 p-6">
            <h3 className="text-2xl font-semibold">Why choose this car</h3>
            <ul className="list-disc space-y-2 pl-6 text-platinum/80">
              <li>Reliability on both urban tarmac and Kenyan adventure trails.</li>
              <li>Comfort-first interiors with clean detailing every handover.</li>
              <li>Professional chauffeurs on standby plus self-drive freedom.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="glass-panel space-y-4 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-platinum/60">
              Book this vehicle
            </p>
            <BookingForm vehicleName={car.name} />
          </div>
          <CarTerms terms={terms} />
          <div className="glass-panel space-y-2 p-6 text-sm text-platinum/80">
            <p className="font-semibold uppercase tracking-[0.2em]">
              Dispatch hotline
            </p>
            {siteContact.phones.map((phone) => (
              <p key={phone}>{phone}</p>
            ))}
          </div>
        </div>
      </section>
      <Script
        id={`car-schema-${car.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default CarDetailPage;

