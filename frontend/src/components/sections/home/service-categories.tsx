import { SectionHeading } from "@/components/ui/section-heading";

const categories = [
  {
    title: "Self-Drive",
    copy: "Move at your pace. Flexible, convenient, and private.",
  },
  {
    title: "Chauffeured Rides",
    copy: "Professional drivers for events, business, and luxury travel.",
  },
  {
    title: "Airport Transfers",
    copy: "Timely pickups and drop-offs for JKIA and Wilson.",
  },
  {
    title: "Long-term Corporate Hire",
    copy: "Monthly packages crafted for executives, teams, and NGOs.",
  },
];

export const ServiceCategories = () => (
  <section className="container space-y-10">
    <SectionHeading
      eyebrow="Service Categories"
      title="Every journey covered"
      description="From self-drive errands to executive convoys, Galaxy CarHire keeps Nairobi moving with ease."
      align="center"
    />
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {categories.map((category) => (
        <div key={category.title} className="glass-panel space-y-3 p-5">
          <p className="text-lg font-semibold">{category.title}</p>
          <p className="text-sm text-platinum/80">{category.copy}</p>
        </div>
      ))}
    </div>
  </section>
);

