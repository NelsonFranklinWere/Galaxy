"use client";

import * as ToggleGroup from "@radix-ui/react-toggle-group";
import type { Car } from "@common/types";
import { cn } from "@/lib/utils";

export type CarFilterId =
  | "suv"
  | "saloon"
  | "luxury"
  | "budget"
  | "seven-seater"
  | "self-drive"
  | "chauffeured";

export const carFilterConfig: Record<
  CarFilterId,
  { label: string; predicate: (car: Car) => boolean }
> = {
  suv: { label: "SUV", predicate: (car) => car.categories.includes("suv") },
  saloon: {
    label: "Saloon",
    predicate: (car) => car.categories.includes("saloon"),
  },
  luxury: {
    label: "Luxury",
    predicate: (car) => car.categories.includes("luxury"),
  },
  budget: {
    label: "Budget",
    predicate: (car) => car.categories.includes("budget"),
  },
  "seven-seater": {
    label: "7-seater",
    predicate: (car) => car.categories.includes("seven-seater"),
  },
  "self-drive": {
    label: "Self-drive only",
    predicate: (car) => car.options.selfDrive,
  },
  chauffeured: {
    label: "Chauffeured only",
    predicate: (car) => car.options.chauffeured,
  },
};

type CarFiltersProps = {
  value: CarFilterId[];
  onChange: (value: CarFilterId[]) => void;
};

export const CarFilters = ({ value, onChange }: CarFiltersProps) => (
  <ToggleGroup.Root
    type="multiple"
    value={value}
    onValueChange={(newValue) => {
      const next = newValue as CarFilterId[];

      if (next.length === 0) {
        onChange([]);
        return;
      }

      const added = next.find((item) => !value.includes(item));
      const selected = added ?? next[0];

      onChange([selected]);
    }}
    className="flex flex-wrap gap-3"
    aria-label="Filter fleet"
  >
    {Object.entries(carFilterConfig).map(([key, config]) => (
      <ToggleGroup.Item
        key={key}
        value={key}
        className={cn(
          "rounded-full border px-4 py-2 text-sm uppercase tracking-[0.2em] transition",
          value.includes(key as CarFilterId)
            ? "border-platinum bg-platinum text-night"
            : "border-white/20 bg-white/5 text-platinum/70",
        )}
      >
        {config.label}
      </ToggleGroup.Item>
    ))}
  </ToggleGroup.Root>
);

