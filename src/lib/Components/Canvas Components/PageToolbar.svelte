<script lang="ts">
    import { base } from '$app/paths'
    import Button from '$lib/Components/UI/Button.svelte'

    type props = {
        title: string
        openTreePanel?: () => void
        openSettingsPanel?: () => void
    }

    let {
        title,
        openTreePanel = () => {},
        openSettingsPanel = () => {},
    }: props = $props()
</script>

<div class="page-toolbar theme-toolbar">
    <Button iconURL="{base}/images/icons/font-awesome/home.svg" href="{base}/"/>
    <Button iconURL="{base}/images/icons/font-awesome/folder-closed.svg" onclick={openSettingsPanel}/>
    <Button onclick={openTreePanel}>{title}</Button>
</div>

<style>
    .page-toolbar { 
        width: max-content;
    }
</style>
