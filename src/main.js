// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui组件和css
import ElementUi from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
// 引入vuex
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)
Vue.use(ElementUi)
//配置是否允许vue-devtools检查代码，方便调试，生产环境中需要设置为false，默认为true
Vue.config.devtools=true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
})
