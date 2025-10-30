import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter var"',
          'Inter',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        lavender: '#A68CF1',
        rose: '#F8BBD0',
      },
      backgroundImage: {
        'dub-gradient': 'linear-gradient(135deg, #A68CF1 0%, #F8BBD0 100%)',
      },
      boxShadow: {
        soft: '0 32px 64px -40px rgba(166, 140, 241, 0.6)',
        card: '0 24px 48px -36px rgba(54, 32, 109, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
