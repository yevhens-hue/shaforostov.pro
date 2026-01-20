import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#475569",
        accent: "#4f46e5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space)", "var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 16px 40px rgba(15, 23, 42, 0.08)",
        cardHover: "0 20px 48px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
