/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0033CC',
        ink: '#1A1A1A',
        steel: '#666666',
        surface: '#F4F4F5',
      },
      fontFamily: { sans: ['Outfit', 'system-ui', 'sans-serif'] },
      maxWidth: { site: '1400px' },
    },
  },
  plugins: [],
};
