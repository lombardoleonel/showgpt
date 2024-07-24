import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-blue": {
          50: '#dbf4ff',
          100: '#addcff',
          200: '#7cc4ff',
          300: '#4aacff',
          400: '#1a94ff',
          500: '#007ae6',
          600: '#005fb4',
          700: '#004482',
          800: '#002951',
          900: '#000f21',
        }
      }
    },
  },
  plugins: [],
};
export default config;
