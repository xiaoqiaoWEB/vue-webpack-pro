import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: './app'
  },
  {
    // path: '/app/:id'  当 props 为true 的时候  组件 可以 获得 props
    path: '/app',
    component: Todo,
    props: true,
    name: 'App',
    meta: {
      title: 'this is a app'
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      title: 'this is a login'
    }
  }
]
