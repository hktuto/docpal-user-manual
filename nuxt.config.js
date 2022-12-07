import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#2ea9d4'
  },
  moduless:[
    '@nuxtjs/i18n',
  ],
  css: ['./assets/style/default.css'],
  i18n: {
    locales: [
      {
        code:'en',
        iso:'en-US',
        name: "en",
        file:'en-US.js'
      },
      {
        code: 'zh',
        iso: 'zh-HK',
        name: 'zh',
        file:'zh-CN.js'
      }],
    defaultLocale: 'en',
    noPrefixDefaultLocale: true,
  },
})
