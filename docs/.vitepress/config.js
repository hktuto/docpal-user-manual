import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import zhNav from './configs/zh-nav'
import zhSidebar from './configs/zh-sidebar'
export default defineConfig({
  // lang: 'en-US',
  title: 'DocPal',
  description: 'DocPal文档站点。',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    headers: {
      level: [0, 2]
    },

    // options for markdown-it-anchor
    anchor: { permalink: true, level: [2,3] },

    // options for markdown-it-toc
    toc: { level: [2, 3], includeLevel: [2, 3], listTag: 'ol' },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
      // aside-top
    }
  },

  themeConfig: {
    
    logo: '/logo.svg',

    // algolia: {
    //   appId: 'X51HWTCQJJ',
    //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
    //   indexName: 'vitepress-demo'
    // },
    locales: {
      '/': {
        label: 'English',
        selectText: 'English',
        selectLanguageName: 'English',
        nav,
        sidebar,
        outlineTitle: 'Outline',
        lastUpdatedText: 'Last Updated',
      },
      '/zh/': {
        label: '简体中文',
        selectText: '简体中文',
        nav: zhNav,
        sidebar: zhSidebar,
        outlineTitle: '本页目录',
        lastUpdatedText: '上次更新',
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    },
    localeLinks: {
      text: '语言',
      items: [
        {
          text: 'English',
          link: '/',
        },
        {
          text: '中文',
          link: '/zh/',
        }
      ]
    }

    // editLink: {
    //   pattern: 'https://github.com/xinlei3166/vitepress-demo/edit/master/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/xinlei3166/vitepress-demo' }
    // ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2022-present 君惜'
    // }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'DocPal',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'DocPal',
      description: 'Vue-powered Static Site Generator',
    }
  }
})
