import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//
import Link from './components/link.vue'
import Image from './components/image.vue'
import Icon from './components/icon.vue'
import Page from './components/page.vue'
import Input from './components/form/input.vue'

import Back from './modules/back.vue'

Vue.component('v-link', Link)
Vue.component('v-image', Image)
Vue.component('v-icon', Icon)
Vue.component('v-page', Page)
Vue.component('v-input', Input)

Vue.component('v-back', Back)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
