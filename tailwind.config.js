/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#34353a' ,
        secondary: '#f0bf6c',
        accent: '#fffefe',
        blue: '#001D3D',
        yellow: '#FFC300',
        text: '#e8e9ec',
        enfase: '#ffc86b',

      },
      backgroundImage: {
        'background-code': "url('/src/assets/images/background-portfolio.png')",
      }
      
    },
  },
  plugins: [],
}

