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
      fontSize: {
        xs: ["0.8125rem", "1.15rem"],                       // 13px: captions, labels, eyebrows (was 11.5px and 12px)
        h2: ["clamp(1.9rem, 3.6vw, 2.9rem)", "1.08"],      // every section heading, stats, statement
        h1: ["clamp(2.25rem, 4.4vw, 3.5rem)", "1.05"],     // inner-page heroes
        display: ["clamp(2.5rem, 5.6vw, 4.6rem)", "1.02"], // home hero, marquee, rating
        mark: ["clamp(2.4rem, 9.2vw, 8.4rem)", "0.9"],     // decorative footer wordmark only
      },
      fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)"] },
      borderRadius: { DEFAULT: "var(--radius)", lg: "var(--radius-lg)" },
      boxShadow: { card: "var(--shadow)" },
      keyframes: { marquee: { to: { transform: "translateX(-100%)" } }, float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } } },
      animation: { marquee: "marquee 45s linear infinite", float: "float 6s ease-in-out infinite" },
    },
  },
  plugins: [],
} satisfies Config;
