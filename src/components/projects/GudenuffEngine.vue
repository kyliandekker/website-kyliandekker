<template>

	<div class="main-section">
	
		<section class="content-section">

			<div class="text-block full-width">

				<h1 class="title">Things I learned</h1>

				<ul>

					<li v-for="(task, index) in projectData.learn" :key="index">{{ task }}</li>

				</ul>

				<h1 class="title">My contributions</h1>
				
				<p class="game-description">
					For this project, I was a gameplay, engine/tools and audio programmer. I was in a team with 2 graphics programmers, 1 other engine programmer and 2 gameplay programmers and we made this engine from scratch.
				</p>

				<ul class="description list">
						
					<li>Designed and implemented back-end systems for the audio system on PlayStation 4 and Windows platforms, including a <Accent>custom song loader</Accent> capable of extracting BPM information from files created in industry-standard DAWs.</li>
					<li>Created the <Accent>Beatmatching system</Accent> for both platforms, leveraging byte position data from the audio system to accurately determine when the next beat should occur.</li>
					<li>Managed resource handling for Windows and PlayStation 4, developing <Accent>tools to streamline resource management</Accent> and enabling rapid resource transfers to the PlayStation 4 for quick testing.</li>
					<li>Developed multiple tools within the engine, including a <Accent>UI tool</Accent>, <Accent>audio debugging tools</Accent>, and a <Accent>level editor/creator</Accent>.</li>
					<li>Built a framework that empowered tool and gameplay programmers to create custom tools for various systems within the engine.</li>
						
				</ul>

			</div>

		</section>

		<section class="content-section reverse-layout">

			<h1 class="title">Beatmatching</h1>

			<p class="game-description">My most significant contribution to this project has been the <Accent>beatmatching system</Accent> and all the features it provided.</p>

			<p class="game-description">Wav files were loaded via a <Accent>custom library that I created</Accent>. This library is capable of extracting bpm info from the track.</p>

			<p class="game-description">I wanted the rhythm-based features to be flexible for any mechanic. I decided to use a simple metronome system that notifies the objects that have the beatmatching component added onto them that a new beat has been hit.</p>

			<p class="game-description">As mentioned earlier, the beatmatching system has a <Accent>metronome-type system</Accent> that counts every beat based on the bpm of the current soundtrack.</p>

			<p class="game-description">It retrieves the position in ms of the current soundtrack and checks if the last known position in the beatmatching system is less than that. If it happens to be less than the current position, a new beat has been hit.</p>

			<video class="media-video full-width" controls poster="/gudenuffengine/src/img/thumb_gudenuffengine_beatmatching.jpg">
				<source src="/gudenuffengine/src/mp4/gudenuffengine_beatmatching_c.mp4" type="video/mp4" />
				<!-- <source src="/gudenuffengine/src/mp4/beatmatching.webm" type="video/webm" /> -->
				Your browser does not support the video tag.
			</video>

		</section>

		<section class="content-section reverse-layout">

			<h1 class="title">Resource Management</h1>

			<video class="media-video right" controls poster="/gudenuffengine/src/img/thumb_gudenuffengine_resourcemanagement.jpg">
				<source src="/gudenuffengine/src/mp4/gudenuffengine_resourcemanagement_c.mp4" type="video/mp4" />
				<!-- <source src="/gudenuffengine/src/mp4/resourcemanagement.webm" type="video/webm" /> -->
				Your browser does not support the video tag.
			</video>

			<p class="game-description">All the resources in the game, sprites, fonts, sounds are all saved in the resource manager.</p>

			<p class="game-description">Resources are saved in JSON format. They can be edited via the engine editor or by opening the file and editing it manually. I <Accent>made a separate tool (a simple console application in C++)</Accent> that read this JSON file and moved all those files to the PS4 and converted the images to the format the PS4 wanted. The JSON file was super nice for easily reading which files were needed for PS4, but for Windows it would probably have been better to use meta files like bigger engines such as Unity or Unreal do.</p>

			<p class="game-description">In case loading a resource fails, the resource manager falls back on default resource files that are compiled with the engine. This way, at least something gets loaded, like in Source Engine you get the famous purple-black texture.</p>

			<p class="game-description">The resource system also has a few tools such as viewing the loaded resources and interacting with them. You can play, pause and stop sounds and music, view sprite sheets and test if rooms get parsed properly.</p>

		</section>

		<section class="content-section">

			<h1 class="title">The game</h1>

			<video class="media-video right" controls poster="/gudenuffengine/src/img/thumb_gudenuffengine_gameplay.jpg">
				<source src="/gudenuffengine/src/mp4/gudenuffengine_gameplay_c.mp4" type="video/mp4" />
				<!-- <source src="/gudenuffengine/src/mp4/gameplay_c.mp4" type="video/webm" /> -->
				Your browser does not support the video tag.
			</video>
			
			<p class="game-description">Drums of Harmony is a 2D rhythm-based roguelike, where you as a spirit bard are trying to cleanse evil Yokai in order to save your village from mysterious disappearances, while using your spirit Daiko drums to create a harmonious melody.</p>

			<p class="game-description">Play as a spirit bard that can move, shoot and collect to deal with enemies and clear rooms, levels and zones, all on the beat of the soundtrack.</p>

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
	export default class GudenuffEngine extends Vue
	{ }

</script>

<style lang="scss" scoped>

	@import url('/public/src/css/project.scss');

</style>