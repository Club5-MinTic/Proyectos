const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue: {
          'dark': '#5F99F7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
