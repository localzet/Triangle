import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  $meta: {
    name: '@localzet/triangle-layer',
  },
  extends: [
    /**
     * @shuriken-ui/nuxt is a nuxt layer that register a set of basic components (all prefixed with Base*)
     * plus a set of modules:
     *  - @nuxtjs/tailwindcss
     *  - @nuxtjs/color-mode
     *  - nuxt-icon
     */
    '@shuriken-ui/nuxt',
  ],
  modules: ['@cssninja/nuxt-toaster'],
  tailwindcss: {
    config: {
      content: [],
      plugins: [exposeColors],
    },
  }
})
