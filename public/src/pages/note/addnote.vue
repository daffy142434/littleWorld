<template>
	<div>
	<textarea name="" v-model="content" rows="3" cols="3" style="resize: none;"></textarea>
	<button @click="postAdd()">发布</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		components:{
			
		},
		data(){
			return{
				content:'',
				msg:"看看这是啥"
			}
		},
		mounted(){
			
		},
		methods:{
			postAdd(){
				var params={content:this.content};
				$.ajax({
					type:"post",
					url:"/note/addnote",
					data:params,
					async:true,
					success:(data)=>{
						console.log("进入了add");
						console.log(data);
					}
				});
			}
		}
	}
</script>