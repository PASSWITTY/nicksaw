/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      big: ["Cormorant Garamond","serif"],
      texts: ["Poppins", "sans-serif"]

    },
    extend: {},
  },
  plugins: [],
}

