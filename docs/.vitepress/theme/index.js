// Theme entry point for VitePress
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import Home from './Home.vue'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}
