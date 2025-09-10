module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#fff7fb',
          100: '#ffdfee',
          200: '#ffbfdc',
          300: '#ff9fc8',
          400: '#ff7fb4',
          500: '#ff5f9f',
          600: '#e64f8a',
          700: '#b33a67',
          800: '#872545',
          900: '#5b152a',
        }
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)', opacity: 0.9 },
          '50%': { transform: 'translateY(-18px)', opacity: 1 },
          '100%': { transform: 'translateY(0px)', opacity: 0.9 },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
