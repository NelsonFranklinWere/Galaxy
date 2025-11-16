import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "glass-panel relative overflow-hidden border border-white/10",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

