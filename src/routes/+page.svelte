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
        <Button iconURL="{base}/images/icons/gear.svg" href="{base}/profile"
            >Settings</Button
        >

        <section id="orphaned-folders">
            <p>Orphaned folders:</p>
            {#each directory.orphanedFolders as id}
                <p>
                    💀📁 {directory.tree[id].name}<button
                        class="close-page-button"
                        onclick={() => {
                            delete directory.tree[id]
                        }}>❌</button
                    >
                </p>
            {/each}
        </section>
        <section id="orphaned-pages">
            <p>Orphaned pages:</p>
            {#each directory.orphanedPages as id}
                <p>
                    💀📄 {pages[id].title}<button
                        class="close-page-button"
                        onclick={() => {
                            delete pages[id]
                        }}>❌</button
                    >
                </p>
            {/each}
        </section>
    </footer>
</div>

<style>
    .page-container {
        height: 100%;
    }
    main {
        width: max-content;
    }

    footer {
        position: fixed;
        bottom: 0;
    }
</style>
