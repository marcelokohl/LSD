import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/main.js'
//
import Button from './components/button.vue'
import Logo from './components/logo.vue'
import Image from './components/image.vue'
import Icon from './components/icon.vue'
import Page from './components/page.vue'
import Input from './components/form/input.vue'

import Back from './modules/back.vue'
import UserMenu from './modules/user-menu.vue'
import GameAvatar from './modules/game-avatar.vue'

import Cloud from './ornaments/cloud.vue'
import Star from './ornaments/star.vue'

Vue.component('v-button', Button)
Vue.component('v-logo', Logo)
Vue.component('v-image', Image)
Vue.component('v-icon', Icon)
Vue.component('v-page', Page)
Vue.component('v-input', Input)

Vue.component('v-back', Back)
Vue.component('v-user-menu', UserMenu)
Vue.component('v-game-avatar', GameAvatar)

Vue.component('o-cloud', Cloud)
Vue.component('o-star', Star)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
