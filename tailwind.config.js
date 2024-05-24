/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cozy-color':"#DFD6AF",
        'cozy-color-l':"#E7E2CD",
        'cozy-color-text':"#FAF7EA",
        'cute-green':"#A2A431",
        'cute-green-l':"#ACAD72"
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'lilita': ['Lilita One', 'sans-serif'],
        'saira': ['Saira Condensed', 'sans-serif']
      },
      width: {
        '128': '32rem',
        '200': '50rem',
      },
      height: {
        '128': '32rem',
        '200': '50rem',
      }
    },
  },
  plugins: [],
}

