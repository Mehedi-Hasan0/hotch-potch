import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#12141D",
          foreground: "#000000",
        },
        seondary: {
          DEFAULT: "#FAFAFA",
          foreground: "#B7B8BB",
        },
        accent: {
          DEFAULT: "#0EA5E9",
        },
        gradient: {
          DEFAULT: "#2B59FF",
          foreground: "#BB2BFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
