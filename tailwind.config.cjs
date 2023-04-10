const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // @see https://github.com/tailwindlabs/tailwindcss/discussions/7317
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      /*
       * Adding smaller breakpoints
       * @see https://tailwindcss.com/docs/screens#adding-smaller-breakpoints
       */
      xs: '400px',
      ...defaultTheme.screens,
      '2xl': '1440px',
    },
    colors: {
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      'dark-accent': 'rgb(var(--color-dark-accent) / <alpha-value>)',
      'white-smoke': '#f6f6f6',
      'very-dark': '#111',
      'medium-dark': '#444',
      white: '#FFFFFF',
    },
    backgroundImage: {
      'accent-gradient':
        'linear-gradient(45deg, rgb(var(--color-accent)), #da62c4 30%, white 60%)',
      none: 'none',
    },
    backgroundPosition: {
      'position-0': '0%',
      'position-100': '100%',
    },
    backgroundSize: {
      'size-400': '400%',
    },
  },
};
