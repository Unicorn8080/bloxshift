import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '350px',        
        // => @media (min-width: 992px) { ... }
      },
      // colors: {
      //   // primary: '#302c42',
      //   primary:"#333",
      //   secondary: '#5a9ef0',
      //   // secondary: '#222',
      //   buttongradientto: '#8176AF',
      //   buttongradientfrom: '#c0b7e8',
      //   hero: '#343045',  //button color
      //   // hero: '#343045',
      //   shadow: '#c0b7e703',
      //   hydraFrom : '#4A4174',
      //   hydraTo: '#211E2E',
      //   stroke: "#001A72"      

      // },
      colors: {
        // primary: '#302c42',
        primary:"#333",
        secondary: '#5a9ef0',
        // secondary: '#222',
        buttongradientto: '#888888',
        buttongradientfrom: '#bbbbbb',
        hero: '#444444',  //button color
        // hero: '#343045',
        shadow: '#bbbbbb',
        hydraFrom : '#4a4a4a',
        hydraTo: '#212121',
        stroke: "#000000"      

      },
    },
  },
  plugins: [],
}
export default config
