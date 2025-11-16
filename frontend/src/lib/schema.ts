import { siteContact } from "./constants";
import { cars } from "@/data/cars";

export const carRentalSchema = {
  "@context": "https://schema.org",
  "@type": "CarRental",
  name: "Galaxy CarHire",
  image: "https://galaxycarhire.com/assets/cars/LUXURIOSPRADOSUV.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ngong Road",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  telephone: siteContact.phones[0],
  openingHours: siteContact.businessHours,
  areaServed: ["Nairobi", "Mombasa", "Kisumu", "Naivasha", "Kenya"],
  makesOffer: cars.map((car) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Car",
      name: car.name,
      image: `https://galaxycarhire.com${car.heroImage}`,
      description: car.description,
      seatingCapacity: car.seats,
      fuelType: car.fuel,
    },
    priceCurrency: "KES",
    price: car.priceDaily,
    availability: "https://schema.org/InStock",
  })),
};

