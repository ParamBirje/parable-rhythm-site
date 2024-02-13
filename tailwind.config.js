/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"]
      },
      colors: {
        primary: {
          light: "#252525",
          DEFAULT: "#131313"
        },
        secondary: {
          DEFAULT: "#78DB55"
        }
      }
    },
  },
  plugins: [],
}