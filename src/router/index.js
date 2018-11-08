import Vue from 'vue'
import Router from 'vue-router'

// 导入Login组件
import Login from '@/components/Login.vue'

// 导入Home组件
import Home from '@/components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 给路由对象设置导航守卫
// to: 去哪儿
// from: 从哪儿来
// next() : 指定跳转到哪个组件  next():表示放行  next(false)  next('/login')
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 判断是否有token
  const token = localStorage.getItem('token')
  // console.log(to.path)
  if (to.path === '/login' || token) {
    // 有token 放行
    next()
  } else {
    // 没有token, 去登录
    next('/login')
  }
})

// 导出路由对象
export default router
