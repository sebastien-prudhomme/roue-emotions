
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
  },
  {
    path: '/configuration/actions',
    component: () => import('layouts/ConfigurationActionsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ConfigurationActions.vue') }
    ]
  },
  {
    path: '/configuration/emotions',
    component: () => import('layouts/ConfigurationEmotionsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ConfigurationEmotions.vue') }
    ]
  },
  {
    path: '/configuration/needs',
    component: () => import('layouts/ConfigurationNeedsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ConfigurationNeeds.vue') }
    ]
  }
]

export default routes
