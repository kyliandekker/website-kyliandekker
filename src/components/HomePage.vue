<template>

	<div>

		<video :key="selectedProject" class="background-video" autoplay muted loop>
			<source :src="getBackgroundVideo+'_c.mp4'" type="video/mp4" />
			<source :src="getBackgroundVideo+'.webm'" type="video/webm" />
			Your browser does not support the video tag.
		</video>

		<div class="icon-row">

			<picture
				v-for="(project, index) in reorderedProjects" 
				:key="index" 
				:title="project.name.toUpperCase()"
				class="project-image"
				:class="selectedProject == index ? 'active' : ''"
				@click="setCurrentProject(index)"
			>
				<source :srcset="getLogo(project)+'.webp'" type="image/webp"/>
				<source :srcset="getLogo(project)+'.jpg'" type="image/jpg"/>
				<img :src="`/src/projects/${project.link}/${project.link}_logo.jpg`" alt=""/>
			</picture>

		</div>

		<div class="main-container">

			<div class="preview">

				<video :key="selectedProject" class="project-video" autoplay muted loop>
					<source :src="getVideo+'_c.mp4'" type="video/mp4" />
					<!-- <source :src="getVideo+'.webm'" type="video/webm" /> -->
					Your browser does not support the video tag.
				</video>

			</div>

			<div class="description">

				<h2 style="margin-bottom: 0; margin-top: 0; display: inline-block;">{{ currentProject.name.toUpperCase() }} <span style="color: gray;">{{ " (" + currentProject.year + ")"}}</span></h2>

				<p>
					<span v-for="(platform, index) in currentProject.platforms" :key="index">
						<span v-if="checkPlatform(platform)" ><Icon :icon="getPlatformIcon(platform)"></Icon>{{ ' ' + platform }}<span v-if="index !== currentProject.platforms.length - 1"> | </span></span>
						<a class="steamLink" v-else :href="currentProject.steamLink"><Icon :icon="getPlatformIcon(platform)"></Icon>{{ ' ' + platform }}<span v-if="index !== currentProject.platforms.length - 1"> | </span></a>
					</span>
				</p>

				<p><Icon :icon="getEngineIcon(currentProject.engine)"></Icon> {{ ' ' + currentProject.engine }} in {{ currentProject.language }} </p>

				<button v-for="(role, index) in currentProject.me?.roles" :key="index" class="role" :style="'background: ' + currentProject.accentColor">{{ role.toUpperCase() }}</button>

				<p>{{ currentProject.description }}</p>

				<div class="task-overview">

					<strong>Task Overview</strong>

					<ul>

						<li v-for="(task, index) in currentProject.tasks" :key="index">{{ task }}</li>

					</ul>

				</div>

			</div>

		</div>

		<MSFS :projectData="currentProject" v-if="currentProject.link == 'msfs'"></MSFS>

		<CoopScoop :projectData="currentProject" v-if="currentProject.link == 'coopscoop'"></CoopScoop>

		<GudenuffEngine :projectData="currentProject" v-if="currentProject.link == 'gudenuffengine'"></GudenuffEngine>

		<InSheepsClothing :projectData="currentProject" v-if="currentProject.link == 'insheepsclothing'"></InSheepsClothing>

		<GallusEngine :projectData="currentProject" v-if="currentProject.link == 'gallusengine'"></GallusEngine>

	</div>

</template>

<script lang="ts">

	import { Options, Vue } from 'vue-class-component';
	import { PROJECTS } from '@/data';
	import { Project, PROJECT_PLATFORM, GAME_ENGINE } from '@/classes';
	import Icon from './Icon/Icon.vue';
	import MSFS from './projects/MSFS.vue';
	import GudenuffEngine from './projects/GudenuffEngine.vue';
	import CoopScoop from './projects/CoopScoop.vue';
	import InSheepsClothing from './projects/InSheepsClothing.vue';
	import EventBus from '../EventBus'
	import Accent from './Accent/Accent.vue'
	import GallusEngine from './projects/GallusEngine.vue';

	@Options({
		props: {
			/*
			[Optional]
			Used in the router.
			*/
			startingProject: {
				type: String,
				default: 'msfs'
			},
		},
		components: {
			Icon,
			MSFS,
			GudenuffEngine,
			CoopScoop,
			InSheepsClothing,
			GallusEngine,
			Accent
		},
		created() {
			this.setCurrentProject(0);
		}
	})
	export default class Home extends Vue
	{
		public PROJECTS = PROJECTS;
		private selectedProject = 0;

		get getVideo(): string
		{
			return `/src/projects/${this.currentProject.link}/${this.currentProject.link}_showcase_video`;
		}

		get getBackgroundVideo(): string
		{
			return `/src/projects/${this.currentProject.link}/${this.currentProject.link}_background_video`;
		}

		get reorderedProjects(): Project[] {
			const query = this.$route.query;
			const key = Object.keys(query)[0]?.toLowerCase() ?? '';

			const matches = (project: Project): boolean => {
				switch (key) {
					case 'unity':
						return project.engine === GAME_ENGINE.UNITY_ENGINE;
					case 'unreal':
						return project.engine === GAME_ENGINE.UNREAL_ENGINE;
					case 'csharp':
					case 'c#':
						return project.language.toLowerCase().includes('c#');
					case 'cpp':
					case 'c++':
						return project.language.toLowerCase().includes('c++');
					default:
						return false;
				}
			};

			// Reorder: matching projects first
			const sorted = [...this.PROJECTS].sort((a, b) => {
				const aMatch = matches(a) ? 0 : 1;
				const bMatch = matches(b) ? 0 : 1;
				return aMatch - bMatch;
			});

			return sorted;
		}

		private getLogo(project: Project): string
		{
			return `/src/projects/${project.link}/${project.link}_logo`;
		}

		private checkPlatform(platform: PROJECT_PLATFORM) : boolean
		{
			return platform != PROJECT_PLATFORM.STEAM;
		}

		get currentProject(): Project
		{
			return this.reorderedProjects[this.selectedProject];
		}

		private getPlatformIcon(platform: PROJECT_PLATFORM): string
		{
			switch (platform)
			{
				case PROJECT_PLATFORM.WINDOWS:
				{
					return "windows";
				}
				case PROJECT_PLATFORM.PS4:
				{
					return "playstation";
				}
				case PROJECT_PLATFORM.PS5:
				{
					return "playstation";
				}
				case PROJECT_PLATFORM.VR:
				{
					return "vr";
				}
				case PROJECT_PLATFORM.STEAM:
				{
					return "steam";
				}
				case PROJECT_PLATFORM.XBOX:
				{
					return "xbox";
				}
			}
			return "";
		}

		private getEngineIcon(engine: GAME_ENGINE): string
		{
			switch (engine)
			{
				case GAME_ENGINE.UNITY_ENGINE:
				{
					return "unity";	
				}
				case GAME_ENGINE.UNREAL_ENGINE:
				{
					return "unreal";	
				}
				case GAME_ENGINE.GUDENUFF_ENGINE:
				case GAME_ENGINE.IN_HOUSE:
				{
					return "home";	
				}
			}
			return "";
		}

		private setCurrentProject(project : number)
		{
			this.selectedProject = project;
			EventBus.accentColor = this.currentProject.accentColor;
		}
	}

</script>

<style lang="scss" scoped>

  @import url('/public/src/css/default.scss');

  @import url('/public/src/css/home.scss');

</style>