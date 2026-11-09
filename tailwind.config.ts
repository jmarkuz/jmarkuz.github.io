import type { Config } from "tailwindcss";

// Design tokens. Text colours pass WCAG AA (4.5:1) in both palettes. See globals.css for the values.
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Two palettes share these names: the light page and the `.dark-zone` (hero, footer, header over them).
        // Values live in globals.css as RGB channels so `bg-ink/10` style opacity still works.
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        sunk: "rgb(var(--c-sunk) / <alpha-value>)",
        ink: { DEFAULT: "rgb(var(--c-ink) / <alpha-value>)", 2: "rgb(var(--c-ink-2) / <alpha-value>)" },
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        faint: "rgb(var(--c-faint) / <alpha-value>)",
        line: { DEFAULT: "rgb(var(--c-line) / <alpha-value>)", 2: "rgb(var(--c-line-2) / <alpha-value>)" },
        // One colour per domain, used only for that domain.
        bank: { DEFAULT: "rgb(var(--c-bank) / <alpha-value>)", tint: "rgb(var(--c-bank-tint) / <alpha-value>)", ink: "rgb(var(--c-bank-ink) / <alpha-value>)" },
        tel: { DEFAULT: "rgb(var(--c-tel) / <alpha-value>)", tint: "rgb(var(--c-tel-tint) / <alpha-value>)", ink: "rgb(var(--c-tel-ink) / <alpha-value>)" },
        gam: { DEFAULT: "rgb(var(--c-gam) / <alpha-value>)", tint: "rgb(var(--c-gam-tint) / <alpha-value>)", ink: "rgb(var(--c-gam-ink) / <alpha-value>)" },
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      spacing: { 15: "3.75rem" },
      opacity: { 35: "0.35" },
    },
  },
  plugins: [],
} satisfies Config;
