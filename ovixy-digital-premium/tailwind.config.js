/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        // Updated premium brand identity colors
        brand: {
          blue: '#2563EB',      // Biru Elektrik
          navy: '#0F172A',      // Navy Corporate
          purple: '#8B5CF6',    // Ungu Modern
          bg: '#F8FAFC',        // Abu Muda / Putih
          green: '#25D366'      // Hijau WhatsApp
        }
      }
    },
  },
  plugins: [],
}
