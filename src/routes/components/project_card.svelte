<script>
	import Icon from '@iconify/svelte';
	/**
	 * @type {any}
	 */
	export let title;
	/**
	 * @type {any}
	 */
	export let icon;
	/**
	 * @type {any}
	 */
	export let url;
</script>

<!-- Create a polaroid shaped card that will display an image with a title below it -->
<a href={url}>
	<div class="polaroid">
		<div class="polaroid-image-backdrop">
			<div class="polaroid-image">
				<Icon icon={`openmoji:${icon}`} style="font-size: 210px" />
			</div>
		</div>
		<h2>{title}</h2>
	</div>
</a>

<style>
	h2 {
		font-size: 25px;
		color: black;
		margin: 0;
		padding-top: 10px;
	}

	a {
		text-decoration: none;
	}

	.polaroid {
		background-color: white;
		margin: 20px 0px 20px 0px;
		text-align: center;
		margin: 20px;
		padding: 10px;
		width: 250px;
		height: 350px;
		transition: 0.7s;
	}

	.polaroid:hover {
		transition: 0.7s;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	.polaroid:hover > .polaroid-image-backdrop > .polaroid-image {
		transition: 0.7s;
		filter: drop-shadow(6px 10px 4px rgb(0 0 0 / 0.4));
	}

	.polaroid-image {
		transition: 0.7s;
	}

	.polaroid-image-backdrop {
		transition: 0.7s;
		background-color: #e0f1ff;
		width: 250px;
		height: 240px;
	}

	.polaroid:hover > .polaroid-image-backdrop {
		transition: 0.5s;
		box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}
</style>
