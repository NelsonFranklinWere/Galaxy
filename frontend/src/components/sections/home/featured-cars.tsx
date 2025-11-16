import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cars, featuredCarSlugs } from "@/data/cars";
import { buildWhatsappLink, formatCurrency } from "@/lib/utils";
import { siteContact } from "@/lib/constants";

const featuredCars = cars.filter((car) =>
  featuredCarSlugs.includes(car.slug),
);

export const FeaturedCars = () => (
  <section className="container space-y-10">
    <SectionHeading
      eyebrow="Featured Cars"
      title="Available now - luxury SUVs & executive saloons"
      description="Use real fleet shots to showcase the rides Nairobi loves most."
      align="center"
    />
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
      {featuredCars.map((car) => (
        <article key={car.id} className="glass-panel flex flex-col overflow-hidden">
          <div className="relative h-56 w-full">
            <Image
              src={car.heroImage}
              alt={car.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-platinum/70">
                {car.categories.join(" / ")}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-ivory">
                {car.name}
              </h3>
            </div>
            <div className="mt-auto flex gap-2">
              <Button
                variant="secondary"
                asChild
                className="flex-1 min-w-0 py-2 text-xs uppercase tracking-[0.2em]"
              >
                <Link
                  href={buildWhatsappLink(
                    siteContact.whatsappNumbers[0],
                    car.whatsappMessage,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="flex-1 min-w-0 py-2 text-xs uppercase tracking-[0.2em]"
              >
                <Link href={`/fleet/${car.slug}`}>
                  Details <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

