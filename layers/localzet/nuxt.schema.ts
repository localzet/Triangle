export default defineNuxtSchema({
  appConfig: {
    localzet: {
      title: 'Localzet',
      error: {
        logo: {
          component: 'LocalzetLogo',
          props: {},
        },
      },
      panels: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['name', 'component'],
            properties: {
              name: { type: 'string' },
              position: {
                type: 'string',
                tsType: "'left' | 'right'",
                $default: 'left',
              },
              component: { type: 'string' },
              props: { type: 'object' },
              overlay: { type: 'boolean', $default: true },
            },
          },
        },
      },

      // layouts
      collapse: {
        circularMenu: {
          enabled: true,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        toolbar: {
          enabled: true,
          showTitle: true,
          showNavBurger: false,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        navigation: {
          enabled: true,
          header: {
            component: '',
            props: {},
          },
          footer: {
            component: '',
            props: {},
          },
          items: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  name: { type: 'string' },
                  to: { type: 'string' },
                  activePath: { type: 'string' },
                  position: { type: 'string', tsType: "'start' | 'end'" },
                  divider: { type: 'boolean' },
                  icon: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      name: { type: 'string' },
                      class: { type: 'string' },
                    },
                  },
                  children: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['name'],
                      properties: {
                        name: { type: 'string' },
                        to: { type: 'string' },
                        activePath: { type: 'string' },
                        position: { type: 'string', tsType: "'start' | 'end'" },
                        icon: {
                          type: 'object',
                          required: ['name'],
                          properties: {
                            name: { type: 'string' },
                            class: { type: 'string' },
                          },
                        },
                      },
                    },
                  },
                  component: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      name: { type: 'string' },
                      props: { type: 'object' },
                    },
                  },
                  click: { type: 'function' },
                },
              },
            },
          },
        },
      },
      sidebar: {
        circularMenu: {
          enabled: true,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        toolbar: {
          enabled: true,
          showTitle: true,
          showNavBurger: false,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        navigation: {
          enabled: true,
          startOpen: true,
          logo: {
            component: 'LocalzetLogo',
            props: {},
          },
          items: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['title'],
                properties: {
                  title: { type: 'string' },

                  order: { type: 'number', $default: 10 },
                  activePath: { type: 'string' },
                  position: {
                    type: 'string',
                    tsType: "'start' | 'end'",
                    $default: 'start',
                  },

                  component: { type: 'string' },
                  props: { type: 'object' },

                  icon: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      name: { type: 'string' },
                      class: { type: 'string' },
                    },
                  },
                  to: { type: 'string' },
                  click: { type: 'function' },

                  subsidebar: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      component: { type: 'string' },
                      props: { type: 'object' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      topnav: {
        circularMenu: {
          enabled: true,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        toolbar: {
          enabled: true,
          showTitle: true,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        navigation: {
          enabled: true,
          logo: {
            component: 'LocalzetLogo',
            props: {},
          },
          header: {
            component: undefined,
            props: {},
          },
          items: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  name: { type: 'string' },
                  to: { type: 'string' },
                  activePath: { type: 'string' },
                  position: { type: 'string', tsType: "'start' | 'end'" },
                  divider: { type: 'boolean' },
                  icon: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      name: { type: 'string' },
                      class: { type: 'string' },
                    },
                  },
                  component: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      component: { type: 'string' },
                      props: { type: 'object' },
                    },
                  },
                  click: { type: 'function' },
                },
              },
            },
          },
        },
        footer: {
          enabled: true,

          logoSeparator: {
            component: 'LocalzetLogo',
            props: {},
          },

          logo: {
            component: 'LocalzetLogoText',
            props: {},
          },

          copyright: {
            name: '',
            to: '',
            since: '',
          },

          links: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name', 'to'],
                properties: {
                  name: { type: 'string' },
                  to: { type: 'string' },
                  rel: { type: 'string' },
                  target: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
})
