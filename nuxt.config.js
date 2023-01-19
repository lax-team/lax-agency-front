export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Lax Marketing',
    title: 'Lax Marketing',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Lax Marketing',
        name: 'Lax - Agency',
        content:
          'En LAX Agency te ayudamos a incrementar ventas a través de un verdadero retail CRM y una buena gestión y optimización de Clientes. Contamos con más de 7 años de experiencia brindando soluciones de mensajería masiva (SMS, Email, WhatsApp Business) para todo tipo de empresas.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon_lax.png' }],
  },

  target: 'static',

  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/v-video-embed', mode: 'client' },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // { src: 'swiper/dist/css/swiper.css' },
    // '~/assets/css/swiper.css',
    // 'swiper/dist/css/swiper.css,
    // 'swiper/swiper-bundle.min.css',
    'swiper/css/swiper.css',
    '~/assets/scss/main.scss',
    '~/assets/fonts/stylesheet.css',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  fontawesome: {
    // component: 'fa',
    icons: {
      // solid: ['faSearch','faAnalytics'],
      // brands: ['faTwitter','faFacebook','faPinterestP','faInstagram']
      solid: true,
      regular: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
