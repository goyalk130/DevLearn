module.exports = {
  darkMode: 'class',
  content: ['dist/index.html'],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: [''],
      },
      colors: {
        mainColor: '#266352',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
