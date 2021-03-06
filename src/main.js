// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
//解决浏览器兼容问题的包
import "babel-polyfill"
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
//@代表src目录
// import '@/assets/styles/reset.css'
// import '@/assets/styles/border.css'
// import '@/assets/styles/iconfont.css'
import 'styles/iconfont.css'
import 'styles/border.css'
import 'styles/reset.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
