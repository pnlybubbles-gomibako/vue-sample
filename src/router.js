import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import EditPage from './views/EditPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/edit/:type',
      name: 'edit',
      component: EditPage,
      props: true
    }
  ]
})
