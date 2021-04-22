/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import jQuery from 'jquery'
window.jQuery = jQuery

require('./assets/tableExport.min.js');
require('./assets/bootstrap-table-export.min.js');

import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
