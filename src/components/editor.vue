<template>
  <div id="samEditor" ref="samEditor"></div>
</template>

<script>
import { editorConf } from '@CONST/editorConf.js'
import E from 'wangeditor'
import fileSystemUrl, { BasicUrl } from '@CONST/urlConsts.js'
export default {
  name: 'samEditor',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    let self = this
    let editor = new E(this.$refs.samEditor)
    editor.customConfig.uploadImgShowBase64 = true // 使用 base64 保存图片
    editor.customConfig.showLinkImg = false
    editor.customConfig.uploadFileName = 'file'
    editor.customConfig.uploadImgServer = BasicUrl.multiUpload // 配置服务器端地址
    // 将图片大小限制为 5M
    editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024
    // 限制一次最多上传 6 张图片
    editor.customConfig.uploadImgMaxLength = 6
    editor.customConfig.uploadImgHooks = {
      before: function (xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
      },
      success: function (xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      fail: function (xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      error: function (xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      timeout: function (xhr, editor) {
        // 图片上传超时时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      customInsert: function (insertImg, result, editor) {
        (result.data || []).map(e => {
          insertImg(fileSystemUrl(e.fileUrl))
        })
      }
    }
    // 监控变化，同步更新到表单数据
    editor.customConfig.onchange = function (html) {
      //传参方法
      self.$emit('headCallBack', html)
    }
    editor.customConfig.onfocus = function () {
      console.log('focus')
      editor.change && editor.change()
    }
    editor.customConfig.zIndex = 999
    // 自定义菜单配置
    editor.customConfig.menus = editorConf
    editor.customConfig.onchangeTimeout = 1000 // 单位 ms
    editor.create()
    // E.fullscreen.init(this.$refs.samEditor)
  }
}
</script>

<style scoped>
</style>
