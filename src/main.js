import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 ElementUI组件库
import ElementUI from 'element-ui'
// 导入ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入公共样式
import '@/assets/common.css'

// 使用elementUI这个插件
Vue.use(ElementUI)

Vue.config.productionTip = false

// 禁用eslint的no-new的规则
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
