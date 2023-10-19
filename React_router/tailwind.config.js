/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Urbanist: ['Urbanist'],
      Mono: ['Roboto Mono'],
    }
  },
  plugins: [],
}