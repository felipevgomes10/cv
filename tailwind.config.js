/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F49D1A",
        secondary: "#FFD466",
        textPrimary: "#FFF2E1",
        textSecondary: "#F4E8D7",
        bgTransparent: "rgba(255, 255, 255, 0.15)",
        primaryShadow: "rgba(102, 85, 41, 0.25)",
      },
      fontFamily: {
        primary: "IBM Plex Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
