<template>

	<div class="main-section">

		<section class="content-section">

			<video class="media-video full-width" controls poster="/insheepsclothing/src/img/thumb_insheepsclothing_trailer.jpg">
				<source src="/insheepsclothing/src/mp4/insheepsclothing_trailer_c.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			
		</section>

		<section class="content-section">
			
			<h1 class="title">Things I learned</h1>

			<ul>

				<li v-for="(task, index) in projectData.learn" :key="index">{{ task }}</li>

			</ul>

		</section>

		<section class="content-section">

			<h1 class="title full-width">Camera Mechanic</h1>

			<p class="game-description full-width">In the game, one of your objectives is to take pictures of certain points of interests. You have to pick up a camera in the game, hold it and take a picture. Once a picture has been taken, the game determines if the target was in the picture. The player receives points based on how well it was in the picture. Regardless of whether or not the target was in the picture, a picture is printed out and the player has to deposit the picture in a suitcase to receive the points.</p>
			
			<p class="game-description full-width">We use a second camera for the physical in-game camera and project it onto a render texture. If the user takes a picture, we do a simple <Accent>AABB test against the bounds of the target</Accent> in question to determine if it has been hit or not. Once a picture has been taken, a grabbable object spawns out of the camera that has its physics disabled until the player picks it up for the first time.</p>
		
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
	export default class InSheepsClothing extends Vue
	{ }

</script>

<style lang="scss" scoped>

	@import url('/public/src/css/project.scss');

</style>