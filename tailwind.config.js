/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: '"Playfair Display", serif',
      },
      colors: {
        primaryColor: 'var(--Primary)',
        secondaryColor: 'var(--secondary)',
        dashboardColor: 'var(--dashboard)'
      },
    },
  },
  daisyui: {
    themes: [""],
  },
  plugins: [
    require('daisyui'),
  ],
};
