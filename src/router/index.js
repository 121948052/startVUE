import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/entry/index.vue'
import Register from '@/views/register/index.vue'
import Login from '@/views/login/index.vue'
import Hello from '@COMPO/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: Index,
      children:[
          {
              path:"/homePage/hello",
              component: Hello
          }
      ]
    }
  ]
})
