import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#172554",
          950: "#0b132b",
        },
        navy: {
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        slate: {
          850: "#152238",
        },
        emerald: {
          450: "#10b981",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        '2xs': "0 1px 2px 0 rgba(15, 23, 42, 0.03)",
        xs: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.03)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)",
        hover: "0 6px 18px -2px rgba(15, 23, 42, 0.06), 0 2px 5px -1px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 8px 22px -3px rgba(15, 23, 42, 0.06), 0 3px 7px -2px rgba(15, 23, 42, 0.02)",
        dropdown: "0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)",
        feature: "0 16px 36px -6px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
