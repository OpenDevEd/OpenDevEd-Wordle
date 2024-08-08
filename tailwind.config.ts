import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#4b3b47",
          100: "#0f0c0e",
          200: "#1e171c",
          300: "#2d232a",
          400: "#3b2f38",
          500: "#4b3b47",
          600: "#755c6e",
          700: "#9b8095",
          800: "#bdaab8",
          900: "#ded5dc",
        },
        card: {
          DEFAULT: "#6a6262",
          100: "#151414",
          200: "#2a2727",
          300: "#403b3b",
          400: "#554e4e",
          500: "#6a6262",
          600: "#898080",
          700: "#a7a0a0",
          800: "#c4bfbf",
          900: "#e2dfdf",
        },
        primary: {
          DEFAULT: "#9c9990",
          100: "#201f1c",
          200: "#403e39",
          300: "#605d55",
          400: "#807c71",
          500: "#9c9990",
          600: "#b0aea6",
          700: "#c4c2bd",
          800: "#d8d6d3",
          900: "#ebebe9",
        },
        secondary: {
          DEFAULT: "#cfd2b2",
          100: "#2f311d",
          200: "#5e6239",
          300: "#8c9356",
          400: "#b0b581",
          500: "#cfd2b2",
          600: "#d8dbc1",
          700: "#e2e4d1",
          800: "#ecede0",
          900: "#f5f6f0",
        },
        text: {
          DEFAULT: "#e0d8de",
          100: "#31272e",
          200: "#614e5d",
          300: "#91768a",
          400: "#b8a7b4",
          500: "#e0d8de",
          600: "#e6dfe4",
          700: "#ece7eb",
          800: "#f2eff2",
          900: "#f9f7f8",
        },
      },
      animation: {
        "popin": "popin 0.5s ease-in-out forwards",
        "lefttoright": "lefttoright 0.25s ease-in-out forwards",
        "toptobottom": "toptobottom 0.25s ease-in-out forwards",
        "crack": "crack 0.5s cubic-bezier(.47,1.64,.41,.8) forwards",
      },
      keyframes: {
        "popin": {
          "0%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "lefttoright": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "toptobottom": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "crack": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(42deg)", scale: "0.75" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
