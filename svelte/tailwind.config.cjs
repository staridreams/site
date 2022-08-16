/** @type {import('tailwindcss').Config} */
const config = {
   mode: 'jit',
   darkMode: 'class',
   content: ['./src/**/*.{html,js,svelte,ts}'],

   theme: {
      extend: {
         colors: {
            primary: 'rgb(var(--textColor) / <alpha-value>)'
         }
      }
   },

   plugins: []
};

module.exports = config;
