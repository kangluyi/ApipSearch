// Theme entry point for VitePress
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import Home from './Home.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}