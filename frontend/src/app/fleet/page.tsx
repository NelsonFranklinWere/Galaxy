import type { Metadata } from "next";
import { FleetGrid } from "@/components/fleet/fleet-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { seoKeywords } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fleet | Galaxy CarHire",
  description:
    "Browse luxury SUVs, saloons, and executive vans ready for self-drive and chauffeured experiences across Nairobi.",
  keywords: ["fleet", "SUV rental", "saloon hire", ...seoKeywords],
};

const FleetPage = () => (
  <div className="space-y-16 pb-24 pt-10">
    <section className="container">
      <SectionHeading
        eyebrow="Available Cars for Hire"
        title="Browse SUVs, executive sedans, and budget-friendly options"
        description="Each card highlights who the car suits best plus daily and weekly packages. Filter to find your match, then book instantly."
      />
    </section>
    <div className="container">
      <FleetGrid />
    </div>
  </div>
);

export default FleetPage;

