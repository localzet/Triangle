export default defineNuxtConfig({
  extends: [
    /**
     * This extends the base Localzet layer.
     */
    '../layers/localzet',
  ],

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],
})
