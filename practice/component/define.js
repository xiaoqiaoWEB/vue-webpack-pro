import Vue from 'vue'

const compoent = {
  template: `
    <div>
      <input v-model="text" value="1"/>
      {{text}}
    </div>
  `,
  data () {
    return {
      text: 'this is a compoents'
    }
  }
}

// 全局组件
// Vue.component('CompOne', compoent)

new Vue({
  el: '#root',
  components: {
    CompOne: compoent
  },
  template: `
    <div>
      <CompOne></CompOne>
      <div>asdfasdfs</div>
    </div>
  `
})
