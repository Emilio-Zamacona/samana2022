export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js'
      },
      {
        src: 'https://sdk.mercadopago.com/js/v2',
        type: 'text/javascript',
        async: true,
        body: true
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manjari&display=swap' },
      { href: 'https://fonts.googleapis.com/css2?family=Allura&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    '@/assets/css/colors.scss',
    '@/assets/css/resets.scss',
    '@/assets/css/helpers.scss',
    '@/assets/css/normalize.css',
    '@/assets/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-awesome-swiper.js',
    '@/plugins/vue-fontawesome.js',
    '@/plugins/vue-observe-visibility.js',
    '@/plugins/global.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    ['@nuxtjs/eslint-module'],
    ['nuxt-fontawesome', {
      component: 'fa', // customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
      ]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/strapi'

  ],
  mercadopago: {
    public_key: 'TEST-5a21df55-663b-4458-877b-d5854279d347'
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337/api',
    entities: ['products', 'orders', 'subscribers']
  },
  env: {
    STRAPI_URL: 'http://localhost:1337/api'
  },
  styleResources: {
    scss: ['./assets/css/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }

  },
  ssr: true,
  target: 'static',
  eslint: {
    fix: true
  }
}
