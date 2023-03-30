/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#189ca0",

          secondary: "#5dfc7f",

          accent: "#85f47f",

          neutral: "#23343E",

          "base-100": "#3C4E5D",

          info: "#4165D2",

          success: "#0C6A3B",

          warning: "#935610",

          error: "#FB2367",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
