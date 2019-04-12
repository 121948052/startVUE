<template>
  <div>
    <div><img alt="Vue logo" src="@/assets/logo.png"></div>
    <span :style="isShow ? 'display: none' : 'display: block'">兵器管理APP</span>
    <button @click="asyncFunc">显示/隐藏</button>
    <SamEditor v-on:headCallBack="headCall"></SamEditor>
    <button @click="goToRegister">去注册</button>
  </div>
</template>

<script>
import { Url } from '@CONST/urlConsts'
import SamEditor from '@COMPO/editor.vue'
export default {
  components: {
    SamEditor
  },
  created () {},
  data () {
    return {
      isShow: this.$store.state.leftNavState
    }
  },
  computed: {
    getUserIcons() {
      return this.$store.state.leftNavState;
    }
  },
  watch: {
    getUserIcons(val) {
      this.isShow = val;
    }
  },
  methods: {
    headCall (con) { //回调方法，接收子组件传的参数
      this.con = con
    },
    toggleNav (){
      this.$store.dispatch('changeLeftNavState', !this.$store.state.leftNavState)
    },
    getData () {
      console.log('开始咯@@@')
    }
  },
}
</script>
