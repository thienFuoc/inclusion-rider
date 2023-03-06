/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      'tiny': '320px',
      'm': '375px',
      'l': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        manuka: ["manuka"],
        metric: ["metric"],
      }
    },
  },
  plugins: [require("tailwind-clip-path")],
};
