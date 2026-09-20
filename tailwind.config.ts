import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", surface: "var(--surface)", surface2: "var(--surface-2)", fg: "var(--fg)", muted: "var(--muted)",
        line: "var(--line)", "line-strong": "var(--line-strong)",
        brand: { DEFAULT: "var(--brand)", deep: "var(--brand-deep)", soft: "var(--brand-soft)", btn: "var(--brand-btn)" },
        navy: "var(--navy)", "on-navy": "var(--on-navy)", "on-navy-muted": "var(--on-navy-muted)",
      },
      fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)"] },
      borderRadius: { DEFAULT: "var(--radius)", lg: "var(--radius-lg)" },
      boxShadow: { card: "var(--shadow)" },
    },
  },
  plugins: [],
} satisfies Config;
