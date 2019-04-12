<template>
  <div>
    <el-container>
      <el-header>
        <span>兵器管理APP</span>
      </el-header>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="记住密码">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即登录</el-button>
            <el-button @click="goLogin">去注册</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<style>

</style>

<script>
import { BasicUrl } from '@CONST/urlConsts'
import { registerAction } from '@SERV/baseAction.js'
import SamEditor from '@COMPO/editor.vue'
export default {
  components: {
    SamEditor
  },
  created () {
  },
  data () {
    return {
      form: {
        username: '',
        pwd: ''
      }
    }
  },
  computed: {
  },
  methods: {
    onSubmit () {debugger;
      this.$fetch(BasicUrl.loginUrl, this.$data.form).then(e => {
        this.$router.push('/homePage')
      })
    },
    goLogin () {
      this.$router.push('/register')
    }
  },
}
</script>
