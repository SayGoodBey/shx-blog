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
  ],
  '/study/':[
    {
      text:'系统学习',
      link:'/study/',
      children:[
       {
         text:'第一周',
         link:'/study/firstweek/fw1',
         children:[
          '/study/firstweek/fw1.md',
          '/study/firstweek/fw2.md',
         ]
       }
      ]
    }
  ]
}
