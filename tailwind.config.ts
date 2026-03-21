import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#010101',
        'terminal-text': '#ffffff',
        'terminal-green': '#9ece6a',
        'terminal-yellow': '#e0af68',
        'terminal-blue': '#7aa2f7',
        'terminal-red': '#f7768e',
      },
    },
  },
  plugins: [typography],
};

export default config;
