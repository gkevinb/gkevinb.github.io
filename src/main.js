import Vue from 'vue'
import App from './App/App.vue'
import VueGtag from 'vue-gtag';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(VueGtag, {
    config: { id: 'UA-141910422-1' }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
