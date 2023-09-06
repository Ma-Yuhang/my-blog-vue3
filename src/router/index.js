import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
    name: 'demo',
    meta: { title: 'demo小案例' },
    children: [
      {
        path: 'todo',
        name: 'todo',
        component: () => import('@/views/demo/todo/index.vue'),
        meta: { title: 'todo事项动画' }
      },
      {
        path: 'carousel',
        name: 'carousel',
        component: () => import('@/views/demo/carousel/index.vue'),
        meta: { title: '轮播动画' }
      },
      {
        path: 'longList',
        name: 'longList',
        component: () => import('@/views/demo/longList/index.vue'),
        meta: { title: '长列表优化' }
      },
      {
        path: 'loading',
        name: 'loading',
        component: () => import('@/views/demo/loading/index.vue'),
        meta: { title: '超好看loading' }
      }
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});


router.beforeEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '个人博客'
  }
})
export default router;