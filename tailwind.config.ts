import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a08",
        bone: "#f5f2ec",
        ash: "#8a857a",
        umber: "#7a5a3a",
        brass: "#9c7a3a",
        copper: "#a86b3c",
        line: "#1f1d18"
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        wider: "0.18em",
        widest: "0.28em"
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.005em" }],
        "label": ["0.7rem", { lineHeight: "1.2", letterSpacing: "0.22em" }]
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        crossfade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        crossfade: "crossfade 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards"
      }
    }
  },
  plugins: []
};

export default config;
