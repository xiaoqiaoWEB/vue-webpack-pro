<template>
  <div class="container">
    <Header></Header>
    <p>{{count}}</p>
    <p>{{fullName}}</p>
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
import {mapState, mapGetters} from 'vuex'

export default {
  data () {
    return {}
  },
  components: {
    Footer,
    Header,
    Todo
  },
  mounted () {
    let i = 0
    setInterval(() => {
      this.$store.commit('updataCount', i++)
    }, 1000)
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    fullName () {
      return this.$store.getters.fullName
    },
    // ...mapState(['count'])
    // ...mapState({
    //   count: 'count'
    // })
    ...mapState({
      count: (state) => state.count
    })
    // ...mapGetters({})
  }
}
</script>

<style>
@import './assets/stylus/rest.styl'
</style>