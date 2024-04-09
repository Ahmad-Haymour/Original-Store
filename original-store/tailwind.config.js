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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        // primary: "#81689D",
        // primary: "#a46ede",
        primary: "#4579F5",
        secondary: "#474F7A",
        elementary: "#a46ede",
        darkPurple: "#8A2BE2",
        lightPurple: "#BA55D3",
        newPurple: "#4f0561",
        purple: "#6B46C1",
        purple1: "#5C03BC",
        purple2: "#4F04A3",
        purple3: "#42048A",
        purple4: "#350571",
        purple5: "#280657",
        purple6: "#1B063E",
        purple7: "#0E0725",

        light: {
          primary: '#FFFFFF',
          background: '#ECECEC',
          test: '#474787',
          // Add more light mode colors as needed
        },
        dark: {
          primary: '#333333',
          background: '#ABAAB8',
          test: '#2D2C54',
          // Add more dark mode colors as needed
        },
      }
    },
  },
  plugins: [],
};
