import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#12181b',
        'secondary': '#A200FF',
        'lime': '#32CD32',
        'lime2': '#AAFF00',
        'forest': '#1A4314',
      },
      backgroundImage: {
        'fondo1': "url('/plantasvszombiesfondo.png')",
        'fondo2': "url('/plantasvszombiesfondo2.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        's1': '2px 2px 2px rgba(0, 100, 0, 1)',
      },
      cursor: {
        'oblea': "url('/cur1.png'), default",
        'portal': "url('/cur2.png'), pointer",
        'diosa': "url('/cur3.png'), text",
      }
    },
  },
  plugins: [],
};
export default config;
