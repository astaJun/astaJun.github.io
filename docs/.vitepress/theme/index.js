// https://github.com/vuejs/vitepress/issues/603
// 官方示例 ： https://github.com/brc-dd
import DefaultTheme from 'vitepress/theme'
import './index.css'
import comment from "../../components/Gitalk.vue"

import MyLayout from '../../components/Layout.vue'
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component("git-talk", comment)
    // app.use(ArcoVue)
  }
}
