
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: "#5E3023",
          medium: "#895737",
          orange: "#B7410E",
          cream: "#FFFDD0",
        },
      },
    },
  },
  plugins: [],
};
