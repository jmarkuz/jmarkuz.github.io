import type { Config } from "tailwindcss";

// Design tokens. Text colours pass WCAG AA (4.5:1) on both bg and surface.
// The same values are mirrored as CSS variables in globals.css for hand-written CSS.
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f7f6f2",
        surface: "#ffffff",
        sunk: "#fbfaf7",
        ink: { DEFAULT: "#15171a", 2: "#3d424a" },
        muted: "#5d626a",
        faint: "#676c74",
        line: { DEFAULT: "#e6e3dc", 2: "#d5d1c8" },
        // One colour per domain, used only for that domain.
        bank: { DEFAULT: "#0f8a6a", tint: "#dff2ec", ink: "#0b6b52" },
        tel: { DEFAULT: "#5a55d6", tint: "#e8e7fb", ink: "#4540b5" },
        gam: { DEFAULT: "#c96f17", tint: "#fbecdc", ink: "#8f4c0b" },
        night: { DEFAULT: "#15171a", line: "#2b2f35", muted: "#a9aeb6", faint: "#8a8f97" },
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
