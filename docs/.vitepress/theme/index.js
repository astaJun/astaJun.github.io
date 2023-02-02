// https://github.com/vuejs/vitepress/issues/603
// 官方示例 ： https://github.com/brc-dd
import DefaultTheme from 'vitepress/theme'
import ArcoVue from '@arco-design/web-vue'
// import '@arco-design/web-vue/dist/arco.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.use(ArcoVue)
  }
}
