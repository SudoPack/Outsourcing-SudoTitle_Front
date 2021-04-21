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

import $ from 'jquery'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'


import Recorder from 'recorder-core'
Vue.use(Recorder)
//需要使用到的音频格式编码引擎的js文件统统加载进来
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
