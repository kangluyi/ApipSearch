export default {
  build: {
    outDir: '../../html'
  },
  
  // 基础配置
  lang: 'zh-CN',
  title: '挨批IP查询',
  description: 'Apipseach',
  
  // 站点 URL，用于生成 sitemap
  siteUrl: 'https://www.apipseach.com',
  
  // 启用深色模式
  appearance: true,
  
  // 最后更新时间
  lastUpdated: true,
  
  // 清洁URL
  cleanUrls: true,
  
  // Head 标签配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
  ],
  
  // 主题配置
  themeConfig: {
    // 网站Logo
    logo: '/logo.png',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '更新日志', link: '/changelog' },
      { 
        text: '更多', 
        items: [
          { text: '关于我们', link: '/about/' }
        ]
      }
    ],
    
    // 侧边栏配置 - 只在指南页面显示
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '核心功能', link: '/guide/features' },
            { text: '配置说明', link: '/guide/configuration' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: 'API集成', link: '/guide/integration' },
            { text: '最佳实践', link: '/guide/best-practices' }
          ]
        }
      ]
    },
    
    // 目录配置
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    
    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新'
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/apipseach' }
    ],
    
    // 页脚
    footer: {
      message: false,
      copyright: false
    },
    
    // 绿沈之饴主题配置
    colors: {
      primary: '#16a34a',
      primaryDark: '#15803d'
    },
    radius: 0.75,
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    
    // 不蒜子统计
    busuanzi: {
      enable: true,
      rootDomain: 'busuanzi.ibruce.info',
      sitePv: true,
      siteUv: true,
      pagePv: true
    },
    
    // 外部链接跳转
    externalRedirect: {
      enable: true,
      countdown: 5,
      skipDomains: []
    }
  },
  
  // 自定义CSS变量
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./.vitepress/theme/styles/vars.css";`
        }
      }
    }
  }
}