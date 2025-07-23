<template>
		<NavBar></NavBar>
		<div class="body">
			<router-view></router-view>
		</div>
</template>
  
<script lang="ts">
	import NavBar from './components/NavBar.vue';
	import { Options, Vue } from 'vue-class-component';
  
	@Options({
		components: {
			NavBar
		}
	})
	export default class App extends Vue {}
</script>