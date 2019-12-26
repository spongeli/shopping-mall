module.exports = {
  // 关闭eslint校验
  lintOnSave: false,
  // 配置别名
  configureWebpack:{
   resolve:{
     alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'common':'@/common'
     }
   }
  }
}