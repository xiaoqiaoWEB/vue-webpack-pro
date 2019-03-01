import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span> v-text </span>
      <hr>
      <span v-html="html"></span>
      <hr>
      <span v-show="active">v-show  显示---隐藏</span>
      <hr>
      <span v-if="active">v-if  改变 DOM 节点</span>
      <hr>
      <div v-for="(item, index) in arr" :key="index">{{item.title}} -- {{item.age}}</div>
      <hr>
      <div v-for="(val, key, index) in obj">{{val}} :: {{key}} :: {{index}}</div>
      <hr>
      // number --- 修饰符
      <input type="checkbox" v-model.number="active"/>  
    </div>
  `,
  data: {
    text: 0,
    active: true,
    html: '<h1>v-html</h1>',
    arr: [
      {
        title: 'xiaoqiao',
        age: '28'
      },
      {
        title: 'haixu',
        age: '30'
      }
    ],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    }
  }
})
