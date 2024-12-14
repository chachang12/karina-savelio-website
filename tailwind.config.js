/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mintGreen: '#4F8C6F',
        sage: '#48735F',
        whiteBF: '#BFBFBF',
        gray40: '#404040',
        black0D: '#0D0D0D'
      },
    },
  },
  plugins: [],
}