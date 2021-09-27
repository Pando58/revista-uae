const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '420px'
      },
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        'transparent-white': '#FFF2',
        'transparent-black': '#0002'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      brightness: ['hover']
    },
  },
  plugins: [],
}
