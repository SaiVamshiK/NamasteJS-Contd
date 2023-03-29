/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // this tells what files will be using the tailwind classes
    "./src/**/*.{html,js}",
    // Above regex uses all the files with .html,.js etc
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

