import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StateDetail from '../views/StateDetail.vue';
import SubregionDetail from '../components/SubregionDetail.vue';

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
  },
  {
    path: '/subregion-detail/:id/:name',
    name: 'SubregionDetail',
    component: SubregionDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
