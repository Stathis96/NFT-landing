const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkslategray' : {
          lighter: '#4b4b49',
          light :  '#737373',
          DEFAULT : '#2c2b2b',
          dark : '#212020',
          darker : '#383838',
          darkest : '#1c1a1a'
        },
        'darkkhaki' : {
          light : '#b8b246',
          DEFAULT : '#c9ac4e',
          dark : '#ada72b'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
