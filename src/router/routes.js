export default [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    meta: { title: '首页', icon: 'home' },
  },
  {
    path: '/blog',
    component: () => import('@/views/blog/index.vue'),
    name: 'blog',
    meta: { title: '文章', icon: 'blog' },
  },
  {
    path: '/blog/cate/:categoryId',
    component: () => import('@/views/blog/index.vue'),
    name: 'CategoryBlog',
    meta: { title: '文章', icon: 'blog' },
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
    name: 'about',
    meta: { title: '关于我', icon: 'about' },
  },
  {
    path: '/project',
    component: () => import('@/views/project/index.vue'),
    name: 'project',
    meta: { title: '项目&效果', icon: 'code' },
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue'),
    name: 'message',
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
]