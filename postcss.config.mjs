// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // This is the corrected package name
    'autoprefixer': {},
  },
};
export default config;