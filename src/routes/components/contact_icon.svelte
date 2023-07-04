<script>
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
	<img class="icon" src="icons/{icon}.svg" alt={icon} />
</a>

<style>
	a {
		text-decoration: none;
	}

	.icon {
		transition: 0.7s;
		width: 100px;
	}

	.icon:hover {
		transition: 0.7s;
		filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
	}

	@media only screen and (max-width: 840px) {
		.icon {
			width: 80px;
		}
	}
</style>
