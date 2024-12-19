export default {
  localzet: {
    title: 'Localzet',
    error: {
      logo: {
        component: 'LocalzetLogo',
        props: { class: 'text-primary-500 mx-auto h-40 p-6' },
      },
    },
    panels: [],

    // layouts
    collapse: {
      navigation: {
        enabled: true,
        header: {
          component: '',
        },
        footer: {
          component: '',
        },
        items: [],
      },
      circularMenu: {
        enabled: true,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        showNavBurger: false,
        tools: [],
      },
    },
    iconnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'LocalzetLogo',
          props: { class: 'text-primary-500 h-10 w-10' },
        },
        items: [],
      },
      circularMenu: {
        enabled: true,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [],
      },
      footer: {
        enabled: false,
        logoSeparator: {
          component: 'LocalzetLogo',
          props: { class: 'text-primary-500 h-7 w-7' },
        },
        logo: {
          component: 'LocalzetLogoText',
          props: {
            class:
              'text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0',
          },
        },
        copyright: {
          name: '',
          to: '',
          since: '',
        },
        links: [],
      },
    },
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: false,
        tools: [],
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: 'LocalzetLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [],
      },
    },
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'LocalzetLogo',
          props: { class: 'text-primary-500 h-10 w-10' },
        },
        header: {
          component: undefined,
        },
        items: [],
      },
      circularMenu: {
        enabled: true,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [],
      },
      footer: {
        enabled: false,
        logoSeparator: {
          component: 'LocalzetLogo',
          props: { class: 'text-primary-500 h-7 w-7' },
        },
        logo: {
          component: 'LocalzetLogoText',
          props: {
            class:
              'text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0',
          },
        },
        copyright: {
          name: '',
          to: '',
          since: '',
        },
        links: [],
      },
    },
  },
  toaster: {
    duration: 6000,
    dismissible: false,
    theme: {
      maxToasts: 1,
      containerClass: [
        'fixed',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'flex-col',
        'overflow-hidden',
        'z-[200]',
        'items-start',
        'gap-2',
        'space-y-3',
      ],
      wrapperClass: [
        'pointer-events-auto',
        'focus:outline-none',
        'rounded',
        'outline-slate-300',
        'outline-offset-2',
        'focus:outline',
        'focus:outline-2',
        'focus-within:outline',
        'focus-within:outline-2',
      ],
      transition: {
        enterActiveClass: 'transition duration-300 ease-out',
        enterFromClass: 'transform translate-y-full opacity-0',
        enterToClass: 'transform translate-y-0 opacity-100',
        leaveActiveClass: 'transition duration-200 ease-in',
        leaveFromClass: 'transform translate-y-0 opacity-100',
        leaveToClass: 'transform translate-y-full opacity-0',
      },
    },
  },
}
