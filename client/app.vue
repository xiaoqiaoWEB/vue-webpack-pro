<template>
  <div class="container">
    <Header></Header>
    <!-- <Todo></Todo> -->
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link> -->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './layout/footer.vue'
import Header from './layout/header.vue'
import Todo from './views/todo/todo.vue'

export default {
  data () {
    return {}
  },
  components: {
    Footer,
    Header,
    Todo
  }
}
</script>

<style>
@import './assets/stylus/rest.styl'
</style>