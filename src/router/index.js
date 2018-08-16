import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/pages/Todo'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/test/:id',
      name: 'Test',
      component: Test
    }
  ]
})
