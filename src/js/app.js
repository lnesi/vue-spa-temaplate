
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const Home = require("./pages/Home.vue");
const Page = require("./pages/Page.vue");

const routeList=[
	{path: 	'/'	,	component: 	Home},
	{path: 	'/page'	,	component: 	Page}
];

const router = new VueRouter({
  routes:routeList
});


window.app = new Vue({
	el: '#app',
	router
});