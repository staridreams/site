const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
   mode: 'jit',
   darkMode: 'class',
   content: ['./src/**/*.{html,js,svelte,ts}'],

   theme: {
      extend: {
         fontFamily: {
            sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
            display: ['Outfit', ...defaultTheme.fontFamily.sans],
            mono: ['Work Sans', ...defaultTheme.fontFamily.mono],
            code: ['bunni', ...defaultTheme.fontFamily.mono]
         },
         colors: {
            primary: 'rgb(var(--textColor) / <alpha-value>)'
         }
      }
   },

   plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
