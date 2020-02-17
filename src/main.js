import Vue from 'vue'
import App from './App/App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-141910422-1'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
