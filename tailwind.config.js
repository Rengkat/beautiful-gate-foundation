/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F1B33",
        "navy-deep": "#0A1324",
        amber: "#E8A33D",
        "amber-deep": "#C77F1E",
        cream: "#FBF8F2",
        ink: "#171717",
        slate: "#5B6472",
        "slate-light": "#8B93A0",
        "brand-green": "#2F7D5C",
        line: "#E4DFD3",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
