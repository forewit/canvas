<script lang="ts">
    import { type Snippet } from 'svelte'
    type Props = {
        children?: Snippet
        checked?: boolean
        id?: string
        variant?: 'alt'
    }

    let { variant, children, checked = $bindable(true), id }: Props = $props()
</script>

<label for={id}>
    <input type="checkbox" {id} bind:checked />
    {#if children}
        {@render children()}
    {/if}
</label>

<style>
    label {
        cursor: pointer;
        display: flex;
        width: fit-content;
        gap: var(--m);
    }

    input {
        appearance: none;
        border: none;
        position: relative;
        min-width: 2.2em;
        height: 1.2em;
        padding: 2px;
        border-radius: 100vh;
        background-color: var(--bg-alt);
        cursor: pointer;
    }

    input:before {
        content: '';
        display: block;
        position: absolute;
        width: calc(1.2em - 4px);
        aspect-ratio: 1;
        border-radius: 100vh;
        z-index: 2;

        background-color: var(--bg);
    }

    input:checked {
        background-color: var(--main);
    }

    input:checked:before {
        left: 1.1em;
    }

    input:focus-visible {
        outline: var(--xs) dashed var(--main);
    }
</style>
