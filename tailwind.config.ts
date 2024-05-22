import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        heropattern: "url('/hexagons.svg)",
      },
      colors: {
        'huisstijl-blue': '#26bdad',
      },
      spacing: {
        '128': '32rem',
        '200': '75rem',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        circle: 'circle',
      },
    },
  },
  plugins: [],
};
export default config;
