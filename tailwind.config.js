/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        primaryBold: ["primary Bold"],
        primaryRegular: ["primary Regular"],
      },
      colors: {
        primary: "#9D9FE6",
        primaryGelap: "#7C7DB9",
        secondary: "#E9AAAC",
        tertiary: "#ff844B",
      },
    },
  },
  plugins: [],
};
