<script lang="ts">
    import { base } from "$app/paths";
    import Icon from "$lib/Components/UI/Icon.svelte";

    type props = {
        title: string;
    }

    let { title }: props = $props();
</script>

<div class="page-toolbar">
    <a class="home" href="{base}/"><Icon url="{base}/images/icons/home.svg" /></a>
    <button class="tree-panel-button"><Icon url="{base}/images/icons/folder.svg" /></button>
    <button class="settings-panel-button">{title}</button>
</div>