import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import MainMenu from '@/pages/main.vue'
import Forgot from '@/pages/forgot.vue'
import Map from '@/pages/map.vue'
import NewPass from '@/pages/new-pass.vue'
import NewAccount from '@/pages/new-account.vue'
import Ranking from '@/pages/ranking.vue'
import RankingMenu from '@/pages/ranking-menu.vue'
import UserProfile from '@/pages/user-profile.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/forgot', name: 'forgot', component: Forgot },
    { path: '/newpass', name: 'new-pass', component: NewPass },
    { path: '/newaccount', name: 'new-account', component: NewAccount },
    { path: '/main', name: 'main', component: MainMenu },
    { path: '/map', name: 'map', component: Map },
    { path: '/ranking', name: 'ranking', component: Ranking },
    { path: '/rankingmenu', name: 'ranking-menu', component: RankingMenu },
    { path: '/profile', name: 'user-profile', component: UserProfile },
  ]
})

export default router
