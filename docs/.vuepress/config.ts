import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'
// const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  //base:"/shx-blog/",
  lang: 'zh-CN',
  title: '微笑的博客',
  description: '私人博客',
  head: [
    ['link', { rel: 'apple-touch-icon',sizes:"180x180", href: '/images/icons/apple-touch-icon.png' }],
    ['link', { rel: 'icon',type:"image/png",sizes:"32x32", href: '/images/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon',type:"image/png",sizes:"16x16", href: '/images/icons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg',color:"#5bbad5" }],
    ['meta', { name: 'application-name', content: '微笑' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: '微笑' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig:{
    navbar:navbar.zh,
    sidebar: sidebar.zh,

  },
  port: 4000,
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },
  plugins:[
    ['@vuepress/plugin-pwa'],
  ]

})



