/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        redCustom: '#D12F23',  // The custom red you wanted
      },
    },
  },
  plugins: [],
}
