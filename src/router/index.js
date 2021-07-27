import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home'
// import Login from '../views/login/Login'
// import Shop from '../views/shop/Shop'
// import Register from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home666" */ '../views/home/Home.vue')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation.vue')
  },
  {
    path: '/orderList/',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList.vue')
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop666" */ '../views/shop/Shop.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import(/* webpackChunkName: "register666" */ '../views/register/Register.vue'),
    beforeEnter (to, from, next) {
      const { logined } = localStorage
      logined ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import(/* webpackChunkName: "login666" */ '../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      const { logined } = localStorage
      logined ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  const { logined } = localStorage
  const { name } = to
  const isToLoginOrRegister = (name === 'Login' || name === 'Register');
  (logined || isToLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
