<template>
  <div class="home-container">

    <!-- 主视觉 -->
    <section class="hero">
      <h1>挨批IP查询</h1>

      <p class="hero-subtitle">
        专业IP查询插件 · 支持 <span class="highlight">多数据源集成</span> · 精准定位<br>
        <span style="font-size: 0.9em; opacity: 0.7;">Flexible IP Geolocation Plugins with Multiple Data Sources</span>
      </p>

      <div class="search-container">
        <div class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="输入 IP 地址 (例如: 8.8.8.8) 或域名..." id="ipInput">
          <button class="search-btn" @click="searchIP">
            <i class="fa-solid fa-bolt" style="margin-right: 0.5rem;"></i>查询
          </button>
        </div>
      </div>
    </section>

    <!-- 功能特性 -->
    <section class="features" id="features">
      <div class="section-header">
        <span class="en-subtitle">Core Features</span>
        <h2>插件核心优势</h2>
      </div>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-globe"></i>
          </div>
          <span class="en-name">Dual Stack</span>
          <h3>IPv4 & IPv6 双栈</h3>
          <p>完整支持 IPv4 和 IPv6 地址查询，自动识别协议版本。覆盖全球 250万+ 城市位置数据。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-network-wired"></i> 双栈支持</span>
            <span><i class="fa-solid fa-map-location-dot"></i> 250万+ 城市</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-laptop"></i>
          </div>
          <span class="en-name">Multi-Platform</span>
          <h3>多平台支持</h3>
          <p>支持 WordPress、Shopify、Discord 等多种平台。提供统一的用户体验，无需担心平台差异。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-wpforms"></i> WordPress</span>
            <span><i class="fa-solid fa-shopping-cart"></i> Shopify</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-database"></i>
          </div>
          <span class="en-name">Multiple Data Sources</span>
          <h3>多数据源支持</h3>
          <p>不自带数据，支持集成百度、高德等众多数据源。灵活切换数据源，满足不同场景的需求。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-globe-asia"></i> 百度地图</span>
            <span><i class="fa-solid fa-map-marked-alt"></i> 高德地图</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 插件集成演示 -->
    <section class="plugin-demo" id="integration">
      <div class="demo-container">
        <div class="demo-content">
          <span class="en-caption">Simple Integration</span>
          <h2>插件集成<br>三步即可完成</h2>
          <p style="color: var(--text-secondary); margin-top: 1rem; line-height: 1.8;">
            无需复杂的配置，通过简单的插件安装即可在您的应用或网站中集成 IP 查询功能。
            支持百度、高德等众多数据源，灵活切换，满足不同场景的需求。
          </p>
          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <a href="#" style="padding: 0.875rem 1.5rem; background: var(--primary-red); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
              <i class="fa-solid fa-download" style="margin-right: 0.5rem;"></i>下载插件
            </a>
            <a href="#" style="padding: 0.875rem 1.5rem; border: 1px solid var(--border-red); color: var(--text-primary); text-decoration: none; border-radius: 8px; font-weight: 600;">
              <i class="fa-solid fa-book" style="margin-right: 0.5rem;"></i>使用文档
            </a>
          </div>
        </div>

        <div class="code-block">
          <div class="code-content">
            <span style="color: #666;">// WordPress 插件安装示例</span>
            <span class="code-keyword">1.</span> 登录 WordPress 后台
            <span class="code-keyword">2.</span> 插件 → 添加新插件
            <span class="code-keyword">3.</span> 搜索 "IP Search"
            <span class="code-keyword">4.</span> 点击 "安装" 并激活

            <span style="color: #666;">// 配置数据源</span>
            <span class="code-keyword">1.</span> 进入 IP Search 插件设置
            <span class="code-keyword">2.</span> 选择数据源 (百度/高德等)
            <span class="code-keyword">3.</span> 配置数据源 API 密钥
            <span class="code-keyword">4.</span> 保存设置并开始使用
          </div>
        </div>
      </div>
    </section>

    <!-- 插件优势展示 - 卡片式 -->
    <section class="data-showcase" id="data">
      <div class="section-header">
        <span class="en-subtitle">Plugin Advantages</span>
        <h2>插件优势</h2>
      </div>

      <div class="data-cards">
        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-globe"></i>
          </div>
          <div class="data-info">
            <h4>全球覆盖</h4>
            <span class="data-en">Global Coverage</span>
            <div class="data-value">200+ <small style="font-size: 0.5em; color: var(--text-secondary);">国家地区</small></div>
          </div>
        </div>

        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-laptop-code"></i>
          </div>
          <div class="data-info">
            <h4>多平台支持</h4>
            <span class="data-en">Multi-Platform</span>
            <div class="data-value">10+ <small style="font-size: 0.5em; color: var(--text-secondary);">支持平台</small></div>
          </div>
        </div>

        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-database"></i>
          </div>
          <div class="data-info">
            <h4>多数据源支持</h4>
            <span class="data-en">Multiple Data Sources</span>
            <div class="data-value">10+ <small style="font-size: 0.5em; color: var(--text-secondary);">数据源</small></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const searchIP = () => {
  const input = document.getElementById('ipInput')
  const btn = document.querySelector('.search-btn')

  if (!input.value) {
    input.style.borderColor = 'var(--primary-red)'
    input.placeholder = '请输入有效的 IP 地址...'
    return
  }

  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 0.5rem;"></i>查询中...'

  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-check" style="margin-right: 0.5rem;"></i>已发送'
    btn.style.background = '#22C55E'

    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-bolt" style="margin-right: 0.5rem;"></i>查询'
      btn.style.background = ''
    }, 2000)
  }, 800)
}

onMounted(() => {
  document.getElementById('ipInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchIP()
    }
  })
})
</script>

<style scoped>
/* 开源 REMIX ICON (MIT 协议)，使用国内 CDN 加速 */
@import url('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-red: #DC2626;
  --deep-red: #991B1B;
  --light-red: #FEE2E2;
  --accent-red: #EF4444;
  --dark-bg: #0A0A0A;
  --card-bg: rgba(220, 38, 38, 0.05);
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --border-red: rgba(220, 38, 38, 0.3);
}

@font-face {
  font-family: 'Inter';
  src: url('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/inter/3.19.3/inter-vietnamese-400-normal.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/inter/3.19.3/inter-vietnamese-700-normal.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  background-color: var(--dark-bg);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}



/* 主视觉区域 - 超大字体 */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 5% 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid var(--border-red);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--accent-red);
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero h1 {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 900;
  line-height: 0.9;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #FFFFFF 0%, rgba(220, 38, 38, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--text-secondary);
  text-align: center;
  max-width: 600px;
  margin-bottom: 3rem;
  font-weight: 400;
}

.hero-subtitle .highlight {
  color: var(--primary-red);
  font-weight: 600;
}

/* 搜索框 - 超大视觉元素 */
.search-container {
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 10;
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid var(--border-red);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.search-box:focus-within {
  border-color: var(--primary-red);
  box-shadow: 0 0 40px rgba(220, 38, 38, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.search-box i {
  font-size: 1.5rem;
  color: var(--primary-red);
  margin-right: 1rem;
}

.search-box input {
  flex: 1;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.25rem;
  outline: none;
  font-family: inherit;
}

.search-box input::placeholder {
  color: var(--text-secondary);
}

.search-btn {
  padding: 0.75rem 2rem;
  background: var(--primary-red);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.search-btn:hover {
  background: var(--deep-red);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
}

/* 功能特性区域 */
.features {
  padding: 8rem 5%;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-header .en-subtitle {
  font-size: 0.875rem;
  color: var(--primary-red);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
}

/* 卡片网格 - 不使用表格 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--border-red);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-red), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(220, 38, 38, 0.6);
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.1);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--primary-red);
  border: 1px solid var(--border-red);
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.feature-card .en-name {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: block;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

.feature-meta {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--accent-red);
}

.feature-meta span {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* 插件集成演示区域 */
.plugin-demo {
  padding: 6rem 5%;
  background: linear-gradient(180deg, transparent 0%, rgba(220, 38, 38, 0.03) 50%, transparent 100%);
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.demo-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.demo-content .en-caption {
  font-size: 0.8rem;
  color: var(--primary-red);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  display: block;
}

.code-block {
  background: #111;
  border: 1px solid var(--border-red);
  border-radius: 12px;
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  position: relative;
}

.code-block::before {
  content: 'curl';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem;
  background: var(--primary-red);
  color: white;
  font-size: 0.75rem;
  border-bottom-left-radius: 8px;
  font-family: inherit;
}

.code-content {
  color: #E5E5E5;
  line-height: 1.8;
}

.code-keyword {
  color: var(--primary-red);
}

.code-string {
  color: #22C55E;
}

/* 数据展示区域 - 卡片式而非表格 */
.data-showcase {
  padding: 6rem 5%;
}

.data-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.data-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s;
}

.data-card:hover {
  border-color: var(--border-red);
  background: var(--card-bg);
}

.data-icon {
  width: 48px;
  height: 48px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-red);
  font-size: 1.25rem;
  flex-shrink: 0;
}

.data-info h4 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.data-info .data-en {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.data-value {
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-red);
}



/* 响应式 */
@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }

  .live-stats {
    gap: 2rem;
  }
}

/* 动画 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.live-indicator::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #22C55E;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
</style>
