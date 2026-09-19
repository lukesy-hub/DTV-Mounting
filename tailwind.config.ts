import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        black: "var(--color-black)",
        blue: {
          DEFAULT: "var(--color-brand-blue)",
          deep: "var(--color-brand-blue-deep)",
          light: "var(--color-brand-blue-light)",
        },
        silver: "var(--color-silver)",
        paper: "var(--color-paper)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        surface: "var(--color-surface)",
        surface2: "var(--color-surface-2)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      maxWidth: {
        content: "1440px",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
} satisfies Config;
