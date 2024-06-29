<script setup lang="ts">
const app = useAppConfig()

const command = 'pnpm dev'

const nuxtConfig = [
  `export default defineNuxtConfig({`,
  `  extends: [`,
  `    '../layers/localzet',`,
  `  ]`,
  `})`,
].join('\n')

const codeLayout = [
  `<template>`,
  `  <LSidebarLayout>`,
  `    <slot />`,
  `  </LSidebarLayout>`,
  `</template>`,
].join('\n')

const codePage = [
  `<script setup lang="ts">`,
  `definePageMeta({`,
  `  title: 'My page',`,
  `})`,
  `<` + `/script>`,
  ``,
  `<template>`,
  `  <div>Hello Localzet!</div>`,
  `</template>`,
].join('\n')

const codeTailwind = [
  `import { withShurikenUI } from '@shuriken-ui/tailwind'`,
  `import colors from 'tailwindcss/colors'`,
  ``,
  `export default withShurikenUI({`,
  `  content: [],`,
  `  theme: {`,
  `    extend: {`,
  `      colors: {`,
  `        primary: colors.red,`,
  `        muted: colors.stone,`,
  `      }`,
  `    }`,
  `  }`,
  `})`,
].join('\n')
</script>

<template>
  <div class="mx-auto max-w-4xl pb-16">
    <div class="absolute right-6 top-3">
      <BaseThemeToggle />
    </div>
    <div class="flex flex-col gap-3 pb-16 pt-8 text-center">
      <BaseHeading size="md" weight="medium" class="uppercase">
        <span>Welcome to</span>
      </BaseHeading>
      <LocalzetLogoText class="text-primary-500 mx-auto h-8" />
    </div>
    <BaseCard shape="curved" class="dark:!bg-muted-900 mb-4 p-8 sm:mb-6">
      <div
        class="nui-mask nui-mask-hexed absolute inset-x-0 -top-10 mx-auto mb-2 flex h-[84px] w-[84px] shrink-0 items-center justify-center"
      >
        <div
          class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
        ></div>
        <div
          class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[80px] w-[80px] items-center justify-center bg-white"
        >
          <Icon name="ph:sparkle-duotone" class="text-primary-500 h-8 w-8" />
        </div>
      </div>
      <div class="space-y-2 pt-6 text-center">
        <BaseHeading size="lg" weight="semibold">
          <span>Start your first page</span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 mx-auto max-w-2xl"
        >
          Welcome to the Localzet app starter. You are here because you ran the
          <code
            class="bg-muted-100 dark:bg-muted-700/70 text-primary-500 rounded p-1 font-mono"
          >
            {{ command }}
          </code>
          command in your terminal. Follow the instructions below to configure
          the project and start building your first page.
        </BaseParagraph>
      </div>
    </BaseCard>

    <div class="flex flex-col gap-6">
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-one-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Enable a layout in
                <code>app/nuxt.config.ts</code>
              </p>
            </div>
            <pre><code>{{ nuxtConfig }}</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-two-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Set default layout in
                <code>app/layouts/default.vue</code>
              </p>
            </div>
            <pre><code>{{ codeLayout }}</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-three-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Define your app settings in
                <code>app/app.config.ts</code>
                <small>(logo, name, sidebars, panels, ...)</small>
              </p>
            </div>
            <pre><code>export default defineAppConfig({{app.localzet}})</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-four-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Create your first page
                <code>app/pages/index.vue</code>
              </p>
            </div>
            <pre><code>{{codePage}}</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-five-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Customize tailwind settings in
                <code>app/tailwind.config.ts</code>
                <small>(colors, fonts, ...)</small>
              </p>
            </div>
            <pre><code>{{codeTailwind}}</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZWJlYmViIj48cGF0aCBvcGFjaXR5PSIuNSIgZD0iTTk2IDk1aDR2MWgtNHY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNEgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djl6bS0xIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6IiAvPjxwYXRoIGQ9Ik02IDVWMEg1djVIMHYxaDV2OTRoMVY2aDk0VjVINnoiIC8+PC9nPjwvZz48L3N2Zz4K');
}

.dark .gridlines {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjcyZTNlIj48cGF0aCBvcGFjaXR5PSIuNSIgZD0iTTk2IDk1aDR2MWgtNHY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNEgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djl6bS0xIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6IiBmaWxsPSIjMjcyZTNlIi8+PHBhdGggZD0iTTYgNVYwSDV2NUgwdjFoNXY5NGgxVjZoOTRWNUg2eiIgZmlsbD0iIzI3MmUzZSIvPjwvZz48L2c+PC9zdmc+');
}

.animate-spin-slow {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
