/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
    "components/navbar.html",
    "components/footer.html",
    "components/infographic.html",
    "pages/WhoWeAre.html",
    "pages/WhatWeDo.html",
    "pages/Contact.html",
    "pages/OurProcess.html",
    "pages/OurWork.html",
  ],
  theme: {
    colors: {
      dark: '#0F141A',
      gray: '#191D22',
      tang: '#739bc7',
      blue: '#739bc7',
      white: 'white',
      gl: '#d5d6d8',
    },
    extend: {
      fontFamily: {
        'inter': ['Interstate', 'sans-serif'],
        'graphik': ['Graphik', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        fadeIn: 'fadeIn 2s forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
  },
  plugins: [],
}
}
