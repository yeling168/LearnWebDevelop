import Vue from 'vue'
import confirm from './confirm.vue'

let confirmConstructor = Vue.extend(confirm)
let theConfirm = function(text) {
  console.log('text', text)
  return new Promise((res, rej) => {
    let confirmDom = new confirmConstructor({
      el: document.createElement('div')
    })
    console.log('confirmDom', confirmDom)
    document.body.appendChild(confirmDom.$el); // new一个对象，然后插入body里面
    confirmDom.text = text; //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段
    confirmDom.ok = function() {
      res()
      confirmDom.isShow = false
    }
    confirmDom.close = function() {
      rej()
      confirmDom.isShow = false
    }
  })
}
export default theConfirm;
