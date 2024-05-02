/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      visibility: ['hover', 'focused'],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4579F5",
        secondary: "#474F7A",
        darkGray: "#9ca3af",
        lightGray: "#e2e8f0 ",
        gray: "#334155",
        light: {
          text: '#100d17',
          background: '#f4f1f9',
          primary: '#7052bc',
          secondary: '#a38fdc',
          accent: '#8260d7',
        },
        dark: {
          text: '#ebe8f2',
          background: '#09060e',
          primary: '#6143ad',
          secondary: '#382370',
          accent: '#4a289f',
          dark: '#170F2C',
        },
      }
    },
  },
  plugins: [],
};
