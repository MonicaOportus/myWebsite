/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '780px',
      'lg': '1030px',
      'xl': '1300px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
