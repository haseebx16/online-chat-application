/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          DEFAULT: "#0D1117",
          galaxi: "#0D1117", // Dark galaxy background
          star: "#FFFFFF", // Star accents
          nebula: "#5D3FD3", // Purple Nebula effect
        },
        normalText: {
          whiteNormal: "#EDEDED",
          paleGold: "#FFD580", // Glow effect for lightsaber
        },
      },
      backgroundImage: {
        galaxy: "radial-gradient(ellipse at center, #5D3FD3 0%, #0D1117 80%)",
      },
      boxShadow: {
        saber: "0px 0px 10px 2px rgba(50, 255, 106, 0.8)", // Saber glow effect
      },
    },
  },
  plugins: [],
};
