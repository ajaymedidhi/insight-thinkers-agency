/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a1628",
        ink2: "#0f2040",
        ink3: "#162d54",
        blue: {
          brand: "#1847c9",
          hover: "#2055d9",
          light: "#3b6ef5",
        },
        gold: {
          brand: "#c9a84c",
          hover: "#b8922e",
        },
        slate: {
          brand: "#f4f6fb",
          light: "#eaeffb",
          border: "#dde5f5",
        },
        muted: {
          brand: "#5a6a8a",
          light: "#8494b0",
        },
        border: {
          brand: "#d8e0f0",
        },
        green: {
          brand: "#15803d",
          bg: "#f0fdf4",
          border: "#bbf7d0",
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        sh1: "0 4px 20px rgba(10,22,40,.09)",
        sh2: "0 12px 48px rgba(10,22,40,.14)",
        sh3: "0 24px 80px rgba(10,22,40,.20)",
      },
      transitionProperty: {
        all: "all",
      },
      transitionTimingFunction: {
        t: "ease",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.7)", opacity: "0.4" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(.22,1,.36,1) both",
        "fade-in": "fadeIn 0.5s ease both",
        float: "float 5s ease-in-out infinite",
        "pulse-slow": "pulseScale 2s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
        ticker: "ticker 36s linear infinite",
      },
    },
  },
  plugins: [],
}
