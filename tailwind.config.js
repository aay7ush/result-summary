/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "lg-bg-1": "hsl(252, 100%, 67%)",
        "lg-bg-2": "hsl(241, 81%, 54%)",
        "lg-bg-3": "hsla(256, 72%, 46%, 1)",
        "lg-bg-4": "hsla(241, 72%, 46%, 0))",
      },
      boxShadow: {
        custom: "10px 10px 13px hsla(242, 68%, 93%, 0.555)",
      },
    },
  },
  plugins: [],
}
