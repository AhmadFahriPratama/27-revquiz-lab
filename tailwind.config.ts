import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7e22ce",
        secondary: "#a855f7",
        accent: "#faf5ff",
        background: "#ffffff",
        foreground: "#3b0764",
      },
    },
  },
  plugins: [],
};

export default config;
