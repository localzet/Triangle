import type { LToaster } from '#components'
import type {
  DefaultProps,
  NinjaToasterBaseProps,
} from '@cssninja/nuxt-toaster'

// This type infer the props of LToaster component
type LocalzetToasterProps = Omit<
  InstanceType<typeof LToaster>['$props'],
  keyof DefaultProps
>

export function useToaster() {
  const $nt = useNinjaToaster()

  /**
   * Display a LToaster component
   */
  function show(props: LocalzetToasterProps, options?: NinjaToasterBaseProps) {
    return $nt.showComponent('LToaster', {
      props,
      options,
    })
  }

  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll,
  }
}
