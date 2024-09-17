<script lang="ts">
    import { base } from '$app/paths'
    import Button from '$lib/Components/UI/Button.svelte'

    type props = {
        zoom: number
        variant?: 'alt'
        zoomLevels?: number[]
    }

    let {
        zoom = $bindable(0),
        zoomLevels = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        variant,
    }: props = $props()

    function zoomIn() {
        // find the zoom level that is closest and greater then the current zoom
        const nextZoom = zoomLevels.find((level) => level > zoom)
        zoom =
            nextZoom !== undefined
                ? nextZoom
                : zoomLevels[zoomLevels.length - 1]
    }

    function zoomOut() {
        // find the zoom level that is closest and less then the current zoom
        const prevZoom = zoomLevels.toReversed().find((level) => level < zoom)
        zoom = prevZoom !== undefined ? prevZoom : zoomLevels[0]
    }

    function cycleZoom() {
        // find the zoom level that is closest and greater then the current zoom. 
        // if there is no next zoom level, reset to the first zoom level
        const nextZoom = zoomLevels.find((level) => level > zoom)
        zoom = nextZoom !== undefined ? nextZoom : zoomLevels[0]
    }

    function resetZoom() {
        zoom = 1;
    }
</script>

<div class="zoom-toolbar theme-toolbar">
    {#if variant === 'alt'}
        <Button iconURL="{base}/images/icons/font-awesome/zoom-out.svg" onclick={zoomOut} />
        <Button onclick={resetZoom}>{Math.round(zoom * 100)}%</Button>
        <Button iconURL="{base}/images/icons/font-awesome/zoom-in.svg" onclick={zoomIn} />
    {:else}
        <Button onclick={cycleZoom}>{Math.round(zoom * 100)}%</Button>
    {/if}
</div>

<style>
    .zoom-toolbar {
        width: max-content;
    }
</style>
