import Vue from 'vue'
import App from './App.vue'
import router from './router'
var _ = require('lodash');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
