<template>

	<div class="main-section">

		<section class="content-section">

			<picture class="image right" style="width: 50%">
				<source srcset="/msfs/src/img/msfs_credits.webp" type="image/webp"/>
				<source srcset="/msfs/src/img/msfs_credits.jpg" type="image/jpg"/>
				<img src="/msfs/src/img/msfs_credits.jpg" alt=""/>
			</picture>

			<p class="game-description first">I worked as a <Accent>Gameplay Programmer</Accent> on Microsoft Flight Simulator 2024, contributing to <Accent>port work</Accent> and <Accent>additional content for the Reno gamemode</Accent>, as well as <Accent>creating the new Red Bull gamemode</Accent>. While specific details remain under NDA, my work involved implementing gameplay systems and features and creating mission-info.</p>

			<h1 class="game-description">Things I learned</h1>

			<ul>

				<li v-for="(task, index) in projectData.learn" :key="index">{{ task }}</li>

			</ul>

			<p class="game-description">I worked on the PlayStation 5 port of Microsoft Flight Simulator for a short period, before being moved to one of the gameplay projects for the game.</p>

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