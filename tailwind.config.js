/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#8D8D92",
        color2: "#BEB2C8",
        color3: "#44344F",
        color4: "#D7D6D6",
        color5: "#F08700",
      },
      fontFamily: {
        roboto: ["Roboto", `sans-serif`],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
