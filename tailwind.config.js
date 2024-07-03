/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(92 89 87)",
        themegolden: "#AC6E39",
        themered: "#E12727",
        themepurple: "#7F5DC7",
      },
      screens: {
        largelaptop: "1440px",
      },
    },
  },
  safelist: [
    "text-customGray",
    "text-themegolden",
    "text-themered",
    "text-themepurple",
    "bg-customGray",
    "bg-themegolden",
    "bg-themered",
    "bg-themepurple",
  ],
  plugins: [],
};
