<script lang="ts">
    type Cell = { parent: string } & (
        | { split: 'none'; content: string }
        | { split: 'horizontal' | 'vertical'; id1: string; id2: string }
    )

    let cells: Record<string, Cell> = $state({
        root: { split: 'none', content: 'root', parent: 'none' },
    })

    function deleteCell(id: string) {
        const parentId = cells[id].parent

        if (cells[parentId] === undefined) {
            console.warn('Parent does not exist')
            return
        }
        if (cells[id].split !== 'none') {
            console.warn('cannot delete split cell')
            return
        }

        if (cells[parentId].split === 'none') {
            console.warn('bug? parent is not split')
            return
        }

//todo: fix
        cells[parentId] = cells[id]


        delete cells[id]
    }

    function splitCell(
        id: string,
        direction: 'right' | 'left' | 'up' | 'down'
    ) {
        const id1 = crypto.randomUUID().slice(0, 8)
        const id2 = crypto.randomUUID().slice(0, 8)

        const newChild: Cell = {
            split: 'none',
            content: '',
            parent: id,
        }

        cells[id1] = cells[id]
        cells[id2] = newChild

        cells[id] = {
            split:
                direction === 'left' || direction === 'right'
                    ? 'vertical'
                    : 'horizontal',
            id1: direction === 'left' || direction === 'up' ? id2 : id1,
            id2: direction === 'left' || direction === 'up' ? id1 : id2,
            parent: cells[id].parent,
        }
    }
</script>

<div class="grid">
    {@render cell('root')}
</div>

{#snippet zones(id: string)}
    <button class="top zone" onclick={() => splitCell(id, 'up')}></button>
    <button class="bottom zone" onclick={() => splitCell(id, 'down')}></button>
    <button class="left zone" onclick={() => splitCell(id, 'left')}></button>
    <button class="right zone" onclick={() => splitCell(id, 'right')}></button>
{/snippet}

{#snippet cell(id: string)}
    {#if cells[id].split === 'vertical'}
        <div class="cell vertical-split">
            {@render cell(cells[id].id1)}
            {@render cell(cells[id].id2)}
            {@render zones(id)}
        </div>
    {:else if cells[id].split === 'horizontal'}
        <div class="cell horizontal-split">
            {@render cell(cells[id].id1)}
            {@render cell(cells[id].id2)}
            {@render zones(id)}
        </div>
    {:else if cells[id].split === 'none'}
        <div class="cell">
            <button class="delete" onclick={() => deleteCell(id)}></button>
            <textarea name="" id="" bind:value={cells[id].content}> </textarea>
            {@render zones(id)}
        </div>
    {/if}
{/snippet}

<style>
    textarea {
        width: 100px;
        height: 100px;
    }
    .grid {
        display: grid;
        width: min-content;
    }

    .cell {
        outline: 1px solid black;
        min-height: 100%;
        min-width: 100%;
        width: min-content;
        height: min-content;
        display: grid;
        background-color: lightblue;
        position: relative;
        display: grid;
        place-content: center;
        padding: 12px;
        --zone-size: 10px;
    }

    .cell.vertical-split {
        grid-template-columns: min-content min-content;
        grid-template-rows: 100%;
    }
    .cell.horizontal-split {
        grid-template-rows: min-content min-content;
        grid-template-columns: 100%;
    }

    .cell .delete {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        background-color: lightcoral;
    }
    .zone {
        position: absolute;
        background: lightskyblue;
    }
    .zone.top {
        top: 0;
        left: var(--zone-size);
        right: var(--zone-size);
        height: var(--zone-size);
    }
    .zone.bottom {
        bottom: 0;
        left: var(--zone-size);
        right: var(--zone-size);
        height: var(--zone-size);
    }
    .zone.left {
        top: var(--zone-size);
        bottom: var(--zone-size);
        left: 0;
        width: var(--zone-size);
    }
    .zone.right {
        top: var(--zone-size);
        bottom: var(--zone-size);
        right: 0;
        width: var(--zone-size);
    }
</style>
