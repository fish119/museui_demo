import Vue from 'vue'
import MuseUI from 'muse-ui'
import './assets/styles/font-icons/style.css'
import 'muse-ui/dist/muse-ui.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(MuseUI)

new Vue({
  router,
  ...App
}).$mount('#app')
