export default {
  build: {
    outDir: '../../html'
  },
  
  // 基础配置
  title: '挨批IP查询',
  description: 'Apipseach',
  
  // 主题配置
  themeConfig: {
    // 网站Logo
    logo: '/logo.png',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      //{ text: 'API文档', link: '/api/' },
      { 
        text: '更多', 
        items: [
          { text: '关于我们', link: '/about/' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    
    // 侧边栏配置 - 只在指南页面显示
    
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/apipseach' }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Apipseach'
    }
  },
  
  // 自定义主题颜色 - 红色主题
  appearance: true,  // 启用深色模式支持
  
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