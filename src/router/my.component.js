import Main from '@/components/main'

// 若需要添加额外的路由文件,需要将新的路由文件添加到src/store/app.js 文件内routers数组中去

export default [
  {
    path: '/universe',
    name: 'universe',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'universe',
        name: 'universe',
        meta: {
          icon: 'ios-navigate',
          title: 'CSS-行星轨道'
        },
        component: () => import('@/view/page/universe.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'test',
        name: 'test',
        meta: {
          icon: 'ios-navigate',
          title: '测试页面'
        },
        component: () => import('@/view/page/test.vue')
      }
    ]
  },
]