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
          black: "#111111",
          dark: "#1a1a1a",
          anthracite: "#2d2d2d",
          gray: "#3a3a3a",
          mid: "#555555",
          light: "#888888",
          orange: "#f97316",
          "orange-dark": "#ea6c0a",
          "orange-light": "#fb923c",
          white: "#ffffff",
          "off-white": "#f5f5f5",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,8vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem,6vw,5rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.8rem,4vw,3rem)", { lineHeight: "1", letterSpacing: "0" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "counter": "counter 2s ease-out forwards",
        "pulse-orange": "pulseOrange 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseOrange: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(249,115,22,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(249,115,22,0)" },
        },
      },
      backgroundImage: {
        "diagonal-stripe": "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(249,115,22,0.05) 10px, rgba(249,115,22,0.05) 20px)",
        "hero-gradient": "linear-gradient(135deg, rgba(17,17,17,0.95) 0%, rgba(45,45,45,0.7) 50%, rgba(17,17,17,0.85) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
