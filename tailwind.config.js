module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'header': '#262a4e',
        'subtitle': '#2370C8',
        'body': '#646464'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'spot': '#2370C8',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
