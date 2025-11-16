import { SectionHeading } from "@/components/ui/section-heading";
import { siteContact } from "@/lib/constants";

export const LocationSection = () => (
  <section className="container space-y-10">
    <SectionHeading
      eyebrow="Location"
      title="Located along Ngong Road - Serving Nairobi and all major towns"
      description="Pop in for vehicle inspections, viewings, and concierge support. We dispatch to JKIA, Wilson, Kilimani, Westlands, Karen, Kiambu, Naivasha, Mombasa, and beyond."
    />
    <div className="grid gap-8 md:grid-cols-2">
      <div className="glass-panel space-y-4 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-platinum/70">
          Address
        </p>
        <p className="text-xl font-semibold">{siteContact.address}</p>
        <p className="text-sm text-platinum/70">{siteContact.businessHours}</p>
        <p className="text-sm text-platinum/70">
          Serving Nairobi CBD, Westlands, Kilimani, Karen, JKIA, Kisumu, Mombasa,
          Naivasha, Nanyuki, and more.
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 shadow-glow">
        <iframe
          title="Galaxy CarHire on Ngong Road"
          src={siteContact.googleMapEmbed}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

