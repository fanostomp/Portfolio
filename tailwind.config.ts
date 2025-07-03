// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // This tells Tailwind to scan all the files inside your 'src' folder.
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Here are your custom colors.
      colors: {
        'terminal-bg': '#010101',
        'terminal-text': '#ffffff', // This is now white
        'terminal-green': '#9ece6a',
        'terminal-yellow': '#e0af68',
        'terminal-blue': '#7aa2f7',
        'terminal-red': '#f7768e',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;