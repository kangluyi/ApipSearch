// Theme entry point for VitePress
import DefaultTheme from 'vitepress/theme'
import GreenCandyTheme from 'greencandy'
import 'greencandy/styles'
import './styles/vars.css'
import Home from './Home.vue'

export default {
  extends: DefaultTheme,
  ...GreenCandyTheme,
  enhanceApp(ctx) {
    GreenCandyTheme.enhanceApp?.(ctx)
    ctx.app.component('Home', Home)
  }
}
