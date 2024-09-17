<script lang="ts">
    import { base } from '$app/paths'
    import Icon from '$lib/Components/UI/Icon.svelte'

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

<div class="page-toolbar">
    <a class="home" href="{base}/"
        ><Icon url="{base}/images/icons/home.svg" /></a
    >
    <button class="tree-panel-button"
        ><Icon url="{base}/images/icons/folder.svg" /></button
    >
    <button class="settings-panel-button">{title}</button>
</div>

<style>
    .page-toolbar {
        display: flex;
        gap: 10px;
        height: 30px;
        padding: 5px;
        background-color: var(--bg-alt);
    }
    .tree-panel-button {
    }
</style>
