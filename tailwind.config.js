/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ts}", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
],
  theme: {
    extend: {},
  },
  plugins: [],
}

