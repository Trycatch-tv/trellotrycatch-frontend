/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#424390',
        success: colors.green,
        secondary: colors.blue,
        neutral: colors.gray,
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

