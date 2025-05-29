import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fynn's Blog",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/blog.svg" }]],
  themeConfig: {
     // 网站的logo
     logo: "/logo.svg",
     // 文章右侧大纲目录
     outline: {
       level: [2, 6],
       label: "目录",
     },
     //自定义上下页名
     docFooter: {
       prev: "上一页",
       next: "下一页",
     },
 
     // 主题
     darkModeSwitchLabel: "深浅模式",
     // 返回顶部label
     returnToTopLabel: "返回顶部",
     // 搜索
     search: {
       provider: "local",
     },
     // 页脚
     footer: {
       message: "Released under the MIT License.",
       copyright: "Copyright © 2025-present fynn",
     },
     // 文档的最后更新时间
     lastUpdated: {
     text: "Updated at",
     formatOptions: {
         dateStyle: "full",
         timeStyle: "medium",
       },
     },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
