
const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayoutHome.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageHome.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/AppLayoutAbout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageAbout.vue') }
    ]
  },
  {
    path: '/configuration',
    component: () => import('layouts/AppLayoutConfiguration.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageConfiguration.vue') }
    ]
  },
  {
    path: '/configuration/actions',
    component: () => import('layouts/AppLayoutConfigurationActions.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageConfigurationActions.vue') }
    ]
  },
  {
    path: '/configuration/emotions',
    component: () => import('layouts/AppLayoutConfigurationEmotions.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageConfigurationEmotions.vue') }
    ]
  },
  {
    path: '/configuration/needs',
    component: () => import('layouts/AppLayoutConfigurationNeeds.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageConfigurationNeeds.vue') }
    ]
  },
  {
    path: '/configuration/profiles',
    component: () => import('layouts/AppLayoutConfigurationProfiles.vue'),
    children: [
      { path: '', component: () => import('pages/AppPageConfigurationProfiles.vue') }
    ]
  }
]

export default routes
