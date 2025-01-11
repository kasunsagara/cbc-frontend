/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#FFFDEC",
        "secondary" : "#FFCFCF",
        "accent" : "#FFE2E2",
      }
    },
  },
  plugins: [],
}