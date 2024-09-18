<script lang="ts">
    import { base } from '$app/paths'
    import { getDirectoryContext } from '$lib/directories.svelte'
    import { getPagesContext } from '$lib/pages.svelte'
    import { getAppContext } from '$lib/app.svelte'
    import Button from '$lib/Components/UI/Button.svelte'

    type TreeNode = (
        | { type: 'folder'; name: string; children: string[] }
        | { type: 'page'; pageID: string }
    )

    const app = getAppContext()
    const directory = getDirectoryContext()
    const pages = getPagesContext()

    let tree = $derived(directory.tree);
    let expandedNodes: string[] = $state(['root'])
    let selectedNode: string = $state('root')
    let activeNode: string = $state('root')
    let parentNode: string = $derived.by(() => {
        for (const id in tree) {
            if (
                tree[id].type === 'folder' &&
                tree[id].children.includes(selectedNode)
            ) {
                return id
            }
        }
        return 'root'
    })
    let currentFolder = $derived(
        tree[selectedNode].type === 'folder' ? selectedNode : parentNode
    )

    function toggleNode(id: string) {
        if (tree[id].type === 'folder') {
            if (expandedNodes.includes(id)) {
                expandedNodes = expandedNodes.filter((node) => node !== id)
            } else {
                expandedNodes.push(id)
            }
        }
        else if (tree[id].type === 'page') {
            app.currentPageID = tree[id].pageID
        }
        selectedNode = id
        activeNode = id
    }

    function deleteSelectedNode() {
        if (confirm('Are you sure you want to delete?')) {
            directory.removeChild(parentNode, selectedNode)
        }
    }

    function newChild(type: 'folder' | 'page') {
        expandedNodes.push(currentFolder)

        if (type === 'folder') {
            directory.addSubfolder(currentFolder)
        } else if (type === 'page') {
            const id = crypto.randomUUID().slice(0, 8)
            pages[id] = {
                lastUpdated: Date.now(),
                title: 'Untitled',
                content: '',
            }
            directory.addPageID(currentFolder, id)
        }
    }

    /**
     * TODO: arrow keys
     *
     * left: close folder or navigate up
     * right: open folder or navigate down
     * up or shift+tab: navigate up
     * down or tab: navigate down
     * enter: open page or open folder
     * esc or click not on a button: deselect all
     * click outside the panel: close the panel
     *
     * do this by toggling tabindex from -1 to 0 and focus the button
     */
</script>

<div class="tree-panel theme-panel">
    <div class="controls">
        <p class="title">{app.username}</p>
        <Button
            iconURL="{base}/images/icons/font-awesome/folder-new.svg"
            onclick={() => newChild('folder')}
        />
        <Button
            iconURL="{base}/images/icons/font-awesome/feather.svg"
            onclick={() => newChild('page')}
        />
        <Button
            disabled={!selectedNode || selectedNode === 'root'}
            iconURL="{base}/images/icons/font-awesome/trash.svg"
            onclick={deleteSelectedNode}
        />
    </div>

    <div class="directory">
        {@render node(tree['root'])}
    </div>
</div>

{#snippet node(treeNode: TreeNode, depth = 0)}
    {#if treeNode.type === 'folder'}
        <ol style="--depth: {depth}">
            {#each treeNode.children as id}
                {#if tree[id].type === 'page'}
                    <li>
                        <div {id} class="button">
                            <Button
                                selected={activeNode === id}
                                tabindex={activeNode === id ? 0 : undefined}
                                iconURL="{base}/images/icons/font-awesome/feather.svg"
                                onclick={() => toggleNode(id)}
                                >{pages[tree[id].pageID].title}</Button
                            >
                        </div>
                    </li>
                {:else if tree[id].type === 'folder'}
                    <li>
                        {#if expandedNodes.includes(id)}
                            <div {id} class="button">
                                <Button
                                    selected={activeNode === id}
                                    tabindex={activeNode === id ? 0 : undefined}
                                    iconURL="{base}/images/icons/font-awesome/folder-open.svg"
                                    onclick={() => toggleNode(id)}
                                    >{tree[id].name}</Button
                                >
                            </div>
                            {@render node(tree[id], depth + 1)}
                        {:else}
                            <div {id} class="button">
                                <Button
                                    selected={activeNode === id}
                                    tabindex={activeNode === id ? 0 : undefined}
                                    iconURL="{base}/images/icons/font-awesome/folder-closed.svg"
                                    onclick={() => toggleNode(id)}
                                    >{tree[id].name}</Button
                                >
                            </div>
                        {/if}
                    </li>
                {/if}
            {/each}
        </ol>
    {/if}
{/snippet}

<style>
    .tree-panel {
        width: min-content;
        display: grid;
        gap: 1em;
    }

    .controls {
        display: flex;
        align-items: center;
    }
    .title {
        flex-grow: 1;
    }
    .directory {
        min-width: 200px;
        width: min-content;
    }
    ol .button {
        padding-left: calc(var(--depth) * var(--xl));
        width: 100%;
    }
</style>
