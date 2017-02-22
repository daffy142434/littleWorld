import Vue from 'vue'

//公共配置及工具
import vueRouter from 'vue-router'

//页面组件
import noteHome from './pages/note/notehome.vue'
import noteDetail from './pages/note/notedetail.vue'
import addNote from './pages/note/addnote.vue'


//样式文件
import './resource/css/normalize.css'
import './resource/css/weui.min.css'

Vue.use(vueRouter);

//配置路由
var router=new vueRouter({
      routes:[
      {
          path:'/',
          component:noteHome,
      },{
      name:'noteDetail',
      path:'/noteDetail/:noteId',
      component:noteDetail,
      },
      {
        name:'addNote',
        path:'/addNote',
        component:addNote
      }
      ]
  });
window.router=router;

new Vue({
  el: '#app',
  components:{
  	notehome:noteHome,
  	notedetail:noteDetail,
  	addnote:addNote,
  },
  data(){
  	return{
  		
  	}
  },
  router:router,
})
