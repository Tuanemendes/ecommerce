/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'brow-coffee': '#3F2305',
      'belge-milk': '#DFD7BF',
      'belge-light': '#F2EAD3',
      'grey-light': '#F5F5F5',
      'brow-ligth':'#956F4B',
      'brow-ligth2':'#B78E58',

      
    },
  },
  plugins: [],
};
