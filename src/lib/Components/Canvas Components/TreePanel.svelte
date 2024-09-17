<script lang="ts">
    import { base } from '$app/paths'
    import Button from '$lib/Components/UI/Button.svelte'

    type props = {
        tree: Record<string, TreeNode>
        //TODO: add a callback so I can set the new ID as active after creating
        newFolder?: (parent: string) => void
        newPage?: (parent: string) => void
        removeChild?: (parent: string, child: string) => void
        active?: boolean
    }

    let {
        tree,
        newFolder = () => {},
        newPage = () => {},
        removeChild = () => {},
        active = true,
    }: props = $props()

    type TreeNode = {
        name: string
    } & (
        | { type: 'folder'; children: string[] }
        | { type: 'page'; pageID: string }
    )

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

    function toggleNode(id: string) {
        if (tree[id].type === 'folder') {
            if (expandedNodes.includes(id)) {
                expandedNodes = expandedNodes.filter((node) => node !== id)
            } else {
                expandedNodes.push(id)
            }
        }
        selectedNode = id
        activeNode = id
    }

    function deleteChildNode(id: string) {
        if (confirm('Are you sure you want to delete?')) {
            removeChild(parentNode, id)
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
     *
     * do this by toggling tabindex from -1 to 0 and focus the button
     */
</script>

<div class="tree-panel theme-panel">
    <div class="controls">
        <p class="title">My Project</p>

        <Button
            iconURL="{base}/images/icons/font-awesome/folder-new.svg"
            onclick={() => {
                if (tree[activeNode].type === 'folder') {
                    expandedNodes.push(activeNode)
                    selectedNode = activeNode
                    newFolder(activeNode)
                } else {
                    newFolder(parentNode)
                }
            }}
        />
        <Button
            iconURL="{base}/images/icons/font-awesome/feather.svg"
            onclick={() => {
                if (tree[activeNode].type === 'folder') {
                    expandedNodes.push(activeNode)
                    selectedNode = activeNode
                    newPage(activeNode)
                } else {
                    newPage(parentNode)
                }
            }}
        />
        <Button
            disabled={!selectedNode || selectedNode === 'root'}
            iconURL="{base}/images/icons/font-awesome/trash.svg"
            onclick={() => {
                deleteChildNode(selectedNode)
            }}
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
                                onclick={() => {
                                    toggleNode(id)
                                }}>{tree[id].name}</Button
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
                                    onclick={() => {
                                        toggleNode(id)
                                    }}>{tree[id].name}</Button
                                >
                            </div>
                            {@render node(tree[id], depth + 1)}
                        {:else}
                            <div {id} class="button">
                                <Button
                                    selected={activeNode === id}
                                    tabindex={activeNode === id ? 0 : undefined}
                                    iconURL="{base}/images/icons/font-awesome/folder-closed.svg"
                                    onclick={() => {
                                        toggleNode(id)
                                    }}>{tree[id].name}</Button
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
