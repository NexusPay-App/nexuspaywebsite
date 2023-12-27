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
        "hero-bg": "url('/svg/hero-bg.svg')",
        "feature-one": "url('/svg/feature-one.svg')",
        "feature-one-mobile": "url('/svg/feature-one-mobile.svg')",
        "feature-two": "url('/svg/feature-two.svg')",
        "feature-two-mobile": "url('/svg/feature-two-mobile.svg')",
        "feature-three": "url('/svg/feature-three.svg')",
        "feature-three-mobile": "url('/svg/feature-three-mobile.svg')",
        "function":"url('/svg/functionality.svg')",
      },
    },
    screens: {
      'xxs':'320px',
      
      'xsm':'450px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
export default config
