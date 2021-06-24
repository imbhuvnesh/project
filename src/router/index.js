import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StateDetail from '../views/StateDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/state-detail/:id',
    name: 'StateDetail',
    component: StateDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
