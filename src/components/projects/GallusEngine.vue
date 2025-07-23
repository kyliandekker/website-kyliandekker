<template>

	<div class="main-section">
	
		<section class="content-section">

			<div class="text-block full-width">

				<h1 class="title">Things I learned</h1>

				<ul>

					<li v-for="(task, index) in projectData.learn" :key="index">{{ task }}</li>

				</ul>

			</div>

		</section>

		<section class="content-section reverse-layout">

			<h1 class="title">Automating Custom Icon Fonts for My Engine</h1>

			<video class="media-video right" controls>
				<source src="/gallusengine/src/mp4/font-generation-tool_c.mp4" type="video/mp4" />
				<!-- <source src="/gudenuffengine/src/mp4/beatmatching.webm" type="video/webm" /> -->
				Your browser does not support the video tag.
			</video>

			<p class="game-description">As my game engine project grew, so did my need for icons. Font Awesome wasn't enough because icons were missing, and I constantly found myself visiting third-party websites to generate custom icon fonts. Frustrated by the process, I decided to <Accent>build my own solution</Accent>.</p>
			
			<p class="game-description">I developed a <Accent>Node.js/NPM tool</Accent> that <Accent>automates icon font generation</Accent>. It works by:</p>

			<ul>

				<li>Taking icons from a folder.</li>
				<li>Creating an SVG font.</li>
				<li>Generating a font file from the SVG.</li>
				<li>Producing an HTML file for easy previewing and encoding reference.</li>

			</ul>

			<p class="game-description">To integrate seamlessly with my engine, the tool also generates a <Accent>C++ header file</Accent>, defining all <Accent>icon codes and embedding the font as a byte array</Accent>, allowing ImGui to load it directly from memory.</p>

			<p class="game-description">This tool eliminated my dependency on external services and made it effortless to expand my engine's icon set.</p>

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
	export default class GallusEngine extends Vue
	{ }

</script>

<style lang="scss" scoped>

	@import url('/public/src/css/project.scss');

</style>