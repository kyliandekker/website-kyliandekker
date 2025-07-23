<template>

	<div class="main-section">

		<section class="content-section">

			<picture class="image right" style="width: 50%">
				<source srcset="/msfs/src/img/msfs_credits.webp" type="image/webp"/>
				<source srcset="/msfs/src/img/msfs_credits.jpg" type="image/jpg"/>
				<img src="/msfs/src/img/msfs_credits.jpg" alt=""/>
			</picture>

			<p class="game-description first">I am currently <Accent>unable</Accent> to give more details than what I have already stated on what I did in Microsoft Flight Simulator 2024.</p>

			<h1 class="game-description">Things I learned</h1>

			<ul>

				<li v-for="(task, index) in projectData.learn" :key="index">{{ task }}</li>

			</ul>

		</section>
	
	</div>

  </template>

<script>
	import { Options, Vue } from 'vue-class-component';

	import Accent from '../Accent/Accent'

	@Options({
		components: {
			Accent
		},
		props: {
			projectData: {
				type: Object
			},
		}
	})
	export default class MSFS extends Vue
	{ }

</script>

<style lang="scss" scoped>

	@import url('/public/src/css/project.scss');

	.game-description.first
	{
		margin-top: 0;
	}

	@media (max-width: 768px)
	{
		.game-description.first
		{
			margin-top: 1rem;
		}
	}

</style>