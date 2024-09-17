<script lang="ts">
    import exp from 'constants'
    import { onMount } from 'svelte'

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

    //TODO: arrow keys
    /**
     * left: close folder or navigate up
     * right: open folder or navigate down
     * up or shift+tab: navigate up
     * down or tab: navigate down
     * enter: open page or open folder
     *
     * do this by toggling tabindex from -1 to 0 and focus the button
     */

    let directoryElm: HTMLDivElement
    let directoryButtons: HTMLButtonElement[] = $state([])
    let currentButtonIndex = $derived(
        directoryButtons.findIndex((button) => button.id === selectedNode)
    )

    $effect(() => {
        if (expandedNodes.length > 0 && Object.keys(tree).length > 0) {
            directoryButtons = Array.from(
                directoryElm.querySelectorAll('button')
            )
        } else {
            directoryButtons = []
        }
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

    function navigateUp() {
        if (currentButtonIndex > 0) {
            const button = directoryButtons[currentButtonIndex - 1]
            selectedNode = button.id
            button.focus()
        }
    }

    function navigateDown() {
        if (currentButtonIndex < directoryButtons.length - 1) {
            const button = directoryButtons[currentButtonIndex + 1]
            selectedNode = button.id
            button.focus()
        }
    }

    function clearFocus() {
        console.log('clear focus')
        selectedNode = 'root'
        activeNode = 'root'
        directoryButtons.forEach((button) => button.blur())
    }

    function deleteChildNode(id: string) {
        if (confirm('Are you sure you want to delete?')) {
            removeChild(parentNode, id)
            navigateUp()
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        console.log()
        if (
            !active ||
            (tree['root'].type === 'folder' &&
                tree['root'].children.length <= 0)
        ) {
            return
        }

        switch (event.key) {
            case 'ArrowLeft':
                if (expandedNodes.includes(selectedNode)) {
                    toggleNode(selectedNode)
                } else {
                    navigateUp()
                }
                break
            case 'ArrowRight':
                if (
                    tree[selectedNode].type === 'folder' &&
                    selectedNode !== 'root' &&
                    !expandedNodes.includes(selectedNode)
                ) {
                    toggleNode(selectedNode)
                } else {
                    navigateDown()
                }
                break
            case 'ArrowUp':
                navigateUp()
                break
            case 'ArrowDown':
                navigateDown()
                break
            case 'Enter':
                event.preventDefault()
                toggleNode(selectedNode)
                break
            case 'Escape':
                clearFocus()
                break
            case 'Tab':
                event.preventDefault()
                if (event.shiftKey) {
                    navigateUp()
                } else {
                    navigateDown()
                }
                break
            case 'Delete':
                //remove with confirmation
                deleteChildNode(selectedNode)
                break
        }
    }
    onMount(() => {
        document.addEventListener('keydown', handleKeydown)
        return () => {
            document.removeEventListener('keydown', handleKeydown)
        }
    })
</script>

<div class="tree">
    <div class="controls">
        <p class="title">My Project</p>
        <button
            onclick={() => {
                if (tree[activeNode].type === 'folder') {
                    expandedNodes.push(activeNode)
                    selectedNode = activeNode
                    newFolder(activeNode)
                } else {
                    newFolder(parentNode)
                }
            }}>+📂</button
        >
        <button
            onclick={() => {
                if (tree[activeNode].type === 'folder') {
                    expandedNodes.push(activeNode)
                    selectedNode = activeNode
                    newPage(activeNode)
                } else {
                    newPage(parentNode)
                }
            }}>+📜</button
        >
        <button
            disabled={!selectedNode || selectedNode === 'root'}
            class="delete-button"
            onclick={() => {
                deleteChildNode(selectedNode)
            }}>-🗑️</button
        >
    </div>

    <div class="directory" bind:this={directoryElm}>
        {@render node(tree['root'])}
    </div>
</div>

{#snippet node(treeNode: TreeNode, depth = 0)}
    {#if treeNode.type === 'folder'}
        <ol style="--depth: {depth}">
            {#each treeNode.children as id}
                {#if tree[id].type === 'page'}
                    <li>
                        <button
                            {id}
                            class:active={activeNode === id}
                            class:selected={selectedNode === id}
                            onclick={() => {
                                toggleNode(id)
                            }}>📜 {tree[id].name}</button
                        >
                    </li>
                {:else if tree[id].type === 'folder'}
                    <li>
                        {#if expandedNodes.includes(id)}
                            <button
                                {id}
                                class:active={activeNode === id}
                                class:selected={selectedNode === id}
                                onclick={() => {
                                    toggleNode(id)
                                }}>📂 {tree[id].name}</button
                            >
                            {@render node(tree[id], depth + 1)}
                        {:else}
                            <button
                                {id}
                                class:active={activeNode === id}
                                class:selected={selectedNode === id}
                                onclick={() => {
                                    toggleNode(id)
                                }}>📁 {tree[id].name}</button
                            >
                        {/if}
                    </li>
                {/if}
            {/each}
        </ol>
    {/if}
{/snippet}

<style>
    .tree {
        background: var(--bg-alt);
        width: min-content;
        padding: 1em;
        border-radius: 4px;
        display: grid;
        gap: 1em;
    }

    .controls {
        display: flex;
    }
    .title {
        flex-grow: 1;
    }
    .delete-button:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    .directory {
        min-width: 200px;
        width: min-content;
    }
    ol button {
        padding-left: calc(var(--depth) * 1em);
        width: 100%;
        justify-content: left;
        display: flex;
    }
    .selected {
        outline: 2px solid gold;
    }

    .active {
        color: red;
    }
</style>
