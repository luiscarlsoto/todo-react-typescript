/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1000: '#f1ead9'
        },
        secondary: {
          1000: '#b3b2a1',
          1100: '#9d9b88'
        },
        brown: {
          1000: '#4e1a07'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
