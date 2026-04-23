/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:    '#1A1A1A',
          card:  '#242424',
          amber: '#E8A020',
          gold:  '#F5C842',
          white: '#F5F0E8',
          gray:  '#CCCCCC',
          muted: '#888888',
          rule:  '#3A3A3A',
          green: '#27AE60',
        },
      },
    },
  },
  plugins: [],
};
