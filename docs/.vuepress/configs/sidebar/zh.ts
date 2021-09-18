import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/about/':[
    {
      text:'关于',
      children:[
        '/about/README.md',
        '/about/me.md'
      ]
    }
  ],
  '/vue/':[
    {
      text:'vue',
      children:[
        '/vue/vuepress.md',
        '/vue/vue3.md',
      ]
    }
  ]
}
