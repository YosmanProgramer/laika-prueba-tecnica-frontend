module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html'],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {},
      colors: {
        'purple': '#603E85',
        'purple-dark': '#472F62',
        'purple-light': '#9D7DC2',
        'grey': '#EAEAEA',
        'red-dark': '#B61F1F',
        'yellow': '#FFB100',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
