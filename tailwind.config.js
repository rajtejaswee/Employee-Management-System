/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-red' : '#780000',
        'custom-red' : '#C1121F',
        'custom-beige': '#FDF0D5',
        'dark-blue': '#003049',
        'custom-blue' : '#669BBC',
      }
    },
  },
  plugins: [],
};
