import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        black14: '#141414',
        black17: '#171717',
        black10: '#101010',
        gray40: '#404040',
        gray60: '#606060',
        graySuccess: '#e8fff5',
        gray2A: '#2a2a2a',
        gray1C: '#1c1c1c',
        gray23: '#232323',
        gray7F: '#7f7f7f',
        grayBG: '#CCCCCC',
        greenB7Uploads: '#20c982',
      }
    },
  },
  plugins: [],
}
export default config
