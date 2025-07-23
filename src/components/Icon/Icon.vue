<template>

	<span>

		<span aria-hidden="true" :class="'icon-'+icon">

			<span :class="'path'+index" v-for="(path, index) in paths" :key="index"></span>

			<slot></slot>
			
		</span>

	</span>

</template>

<script lang="ts">

	import { Options, Vue } from 'vue-class-component';

	@Options({
		props: {
			icon: {
				type: String
			},
			paths: {
				type: Number,
				default: 0
			},
		}
	})
	export default class Icon extends Vue
	{
	}

</script>

<style lang="scss" scoped>

@font-face
{
	font-family: icons;
	src: url(/src/fonts/icons.ttf);
}

[class^="icon-"], [class*=" icon-"]
{
	/* use !important to prevent issues with browser extensions that change fonts */
	font-family: 'icons' !important;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
  
	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon {
    font-family: 'custom-font';
    font-size: 100px;
    margin: 10px;
}
.icon-blender:before {
    content: "\";
}

.icon-cpp:before {
    content: "\";
}

.icon-csharp:before {
    content: "\";
}

.icon-cv:before {
    content: "\";
}

.icon-git:before {
    content: "\";
}

.icon-github:before {
    content: "\";
}

.icon-home:before {
    content: "\";
}

.icon-js:before {
    content: "\";
}

.icon-linkedin:before {
    content: "\";
}

.icon-mail:before {
    content: "\";
}

.icon-perforce:before {
    content: "\";
}

.icon-playstation:before {
    content: "\";
}

.icon-ps3:before {
    content: "\";
}

.icon-ps4:before {
    content: "\";
}

.icon-ps5:before {
    content: "\";
}

.icon-steam:before {
    content: "\";
}

.icon-unity:before {
    content: "\";
}

.icon-unreal:before {
    content: "\";
}

.icon-user:before {
    content: "\";
}

.icon-visual-studio:before {
    content: "\";
}

.icon-vr:before {
    content: "\";
}

.icon-windows:before {
    content: "\";
}

.icon-work:before {
    content: "\";
}

.icon-xbox:before {
    content: "\";
}

</style>