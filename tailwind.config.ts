import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        exo2: ["var(--font-exo2)", "sans-serif"],
      },
      colors: {
        cyan:   "#00e5ff",
        purple: "#8c33ff",
        green:  "#1aff99",
        yellow: "#ffd91a",
        red:    "#ff4066",
        orange: "#ff8c1a",
        bg:     "#0a0b14",
        surface:"#111224",
        card:   "#161827",
        border: "#2e3359",
      },
      animation: {
        "fade-in-up":      "fadeInUp 0.6s ease-out forwards",
        "fade-in":         "fadeIn 0.5s ease-out forwards",
        "slide-in-right":  "slideInRight 0.7s ease-out forwards",
        "pulse-glow":      "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(32px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%":       { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
