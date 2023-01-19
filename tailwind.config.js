/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#009FD8",
      red: "#E44235",
      yellow: "#E9A447",
      black: "#000000",
      grey: "#F3F3F3",
      footerGrey: "#F5F5F5",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {
      fontFamily: { graphik: "var(--font-graphik)" },
      keyframes: {
        slideUp: {
          from: { top: "100%" },
          to: { top: "0" },
        },
        slideUp2: {
          from: { top: "100%" },
          to: { top: "20%" },
        },
        slideContent: {
          from: { transform: 'translateY(20%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideFast: "slideUp2 500ms ease-in-out forwards",
        slideSlow: "slideUp 600ms ease-in-out forwards",
        slideContent: "slideContent 500ms ease-in-out forwards 50ms",
      },
    },
  },
  plugins: [],
};
