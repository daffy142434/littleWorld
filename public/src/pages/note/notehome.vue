<template>
    <div>
	<notelist v-bind:notelist="backer.noteList"></notelist>
	<button @touchend="toAdd()">添加一片文章</button>
	</div>
</template>
<script type="text/javascript">
	import noteList from './notelist.vue'
	import $ from 'jquery'
	export default {
		components: {
			notelist: noteList,
		},
		data() {
			return {
				backer: {
					noteList: []
				}
			}
		},
		created(){
			this.initDate();
		},
		methods: {
			initDate() {
				this.getNoteList();
			},
			getNoteList() {
				var self=this;
				$.ajax({
					method:"post",
					url:'/note/notelist',
					success:(data)=>{
						data=JSON.parse(data);
						for(var i=0;i<data.length;i++){
							self.backer.noteList.push(data[i]);
						}
					}
				});
			},
			toAdd(){
			    router.push('addNote')
			}
		},
	}
</script>