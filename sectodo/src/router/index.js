import Vue from 'vue'
import Router from 'vue-router'
import invest from '@/components/invest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'invest',
      component: invest
    }
  ]
})
