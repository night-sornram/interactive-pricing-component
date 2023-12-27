import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" :{
      "100" : "hsl(174, 77%, 80%)",
      "200" : "hsl(174, 86%, 45%)",
      "300" : "hsl(14, 92%, 95%)",
      "400" : "hsl(15, 100%, 70%)",
      "500" : "hsl(226, 100%, 87%)",
      "600" : "hsl(230, 100%, 99%)",
      "700" : "hsl(224, 65%, 95%)",
      "800" : "hsl(223, 50%, 87%)",
      "900" : "hsl(225, 20%, 60%)",
      "1000" : "hsl(227, 35%, 25%)"
    } 
  }

}

const config: Config = withMT({
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
        "icon" : "url('/images/icon-slider.svg')"
      },
      colors : colors,
    },
  },
  plugins: [],
})
export default config
