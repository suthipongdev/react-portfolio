/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#95F238",
        primaryContent: "#F2F2F2",
        primarySubcontent: "#87BF34",
        primaryBase: "#AAF23D",
        primaryAccent: "#BFBFBF",
        primaryBg: "#0D0D0D",
      }
    },
  },
  plugins: [],
}

