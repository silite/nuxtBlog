const pkg = require('./package')

module.exports = {
  server: {
      port: 12449
  },

  // css: [
  //   '@/assets/style/xxx'
  // ],

  head: {
    title: 'silite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: `@/static/xxx` }],
    // script: [{ src: '' }]
  },

  loading: false,

  modules: [
    '@nuxtjs/axios'
  ],

  plugins: [
    { src: '@/plugins/vuikit-ui', ssr: false }
  ],

  router: {
    middleware: 'route'
  }
}
