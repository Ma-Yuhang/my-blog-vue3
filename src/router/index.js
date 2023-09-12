import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  // 路由数组
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