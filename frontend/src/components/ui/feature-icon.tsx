import type { FeatureIcon as FeatureIconName } from "@common/types";
import type { ComponentType } from "react";
import {
  ShieldCheck,
  Sparkles,
  Clock3,
  LifeBuoy,
  Car,
  Navigation2,
  Wifi,
  Users,
  Camera,
  ThermometerSun,
  Briefcase,
  Fuel,
} from "lucide-react";

const iconMap: Partial<Record<FeatureIconName, ComponentType<{ className?: string }>>> =
  {
    shield: ShieldCheck,
    sparkle: Sparkles,
    clock: Clock3,
    support: LifeBuoy,
    steering: Car,
    gps: Navigation2,
    wifi: Wifi,
    seat: Users,
    camera: Camera,
    ac: ThermometerSun,
    luggage: Briefcase,
    fuel: Fuel,
  };

type FeatureIconProps = {
  icon: FeatureIconName;
  className?: string;
};

export const FeatureIcon = ({ icon, className }: FeatureIconProps) => {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return <Icon className={className} />;
};

