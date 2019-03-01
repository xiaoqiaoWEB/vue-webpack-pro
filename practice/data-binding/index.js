import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{isActive ? 'active' : 'not active'}}
      <hr>
      <div v-html="html" v-bind:class="className"></div>
      <hr>
      <p :class="{active: isActive}">this is a p</p>
      <hr>
      <h1 :class="[isActive ? 'active' : '']">H1</h1>
      <hr>
      <h2 :style="[styles1, styles2]">H2</h2>
    </div>
  `,
  data: {
    isActive: true,
    html: '<sapn>span</sapn>',
    className: 'html',
    styles1: {
      'color': '#dedede'
    },
    styles2: {
      'fontSize': '20px',
      'color': 'red'
    }
  }
})
