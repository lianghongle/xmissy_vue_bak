<template>

  <div id="test">

    <div id="test1">{{ msg }}</div>

    <!--绑定属性--><!-- 完整语法 -->
    <div id="test2" v-bind:title="msg_2">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </div>
    <!-- 缩写 -->
    <!--<a :href="url">...</a>-->

    <!--条件-->
    <div id="test3">
      <p v-if="seen">现在你看到我了</p>
    </div>

    <!--循环-->
    <div id="test4">
      <ol>
        <li v-for="(todo, key, index) in todos" :key="todo.id">
          {{ index }} :  {{ key }} : {{ todo.text }}
        </li>
      </ol>
    </div>

    <!--绑定事件--><!-- 完整语法 -->
    <div id="test5">
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">逆转消息</button>
    </div>
    <!-- 缩写 -->
    <!--<a @click="doSomething">...</a>-->

    <!--表单输入和应用状态之间的双向绑定-->
    <div id="test6">
      <p>{{ msg }}</p>
      <input v-model="msg">
    </div>

    <!--组件-->
    <div id="test7">
      <ol>
        <!--
          现在我们为每个 todo-item 提供 todo 对象
          todo 对象是变量，即其内容可以是动态的。
          我们也需要为每个组件提供一个“key”，稍后再
          作详细解释。
        -->
        <todo-item
          v-for="item in todos"
          v-bind:todo="item"
          v-bind:key="item.id">
        </todo-item>
      </ol>
    </div>

    <div>
      <p>{{ 1 + 1 }}</p>
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>

    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>

    <div>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" key="username-input">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="email-input">
      </template>
      <button v-on:click="changeLoginType">change login type</button>
    </div>

  </div>

</template>

<script>



  export default {
    name: 'Test',
    data() {
      return {
        firstName:'firstName',
        lastName:'lastName',

        loginType:'username',

        message:'message',
        msg: 'test',
        msg_2: '页面加载于 ' + new Date().toLocaleString(),
        seen: true,
        todos: [
          { id:1, text: '学习 JavaScript' },
          { id:2, text: '学习 Vue' },
          { id:3, text: '整个牛项目' }
        ],
        rawHtml:'<span style="color: red">This should be red</span>'
      }
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    methods: {
      reverseMessage: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
        this.msg = this.msg.split('').reverse().join('')
      },
      changeLoginType:function () {
        this.loginType = this.loginType == 'username' ? 'email' : 'username'
      }
    },
    computed: {//计算属性:默认只有 getter ，不过在需要时你也可以提供一个 setter
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },
      fullName: {//默认只有 getter ，不过在需要时你也可以提供一个 setter
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },

    //{{生命周期钩子
    beforeCreate:function () {
      console.log('beforeCreate')
    },
    created:function () {
      console.log('created')
    },
    beforeMount:function () {
      console.log('beforeMount')
    },
    mounted:function () {
      console.log('mounted')
    },
    beforeUpdate:function () {
      console.log('beforeUpdate')
    },
    updated:function () {
      console.log('updated')
    },
    beforeDestroy:function () {
      console.log('beforeDestroy')
    },
    destroyed:function () {
      console.log('destroyed')
    },
    //}}
  }
</script>

<style scoped>

</style>
