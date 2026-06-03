/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#0f172a',
          900: '#111827',
          800: '#1e293b',
        },
        accent: {
          cyan: '#38bdf8',
          purple: '#8b5cf6',
          blue: '#0ea5e9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)',
        'gradient-neon': 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 50%, #06b6d4 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(56, 189, 248, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-blue': '0 0 20px rgba(14, 165, 233, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        blob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
