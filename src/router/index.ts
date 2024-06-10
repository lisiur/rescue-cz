import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/HomeView')
        },
        {
          path: 'friends',
          name: 'friends',
          component: () => import('../views/FriendsView')
        },
        {
          path: 'airdrop',
          name: 'airdrop',
          component: () => import('../views/AirdropView')
        }
      ]
    }
  ]
})

export default router
