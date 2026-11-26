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
        primary: {
          DEFAULT: "#5645d4",
          pressed: "#4534b3",
          deep: "#3a2a99",
        },
        brand: {
          navy: "#0a1530",
          "navy-deep": "#070f24",
          "navy-mid": "#1a2a52",
          orange: "#dd5b00",
          "orange-deep": "#793400",
          pink: "#ff64c8",
          purple: "#7b3ff2",
          "purple-800": "#391c57",
          teal: "#2a9d99",
          green: "#1aae39",
          yellow: "#f5d75e",
        },
        tint: {
          peach: "#ffe8d4",
          rose: "#fde0ec",
          mint: "#d9f3e1",
          lavender: "#e6e0f5",
          sky: "#dcecfa",
          yellow: "#fef7d6",
          "yellow-bold": "#f9e79f",
          cream: "#f8f5e8",
          gray: "#f0eeec",
        },
        hairline: {
          DEFAULT: "#e5e3df",
          soft: "#ede9e4",
          strong: "#c8c4be",
        },
        surface: {
          DEFAULT: "#f6f5f4",
          soft: "#fafaf9",
        },
        ink: {
          deep: "#000000",
          DEFAULT: "#1a1a1a",
        },
        charcoal: "#37352f",
        slate: "#5d5b54",
        steel: "#787671",
        stone: "#a4a097",
        muted: "#bbb8b1",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        xxl: "20px",
        xxxl: "24px",
      },
      boxShadow: {
        mockup: "rgba(15, 15, 15, 0.20) 0px 24px 48px -8px",
        card: "rgba(15, 15, 15, 0.08) 0px 4px 12px 0px",
        subtle: "rgba(15, 15, 15, 0.04) 0px 1px 2px 0px",
      },
      fontFamily: {
        sans: ["var(--font-notion)", "Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
