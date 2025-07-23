<template>

	<span>

		<span :style="'color: '+accentColor">

			<slot></slot>
			
		</span>

	</span>

</template>

<script lang="ts">

	import { Options, Vue } from 'vue-class-component';
    import EventBus from '../../EventBus';

	@Options({
	})
	export default class Icon extends Vue
	{
        get accentColor()
        {
            return EventBus.accentColor;
        }
	}

</script>