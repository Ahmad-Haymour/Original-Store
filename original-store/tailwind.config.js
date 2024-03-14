/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        purple: "#6B46C1",
        darkPurple: "#8A2BE2"
      }
    },
  },
  plugins: [],
};
