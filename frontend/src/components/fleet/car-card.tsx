import type { Car } from "@common/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink, formatCurrency } from "@/lib/utils";
import { siteContact } from "@/lib/constants";

type CarCardProps = {
  car: Car;
};

export const CarCard = ({ car }: CarCardProps) => (
  <article className="glass-panel flex flex-col overflow-hidden">
    <div className="relative h-60 w-full">
      <Image src={car.heroImage} alt={car.name} fill className="object-cover" />
      <Badge className="absolute left-4 top-4">{car.categories[0]}</Badge>
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-platinum/70">
          {car.tags.join(" / ")}
        </p>
        <h3 className="mt-2 text-2xl font-semibold">{car.name}</h3>
        <p className="text-sm text-platinum/70">{car.description}</p>
        <p className="text-sm text-platinum/70">
          <span className="text-platinum/50">Type:</span>{" "}
          {car.categories[0].toUpperCase()}
        </p>
        <p className="text-sm text-platinum/70">
          <span className="text-platinum/50">Best for:</span>{" "}
          {car.heroTagline}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-platinum/80">
        <p>
          <span className="text-platinum/50">Daily:</span>{" "}
          {formatCurrency(car.priceDaily)}
        </p>
        <p>
          <span className="text-platinum/50">Weekly:</span>{" "}
          {formatCurrency(car.priceWeekly)}
        </p>
        <p>{car.seats} seats</p>
        <p>{car.luggage}</p>
        <p>{car.options.selfDrive ? "Self-drive" : "Chauffeured"}</p>
        <p>{car.transmission}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-platinum/60">
        {car.includes.map((include) => (
          <span key={include} className="chip">
            {include}
          </span>
        ))}
      </div>
      <div className="mt-auto grid gap-3">
        <Button asChild>
          <Link href={`/fleet/${car.slug}`}>View details</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link
            href={buildWhatsappLink(
              siteContact.whatsappNumbers[0],
              car.whatsappMessage,
            )}
            target="_blank"
            rel="noreferrer"
          >
            Book This Car
          </Link>
        </Button>
      </div>
    </div>
  </article>
);

