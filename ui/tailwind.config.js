/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#141517",
          100: "#141517",
          200: "#161616",
          300: "#181818",
          400: "#242424",
          500: "#303030"
        },
        content: {
          DEFAULT: "#F5F5F5",
          100: "#f5f5f5",
          200: "#c6c6c6"
        }
      }
    },
  },
  plugins: [],
}