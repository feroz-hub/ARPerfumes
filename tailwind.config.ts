import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          ink: '#0e2338',
          primary: '#0f4d77',
          accent: '#1c73aa',
        },
      },
      boxShadow: {
        corporate: '0 14px 34px rgba(10, 58, 90, 0.22)',
      },
    },
  },
};

export default config;
