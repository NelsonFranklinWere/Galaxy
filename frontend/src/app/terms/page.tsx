import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Terms & Conditions | Galaxy CarHire",
  description:
    "Understand the key terms for hiring a vehicle with Galaxy CarHire in Nairobi.",
};

const terms = [
  "Provide a valid Kenyan ID or passport plus a driving licence held for at least two years.",
  "A refundable security deposit from KES 30,000 applies depending on vehicle category.",
  "Payments can be made via M-Pesa, bank transfer, or corporate LPO before vehicle release.",
  "Fuel is supplied full-to-full. Additional mileage or fuel shortages are charged at return.",
  "Comprehensive insurance is included; negligence or traffic offences remain the driver's responsibility.",
  "Vehicles may not leave Kenya without written permission from Galaxy CarHire.",
];

const TermsPage = () => (
  <div className="space-y-12 pb-24 pt-10">
    <section className="container space-y-6">
      <SectionHeading
        eyebrow="Terms & Conditions"
        title="Key information before you drive"
        description="These highlights summarise our standard hire agreement. A full contract is shared before every booking."
      />
      <ul className="list-disc space-y-3 pl-5 text-platinum/80">
        {terms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
    </section>
  </div>
);

export default TermsPage;

