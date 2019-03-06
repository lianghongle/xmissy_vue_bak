<template>
  <div class="dashboard">
    <h1>主页面</h1>
    欢迎你!
    <span v-if="user">
      {{user.username}}
      <el-button type="warning" @click="login">注销</el-button>
    </span>
    <el-button v-else type="success" @click="tologin">点击登录</el-button>

  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      tologin () {
        this.$router.replace('/login')
      },
      logout () {
        this.$store.dispatch('logout').then(() => {
          this.$router.replace('/login')
        })
      }
    },
    computed: {
      user () {
        console.log(this.$store.state.user)
        return this.$store.state.user
      }
    }
  }
</script>

<style>

</style>
