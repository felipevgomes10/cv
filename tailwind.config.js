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
      },
      fontFamily: {
        primary: "IBM Plex Sans, sans-serif",
      },
      boxShadow: {
        primaryShadow: "0 3px 3px rgba(102, 85, 41, 0.25)",
      },
      keyframes: {
        "bg-wave": {
          from: {
            "background-position": "0%",
          },
          to: {
            "background-position": "100%",
          },
        },
        blink: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        "bg-wave": "bg-wave 1.8s linear infinite alternate",
        blink: "blink .8s linear infinite",
      },
    },
  },
  plugins: [],
};
