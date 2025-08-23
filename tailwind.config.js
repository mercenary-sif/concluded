/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
    theme: {
    extend: {
      boxShadow: {
         'dual': '4px 4px 10px rgba(128,130,130,0.25), -4px -4px 10px rgba(128,130,130,0.25)', // your custom shadow
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),        // if you want nicer forms
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.ltr': { direction: 'ltr' },
        '.rtl': { direction: 'rtl' },
      })
    }   // for prose content
  ],
  fontFamily: {
        'font-1': 'var(--font-1)',
      },
}

