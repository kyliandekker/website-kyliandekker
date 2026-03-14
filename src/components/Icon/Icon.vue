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
    content: "\e000";
}

.icon-cpp:before {
    content: "\e001";
}

.icon-csharp:before {
    content: "\e002";
}

.icon-cv:before {
    content: "\e003";
}

.icon-git:before {
    content: "\e004";
}

.icon-github:before {
    content: "\e005";
}

.icon-home:before {
    content: "\e006";
}

.icon-itch:before {
    content: "\e007";
}

.icon-js:before {
    content: "\e008";
}

.icon-linkedin:before {
    content: "\e009";
}

.icon-mail:before {
    content: "\e00a";
}

.icon-perforce:before {
    content: "\e00b";
}

.icon-playstation:before {
    content: "\e00c";
}

.icon-ps3:before {
    content: "\e00d";
}

.icon-ps4:before {
    content: "\e00e";
}

.icon-ps5:before {
    content: "\e00f";
}

.icon-steam:before {
    content: "\e010";
}

.icon-unity:before {
    content: "\e011";
}

.icon-unreal:before {
    content: "\e012";
}

.icon-user:before {
    content: "\e013";
}

.icon-visual-studio:before {
    content: "\e014";
}

.icon-vr:before {
    content: "\e015";
}

.icon-windows:before {
    content: "\e016";
}

.icon-work:before {
    content: "\e017";
}

.icon-xbox:before {
    content: "\e018";
}

</style>