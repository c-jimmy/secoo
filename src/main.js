// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import moment from 'moment'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Viewer from 'v-viewer' // lightBox 组件

import 'viewerjs/dist/viewer.css'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.axios = axios
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bea73a093dd804eda1fd462/secoo/api/v1';
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(mavonEditor)
Vue.use(Viewer, {
  defaultOptions: {
    title: false,
    movable:false,
    zoomable: false,
    rotatable: false,
    scalable: false,
    transition: false,
    zIndex: 9999
  }
})

// 定义金额格式化全局过滤器
Vue.filter("numberFormate", function (value, decimals = 0) {
  const digitsRE = /(\d{3})(?=\d)/g
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  var i = _int.length % 3
  var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
  var _float = decimals ? stringified.slice(-1 - decimals) : ''
  return head + _int.slice(i).replace(digitsRE, '$1,') + _float
})
// 定义时间格式化全局过滤器
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
