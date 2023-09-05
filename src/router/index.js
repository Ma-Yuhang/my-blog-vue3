import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/todo',
    component: () => import('../views/todo/index.vue')
  },
  {
    path: '/carousel',
    component: () => import('../views/carousel/index.vue')
  },
  {
    path: '/longList',
    component: () => import('../views/longList/index.vue')
  },
  {
    path: '/loading',
    component: () => import('../views/loading/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;