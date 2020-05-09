
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    props: { about: true, configuration: false, title: 'Ma roue des émotions' },
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    props: { home: true, title: 'À propos' },
    children: [
      { path: '', component: () => import('pages/About.vue') }
    ]
  },
  {
    path: '/configuration',
    component: () => import('layouts/MainLayout.vue'),
    props: { home: true, title: 'Configuration' },
    children: [
      { path: '', component: () => import('pages/Configuration.vue') }
    ]
  }
]

export default routes
