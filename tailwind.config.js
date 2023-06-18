/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      customPurple: '#350053',
      purple: {
        800: 'rgba(56, 1, 88, 1)',
        900: 'rgb(88 28 135)',
        950: 'rgb(59 7 100)'
      },
      footerPurple: 'rgba(38, 0, 59, 1)',
      greenHighlight: 'rgba(15, 206, 51, 1)',
      greenShade: 'rgba(13, 199, 79, 1)',
      greenDark: 'rgba(0, 145, 27, 1)',
      white: 'rgba(255, 255, 255, 1)',
      whiteShade: 'rgba(247, 247, 247, 1)',
      gray: 'rgba(74, 74, 74, 1)',
      black: 'rgba(0, 0, 0, 1)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'backgroundEffect': "url('../../public/backgroundEffect.svg')",
      },
    },
  },
  plugins: [],
}
