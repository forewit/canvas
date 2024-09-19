<script lang="ts">
    import { onMount } from 'svelte'

    type props = {
        gridTemplate: number[][] // each element is a row[column]
    }
    let { gridTemplate = $bindable() }: props = $props()

    let rowZoneCount = $state(0)
    let colZoneCount = $state(0)
    let gridItems: number[] = $state([])
    let gridTemplateStyle = $state('')
    let layoutGrid: string[][] = $state([])

    /**
     * Example:
     * gridTemplate = [
     *     [1, 2, 2, 3],
     *     [4, 5, 6, 3],
     *     [8, 8, 6, 9],
     * ]
     *
     * results in:
     * "c0 r0 r0 r0 r0 r0 r0 c5"  // r stands for a row zone
     * "c0 a1 c1 a2 a2 c2 a3 c5"  // a stands for a grid area
     * "c0 r1 r1 r1 r1 c2 a3 c5"  // c stands for a column zone
     * "c0 a4 c3 a5 a6 c2 a3 c5"
     * "c0 r2 r2 r2 a6 c2 r3 c5"
     * "c0 a8 a8 a8 a6 c2 a9 c5"
     * "c0 r4 r4 r4 r4 r4 r4 c5"
     */
    function updateLayout() {
        // initialize grid areas
        let grid = gridTemplate.map((row) => row.map((col) => `a${col}`))

        // insert row zones
        const colCount = grid[0].length
        grid.unshift(Array(colCount * 2 - 1).fill('r0'))

        let rowZone = 1
        // loop through all rows
        for (let i = 1; i < grid.length - 1; i++) {
            let newRow: string[] = []

            let thisRow = grid[i]
            let nextRow = grid[i + 1]
            // loop through all columns
            for (let j = 0; j < thisRow.length; j++) {
                if (thisRow[j] === nextRow[j]) {
                    newRow.push(thisRow[j])
                } else {
                    if (j > 0 && newRow[j - 1].startsWith('r')) {
                        newRow[j] = newRow[j - 1]
                    } else {
                        newRow.push('r' + rowZone)
                        rowZone++
                    }
                }
            }
            grid.splice(i + 1, 0, newRow)
            i++
        }

        grid.push(Array(colCount).fill('r' + rowZone))

        // insert column zones
        grid.forEach((row) => row.unshift('c0'))
        let colZone = 1

        //loop through each row
        for (let i = 1; i < grid.length; i++) {
            let thisRow = grid[i]
            let prevRow = grid[i - 1]

            // loop through each column
            for (let j = 1; j < thisRow.length - 1; j++) {
                if (thisRow[j] !== thisRow[j + 1]) {
                    // check if there is a column zone in the previous row
                    if (prevRow[j + 1].startsWith('c')) {
                        thisRow.splice(j + 1, 0, prevRow[j + 1])
                    } else {
                        // insert a column zone
                        thisRow.splice(j + 1, 0, 'c' + colZone)
                        colZone++
                    }
                } else {
                    // insert a grid area
                    thisRow.splice(j + 1, 0, thisRow[j])
                }
                j++
            }
        }

        // add final column zone
        grid.forEach((row) => row.push('c' + colZone))

        // update state
        rowZoneCount = rowZone + 1
        colZoneCount = colZone + 1
        gridItems = gridTemplate
            .flat()
            .filter((item, index, array) => array.indexOf(item) === index)
        layoutGrid = grid
        gridTemplateStyle = grid.map((row) => `"${row.join(' ')}"`).join('\n')
    }

    function getNextAreaNumber(): number {
        return gridTemplate.flat().reduce((a, b) => Math.max(a, b), 0) + 1
    }

    function splitVertically(gridArea: number) {}

    function splitHorizontally(gridArea: number) {
        const y = gridTemplate.findIndex((row) => row.includes(gridArea))
        const x = gridTemplate[y].indexOf(gridArea)
        const width = gridTemplate[y].lastIndexOf(gridArea) + 1 - x
        const height =
            gridTemplate.findLastIndex((row) => row.includes(gridArea)) + 1 - y

        console.log({ x, y, width, height })

        // if height is odd, add an extra row
    }

    function insertRow(rowZone: number) {
        console.log('insert row zone', rowZone)

        // find index of the matching row zone in the layout
        const i = layoutGrid.findIndex((row) => row.includes(`r${rowZone}`))
        const j = layoutGrid[i].indexOf(`r${rowZone}`)

        // adjust to size of original gridTemplate
        const x = (j - 1) / 2
        const y = i / 2
        const width = (layoutGrid[i].lastIndexOf(`r${rowZone}`) + 1) / 2 - x

        let newRow = Array(width).fill(getNextAreaNumber())
        if (y === 0) {
            gridTemplate.unshift(newRow)
        } else {
            let prevRow = gridTemplate[y - 1]
            // loop through columns
            for (let i = 0; i < prevRow.length; i++) {
                if (i < x || i >= x + width) {
                    newRow.splice(i, 0, prevRow[i])
                }
            }
            gridTemplate.splice(y, 0, newRow)
        }
        updateLayout()
    }

    function insertCol(colZone: number) {
        // find index of the matching col zone in the layout
        const i = layoutGrid.findIndex((row) => row.includes(`c${colZone}`))
        const j = layoutGrid.findLastIndex((row) => row.includes(`c${colZone}`))

        // adjust to size of original gridTemplate
        const x = layoutGrid[i].indexOf(`c${colZone}`) / 2
        const y = Math.max((i - 1) / 2, 0)
        const height = Math.min((j - i) / 2 + 1, gridTemplate.length)

        const newAreaNumber = getNextAreaNumber()
        // loop through rows
        for (let i = 0; i < gridTemplate.length; i++) {
            if (i < y || i >= y + height) {
                gridTemplate[i].splice(x, 0, gridTemplate[i][x])
            } else {
                gridTemplate[i].splice(x, 0, newAreaNumber)
            }
        }

        updateLayout()
    }

    onMount(() => {
        updateLayout()
    })
</script>

<div
    class="grid"
    style="grid-template-areas: {gridTemplateStyle}; 
            grid-template-columns: repeat({gridTemplate[0]
        .length}, min-content auto) min-content;
            grid-template-rows: repeat({gridTemplate.length}, min-content auto) min-content;"
>
    {#each gridItems as gridArea}
        <div class="grid-item" style="grid-area: a{gridArea};">
            {gridArea}
            <button class="top" onclick={() => splitHorizontally(gridArea)}
            ></button>
            <button class="bottom" onclick={() => splitHorizontally(gridArea)}
            ></button>
            <button class="left" onclick={() => splitVertically(gridArea)}
            ></button>
            <button class="right" onclick={() => splitVertically(gridArea)}
            ></button>
        </div>
    {/each}
    {#each Array(rowZoneCount) as _, i}
        <button
            class="row-zone"
            style="grid-area: r{i}"
            onclick={() => insertRow(i)}>r{i}</button
        >
    {/each}

    {#each Array(colZoneCount) as _, i}
        <button
            class="col-zone"
            style="grid-area: c{i}"
            onclick={() => insertCol(i)}>c{i}</button
        >
    {/each}
</div>

<style>
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        gap: 5px;

        --zone-size: 20px;
    }

    .row-zone {
        height: 20px;
        background-color: aquamarine;
    }

    .col-zone {
        width: 20px;
        background-color: aquamarine;
    }

    .grid-item {
        background-color: lightblue;
        position: relative;
        display: grid;
        place-content: center;
    }
    .grid-item > button {
        position: absolute;
        background: lightskyblue;
    }

    .top {
        top: 0;
        left: var(--zone-size);
        right: var(--zone-size);
        height: var(--zone-size);
    }
    .bottom {
        bottom: 0;
        left: var(--zone-size);
        right: var(--zone-size);
        height: var(--zone-size);
    }
    .left {
        top: var(--zone-size);
        bottom: var(--zone-size);
        left: 0;
        width: var(--zone-size);
    }
    .right {
        top: var(--zone-size);
        bottom: var(--zone-size);
        right: 0;
        width: var(--zone-size);
    }
</style>
