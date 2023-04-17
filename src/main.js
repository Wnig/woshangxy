// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import $ from 'jquery'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

Vue.config.productionTip = false
Vue.use(VueRouter)

import Home from './components/Home'
import Solution from './components/Solution'
import Masters from './components/Masters'
import Cooperation from './components/Cooperation'


//配置路由
const router = new VueRouter({
	routes: [
		{path: "/", component: Home,},
		{path: "/Solution", component: Solution,},
		{path: "/Masters", component: Masters,},
		{path: "/Cooperation", component: Cooperation,},
	],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
