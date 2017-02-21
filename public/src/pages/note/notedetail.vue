<template>
	<div class="nothing">
			<div class="note-date">{{note.date}}</div>
			<div class="note-title">{{note.title}}</div>
			<div class="note-des">{{note.des}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		components:{
			
		},
		data(){
			return{
				note:{
					id:"",
					date:"",
					title:"",
					des:"",
				}
			}
		},
		created(){
			console.log("what?");
			this.getDetail(1);
		},
		methods:{
			getDetail(id){
				var self=this;
				$.ajax({
					type:"post",
					url:"/note/notedetail",
					data:{id:id},
					async:true,
					success:(data)=>{
						console.log("detail进入了")
						self.note=JSON.parse(data);
					}
				});
			}
		}
	}
</script>