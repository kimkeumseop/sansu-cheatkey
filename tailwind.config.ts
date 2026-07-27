import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // SHAPE_META(element.ts)가 산형별 그라디언트·틴트 클래스를 문자열로 들고 있다.
    // 이 경로가 빠지면 from-*/via-*/to-* 가 생성되지 않아 히어로가 흰 배경이 된다.
    "./src/lib/**/*.{js,ts,jsx,tsx}",
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
