<template>

	<div>

		<header>

			<nav>

				<a v-for="(link, index) in menuItems" :key="index" :href="link.href"><Icon :icon="link.icon"></Icon> {{ ' ' + link.name }}</a>

			</nav>

			<div style="padding: 1rem;">

				<!-- Hamburger Menu Button -->
				<button class="hamburger-menu" @click="toggleMenu">

					<span></span>

					<span></span>

					<span></span>

				</button>

			</div>

			<!-- Mobile Menu -->
			<div v-if="isMenuOpen" class="mobile-menu">
				
				<a v-for="(link, index) in menuItems" :key="index" :href="link.href"><Icon :icon="link.icon"></Icon> {{ ' ' + link.name }}</a>

			</div>

		</header>

	</div>

</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import Icon from "./Icon/Icon.vue";

	@Options({
		components: {
			Icon,
		},
	})
	export default class NavBar extends Vue {
		isMenuOpen = false;
		menuItems = [
			{
				name: "My Work",
				href: "/",
				icon: "work"
			},
			{
				name: "CV",
				href: "/src/CV-Kylian-Dekker.pdf",
				icon: "cv"
			},
			{
				name: "About Me",
				href: "/about",
				icon: "user"
			},
			{
				name: "Mail Me",
				href: "mailto:kyliandekker2000@gmail.com",
				icon: "mail"
			},
			{
				name: "LinkedIn",
				href: "https://www.linkedin.com/in/kyliandekker",
				icon: "linkedin"
			},
			{
				name: "GitHub",
				href: "https://www.github.com/kyliandekker",
				icon: "github"
			}
		];

		// Toggles the mobile menu visibility
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
</script>

<style lang="scss" scoped>

	@import url('/public/src/css/navbar.scss');

</style>