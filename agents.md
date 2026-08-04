# Agents Guide

## 项目概览

这是 ApipSearch 的官网兼文档站，基于 VitePress 构建，主题由 VitePress 默认主题和 `greencandy` 扩展组成。主要内容使用中文编写，面向 IP 地址定位插件、CMS 接入和相关集成说明。

## 目录说明

- `docs/`：VitePress 文档源文件。
- `docs/index.md`：站点首页入口，当前挂载自定义 `Home` 组件。
- `docs/guide/`：指南类文档页面。
- `docs/.vitepress/config.js`：VitePress 站点、导航、侧边栏、搜索和主题配置。
- `docs/.vitepress/theme/`：自定义主题入口、布局和首页组件。
- `docs/public/`：文档站静态资源。
- `html/`：构建输出目录，不要手动编辑。
- `node_modules/`：依赖目录，不要手动编辑。

## 常用命令

- `npm run dev`：启动本地开发服务。
- `npm run build`：构建生产静态站点，输出到 `html/`。
- `npm run preview`：预览构建后的站点。

## 编辑规则

- 文档页面优先放在 `docs/` 下，新增指南页面时同步检查 `docs/.vitepress/config.js` 的 `nav` 和 `sidebar`。
- 首页内容主要在 `docs/.vitepress/theme/Home.vue` 中维护；`docs/index.md` 只保留页面入口。
- 保持中文为主要文案风格，英文短语只用于产品名、技术名或视觉标签。
- 修改主题样式时优先沿用现有绿色品牌色、圆角、卡片和响应式布局风格。
- 不要直接修改 `html/` 或其他构建产物；需要更新输出时运行构建命令。
- 不要提交或编辑 `node_modules/`。

## 验证建议

- 修改 Markdown 文档后，至少运行 `npm run build` 检查链接、路由和构建错误。
- 修改主题组件或配置后，运行 `npm run dev` 做桌面端和移动端浏览检查，并运行 `npm run build` 确认生产构建可用。
- 如果新增静态资源，确认资源路径以 VitePress 公共目录规则访问，例如 `docs/public/logo.png` 对应 `/logo.png`。

## 内容约定

- 页面标题使用清晰的中文标题，避免过度营销化表达。
- 外部链接使用完整 URL，并尽量补充用途说明。
- 代码块、命令和路径使用 Markdown 代码格式。
- 新增页面时确保可从导航、侧边栏或现有页面链接访问，避免孤立文档。
