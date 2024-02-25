/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sx: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "text-color": "#212529",
      primary: "#343A40",
      secondary: "#CED4DA",
      accent: "#FFDEEB",
      error: "#dc2626",
      warning: "#fde047",
    },
    fontFamily: {
      manrope: ["Manrope", "serif"],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
