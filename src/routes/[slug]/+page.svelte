
<script lang="ts">
  let { data }: { data: { slug: string } } = $props();
</script>

<svelte:head>
  <title>{data.slug}</title>
</svelte:head>

<h1>{data.slug}</h1>

