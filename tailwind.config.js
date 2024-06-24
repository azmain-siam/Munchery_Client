/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7F3E",
        secondary: "#999966",
        black: "#1D1D1D",
        dark: "#4F4F4F",
        dark2: "#828282",
        accent: "#FFF6E9",
      },
      fontFamily: {
        outfit: '"Outfit", sans-serif',
        playwrite: '"Playwrite MX", cursive',
        greatVives: '"Great Vibes", cursive',
      },
    },
  },
  plugins: [require("daisyui")],
};
