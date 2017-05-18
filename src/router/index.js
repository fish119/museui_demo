import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Login from '../views/Login'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/hello', component: Hello },
    { path: '*', redirect: '/login' }
  ]
})
