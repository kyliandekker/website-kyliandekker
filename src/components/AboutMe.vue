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

				<p>Hi! I’m <Accent>Kylian Dekker</Accent>, a {{ AGE }}-year old gameplay programmer from the Netherlands with <Accent>{{ PROGRAMMING_EXPERIENCE_AAA }}</Accent> years of professional experience in the AAA industry.</p>
				
				<p>I started programming in {{ PROGRAMMING_YEAR }} and I studied indie game programming at <Accent>SintLucas Eindhoven</Accent> and later specialized in AAA development at <Accent>Breda University of Applied Sciences</Accent> (formerly <Accent>NHTV</Accent>), graduating with a <Accent>Cum Laude/First Class Bachelor of Science (Hons)</Accent>.</p>
				
				<p>In 2018, I won the <Accent>INDIGO Award for Best Indie Game</Accent> for my game named <Accent>CoopScoop</Accent>.</p>
				
				<p>Some of the most important titles I have worked on thus far are: </p>

				<ul>

					<li>Microsoft Flight Simulator 2024</li>
					<li>Arma 4</li>
					<li>Unannounced Title in DayZ Series</li>

				</ul>

				<div class="content block">

					<div class="text">

						<h3>Programming Languages</h3>

						<ul style="text-align: left;">

							<li><Icon :icon="'cpp'"></Icon> &nbsp;&nbsp;&nbsp;C++</li>
							<li><Icon :icon="'csharp'"></Icon> &nbsp;&nbsp;&nbsp;C#</li>
							<li><Icon :icon="'js'"></Icon> &nbsp;&nbsp;&nbsp;Javascript/Typescript/Vue.js</li>

						</ul>

					</div>

				</div>

				<div class="content">

					<div class="text">

						<h3>Programming Software</h3>

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

						<h3>Platforms</h3>

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

						<h3>Languages</h3>

						<ul style="text-align: left;">

							<li>Dutch</li>
							<li>English</li>

						</ul>

					</div>

				</div>

			</div>

		</div>

		<div class="timeline">

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://imgeucdn.gamespress.com/cdn/files/LevelInfinite/2024/08/141031-317dd646/Bohemia_Interactive_logo_green_only.png?w=700&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&sky=09897d40b5d3c5446344c5fa16f5e2cb0e90cc1ed042414c97bbe386b1a57f33"
						alt="Bohemia Interactive"
					/>

					<h3>June 2024 - Present</h3>

					<h2>Bohemia Interactive</h2>

					<p>
						Gameplay Programmer working on <Accent>Arma 4</Accent> and an <Accent>unannounced title in the DayZ series</Accent>.
					</p>

					<ul>
						<li>Worked in a proprietary engine and created and improved functionality, game mechanics and tools using C++.</li>
						<li>Created and designed the core systems for gameplay mechanics.</li>
						<li>Designed tools and workflows that work in a shared environment for 2 different projects.</li>
						<li>Designed and created architecture that supports modding, community-driven content, and multiplayer features.</li>
						<li>Worked on an unannounced project from its conception.</li>
					</ul>

				</div>

			</div>

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://infinitgamer.com/images/2017/05/16/climex.png"
						alt="Climax Studios"
					/>

					<h3>September 2023 - September 2024</h3>

					<h2>Climax Studios</h2>

					<p>
						Gameplay Programmer on <Accent>Microsoft Flight Simulator 2024</Accent>.
					</p>

					<ul>
						<li>Worked in a proprietary engine and created and improved functionality, game mechanics and tools using C++.</li>
						<li>Collaborated with a diverse team of programmers and designers.</li>
						<li>Participated in code reviews and provided constructive feedback to maintain code quality and best practices.</li>
						<li>Created new mechanics according to the designs and wishes from the client.</li>
						<li>Developed and maintained a tool the entire team used to streamline and massively speed up development.</li>
					</ul>

				</div>

			</div>

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://daleelai.com/wp-content/uploads/2025/02/logo1740576459.png"
						alt="Moonlander.AI"
					/>

					<h3>July 2022 - September 2023</h3>

					<h2>MOONLANDER.AI</h2>

					<p>
						Generalist Programmer on <Accent>Shapeshifter</Accent>.
					</p>

					<ul>
						<li>Helped create and design software that generates games using AI and procedural tools with Unity Engine and C#.</li>
					</ul>
					
				</div>

			</div>

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Breda_University_of_Applied_Sciences_Logo.svg/1280px-Breda_University_of_Applied_Sciences_Logo.svg.png"
						alt="BUas"
					/>

					<h3>2020 - 2024</h3>

					<h2>Breda University of Applied Sciences</h2>

					<p>
						Specialization in <Accent>Gameplay Programming</Accent>.
					</p>
					
				</div>

			</div>

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9lO4fFkXzf_9tPyenyndyztFWhpW_gCluw&s"
						alt="LABEL4Visuals"
					/>

					<h3>August 2018 - January 2019</h3>

					<h2>LABEL4Visuals</h2>

					<p>
						Gameplay Programmer on <Accent>various campaign projects</Accent>.
					</p>

					<ul>
						<li>Create games and VR/AR and mobile experiences in Unity for small campaign projects for various companies.</li>
					</ul>
					
				</div>

			</div>

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://www.indigoshowcase.nl/images/og/INDIGO-og-default.png"
						alt="Indigo"
					/>

					<h3>2018</h3>

					<h2>INDIGO Award Winner</h2>

					<p>
						Won the <Accent>INDIGO Award for Best Indie Game</Accent>
						with <Accent>CoopScoop</Accent>.
					</p>

				</div>

			</div>

			<div class="timeline-item">

				<div class="timeline-dot"></div>

				<div class="timeline-content">

					<img
						class="timeline-image"
						src="https://opleiding.com/wp-content/uploads/opleider/sint-lucas.png"
						alt="SintLucas"
					/>

					<h3>2016 - 2020</h3>

					<h2>Sint Lucas Eindhoven</h2>
					
				</div>

			</div>

		</div>

	</div>

</template>

<script lang="ts">

	import { Options, Vue } from 'vue-class-component';
	import Icon from './Icon/Icon.vue'
	import { PROGRAMMING_YEAR, PROGRAMMING_EXPERIENCE_AAA, AGE } from '@/data';
	import Accent from './Accent/Accent.vue'
	import EventBus from '../EventBus'

	@Options({
		components: {
			Icon,
			Accent
		},
		created() {
			EventBus.accentColor = 'rgb(72, 199, 240)';
			EventBus.accentBold = true;
		}
	})
	export default class AboutMe extends Vue {
		private AGE = AGE();
		private PROGRAMMING_YEAR = PROGRAMMING_YEAR();
		private PROGRAMMING_EXPERIENCE_AAA = PROGRAMMING_EXPERIENCE_AAA();
	}

</script>

<style lang="scss" scoped>

@import url('/public/src/css/default.scss');

@import url('/public/src/css/about.scss');

</style>