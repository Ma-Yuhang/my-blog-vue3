export default [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'Home',
    meta: { title: '首页', icon: 'home' },
  },
  {
    path: '/article',
    component: () => import('@/views/article/index.vue'),
    name: 'Article',
    meta: { title: '文章', icon: 'article' },
  },
  {
    path: '/article/cate/:categoryId',
    component: () => import('@/views/article/index.vue'),
    name: 'ArticleCategory',
    meta: { title: '文章分类' },
  },
  {
    path: "/article/:id",
    component: () => import('@/views/article/detail.vue'),
    name: "ArticleDetail",
    meta: { title: '文章详情' },
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
    name: 'About',
    meta: { title: '关于我', icon: 'about' },
  },
  {
    path: '/project',
    component: () => import('@/views/project/index.vue'),
    name: 'Project',
    meta: { title: '项目&效果', icon: 'code' },
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue'),
    name: 'Message',
    meta: { title: '留言板', icon: 'chat' },
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
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  // {
  //   path:'/404',
  //   component: () => import('@/views/404/index.vue'),
  //   name: '404',
  // }
]