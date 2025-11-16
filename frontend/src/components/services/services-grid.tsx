import { services } from "@/data/services";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { Button } from "@/components/ui/button";

export const ServicesGrid = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {services.map((service) => (
      <div key={service.id} className="glass-panel space-y-4 p-6">
        <div className="flex items-center gap-4">
          <FeatureIcon icon={service.icon} className="h-8 w-8 text-platinum" />
          <div>
            <p className="text-xl font-semibold">{service.title}</p>
            <p className="text-sm text-platinum/70">{service.summary}</p>
          </div>
        </div>
        <p className="text-sm text-platinum/80">{service.description}</p>
        <div className="rounded-xl border border-white/15 p-4 text-sm text-platinum/80">
          <p className="text-xs uppercase tracking-[0.3em] text-platinum/60">
            Ideal for
          </p>
          <p>{service.idealFor}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-platinum/60">
              Includes
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-platinum/70">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-platinum/60">
              Benefits
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-platinum/70">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <Button variant="secondary">{service.cta}</Button>
      </div>
    ))}
  </div>
);

