import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#ECFDF5",
          100: "#D4F7E5",
          200: "#A9EDCD",
          300: "#7CE2B2",
          400: "#63DBA4",
          500: "#54D49A",
          600: "#2EA977",
          700: "#1F825A",
          800: "#176746",
          900: "#105237"
        },
        charcoal: "#1A1F1C",
        offwhite: "#FAFAF7"
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,20,0.04), 0 8px 24px rgba(16,24,20,0.06)",
        card: "0 1px 3px rgba(16,24,20,0.05), 0 12px 32px -8px rgba(16,24,20,0.08)"
      }
    }
  },
  plugins: []
};
export default config;
