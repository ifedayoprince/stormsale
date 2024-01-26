import type { Config as TWConfig } from 'tailwindcss'
import type {Config as RConfig} from 'rippleui'

const rippleConfig: RConfig = {
  removeThemes: ["dark"],
  themes: [
    {
      themeName: "light",
      colorScheme: "light",
      prefersColorScheme: true,
    },
  ],
}


const config: TWConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        "DEFAULT": "#a3a3a3"
      },
      borderWidth: {
        "DEFAULT": "1px",
        'sm': '1.3px'
      },
      colors: {
        'primary-green': "#34CAA5",
        secondaryBlue: "#0D062D",
        darkGray: "#212121",
        smoke: "#E0E0E0",
        'mid-green': "#f7f8fa",
        neutral: {
          '50': "#fafafa",
          '100': "#f5f5f5",
          '200': "#e5e5e5",
          '300': "#b2abab",
          '400': "#a3a3a3",
          '500': "#737373",
          '600': "#525252",
          '700': "#404040",
          '800': "#262626",
          '900': "#171717"
        },
        'new-red': "#BB372F",
      },
      gridTemplateAreas: {
        'profile-action-chip': [
          "avatar avatar name name name name more more",
          "avatar avatar email email email email more more"
        ],
        'main-stats': [
          "trends stats",
          "orders platform"
        ]
      },
      gridTemplateColumns: {
        'profile-action-chip': "repeat(8, auto)",
        'main-stats': "1fr auto"
      },
      gridTemplateRows: {
        'profile-action-chip': "auto auto",
        'main-stats': "auto auto"
      }
    },
  },
  plugins: [
    require("rippleui")(rippleConfig),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
export default config
