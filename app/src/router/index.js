import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingList from '../views/ShoppingList.vue'
import Orders from '../views/Orders.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Thanks from '../views/Thanks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    component: ShoppingList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
