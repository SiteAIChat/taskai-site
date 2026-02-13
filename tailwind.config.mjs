/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4A90D9',
          orange: '#E8855E',
          teal: '#4DC9A0',
          coral: '#E86B6B',
        },
      },
    },
  },
  plugins: [],
};
