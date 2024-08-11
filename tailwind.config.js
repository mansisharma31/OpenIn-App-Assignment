/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--primary-bg-color)',
        primaryText: 'var(--primary-text-color)',
        secondaryBg: 'var(--secondary-bg-color)',
        thirdBg: 'var(--third-bg-color)',
        secondaryText: 'var(--secondary-text-color)',
        accent: 'var(--accent-color)',
        buttonBg: 'var(--button-bg-color)',
        linkColor: 'var(--link-color)',
        grayText: 'var(--gray-text-color)',
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
// module.exports = {
//   darkMode: 'class', // or 'media' for system preference
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };


