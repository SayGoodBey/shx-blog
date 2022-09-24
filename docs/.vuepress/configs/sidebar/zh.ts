import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/git/": [
    {
      text: "git总结",
      children: ["/git/git1.md"],
    },
  ],
  "/js/": [
    {
      text: "js相关",
      children: ["/js/js1.md", "/js/js2.md", "bind.md", "json-nested.md"],
    },
  ],
  "/about/": [
    {
      text: "关于",
      children: ["/about/README.md", "/about/me.md"],
    },
  ],
  "/vue/": [
    {
      text: "vue",
      children: [
        "/vue/vuepress.md",
        "/vue/vue3.md",
        "/vue/vueA1.md",
        "/vue/diff.md",
      ],
    },
  ],
  "/study/": [
    {
      text: "系统学习",
      link: "/study/",
      children: [
        {
          text: "学习资料",
          link: "/study/materials/video.md",
          children: ["/study/materials/video.md"],
        },
        {
          text: "第一周",
          link: "/study/firstweek/fw1",
          children: [
            "/study/firstweek/fw1.md",
            "/study/firstweek/fw2.md",
            "/study/firstweek/fw3.md",
            "/study/firstweek/fw4.md",
          ],
        },
      ],
    },
  ],
  //面试总结
  "/audition/": [
    {
      text: "js",
      link: "/audition/",
      children: [
        {
          text: "基础",
          link: "/audition/js/auditionJs1.md",
          children: ["/audition/js/auditionJs1.md"],
        },
      ],
    },
  ],
  "/react/": [
    {
      text: "react",
      link: "/react/react1.md",
      children: [
        {
          text: "学习资料",
          link: "/react/react1.md",
        },
      ],
    },
  ],
  //日记
  "/notes/": [
    {
      text: "系统学习",
      link: "/notes/2022",
      children: [
        {
          text: "2022",
          link: "/notes/2022.md",
        },
      ],
    },
  ],
  "/cli/": [
    {
      text: "前端工程化",
      link: "/cli/",
      children: [
        {
          text: "lerna",
          link: "/cli/lerna/start.md",
          children: ["/cli/lerna/start.md"],
        },
      ],
    },
  ],
};
