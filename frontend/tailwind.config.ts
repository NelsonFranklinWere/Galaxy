import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "../common/**/*.ts",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        night: "#000000",
        platinum: "#BFBFBF",
        obsidian: "#0b0b0b",
        graphite: "#1f1f1f",
        slate: "#2c2c2c",
        ivory: "#ffffff",
        emerald: "#2de1a4",
        amber: "#f6c343",
        danger: "#ff4d4f",
        brand: {
          DEFAULT: "#BFBFBF",
          soft: "#E0E0E0",
          deep: "#8C8C8C",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(35,35,35,0.85) 40%, rgba(0,0,0,0.75) 100%)",
        "card-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(191,191,191,0.25)",
        edge: "0 2px 8px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-primary)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;

