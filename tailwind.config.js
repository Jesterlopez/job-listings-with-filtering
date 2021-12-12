module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl-custom': '0 20px 25px -5px rgba(91, 164, 164, 0.20), 0 8px 10px -6px rgba(91, 164, 164, 0.20);'
      },
      margin: {
        'neg-32': '-8rem'
      }
    },
    textColor: theme => ({
      ...theme('colors'),
      'neutral-01': '#7b8e8e',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'color-primary': '#5DA5A4',
      'color-secundary': '#effafa',
      'color-very-dark': '#2c3a3a'
    }),
  },
  plugins: [],
}
