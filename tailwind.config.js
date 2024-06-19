/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-purple": "#692E8A",
        "primary-black": "#070707",
        "blue-dark": "#0D120E",
      },
      colors: {
        "primary-purple": "#692E8A",
        "primary-black": "#070707",
        "gray-light": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
