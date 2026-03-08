import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CBB48A',
        secondary: '#0C3A5D',
      },
    },
  },
  plugins: [],
};

export default config;
