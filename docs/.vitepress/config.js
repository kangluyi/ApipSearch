export default {
  build: {
    outDir: '../../html'
  },
  
  // 基础配置
  title: 'Apipseach',
  description: 'API搜索与管理平台',
  
  // 主题配置
  themeConfig: {
    // 网站Logo
    logo: '/logo.png',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API文档', link: '/api/' },
      { 
        text: '更多', 
        items: [
          { text: '关于我们', link: '/about/' },
          { text: '更新日志', link: '/changelog' }
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
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/apipseach' }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Apipseach'
    }
  }
}