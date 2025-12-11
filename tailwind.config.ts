import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-beige": "#f8f5eeff",
        ink: "#111827",
        "ink-soft": "#4b5563",
        accent: "#f97316",
        "accent-dark": "#c0560d",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
