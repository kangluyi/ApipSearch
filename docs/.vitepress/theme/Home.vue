<template>
  <div class="home-wrapper">
    <!-- 动态背景 -->
    <div class="bg-decoration">
      <div class="gradient-bg"></div>
      <div class="grid-bg"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <!-- Logo -->
          <div class="hero-logo" data-animate="fade-up">
            <img src="/logo.png" alt="ApipSearch" width="100" height="100" />
          </div>

          <div class="hero-badge" data-animate="fade-up">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            <span>Flexible IP Geolocation Plugin</span>
          </div>

          <h1 class="hero-title" data-animate="fade-up" data-delay="100">
            ApipSearch
          </h1>

          <p class="hero-desc" data-animate="fade-up" data-delay="200">
            面向 CMS、独立站和机器人场景的 IP 地址定位插件，支持 IPv4 / IPv6 双栈查询、多数据源切换与快速部署。
          </p>

          <div class="hero-actions" data-animate="fade-up" data-delay="300">
            <a class="vp-button brand" href="/guide/" aria-label="查看 ApipSearch 快速开始指南">
              <i class="fa-solid fa-rocket" aria-hidden="true"></i>
              快速开始
            </a>

            <a class="vp-button alt" href="/guide/xunrui/" aria-label="查看迅睿 CMS 插件说明">
              <i class="fa-solid fa-puzzle-piece" aria-hidden="true"></i>
              迅睿插件
            </a>
          </div>

          <!-- 统计数据 -->
          <div class="hero-stats" data-animate="fade-up" data-delay="400">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="hero-panel" data-animate="fade-up" data-delay="350" aria-label="IP 查询结果预览">
          <div class="lookup-card">
            <div class="panel-head">
              <div>
                <span class="eyebrow">Live Preview</span>
                <strong>IP Lookup</strong>
              </div>
              <span class="status-pill">
                <span class="status-dot" aria-hidden="true"></span>
                就绪
              </span>
            </div>

            <div class="query-block">
              <span>请求示例</span>
              <code>GET /api/ip?ip=8.8.8.8</code>
            </div>

            <div class="response-grid">
              <div class="response-item">
                <span>IP 类型</span>
                <strong>IPv4</strong>
              </div>
              <div class="response-item">
                <span>定位</span>
                <strong>美国</strong>
              </div>
              <div class="response-item">
                <span>数据源</span>
                <strong>自动路由</strong>
              </div>
              <div class="response-item">
                <span>响应</span>
                <strong>&lt; 120ms</strong>
              </div>
            </div>

            <div class="source-row">
              <span>百度地图</span>
              <span>高德地图</span>
              <span>自定义源</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 装饰元素 -->
      <div class="hero-decoration">
        <div class="float-card card-1">
          <i class="fa-solid fa-globe" aria-hidden="true"></i>
          <span>IPv6 Ready</span>
        </div>
        <div class="float-card card-2">
          <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
          <span>安全可靠</span>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Core Features</span>
        <h2>为现代应用而设计</h2>
        <p>更轻量、更灵活、更适合现代 Web 应用集成</p>
      </div>

      <div class="feature-grid">
        <div
          class="feature-card"
          v-for="(feature, index) in features"
          :key="index"
          data-animate="fade-up"
          :data-delay="index * 100"
          @pointermove="handleFeaturePointerMove"
        >
          <div class="feature-icon-wrapper">
            <div class="feature-icon">
              <i :class="feature.icon" aria-hidden="true"></i>
            </div>
            <div class="feature-glow"></div>
          </div>

          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>

          <div class="feature-tags">
            <span
              v-for="tag in feature.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>

          <div class="feature-hover-effect"></div>
        </div>
      </div>
    </section>

    <!-- Scenarios Section -->
    <section class="scenarios">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Use Cases</span>
        <h2>把定位能力放进真实业务</h2>
        <p>从插件安装到接口查询，适合需要快速识别访客来源的站点和系统。</p>
      </div>

      <div class="scenario-grid">
        <article
          class="scenario-card"
          v-for="(scenario, index) in scenarios"
          :key="scenario.title"
          data-animate="fade-up"
          :data-delay="index * 100"
        >
          <div class="scenario-icon">
            <i :class="scenario.icon" aria-hidden="true"></i>
          </div>
          <div>
            <h3>{{ scenario.title }}</h3>
            <p>{{ scenario.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Quick Start Section -->
    <section class="quick-start">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Quick Start</span>
        <h2>简单几步，快速上手</h2>
      </div>

      <div class="steps-container">
        <div
          class="step-item"
          v-for="(step, index) in steps"
          :key="index"
          data-animate="fade-up"
          :data-delay="index * 100"
        >
          <div class="step-top">
            <div class="step-number">0{{ index + 1 }}</div>
          </div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
          <div class="step-connector" v-if="index < steps.length - 1"></div>
        </div>
      </div>

      <div class="cta-box" data-animate="fade-up">
        <div class="cta-content">
          <h3>准备好开始了吗？</h3>
          <p>加入我们，体验最现代的 IP 定位服务</p>
        </div>
        <div class="cta-actions">
          <a class="vp-button brand" href="/guide/">
            立即开始
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const stats = [
  { number: '双栈', label: 'IPv4 / IPv6 查询' },
  { number: '多源', label: '百度 / 高德可切换' },
  { number: '跨平台', label: 'CMS / 独立站 / Bot' }
]

const features = [
  {
    icon: 'fa-solid fa-globe',
    title: '自动识别 IP 类型',
    desc: '同一套接口处理 IPv4 与 IPv6，减少平台接入时的兼容成本。',
    tags: ['IPv4', 'IPv6', '自动识别']
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: '插件化平台接入',
    desc: '面向 CMS、独立站和机器人等场景，按平台逐步扩展集成方式。',
    tags: ['CMS', '独立站', 'Bot']
  },
  {
    icon: 'fa-solid fa-database',
    title: '数据源灵活切换',
    desc: '支持按可用性和业务需求切换百度、高德或自定义数据源。',
    tags: ['百度', '高德', '自定义']
  },
  {
    icon: 'fa-solid fa-bolt',
    title: '轻量快速部署',
    desc: '保留核心定位能力，减少首轮接入步骤，适合快速上线验证。',
    tags: ['轻量', '快速部署']
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: '隐私友好',
    desc: '只围绕查询所需字段组织结果，便于在站点侧做最小化展示。',
    tags: ['HTTPS', '最小化']
  },
  {
    icon: 'fa-solid fa-code',
    title: '清晰集成路径',
    desc: '通过指南和示例降低接入门槛，让开发者更快完成验证。',
    tags: ['文档', '示例']
  }
]

const scenarios = [
  {
    icon: 'fa-solid fa-map-location-dot',
    title: '访客来源识别',
    desc: '在会员、订单或评论场景中识别 IP 来源，辅助运营判断。'
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: '区域化展示',
    desc: '根据定位结果展示差异化提示、入口或内容模块。'
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    title: '异常访问辅助判断',
    desc: '结合业务规则，为异常地区访问、机器人请求提供参考信号。'
  }
]

const steps = [
  {
    title: '选择接入方式',
    desc: '根据站点类型选择插件、接口或自定义集成'
  },
  {
    title: '配置数据源',
    desc: '设置百度、高德或自定义数据源的调用参数'
  },
  {
    title: '开始查询展示',
    desc: '在页面、后台或业务流程中使用定位结果'
  }
]

const handleFeaturePointerMove = (event) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()

  card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
}

onMounted(() => {
  const targets = Array.from(document.querySelectorAll('[data-animate]'))

  if (!targets.length) return

  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!('IntersectionObserver' in window) || shouldReduceMotion) {
    targets.forEach(el => el.classList.add('animate-in'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return

      const delay = Number.parseInt(entry.target.dataset.delay || '0', 10)

      window.setTimeout(() => {
        entry.target.classList.add('animate-in')
      }, delay)

      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })

  targets.forEach(el => observer.observe(el))
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

.home-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  isolation: isolate;
}

/* 背景 */
.bg-decoration {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 18% 18%, rgba(22, 163, 74, 0.16) 0%, transparent 42%),
    radial-gradient(ellipse at 82% 12%, rgba(134, 239, 172, 0.18) 0%, transparent 38%),
    radial-gradient(ellipse at 50% 100%, rgba(22, 163, 74, 0.1) 0%, transparent 48%);
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(22, 163, 74, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(22, 163, 74, 0.08) 1px, transparent 1px);
  background-size: 72px 72px;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), transparent 68%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), transparent 68%);
}

.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(100px);
  opacity: 0.5;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--vp-c-brand-light), var(--vp-c-brand-lighter));
  bottom: -150px;
  left: -150px;
  animation-delay: -7s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: var(--vp-c-brand-soft);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -30px) scale(1.05); }
  50% { transform: translate(-10px, 20px) scale(0.95); }
  75% { transform: translate(30px, 10px) scale(1.02); }
}

/* Hero */
.hero {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - var(--vp-nav-height, 64px));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4.5rem, 9vw, 7rem) clamp(1.25rem, 5vw, 2rem) clamp(4rem, 8vw, 6rem);
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 440px);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
  max-width: min(1160px, 100%);
  width: 100%;
  text-align: left;
}

.hero-copy {
  min-width: 0;
}

.hero-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 0 1.25rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-logo.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-logo img {
  display: block;
  width: clamp(76px, 12vw, 100px);
  height: clamp(76px, 12vw, 100px);
  margin: 0;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  max-width: 100%;
  padding: 0.6rem 1.25rem;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-badge.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge span {
  min-width: 0;
}

.hero-title {
  font-size: clamp(3.2rem, 7.8vw, 6.75rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: 1.35rem;
  background: linear-gradient(
    135deg,
    var(--vp-c-text-1) 0%,
    var(--vp-c-brand-1) 50%,
    var(--vp-c-brand-light) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-desc {
  max-width: 680px;
  margin: 0 0 2.25rem;
  font-size: clamp(1.02rem, 1.6vw, 1.22rem);
  line-height: 1.85;
  color: var(--vp-c-text-2);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-desc.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-actions {
  display: flex;
  justify-content: flex-start;
  gap: 1.25rem;
  margin-bottom: 2.25rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-actions.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-actions .vp-button {
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 14px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.hero-actions .vp-button.brand {
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow:
    0 10px 30px rgba(22, 163, 74, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

.hero-actions .vp-button.alt {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(74, 222, 128, 0.28);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.hero-actions .vp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(22, 163, 74, 0.24);
}

.hero-actions .vp-button.brand:hover {
  border-color: rgba(255, 255, 255, 0.34);
  box-shadow:
    0 14px 36px rgba(22, 163, 74, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.hero-actions .vp-button.alt:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(74, 222, 128, 0.44);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(74, 222, 128, 0.12);
}

/* Stats */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: none;
  margin: 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-stats.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stat-item {
  min-width: 0;
  min-height: 118px;
  padding: 1.25rem;
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 72%),
    var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.stat-item:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 10px 30px rgba(22, 163, 74, 0.15);
}

.stat-number {
  font-size: 1.65rem;
  line-height: 1.1;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 查询预览 */
.hero-panel {
  position: relative;
  opacity: 0;
  transform: translateY(34px) scale(0.98);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-panel.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 10% -8% auto auto;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  filter: blur(42px);
  opacity: 0.8;
}

.lookup-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(74, 222, 128, 0.26);
  border-radius: 32px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04)),
    var(--vp-c-bg-soft);
  box-shadow:
    0 30px 80px rgba(15, 23, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(18px);
  padding: 1.25rem;
}

.lookup-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(22, 163, 74, 0.18), transparent 45%);
  pointer-events: none;
}

.panel-head,
.query-block,
.response-grid,
.source-row {
  position: relative;
  z-index: 1;
}

.panel-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.panel-head strong {
  display: block;
  margin-top: 0.25rem;
  color: var(--vp-c-text-1);
  font-size: 1.35rem;
}

.eyebrow {
  color: var(--vp-c-brand-1);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(34, 197, 94, 0.28);
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  font-size: 0.78rem;
  font-weight: 700;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.12);
}

.query-block {
  display: grid;
  gap: 0.55rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid rgba(74, 222, 128, 0.18);
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.06);
}

.query-block span {
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-weight: 700;
}

.query-block code {
  overflow-x: auto;
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
  white-space: nowrap;
}

.response-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.response-item {
  min-width: 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
}

.response-item span {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
}

.response-item strong {
  color: var(--vp-c-text-1);
  font-size: 0.98rem;
}

.source-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.source-row span {
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 700;
}

/* 装饰卡片 */
.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.float-card {
  position: absolute;
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  animation: floatCard 6s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.float-card i {
  color: var(--vp-c-brand-1);
  font-size: 1.2rem;
}

.card-1 {
  top: 25%;
  right: 10%;
  animation-delay: 0s;
}

.card-2 {
  bottom: 25%;
  left: 10%;
  animation-delay: -3s;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

/* Features */
.features {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem) clamp(3rem, 7vw, 5rem);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-tag {
  display: inline-block;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 1.25rem;
  background: var(--vp-c-brand-soft);
  border-radius: 999px;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 1rem 0;
  font-weight: 800;
}

.section-header p {
  color: var(--vp-c-text-2);
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
  min-width: 0;
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(30px);
  overflow: hidden;
}

.feature-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 20px 50px rgba(22, 163, 74, 0.2);
}

.feature-card:hover .feature-glow {
  opacity: 1;
}

.feature-card:hover .feature-hover-effect {
  opacity: 1;
}

.feature-hover-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(22, 163, 74, 0.15) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  color: white;
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(-5deg);
}

.feature-glow {
  position: absolute;
  inset: -10px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 30px;
}

.feature-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.35rem;
  font-weight: 700;
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.feature-tags {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.feature-card:hover .tag {
  background: rgba(22, 163, 74, 0.2);
}

/* Scenarios */
.scenarios {
  position: relative;
  z-index: 1;
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 1.5rem) clamp(4rem, 8vw, 6rem);
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.scenario-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  min-width: 0;
  padding: 1.35rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 70%),
    var(--vp-c-bg-soft);
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.08);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.scenario-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.scenario-card:hover {
  transform: translateY(-6px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 18px 48px rgba(22, 163, 74, 0.16);
}

.scenario-icon {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 1.05rem;
}

.scenario-card h3 {
  margin-bottom: 0.45rem;
  font-size: 1.05rem;
  font-weight: 750;
}

.scenario-card p {
  color: var(--vp-c-text-2);
  font-size: 0.93rem;
  line-height: 1.75;
}

/* Quick Start */
.quick-start {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 5rem) clamp(1rem, 4vw, 1.5rem) clamp(5rem, 10vw, 8rem);
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 4rem 0 2.5rem;
  position: relative;
}

.step-item {
  position: relative;
  padding: 1.6rem;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(14px);
  text-align: left;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.step-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 45%);
  pointer-events: none;
}

.step-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.step-item:hover {
  transform: translateY(-6px);
  border-color: rgba(148, 163, 184, 0.22);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.16);
}

.step-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  position: relative;
  z-index: 1;
}

.step-number {
  min-width: 48px;
  height: 32px;
  padding: 0 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-brand-soft);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.step-content {
  position: relative;
  z-index: 1;
}

.step-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  font-weight: 700;
  line-height: 1.35;
}

.step-content p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.75;
  max-width: 28ch;
}

.step-connector {
  display: none;
}

/* CTA */
.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  border-radius: 28px;
  padding: clamp(2.5rem, 5vw, 3.5rem);
  text-align: left;
  color: white;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-box.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.cta-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.cta-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.cta-actions {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
}

.cta-actions .vp-button {
  background: white;
  color: var(--vp-c-brand-1);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.cta-actions .vp-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* 响应式 */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    max-width: 820px;
    text-align: center;
  }

  .hero-logo {
    justify-content: center;
  }

  .hero-logo img {
    margin: 0 auto;
  }

  .hero-desc {
    margin-right: auto;
    margin-left: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    max-width: 720px;
    margin: 0 auto;
  }

  .stat-item {
    align-items: center;
    text-align: center;
  }

  .hero-panel {
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
  }

  .hero-decoration {
    display: none;
  }

  .orb {
    filter: blur(80px);
    opacity: 0.35;
  }

  .orb-1 {
    width: 420px;
    height: 420px;
    top: -160px;
    right: -170px;
  }

  .orb-2 {
    width: 360px;
    height: 360px;
    bottom: -140px;
    left: -150px;
  }

  .orb-3 {
    display: none;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
    max-width: 760px;
    margin: 0 auto;
  }
    
  .steps-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 3.5rem 1.25rem 4.5rem;
  }

  .hero-inner {
    gap: 2rem;
  }

  .hero-logo {
    margin-bottom: 1rem;
  }

  .hero-badge {
    gap: 0.5rem;
    padding: 0.55rem 1rem;
    font-size: 0.82rem;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2.75rem, 16vw, 4.5rem);
    letter-spacing: -0.04em;
    margin-bottom: 1.2rem;
  }

  .hero-desc {
    line-height: 1.75;
    margin-bottom: 2rem;
  }

  .hero-desc br {
    display: none;
  }
   
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 420px;
  }
   
  .stat-item {
    min-height: auto;
    padding: 1.25rem;
  }

  .stat-number {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }
   
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2.5rem;
  }
   
  .hero-actions .vp-button {
    width: 100%;
    max-width: 320px;
    justify-content: center;
    padding: 0.85rem 1.2rem;
  }

  .lookup-card {
    border-radius: 24px;
    padding: 1rem;
  }

  .panel-head {
    align-items: center;
  }

  .response-grid {
    gap: 0.7rem;
  }

  .features {
    padding: 4rem 1.25rem 3rem;
  }

  .scenarios {
    padding: 3rem 1.25rem 4rem;
  }

  .scenario-grid {
    gap: 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-header h2 {
    line-height: 1.15;
  }

  .section-header p {
    font-size: 1rem;
    line-height: 1.7;
  }
   
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .feature-card {
    padding: 1.5rem;
    border-radius: 20px;
  }

  .feature-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    font-size: 1.25rem;
  }

  .feature-card h3 {
    font-size: 1.15rem;
  }

  .quick-start {
    padding: 4.5rem 1.25rem 6rem;
  }

  .quick-start .section-header {
    margin-bottom: 2.25rem;
  }

  .steps-container {
    gap: 0.9rem;
    margin: 2.5rem 0 2rem;
  }

  .step-item {
    padding: 1.15rem 1rem;
    border-radius: 20px;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.1);
  }

  .step-top {
    margin-bottom: 1rem;
  }

  .step-number {
    min-width: 44px;
    height: 30px;
    padding: 0 0.8rem;
    font-size: 0.8rem;
  }

  .step-content h3 {
    font-size: 1.05rem;
    margin-bottom: 0.35rem;
    line-height: 1.35;
  }

  .step-content p {
    font-size: 0.9rem;
    line-height: 1.65;
    max-width: none;
  }
  
  .cta-box {
    flex-direction: column;
    padding: 3rem 1.5rem;
    border-radius: 24px;
    text-align: center;
  }
   
  .cta-content h3 {
    font-size: 1.5rem;
  }

  .cta-content p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .cta-actions .vp-button {
    width: 100%;
    max-width: 260px;
    justify-content: center;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem 4rem;
  }

  .hero-title {
    font-size: clamp(2.35rem, 15vw, 3.75rem);
  }

  .hero-desc {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .lookup-card {
    padding: 0.85rem;
  }

  .panel-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .response-grid {
    grid-template-columns: 1fr;
  }

  .query-block code {
    font-size: 0.8rem;
  }

  .hero-stats {
    gap: 0.75rem;
  }

  .features {
    padding: 3.5rem 1rem 2.75rem;
  }

  .scenarios {
    padding: 2.5rem 1rem 3.75rem;
  }

  .scenario-card {
    grid-template-columns: 1fr;
    padding: 1.15rem;
  }

  .section-tag {
    padding: 0.45rem 1rem;
    font-size: 0.78rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .feature-card {
    padding: 1.25rem;
  }

  .feature-tags {
    gap: 0.45rem;
  }

  .tag {
    padding: 0.35rem 0.7rem;
    font-size: 0.78rem;
  }

  .quick-start {
    padding: 4rem 1rem 5rem;
  }

  .steps-container {
    gap: 0.8rem;
  }

  .step-item {
    padding: 1rem 0.9rem;
    border-radius: 18px;
  }

  .step-top {
    margin-bottom: 0.85rem;
  }

  .step-number {
    min-width: 42px;
    height: 28px;
    padding: 0 0.75rem;
    font-size: 0.78rem;
  }

  .step-content h3 {
    font-size: 1rem;
  }

  .step-content p {
    font-size: 0.875rem;
  }

  .cta-box {
    padding: 2.25rem 1rem;
    border-radius: 20px;
  }

  .cta-content h3 {
    font-size: 1.35rem;
  }

  .cta-actions .vp-button {
    max-width: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orb,
  .float-card {
    animation: none !important;
  }

  [data-animate],
  .hero-panel,
  .feature-card,
  .scenario-card,
  .step-item,
  .cta-box {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  .hero-actions .vp-button:hover,
  .stat-item:hover,
  .feature-card:hover,
  .scenario-card:hover,
  .step-item:hover,
  .cta-actions .vp-button:hover {
    transform: none !important;
  }
}

/* 动画延迟 */
[data-delay="100"] { transition-delay: 100ms !important; }
[data-delay="200"] { transition-delay: 200ms !important; }
[data-delay="300"] { transition-delay: 300ms !important; }
[data-delay="400"] { transition-delay: 400ms !important; }
[data-delay="500"] { transition-delay: 500ms !important; }
[data-delay="600"] { transition-delay: 600ms !important; }
</style>
