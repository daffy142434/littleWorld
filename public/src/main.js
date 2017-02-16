import Vue from 'vue'

//公共配置及工具
import vueRouter from 'vue-router'

//页面组件
import App from './App.vue'

Vue.use(vueRouter);


new Vue({
  el: '#app',
  components:{
      app:App,
  },
  router:new vueRouter({
      routes:[
      {
          path:'/',
          component:App,
      },
      ]
  }),
})
