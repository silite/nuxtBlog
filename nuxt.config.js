process.env.DEBUG = 'nuxt:*'
const pkg = require('./package')
const path = require('path')

module.exports = {
  server: {
    port: 12449,
  },

  // css: [
  //   '@/assets/style/xxx'
  // ],

  head: {
    title: 'silite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: `@/static/xxx` }],
    // script: [{ src: '' }]
  },

  css: [
    '@/assets/style/main.less'
  ],

  loading: false,

  modules: ['@nuxtjs/axios'],

  plugins: [
    '@/plugins/composition-api',
    '@/plugins/global',
    '@/plugins/animejs',
    {
      src: '@/plugins/smoothScroll',
      ssr: false
    },
    {
      src: '@/plugins/scrollBar',
      ssr: false
    },
    {
      src: '@/plugins/md',
      ssr: false
    }],

  router: {
    middleware: 'route',
  },

  build: {
    loaders: {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
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
          exclude: /(node_modules)/,
        })

        config.devtool = 'source-map'
      }

      // extend webpack alias
      config.resolve.alias = {
        ...config.resolve.alias,
        ...{
          types: path.resolve(__dirname, 'types'),
          utils: path.resolve(__dirname, 'utils'),
          store: path.resolve(__dirname, 'store'),
          components: path.resolve(__dirname, 'components'),
        },
      }
    },
  },
}
