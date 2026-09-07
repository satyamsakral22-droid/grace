/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grace: {
          navy: '#0B192C',
          deep: '#0F2C59',
          blue: '#1E3E62',
          primary: '#0066CC',
          bright: '#2563EB',
          sky: '#0284C7',
          cyan: '#00A3E0',
          light: '#F0F7FF',
          accent: '#0E7490',
          steel: '#475569',
          gold: '#D97706'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 30px -10px rgba(0, 102, 204, 0.12), 0 8px 12px -4px rgba(15, 23, 42, 0.04)',
        'premium': '0 25px 50px -12px rgba(11, 25, 44, 0.15)'
      }
    },
  },
  plugins: [],
}
