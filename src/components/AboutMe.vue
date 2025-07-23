<template>

	<div class="body-child">

		<div class="about-background"></div>

		<div class="content main">

			<picture class="profile-picture">
				<source srcset="/src/img/me.webp" type="image/webp"/>
				<source srcset="/src/img/me.jpg" type="image/jpg"/>
				<img src="/src/img/me.jpg" alt=""/>
			</picture>

			<div class="text">

				<h1 style="margin-top: 0;">Who am I?</h1>

				<p>Hi! I’m Kylian Dekker, a {{ AGE }}-year-old gameplay programmer from the Netherlands.</p>
				
				<p>I hold a solid educational background with four years dedicated to indie game programming at <b style="color: #F47D31">SintLucas Eindhoven</b>, followed by another four years specializing in <i>AAA development</i> at the <b style="color: #ED7624">University of Applied Sciences in Breda</b> (formerly <b style="color: #ED7624">NHTV</b>), where I received a <b>First Class Bachelor of Science (hons)</b> for my achievements.</p>
				
				<p>With {{ PROGRAMMING_EXPERIENCE }} years of experience in C# and {{ PROGRAMMING_EXPERIENCE_CPP }} years in C++, I’ve developed a variety of games and tools, blending technical expertise with creative design. In 2018, I was honored to receive the <b>INDIGO Award for Best Indie Game</b> with my project CoopScoop. My most significant project to date has been <b>Microsoft Flight Simulator 2024</b> during my time at <i>Climax Studios</i> in the UK, where I had the opportunity to implement and refine new and existing gameplay mechanics in a proprietary engine, as well as create tools that drastically increased our team’s productivity.</p>
				
				<p>I currently work at Bohemia Interactive as a Programmer and work on an unannounced project.</p>
				
				<p>Beyond programming, I’m passionate about music production. I release music and perform under the name Undefiant.</p>
			
			</div>
			
		</div>

		<div class="content block">

			<div class="text">

				<h1>Programming Languages</h1>

				<ul style="text-align: left;">

					<li><Icon :icon="'cpp'"></Icon> &nbsp;&nbsp;&nbsp;C++</li>
					<li><Icon :icon="'csharp'"></Icon> &nbsp;&nbsp;&nbsp;C#</li>
					<li><Icon :icon="'js'"></Icon> &nbsp;&nbsp;&nbsp;Javascript/Typescript/Vue.js</li>

				</ul>
			
			</div>
			
		</div>

		<div class="content">

			<div class="text">

				<h1>Programming Software</h1>

				<ul style="text-align: left;">

					<li><Icon :icon="'git'"></Icon> &nbsp;&nbsp;&nbsp;Git</li>
					<li><Icon :icon="'perforce'"></Icon> &nbsp;&nbsp;&nbsp;Perforce</li>
					<li><Icon :icon="'unity'"></Icon> &nbsp;&nbsp;&nbsp;Unity Engine</li>
					<li><Icon :icon="'visual-studio'"></Icon> &nbsp;&nbsp;&nbsp;Microsoft Visual Studio</li>

				</ul>
			
			</div>
			
		</div>

		<div class="content block">

			<div class="text">

				<h1>Platforms</h1>

				<ul style="text-align: left;">

					<li><Icon :icon="'windows'"></Icon> &nbsp;&nbsp;&nbsp;Windows</li>
					<li><Icon :icon="'playstation'"></Icon> &nbsp;&nbsp;&nbsp;Playstation 4</li>
					<li><Icon :icon="'playstation'"></Icon> &nbsp;&nbsp;&nbsp;Playstation 5</li>
					<li><Icon :icon="'vr'"></Icon> &nbsp;&nbsp;&nbsp;Oculus and SteamVR</li>

				</ul>
			
			</div>
			
		</div>

		<div class="content">

			<div class="text">

				<h1>Languages</h1>

				<ul style="text-align: left;">

					<li>Dutch</li>
					<li>English</li>

				</ul>
			
			</div>
			
		</div>

	</div>

</template>

<script lang="ts">

	import { Options, Vue } from 'vue-class-component';
	import Icon from './Icon/Icon.vue'
	import { PROGRAMMING_EXPERIENCE, PROGRAMMING_EXPERIENCE_CPP, AGE } from '@/data';

	@Options({
		components: {
			Icon,
		}
	})
	export default class AboutMe extends Vue {
		private AGE = AGE();
		private PROGRAMMING_EXPERIENCE = PROGRAMMING_EXPERIENCE();
		private PROGRAMMING_EXPERIENCE_CPP = PROGRAMMING_EXPERIENCE_CPP();
	}

</script>

<style lang="scss" scoped>

@import url('/public/src/css/default.scss');

@import url('/public/src/css/about.scss');

</style>