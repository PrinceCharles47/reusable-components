import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'
import MultiStepFormView from '../views/MultiStepFormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'table',
    component: HomeView
  },
  {
    path: '/chart',
    name: 'chart',
    component: ChartView
  },
  {
    path: '/multistep-form',
    name: 'multistep-form',
    component: MultiStepFormView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
