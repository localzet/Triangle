import type { CustomAppConfig } from '@nuxt/schema'

export type LocalzetConfig = NonNullable<CustomAppConfig['localzet']>

export type SidebarConfig = NonNullable<LocalzetConfig['sidebar']>
export type SidebarToolbarConfig = NonNullable<SidebarConfig['toolbar']>
export type SidebarCircularMenuConfig = NonNullable<
  SidebarConfig['circularMenu']
>
export type SidebarNavigationConfig = NonNullable<SidebarConfig['navigation']>
export type SidebarNavigationLogoConfig = NonNullable<
  SidebarNavigationConfig['logo']
>

export type SidebarNavigationItemConfig = NonNullable<
  SidebarNavigationConfig['items']
>[number]
