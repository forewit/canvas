<script lang="ts">
    import { base } from '$app/paths'
    import { getPagesContext } from '$lib/pages.svelte.js'

    const { data }: { data: { id: string } } = $props()

    const pages = getPagesContext()

    const id = data.id
    const page = pages[id]
</script>

<a href={base}>Home</a>
<h1>{page.title}</h1>
<p>{page.content}</p>