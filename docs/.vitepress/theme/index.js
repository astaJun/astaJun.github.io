// https://github.com/vuejs/vitepress/issues/603
// 官方示例 ： https://github.com/brc-dd
import DefaultTheme from 'vitepress/theme'
import './index.css'
import comment from "../../components/Gitalk.vue"
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("git-talk", comment)
    // app.use(ArcoVue)
  }
}
