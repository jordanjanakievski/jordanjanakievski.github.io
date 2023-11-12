<script>
	import Icon from '@iconify/svelte';
	/**
	 * @type {any}
	 */
	export let title;
	/**
	 * @type {any}
	 */
	export let data;
	/**
	 * @type {any}
	 */
	export let icon;
</script>

<!-- Create a polaroid shaped card that will display an image with a title below it -->
<div class="polaroid">
	<div class="polaroid-image-backdrop">
		<div class="polaroid-image">
			<Icon icon={`openmoji:${icon}`} style="font-size: 100px" />
		</div>
	</div>
	<h2>{title}</h2>
	<p>{data}</p>
</div>

<style>
	h2 {
		font-size: 24px;
		margin: 0;
	}

	.polaroid {
		background-color: white;
		margin: 20px;
		text-align: center;
		padding: 10px;
		width: 150px;
		transition: 0.7s;
	}

	.polaroid:hover {
		transition: 0.7s;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	.polaroid:hover > .polaroid-image-backdrop > .polaroid-image {
		transition: 0.5s;
		filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
	}

	.polaroid-image {
		transition: 0.5s;
	}

	.polaroid-image-backdrop {
		transition: 0.7s;
		background-color: #e0f1ff;
	}

	.polaroid:hover > .polaroid-image-backdrop {
		transition: 0.5s;
		box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}
</style>
