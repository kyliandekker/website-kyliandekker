<template>

	<div class="main-section">

		<div class="indigo-winner-2018">

			<picture class="indigo">
				<source srcset="/coopscoop/src/img/coopscoop_indigo_award_2018.webp" type="image/webp"/>
				<source srcset="/coopscoop/src/img/coopscoop_indigo_award_2018.jpg" type="image/jpg"/>
				<img src="/coopscoop/src/img/coopscoop_indigo_award_2018.jpg" alt=""/>
			</picture>

			<div>

				<picture style="float: left; width: 50%;">
					<source srcset="/coopscoop/src/img/coopscoop_award_01.webp" type="image/webp"/>
					<source srcset="/coopscoop/src/img/coopscoop_award_01.jpg" type="image/jpg"/>
					<img src="/coopscoop/src/img/coopscoop_award_01.jpg" alt=""/>
				</picture>

				<picture style="float: right; width: 50%;">
					<source srcset="/coopscoop/src/img/coopscoop_award_02.webp" type="image/webp"/>
					<source srcset="/coopscoop/src/img/coopscoop_award_02.jpg" type="image/jpg"/>
					<img src="/coopscoop/src/img/coopscoop_award_02.jpg" alt=""/>
				</picture>

				<p class="game-description notice full-width" style="padding: 10px;">* this is a previous version of the game and the original team (which I was project lead of) did not want to continue with the game, so I recreated it myself.</p>

			</div>

		</div>

		<section class="content-section">
			
			<h1 class="title">Things I learned</h1>

			<ul>

				<li v-for="(task, index) in projectData.learn" :key="index">{{ task }}</li>

			</ul>

		</section>

		<section class="content-section">

			<h1 class="title">Buckle Up!</h1>

			<video class="media-video right" controls>
				<source src="/coopscoop/src/mp4/coopscoop_trailer_c.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			
			<p class="game-description">A chicken virus spreads rapidly across the country and some of your chickens are infected and you need to take care of the sick chickens. You need to wash them, feed them and take good care of them to maintain a stable farm. Can you manage all those chickens?</p>
		
		</section>
	
		<section class="content-section">

			<h1 class="title">What is CoopScoop?</h1>
				
			<p class="game-description">
				CoopScoop is a <span class="important">VR arcade-style game</span> that revolves around managing a chicken farm. A chicken epidemic has broken out and you need to make sure all your chickens stay healthy and happy. Keeping your chickens gussied up is important because there is a chance they get infected if you do not wash them. If they’re infected, inject them with a syringe. If they’re hungry, feed them. But if they are sick, get rid of them as soon as possible, before they infect the rest of your flock! Keep your chickens alive for as long as you can, because that’s how we do it chicken-farmer-style!
			</p>

		</section>

		<section class="content-section reverse-layout">

			<h1 class="title">VR Area Custom Editor</h1>

			<video class="media-video right" controls>
				<source src="/coopscoop/src/mp4/coopscoop_build_tools_c.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<p class="game-description">
				The game uses a <span class="important">dynamic VR area system</span> that I wrote with a custom editor for ease of use. A VR area can be defined with a script and <Accent>changes the position and scale of objects depending on the scale of the VR area</Accent>. In-game, it retrieves the size of the configured VR Area (currently, SteamVR settings and Oculus settings are supported).
			</p>

		</section>

		<section class="content-section reverse-layout">

			<h1 class="title">Subtitle Tools</h1>

			<video class="media-video right" controls>
				<source src="/coopscoop/src/mp4/coopscoop_audio_tools_c.mp4" type="video/mp4" />
				<!-- <source src="/coopscoop/src/mp4/audio-tools.webm" type="video/webm" /> -->
				Your browser does not support the video tag.
			</video>

			<p class="game-description">I had a system for subtitles that used Unity's Coroutines to display the text and add pauses in between. However, when pausing or minimizing the game, the audio continued playing but the coroutine would be paused.</p>

			<p class="game-description">I decided to rewrite this system entirely and think of a new way of implementing subtitles. I ended up making a custom editor that would allow me to <Accent>place time markers in a timeline and define the subtitles</Accent> in a very simple way.</p>

			<p class="game-description">The system has been built on top of the Unity UI for audio files so that it still feels familiar. On top of subtitle markers, there are options for <Accent>localization</Accent> as well.</p>

			<p class="game-description">Subtitles now get displayed based on the actual <Accent>elapsed time of the audio clip</Accent>. Causing it to instantly previously missed time markers in case the game had lag or was minimized.</p>

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
	export default class CoopScoop extends Vue
	{ }

</script>

<style lang="scss" scoped>

	@import url('/public/src/css/project.scss');

	.indigo-winner-2018
	{
		width: 100%;
		background: #ffa5c2;
		padding-top: 20px;
		display: inline-block;
	}

	.indigo
	{
		width: 50%;
		padding: 30px;
		margin: auto;
		display: block;
	}

</style>