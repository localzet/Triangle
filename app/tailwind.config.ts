import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

/**
 * It extends the default config from @shuriken-ui/tailwind
 */
export default withShurikenUI({
  content: [],
  theme: {
    // Custom fonts
    fontFamily: {
      sans: ['Inter Variable', 'sans-serif'],
      heading: ['Inter Variable', 'sans-serif'],
      alt: ['Karla Variable', 'sans-serif'],
      mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      // Custom colors
      colors: {
        // primary: colors.red,
        // muted: colors.stone,
        // info: colors.sky,
        // success: colors.teal,
        // warning: colors.amber,
        // danger: colors.rose,
      },
    },
  },
  plugins: [],
})
