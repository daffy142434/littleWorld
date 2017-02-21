import Vue from 'vue'

//公共配置及工具
import vueRouter from 'vue-router'


//页面组件
import noteHome from './pages/note/notehome.vue'
import noteDetail from './pages/note/notedetail.vue'
import addNote from './pages/note/addnote.vue'

Vue.use(vueRouter);

var router=new vueRouter({
      routes:[
      {
          path:'/',
          component:noteHome,
      },{
      path:'/noteDetail/:id',
      component:noteDetail,
      },
      {
      	path:'/addNote',
      	component:addNote
      }
      ]
  });

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

//全局工具配置
window.router=router;
