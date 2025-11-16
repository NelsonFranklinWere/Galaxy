import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/lib/constants";
import { buildWhatsappLink } from "@/lib/utils";

export const CTAStrip = () => (
  <section className="container">
    <div className="glass-panel flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-platinum/70">
          Need a ride today?
        </p>
        <h3 className="text-3xl font-semibold">
          Reliable cars. Affordable prices. Fast booking.
        </h3>
        <p className="text-sm text-platinum/80">
          WhatsApp available 24/7.
        </p>
        <div className="space-y-1 text-lg font-semibold text-platinum">
          {siteContact.phones.map((phone) => (
            <Link key={phone} href={`tel:${phone}`} className="block">
              {phone}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" asChild>
          <Link href="/contact">Call the Team</Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link
            href={buildWhatsappLink(
              siteContact.whatsappNumbers[0],
              "Hi Galaxy CarHire, I need a car today.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Booking
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

