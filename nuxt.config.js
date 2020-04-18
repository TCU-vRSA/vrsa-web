import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'TCU vRSA - 都市大非公認学生リモートサポートチーム',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '東京都市大学非公認・リモート学生アシスタントチーム「vRSA」の公式Webサイトです。今年度前期は、新型コロナウイルス感染症の影響により様々なイベントが中止となり、講義もオンラインで行うという動きが出てきました。しかし、学生の中でもオンラインに抵抗感をもつ方や、PCなどの機器の操作に不安がある方が多くいらっしゃると思います。そこで、私たちはリモートで学生をサポートする有志の団体「vRSA」を立ち上げました。今後、このWebサイトで情報発信を行っていく他、公式LINEアカウントを使って、学生一人ひとりに対しサポートしていく予定です。' },
      { hid: 'og:description', name: 'og:description', content: '東京都市大学非公認・リモート学生アシスタントチーム「vRSA」の公式Webサイトです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://tcu-vrsa.net/img/ogp.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TCU vRSA - 都市大非公認学生リモートサポートチーム' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    ['@nuxtjs/moment', ['ja']],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: 'mdi'
    },
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
  },
  googleAnalytics: {
    id: 'UA-163819136-1',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    fallback: true,
  }
}
