import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './styles/index.css'
import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'
import vpSearch from './log.vue'
import { h } from 'vue'
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       * 更多插槽参考
       * 
       * https://github.com/vuejs/vitepress/blob/main/docs/guide/theme-introduction.md 
       */
      // 'aside-top': () => h(vpSearch)
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.component(Button.name, Button)
  }
}
