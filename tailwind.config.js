/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'p2': '2%',
        'p6': '6%',
        'p8': '8%',
      },
      colors: {
        primary: '#8394a7',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
          300: '#f5f5f5',
          400: '#ddd',
        }
      },
      fontFamily: {
        IBM: [
          'IBM Plex Mono'
        ]
      },
    },
    container: {
      maxWidth: '100%',
      padding: "8%",
      center: true,
    },
  },
  plugins: [],
};