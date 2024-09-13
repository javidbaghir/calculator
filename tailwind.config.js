/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-white': '-8px 8px 15px rgba(255, 255, 255, 0.1), 8px 8px 15px rgba(0, 0, 0, 0.2)', // xüsusi kölgə
      },
    },
  },
  plugins: [],
}

