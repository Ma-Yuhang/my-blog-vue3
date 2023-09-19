import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  // 路由数组
  routes
});


router.beforeEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + '-' + 'Ma-Yuhang'
  } else {
    document.title = 'Ma-Yuhang'
  }
})


export default router;