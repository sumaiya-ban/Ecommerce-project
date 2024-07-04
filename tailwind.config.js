/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        
      },
      colors: {
        'regal-white': '#FAFAFA',
        'secondary':'#F5F5F5',
        'third':'#DB4444',
        'yellow':'#FFAD33',
        'ash':'#808080'
      },
    },
  },
  plugins: [],
}

