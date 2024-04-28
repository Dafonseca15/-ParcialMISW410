/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'border-color': 'rgba(0, 0, 0, 0.2)',
        'table-header-color': '#333A40',
      },
    },
  },
  plugins: [],
}