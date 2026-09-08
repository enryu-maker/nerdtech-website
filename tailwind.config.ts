import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#EDEDE8",
        "cream-dim": "#E3E3DC",
        ink: "#121212",
        "ink-muted": "#63635C",
        "ink-faint": "#8A8A82",
        accent: "#0CAFFF",
        "accent-dim": "#E1F5FF",
        dark: "#0D0D0D",
        "dark-card": "#191919",
        "dark-border": "rgba(255,255,255,0.12)",
        cardline: "rgba(18,18,18,0.08)",

        surface: "#121410",
        "surface-dim": "#121410",
        "surface-bright": "#383a35",
        "surface-container-lowest": "#0d0f0b",
        "surface-container-low": "#1a1c18",
        "surface-container": "#1e201c",
        "surface-container-high": "#292b26",
        "surface-container-highest": "#343531",
        "on-surface": "#e3e3dc",
        "on-surface-variant": "#b9cacb",
        "inverse-surface": "#e3e3dc",
        "inverse-on-surface": "#2f312c",
        outline: "#849495",
        "outline-variant": "#3b494b",
        "surface-tint": "#00dbe9",
        primary: "#dbfcff",
        "on-primary": "#00363a",
        "primary-container": "#00f0ff",
        "on-primary-container": "#006970",
        "inverse-primary": "#006970",
        secondary: "#c3c6cf",
        "on-secondary": "#2d3137",
        "secondary-container": "#454950",
        "on-secondary-container": "#b5b8c1",
        tertiary: "#f2f5ff",
        "on-tertiary": "#2c3138",
        "tertiary-container": "#d5d9e3",
        "on-tertiary-container": "#5a5f67",
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#7df4ff",
        "primary-fixed-dim": "#00dbe9",
        "on-primary-fixed": "#002022",
        "on-primary-fixed-variant": "#004f54",
        "secondary-fixed": "#dfe2eb",
        "secondary-fixed-dim": "#c3c6cf",
        "on-secondary-fixed": "#181c22",
        "on-secondary-fixed-variant": "#43474e",
        "tertiary-fixed": "#dee2ec",
        "tertiary-fixed-dim": "#c2c7d0",
        "on-tertiary-fixed": "#171c23",
        "on-tertiary-fixed-variant": "#42474f",
        background: "#121410",
        "on-background": "#e3e3dc",
        "surface-variant": "#343531",
        "electric-blue": "#00F0FF",
        "deep-teal": "#008B8B",
        "glass-fill": "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "success-green": "#25D366",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "container-max": "1440px",
        gutter: "32px",
        "margin-desktop": "80px",
        "margin-mobile": "24px",
        "section-gap": "160px",
        "stack-sm": "8px",
        "stack-md": "24px",
        "stack-lg": "48px",
      },
      maxWidth: {
        "container-max": "1440px",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["80px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.25", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "500" }],
        "quote-text": ["24px", { lineHeight: "1.5", fontWeight: "300" }],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-15px) rotate(-2deg)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)", filter: "blur(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(-50%, 0) scale(1)" },
          "33%": { transform: "translate(-45%, 6%) scale(1.08)" },
          "66%": { transform: "translate(-55%, -4%) scale(0.95)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 4s ease-in-out infinite",
        "float-fast": "float-fast 3s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1s ease-out both",
        "pop-in": "pop-in 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
        "spin-slow": "spin-slow 8s linear infinite",
        "blob-drift": "blob-drift 14s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;












