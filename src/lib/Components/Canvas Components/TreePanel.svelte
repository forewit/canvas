<script lang="ts">
    import { base } from '$app/paths'
    import { getDirectoryContext } from '$lib/directories.svelte'
    import { getPagesContext } from '$lib/pages.svelte'
    import { getAppContext } from '$lib/app.svelte'
    import Button from '$lib/Components/UI/Button.svelte'
    import { onMount } from 'svelte'
    import { toStore } from 'svelte/store'

    type TreeNode =
        | { type: 'folder'; name: string; children: string[] }
        | { type: 'page'; pageID: string }

    const app = getAppContext()
    const directory = getDirectoryContext()
    const pages = getPagesContext()

    let tree = $derived(directory.tree)
    let expandedNodes: string[] = $state(['root'])
    let selectedNode: string = $state('root')
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
        } else if (tree[id].type === 'page') {
            app.currentPageID = tree[id].pageID
        }
        selectedNode = id
    }

    function deleteSelectedNode() {
        if (
            selectedNode !== 'root' &&
            confirm('Are you sure you want to delete?')
        ) {
            directory.removeChild(parentNode, selectedNode)
            selectedNode = 'root'
            blur()
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

    let treePanel: HTMLDivElement
    let buttons = $derived.by(() => {
        if (expandedNodes.length >= 0 && treePanel)
            return Array.from(treePanel.querySelectorAll('button'))
        else return []
    })
    let selectedNodeButtonIndex = $derived(
        buttons.findIndex((button) => button.id === selectedNode)
    )
    let activeButtonIndex = $state(0)

    $effect(() => {
        if (selectedNode !== 'root') {
            activeButtonIndex = selectedNodeButtonIndex
        } else {
            activeButtonIndex = -1
        }
    })

    function navigateUp() {
        activeButtonIndex = Math.min(
            buttons.length - 1,
            Math.max(0, activeButtonIndex - 1)
        )
        if (buttons[activeButtonIndex].id === 'delete-node') {
            navigateUp()
            return
        }
        buttons[activeButtonIndex].focus()
        if (tree[buttons[activeButtonIndex].id] !== undefined) {
            selectedNode = buttons[activeButtonIndex].id
        } else {
            selectedNode = 'root'
        }
    }

    function navigateDown() {
        activeButtonIndex = Math.max(
            0,
            Math.min(buttons.length - 1, activeButtonIndex + 1)
        )
        if (buttons[activeButtonIndex].id === 'delete-node') {
            if (buttons.length > 3) {
                navigateDown()
            } else {
                navigateUp()
            }
            return
        }
        buttons[activeButtonIndex].focus()
        if (tree[buttons[activeButtonIndex].id] !== undefined) {
            selectedNode = buttons[activeButtonIndex].id
        }
    }

    function blur() {
        buttons.forEach((button) => {
            button.blur()
        })
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            blur()
            selectedNode = 'root'
        } else if (e.key === 'Enter') {
            if (selectedNode !== 'root' && e.target === document.body) {
                toggleNode(selectedNode)
                e.preventDefault()
            }
        } else if (e.key === 'Delete') {
            deleteSelectedNode()
        } else if (e.key === 'ArrowLeft') {
            if (
                tree[selectedNode].type === 'folder' &&
                selectedNodeButtonIndex !== -1 &&
                expandedNodes.includes(selectedNode)
            ) {
                expandedNodes = expandedNodes.filter(
                    (node) => node !== selectedNode
                )
            } else {
                navigateUp()
            }
        } else if (e.key === 'ArrowRight') {
            if (
                tree[selectedNode].type === 'folder' &&
                selectedNodeButtonIndex !== -1 &&
                !expandedNodes.includes(selectedNode)
            ) {
                expandedNodes.push(selectedNode)
            } else {
                navigateDown()
            }
        } else if (e.key === 'ArrowUp') {
            navigateUp()
        } else if (e.key === 'ArrowDown') {
            navigateDown()
        }
    }
    function handleClick(e: MouseEvent) {
        if (
            buttons.findIndex(
                (button) => button.id === (e.target as HTMLElement).id
            ) === -1
        ) {
            blur()
            selectedNode = 'root'
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClick)
        document.addEventListener('keydown', handleKeydown)

        return () => {
            document.removeEventListener('click', handleClick)
            document.removeEventListener('keydown', handleKeydown)
        }
    })
</script>

<div class="tree-panel theme-panel" bind:this={treePanel}>
    <div class="controls">
        <p class="title">{app.username}</p>
        <Button
            id="new-folder"
            iconURL="{base}/images/icons/font-awesome/folder-new.svg"
            onclick={() => newChild('folder')}
        />
        <Button
            id="new-page"
            iconURL="{base}/images/icons/font-awesome/feather.svg"
            onclick={() => newChild('page')}
        />
        <Button
            id="delete-node"
            disabled={!selectedNode || selectedNode === 'root'}
            iconURL="{base}/images/icons/font-awesome/trash.svg"
            onclick={() => {
                deleteSelectedNode()
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
                        <div class="button">
                            <Button
                                {id}
                                selected={selectedNode === id}
                                iconURL="{base}/images/icons/font-awesome/feather.svg"
                                onclick={() => toggleNode(id)}
                                >{pages[tree[id].pageID].title}</Button
                            >
                        </div>
                    </li>
                {:else if tree[id].type === 'folder'}
                    <li>
                        {#if expandedNodes.includes(id)}
                            <div class="button">
                                <Button
                                    {id}
                                    selected={selectedNode === id}
                                    iconURL="{base}/images/icons/font-awesome/folder-open.svg"
                                    onclick={() => toggleNode(id)}
                                    >{tree[id].name}</Button
                                >
                            </div>
                            {@render node(tree[id], depth + 1)}
                        {:else}
                            <div class="button">
                                <Button
                                    {id}
                                    selected={selectedNode === id}
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
