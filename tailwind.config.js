const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/common/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F6F6F6", //
          200: "#EDEEF2", //
          300: "#EAEAEA", //
          400: "#BEBCBD", //
          500: "#807D7E", //
          600: "#5E6262",
          700: "#3C4242", //
          800: "#2A2F2F",
          900: "#1F2222",
        },
        violet: {
          50: "#faf8fd", //
          400: "#A765FF",
          500: "#8A33FD", //
          600: "#6620C1", //
        },
        myred: {
          500: "#EE1D52",
        },
        myblack: {
          900: "#333333",
        },
      },
      screens: {
        xl: "1270px",
      },
      fontFamily: {
        causten: ["var(--font-causten)", ...fontFamily.sans],
        core_sans: ["var(--font-core_sans_c)", "sans-serif"],
        royal: ["var(--font-royal)", "sans-serif"],
      },
      keyframes: {
        fill: {
          '0%': { height: '0' },
          '100%': { height: '30px' },
        }
      },
      animation: {
        fill: 'fill .6s ease',
      }
    },
  },
  plugins: [],
};
