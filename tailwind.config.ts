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
        primaryColor: '#197D16',
        hoverPrimaryColor: "#188C15",
        white: '#fff',
        test: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },

        // ...
      },
      width: {
        form: '320px',
        
      },
      height:{
        formLogin:'660px'
      }
    },
    screens: {
      '2xl': { 'max': '2000px' },
      // => @media (max-width: 1600px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },

  },
  plugins: [],
};
export default config;
