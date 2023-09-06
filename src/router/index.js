import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
    children: [
      {
        path: 'todo',
        component: () => import('@/views/demo/todo/index.vue')
      },
      {
        path: 'carousel',
        component: () => import('@/views/demo/carousel/index.vue')
      },
      {
        path: 'longList',
        component: () => import('@/views/demo/longList/index.vue')
      },
      {
        path: 'loading',
        component: () => import('@/views/demo/loading/index.vue')
      }
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;