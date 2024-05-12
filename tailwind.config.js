/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '5rem',
        //   md: '4rem',
        //   lg: '6rem',
        //   xl: '8rem',
        //   '2xl': '10rem',
        // },
      },
    },
  },
  plugins: [],
}

