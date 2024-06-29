<script setup lang="ts">
interface NavigationGroupSeparator {
  divider?: boolean
}
interface NavigationGroupLink {
  name: string
  to: string
}
interface NavigationGroupCollapseLink {
  name: string
  children: {
    name: string
    to: string
    icon: string
  }[]
}
type NavigationItem =
  | NavigationGroupSeparator
  | NavigationGroupLink
  | NavigationGroupCollapseLink

const props = defineProps<{
  navigation: NavigationItem[]
}>()
</script>

<template>
  <ul>
    <template v-for="(group, index) of props.navigation">
      <LSubsidebarMenuDivider
        v-if="'divider' in group"
        :key="`${index}-divider`"
      />
      <LSubsidebarMenuLink
        v-else-if="'to' in group"
        v-bind="group"
        :key="`${index}-link`"
      />
      <LSubsidebarMenuCollapseLinks
        v-else-if="'children' in group"
        v-bind="group"
        :key="`${index}-collapse`"
      />
    </template>
  </ul>
</template>
