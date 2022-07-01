module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./blades/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#053C5E",
        primaryLight: "#C5E7FC",
        dark: "#3d3d3d",
      },
    },
  },
  plugins: [require("daisyui")],
};
