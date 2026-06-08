/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#1c1a22',
        moss: '#637a52',
        fern: '#8eb174',
        clay: '#d8896a',
        cream: '#f8f1df',
        blush: '#f2c4bd',
        midnight: '#23283d',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(35, 40, 61, 0.16)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-4deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(6deg)' },
        },
      },
      animation: {
        float: 'float 5.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
