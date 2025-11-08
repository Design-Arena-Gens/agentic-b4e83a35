import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f3f7ff",
          100: "#e2edff",
          200: "#c3d9ff",
          300: "#9ebeff",
          400: "#6f98ff",
          500: "#416df7",
          600: "#2f50db",
          700: "#253bbb",
          800: "#202f96",
          900: "#1f2b77",
          950: "#111943"
        },
        accent: "#31d5a1",
        dark: "#0b1426"
      },
      backgroundImage: {
        "grid-light": "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 20px 45px -10px rgba(49, 213, 161, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
