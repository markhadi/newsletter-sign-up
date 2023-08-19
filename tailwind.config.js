/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      tomato: {
        100: "hsl(0, 100%, 94%)",
        300: "hsl(0, 100%, 81%)",
        400: "hsl(0, 100%, 67%)",
        500: "hsl(0, 93%, 60%)",
      },
      "dark-slate-grey": "hsl(240, 27%, 20%)",
      "charcoal-grey": "hsl(235, 18%, 26%)",
      grey: {
        400: "hsl(224, 8%, 74%)",
        500: "hsl(230, 7%, 67%)",
        600: "hsl(231, 7%, 60%)",
      },
      orange: "hsl(14, 100%, 62%)",
      white: "#FFF",
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    fontSize: {
      xs: ["12px", "14px"],
      sm: ["15px", "18px"],
      base: ["16px", "24px"],
      lg: ["40px", "1em"],
      xl: ["56px", "1em"],
    },
    extend: {
      screens: {
        xs: "376px",
      },
    },
  },
  plugins: [],
};
