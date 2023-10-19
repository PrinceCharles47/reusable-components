import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'
import MultiStepFormView from '../views/MultiStepFormView.vue'
import FormView from '../views/FormView.vue'
import TabsView from '../views/TabsView.vue'
import ProfileView from '../views/ProfileView.vue'
import CardView from '../views/CardView.vue'
import CalendarView from '../views/CalendarView.vue'
import APITest from '../components/APITest.vue'

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
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/multistep-form',
    name: 'multistep-form',
    component: MultiStepFormView
  },
  {
    path: '/tab',
    name: 'tab',
    component: TabsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/card',
    name: 'card',
    component: CardView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  },
  {
    path: '/test',
    name: 'test',
    component: APITest,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
