

import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'    //路由的配置

import fastclick from "fastclick"
import 'common/stylus/index.styl'

fastclick.attach(document.body)  //解决300ms延迟
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
