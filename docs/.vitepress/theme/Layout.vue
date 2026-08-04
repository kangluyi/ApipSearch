<template>
  <DefaultTheme.Layout>
    <template #footer>
      <footer class="footer">
        <div class="footer-content">
          <p class="footer-icp">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank" 
              rel="noopener noreferrer"
              class="icp-link"
            >
              鲁ICP备2026008616号-2
            </a>
          </p>
          <p class="footer-copyright">
            Copyright © 2025-2026
            <a
              href="https://moruteaven.com/"
              target="_blank" 
              rel="noopener noreferrer"
              class="author-link"
            >
              抹露茶柒
            </a>
          </p>
        </div>
      </footer>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 24px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  transition: background-color 0.3s ease;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.footer-copyright {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.author-link {
  color: var(--vp-c-brand-1);
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.author-link:hover {
  color: var(--vp-c-brand-light);
  text-decoration: underline;
}

.footer-icp {
  margin: 0;
}

.icp-link {
  color: var(--vp-c-text-2);
  font-size: 13px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.icp-link:hover {
  color: var(--vp-c-brand-1);
}
</style>
