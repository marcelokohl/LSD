import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/main.js'
// import jQuery from 'jquery'

//
import Text from './components/text.vue'
import Button from './components/button.vue'
import Logo from './components/logo.vue'
import Image from './components/image.vue'
import Icon from './components/icon.vue'
import Page from './components/page.vue'
import Input from './components/form/input.vue'
import select from './components/form/select.vue'

import Back from './modules/back.vue'
import UserAvatar from './modules/user-avatar.vue'
import GameAvatar from './modules/game-avatar.vue'
import GameListItem from './modules/game-list-item.vue'

import Cloud from './ornaments/cloud.vue'
import Star from './ornaments/star.vue'

import Lang from './plugins/lang/lang.js'

Vue.component('v-text', Text)
Vue.component('v-button', Button)
Vue.component('v-logo', Logo)
Vue.component('v-image', Image)
Vue.component('v-icon', Icon)
Vue.component('v-page', Page)
Vue.component('v-input', Input)
Vue.component('v-select', select)

Vue.component('v-back', Back)
Vue.component('v-user-avatar', UserAvatar)
Vue.component('v-game-avatar', GameAvatar)
Vue.component('v-game-list-item', GameListItem)

Vue.component('o-cloud', Cloud)
Vue.component('o-star', Star)

Vue.use(Lang)

// Vue.use(jquery)
// const j = require('jquery')
// window.jquery = j

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
