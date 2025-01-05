/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        Montserrat: ' "Montserrat", serif'
      }
    },
    colors: {
      primaryColor: 'var(--Primary)',
      whiteColor: 'var(--#FFFFFF)',

    }
  },
  plugins: [
    require('daisyui'),
  ],
}

