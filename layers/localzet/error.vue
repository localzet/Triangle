<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen pt-8">
    <LError :error="props.error" />
  </div>
</template>

<!--<template>-->
<!--  <LSidebarLayout :sidebar="false">-->
<!--    <template #toolbar-title>{{ app.localzet.title }}</template>-->

<!--    <LError :error="props.error" />-->
<!--  </LSidebarLayout>-->
<!--</template>-->
