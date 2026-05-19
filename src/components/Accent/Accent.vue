<template>

	<span>

		<span :style="'color: ' + accentColor + ';' + (accentBold ? 'font-weight: bold;' : '')">

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
        get accentBold()
        {
            return EventBus.accentBold;
        }
	}

</script>