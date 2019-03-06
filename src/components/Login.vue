<template>
  <div id="login">
    <img src="../assets/logo.png">

    <el-row type="flex" justify="center">
      <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
          <el-input v-model="user.pwd" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item>
          <!--<el-button type="primary" @click="onSubmit">登陆</el-button>-->
          <el-button type="primary" v-on:click="submit" icon="el-icon-upload">登陆</el-button>
        </el-form-item>

      </el-form>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        user: {
          username: '',
          pwd: '',
        },
        rules: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submit: function () {
        console.log(this.user.username + ':' + this.user.pwd)
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            // this.$router.replace('/')

            if (this.user.username === 'admin' && this.user.pwd === '123') {

              // 本地处理
              // this.$notify({
              //   type: 'success',
              //   message: '欢迎你,' + this.form.username + '!',
              //   duration: 3000
              // })
              // this.$router.replace('/')
              // dispatch采用Promise链式调用

              //通过 store
              this.$store.dispatch('login', this.user).then(() => {
                this.$notify({
                  type: 'success',
                  message: '欢迎你,' + this.user.username + '!',
                  duration: 3000
                })
                this.$router.replace('/dashboard')
              })

            } else {
              this.$message({
                type: 'error',
                message: '用户名或密码错误',
                showClose: true
              })
            }
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style>

</style>
