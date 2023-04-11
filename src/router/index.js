import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Materias from '../views/Materias.vue'
import LoginSetUp from '../components/LoginSetUp.vue'
import SignUpSetUp from '../components/SignUpSetUp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/user/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/materias',
    name: 'Materias',
    component: Materias
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginSetUp
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpSetUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
