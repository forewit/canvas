<script lang="ts">
    import LayoutGrid from '$lib/Components/layout/LayoutGrid.svelte'

    let gridTemplate = [
        [1, 2],
        [4, 2],
    ]
</script>

<LayoutGrid {gridTemplate} />
