import Vue from 'vue'
import App from './App.vue'
import CcUi from '../packages'

Vue.use(CcUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
