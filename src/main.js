// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Index from './Index'
import router from './router'
import store from './store'

//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,// 等价于 router: router
  store,
  components: { App },
  template: '<App/>',
  data() {
    return {
      msg:"test msg"
    }
  }
})
console.log(vue.msg)
