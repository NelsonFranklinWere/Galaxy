import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "space-y-4",
      align === "center" && "text-center",
      className,
    )}
  >
    {eyebrow && (
      <p className="chip inline-flex items-center justify-center">
        {eyebrow}
      </p>
    )}
    <h2 className="section-title">{title}</h2>
    {description && (
      <p className="section-subtitle mx-auto">{description}</p>
    )}
  </div>
);

