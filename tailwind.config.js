/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mcnag-dark-blue': '#2E3192',
        'mcnag-light-blue': '#29ABE2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
