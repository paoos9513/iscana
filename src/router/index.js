import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/product/Product.vue'
import Admin from '../views/admin/Admin.vue';
import AddProduct from '../views/product/AddProduct.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct
    },
  ]
})

export default router
