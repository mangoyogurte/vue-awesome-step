import Vue from 'vue'
import App from './App.vue'
import vueStep from './lib/index.js'
Vue.use(vueStep)

new Vue({
  el: '#app',
  render: h => h(App)
})
