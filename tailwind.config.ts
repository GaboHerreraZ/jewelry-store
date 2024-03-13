import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-bottom":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 700ms ease-out",
        fadeOut: "fadeOut 7000ms ease-out",
      },
      colors: {
        gold: "#C48B21",
        silver: "#837e7e",
        bisuteria: "#8f54ad",
      },
      backgroundImage: {
        // gold: "url('../../public/jpg/anillo-oro-laminado.jpg')",
        silver: "url('../../public/webp/anillo-plata.webp')",
        bisuteria: "url('../../public/webp/manilla-bisuteria.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
