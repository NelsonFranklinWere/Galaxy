"use client";

import { useMemo, useState } from "react";
import { CarCard } from "./car-card";
import { CarFilters, CarFilterId, carFilterConfig } from "./car-filters";
import { cars } from "@/data/cars";

export const FleetGrid = () => {
  const [filters, setFilters] = useState<CarFilterId[]>([]);

  const filtered = useMemo(() => {
    if (filters.length === 0) return cars;
    return cars.filter((car) =>
      filters.every((filter) => carFilterConfig[filter].predicate(car)),
    );
  }, [filters]);

  return (
    <section className="space-y-8">
      <CarFilters value={filters} onChange={setFilters} />
      <p className="text-sm text-platinum/70">
        Showing {filtered.length} vehicle{filtered.length === 1 ? "" : "s"}
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

