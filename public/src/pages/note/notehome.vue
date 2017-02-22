<template>
    <div>
	<notelist v-bind:notelist="backer.noteList"></notelist>
	<button @touchend="toAdd()">添加一片文章</button>
	</div>
</template>
<script type="text/javascript">
	import noteList from './notelist.vue'
	export default {
		components: {
			notelist: noteList,
		},
		data() {
			return {
				msg:"看这里",
				backer: {
					noteList: []
				}
			}
		},
		created() {
			this.initDate();
		},
		methods: {
			initDate() {
				this.getNoteList();
			},
			getNoteList() {
				var notelist = [];
				const data = {
					id: 21,
					title: "今天刚开始的第一篇日记",
					date: '2017-02-21',
					des: "这是今天的第一篇日记，这是用来测试的",
				}
				notelist.push(data);
				notelist.push(data);
				notelist.push(data);
				notelist.push(data);
				this.backer.noteList = notelist;
				console.log(this.backer);
			},
			toAdd(){
			    router.push('addNote')
			}
		},
	}
</script>