import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import City from '@/pages/city/city';
import Details from '@/pages/details/details';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: "city",
      component: City
    }, {
      path: '/details/:id',
      name: "details",
      component: Details
    }
  ],
  //确保每个页面显示的时候都保持在最顶端
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
