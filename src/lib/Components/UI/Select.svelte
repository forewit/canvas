<script lang="ts">
    type props = {
        id?: string
        name?: string
        options: string[]
        value: string
    }

    let {
        id,
        name = 'Select one',
        options,
        value = $bindable(),
    }: props = $props()
</script>

<select {name} {id} bind:value>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>
