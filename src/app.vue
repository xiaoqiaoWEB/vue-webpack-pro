<template>
  <div class="container">
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './todo/footer.vue'
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Footer,
    Header,
    Todo
  }
}
</script>
<style>
@import './assets/stylus/rest.styl';
</style>
