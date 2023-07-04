<script>
	import { fade } from 'svelte/transition';

	/**
	 * @type {any}
	 */
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

{#if scroll == 0}
	<svg
		class="down-arrow"
		width="29px"
		height="63px"
		viewBox="0 0 29 63"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		transition:fade
	>
		<title>Line</title>
		<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g
				id="Extra-Large"
				transform="translate(-945.000000, -796.000000)"
				fill="#93A3B0"
				fill-rule="nonzero"
			>
				<path
					id="Line"
					d="M962,796 L962,830 L974,830 L959.5,859 L945,830 L957,830 L957,796 L962,796 Z"
				/>
			</g>
		</g>
	</svg>
{/if}

<style>
	.down-arrow {
		margin-top: 500px;
	}
</style>
