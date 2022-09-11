/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}