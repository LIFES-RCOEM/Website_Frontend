/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': "480px",
      'md': "640px",
      'lg': "720px",
      'xl': "1024px" ,
      '2xl': "1080px",
      "3xl" : "1280px",
      "4xl" : "1440px",
    },
    extend: {
      boxShadow: {
        "dark": "0px 0px 15px 0px rgba(0,0,0,0.75)",
      },
      backgroundImage: {
        'main-bg' : "url('./assets/home/bg.png')",
        'light-grad': 'linear-gradient(90deg, rgb(253, 206, 206), rgb(255, 244, 204))',
        'orange-grad': 'linear-gradient(180deg, rgb(255, 193, 7) 0%, rgb(253, 126, 20) 100%);'
      },
      colors: {
        "dark-orange" : "rgba(255, 103, 0, 1)",
        "light-orange": "rgba(255, 140, 0, 1)",
        "yellow" : "rgba(255, 165, 0)",
        "maroon": "#B41943"
      }
    },
  },
  plugins: [
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/container-queries',
  ],
}


