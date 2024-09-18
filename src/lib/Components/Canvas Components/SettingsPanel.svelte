<script lang="ts">
    import { getPagesContext } from '$lib/pages.svelte'
    import { getAppContext } from '$lib/app.svelte'
    import { getThemeNames } from '../ThemeWrapper/themes.svelte'
    import Button from '$lib/Components/UI/Button.svelte'
    import TextInput from '$lib/Components/UI/TextInput.svelte'
    import Toggle from '$lib/Components/UI/Toggle.svelte'
    import Select from '$lib/Components/UI/Select.svelte'

    const app = getAppContext()
    const pages = getPagesContext()

    let page = $derived(pages[app.currentPageID])
</script>

<div class="settings-panel theme-panel">
    {#if page}
        <TextInput bind:value={page.title} />
        <Toggle bind:checked={app.spellcheck} id="spellcheck">
            Spellcheck
        </Toggle>
        <Select
            id="theme-select"
            name="Theme"
            options={getThemeNames()}
            bind:value={app.themeName}
        />
    {:else}
        Loading...
    {/if}
</div>

<style>
    .settings-panel {
        width: min-content;
        display: grid;
        gap: 1em;
    }
</style>
