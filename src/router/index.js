import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Quiz from '@/components/Quiz'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/result/:result',
      name: 'Result',
      component: Result,
      props: true
    }
  ]
})