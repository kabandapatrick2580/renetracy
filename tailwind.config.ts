import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Baskerville", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Avenir Next", "Manrope", "Segoe UI", "sans-serif"]
      },
      colors: {
        canvas: "#080808",
        ink: "#f7f1e8",
        gold: "#c8a96b",
        sand: "#d9c8b2",
        stone: "#171413"
      },
      boxShadow: {
        glow: "0 20px 70px rgba(200, 169, 107, 0.18)"
      },
      backgroundImage: {
        halo: "radial-gradient(circle at top, rgba(200, 169, 107, 0.2), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
