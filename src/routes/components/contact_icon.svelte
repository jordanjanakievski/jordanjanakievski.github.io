<script>
  import Icon from '@iconify/svelte';
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
<a href={url} class="icon">
  <Icon icon={`openmoji:${icon}`} style="font-size: 75px" />
</a>

<style>
  a {
    text-decoration: none;
  }

  .icon {
    transition: 0.7s;
  }

  .icon:hover {
    transition: 0.7s;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
</style>
