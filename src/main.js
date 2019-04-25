import Vue from 'vue'
import App from './app'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Header from './components/Header.vue'

const routes =[
	{path:'/header',component:Header}
]
const router = new VueRouter({
	routes
})

new Vue({
	el:'#app',
	router,
	render:(h) => h(App)
})