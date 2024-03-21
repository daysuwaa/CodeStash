/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        customfont: ["Montserrat", "sans-serif"],
        fontfamily2: ["Londrina Shadow", "sans-serif"],
        fontfamily3: ["Amatic SC", "sans-serif"],
        fontfamily4: ["Ubuntu Condensed", "sans-serif"],
        fontfamily5: ["Comic Neue", "cursive"],
        fontfamily: ["Comic Neue", "cursive"],
      },
    },
  },

  plugins: [],
};
