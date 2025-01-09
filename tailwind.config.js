/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cinzel: '"Cinzel", serif',
      },
      colors: {
        primaryColor: 'var(--Primary)',
        secondaryColor: 'var(--secondary)',
      },
    },
  },
  daisyui: {
    themes: ["black"],
  },
  plugins: [
    require('daisyui'),
  ],
};
