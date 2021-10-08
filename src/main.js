import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from '@/mixins/global'

import XContainer from '@/components/shared/XContainer'
import XBoxContainer from '@/components/shared/XBoxContainer'
import XTitle from '@/components/shared/XTitle'

import '@/assets/css/tailwind.css'

//
// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

Vue.config.productionTip = false

Vue.mixin(global)

Vue.component('XContainer', XContainer)
Vue.component('XBoxContainer', XBoxContainer)
Vue.component('XTitle', XTitle)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
