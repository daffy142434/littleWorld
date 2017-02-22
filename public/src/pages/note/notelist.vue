<template>
	<div class="nothing">
		<div v-for="item in notelist" class="note-item" @click="toDetail(item.id)">
			<div class="note-date">{{item.date}}</div>
			<div class="note-title">{{item.title}}</div>
			<div class="note-des">{{item.des}}</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['notelist'],
		data(){
			return{
				msg:"看看这是啥"
			}
		},
		mounted(){
			console.log(this.notelist);
			console.log("我就不信了");
		},
		methods:{
			toDetail(id){
				router.push({name:'noteDetail',params:{noteId:id}});
			},
		}
	}
</script>
<style>
*{margin: 0;}
body{
	background-color: #f0f0f0;
}
	.note-item{
		background-color: #fff;
		margin-bottom: 10px;
	}
</style>