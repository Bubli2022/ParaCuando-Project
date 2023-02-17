/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mi-azul': '#1B4DB1',
        'mi-amarillo': '#F3F243',
        'mi-rosa': '#FF64BC',
        'mi-negro': '#000000',
        'mi-gris-oscuro': '#1A1E2E',
        'mi-gris': '#6E6A6C',
        'mi-gris-claro': '#A7A6A7',
        'mi-gris-muy-claro': '#D9D9D9',
        'mi-blanco': '#F8F7FA',
        'mi-rojo': '#EF3F47',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
};
