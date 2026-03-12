<template>
  <div class="home-container">

    <!-- 主视觉 -->
    <section class="hero">
      <div class="hero-badge">
        <span class="live-indicator">系统运行正常</span>
        <span>|</span>
        <span>v2.0 正式发布</span>
      </div>

      <h1>IP SEARCH</h1>

      <p class="hero-subtitle">
        毫秒级精准定位 · 支持 <span class="highlight">IPv4/IPv6</span> · 全球节点覆盖<br>
        <span style="font-size: 0.9em; opacity: 0.7;">High-Performance IP Geolocation API for Modern Applications</span>
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

      <div class="live-stats">
        <div class="stat-item">
          <span class="stat-number" id="queryCount">2.5M+</span>
          <span class="stat-label">日查询次数<br><span style="font-size: 0.7rem; opacity: 0.5;">Daily Queries</span></span>
        </div>
        <div class="stat-item">
          <span class="stat-number" id="responseTime">12<span style="font-size: 0.3em; color: var(--text-secondary);">ms</span></span>
          <span class="stat-label">平均响应时间<br><span style="font-size: 0.7rem; opacity: 0.5;">Avg Response</span></span>
        </div>
        <div class="stat-item">
          <span class="stat-number" id="accuracy">99.9<span style="font-size: 0.3em; color: var(--text-secondary);">%</span></span>
          <span class="stat-label">国家级别准确率<br><span style="font-size: 0.7rem; opacity: 0.5;">Accuracy Rate</span></span>
        </div>
      </div>
    </section>

    <!-- 功能特性 -->
    <section class="features" id="features">
      <div class="section-header">
        <span class="en-subtitle">Core Features</span>
        <h2>核心能力</h2>
      </div>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <span class="en-name">Lightning Fast</span>
          <h3>毫秒级响应</h3>
          <p>基于 Anycast 全球加速网络，平均响应时间低于 50ms。支持高并发查询，轻松应对百万级请求。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-server"></i> 全球节点</span>
            <span><i class="fa-solid fa-gauge-high"></i> 50ms SLA</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <span class="en-name">Privacy First</span>
          <h3>隐私优先设计</h3>
          <p>严格遵守无日志政策，不存储任何查询记录。支持 GDPR 合规，通过 HTTPS 加密传输确保数据安全。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-lock"></i> HTTPS Only</span>
            <span><i class="fa-solid fa-user-secret"></i> No Logs</span>
          </div>
        </div>

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
            <i class="fa-solid fa-code"></i>
          </div>
          <span class="en-name">Developer Friendly</span>
          <h3>开发者友好</h3>
          <p>RESTful API 设计，返回标准 JSON 格式。无需注册即可使用免费额度，提供多语言 SDK 支持。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-key"></i> 免注册</span>
            <span><i class="fa-solid fa-laptop-code"></i> 多语言 SDK</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-mask"></i>
          </div>
          <span class="en-name">Threat Detection</span>
          <h3>威胁情报检测</h3>
          <p>智能识别代理、VPN、Tor 节点及恶意 IP。集成实时威胁情报库，助力安全防护与欺诈检测。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-user-shield"></i> VPN 检测</span>
            <span><i class="fa-solid fa-ban"></i> 威胁拦截</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-coins"></i>
          </div>
          <span class="en-name">Free Tier</span>
          <h3>免费额度充足</h3>
          <p>每月 10,000 次免费查询额度，支持商业用途。无需信用卡，无自动续费，超出部分按量计费。</p>
          <div class="feature-meta">
            <span><i class="fa-solid fa-gift"></i> 10K/月免费</span>
            <span><i class="fa-solid fa-building"></i> 商用许可</span>
          </div>
        </div>
      </div>
    </section>

    <!-- API演示 -->
    <section class="api-demo" id="api">
      <div class="demo-container">
        <div class="demo-content">
          <span class="en-caption">Simple Integration</span>
          <h2>极简集成<br>一行代码即可</h2>
          <p style="color: var(--text-secondary); margin-top: 1rem; line-height: 1.8;">
            无需复杂的配置，通过简单的 HTTP GET 请求即可获取详细的 IP 地理位置信息。
            支持字段筛选，只返回您需要的数据，减少带宽消耗。
          </p>
          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <a href="#" style="padding: 0.875rem 1.5rem; background: var(--primary-red); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
              <i class="fa-solid fa-book" style="margin-right: 0.5rem;"></i>查看文档
            </a>
            <a href="#" style="padding: 0.875rem 1.5rem; border: 1px solid var(--border-red); color: var(--text-primary); text-decoration: none; border-radius: 8px; font-weight: 600;">
              <i class="fa-brands fa-github" style="margin-right: 0.5rem;"></i>GitHub
            </a>
          </div>
        </div>

        <div class="code-block">
          <div class="code-content">
            <span class="code-keyword">curl</span> -X GET <span class="code-string">'https://api.apip.search/v1/lookup?ip=8.8.8.8'</span> \
            -H <span class="code-string">'Accept: application/json'</span>

            <span style="color: #666;">// 返回结果</span>
            {
            <span class="code-string">"ip"</span>: <span class="code-string">"8.8.8.8"</span>,
            <span class="code-string">"country"</span>: <span class="code-string">"美国"</span>,
            <span class="code-string">"country_code"</span>: <span class="code-string">"US"</span>,
            <span class="code-string">"region"</span>: <span class="code-string">"加利福尼亚"</span>,
            <span class="code-string">"city"</span>: <span class="code-string">"山景城"</span>,
            <span class="code-string">"isp"</span>: <span class="code-string">"Google LLC"</span>,
            <span class="code-string">"lat"</span>: 37.386,
            <span class="code-string">"lon"</span>: -122.0838,
            <span class="code-string">"timezone"</span>: <span class="code-string">"America/Los_Angeles"</span>,
            <span class="code-string">"is_proxy"</span>: false,
            <span class="code-string">"is_vpn"</span>: false
            }
          </div>
        </div>
      </div>
    </section>

    <!-- 数据展示 - 卡片式 -->
    <section class="data-showcase" id="data">
      <div class="section-header">
        <span class="en-subtitle">Data Coverage</span>
        <h2>数据覆盖范围</h2>
      </div>

      <div class="data-cards">
        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-earth-asia"></i>
          </div>
          <div class="data-info">
            <h4>全球覆盖</h4>
            <span class="data-en">Global Coverage</span>
            <div class="data-value">200+ <small style="font-size: 0.5em; color: var(--text-secondary);">国家地区</small></div>
          </div>
        </div>

        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-city"></i>
          </div>
          <div class="data-info">
            <h4>城市精度</h4>
            <span class="data-en">City Level</span>
            <div class="data-value">250万+ <small style="font-size: 0.5em; color: var(--text-secondary);">城市位置</small></div>
          </div>
        </div>

        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-wifi"></i>
          </div>
          <div class="data-info">
            <h4>运营商数据</h4>
            <span class="data-en">ISP Database</span>
            <div class="data-value">8万+ <small style="font-size: 0.5em; color: var(--text-secondary);">运营商 ASN</small></div>
          </div>
        </div>

        <div class="data-card">
          <div class="data-icon">
            <i class="fa-solid fa-shield-virus"></i>
          </div>
          <div class="data-info">
            <h4>威胁情报</h4>
            <span class="data-en">Threat Intel</span>
            <div class="data-value">实时 <small style="font-size: 0.5em; color: var(--text-secondary);">更新频率</small></div>
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

const animateValue = (id, start, end, duration) => {
  const obj = document.getElementById(id)
  const range = end - start
  const minTimer = 50
  let stepTime = Math.abs(Math.floor(duration / range))
  stepTime = Math.max(stepTime, minTimer)
  const startTime = new Date().getTime()
  const endTime = startTime + duration
  let timer

  const run = () => {
    const now = new Date().getTime()
    const remaining = Math.max((endTime - now) / duration, 0)
    const value = Math.round(end - (remaining * range))
    obj.innerHTML = value + (id === 'accuracy' ? '<span style="font-size: 0.3em; color: var(--text-secondary);">%</span>' :
      id === 'responseTime' ? '<span style="font-size: 0.3em; color: var(--text-secondary);">ms</span>' :
        'M+')
    if (value === end) {
      clearInterval(timer)
    }
  }

  timer = setInterval(run, stepTime)
  run()
}

onMounted(() => {
  animateValue("queryCount", 0, 2.5, 2000)
  animateValue("responseTime", 0, 12, 1500)
  animateValue("accuracy", 0, 99.9, 2000)

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

/* 实时数据展示卡片 */
.live-stats {
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  color: var(--primary-red);
  line-height: 1;
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
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

/* API演示区域 */
.api-demo {
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
