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
          DEFAULT: "#7C3AED",
          deep: "#4C1D95",
          soft: "#F5F3FF",
        },
        accent: "#FCD34D",
        wood: "#22C55E",
        fire: "#EF4444",
        earth: "#F59E0B",
        metal: "#64748B",
        water: "#3B82F6",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
