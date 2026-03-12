---
layout: page
---

<div class="custom-home">
  <!-- 您的自定义 HTML 内容 -->
  <header class="hero">
    <h1>Apipseach</h1>
    <p class="tagline">API搜索与管理平台</p>
    <p class="description">高效、智能的API搜索解决方案</p>
    <div class="actions">
      <a href="/guide/" class="btn primary">开始使用</a>
      <a href="/guide/" class="btn secondary">了解更多</a>
    </div>
  </header>

  <div class="features">
    <div class="feature">
      <div class="icon">🔍</div>
      <h3>智能搜索</h3>
      <p>基于AI的API搜索，快速找到您需要的API</p>
    </div>
    <div class="feature">
      <div class="icon">📊</div>
      <h3>完整管理</h3>
      <p>一站式API管理，包括文档、测试和监控</p>
    </div>
    <!-- 更多功能卡片 -->
  </div>
</div>

<style>
/* 自定义样式 */
.custom-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
}

.hero h1 {
  font-size: 3rem;
  background: linear-gradient(120deg, #bd34fe, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.5rem;
  color: #666;
}

.actions {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: 500;
  transition: all 0.3s;
}

.btn.primary {
  background: linear-gradient(120deg, #bd34fe, #41d1ff);
  color: white;
}

.btn.secondary {
  border: 2px solid #41d1ff;
  color: #41d1ff;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #f9f9f9;
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>