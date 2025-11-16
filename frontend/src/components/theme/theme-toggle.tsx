"use client";

import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Moon, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useThemeMode } from "./theme-provider";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeMode();

  return (
    <ToggleGroup.Root
      type="single"
      value={theme}
      onValueChange={(value) => {
        if (value === "light" || value === "dark") {
          setTheme(value);
        }
      }}
      className="glass-panel relative flex items-center gap-1 rounded-full px-2 py-1"
      aria-label="Switch theme"
    >
      <ThemeToggleButton
        value="light"
        isActive={theme === "light"}
        icon={<SunMedium className="h-4 w-4" />}
        label="Light"
      />
      <ThemeToggleButton
        value="dark"
        isActive={theme === "dark"}
        icon={<Moon className="h-4 w-4" />}
        label="Dark"
      />
    </ToggleGroup.Root>
  );
};

type ThemeToggleButtonProps = {
  value: "light" | "dark";
  isActive: boolean;
  icon: ReactNode;
  label: string;
};

const ThemeToggleButton = ({
  value,
  isActive,
  icon,
  label,
}: ThemeToggleButtonProps) => (
  <ToggleGroup.Item
    value={value}
    aria-label={`Use ${label} theme`}
    className={cn(
      "relative flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition",
      isActive ? "text-night" : "text-platinum/70",
    )}
  >
    {isActive && (
      <motion.span
        layoutId="theme-pill"
        className="absolute inset-0 rounded-full bg-platinum"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    )}
    <span className="relative z-10 flex items-center gap-1">
      {icon}
      <span>{label}</span>
    </span>
  </ToggleGroup.Item>
);

