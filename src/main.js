import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 ElementUI组件库
import ElementUI from 'element-ui'
// 导入ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入公共样式
import '@/assets/common.css'

// 1. 把axios绑定到Vue的原型上
import axios from 'axios'
Vue.prototype.axios = axios

// 2. 配置axios的全局的默认baseURL
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 3. 配置axios的拦截器
// 拦截器：当发送axios请求的时候，首先会经过这个拦截器
// 请求拦截器： 拦截请求
// 响应拦截器： 拦截响应
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log('haha ,请求被我拦截到了把', config)
  // config.headers.aa = 'bb'
  // config.baseURL = 'http://localhost:8888/api/private/v1/'
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  // console.log('拦截到了响应', res)
  // 直接返回res.data，对应的就是服务器返回的数据
  return res.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

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
