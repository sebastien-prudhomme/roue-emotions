
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/AboutLayout.vue'),
    children: [
      { path: '', component: () => import('pages/About.vue') }
    ]
  },
  {
    path: '/configuration',
    component: () => import('layouts/ConfigurationLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Configuration.vue') }
    ]
  }
]

export default routes
