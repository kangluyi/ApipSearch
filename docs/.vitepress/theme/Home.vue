<template>
  <div class="home-wrapper">
    <!-- 动态背景 -->
    <div class="bg-decoration">
      <div class="gradient-bg"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-badge" data-animate="fade-up">
          <i class="fa-solid fa-location-dot"></i>
          <span>Flexible IP Geolocation Plugin</span>
        </div>

        <h1 class="hero-title" data-animate="fade-up" data-delay="100">
          ApipSearch
        </h1>

        <p class="hero-desc" data-animate="fade-up" data-delay="200">
          现代化 IP 地址定位插件
          <br />
          支持多平台、多数据源与 IPv4 / IPv6 双栈查询
        </p>

        <div class="hero-actions" data-animate="fade-up" data-delay="300">
          <a class="vp-button brand" href="/guide/start">
            <i class="fa-solid fa-rocket"></i>
            快速开始
          </a>

          <a class="vp-button alt" href="/guide/">
            <i class="fa-solid fa-book"></i>
            查看文档
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

      <!-- 装饰元素 -->
      <div class="hero-decoration">
        <div class="float-card card-1">
          <i class="fa-solid fa-globe"></i>
          <span>IPv6 Ready</span>
        </div>
        <div class="float-card card-2">
          <i class="fa-solid fa-shield-halved"></i>
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
        >
          <div class="feature-icon-wrapper">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
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
          <div class="step-number">{{ index + 1 }}</div>
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
          <a class="vp-button brand" href="/guide/start">
            立即开始
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { number: '200+', label: '国家地区' },
  { number: '10+', label: '支持平台' },
  { number: '10+', label: '数据源' }
]

const features = [
  {
    icon: 'fa-solid fa-globe',
    title: 'IPv4 / IPv6 双栈支持',
    desc: '自动识别 IPv4 与 IPv6，覆盖全球海量位置数据。',
    tags: ['IPv4', 'IPv6', '全球覆盖']
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: '多平台兼容',
    desc: '支持 WordPress、Shopify、Discord 等平台。',
    tags: ['WordPress', 'Shopify', 'Discord']
  },
  {
    icon: 'fa-solid fa-database',
    title: '灵活数据源',
    desc: '支持百度、高德等数据源自由切换。',
    tags: ['百度', '高德', '更多']
  },
  {
    icon: 'fa-solid fa-bolt',
    title: '高性能响应',
    desc: '低延迟查询与高并发支持。',
    tags: ['低延迟', '高并发']
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: '安全可靠',
    desc: '支持 HTTPS 与隐私保护。',
    tags: ['HTTPS', '安全']
  },
  {
    icon: 'fa-solid fa-code',
    title: '快速集成',
    desc: '简单 API 与完整文档。',
    tags: ['REST API', '易集成']
  }
]

const steps = [
  {
    title: '安装插件',
    desc: '通过包管理器或直接下载安装'
  },
  {
    title: '配置数据源',
    desc: '选择适合你的 IP 数据源'
  },
  {
    title: '集成使用',
    desc: '通过简单的 API 调用进行查询'
  }
]

// 简单的滚动动画
if (typeof window !== 'undefined') {
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0
          setTimeout(() => {
            entry.target.classList.add('animate-in')
          }, parseInt(delay))
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el)
    })
  }, 100)
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

.home-wrapper {
  position: relative;
  overflow: hidden;
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
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(113, 142, 175, 0.08) 0%,
    transparent 50%
  );
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
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem;
}

.hero-inner {
  max-width: 900px;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.25rem;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-badge.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: clamp(3.5rem, 12vw, 7rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: 1.75rem;
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
  font-size: 1.35rem;
  line-height: 2;
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
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
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 4rem;
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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-actions .vp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(113, 142, 175, 0.3);
}

/* Stats */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-stats.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stat-item {
  padding: 2rem 1.5rem;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 10px 30px rgba(113, 142, 175, 0.15);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
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
  padding: 6rem 1.5rem 8rem;
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
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
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
  box-shadow: 0 20px 50px rgba(113, 142, 175, 0.2);
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
    rgba(113, 142, 175, 0.15) 0%,
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
  background: rgba(113, 142, 175, 0.2);
}

/* Quick Start */
.quick-start {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 1.5rem 8rem;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 4rem 0;
  position: relative;
}

.step-item {
  flex: 1;
  text-align: center;
  position: relative;
  padding: 0 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.step-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 30px rgba(113, 142, 175, 0.3);
  position: relative;
  z-index: 2;
}

.step-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.step-content p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.step-connector {
  position: absolute;
  top: 30px;
  left: calc(50% + 40px);
  width: calc(100% - 80px);
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-soft), var(--vp-c-brand-1), var(--vp-c-brand-soft));
}

/* CTA */
.cta-box {
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-light));
  border-radius: 28px;
  padding: 4rem;
  text-align: center;
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
  margin-bottom: 2rem;
}

.cta-actions {
  position: relative;
  z-index: 1;
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
  .hero-decoration {
    display: none;
  }
  
  .steps-container {
    flex-direction: column;
    gap: 3rem;
  }
  
  .step-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 4rem 1.5rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-actions a {
    width: 100%;
    justify-content: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-box {
    padding: 3rem 1.5rem;
  }
  
  .cta-content h3 {
    font-size: 1.5rem;
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
