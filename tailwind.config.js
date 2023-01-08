/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondery": "var(--secondery)",
        "third": "var(--third)",
        "text": "var(--text)",
        "black": "var(--black)",
        "lightH":"var(--lightH)",
        "darkF":"var(--darkF)",
        "darkH":"var(--darkH)",
        "lightP":"var(--lightP)",
      },
      backgroundImage: {
        'navLight': "url('./assets/bgs/light.jpg')",
        'navDark': "linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/light.png')",

        'heroLight': "url('./assets/bgs/lighttwo.png')",
        'heroDark': "linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/lightthree.png')",

        'aboutLight': "url('./assets/bgs/lightthree.png')",
        'aboutDark': "linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/lighttwo.png')",

        'offerLight': "url('./assets/bgs/lightfour.jpg')",
        'offerDark': "linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/lighttwo.png')",

        'portLight': "url('./assets/bgs/lighttwo.png')",
        'portDark': "linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/lighttwo.png')",

        'serviceLight': "url('./assets/bgs/lighttwo.png')",
        'serviceDark': "linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/lighttwo.png')",

        'mainBgLight': "url('./assets/bgs/mainbg.jpg')",
        'mainBgDark':"linear-gradient(to left top, #0B1120, #0B1120), url('./assets/bgs/mainbg.jpg')",

        'subBgLight':"linear-gradient(to left, rgba(255,255,255,0.7), rgba(255,255,255,0.3))",
        'subBgDark':"linear-gradient(to left top, #182133, #182133), url('./assets/bgs/mainbg.jpg')",

        'sideBarBgDark':"linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/bgs/mainbg.jpg')",
      },
    },
    variants: {
      extend: {
        backgroundImage: ['dark'],
      },
    },
  },
  plugins: [],
}
