export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        body:true
      }
    ],
    title: 'Samana Cosmética Natural',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/colors.scss',
  '@/assets/css/resets.scss',
  '@/assets/css/helpers.scss',
  'normalize.css',
  '@/assets/css/mixins.scss',
  '@/assets/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-awesome-swiper.js',
    '@/plugins/vue-fontawesome.js',
    '@/plugins/vue-observe-visibility.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/eslint-module'],
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
          },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
          },
      ]
   }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  styleResources: {
    scss: ['./assets/css/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  ssr: true,
  target: 'static',
  eslint: {
    fix: true
  }
}
