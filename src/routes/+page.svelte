<script lang="ts">
    // import swapy from npm
    import { base } from '$app/paths'
    import { getAppContext } from '$lib/app.svelte'
    import { getPagesContext } from '$lib/pages.svelte'
    import { getFirebaseContext } from '$lib/firebase.svelte'
    import { getDirectoryContext } from '$lib/directories.svelte'
    import Button from '$lib/Components/UI/Button.svelte'
    import TreePanel from '$lib/Components/Canvas Components/TreePanel.svelte'
    import PageToolbar from '$lib/Components/Canvas Components/PageToolbar.svelte'
    import ZoomToolbar from '$lib/Components/Canvas Components/ZoomToolbar.svelte'
    import SettingsPanel from '$lib/Components/Canvas Components/SettingsPanel.svelte'

    const app = getAppContext()
    const pages = getPagesContext()
    const firebase = getFirebaseContext()
    const directory = getDirectoryContext()
</script>

<div class="page-container">
    <header></header>

    <main>
        <PageToolbar />
        <ZoomToolbar variant="alt" />
        <TreePanel />
        <SettingsPanel />
    </main>

    <footer>
        <p>Orphans:</p>
        {#each directory.orphanedFolders as id}
        {#if directory.tree[id].type === 'folder'}
            <Button
                variant="error"
                onclick={() => {
                    delete directory.tree[id]
                }}>💀📁{directory.tree[id].name}</Button
            >
        {/if}
        {/each}
        {#each directory.orphanedPages as pageID}
            <Button
                variant="error"
                onclick={() => {
                    delete directory.tree[pageID]
                    delete pages[pageID]
                }}>💀📄{pages[pageID].title}</Button
            >
        {/each}
    </footer>
</div>

<style>
    .page-container {
        height: 100%;
    }

    footer {
        position: fixed;
        bottom: 0;
    }
</style>
