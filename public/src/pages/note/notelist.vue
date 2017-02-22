<template>
	<div class="note-box">
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
			}
		},
		mounted(){
		},
		methods:{
			toDetail(id){
				router.push('/noteDetail/id='+id);
			},
		}
	}
</script>
