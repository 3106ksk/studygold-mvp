/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-grid": "var(--color-bg-grid)",
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        "surface-soft": "var(--color-surface-soft)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-dim": "var(--color-text-dim)",
        gold: "var(--color-gold)",
        "gold-bright": "var(--color-gold-bright)",
        "gold-deep": "var(--color-gold-deep)",
        "gold-soft": "var(--color-gold-soft)",
        teal: "var(--color-teal)",
        purple: "var(--color-purple)",
        cream: "var(--color-cream)",
        danger: "var(--color-danger)",
        success: "var(--color-success)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        sg: "var(--radius-md)",
        "sg-lg": "var(--radius-lg)",
        "sg-xl": "var(--radius-xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        gold: "var(--shadow-gold)",
      },
      backgroundImage: {
        "sg-page": "var(--gradient-bg)",
        "sg-gold": "var(--gradient-gold)",
      },
      animation: {
        "float-soft": "float-soft 5.5s ease-in-out infinite",
        "gold-pulse": "gold-pulse 2.4s ease-in-out infinite",
        "particle-rise": "particle-rise 1.8s ease-out infinite",
        "fade-up": "fade-up 520ms ease-out both",
      },
      keyframes: {
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 18px rgba(255, 196, 0, 0.18)" },
          "50%": { boxShadow: "0 0 36px rgba(255, 196, 0, 0.34)" },
        },
        "particle-rise": {
          "0%": { transform: "translate3d(0, 18px, 0) scale(0.7)", opacity: "0" },
          "18%": { opacity: "0.95" },
          "100%": { transform: "translate3d(var(--particle-x), -74px, 0) scale(0.15)", opacity: "0" },
        },
        "fade-up": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
