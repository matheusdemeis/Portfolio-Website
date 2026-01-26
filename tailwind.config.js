/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CBB48A',
        secondary: '#0C3A5D',
      },
    },
  },
  plugins: [],
}