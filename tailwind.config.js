/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        nav: "rgba(255, 255, 255, 0.322)",
        green: "#B8EC4C",
      },
    },
    fontFamily: {
      syne: ["Syne", "sans"],
    },
  },
  plugins: [],
};
