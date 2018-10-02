import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import MainMenu from '@/pages/mainmenu.vue'
import Forgot from '@/pages/forgot.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/mainmenu', name: 'mainmenu', component: MainMenu },
    { path: '/forgot', name: 'forgot', component: Forgot },
  ]
})

export default router
