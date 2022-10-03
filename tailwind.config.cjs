/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'display':['Comfortaa'],
      'content':['Roboto']
    },
    screens:{
      'sm':'550px',
      'xl':'1280px'
    },
    backgroundImage:{
      'old':"url('./assets/bg-old.jpg')",
      'old2':"url('./assets/old2.jpg')"

    }
  },
  plugins: [],
}