/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        // => @media and (min-width: 1024px) and (max-width: 1279px)

        lg: { min: "768px", max: "1023px" },
        // => @media and (min-width: 768px) and (max-width: 1023px)

        md: { min: "426px", max: "767px" },
        // => @media and (min-width: 426px) and (max-width: 767px)

        sm: { min: "300px", max: "425px" },
        // => @media and (min-width: 300px) and (max-width: 425px)
      },
      colors: {
        header: "#667085",
        amber: "#8E2424"
      },
    },
  },
  plugins: [],
}

