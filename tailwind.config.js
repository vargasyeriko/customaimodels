const colors = require("tailwindcss/colors");
const {
  toRGB,
  withOpacityValue,
} = require("@left4code/tw-starter/dist/js/tailwind-config-helper");


const gray_neutral ={ 
   100: 'hsl(0, 0%, 98%)',
    200: 'hsl(0, 0%, 93%)',
    300: 'hsl(0, 0%, 85%)',
    400: 'hsl(0, 0%, 70%)',
    500: 'hsl(0, 0%, 50%)',
    600: 'hsl(0, 0%, 35%)',
    700: 'hsl(0, 0%, 20%)',
    800: 'hsl(0, 0%, 12%)',
    900: 'hsl(0, 0%, 7%)',
}

const slate_modified = {

  100: 'hsl(0, 0%, 98%)',
  200: 'hsl(0, 0%, 93%)',
  300: 'hsl(0, 0%, 85%)',
  400: 'hsl(0, 0%, 70%)',
  500: 'hsl(0, 0%, 50%)',
  600: 'hsl(0, 0%, 35%)',
  700: 'hsl(0, 0%, 20%)',
  800: 'hsl(0, 0%, 12%)',
  900: 'hsl(0, 0%, 7%)',
}

module.exports = {
  content: [
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./node_modules/@left4code/tw-starter/**/*.js",
    // ".//*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rgb: toRGB({
          inherit: colors.inherit,
          current: colors.current,
          transparent: colors.transparent,
          black: colors.black,
          white: colors.white,
          slate: colors.slate,
          gray: gray_neutral,
          zinc: colors.zinc,
          neutral: colors.neutral,
          stone: colors.stone,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          sky: colors.sky,
          blue: colors.blue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
          sky: colors.sky,
          stone: colors.stone,
          neutral: colors.neutral,
          gray: colors.gray,
          slate: colors.slate,
        }),
        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),
        success: withOpacityValue("--color-success"),
        info: withOpacityValue("--color-info"),
        warning: withOpacityValue("--color-warning"),
        pending: withOpacityValue("--color-pending"),
        danger: withOpacityValue("--color-danger"),
        light: withOpacityValue("--color-light"),
        dark: withOpacityValue("--color-dark"),
        slate: slate_modified,
        darkmode: {
          50: withOpacityValue("--color-darkmode-50"),
          100: withOpacityValue("--color-darkmode-100"),
          200: withOpacityValue("--color-darkmode-200"),
          300: withOpacityValue("--color-darkmode-300"),
          400: withOpacityValue("--color-darkmode-400"),
          500: withOpacityValue("--color-darkmode-500"),
          600: withOpacityValue("--color-darkmode-600"),
          700: withOpacityValue("--color-darkmode-700"),
          800: withOpacityValue("--color-darkmode-800"),
          900: withOpacityValue("--color-darkmode-900"),
        },
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      container: {
        center: true,
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
};
