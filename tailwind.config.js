/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000',
      'white': '#fff',
      'orange': '#F97300',
      'purple': '#32012F',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

