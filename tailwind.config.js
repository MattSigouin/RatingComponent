/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-grey': 'hsl(217, 12%, 63%)',
        'white' : 'hsl(0, 0%, 100%)',
        'medium-grey' : 'hsl(216, 12%, 54%)',
        'dark-blue' : 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'orange' : 'hsl(25, 97%, 53%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      }
    },
  },
  plugins: [],
}