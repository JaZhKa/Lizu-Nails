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
      'gray-dark': '#212529',
      'gray': '#343A40',
      'gray-light': '#CED4DA',
      'pink': '#FFDEEB',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Manrope', 'serif'],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
