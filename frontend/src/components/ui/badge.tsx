import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "success" | "warning";
};

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "bg-white/10 text-platinum border-white/20",
  success: "bg-emerald/20 text-emerald border-emerald/40",
  warning: "bg-amber/20 text-amber border-amber/40",
};

export const Badge = ({ tone = "default", className, ...props }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs uppercase tracking-wide",
      toneStyles[tone],
      className,
    )}
    {...props}
  />
);

