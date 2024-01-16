/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        darkBg: "url(/dark.jpg)",
        lightBg: "url(/light.jpg)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#c69400",
        secondary: "#cc6600",
        dark: {
          DEFAULT: "#191919",
          text: "#bbb",
          hover: "#3c3c3c",
        },
        accent: {
          DEFAULT: "#313100",
          hover: "#633100",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
