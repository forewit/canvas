<script lang="ts">
    import { base } from '$app/paths'
    import { getAppContext } from '$lib/app.svelte'
    import { getPagesContext } from '$lib/pages.svelte'
    import Button from '$lib/Components/UI/Button.svelte'
    

    type props = {
        openTreePanel?: () => void
        openSettingsPanel?: () => void
    }

    let {
        openTreePanel = () => {},
        openSettingsPanel = () => {},
    }: props = $props()

    const app = getAppContext()
    const pages = getPagesContext()

    let title = $derived.by(()=>{
        if (pages[app.currentPageID] !== undefined) {
            return pages[app.currentPageID].title
        } else {
            return "Loading..."
        }
    })
</script>

<div class="page-toolbar theme-toolbar">
    <Button iconURL="{base}/images/icons/font-awesome/home.svg" href="{base}/"/>
    <Button iconURL="{base}/images/icons/font-awesome/folder-closed.svg" onclick={openSettingsPanel}/>
    <Button onclick={openTreePanel}>{title}</Button>
</div>

<style>
    .page-toolbar { 
        width: max-content;
        padding-left: var(--l);
        padding-right: var(--xl);
    }
</style>
