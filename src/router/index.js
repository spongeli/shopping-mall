import Vue from 'vue'
// 1.导入
import VueRouter from 'vue-router'
// 2。挂载
Vue.use(VueRouter)

// 导入文件（懒加载文件）
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Car = ()=> import('views/car/Car')
const Mine = ()=> import('views/mine/Mine')

const routes = [
  {
    path:"",
    redirect: '/home'
  },
  {
    path:"/home",
    component: Home
  },
  {
    path:"/category",
    component: Category
  },
  {
    path:"/car",
    component: Car
  },
  {
    path:"/mine",
    component: Mine
  },
]

// 3. new一个vueRouter
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 4.导出
export default router
// 5.在main.js里注册