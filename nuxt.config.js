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
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: `@/static/xxx` }],
    // script: [{ src: '' }]
  },

  loading: false,

  modules: ['@nuxtjs/axios'],

  plugins: ['@/plugins/composition-api'],

  router: {
    middleware: 'route'
  },

  build: {
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        config.devtool = 'source-map'
      }
    }
  }
}
