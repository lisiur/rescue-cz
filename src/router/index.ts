import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView'
import HomeView from '../views/HomeView'
import FriendsView from '../views/FriendsView'
import AirdropView from '../views/AirdropView'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          path: 'friends',
          name: 'friends',
          component: FriendsView
        },
        {
          path: 'airdrop',
          name: 'airdrop',
          component: AirdropView
        }
      ]
    }
  ]
})

export default router
